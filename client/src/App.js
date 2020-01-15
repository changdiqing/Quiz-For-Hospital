import React from 'react';
import update from 'react-addons-update'
import logo from './svg/icon.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/video-react/dist/video-react.css"; 
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
//import quizQuestions from './api/testQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ReactPlayer from 'react-player';
import { Player, BigPlayButton} from 'video-react';
import Button from '@material-ui/core/Button';
import FileSelection from './components/FileSelection';

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
    };

    this.history = new Array();
    this.rewindFromComponent = this.rewindFromComponent.bind(this);
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
    //const this.currentQuestion = quizQuestions.map((question)=>this.shuffledArray(question.answers));

    this.load_qList('initQuestions');
  }

  componentDidMount(){
    //this.callApi()
    //  .then(res => this.setState({ response: res.express}))
  }


  // API Calls to node.js backend
  fetchPatientList = async () => {
    /*
      fetch a list of {int: id, string: patient}
    */
    const response = await fetch('/api/fetch-patient-list');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);

    //var patient_list = JSON.parse(body);
    //console.log(patient_list);
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



  //componentDidUpdate(){
    //console.log(this.player.subscribeToStateChang);
    //this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  //}


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
      this.player.play();
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
        /* a lot of  ()=> used for embedded functions. function will be called
        after 300ms. This delay is simply a UX decision made so that the user
        has a moment to see the visual feedback indicating that their selection
        has been made.*/
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

  renderQuiz(){

    var defaultPos = [
      {
        top: "150px",
        left: "150px"
      },
      {
        top: "150px",
        left: "800px"
      },
      {
        top: "500px",
        left: "450px"
      },
    ];
    
    return (
      <div className = "quiz-wrapper" style={defaultPos[this.state.posIndex]}>
          <Quiz
          answer={this.state.answer}
          answerOptions={this.state.answerOptions}
          questionId={this.state.questionId}
          question={this.state.question}
          rewindFromComponent={this.rewindFromComponent}
          isVisible={this.state.showQuiz}
          uiType={this.state.uiType}
          />
      </div>
      )
  }

  renderResult(){
    return(
      <div className = "result-wrapper">
        <Result quizResult={this.state.result} history={this.history}/>
      </div>
      )
  }

  renderPlayer(video, style){
    return (
      <div className='quiz-player' key = {'playerdiv'+video.id} style={style}>
        <Player
          ref={player => {
            this.player = player;
          }}
          key = {video.id}
          playsInline
          onTimeUpdate={(event)=>this.handleVideoTimeUpdate(event)}
          autoPlay={false}
          
          src={video.url}>
        </Player>
      </div>
      )
  }

  renderPreloadPlayer(video, style){
    return (
      <div className='quiz-player' key = {'playerdiv'+video.id} style={style}>
        <Player
          key = {video.id}
          playsInline
          onTimeUpdate={(event)=>this.handleVideoTimeUpdate(event)}
          autoPlay={false}
          
          src={video.url}>
        </Player>
      </div>
      )
  }


  render() {

    return (

      <div className="App">
        
        <div className = "App-body">

          <script type="text/javascript" src="/Riy1/viewer.js?w=600&780"></script>

          <div className = "quiz-player-wrapper">
            {this.state.videoList.map((video, index) => {
              console.log(video);
              if(index === 0){
                return(this.renderPlayer(video,{ visibility:"visible" }));
              }else{
                return(this.renderPreloadPlayer(video,{ visibility:"hidden", height: 1}));
              }
            })}


            {this.state.result ? this.renderResult() : this.renderQuiz()}
           
          </div>
        </div>
        
      </div>
    );
  }
}
//<iframe src="https://drive.google.com/file/d/1Ar2wEe23l4lwShmXeoPbCL4yt60eu8nk/preview" width="640" height="480"></iframe>
/*



            {this.state.videoList.map((video, index) => {
              if(index === 0) this.renderPlayer(video)
              if(index !== 0) this.renderPlayer(video)
            })}

            {this.state.videoList.map((video, index) => {
              if(index === 0) this.renderPlayer(video)
              if(index !== 0) this.renderPlayer(video, {visibility: 'hidden', height: 1})
            })}

<Player
              ref={player => {
                this.player = player;
              }}
              
              className='quiz-player'
              playsInline
              onTimeUpdate={(event)=>this.handleVideoTimeUpdate(event)}
              autoPlay
              muted
              poster="/assets/poster.png"
              src={this.state.videoUrl}
            />

*/
export default App;
