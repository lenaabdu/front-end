(this["webpackJsonpfront-end"]=this["webpackJsonpfront-end"]||[]).push([[0],{101:function(e,t,a){e.exports=a(182)},106:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),i=a.n(l),o=(a(106),a(11)),c=a(12),s=a(25),d=a(24),u=(a(43),a(31)),m=a(6),p=a(33),h=(a(44),a(185)),b=a(28),E=a(40),f=a.n(E),g="https://back-end-app-1.herokuapp.com",v=function(){function e(){Object(o.a)(this,e)}return Object(c.a)(e,[{key:"apiCall",value:function(e,t,a){return f()({method:e,url:t,data:a})}},{key:"getUser",value:function(){return this.apiCall("get","".concat(g,"/register"))}},{key:"addUser",value:function(e,t,a,n){return this.apiCall("post","".concat(g,"/register"),{email:e,password:t,confirmPassword:a,eircode:n})}}]),e}(),w=a(32),k=a(42),y=(a(125),a(92)),_=new FormData,S=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).emailChange=function(e){n.setState({email:e.target.value})},n.passwordChange=function(e){n.setState({password:e.target.value})},n.confirmPasswordChange=function(e){n.setState({confirmPassword:e.target.value})},n.eircode=function(e){n.setState({eircode:e.target.value})},n.fileChangeHandler=function(e){n.setState({fileData:e.target.files[0],fileDIS:URL.createObjectURL(e.target.files[0])})},n.notify=function(){Object(k.a)("Success")},n.state={users:[],disabled:!1,email:"",password:"",confirmPassword:"",eircode:"",fileData:""},n.client=new v,k.a.configure(),n}return Object(c.a)(a,[{key:"SubmitHandler",value:function(e){var t=this;e.preventDefault(),this.props.confirmPassword!==this.props.password&&(alert("Passwords do not match"),window.location.reload()),this.props.confirmPassword===this.props.password&&(e.preventDefault(),this.setState({disabled:!0}),this.client.addUser(e.target.email.value,e.target.password.value,e.target.confirmPassword.value,e.target.eircode.value).then((function(){t.setState({disabled:!1}),document.getElementById("addForm").reset(),t.client.getUser().then((function(e){return t.setState({users:e.data})})),k.a.success("You registration has been saved.",{position:k.a.POSITION.TOP_CENTER}),alert("please check your email and password and try again")})).catch((function(){alert("please check your email and password and try again"),t.setState({disabled:!1}),window.location.reload()})),_.append("image",this.state.fileData),fetch("https://back-end-app-1.herokuapp.com/single",{method:"POST",body:_}).then((function(e){console.log("File Sent Successful")})).catch((function(e){console.log(e.message)})),window.location.reload())}},{key:"render",value:function(){var e=this;return r.a.createElement(w.a,null,r.a.createElement("h3",{className:" home"},"Register")," ",r.a.createElement("br",null),r.a.createElement(m.a,{className:"form",onSubmit:function(t){return e.SubmitHandler(t)},id:"addForm"},r.a.createElement(m.a.Group,{className:"mb-3"},r.a.createElement(m.a.Label,null,"Email Address"),r.a.createElement(m.a.Control,{placeholder:"Enter you email ",type:"email",name:"email",disabled:this.state.disabled,required:!0})),r.a.createElement(m.a.Group,{className:"mb-3"},r.a.createElement(m.a.Label,null,"Password"),r.a.createElement(m.a.Control,{placeholder:"password",type:"password",name:"password",minLength:"8",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",required:!0,disabled:this.state.disabled})),r.a.createElement(m.a.Group,{className:"mb-3"},r.a.createElement(m.a.Label,null,"Confirm Password"),r.a.createElement(m.a.Control,{placeholder:"confirm password",type:"password",name:"confirmPassword",pattern:"(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{8,}",title:"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",required:!0,disabled:this.state.disabled,minLength:"8"})),r.a.createElement(m.a.Group,{className:"mb-3"},r.a.createElement(m.a.Label,null,"Eircode"),r.a.createElement(m.a.Control,{name:"eircode",type:"text",placeholder:"eircode",pattern:"(?:^[AC-FHKNPRTV-Y][0-9]{2}|D6W)[ -]?[0-9AC-FHKNPRTV-Y]{4}$",title:"Please enter a valid eircode",disabled:this.state.disabled})),r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Label,null,"Profile Image ")," ",r.a.createElement("br",null),r.a.createElement("input",{type:"file",accept:".jpg, .jpeg, .png",id:"image_uploads",onChange:function(t){return e.fileChangeHandler(t)}}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(h.a,{xs:6,md:4},r.a.createElement(y.a,{className:"img",src:this.state.fileDIS}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"dark",type:"submit",disabled:this.state.disabled}," Submit "),r.a.createElement("br",null),r.a.createElement("p",{className:"link"},"   ",r.a.createElement("br",null),"Already have an account? ",r.a.createElement(b.b,{to:"/login"},"Sign In"))))}}]),a}(r.a.Component),C=a(53),N=a(10),x=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={disabled:!1},n}return Object(c.a)(a,[{key:"submitHandler",value:function(e){var t=this;e.preventDefault(),this.setState({disabled:!0}),this.props.client.login(e.target.email.value,e.target.password.value).then((function(e){t.setState({disabled:!1}),t.props.loggedIn(e.data.token)})).catch((function(){alert("please check your email and password and try again"),t.setState({disabled:!1}),window.location.reload()}))}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(u.a,{bg:"dark",variant:"dark",fixed:"top",expand:"md"},r.a.createElement(u.a.Brand,null,"Navbar"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(b.b,{className:"nav-link",to:"/register"},"Register"),r.a.createElement(b.b,{className:"nav-link",to:"/login"},"Login")))),r.a.createElement(w.a,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{path:"/register"},r.a.createElement(S,null)),r.a.createElement(w.a,null,r.a.createElement(N.a,{path:"/login"},r.a.createElement("h3",{className:" home"},"Login")," ",r.a.createElement("br",null),r.a.createElement(m.a,{onSubmit:function(t){return e.submitHandler(t)}},r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(m.a.Label,null,"Email"),r.a.createElement(m.a.Control,{type:"email",name:"email",placeholder:"Enter you email",disabled:this.state.disabled}),r.a.createElement("br",null)),r.a.createElement("p",null,"Password"),r.a.createElement(m.a.Control,{type:"password",name:"password",placeholder:" Enter you Password",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"dark",type:"submit",disabled:this.state.disabled}," Login "),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicCheckbox"},r.a.createElement("p",{className:"link "},r.a.createElement("br",null),"Don't have an account? ",r.a.createElement(b.b,{to:"/register"},"Sign Up"),"    ",r.a.createElement("br",null))))))))))}}]),a}(r.a.Component),A=(a(133),function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={disabled:!1},n}return Object(c.a)(a,[{key:"submitHandler",value:function(e){var t,a=this;e.preventDefault(),this.setState({disabled:!0}),this.props.currentAd?(t=this.props.client.updateAd(this.props.currentAd._id,e.target.location.value,e.target.date.value,e.target.min_temp.value,e.target.max_temp.value,e.target.wind_speed.value,e.target.wind_dir.value,e.target.wind_speed_night.value,e.target.wind_dir_night.value),document.getElementById("101").textContent="Submit"):t=this.props.client.addAd(e.target.location.value,e.target.date.value,e.target.min_temp.value,e.target.max_temp.value,e.target.wind_speed.value,e.target.wind_dir.value,e.target.wind_speed_night.value,e.target.wind_dir_night.value),console.log(this.props.client.addAd),t.then((function(){a.setState({disabled:!1}),document.getElementById("addForm").reset(),a.props.refreshList()})).catch((function(){console.log("catch"),alert("an error occured, please try again"),a.setState({disabled:!1})}))}},{key:"render",value:function(){var e,t,a,n,l,i,o,c,s=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,null,r.a.createElement("h2",{className:" home"},"  ",this.props.currentAd?"Edit":"Add New")," ",r.a.createElement("br",null),r.a.createElement(m.a,{onSubmit:function(e){return s.submitHandler(e)},id:"addForm"},r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(m.a.Label,null," Location"),r.a.createElement(m.a.Control,{id:"countryFlag",placeholder:"Location",type:"text",defaultValue:null===(e=this.props.currentAd)||void 0===e?void 0:e.location,name:"location",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"}),r.a.createElement(m.a.Label,null," Date"),r.a.createElement(m.a.Control,{placeholder:"Date time",type:"text",defaultValue:null===(t=this.props.currentAd)||void 0===t?void 0:t.date,name:"date",disabled:this.state.disabled}),r.a.createElement("br",null)),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(m.a.Label,null,"Min Temp"),r.a.createElement(m.a.Control,{placeholder:"Number",type:"text",defaultValue:null===(a=this.props.currentAd)||void 0===a?void 0:a.min_temp,name:"min_temp",disabled:this.state.disabled}),r.a.createElement("br",null)),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"},r.a.createElement(m.a.Label,null,"Max Temp"),r.a.createElement(m.a.Control,{placeholder:"Number",type:"text",defaultValue:null===(n=this.props.currentAd)||void 0===n?void 0:n.max_temp,name:"max_temp",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"}),r.a.createElement(m.a.Label,null,"Wind Speed (day)"),r.a.createElement(m.a.Control,{placeholder:"Number",type:"text",defaultValue:null===(l=this.props.currentAd)||void 0===l?void 0:l.wind_speed,name:"wind_speed",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"}),r.a.createElement(m.a.Label,null," Wind Direction (day)"),r.a.createElement(m.a.Control,{placeholder:"Cardinal direction",type:"text",defaultValue:null===(i=this.props.currentAd)||void 0===i?void 0:i.wind_dir,name:"wind_dir",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"}),r.a.createElement(m.a.Label,null,"Wind Speed (night)"),r.a.createElement(m.a.Control,{placeholder:"Number",type:"text",defaultValue:null===(o=this.props.currentAd)||void 0===o?void 0:o.wind_speed_night,name:"wind_speed_night",disabled:this.state.disabled}),r.a.createElement("br",null),r.a.createElement(m.a.Group,{className:"mb-3",controlId:"formBasicEmail"}),r.a.createElement(m.a.Label,null,"Wind direction (night)"),r.a.createElement(m.a.Control,{placeholder:"Cardinal direction",type:"text",defaultValue:null===(c=this.props.currentAd)||void 0===c?void 0:c.wind_dir_night,name:"wind_dir_night",disabled:this.state.disabled}),r.a.createElement("br",null)),r.a.createElement(p.a,{id:"101",variant:"dark",type:"submit",disabled:this.state.disabled}," Submit "),r.a.createElement("br",null),r.a.createElement("br",null))))}}]),a}(r.a.Component)),L=a(97),O=a.n(L),j=a(50),I=(a(171),a(172),a(98)),F=a.n(I),P=a(66),D=a.n(P),B=a(99),G="https://back-end-app-1.herokuapp.com/",H=function(){function e(t,a){Object(o.a)(this,e),this.tokenProvider=t,this.logoutHandler=a}return Object(c.a)(e,[{key:"login",value:function(){var e=Object(B.a)(D.a.mark((function e(t,a){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f()({method:"post",url:"".concat(G,"auth"),data:{email:t,password:a}});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},{key:"autheticatedCall",value:function(e,t,a){var n=this;return f()({method:e,url:t,headers:{authorization:this.tokenProvider()},data:a}).catch((function(e){if(403===e.response.status)return n.logoutHandler(),Promise.reject();throw e}))}},{key:"getAds",value:function(){return this.autheticatedCall("get",G)}},{key:"addAd",value:function(e,t,a,n,r,l,i,o){return this.autheticatedCall("post",G,{location:e,date:t,min_temp:a,max_temp:n,wind_speed:r,wind_dir:l,wind_speed_night:i,wind_dir_night:o})}},{key:"removeAd",value:function(e){return this.autheticatedCall("delete","".concat(G).concat(e))}},{key:"updateAd",value:function(e,t,a,n,r,l,i,o,c){return this.autheticatedCall("put","".concat(G).concat(e),{location:t,date:a,min_temp:n,max_temp:r,wind_speed:l,wind_dir:i,wind_speed_night:o,wind_dir_night:c})}}]),e}(),T=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({seafilter:e.target.value})},n.state={ads:[],seafilter:"",currentAd:void 0,token:window.localStorage.getItem("token")},n.client=new H((function(){return n.state.token}),(function(){return n.logout()})),n}return Object(c.a)(a,[{key:"refreshList",value:function(){var e=this;this.props.client.getAds().then((function(t){return e.setState({ads:t.data})}))}},{key:"removeAdvert",value:function(e){this.props.client.removeAd(e).then(this.refreshList())}},{key:"updateAdvert",value:function(e){this.setState({currentAd:e}),document.getElementById("101").textContent="Update",this.refreshList()}},{key:"componentDidMount",value:function(){this.refreshList()}},{key:"logout",value:function(){window.localStorage.removeItem("token"),this.setState({token:void 0}),window.location.reload()}},{key:"render",value:function(){var e=this,t=F()({page:5}),a=[{dataField:"location",text:"Location",sort:!0},{dataField:"date",text:"Date",sort:!0},{dataField:"min_temp",text:" Max Temp",sort:!0},{dataField:"max_temp",text:" Max Temp",sort:!0},{dataField:"wind_speed",text:"Wind Speed (day)",sort:!0},{dataField:"wind_dir",text:" Wind Dir (day)",sort:!0},{dataField:"wind_speed_night",text:" Wind Speed (night)",sort:!0},{dataField:"wind_dir_night",text:" Wind direction (night)",sort:!0},{dataField:"_id",text:"Action",formatter:function(t,a){return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.removeAdvert(t)}}," Delete"),r.a.createElement("button",{onClick:function(){return e.updateAdvert(a)}},"Edit"))}}],n=this.state,l=n.seafilter,i=n.ads,o=l.toLowerCase(),c=i.filter((function(e){return Object.keys(e).some((function(t){return"string"===typeof e[t]&&e[t].toLowerCase().includes(o)}))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement(u.a,{bg:"dark",variant:"dark",fixed:"top",expand:"md"},r.a.createElement(u.a.Brand,null,"Dasboard"),r.a.createElement(u.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(u.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(C.a,{className:"mr-auto"},r.a.createElement(b.b,{className:"nav-link",to:"/Logout",onClick:function(){return e.logout()}},"logout")),r.a.createElement(m.a,{className:"d-flex"},r.a.createElement(j.a,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",value:l,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(p.a,{variant:"info"},"Search")))),r.a.createElement(w.a,{className:" home"}),r.a.createElement("div",{className:" home"},r.a.createElement(O.a,{bootstrap4:!0,keyField:"_id",data:c,columns:a,noDataIndication:"No Interfaces available",pagination:t,defaultSorted:[{dataField:"_id",order:"asc"}]})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(A,{client:this.props.client,refreshList:function(){e.refreshList(),e.setState({currentAd:void 0})},currentAd:this.state.currentAd})))}}]),a}(r.a.Component),W=function(e){Object(s.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={token:window.localStorage.getItem("token")},n.client=new H((function(){return n.state.token}),(function(){return n.logout()})),n}return Object(c.a)(a,[{key:"login",value:function(e){window.localStorage.setItem("token",e),this.setState({token:e})}},{key:"logout",value:function(){window.localStorage.removeItem("token"),this.setState({token:void 0})}},{key:"render",value:function(){var e=this;return this.state.token?r.a.createElement(T,{client:this.client}):r.a.createElement(x,{loggedIn:function(t){return e.login(t)},client:this.client})}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(W,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},44:function(e,t,a){}},[[101,1,2]]]);
//# sourceMappingURL=main.34e87717.chunk.js.map