import React from "react";
import NavBar from "./NavBar/NavBar";
import Columns from "./Columns";
import patientData from "../../store";
import TabsArztPfleger from "./NavBar/TabsArztPfleger";

var name;
class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		name = this.props.location.state.name;
	}
	render(){
	return (
		<div>
		<NavBar patientName={name} />
		<Columns answers={patientData.answers} />
		<TabsArztPfleger />
		</div>
		);
	}
}
export default Dashboard;
