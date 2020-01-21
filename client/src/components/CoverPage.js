import React from 'react';
import PropTypes from 'prop-types';
import logo from '../svg/logo.svg';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import TextField from '@material-ui/core/TextField';
 
const style={
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%, -50%)'
    }

class CoverPage extends React.Component {
	constructor(props) {
    super(props);
    //this.result= this.props.answerOptions;  // use this line for init of multi-selection

    // Why is result an array of one element? <- because result of other questions could be a multiselection,
    // For the consistency of datastructure we use array also for single selection
    this.state = {
	        result : ""
	    }
	};
 
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

 	handleTextOnChange = (event,index) => {
    	this.setState(
	        {
	          result: event.currentTarget.value,
	        }
	      );

	    console.log(this.state.result);

	};

 	handleClick = event => {
    	this.props.onAnswerSelected(this.state.result);
  	};
 	
 	render(){
		return(
			<div className='coverPage' >

				<div className='logo'>
					<img src={logo} alt="SVG mit img Tag laden" width="300" height="200" />
				</div>
				<div className='entrance'>
					<TextField  size='large' onChange={(event)=>this.handleTextOnChange(event)} label="Name"/>
				  <Button variant="outlined" size='large' color="primary" style={style} onClick={(event)=>this.handleClick(event)}>Anamnese Starten</Button>

				
				</div>
				
			</div>
		);
	}
}
 
CoverPage.CoverPage = {
	onAnswerSelected: PropTypes.func.isRequired,
};

export default CoverPage;