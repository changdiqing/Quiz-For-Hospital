var quizQuestions = { 
    initQuestions: [
      {
        sectionTitle: "This is the title of this section, should be skipped during quiz!" 
      },
      {
        question: "How much you drink on average per day?",
        //videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
        videoUrl:'https://drive.google.com/file/d/1Ar2wEe23l4lwShmXeoPbCL4yt60eu8nk/view',
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
        videoUrl: 'https://drive.google.com/file/d/1Ar2wEe23l4lwShmXeoPbCL4yt60eu8nk/view',
        uiType:'button',
        answers: [
            {
                type: "Microsoft",
                content: "X-Box",
                follower: "secondQuestion"
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
        videoUrl:'https://www.youtube.com/watch?v=3-iCDOYkfms',
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
    ]
};


export default quizQuestions;