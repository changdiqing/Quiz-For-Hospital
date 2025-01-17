import React from 'react';
import PropTypes from 'prop-types';



function AnswerOption(props) {
	return (
		<li className="answerOption">
			<input
				type="radio"
				className="radioCustomButton"
				name="radioGroup"
				checked={props.answerType === props.answer}
				id={props.answerType}
				value={props.answerType}
				disabled={props.answer}
				onChange={props.onAnswerSelected}
			/>
			
 			<div className = "answer-background"></div>
			<label className="radioCustomLabel" htmlFor={props.answerType}>
				{props.answerContent}
			</label>
			
		</li>
	);
}
 
AnswerOption.propTypes = {
	answerType: PropTypes.string.isRequired,
	answerContent: PropTypes.string.isRequired,
	answer: PropTypes.string.isRequired,
	OnAnswerSelected: PropTypes.string.isRequired,
 
};
 
export default AnswerOption;