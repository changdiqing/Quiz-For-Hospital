import React from "react";
import AbschnittComponent from "../AbschnittComponents/AbschnittComponent";
import FilterDataForColumn from "./FilterDataForColumn";
import whichModulesLeft from "../../../store/whichModulesLeft";

export default function App() {
  return (
    <div>
      {FilterDataForColumn(whichModulesLeft).map(instance => (
        <AbschnittComponent patientData={instance} />
      ))}
    </div>
  );
}
