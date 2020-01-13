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
  constructor(props) {
    super(props);

    this.state = {
      dropDownValue: -1//"Select an item",
    };

    // Why is result an array of one element? <- because result of other questions could be a multiselection,
    // For the consistency of datastructure we use array also for single selection
    this.result = [
      {
        type: "empty",
        content: "no answer selected"
      }
    ];
  };



  handleChange = (event) => {
    this.setState({
      dropDownValue: event.target.value
      });
    console.log('############');
    console.log(event.target.value);
    this.result[0] = this.props.answerOptions[event.target.value];
    console.log(this.result[0]);
    
  };

  handleClick = (event) => {
    console.log(this.result);
    this.props.onAnswerSelected(this.result);
  };
 
  renderMenuItems= (key,index) => {
    return(
      <MenuItem value={index}>{key.content}</MenuItem>
    )
  };

  render() {
    return (
      <div className="DropdownList">
          <FormControl margin='normal'>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select labelId="demo-simple-select-label" value={this.state.dropDownValue} onChange={this.handleChange} style={{backgroundColor:"white"}}>
            <MenuItem value={-1}>
            <em>Select an option</em>
          </MenuItem>
            {this.props.answerOptions.map(this.renderMenuItems)}
          </Select>
          <FormHelperText></FormHelperText>
          <Button variant="contained" color="primary" onClick={(event)=>this.handleClick(event)}>Next Question</Button>
          </FormControl>
      </div>
    );
  }
}


DropdownList.propTypes = {
  //answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
};

//export default withStyles(dropdownStyle)(DropdownList);
export default DropdownList;