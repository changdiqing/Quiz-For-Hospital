import React from "react";
import Grid from "@material-ui/core/Grid";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";

export default function App({ answers }) {

  var jsonData = [
  {
    headline: "Warnsymptome & Risikofaktoren",
    fields: [
    { label: "Schmerzklasifizierung", answer: "" },
    { label: "Risikofaktoren", answer: "" },
    { label: "Vorerkrankungen", answer: "" },
    { label: "Arbeit - Gefährliche Stoffe", answer: "" }
    ]
  },
  {
    headline: "Medikamente & Allergien",
    fields: [
    {
      label: "Medikamente",
      answer: ""
    },
    {
      label: "Allergien",
      answer: ""
    }
    ]
  },
  {
    headline: "Lebensweise & BMI",
    fields: [
    { label: "Gewicht", answer: "" },
    { label: "Größe", answer: "" },
    { label: "Bmi", answer: "" },
    { label: "Raucher", answer: "" },
    { label: "Passivraucher", answer: "" },
    { label: "Trinken", answer: "" }
    ]
  },
  {
    headline: "Symptomspezifische Angaben",
    fields: [
    { label: "Atemnot", answer: "" },
    { label: "Husten mit Auswurf", answer: "" },
    { label: "Erhöhte Schleimproduktion", answer: "" },
    { label: "Atemwegsinfektion", answer: "" },
    { label: "Wassereinlagerungen", answer: "" }
    ]
  },
  {
    headline: "Symptome & Schmerzen",
    fields: [
    {
      label: "Angegebene Symptome & Schmerzen",
      answer: ""
    },
    { label: "Schmerzintensität", answer: "" },
    { label: "Dauer der Beschwerden", answer: "" }
    ]
  },
  {
    headline: "Vorerkrankungen & Familienhistorie",
    fields: [
    { label: "Vorerkrankungen", answer: "" },
    { label: "Operationen", answer: "" },
    { label: "Erkrankungen Familie", answer: "" },
    { label: "Geschlechtskrankheiten", answer: "" }
    ]
  },
  {
    headline: "Stuhlgang, Übelkeit, Erbrechen, Gewichtsverlust",
    fields: [
    { label: "Stuhlgang", answer: "" },
    { label: "Übelkeit", answer: "" },
    { label: "Erbrechen", answer: "" },
    { label: "Gewichtsverlust", answer: "" }
    ]
  },
  {
    headline: "Eingaben Patient",
    fields: [
    {
      answer: ""
    }
    ]
  }
  ];

  if(answers[0] == undefined){
    console.log("undefined");
  }else{
    console.log("question id" +answers[0].id);
    jsonData[0].fields[0].answer = answers[0].answer[0].content + ", " + answers[0].answer[1].content;
    jsonData[0].fields[1].answer = "Raucher, schwanger";
    jsonData[0].fields[2].answer = answers[10].answer[0].content;
    jsonData[0].fields[3].answer = answers[8].answer[0].content;
    jsonData[1].fields[0].answer = answers[20].answer[0].content + ", " + answers[20].answer[1].content + ", " + answers[20].answer[2].content;
    jsonData[1].fields[1].answer = answers[17].answer[0].content + ", " + answers[17].answer[1].content;
    jsonData[2].fields[0].answer = answers[21].answer[0].content;
    jsonData[2].fields[1].answer = answers[21].answer[1].content;
    jsonData[2].fields[2].answer = "bmi";
    jsonData[2].fields[3].answer = answers[24].answer[0].content;
    jsonData[2].fields[4].answer = answers[24].answer[0].content;
    jsonData[2].fields[5].answer = answers[22].answer[0].content;
    jsonData[3].fields[0].answer = answers[7].answer[0].content;
    jsonData[3].fields[1].answer = answers[4].answer[0].content;
    jsonData[3].fields[2].answer = answers[3].answer[0].content;
    jsonData[3].fields[3].answer = answers[6].answer[0].content;
    jsonData[3].fields[4].answer = "Nein";
    jsonData[4].fields[0].answer = answers[0].answer[0].content;
    jsonData[4].fields[1].answer = answers[1].answer[0].content;
    jsonData[4].fields[2].answer = answers[2].answer[0].content;
    jsonData[5].fields[0].answer = answers[10].answer[0].content;
    jsonData[5].fields[1].answer = answers[13].answer[0].content;
    jsonData[5].fields[2].answer = answers[12].answer[0].content;
    jsonData[5].fields[3].answer = answers[15].answer[0].content + ", " + answers[15].answer[1].content;
    jsonData[6].fields[0].answer = answers[26].answer[0].content;
    jsonData[6].fields[1].answer = answers[25].answer[0].content;
    jsonData[6].fields[2].answer = "Nein";
    jsonData[6].fields[3].answer = answers[28].answer[0].content;
    jsonData[7].fields[0].answer = answers[29].answer[0].content;
  }

  return (
    <div>
    <Grid
    container
    direction="row"
    spacing={2}
    style={{ backgroundColor: "#F5F5F5", marginTop: 20 }}
    >
    <Grid
    item
    xs={6}
    style={{
      paddingTop: 20,
      paddingLeft: 50,
      paddingRight: 15
    }}
    >
    <ColumnLeft answers={jsonData} />
    </Grid>
    <Grid
    item
    xs={6}
    style={{
      paddingTop: 20,
      paddingRight: 50,
      paddingLeft: 15,
      width: "50vw"
    }}
    >
    <ColumnRight answers={jsonData} />
    </Grid>
    </Grid>
    </div>
    );
  }
