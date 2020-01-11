var quizQuestions = { 
    initQuestions: [
      {
        sectionTitle: "This is the title of this section, should be skipped during quiz!" 
      },
      {
        question: "How much you drink on average per day?",
        //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
        videoUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        breakPoint: 3,
        uiType:'textfield',
        answers: [
            {
                type: "ca. 1 Liter",
                content: "ca. 1 Liter"
            },
            {
                type: "ca. 1.5-2 Liter",
                content: "ca. 1.5-2 Liter"
            },
            {
                type: "ca. 2-3 Liter",
                content: "ca. 2-3 Liter"
            }
        ]
      },
      {
        question: "Which console would you prefer to play with friends?",
        videoUrl: 'https://github.com/changdiqing/Quiz-For-Hospital/blob/master/media/intro.mp4?raw=true',
        breakPoint: 25,
        uiType:'dropdown',
        answers: [
            {
                type: "Microsoft",
                content: "X-Box",
                follower: "finalList"
            },
            {
                type: "Nintendo",
                content: "Nintendo 64",
                follower: "secondQuestion"
            },
            {
                type: "Sony",
                content: "Playstation 1",
                follower: "secondQuestion"
            }
        ]
      }
    ],

    secondQuestion:[
      {
        question: "How much you drink on average every day?",
        videoUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        breakPoint: 3,
        uiType:'button',
        answers: [
            {
                type: "ca. 1 Liter",
                content: "ca. 1 Liter"
            },
            {
                type: "1.5-2 Liter",
                content: "1.5-2 Liter"
            },
            {
                type: "2-3 Liter",
                content: "2-3 Liter"
            }
        ]
      }
    ],

    finalList:[
      {
        question: "How much you drink on average every day?",
        videoUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        breakPoint: 3,
        uiType:'dropdown',
        answers: [
            {
                type: "ca. 1 Liter",
                content: "ca. 1 Liter"
            },
            {
                type: "1.5-2 Liter",
                content: "1.5-2 Liter"
            },
            {
                type: "2-3 Liter",
                content: "2-3 Liter"
            }
        ]
      },
      {
        question: "How much you drink on average every day?",
        videoUrl:'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        breakPoint: 3,
        uiType:'dropdown',
        answers: [
            {
                type: "ca. 1 Liter",
                content: "ca. 1 Liter"
            },
            {
                type: "1.5-2 Liter",
                content: "1.5-2 Liter"
            },
            {
                type: "2-3 Liter",
                content: "2-3 Liter"
            }
        ]
      }
    ]
};


export default quizQuestions;