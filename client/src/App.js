import React from 'react';
import update from 'react-addons-update'
import logo from './svg/icon.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/video-react/dist/video-react.css"; 
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import ReactPlayer from 'react-player';
import { Player } from 'video-react';
import Button from '@material-ui/core/Button';

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
     response: 'niuniu reponse',
     post: 'niuniu post',
     responseToPost: '',
    };

    this.history = new Array();
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    this.rewindFromComponent = this.rewindFromComponent.bind(this);
    this.handleVideoTimeUpdate = this.handleVideoTimeUpdate.bind(this);
    this.currentQuestion = new Array();

    // This patient_data will save the patient's answers during quiz.
    // will be save to DB after quiz is finished

    this.patient_data={
      name: "frontend musterman",
      personalId: "frontend-musterman",
      quizAnswers:[
        {
          question: "How much you drink on average per day?",
          id: "drink_amount1",
          //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
          answers: [
              {
                  type: "ca. 1 Liter",
                  content: "ca. 1 Liter"
              },
              {
                  type: "ca. 1.5-2 Liter",
                  content: "ca. 1.5-2 Liter"
              },
              {
                  type: "ca. 2-3 Liter",
                  content: "ca. 2-3 Liter"
              }
          ]
        },
        {
          question: "How much you drink on average per day?",
          id: "drink_amount2",
          //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
          answers: [
              {
                  type: "ca. 1 Liter",
                  content: "ca. 1 Liter"
              },
              {
                  type: "ca. 1.5-2 Liter",
                  content: "ca. 1.5-2 Liter"
              },
              {
                  type: "ca. 2-3 Liter",
                  content: "ca. 2-3 Liter"
              }
          ]
        },
        {
          question: "How much you drink on average per day?",
          id: "drink_amount5",
          //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
          answers: [
              {
                  type: "ca. 1 Liter",
                  content: "ca. 1 Liter"
              },
              {
                  type: "ca. 1.5-2 Liter",
                  content: "ca. 1.5-2 Liter"
              },
              {
                  type: "ca. 2-3 Liter",
                  content: "ca. 2-3 Liter"
              }
            ]
          }
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
    console.log(plist[0].patient);
    
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
    if (response.status !== 200) throw Error(body.message);

    var patient_data = body;
    console.log(patient_data);
    //console.log(body.quizAnswers[0]['content']);

    
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
    console.log(body);
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
    if (response.status !== 200) throw Error(body.message);
  };


  //componentDidUpdate(){
    //console.log(this.player.subscribeToStateChang);
    //this.player.subscribeToStateChange(this.handleStateChange.bind(this));
  //}


  handleVideoTimeUpdate(event){

    var breakPoint = this.state.breakPoint;

    if(event.currentTarget.currentTime >= breakPoint){
      this.setState({showQuiz: true});
    } else {
      this.setState({showQuiz: false});
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

    console.log('So the history is');
    console.log(this.history);

    const updateAnswersCount = update(

      this.state.answersCount,
      {[answer]: {$apply: (currentValue)=> currentValue + 1}}
      );

    console.log(updateAnswersCount);
    this.setState({
        answersCount: updateAnswersCount,
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
    
    if("follower" in this.currentQuestion[this.state.counter].answers[1]){
      this.load_qList('secondQuestion');

    }else if (this.state.questionId < this.currentQuestion.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        /* a lot of  ()=> used for embedded functions. function will be called
        after 300ms. This delay is simply a UX decision made so that the user
        has a moment to see the visual feedback indicating that their selection
        has been made.*/
    } else {
        setTimeout(()=>this.setResults(this.getResults()), 300);

    }
  }

  handleAnswerSelected(event) {

    this.setUserAnswer(event.currentTarget.value);
    
    if("follower" in this.currentQuestion[this.state.counter].answers[1]){
      this.load_qList('secondQuestion');

    }else if (this.state.questionId < this.currentQuestion.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        /* a lot of  ()=> used for embedded functions. function will be called
        after 300ms. This delay is simply a UX decision made so that the user
        has a moment to see the visual feedback indicating that their selection
        has been made.*/
    } else {
        setTimeout(()=>this.setResults('undetermined', 300));

    }
  }


  obsolete_getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);  /*Object.keys returns array of string*/
    const answersCountValues = answersCountKeys.map((key)=>answersCount[key]);  /* return array of values */
    const maxAnswerCount = Math.max.apply(null, answersCountValues);  /* returns max of the array of values */
    answersCountKeys.filter((key)=> answersCount[key]===maxAnswerCount);

    var x;
    for(x in answersCount){
      console.log(answersCount[x]);
    }

    return answersCountKeys.filter((key)=> answersCount[key]===maxAnswerCount);
    /* return the element 'key' that fits the filtering requirement */
  }

  setResults(result){

    this.setState({
        result: 'Undetermined'
      });

    /*
    if(result.length === 1){
      this.setState({
        result: result[0]
      });
    } else {
      this.setState({
        result: 'Undetermined'
      });
    }
    */
  }

  renderQuiz(){
    
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={this.currentQuestion.length}
        onAnswerSelected={this.handleAnswerSelected}
        rewindFromComponent={this.rewindFromComponent}
        isVisible={this.state.showQuiz}
        uiType={this.state.uiType}
        />
      )
  }

  renderResult(){
    return(
      <Result quizResult={this.state.result} history={this.history}/>
      )
  }

  getDBContent(){
    console.log("get db content");
  }

  getDataByID(){
    console.log("get data by id");
  }

  saveDataToDB(){
    console.log("save data");
  }

  render() {
    return (

      <div className="App">
        <div className = "sidenav">

          <header className="App-header">
            <img style={{"height" : "auto", "width" : "50%"}} src={logo} className="App-logo" alt="logo" /> 
            <h2 style={{zIndex: 90}} >React Quiz</h2>
            <Button 
            variant="contained" color="primary"
            onClick={this.fetchPatientList}
            style={{margin:"10px"}}
            >list all patients</Button>
            
            <Button 
            variant="contained" color="primary"
            onClick={()=>this.savePatientData(this.patient_data)}
            style={{margin:"10px"}}
            >save sample to DB</Button>

            <Button 
            variant="contained" color="primary"
            onClick={()=>this.fetchDataByID(5)}
            style={{margin:"10px"}}
            >get data by id</Button>

            <Button 
            variant="contained" color="primary"
            onClick={()=>this.removeDataByID(5)}
            style={{margin:"10px"}}
            >remove data by id</Button>

          </header>

        </div>
        
        <div className = "App-body">
            <script type="text/javascript" src="/Riy1/viewer.js?w=600&780"></script> 
          <div className = "quiz-player-wrapper">
            <Player
              ref={player => {
                this.player = player;
              }}
              
              className='quiz-player'
              playsInline
              onTimeUpdate={this.handleVideoTimeUpdate}
              autoPlay
              muted
              poster="/assets/poster.png"
              src={this.state.videoUrl}
            />
            <div className = "quiz-wrapper">
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>          
          </div>
        </div>
        
      </div>
    );
  }
}
//<iframe src="https://drive.google.com/file/d/1Ar2wEe23l4lwShmXeoPbCL4yt60eu8nk/preview" width="640" height="480"></iframe>
/*

<Question content="What is your favourite Entertainment Company?" />

<div className = "sidenav">

          <header className="App-header">
            <img style={{"height" : "auto", "width" : "50%"}} src={logo} className="App-logo" alt="logo" /> 
            <h2 style={{zIndex: 90}} >React Quiz</h2>     
          </header>
        </div>

<div className = "quiz-player-wrapper">
            <ReactPlayer
                className='react-player'
                url= {this.state.videoUrl}
                width='100%'
                height='100%'
                playing={true}
                onEnded={() => this.setState({showQuiz: true})}
              />
            <div className = "quiz-wrapper">
              {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
          </div>
*/
export default App;
