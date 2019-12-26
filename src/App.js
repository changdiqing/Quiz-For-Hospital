import React from 'react';
import update from 'react-addons-update'
import logo from './svg/icon.png';
import './App.css';
import Question from './components/Question';
import quizQuestions from './api/quizQuestions';
import Quiz from './components/Quiz';
import Result from './components/Result';
import Player from './components/Player';
import ReactPlayer from 'react-player';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     counter: 0,
     questionId: 1,
     question: '',
     answerOptions: [],
     answer: '',
     answersCount: {
       Nintendo: 0,
       Microsoft: 0,
       Sony: 0
     },
     result: ''
    };
    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  componentWillMount(){
    const shuffledAnswerOptions = quizQuestions.map((question)=>this.shuffledArray(question.answers));

    this.setState(
      {
        question: quizQuestions[0].question,
        answerOptions: shuffledAnswerOptions[0]
      }
    );
  }

  shuffledArray(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    // While there remain elements to shuffle..

    while(currentIndex!==0){
      // Pick a remaining element
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -=1;

      // And swap it with the current element
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  setUserAnswer(answer){
    /*console.log(this.state.answersCount);
    console.log(answer);*/
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
    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[counter].question,
      answerOptions: quizQuestions[counter].answers,
      answer: ''
    });
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);
    if (this.state.questionId < quizQuestions.length) {
        setTimeout(() => this.setNextQuestion(), 300);
        /* a lot of  ()=> used for embedded functions. function will be called
        after 300ms. This delay is simply a UX decision made so that the user
        has a moment to see the visual feedback indicating that their selection
        has been made.*/
      } else {
        setTimeout(()=>this.setResults(this.getResults()), 300);

      }
  }

  getResults() {
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
    if(result.length === 1){
      this.setState({
        result: result[0]
      });
    } else {
      this.setState({
        result: 'Undetermined'
      });
    }
  }

  renderQuiz(){
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.qestion}
        questionTotal={quizQuestions.length}
        onAnswerSelected={this.handleAnswerSelected}
        />
      )
  }

  renderResult(){
    return(
      <Result quizResult={this.state.result} />
      )
  }

  render() {
    return (

      <div className="App">
        <div class = "sidenav">
          <header className="App-header">
            <img style={{"height" : "auto", "width" : "50%"}} src={logo} className="App-logo" alt="logo" /> 
            <h2 style={{zIndex: 90}} >React Quiz</h2>       
          </header>
        </div>
        <div class = "App-body">
          
          <Question content="What is your favourite Entertainment Company?" />
          <div class = "quiz-player-wrapper">
            
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                width='100%'
                height='100%'
              />
            <div class = "quiz-wrapper">
              {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default App;
