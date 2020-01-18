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
    this.setState({ list: this.patientsInDatabase });
    console.log(this.patientsInDatabase);
  }

  fetchDataByID = async (id) => {
    const response = await fetch('/api/fetch-data-by-id',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id: id}),
    });
    const body = await response.json();
    if (response.status !== 201) throw Error(body.message);
    var patient_data = body;
    return patient_data;
  };

  fetchPatientList = async () => {
    const response = await fetch('/api/fetch-patient-list');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    var plist = body; 
    return plist;
  };

  render() {
    return (
     <div>
        <ul>
          {this.state.list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default PatientSelection;
