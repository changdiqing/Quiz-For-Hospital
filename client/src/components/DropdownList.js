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
import Input from '@material-ui/core/Input';
import Chip from '@material-ui/core/Chip';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 300,
  },
  chips: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  chip: {
    margin: 2,
  },
  noLabel: {
    marginTop: theme.spacing(3),
  },
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};


class DropdownList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msvalue:new Array(),

      result: [{
        type: "empty",
        content: "no answer selected",
      }],

    };
    //this.classes = useStyles();
    // Why is result an array of one element? <- because result of other questions could be a multiselection,
    // For the consistency of datastructure we use array also for single selection
    
  };

  

  handleChange = event => {
    this.setState({
      msvalue: event.target.value,
      });
  };

  handleClick = (event) => {

    var result = new Array();  // use first answer to initialize result, because there could be a follower id

    this.state.msvalue.map(value=>{
      result.push(this.props.answerOptions[value]);
    });

    console.log("jojo");
    console.log(result);

    if(result.length === 0){
      result = [this.props.answerOptions[0]];
      result[0].type = "empty";
      result[0].content = "no answer selected";
    }else{
      console.log(result);

      this.setState(
        {
          result:result,
        }, () => {
        this.props.onAnswerSelected(this.state.result);
      });

    }

   
  };
 
  renderMenuItems= (key,index) => {
    return(
      <MenuItem key = {key.type} value={index}>{key.content}</MenuItem>
    )
  };



  render() {

    return (
      <div className="DropdownList">
          <FormControl margin='normal'>
          <InputLabel id="demo-mutiple-select-label">Bitte wählen</InputLabel>
          <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={this.state.msvalue}
          onChange={this.handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={selected => (
            <div >
              {selected.map(value => (
                <Chip key={value} label={this.props.answerOptions[value].content} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
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