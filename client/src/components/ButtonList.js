import PropTypes from 'prop-types';
import update from 'react-addons-update';
import React from 'react';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';

var buttonStyle = {
  margin: 10,
  backgroundColor: "white"
};

class ButtonList extends React.Component {
  constructor(props) {
    super(props);
    //this.result= this.props.answerOptions;  // use this line for init of multi-selection

    // Why is result an array of one element? <- because result of other questions could be a multiselection,
    // For the consistency of datastructure we use array also for single selection
    this.state = {
        result :[
          {
            type: "empty",
            content: "no answer selected"
          }
        ]
    }
  };

  handleClick = (event,index) => {
    this.setState(
      {
        result:[
          this.props.answerOptions[index]
        ]
      }, () => {
      this.props.onAnswerSelected(this.state.result);
    });
  };
  
      
    //this.result[0] = this.props.answerOptions[index];// assign the selected answer option to the first and only element of this.result
    

  renderButtons = (key, index) =>{
    return(
      <Button key = {key.type}  size="large" variant="outlined"  style={buttonStyle} onClick={(event)=>this.handleClick(event,index)}>{key.content}</Button>
    )
  };

  render() {
    return (
      <div className="ButtonList">
          <FormControl margin='normal'>
            {this.props.answerOptions.map(this.renderButtons)}
          <FormHelperText></FormHelperText>
          </FormControl>
      </div>
    );
  }
}

ButtonList.propTypes = {
  //answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};
//export default withStyles(dropdownStyle)(DropdownList); onClick={this.props.onAnswerSelected}
export default ButtonList;