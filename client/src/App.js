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
import { Player } from 'video-react';
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


  //componentDidUpdate(){
    //console.log(this.player.subscribeToStateChang);
    //this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  //}


  handleVideoTimeUpdate(event){

    var breakPoint = this.state.breakPoint;

    if(this.state.showQuiz == false && event.currentTarget.currentTime >= breakPoint){
      this.setState({showQuiz: true});
    }
  }

  // load content of next question, skip if the question object is a title
  load_question(counter, questionId){
    // skip if is title
    while('sectionTitle' in this.currentQuestion[counter]){
      // this is a section title, not a question! shift counter and questionID by 1
      questionId +=1;
      counter +=1;
    }

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
    
    return (
      <div className = "quiz-wrapper">
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

  render() {

    return (

      <div className="App">
        
        <div className = "App-body">

            <script type="text/javascript" src="/Riy1/viewer.js?w=600&780"></script>

          <div className = "quiz-player-wrapper">
            <Player
              ref={player => {
                this.player = player;
              }}
              
              className='quiz-player'
              playsInline
              onTimeUpdate={(event)=>this.handleVideoTimeUpdate(event)}
              
              muted
              poster="/assets/poster.png"
              src={this.state.videoUrl}

            />
            
                {this.state.result ? this.renderResult() : this.renderQuiz()}
           
          </div>
        </div>
        
      </div>
    );
  }
}
//<iframe src="https://drive.google.com/file/d/1Ar2wEe23l4lwShmXeoPbCL4yt60eu8nk/preview" width="640" height="480"></iframe>
/*

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
