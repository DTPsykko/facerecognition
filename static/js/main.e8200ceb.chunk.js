(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a.p+"static/media/brain.935bb6a8.png"},37:function(e,t,a){e.exports=a(97)},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},54:function(e,t,a){},97:function(e,t,a){"use strict";a.r(t);var n=a(4),l=a.n(n),i=a(18),r=a.n(i),s=(a(42),a(0)),c=a(1),o=a(5),m=a(3),u=a(6),p=function(e){var t=e.onRouteChange;return e.isSignedIn?l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):l.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},l.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Sign In"),l.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},d=(a(44),function(e){var t=e.imageUrl,a=e.box;return l.a.createElement("div",{className:"center ma"},l.a.createElement("div",{className:"absolute mt2"},l.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",height:"auto",sss:!0}),l.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),b=a(34),h=a.n(b),g=a(35),f=a.n(g),E=(a(46),function(){return l.a.createElement("div",{className:"ma4 mt0"},l.a.createElement(h.a,{className:"Tilt br2 shadow-2",options:{max:35},style:{height:125,width:125}},l.a.createElement("div",{className:"Tilt-inner pa3"},l.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:f.a}))))}),w=(a(48),function(e){var t=e.onInputChange,a=e.onButtonSubmit;return l.a.createElement("div",null,l.a.createElement("p",{className:"f3"},"This Magic Brain will detect all faces displayed on your picture. Try it out"),l.a.createElement("div",{className:"center"},l.a.createElement("div",{className:" form center pa4 br3 shadow-5"},l.a.createElement("input",{className:"f4 pa2 w-70 center",type:"tex",onChange:t}),l.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))}),v=function(){return l.a.createElement("div",null,l.a.createElement("div",{className:"white f3"},"null, your current rank is..."),l.a.createElement("div",{className:"white f1"},"#null"))},N=function(e){var t=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),l.a.createElement("div",{className:"lh-copy mt3"},l.a.createElement("p",{onClick:function(){return t("register")},href:"#0",className:"f6 link dim black db pointer"},"Register")))))},y=function(e){var t=e.onRouteChange;return l.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},l.a.createElement("main",{className:"pa4 black-80"},l.a.createElement("div",{className:"measure"},l.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},l.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"name",id:"name"})),l.a.createElement("div",{className:"mt3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Email"),l.a.createElement("input",{className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),l.a.createElement("div",{className:"mv3"},l.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),l.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password"}))),l.a.createElement("div",{className:""},l.a.createElement("input",{onClick:function(){return t("signin")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"})))))},C=a(36),k=a.n(C),S=(a(54),a(19)),x=a.n(S),R=new x.a.App({apiKey:"0efc0e6b1c984f15a14654bf074d2109"}),F=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(o.a)(this,Object(m.a)(t).call(this))).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),l=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*l,rightCol:n-t.right_col*n,bottomRow:l-t.bottom_row*l}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),R.models.predict(x.a.FACE_DETECT_MODEL,e.state.input).then(function(t){return e.displayFaceBox(e.calculateFaceLocation(t))}).catch(function(e){return console.log(e)})},e.onRouteChange=function(t){"signout"===t?e.setState({isSignedIn:!1}):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin",isSignedIn:!1},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(k.a,{className:"particles",id:"tsparticles",init:function(e){},loaded:function(e){},options:{background:{color:{value:"#FF5EDF1"}},fpsLimit:120,interactivity:{events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!0,mode:"repulse"},resize:!0},modes:{bubble:{distance:400,duration:2,opacity:.8,size:40},push:{quantity:8},repulse:{distance:200,duration:.6}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:150,enable:!0,opacity:.5,width:1},collisions:{enable:!1},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:3,straight:!1},number:{density:{enable:!0,area:800},value:80},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:5}},detectRetina:!0}}),l.a.createElement(p,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?l.a.createElement("div",null,l.a.createElement(E,null),l.a.createElement(v,null),l.a.createElement(w,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),l.a.createElement(d,{box:this.state.box,imageUrl:this.state.imageUrl})):"signin"===this.state.route?l.a.createElement(N,{onRouteChange:this.onRouteChange}):l.a.createElement(y,{onRouteChange:this.onRouteChange}))}}]),t}(n.Component),I=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,99)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,i=t.getLCP,r=t.getTTFB;a(e),n(e),l(e),i(e),r(e)})};a(94);r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(F,null)),document.getElementById("root")),I()}},[[37,4,2]]]);
//# sourceMappingURL=main.e8200ceb.chunk.js.map