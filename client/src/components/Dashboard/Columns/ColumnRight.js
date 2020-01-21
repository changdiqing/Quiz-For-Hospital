import React from "react";
import AbschnittComponent from "../AbschnittComponents/AbschnittComponent";
import whichModulesRight from "../../../store/whichModulesRight";

export default function App({ answers }) { 
	var DataForColumn = [];
	if(answers[0] == undefined){
		console.log("undefined");
	}else{
		console.log("defined");
		answers.filter(instance => {
			for (var i = 0; i < whichModulesRight.length; i++) {
				if (instance.headline === whichModulesRight[i]) {
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
