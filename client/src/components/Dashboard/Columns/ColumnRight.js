import React from "react";
import AbschnittComponent from "../AbschnittComponents/AbschnittComponent";
import FilterDataForColumn from "./FilterDataForColumn";
import whichModulesRight from "../../../store/whichModulesRight";

export default function App() {
  return (
    <div>
      {FilterDataForColumn(whichModulesRight).map(instance => (
        <AbschnittComponent patientData={instance} />
      ))}
    </div>
  );
}
