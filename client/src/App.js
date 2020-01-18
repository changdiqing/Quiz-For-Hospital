import React from 'react';
import update from 'react-addons-update'
//import logo from './svg/icon.png';
import logo from './svg/logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/video-react/dist/video-react.css"; 
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import CoverPage from './components/CoverPage';
//import quizQuestions from './api/testQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ReactPlayer from 'react-player';
import { Player, BigPlayButton} from 'video-react';
import Button from '@material-ui/core/Button';
import FileSelection from './components/FileSelection';
import Dashboard from "./components/Dashboard";
import PatientSelection from "./components/PatientSelection";
import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import {BrowserRouter, Route} from 'react-router-dom'

Amplify.configure(awsmobile);
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     uiType: '',
     answersCount: {
       Nintendo: 0,
       Microsoft: 0,
       Sony: 0
     },
     breakPoint: 0,
     posIndex:0,
     result: '',
     showQuiz: false,
     videoUrl: '',
     response: 'reponse',
     post: 'post',
     responseToPost: '',
     showCover: true,
    };

    this.history = new Array();
    this.rewindFromComponent = this.rewindFromComponent.bind(this);
    this.quizStart = this.quizStart.bind(this);
    this.handleVideoTimeUpdate = this.handleVideoTimeUpdate.bind(this);
    this.currentQuestion = new Array();

    // This patient_data will save the patient's answers during quiz.
    // will be save to DB after quiz is finished, for data structure please refer
    // var max_musterman in /server.jsreac
    this.patient_data={
      name: "frontend musterman",
      personalId: "frontend-musterman",
      quizAnswers:[
        
        ]
      };

    this.playButtonStyle = {
      display: 'none'
    };

    }

  componentWillMount(){
    
  }

  componentDidMount(){
    //this.callApi()
    //  .then(res => this.setState({ response: res.express}))
  }


  // API Calls to node.js backend
  fetchPatientList = async () => {
    const response = await fetch('/api/fetch-patient-list');
    const body = await response.json();
    console.log(response.status);
    if (response.status !== 200) throw Error(body.message);
    var plist = body;
    return plist;
  };

  fetchDataByID = async (id) => {
    const response = await fetch('/api/fetch-data-by-id',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id}),
    });
    const body = await response.json();
    if (response.status !== 201) throw Error(body.message);
    var patient_data = body;
    return patient_data;
  };
  
  savePatientData = async (patient_data) => {
    //e.preventDefault();
    const response = await fetch('/api/add-patient-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: this.patient_data }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

  removeDataByID = async (id) => {
    const response = await fetch('/api/remove-data-by-id',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id}),
    });
    const body = await response.json();
    if (response.status !== 201) throw Error(body.message);
  };

  // Methods: local video pre-render, Contributor: Patrick Wizigmann

  getVideoList(questionIndex){
    /* This function builds an list of videos,videoList[0] should be the current playing video, rest should be it's possible followers*/
    const question = this.currentQuestion[questionIndex];
    var videoList= new Array();
    videoList.push({id: question.id, url: question.videoUrl});

    function add(item) {
      const found = videoList.some(el => el.id === item.id);
      if (!found) videoList.push(item);
      console.log(item);
    }

    var followerId;
    var follower;
    // are there follower saved after first question?
    // if yes then catch all followerIDs (set not array)
    if("follower" in question.answers[0]){
      console.log("we have followers!");
      question.answers.map((key, index)=>{
        followerId = key.follower;
        follower = quizQuestions[followerId][0];
        add({id:follower.id, url: follower.videoUrl});
      });
    // else if is not end of question list
    // pick next question as follower
    }else if (questionIndex+1 < this.currentQuestion.length) {
      console.log("we have no follower but next element!");
      const follower = this.currentQuestion[questionIndex+1];
      add({id:follower.id, url: follower.videoUrl});
    }
    return videoList;
  } 

  handleVideoTimeUpdate(event){

    if(this.state.showQuiz == false && event.currentTarget.currentTime >= this.state.breakPoint){
      this.setState({showQuiz: true});
    }
  }

  // load content of next question, skip if the question object is a title
  load_question(counter, questionId){
    
    const videoList = this.getVideoList(counter);

    console.log("and my videoList is:");
    console.log(videoList);

    this.setState(
      {
        questionId: questionId,
        counter: counter,
        answer: '',
        question: this.currentQuestion[counter].question,
        answerOptions: this.currentQuestion[counter].answers,
        videoUrl: this.currentQuestion[counter].videoUrl,
        uiType: this.currentQuestion[counter].uiType,
        breakPoint: this.currentQuestion[counter].breakPoint,
        videoList: videoList,
        posIndex: this.currentQuestion[counter].posIndex,
        showQuiz : false
      }, () => {
        if(!this.state.showCover){
      this.player.play();
    }
    }
    );

  }

  // load question list from dictionary quizQuestions
  load_qList(String){
    //load question from dict by name
    this.currentQuestion = quizQuestions[String];
    
    this.load_question(0,1);
  }

  setUserAnswer(answer){
    /*console.log(this.state.answersCount);
    console.log(answer);*/
    this.history.push({
      question: this.currentQuestion[this.state.counter].question,
      answer: answer
    });

    this.patient_data.quizAnswers.push({
      question: this.currentQuestion[this.state.counter].question,
      id: this.currentQuestion[this.state.counter].id,
      answer: answer
    });
  }

  setNextQuestion(){
    const counter = this.state.counter +1;
    const questionId = this.state.questionId +1;

    this.load_question(counter,questionId);
  }

  rewindFromComponent(result) {

    this.setUserAnswer(result);

    if("follower" in result[0]){
      this.load_qList(result[0].follower);
    }else if (this.state.questionId < this.currentQuestion.length) {
        setTimeout(() => this.setNextQuestion(), 300);
    } else {
        this.savePatientData(this.patient_data);
        setTimeout(()=>this.setResults('undetermined'),300);

    }
  }

  setResults(result){
    this.setState({
        result: 'Undetermined'
      });
  }

  quizStart(){
    this.setState({
      showCover: false
    });
    this.player.play();
  }

  render() {
    return (
    <BrowserRouter>
     <div>
     <Route exact path='/' component={PatientSelection}/>
     <Route path='/dashboard' component={Dashboard}/>
     </div>
     </BrowserRouter>
    );
  }
}

export default withAuthenticator(App, true);
