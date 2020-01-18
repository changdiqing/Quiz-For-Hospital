import React from "react";
import NavBar from "./NavBar";
import getPatientsInDatabase from "../../store/PatientsInDatabase";
import Paper from "@material-ui/core/Paper";
import { Typography } from "@material-ui/core";
import Dashboard from "../Dashboard";

class PatientSelection extends React.Component {
  constructor(props) {
    super(props);
    this.openPatientDetails = this.openPatientDetails.bind(this);
    this.patientsInDatabase = new Array();
  }

  openPatientDetails(patientName) {
    this.props.history.push({pathname: '/dashboard', state: {name : patientName}})
  }

  componentWillMount(){
    this.patientsInDatabase = this.fetchPatientList();
    console.log(this.patientsInDatabase);
  }

  fetchPatientList = async () => {
    const response = await fetch('/api/fetch-patient-list');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    var plist = body; 
    return plist;
  };

  render() {
    return (
     <div
        style={{
          height: "100vh",
          backgroundColor: "#F5F5F5"
        }}>
        <NavBar patientName={"Patientenauswahl"} />
        <div style={{ paddingTop: 50 }}>
          {this.patientsInDatabase.map(i => (
            <Paper
              key={i.id}
              style={{
                marginLeft: 30,
                padding: 20,
                marginBottom: 30,
                width: 400
              }}
              onClick={() => this.openPatientDetails(i.patient)}>
              <Typography variant="h4">{i.patient}</Typography>
            </Paper>
          ))}
        </div>
      </div>
    );
  }
}

export default PatientSelection;
