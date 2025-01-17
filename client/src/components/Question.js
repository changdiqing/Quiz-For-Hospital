import React from 'react';
import PropTypes from 'prop-types';

var questionStyle = {
  fontSize: 20,
  color: "white",
  paddingTop: 10,
  paddingLeft: 10,
  paddingRight: 10
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