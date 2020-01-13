import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import FormControl from '@material-ui/core/FormControl';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import DropdownList from '../components/DropdownList';
import TextfieldList from '../components/TextfieldList';
import ButtonList from '../components/ButtonList';
 
 
function Quiz(props) {

	function renderAnswerButtons(answerOptions) {
		return (
			<ButtonList answerOptions = {answerOptions} onAnswerSelected={props.rewindFromComponent}>
			</ButtonList>
		);
	}

	function renderAnswerDropdowns(answerOptions){
		return (
			<DropdownList answerOptions = {answerOptions} onAnswerSelected={props.rewindFromComponent}>
			</DropdownList>
		);
	}

	function renderTextfields(answerOptions){
		return (
			<TextfieldList answerOptions = {answerOptions} onAnswerSelected={props.rewindFromComponent}>
			</TextfieldList>
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
			<div className="quiz-background"></div>
			<Question content={props.question} />
			<FormControl margin='normal'>
			{props.uiType == 'button' ? renderAnswerButtons(props.answerOptions) :
				props.uiType == 'dropdown'? renderAnswerDropdowns(props.answerOptions) :
					renderTextfields(props.answerOptions)}
			</FormControl>
		</div>
	);
}
 
Quiz.propTypes = {
	//answer: PropTypes.string.isRequired,
	answerOptions: PropTypes.array.isRequired,
	question: PropTypes.string.isRequired,
	questionId: PropTypes.number.isRequired,
	questionTotal: PropTypes.number.isRequired,
	isVisible: PropTypes.bool.isRequired,
	uiType: PropTypes.string.isRequired,
};

/*
<!--QuestionCount
				counter={props.questionId}
				total={props.questionTotal}
			/-->

*/
 
export default Quiz;