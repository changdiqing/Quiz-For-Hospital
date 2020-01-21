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
    var ans;
    console.log("question id" +answers[0].id);
    
    for(var i = 0; i < answers.length; i++){
        
        switch (answers[i].id) {

        case 'Symptome':
        console.log('Symptome');
        jsonData[4].fields[0].answer = answers[i].answer[0].content;
        for (var j = 0; j < answers[i].answer.length; j++) {
          if(j==0){
            ans = answers[i].answer[j].content + ", ";
          } else if(j==(answers[i].answer.length-1)){
            ans += answers[i].answer[j].content;
          } else{
            ans += answers[i].answer[j].content + ", ";
          }
        }
        jsonData[0].fields[0].answer = ans;
        break;
        case '2schmerzIntensität':
        console.log('2schmerzIntensität');
        jsonData[4].fields[1].answer = answers[i].answer[0].content;
        break;
        case '3BeschwerdeLänge':
        console.log('3BeschwerdeLänge');
        jsonData[4].fields[2].answer = answers[i].answer[0].content;
        break;
        case '4schleimproduktion':
        console.log('4schleimproduktion');
        jsonData[3].fields[2].answer = answers[i].answer[0].content;
        break;
        case '5hustenMitAuswurf':
        console.log('5hustenMitAuswurf');
        jsonData[3].fields[1].answer = answers[i].answer[0].content;
        break;
        case '6engegefuehl':
        console.log('6engegefuehl');
        break;
        case '7atemInfektion':
        console.log('7atemInfektion');
        jsonData[3].fields[3].answer = answers[i].answer[0].content;
        break;
        case '8starkeAtemnot':
        console.log('8starkeAtemnot');
        jsonData[3].fields[0].answer = answers[i].answer[0].content;
        break;
        case '9schädigenArbeitsstoff':
        console.log('9schädigenArbeitsstoff');
        jsonData[0].fields[3].answer = answers[i].answer[0].content;
        break;
        case '10vorerkrankung':
        console.log('10vorerkrankung');
        break;
        case '11vorerkrankungJa':
        console.log('11vorerkrankungJa');
        jsonData[0].fields[2].answer = answers[i].answer[0].content;
        jsonData[5].fields[0].answer = answers[i].answer[0].content;
        break;
        case '12schwereFamilKrankheit':
        console.log('12schwereFamilKrankheit');
        break;
        case '13schwereFamilKrankheit':
        console.log('13schwereFamilKrankheit');
        jsonData[5].fields[2].answer = answers[i].answer[0].content;
        break;
        case '14operationen':
        console.log('14operationen');
        jsonData[5].fields[1].answer = answers[i].answer[0].content;
        break;
        case '15geschlechtsKrank':
        console.log('15geschlechtsKrank');
        break;
        case '16geschlechtsKrankJa':
        console.log('16geschlechtsKrankJa');
        for (var j = 0; j < answers[i].answer.length; j++) {
          if(j==0){
            ans = answers[i].answer[j].content + ", ";
          } else if(j==(answers[i].answer.length-1)){
            ans += answers[i].answer[j].content;
          } else{
            ans += answers[i].answer[j].content + ", ";
          }
        }
        jsonData[5].fields[3].answer = ans;
        break;
        case '17allergien':
        console.log('17allergien');
        break;
        case '18allergienJa':
        console.log('18allergienJa');
        for (var j = 0; j < answers[i].answer.length; j++) {
          if(j==0){
            ans = answers[i].answer[j].content + ", ";
          } else if(j==(answers[i].answer.length-1)){
            ans += answers[i].answer[j].content;
          } else{
            ans += answers[i].answer[j].content + ", ";
          }
        }
        jsonData[1].fields[1].answer = ans;
        break;
        case '19woherbekannt':
        console.log('19woherbekannt');
        break;
        case '20medikamente':
        console.log('20medikamente');
        break;
        case '21medikamenteJa':
        console.log('21medikamenteJa');
        for (var j = 0; j < answers[i].answer.length; j++) {
          if(j==0){
            ans = answers[i].answer[j].content + ", ";
          } else if(j==(answers[i].answer.length-1)){
            ans += answers[i].answer[j].content;
          } else{
            ans += answers[i].answer[j].content + ", ";
          }
        }
        jsonData[1].fields[0].answer = ans;
        break;
        case '22gewicht':
        console.log('22gewicht');
        jsonData[2].fields[0].answer = answers[i].answer[0].content;
        jsonData[2].fields[1].answer = answers[i].answer[1].content;
        break;
        case '23trinkmenge':
        console.log('23trinkmenge');
        jsonData[2].fields[5].answer = answers[i].answer[0].content;
        break;
        case '24rauchen':
        console.log('24rauchen');
        break;
        case '25rauchenJa':
        console.log('25rauchenJa');
        jsonData[2].fields[3].answer = answers[i].answer[0].content;
        jsonData[2].fields[4].answer = answers[i].answer[0].content;
        break;
        case '26Übelkeit':
        console.log('26Übelkeit');
        jsonData[6].fields[1].answer = answers[i].answer[0].content;
        break;
        case '27stuhlgang':
        console.log('27stuhlgang');
        jsonData[6].fields[0].answer = answers[i].answer[0].content;
        break;
        case '28blutImStuhl':
        console.log('28blutImStuhl');
        break;
        case '30gewichtsverlust':
        console.log('30gewichtsverlust');
        jsonData[6].fields[3].answer = answers[i].answer[0].content;
        break;
        case '31stuhlgang':
        console.log('31stuhlgang');
        jsonData[7].fields[0].answer = answers[i].answer[0].content;
        break;

        break;
        default:
        console.log('default');
      }
    }

    jsonData[0].fields[1].answer = "Raucher, schwanger";
    jsonData[2].fields[2].answer = "bmi";
    jsonData[3].fields[4].answer = "Nein";   
    jsonData[6].fields[2].answer = "Nein";
    
    
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
