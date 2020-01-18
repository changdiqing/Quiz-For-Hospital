import React from "react";
import OneLine from "./OneLine";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

export default function AbschnittComponent({ patientData }) {
  return (
    <Paper style={{ padding: 30, marginBottom: 15 }}>
      <Typography
        style={{
          marginBottom: 15,
          fontSize: 20,
          color: "rgba(0, 0, 0, 0.64)",
          fontWeight: "bold",
          textTransform: "uppercase"
        }}
      >
        {patientData.headline}
      </Typography>

      {patientData.headline === "Symptome & Schmerzen" && (
        <img
          style={{
            marginTop: 10,
            marginBottom: 30,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto"
          }}
          src="bodypicture.jpg"
          alt="Body picture"
          width="200"
          height="200"
        />
      )}

      {patientData.headline !== "Eingaben Patient" &&
        patientData.fields.map(i => <OneLine textData={i} />)}

      {patientData.headline === "Eingaben Patient" &&
        patientData.fields.map(i => (
          <Typography
            style={{
              backgroundColor: "rgba(238, 238, 238, 1)",
              padding: 8,
              paddingLeft: 12
            }}
          >
            {i.answer}
          </Typography>
        ))}
    </Paper>
  );
}
