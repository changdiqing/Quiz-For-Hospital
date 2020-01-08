import PropTypes from 'prop-types';
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
  constructor() {
    super();
    this.value = new Array();
  };

  handleClick = event => {
    this.setState({ value: event.target.value});
  };
 
  renderTextfields = (key, index) =>{
    this.value.push(key);
    return(
      <TextField id={index} label="Standard" />
    )
  };

  render() {
    return (
      <div className="DropdownList">
          <FormControl margin='normal'>
          <InputLabel id="demo-simple-select-label"></InputLabel>
            {this.props.answerOptions.map(this.renderTextfields)}
          <FormHelperText></FormHelperText>
          <Button  value={this.value} variant="contained" color="primary" onClick={this.props.onAnswerSelected}>Next Question</Button>
          </FormControl>
      </div>
    );
  }
}

//export default withStyles(dropdownStyle)(DropdownList);
export default TextfieldList;