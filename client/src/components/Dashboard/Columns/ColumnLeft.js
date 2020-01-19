import React from "react";
import AbschnittComponent from "../AbschnittComponents/AbschnittComponent";
import whichModulesLeft from "../../../store/whichModulesLeft";

export default function App({ answers }) {
	
	var DataForColumn = [];
	if(answers[0] == undefined){
		console.log("undefined");
	}else{
		console.log("defined");
		console.log(answers[0].id);
		answers.filter(instance => {
			for (var i = 0; i < whichModulesLeft.length; i++) {
				if (instance.headline === whichModulesLeft[i]) {
					DataForColumn.push(instance);
				}
			}
		});
	}

	return (
		<div>
		{DataForColumn.map(instance => (
			<AbschnittComponent patientData={instance} />
			))}
		</div>
		);
	}
