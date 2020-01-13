import React from 'react';
import PropTypes from 'prop-types';

var questionStyle = {
  margin: "0px"
};
 
function Question(props) {
	return (
		<div className="question" style={questionStyle}>{props.content}</div>
		);
}


Question.propTypes = {
	content: PropTypes.string.isRequired
};
 
export default Question;