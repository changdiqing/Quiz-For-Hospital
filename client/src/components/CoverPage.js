import React from 'react';
import PropTypes from 'prop-types';
import logo from '../svg/logo.svg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
 
const style={
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }

function CoverPage(props) {

 
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

 	const handleClick = event => {
    	props.onAnswerSelected();
  	};
 
	return(
		<div className='coverPage' >

			<div className='logo'>
				<img src={logo} alt="SVG mit img Tag laden" width="300" height="200" />
			</div>
			<div className='entrance'>
			  <Button variant="contained" color="primary" style={style} onClick={(event)=>handleClick(event)}>Anamnese Starten</Button>

			
			</div>
			
		</div>
	);
}
 
CoverPage.CoverPage = {
	onAnswerSelected: PropTypes.func.isRequired,
};

export default CoverPage;