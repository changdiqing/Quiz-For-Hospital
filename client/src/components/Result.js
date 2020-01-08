import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	console.log(props);
	function renderHistory(key) {
		return (
			<li>
				<p>{key.question}</p>
				<p>{key.answer}</p>
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