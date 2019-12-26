import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
function Result(props) {
	console.log(props);
	function renderHistory(key) {
		return (
			<ul>
			<h3>{key.question}</h3>
			<p>{key.answer}</p>
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
		

		<div className="result">
			You prefer <strong>{props.quizResult}</strong>!
			{props.history.map(renderHistory)}
		</div>
	);
}
 
Result.propTypes = {
	quizResult: PropTypes.string.isRequired,
	history: PropTypes.array.isRequired
};
 
export default Result;	