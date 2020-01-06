import PropTypes from 'prop-types';
import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
//import Button from 'react-bootstrap/Button';
import Button from '@material-ui/core/Button';

class DropdownList extends React.Component {
  constructor() {
    super();

    this.state = {
      dropDownValue: "Select an item"
    }
  }

  changeValue(text) {
    this.setState({dropDownValue: text})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div>
        <Button variant="primary">Primary</Button>
        <DropdownButton id="dropdown-item-button" title={this.state.dropDownValue} className="format"> 
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Item #1</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Item #2</div></Dropdown.Item>
          <Dropdown.Item as="button"><div onClick={(e) => this.changeValue(e.target.textContent)}>Item #3</div></Dropdown.Item>
        </DropdownButton>
        <Button variant="contained" color="primary" onClick={this.props.onAnswerSelected}>Hello World</Button>
        </div>
      </div>
    );
  }
}

export default DropdownList;