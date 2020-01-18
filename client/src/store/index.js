const patientData = {
  id: 1,
  patientName: "Kevin Hamster",
  answers: [
    {
      headline: "Warnsymptome & Risikofaktoren",
      fields: [
        { label: "Schmerzklasifizierung", answer: "Lunge, Atemnot, Husten" },
        { label: "Risikofaktoren", answer: "Raucher, schwanger" },
        { label: "Vorerkrankungen", answer: "Krebs, Diabetis" },
        { label: "Arbeit - Gefährliche Stoffe", answer: "ja" }
      ]
    },
    {
      headline: "Medikamente & Allergien",
      fields: [
        {
          label: "Medikamente",
          answer:
            "1. L-Thyroxin Henning (Schilddrüsen-Störung) 2. Voltaren Dolo (Schmerzen und Fieber) 3. Beloc-Zoc mite (Bluthochdruck) 4. Pantozol 20mg (Magen- und Darmbeschwerden)"
        },
        {
          label: "Allergien",
          answer:
            "Alkohol Allergie, Allergie bei Katzen, Allergie beim Hund, Akazienallergie, Amalgamallergie"
        }
      ]
    },
    {
      headline: "Lebensweise & BMI",
      fields: [
        { label: "Gewicht", answer: "80kg" },
        { label: "Größe", answer: "180cm" },
        { label: "Bmi", answer: "25" },
        { label: "Raucher", answer: "ja" },
        { label: "Passivraucher", answer: "ja" },
        { label: "Trinken", answer: "2 Liter" }
      ]
    },
    {
      headline: "Symptomspezifische Angaben",
      fields: [
        { label: "Atemnot", answer: "Ja" },
        { label: "Husten mit Auswurf", answer: "Ja" },
        { label: "Erhöhte Schleimproduktion", answer: "Ja, sehr viel" },
        { label: "Atemwegsinfektion", answer: "Nein" },
        { label: "Wassereinlagerungen", answer: "Nein" }
      ]
    },
    {
      headline: "Symptome & Schmerzen",
      fields: [
        {
          label: "Angegebene Symptome & Schmerzen",
          answer: "Lunge, Atemnot, Husten"
        },
        { label: "Schmerzintensität", answer: "8/10" },
        { label: "Dauer der Beschwerden", answer: "1 Woche" }
      ]
    },
    {
      headline: "Vorerkrankungen & Familienhistorie",
      fields: [
        { label: "Vorerkrankungen", answer: "Krebs, Diabetis" },
        { label: "Operationen", answer: "Gallenblasenentfernung" },
        { label: "Erkrankungen Familie", answer: "Herzkrankheiten" },
        { label: "Geschlechtskrankheiten", answer: "nein" }
      ]
    },
    {
      headline: "Stuhlgang, Übelkeit, Erbrechen, Gewichtsverlust",
      fields: [
        { label: "Stuhlgang", answer: "flüssiger als sonst" },
        { label: "Übelkeit", answer: "ja, sehr viel" },
        { label: "Erbrechen", answer: "nein" },
        { label: "Gewichtsverlust", answer: "nein" }
      ]
    },
    {
      headline: "Eingaben Patient",
      fields: [
        {
          answer:
            "Vor einigen Woche hatte ich mehrere Symptome die ich nicht genau einordnen kann. Ich hatte Gelenkschmerzen die sich immer weiter Richtung Lunge hochzogen. Hier bitte nochmal die Nachfrage, um Ihnen das genauer zu erklären"
        }
      ]
    }
  ]
};

export default patientData;
