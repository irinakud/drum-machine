(this["webpackJsonpdrum-machine"]=this["webpackJsonpdrum-machine"]||[]).push([[0],{12:function(e,t,r){},13:function(e,t,r){},15:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r.n(n),i=r(7),s=r.n(i),c=(r(12),r(2)),d=r(3),o=r(5),m=r(4),p=(r(13),r(0)),u=function(e){Object(o.a)(r,e);var t=Object(m.a)(r);function r(){return Object(c.a)(this,r),t.apply(this,arguments)}return Object(d.a)(r,[{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress.bind(this))}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress.bind(this))}},{key:"handleKeyPress",value:function(e){e.keyCode===this.props.keyCode&&this.playSound()}},{key:"playSound",value:function(){var e=document.getElementById(this.props.keyTrigger);e.currentTime=0,e.play(),this.props.updateDisplay(this.props.name)}},{key:"render",value:function(){return Object(p.jsxs)("button",{className:"drum-pad grid-item btn btn-dark",onClick:this.playSound.bind(this),id:this.props.name,children:[this.props.keyTrigger,Object(p.jsx)("audio",{className:"clip",src:this.props.url,id:this.props.keyTrigger})]})}}]),r}(a.a.Component),l=[{keyCode:81,keyTrigger:"Q",id:"Heater-1",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"},{keyCode:87,keyTrigger:"W",id:"Heater-2",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"},{keyCode:69,keyTrigger:"E",id:"Heater-3",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"},{keyCode:65,keyTrigger:"A",id:"Heater-4",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"},{keyCode:83,keyTrigger:"S",id:"Clap",url:"https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"},{keyCode:68,keyTrigger:"D",id:"Open-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"},{keyCode:90,keyTrigger:"Z",id:"Kick-n'-Hat",url:"https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"},{keyCode:88,keyTrigger:"X",id:"Kick",url:"https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"},{keyCode:67,keyTrigger:"C",id:"Closed-HH",url:"https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"}],h=function(e){Object(o.a)(r,e);var t=Object(m.a)(r);function r(e){var n;return Object(c.a)(this,r),(n=t.call(this,e)).state={name:""},n}return Object(d.a)(r,[{key:"displayClipName",value:function(e){console.log(e),this.setState({name:e})}},{key:"render",value:function(){var e=this;return Object(p.jsx)("div",{class:"container-fluid",children:Object(p.jsx)("div",{id:"wrapper",children:Object(p.jsxs)("div",{id:"drum-machine",children:[Object(p.jsxs)("div",{class:"name card card-heading text-center bg-info text-white",children:["Music playing: ",Object(p.jsx)("span",{id:"display",children:this.state.name})]}),Object(p.jsx)("div",{class:"grid-container",children:l.map((function(t,r){return Object(p.jsx)(u,{keyTrigger:t.keyTrigger,url:t.url,keyCode:t.keyCode,updateDisplay:e.displayClipName.bind(e),name:t.id})}))})]})})})}}]),r}(a.a.Component),y=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,16)).then((function(t){var r=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),a(e),i(e),s(e)}))};s.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(h,{})}),document.getElementById("root")),y()}},[[15,1,2]]]);
//# sourceMappingURL=main.166d4ecf.chunk.js.map