import React from "react";
import Textfeld from "./Textfeld";
import Grid from "@material-ui/core/Grid";

class OneLine extends React.Component {
  state = {
    inFocusBorder: 0,
    borderColor: "rgb(20, 20, 20)"
  };
  render() {
    const { textData } = this.props;
    const highlightField = () => {
      if (this.state.inFocusBorder === 0) {
        this.setState({
          inFocusBorder: 3,
          borderColor: "secondary.main"
        });
      } else {
        this.setState({
          inFocusBorder: 0,
          borderColor: "primary.main"
        });
      }
    };
    return (
      <Grid onClick={highlightField} container style={{ marginBottom: 10 }}>
        <Textfeld
          text={textData.label}
          styleLeft_Right={{ marginRight: 5, textTransform: "uppercase" }}
          borderpx={this.state.inFocusBorder}
          borderColor={this.state.borderColor}
        />
        <Textfeld
          text={textData.answer}
          styleLeft_Right={{
            marginLeft: 5
          }}
          borderpx={this.state.inFocusBorder}
          borderColor={this.state.borderColor}
        />
      </Grid>
    );
  }
}

export default OneLine;
