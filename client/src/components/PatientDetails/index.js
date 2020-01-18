import React from "react";
import NavBar from "./NavBar";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Dashboard from "../Dashboard";
import { Route, BrowserRouter } from 'react-router-dom'
var name;
class PatientDetails extends React.Component {
  constructor(props) {
    super(props);
    name = this.props.location.state.name;
    this.openDashboard = this.openDashboard.bind(this);
  }

  openDashboard(patientName) {
    this.props.history.push({pathname: '/dashboard', state: {name : patientName}})
  }
  
  
  render() {
    return (
      <BrowserRouter>
      <div
        style={{
          height: "100vh",
          backgroundColor: "#F5F5F5"
        }}>
        <NavBar patientName={name} />
        <div style={{ paddingTop: 20 }}>
            <Paper
              style={{
                marginLeft: 30,
                marginRight: 30,
                padding: 20,
                marginBottom: 30,
                width: "90%",
                height: 250,
                borderRadius:15
              }}>
              <Typography variant="h5">{"Name:"}</Typography>
              <Typography variant="h5" >{"Geburtsdatum:"}</Typography>
              <Typography variant="h5">{"Raum:"}</Typography>
              <Typography variant="h5">{"Adresse:"}</Typography>
              <Typography variant="h5">{"Aufenthalt:"}</Typography>
            </Paper>
            <Paper
              style={{
                padding: 20,
                width: 400,
                height: 100,
                borderRadius:15,
                marginBottom:30
              }}
              onClick={() => this.openDashboard(name)}>
              <Typography variant="h5" align="center">{"Anamnese Frageteil"}</Typography>
            </Paper>

            <Paper
              style={{
                padding: 20,
                width: 400,
                marginBottom:30,
                height: 100,
                borderRadius:15
              }}>
              <Typography variant="h5" align="center">{"Diagnose"}</Typography>
            </Paper>

            <Paper
              style={{
                padding: 20,
                width: 400,
                height: 100,
                marginBottom:30,
                borderRadius:15
              }}>
              <Typography variant="h5" align="center">{"Patient to DOS"}</Typography>
            </Paper>     
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default PatientDetails;
