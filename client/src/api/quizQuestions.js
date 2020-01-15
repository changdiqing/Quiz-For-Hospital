var quizQuestions = { 
    initQuestions: [
      {
        question: "Welche Schmerzen/Symptome haben Sie?",
        id: "Symptome",
        //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
        videoUrl:'videos/1.mp4',
        breakPoint: 12,
        posIndex:0,
        uiType:'dropdown',
        answers: [
            {
                type: "husten",
                content: "Husten",
                follower: "hustenOderAtemnot"
            },
            {
                type: "atemnot",
                content: "Atemnot",
                follower: "hustenOderAtemnot"
            },
            {
                type: "halsentzündung",
                content: "Halsentzündung",
                follower: "intensität"
            },
            {
                type: "kopfschmerzen",
                content: "Kopfschmerzen",
                follower: "intensität"
            },
            {
                type: "fieber",
                content: "Fieber",
                follower: "intensität"
            },
            {
                type: "Lungenentzündung",
                content: "Lungenentzündung",
                follower: "intensität"
            },
            {
                type: "Atemwegsinfektion",
                content: "Atemwegsinfektion",
                follower: "intensität"
            },
            {
                type: "Bauchschmerzen",
                content: "Bauchschmerzen",
                follower: "intensität"
            },
            {
                type: "Gelenkschwellung",
                content: "Gelenkschwellung",
                follower: "intensität"
            },
            {
                type: "Gelenkschmerz",
                content: "Gelenkschmerz",
                follower: "intensität"
            },
            {
                type: "Urinauffälligkeiten",
                content: "Urinauffälligkeiten",
                follower: "intensität"
            },
            {
                type: "Bluthochdruck",
                content: "Bluthochdruck",
                follower: "intensität"
            },
            {
                type: "Durchfall",
                content: "Durchfall",
                follower: "intensität"
            },
            {
                type: "GelbeHaut",
                content: "Gelbfärbung der Haut",
                follower: "intensität"
            }
        ]
      }
      
    ],

    intensität:[
        {
            question: "Wie würden Sie die Intensität der Schmerzen beurteilen?",
            id: "22intensität",
            videoUrl:'videos/2.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 5,
            posIndex:0,
            uiType:'button',
            answers: [
                {
                    type: "sehrhoch",
                    content: "Sehr Hoch (8-10)"
                    
                },
                {
                    type: "Hoch (6-8)",
                    content: "Hoch (6-8)"
                },
                {
                    type: "Medium (3-6)",
                    content: "Medium (3-6)"
                },
                {
                    type: "Gering (1-3)",
                    content: "Gering (1-3)"
                }
            ]
        },
        {
            question: "Wie lange haben Sie die Beschwerden schon?",
            id: "3BeschwerdeLänge",
            videoUrl:'videos/3.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 3,
            posIndex:0,
            uiType:'button',
            answers: [
                {
                    type: "Seit einem Tag",
                    content: "Seit einem Tag",
                    follower: "familienHistorie"
                    
                },
                {
                    type: "Seit einer Woche",
                    content: "Seit einer Woche",
                    follower: "familienHistorie"
                },
                {
                    type: "Seit einem Monat",
                    content: "Seit einem Monat",
                    follower: "familienHistorie"
                },
                {
                    type: "Länger als 3 Monate",
                    content: "Länger als 3 Monate",
                    follower: "familienHistorie"
                }
            ]
        }
    ],

    hustenOderAtemnot:[
        {
            question: "Wie würden Sie die Intensität der Schmerzen beurteilen?",
            id: "2schmerzIntensität",
            videoUrl:'videos/2.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 5,
            posIndex:0,
            uiType:'button',
            answers: [
                {
                    type: "sehrhoch",
                    content: "Sehr Hoch (8-10)"
                    
                },
                {
                    type: "Hoch (6-8)",
                    content: "Hoch (6-8)"
                },
                {
                    type: "Medium (3-6)",
                    content: "Medium (3-6)"
                },
                {
                    type: "Gering (1-3)",
                    content: "Gering (1-3)"
                }
            ]
        },
        {
            question: "Wie lange haben Sie die Beschwerden schon?",
            id: "3BeschwerdeLänge",
            videoUrl:'videos/3.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 3,
            posIndex:0,
            uiType:'button',
            answers: [
                {
                    type: "Seit einem Tag",
                    content: "Seit einem Tag"
                    
                },
                {
                    type: "Seit einer Woche",
                    content: "Seit einer Woche"
                },
                {
                    type: "Seit einem Monat",
                    content: "Seit einem Monat"
                },
                {
                    type: "Länger als 3 Monate",
                    content: "Länger als 3 Monate"
                }
            ]
        },
        {
            question: "Ist Ihnen eine gesteigerte Schleimproduktion aufgefallen?",
            id: "4schleimproduktion",
            videoUrl:'videos/4.mp4',
            breakPoint: 6,
            posIndex:2,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja"
                },
                {
                    type: "Nein",
                    content: "Nein"
                }
            ]
        },
        {
            question: "Haben Sie Husten mit  Auswurf?",
            id: "5hustenMitAuswurf",
            videoUrl:'videos/5.mp4',
            breakPoint: 3,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja"
                },
                {
                    type: "Nein",
                    content: "Nein"
                }
            ]
        },
        {
            question: "Spüren Sie ein Engegefühl im Brustbereich?",
            id: "6engegefühl",
            videoUrl:'videos/6.mp4',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja"
                },
                {
                    type: "Nein",
                    content: "Nein"
                }
            ]
        },
        {
            question: "Haben Sie gehäuft Atemwegsinfektionen?",
            id: "7atemInfektion",
            videoUrl:'videos/7.mp4',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja"
                },
                {
                    type: "Nein",
                    content: "Nein"
                }
            ]
        },
        {
            question: "Haben Sie starke Atemnot?",
            id: "8starkeAtemnot",
            videoUrl:'videos/8.mp4',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja"
                },
                {
                    type: "Nein",
                    content: "Nein"
                }
            ]
        },
        {
            question: "Sind Sie in Ihrem Beruf schädigenden Arbeitsstoffen ausgesetzt?",
            id: "9schädigenArbeitsstoff",
            videoUrl:'videos/9.mp4',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [

                {
                    type: "Ja",
                    content: "Ja",
                    follower: "familienHistorie"
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "familienHistorie"
                }
            ]
        }
    ],

    familienHistorie:[
        {
            question: "Haben Sie Vorerkrankungen?",
            id: "10vorerkrankung",
            videoUrl:'videos/10.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja",
                    follower: "vorerkrankungJa"
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "schwereFamilKrankheit"
                }
            ]
        }
    ],

    vorerkrankungJa:[
        {
            question: "Welche Vorerkrankungen haben Sie?",
            id: "11vorerkrankungJa",
            videoUrl:'videos/11.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 6,
            posIndex:1,
            uiType:'textfield',
            answers: [
                {
                    type: "Eingabefeld",
                    content: "Bitte eingeben",
                    follower: "schwereFamilKrankheit"
                }
            ]
        }
    ],

    schwereFamilKrankheit:[
        {
            question: "Gibt es schwere Krankheiten in Ihrer Familie?",
            id: "12schwereFamilKrankheit",
            videoUrl:'videos/12.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja",
                    follower: "schwereFamilKrankheitJa"
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "operationen"
                }
            ]
        }
    ],

    schwereFamilKrankheitJa:[
        {
            question: "Welche schweren Erkrankungen gibt es in Ihrer Familie?",
            id: "13schwereFamilKrankheit",
            videoUrl:'videos/13.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 6,
            posIndex:1,
            uiType:'textfield',
            answers: [
                {
                    type: "Eingabefeld",
                    content: "Bitte eingeben",
                    follower: "operationen"
                }
            ]
        }
    ],

    operationen:[
        {
            question: "Welche Operationen hatten Sie bereits?",
            id: "14operationen",
            videoUrl:'videos/14.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 8,
            posIndex:1,
            uiType:'textfield',
            answers: [
                {
                    type: "Eingabefeld",
                    content: "Bitte eingeben"
                }
            ]
        },
        {
            question: "Haben SIe Geschlechtskrankheiten?",
            id: "15geschlechtsKrank",
            videoUrl:'videos/15.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                 {
                    type: "Ja",
                    content: "Ja",
                    follower: "geschlechtsKrankJa"
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "allergien"
                }
            ]
        }
    ],

    geschlechtsKrankJa:[
      {
        question: "Welche Geschlechtskrankheit/en haben Sie?",
        id: "16geschlechtsKrankJa",
        videoUrl:'videos/16.mp4',
        breakPoint: 3,
        posIndex:0,
        uiType:'dropdown',
        answers: [
            {
                type: "Chlamydien",
                content: "Chlamydien",
                follower: "allergien"
            },
            {
                type: "Gonorrhoe",
                content: "Gonorrhoe",
                follower: "allergien"
            },
            {
                type: "Genitalherpes",
                content: "Genitalherpes",
                follower: "allergien"
            },
            {
                type: "Genitalwarzen",
                content: "Genitalwarzen",
                follower: "allergien"
            },
            {
                type: "Syphilis",
                content: "Syphilis",
                follower: "allergien"
            },
            {
                type: "Hepatitis B",
                content: "Hepatitis B",
                follower: "allergien"
            },
            {
                type: "HIV – Humanes Immundefizienz Virus",
                content: "HIV – Humanes Immundefizienz Virus",
                follower: "allergien"
            }
        ]
      }
    ],

    allergien:[
        {
            question: "Allergien?",
            id: "17allergien",
            videoUrl:'videos/17.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:0,
            uiType:'button',
            answers: [
                 {
                    type: "Ja",
                    content: "Ja",
                    follower: "allergienJa"
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "woherbekannt"
                }
            ]
        }
    ],

    allergienJa:[
        {
            question: "Welche Allergien?",
            id: "18allergienJa",
            videoUrl:'videos/18.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'dropdown',
            answers: [
                 {
                    type: "1) Alkohol Allergie",
                    content: "1) Alkohol Allergie",
                    follower: "woherbekannt"
                },
                {
                    type: "2) Allergie bei Katzen",
                    content: "2) Allergie bei Katzen",
                    follower: "woherbekannt"
                },
                {
                    type: "3) Allergie beim Hund",
                    content: "3) Allergie beim Hund",
                    follower: "woherbekannt"
                },
                {
                    type: "4) Akazienallergie",
                    content: "4) Akazienallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "5) Amalgamallergie",
                    content: "5) Amalgamallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "6) Ambrosia-Allergie",
                    content: "6) Ambrosia-Allergie",
                    follower: "woherbekannt"
                },
                {
                    type: "7) Ampferallergie",
                    content: "7) Ampferallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "8) Ananasallergie",
                    content: "8) Ananasallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "9) Anisallergie",
                    content: "9) Anisallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "10) Apfelallergie",
                    content: "10) Apfelallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "11) Avocadoallergie",
                    content: "11) Avocadoallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "12) Ascorbinsäure-Allergie",
                    content: "12) Ascorbinsäure-Allergie",
                    follower: "woherbekannt"
                },
                {
                    type: "13) Aspirinallergie",
                    content: "13) Aspirinallergie",
                    follower: "woherbekannt"
                },
                {
                    type: "14) Bananenallergie",
                    content: "14) Bananenallergie",
                    follower: "woherbekannt"
                    
                }
            ]
        }
    ],


    woherbekannt:[
        {
            question: "Woher bekannt?",
            id: "19woherbekannt",
            videoUrl:'videos/19.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "eigene Vermutung / Beobachtung",
                    content: "eigene Vermutung / Beobachtung"
          
                },
                {
                    type: "noch keine Test gemacht",
                    content: "noch keine Test gemacht"
                },
                {
                    type: "kurze Tests beim Arzt gemacht",
                    content: "kurze Tests beim Arzt gemacht"
                },
                {
                    type: "ausführliche Tests beim Arzt gemacht",
                    content: "ausführliche Tests beim Arzt gemacht"
                }
            
            ]
        },
        {
            question: "Nehmen Sie aktuell regelmäßig Medikamente ein?",
            id: "20medikamente",
            videoUrl:'videos/20.mp4',
            //videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
            breakPoint: 0,
            posIndex:1,
            uiType:'button',
            answers: [
                {
                    type: "Ja",
                    content: "Ja",
                    follower: "medikamenteJa"
          
                },
                {
                    type: "Nein",
                    content: "Nein",
                    follower: "gewicht"
                }
            
            ]
        }
    ],

    medikamenteJa:[
      {
        question: "Welche Medikamente nehmen Sie ein?",
        id: "21medikamenteJa",
        videoUrl:'videos/21.mp4',
        breakPoint: 4,
        posIndex:0,
        uiType:'dropdown',
        answers: [
            {
                type: "1 L-Thyroxin Henning (Schilddrüsen-Störung)",
                content: "1 L-Thyroxin Henning (Schilddrüsen-Störung)",
                follower: "gewicht"
            },
            {
                type: "2 Voltaren Dolo (Schmerzen und Fieber)",
                content: "2 Voltaren Dolo (Schmerzen und Fieber)",
                follower: "gewicht"
            },
            {
                type: "3 Beloc-Zoc mite (Bluthochdruck)",
                content: "3 Beloc-Zoc mite (Bluthochdruck)",
                follower: "gewicht"
            },
            {
                type: "4 Pantozol 20mg (Magen- und Darmbeschwerden)",
                content: "4 Pantozol 20mg (Magen- und Darmbeschwerden)",
                follower: "gewicht"
            },
            {
                type: "5 Nexium mups (Magengeschwür)",
                content: "5 Nexium mups (Magengeschwür)",
                follower: "gewicht"
            },
            {
                type: "6 Diclofenac-ratiopharm (Arthrose)",
                content: "6 Diclofenac-ratiopharm (Arthrose)",
                follower: "gewicht"
            },
            {
                type: "7 Novaminsulfon-ratiopharm (Schmerzen, Fieber)",
                content: "7 Novaminsulfon-ratiopharm (Schmerzen, Fieber)",
                follower: "gewicht"
            },
            {
                type: "8 Euthyrox 25 (Schilddrüsenfehlfunktion)",
                content: "8 Euthyrox 25 (Schilddrüsenfehlfunktion)",
                follower: "gewicht"
            },
            {
                type: "9 Diclac retard (Arthrose, Gelenkbeschwerden)",
                content: "9 Diclac retard (Arthrose, Gelenkbeschwerden)",
                follower: "gewicht"
            },
            {
                type: "10 Voltaren Emulgel (Zerrungen und Schwellungen)",
                content: "10 Voltaren Emulgel (Zerrungen und Schwellungen)",
                follower: "gewicht"
            },
            {
                type: "11 Metoprolol NK-ratiopharm (koronaren Herzkrankheiten)",
                content: "11 Metoprolol NK-ratiopharm (koronaren Herzkrankheiten)",
                follower: "gewicht"
            },
            {
                type: "12 MCP-ratiopharm Tabletten (Übelkeit)",
                content: "12 MCP-ratiopharm Tabletten (Übelkeit)",
                follower: "gewicht"
            },
            {
                type: "13 Allopurinol-ratiopharm (Gicht)",
                content: "13 Allopurinol-ratiopharm (Gicht)",
                follower: "gewicht"
            },
            {
                type: "14 Novalgin, Novalgin akut(Schmerzen, Fieber)",
                content: "14 Novalgin, Novalgin akut(Schmerzen, Fieber)",
                follower: "gewicht"
            },
            {
                type: "15 Olynth(Schnupfen und Nebenhöhlenentzündung)",
                content: "15 Olynth(Schnupfen und Nebenhöhlenentzündung)",
                follower: "gewicht"
            },
            {
                type: "16 Simva Hexal(erhöhte Blutfette)",
                content: "16 Simva Hexal(erhöhte Blutfette)",
                follower: "gewicht"
            },
            {
                type: "17 Nasenspray/Gel-ratiopharm(Schnupfen und Nebenhöhlenentzündungen)",
                content: "17 Nasenspray/Gel-ratiopharm(Schnupfen und Nebenhöhlenentzündungen)",
                follower: "gewicht"
            }
        ]
      }
    ],

    gewicht:[
      {
        question: "",
        id: "22gewicht",
        videoUrl:'videos/22.mp4',
        breakPoint: 4,
        posIndex:1,
        uiType:'textfield',
        answers: [
            {
                type: "Gewicht",
                content: "Gewicht"
            },
            {
                type: "Körpergröße",
                content: "Körpergröße"
            }
        ]
      },
      {
        question: "Trinkmenge",
        id: "23trinkmenge",
        videoUrl:'videos/23.mp4',
        breakPoint: 4,
        posIndex:1,
        uiType:'button',
        answers: [
            {
                type: "1 Liter",
                content: "1 Liter"
            },
            {
                type: "2 Liter",
                content: "2 Liter"
            },
            {
                type: "3 Liter & mehr",
                content: "3 Liter & mehr"
            }
        ]
      },
      {
        question: "Rauchen Sie?",
        id: "24rauchen",
        videoUrl:'videos/24.mp4',
        breakPoint: 0,
        posIndex:1,
        uiType:'button',
        answers: [
            {
                type: "Ja",
                content: "Ja",
                follower: "rauchenJa"
            },
            {
                type: "Nein",
                content: "Nein",
                follower: "finalList"
            }
        ]
      }
    ],


    rauchenJa:[
      {
        question: "Wird in Ihrer Umgebung geraucht, d. h. Sie sind Passivraucher?",
        id: "25rauchenJa",
        posIndex:1,
        videoUrl:'videos/25.mp4',
        breakPoint: 0,
        uiType:'button',
        answers: [
            {
                type: "Ja",
                content: "Ja",
                follower: "finalList"
            },
            {
                type: "Nein",
                content: "Nein",
                follower: "finalList"
            }
        ]
      }
    ],



    finalList:[
      {
        question: "Übelkeit?",
        id: "26Übelkeit",
        videoUrl:'videos/26.mp4',
        breakPoint: 0,
        posIndex:2,
        uiType:'button',
        answers: [
            {
                type: "Ja, starke Übelkeit",
                content: "Ja, starke Übelkeit"
            },
            {
                type: "Ja",
                content: "Ja"
            },
            {
                type: "Nein",
                content: "Nein"
            }
        ]
      },
      {
        question: "Beschaffenheit des Stuhlgang?",
        id: "27stuhlgang",
        videoUrl:'videos/27.mp4',
        breakPoint: 0,
        posIndex:1,
        uiType:'button',
        answers: [
            {
                type: "Normal",
                content: "Normal"
            },
            {
                type: "Flüssiger als sonst",
                content: "Flüssiger als sonst"
            },
            {
                type: "Durchfall",
                content: "Durchfall"
            },
            {
                type: "Dicker als sonst",
                content: "Dicker als sonst"
            },
            {
                type: "Verstopfung ",
                content: "Verstopfung "
            }
        ]
      },
      {
        question: "Blut im Stuhl?",
        id: "28blutImSthul",
        videoUrl:'videos/28.mp4',
        breakPoint: 0,
        posIndex:1,
        uiType:'button',
        answers: [
            {
                type: "nein",
                content: "nein"
            },
            {
                type: "eher selten",
                content: "eher selten"
            },
            {
                type: "häufig",
                content: "häufig"
            },
            {
                type: "immer",
                content: "immer"
            }
        ]
      },
      {
        question: "Gewichtsverlust in den letzten 3 Monaten?",
        id: "30gewichtsverlust",
        videoUrl:'videos/30.mp4',
        breakPoint: 0,
        posIndex:1,
        uiType:'button',
        answers: [
            {
                type: "Nein",
                content: "Nein"
            },
            {
                type: "ja, etwas",
                content: "ja, etwas"
            },
            {
                type: "ja, sehr viel",
                content: "ja, sehr viel"
            },
            {
                type: "ich bin mir nicht sicher",
                content: "ich bin mir nicht sicher"
            }
        ]
      },
      {
        question: "Sonstige Hinweise",
        id: "31stuhlgang",
        videoUrl:'videos/31.mp4',
        breakPoint: 11,
        posIndex:1,
        uiType:'textfield',
        answers: [
            {
                type: "tippen",
                content: "tippen Sie hier ein was Sie dem Arzt noch mitteilen wollen..."
            }
        ]
      },
      {
        question: "Anamnese abschicken",
        id: "32ende",
        videoUrl:'videos/32.mp4',
        breakPoint: 0,
        posIndex:0,
        uiType:'button',
        answers: [
            {
                type: "Bestätigen",
                content: "Bestätigen"
            }
        ]
      }
    ]
};


export default quizQuestions;