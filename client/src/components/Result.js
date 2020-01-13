import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	console.log(props);


	function renderAnswer(answer_str){
		return(
			<p key={answer_str}> {answer_str}</p>
		);
	}

	function renderAnswerListItem(answer_obj){
		return(
			<p key={answer_obj.type}> {answer_obj.type}  {answer_obj.content}</p>
		);
	}

	function renderHistory(key) {
		return (
			<ul key = {key.question}>
				<p key = {key.question}>{key.question}</p>
				{key.answer.map(renderAnswerListItem)}
			</ul>
		);
	}
	return (
		
		/*
		<!--ReactCSSTransitionGroup
			className="container result"
			component ="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}-->

		
		<!--/ReactCSSTransitionGroup-->

		You prefer <strong>{props.quizResult}</strong>!
		*/
		
		<div className = "result">
			<div className = "quiz-background"></div>
			<div className = "resultContent">
			<h2>Your quiz is finished!</h2>
			{props.history.map(renderHistory)}
			</div>
		</div>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,  // place holder for passing parameters in the future
	history: PropTypes.array.isRequired
};
 
export default Result;	