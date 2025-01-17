import React from 'react';
import PropTypes from 'prop-types';

import Quiz from '../components/Quiz';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
 
function QuizAndPlayer(props) {
 	
 	/*
	function showQuiz(key) {
		console.log.("show quiz");
	}
	*/

	/*
	function hideQuiz(key) {
		return (
			<AnswerOption
				key={key.content}
				answerContent={key.content}
				answerType={key.type}
				answer={props.answer}
				questionId={props.questionId}
				onAnswerSelected={props.onAnswerSelected}
			/>
 
		);
	}
	*/
 
 	/*
	return (
		<ReactCSSTransitionGroup
			className="container"
			component="div"
			transitionName="fade"
			transitionEnterTimoeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div key={props.questionId}>
			 	<QuestionCount
			 		counter={props.questionId}
			 		total={props.questionTotal}
			  	/>
			  	<Question content={props.question} />
			  	<ul className="answerOptions">
			  		{props.answerOptions.map(renderAnswerOptions)}
			  	</ul>
			 </div>
 
		</ReactCSSTransitionGroup>
 
 		<div class = "quiz-background"></div>
 
 
	);
 	*/
 
	return(
		<div class = "quiz-player-wrapper">
            
            <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/watch?v=3-iCDOYkfms'
                width='100%'
                height='100%'
              />
            <div class = "quiz-wrapper">
              {this.state.result ? this.renderResult() : this.renderQuiz()}
            </div>
          </div>
	);
}
 
Quiz.propTypes = {
	answer: PropTypes.string.isRequired,
	answerOptions: PropTypes.array.isRequired,
	counter: PropTypes.number.isRequired,
	question: PropTypes.string.isRequired,
	questionId: PropTypes.number.isRequired,
	questionTotal: PropTypes.number.isRequired,
	onAnswerSelected: PropTypes.func.isRequired
 
 
 
};
 
export default Quiz;