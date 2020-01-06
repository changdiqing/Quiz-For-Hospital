import React from 'react';
import PropTypes from 'prop-types';
 
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOptions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import DropdownList from '../components/DropdownList';
 
 
function Quiz(props) {
 	
	function renderAnswerOptions(key) {
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

	function renderAnswerDropdowns(key){
		return (
			<DropdownList onAnswerSelected={props.onAnswerSelected}>
			</DropdownList>
			);
	}


 
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
		<div className={props.isVisible ? 'quiz':'hidden'} >
			<div class="quiz-background"></div>
			<QuestionCount
				counter={props.questionId}
				total={props.questionTotal}
			/>
			<Question content={props.question} />
				{props.uiType == 'button' ? props.answerOptions.map(renderAnswerOptions) : renderAnswerDropdowns('ola')}
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
	onAnswerSelected: PropTypes.func.isRequired,
	isVisible: PropTypes.string.isRequired,
	uiType: PropTypes.string.isRequired,
};
 
export default Quiz;