import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	console.log(props);


	function renderAnswer(anser_str){
		return(
			<p> {anser_str}</p>
		);
	}

	function renderAnswerListItem(answer_obj){
		return(
			<p> {answer_obj.type}  {answer_obj.content}</p>
		);
	}

	function renderHistory(key) {
		return (
			<li key={key.question}>
				<p>{key.question}</p>
				{Array.isArray(key.answer)?key.answer.map(renderAnswerListItem):renderAnswer(key.answer)}
			</li>
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
			You prefer <strong>{props.quizResult}</strong>!
				
			{props.history.map(renderHistory)}
			</div>
		</div>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
	history: PropTypes.array.isRequired
};
 
export default Result;	