import React from "react";
import NavBar from "./NavBar/NavBar";
import Columns from "./Columns";
import patientData from "../../store";
import TabsArztPfleger from "./NavBar/TabsArztPfleger";

var name;
var patient_id;
class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		name = this.props.location.state.name;
		patient_id = this.props.location.state.patient_id;
	
		this.state = {
			testState: []
		};
	}

	componentWillMount(){
    this.fetchDataByID(patient_id).then( (patient_data)=>{  // Here you need to do anything to resolved the result from async call
        console.log(patient_data[0].patient.quizAnswers);
        this.setState(
          {
            testState: patient_data[0].patient.quizAnswers
          }
        ); 
      }
    );
  }

  componentDidMount(){
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

	render(){
		return (
			<div>
			<NavBar patientName={name} />
			<Columns answers={this.state.testState} />
			<TabsArztPfleger />
			</div>
			);
		}
	}
	export default Dashboard;
