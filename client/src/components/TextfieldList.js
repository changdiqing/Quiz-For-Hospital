import PropTypes from 'prop-types';
import update from 'react-addons-update';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';


class TextfieldList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: this.props.answerOptions
    }
  };

  handleClick = event => {
    this.props.onAnswerSelected(this.state.result);
  };

  handleTextOnChange = (event,index) => {
    //console.log(event.currentTarget);
    //console.log(event);
    var tmp = this.state.result;
    tmp[index].content = event.currentTarget.value;
    this.setState(
        {
          result: tmp
        }
      );

    console.log(this.state.result);

  };

  renderTextfields = (key, index) =>{
    return(
      <TextField key = {key.type} size='large' onChange={(event)=>this.handleTextOnChange(event,index)} label={key.type}/>
    )
  };

  render() {
    return (
      <div className="DropdownList">
          <FormControl margin='normal'>
          <InputLabel id="demo-simple-select-label"></InputLabel>
            {this.props.answerOptions.map(this.renderTextfields)}
          <FormHelperText></FormHelperText>
          <Button variant="contained" size='large' color="primary" onClick={this.handleClick}>Next Question</Button> 
          </FormControl>
      </div>
    );
  }
}

TextfieldList.propTypes = {
  //answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

//export default withStyles(dropdownStyle)(DropdownList); onClick={this.props.onAnswerSelected}
export default TextfieldList;
