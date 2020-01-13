import React from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


var fileSelectionStyle = {
	position: "absolute",
  	top: "10%",
  	left: "40%",
  	width: "40%"
};

class FileSelection extends React.Component {
	constructor(props) {
		super(props);
	};


	componentDidUpdate() {
    	//this._input.focus();
    	var URL = window.URL || window.webkitURL;
		var displayMessage = function (message, isError) {
		var element = document.querySelector('#message')
		element.innerHTML = message
		element.className = isError ? 'error' : 'info'
		};

		var playSelectedFile = function (event) {
		    var file = event.target.files[0]
		    var type = file.type
		    var videoNode = document.querySelector('video')
		    var canPlay = videoNode.canPlayType(type)
		    if (canPlay === '') canPlay = 'no'
		    var message = 'Can play type "' + type + '": ' + canPlay
		    var isError = canPlay === 'no'
		    displayMessage(message, isError)

		    if (isError) {
		      return
		    }

		    console.log(file);
		    var fileURL = URL.createObjectURL(file);
		    videoNode.src = fileURL;
		    videoNode.src = "blob:http://localhost:3000/b619046f-2354-4425-a5ab-ccb5974484fc";
		    console.log(videoNode.src);
		};

		var inputNode = document.querySelector('input');
		inputNode.addEventListener('change', playSelectedFile, false);
	}
 
 
	render(){
		return(
			<div className="fileSelection" style={fileSelectionStyle}>
				BLABLABLA
				<h1>HTML5 local video file player example</h1>
				<div id="message"></div>
				<input ref={c => (this._input = c)} type="file" accept="video/*"/>
				<video controls autoplay></video>
			</div>
		);
	}
}

/*
<!--QuestionCount
				counter={props.questionId}
				total={props.questionTotal}
			/-->

*/
 
export default FileSelection;