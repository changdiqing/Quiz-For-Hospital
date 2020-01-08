import PropTypes from 'prop-types';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';


class DropdownList extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: 0//"Select an item",
    };
  };

  handleClick = event => {
    this.setState({ dropDownValue: event.target.value});
  };
 
  renderMenuItems(key){
    return(
      <MenuItem value={key.type}>{key.content}</MenuItem>
    )
  };

  render() {
    return (
      <div className="DropdownList">
          <FormControl margin='normal'>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select labelId="demo-simple-select-label" value={this.state.dropDownValue} onChange={this.handleClick} style={{backgroundColor:"white"}}>
            <MenuItem value={0}>
            <em>Select an option</em>
          </MenuItem>
            {this.props.answerOptions.map(this.renderMenuItems)}
          </Select>
          <FormHelperText></FormHelperText>
          <Button  value={this.state.dropDownValue} variant="contained" color="primary" onClick={this.props.onAnswerSelected}>Next Question</Button>
          </FormControl>
      </div>
    );
  }
}

//export default withStyles(dropdownStyle)(DropdownList);
export default DropdownList;