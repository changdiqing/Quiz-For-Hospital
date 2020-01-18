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
    this.patientsInDatabase = new Array();  // DO NOT USE Variables other than inside this.state to render component
    this.state = {
      testState: [
      {id: 0,
        patient: "dummy patient1"
      },
      {
        id: 1,
        patient: "dummy patient2"
      }
      ]
    };
  }
  openPatientDetails(patientName) {
    this.props.history.push({pathname: '/dashboard', state: {name : patientName}})
  }

  componentWillMount(){
    this.fetchPatientList().then( (plist)=>{  // Here you need to do anything to resolved the result from async call
        this.setState(
          {
            testState: plist
          }
        );  // just an example
      }
    );

  }

  componentDidMount(){
  }

  fetchPatientList = async () => {
    const response = await fetch('/api/fetch-patient-list');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    var plist = body;
    
    
    return plist;  // here this returned value is not used
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
          {this.state.testState.map(i => (
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
