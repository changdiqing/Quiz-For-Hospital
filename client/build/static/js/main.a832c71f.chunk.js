(this["webpackJsonpquiz-app"]=this["webpackJsonpquiz-app"]||[]).push([[0],{123:function(e,t,n){e.exports=n(176)},128:function(e,t,n){},131:function(e,t,n){e.exports=n.p+"static/media/icon.6f8bf802.png"},132:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),s=n.n(r),i=(n(128),n(25)),c=n(21),u=n.n(c),l=n(22),p=n(19),d=n(29),m=n(30),h=n(26),y=n(32),f=n(52),w=n.n(f),v=(n(131),n(132),n(133),n(134),{margin:"0px"});var g=function(e){return o.a.createElement("div",{className:"question",style:v},e.content)},b={initQuestions:[{sectionTitle:"This is the title of this section, should be skipped during quiz!"},{question:"How much you drink on average per day?",id:"drink_amount",videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",breakPoint:0,uiType:"button",answers:[{type:"ca. 1 Liter",content:"ca. 1 Liter"},{type:"ca. 1.5-2 Liter",content:"ca. 1.5-2 Liter"},{type:"ca. 2-3 Liter",content:"ca. 2-3 Liter"}]},{question:"Which console would you prefer to play with friends?",id:"console",videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",breakPoint:0,uiType:"button",answers:[{type:"Microsoft",content:"X-Box",follower:"secondQuestion"},{type:"Nintendo",content:"Nintendo 64",follower:"secondQuestion"},{type:"Sony",content:"Playstation 1",follower:"secondQuestion"}]}],secondQuestion:[{question:"How much you drink on average every day?",id:"drink_amount2",videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",breakPoint:3,uiType:"dropdown",answers:[{type:"ca. 1 Liter",content:"ca. 1 Liter"},{type:"1.5-2 Liter",content:"1.5-2 Liter"},{type:"2-3 Liter",content:"2-3 Liter"}]}],finalList:[{question:"How much you drink on average every day?",id:"drink_amount2",videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",breakPoint:3,uiType:"dropdown",answers:[{type:"ca. 1 Liter",content:"ca. 1 Liter"},{type:"1.5-2 Liter",content:"1.5-2 Liter"},{type:"2-3 Liter",content:"2-3 Liter"}]},{question:"How much you drink on average every day?",id:"drink_amount2",videoUrl:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",breakPoint:3,uiType:"dropdown",answers:[{type:"ca. 1 Liter",content:"ca. 1 Liter"},{type:"1.5-2 Liter",content:"1.5-2 Liter"},{type:"2-3 Liter",content:"2-3 Liter"}]}]},k=(n(60),n(177));var O=n(211),E=n(180),q=n(181),C=n(213),T=n(183),j=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleChange=function(e){n.setState({dropDownValue:e.target.value}),console.log("############"),console.log(e.target.value),n.result[0]=n.props.answerOptions[e.target.value],console.log(n.result[0])},n.handleClick=function(e){console.log(n.result),n.props.onAnswerSelected(n.result)},n.renderMenuItems=function(e,t){return o.a.createElement(C.a,{value:t},e.content)},n.state={dropDownValue:-1},n.result=[{type:"empty",content:"no answer selected"}],n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"DropdownList"},o.a.createElement(k.a,{margin:"normal"},o.a.createElement(T.a,{id:"demo-simple-select-label"}),o.a.createElement(q.a,{labelId:"demo-simple-select-label",value:this.state.dropDownValue,onChange:this.handleChange,style:{backgroundColor:"white"}},o.a.createElement(C.a,{value:-1},o.a.createElement("em",null,"Select an option")),this.props.answerOptions.map(this.renderMenuItems)),o.a.createElement(E.a,null),o.a.createElement(O.a,{variant:"contained",color:"primary",onClick:function(t){return e.handleClick(t)}},"Next Question")))}}]),t}(o.a.Component),L=n(212),x=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e){n.props.onAnswerSelected(n.result)},n.handleTextOnChange=function(e,t){n.result[t].content=e.currentTarget.value,console.log(n.result)},n.renderTextfields=function(e,t){return o.a.createElement(L.a,{key:e.type,onChange:function(e){return n.handleTextOnChange(e,t)},label:e.type})},n.result=n.props.answerOptions,n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"DropdownList"},o.a.createElement(k.a,{margin:"normal"},o.a.createElement(T.a,{id:"demo-simple-select-label"}),this.props.answerOptions.map(this.renderTextfields),o.a.createElement(E.a,null),o.a.createElement(O.a,{variant:"contained",color:"primary",onClick:this.handleClick},"Next Question")))}}]),t}(o.a.Component),Q={margin:"10px"},B=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).handleClick=function(e,t){n.setState({result:[n.props.answerOptions[t]]},(function(){n.props.onAnswerSelected(n.state.result)}))},n.renderButtons=function(e,t){return o.a.createElement(O.a,{key:e.type,variant:"contained",color:"primary",style:Q,onClick:function(e){return n.handleClick(e,t)}},e.content)},n.state={result:[{type:"empty",content:"no answer selected"}]},n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"ButtonList"},o.a.createElement(k.a,{margin:"normal"},this.props.answerOptions.map(this.renderButtons),o.a.createElement(E.a,null)))}}]),t}(o.a.Component);var N=function(e){return o.a.createElement("div",{className:e.isVisible?"quiz":"hidden"},o.a.createElement("div",{className:"quiz-background"}),o.a.createElement(g,{content:e.question}),o.a.createElement(k.a,{margin:"normal"},"button"==e.uiType?(t=e.answerOptions,o.a.createElement(B,{answerOptions:t,onAnswerSelected:e.rewindFromComponent})):"dropdown"==e.uiType?function(t){return o.a.createElement(j,{answerOptions:t,onAnswerSelected:e.rewindFromComponent})}(e.answerOptions):function(t){return o.a.createElement(x,{answerOptions:t,onAnswerSelected:e.rewindFromComponent})}(e.answerOptions)));var t};var S=function(e){function t(e){return o.a.createElement("p",{key:e.type}," ",e.type,"  ",e.content)}return console.log(e),o.a.createElement("div",{className:"result"},o.a.createElement("div",{className:"quiz-background"}),o.a.createElement("div",{className:"resultContent"},o.a.createElement("h2",null,"Your quiz is finished!"),e.history.map((function(e){return o.a.createElement("ul",{key:e.question},o.a.createElement("p",{key:e.question},e.question),e.answer.map(t))}))))},z=(n(149),n(112)),P={position:"absolute",top:"10%",left:"40%",width:"40%"},D=(o.a.Component,function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(d.a)(this,Object(m.a)(t).call(this,e))).fetchPatientList=function(){var e,t,n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(fetch("/api/fetch-patient-list"));case 2:return e=a.sent,a.next=5,u.a.awrap(e.json());case 5:if(t=a.sent,200===e.status){a.next=8;break}throw Error(t.message);case 8:return n=t,console.log(n[0].patient),a.abrupt("return",n);case 11:case"end":return a.stop()}}))},n.fetchDataByID=function(e){var t,n,a;return u.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,u.a.awrap(fetch("/api/fetch-data-by-id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}));case 2:return t=o.sent,o.next=5,u.a.awrap(t.json());case 5:if(n=o.sent,201===t.status){o.next=8;break}throw Error(n.message);case 8:return a=n,o.abrupt("return",a);case 10:case"end":return o.stop()}}))},n.savePatientData=function(e){var t,a;return u.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("called!"),e.next=3,u.a.awrap(fetch("/api/add-patient-data",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({data:n.patient_data})}));case 3:return t=e.sent,e.next=6,u.a.awrap(t.text());case 6:a=e.sent,n.setState({responseToPost:a});case 8:case"end":return e.stop()}}))},n.removeDataByID=function(e){var t,n;return u.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,u.a.awrap(fetch("/api/remove-data-by-id",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e})}));case 2:return t=a.sent,a.next=5,u.a.awrap(t.json());case 5:if(n=a.sent,201===t.status){a.next=8;break}throw Error(n.message);case 8:case"end":return a.stop()}}))},n.state={counter:0,questionId:1,question:"",answerOptions:[],answer:"",uiType:"",answersCount:{Nintendo:0,Microsoft:0,Sony:0},breakPoint:0,result:"",showQuiz:!1,videoUrl:"",response:"reponse",post:"post",responseToPost:""},n.history=new Array,n.rewindFromComponent=n.rewindFromComponent.bind(Object(h.a)(n)),n.handleVideoTimeUpdate=n.handleVideoTimeUpdate.bind(Object(h.a)(n)),n.currentQuestion=new Array,n.patient_data={name:"frontend musterman",personalId:"frontend-musterman",quizAnswers:[]},n}return Object(y.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.load_qList("initQuestions")}},{key:"componentDidMount",value:function(){}},{key:"handleVideoTimeUpdate",value:function(e){var t=this.state.breakPoint;0==this.state.showQuiz&&e.currentTarget.currentTime>=t&&this.setState({showQuiz:!0})}},{key:"load_question",value:function(e,t){for(;"sectionTitle"in this.currentQuestion[e];)t+=1,e+=1;this.setState({questionId:t,counter:e,answer:"",question:this.currentQuestion[e].question,answerOptions:this.currentQuestion[e].answers,videoUrl:this.currentQuestion[e].videoUrl,uiType:this.currentQuestion[e].uiType,breakPoint:this.currentQuestion[e].breakPoint})}},{key:"load_qList",value:function(e){this.currentQuestion=b[e],this.load_question(0,1)}},{key:"setUserAnswer",value:function(e){console.log("before pusing to history"),console.log(this.history),this.history.push({question:this.currentQuestion[this.state.counter].question,answer:e}),this.patient_data.quizAnswers.push({question:this.currentQuestion[this.state.counter].question,id:this.currentQuestion[this.state.counter].id,answer:e});var t=w()(this.state.answersCount,Object(i.a)({},e,{$apply:function(e){return e+1}}));console.log(t),this.setState({answersCount:t,answer:e})}},{key:"setNextQuestion",value:function(){var e=this.state.counter+1,t=this.state.questionId+1;this.load_question(e,t)}},{key:"rewindFromComponent",value:function(e){var t=this;console.log("===== so the answer is ====="),console.log(e),console.log(this.history),this.setUserAnswer(e),"follower"in this.currentQuestion[this.state.counter].answers[1]?this.load_qList("secondQuestion"):this.state.questionId<this.currentQuestion.length?setTimeout((function(){return t.setNextQuestion()}),300):(this.savePatientData(this.patient_data),setTimeout((function(){return t.setResults("undetermined")}),300))}},{key:"obsolete_getResults",value:function(){var e,t=this.state.answersCount,n=Object.keys(t),a=n.map((function(e){return t[e]})),o=Math.max.apply(null,a);for(e in n.filter((function(e){return t[e]===o})),t)console.log(t[e]);return n.filter((function(e){return t[e]===o}))}},{key:"setResults",value:function(e){this.setState({result:"Undetermined"})}},{key:"renderQuiz",value:function(){return o.a.createElement(N,{answer:this.state.answer,answerOptions:this.state.answerOptions,questionId:this.state.questionId,question:this.state.question,rewindFromComponent:this.rewindFromComponent,isVisible:this.state.showQuiz,uiType:this.state.uiType})}},{key:"renderResult",value:function(){return o.a.createElement(S,{quizResult:this.state.result,history:this.history})}},{key:"getDBContent",value:function(){console.log("get db content")}},{key:"getDataByID",value:function(){console.log("get data by id")}},{key:"saveDataToDB",value:function(){console.log("save data")}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"App-body"},o.a.createElement("script",{type:"text/javascript",src:"/Riy1/viewer.js?w=600&780"}),o.a.createElement("div",{className:"quiz-player-wrapper"},o.a.createElement(z.Player,{ref:function(t){e.player=t},className:"quiz-player",playsInline:!0,onTimeUpdate:function(t){return e.handleVideoTimeUpdate(t)},autoPlay:!0,muted:!0,poster:"/assets/poster.png",src:this.state.videoUrl}),o.a.createElement("div",{className:"quiz-wrapper"},this.state.result?this.renderResult():this.renderQuiz()))))}}]),t}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.a832c71f.chunk.js.map