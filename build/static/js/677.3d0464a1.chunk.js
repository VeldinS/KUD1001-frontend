"use strict";(self.webpackChunkkud_frontend=self.webpackChunkkud_frontend||[]).push([[677],{3677:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(4165),a=t(5861),l=t(4942),r=t(1413),s=t(6459),o=t(9439),c=t(2791),m=t(7689),d=t(1912),u=t(8345),x=t(142),p=t(501),f=t(8301),h=t(7962),j=t(586),A=t(737),v=t(9879),N=t(5145),Z=t(7907),g=(t(8595),t(7205)),b=t(184),I=j.Z.Content,y=j.Z.Sider,C=function(){var e=(0,c.useState)({name:"",location:"",country:"",date:"",text:"",image1:"",image2:""}),n=(0,o.Z)(e,2),t=n[0],C=n[1],T=(0,c.useState)(""),k=(0,o.Z)(T,2),E=k[0],O=k[1],S=(0,c.useState)(""),V=(0,o.Z)(S,2),w=V[0],D=V[1],J=(0,c.useContext)(Z.V),L=(0,c.useState)(!1),F=(0,o.Z)(L,2),K=F[0],U=F[1],P=A.Z.useToken();(0,s.Z)(P.token);var R=(0,m.s0)(),B=function(e){var n=e.target,i=n.name,a=n.value;C((0,r.Z)((0,r.Z)({},t),{},(0,l.Z)({},i,a)))},z=function(){var e=(0,a.Z)((0,i.Z)().mark((function e(n){var a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),a={name:t.name,location:t.location,country:t.country,date:t.date,text:t.text,image1:E,image2:w},e.next=4,d.Z.post("http://localhost:5000/Admin/Control-panel/Activities/Add",a,{headers:{"Content-Type":"application/json"}});case 4:e.sent,alert("AKTIVNOST USPJE\u0160NO OBJAVLJENA"),R("/Admin/Control-panel");case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){var e=function(){window.innerWidth<576?U(!0):U(!1)};return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e)}}),[]),(0,b.jsxs)(j.Z,{style:{minHeight:"max-content"},children:[(0,b.jsx)(y,{collapsible:!0,collapsed:K,onCollapse:function(e){return U(e)},children:(0,b.jsxs)(v.Z,{theme:"dark",defaultSelectedKeys:["3"],mode:"inline",children:[(0,b.jsx)("div",{style:{height:32,margin:16,background:"rgba(255, 255, 255, 0.2)"}}),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(u.Z,{}),onClick:function(){return R("/")},children:"PO\u010cETNA"},"1"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(u.Z,{}),onClick:function(){return R("/Admin/Control-panel")},children:"ADMIN PANEL"},"2"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(x.Z,{}),onClick:function(){return R("/Admin/Control-panel/Activities/Add")},children:(0,b.jsx)("b",{children:"NOVA AKTIVNOST"})},"3"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(p.Z,{}),onClick:function(){return R("/Admin/Control-panel/Activities/Select")},children:"UREDI AKTIVNOSTI"},"4"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(x.Z,{}),onClick:function(){return R("/Admin/Control-panel/Notifications/Add")},children:"NOVA OBAVIJEST"},"5"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(p.Z,{}),onClick:function(){return R("/Admin/Control-panel/Notifications/Select")},children:"UREDI OBAVIJESTI"},"6"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(f.Z,{}),onClick:function(){return R("/Admin/Control-panel/Memberships")},children:"NOVI \u010cLANOVI"},"7"),(0,b.jsx)(v.Z.Item,{icon:(0,b.jsx)(h.Z,{}),onClick:function(){J.logout(),R("/Login")},children:"LOGOUT"},"8")]})}),(0,b.jsx)(j.Z,{className:"site-layout",children:(0,b.jsx)(I,{style:{margin:"0 0"},children:(0,b.jsx)("div",{className:"addActivity-page-main",style:{minHeight:"100vh",backgroundImage:"linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(".concat(g,")"),backgroundSize:"cover",height:"max-content"},children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)("div",{className:"col-8 form-pt-1",children:(0,b.jsxs)("form",{onSubmit:z,className:"text-center addActivity-form",children:[(0,b.jsxs)("div",{className:"mb-3 addActivity-form1",children:[(0,b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"NAZIV AKTIVNOSTI"}),(0,b.jsx)("input",{type:"text",name:"name",value:t.name,onChange:B,className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp"})]}),(0,b.jsxs)("div",{className:"mb-3 addActivity-form1",children:[(0,b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"GRAD"}),(0,b.jsx)("input",{type:"text",name:"location",value:t.location,onChange:B,className:"form-control",id:"exampleInputPassword1"})]}),(0,b.jsxs)("div",{className:"mb-3 addActivity-form1",children:[(0,b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"DR\u017dAVA"}),(0,b.jsx)("input",{type:"text",name:"country",value:t.country,onChange:B,className:"form-control",id:"exampleInputPassword1"})]}),(0,b.jsxs)("div",{className:"mb-3 addActivity-form1",children:[(0,b.jsx)("label",{htmlFor:"exampleInputEmail1",className:"form-label",children:"DETALJAN TEKST"}),(0,b.jsx)("input",{type:"text",name:"text",value:t.text,onChange:B,className:"form-control addActivity-form2",id:"exampleInputPassword1"})]})]})}),(0,b.jsx)("div",{className:"col-4 form-pt-2",children:(0,b.jsxs)("form",{onSubmit:z,children:[(0,b.jsxs)("div",{className:"mb-3 addActivity-form1 addActivity-form3",children:[(0,b.jsx)("label",{htmlFor:"date-input",className:"form-label",children:"DATUM"}),(0,b.jsx)("br",{}),(0,b.jsx)(N.Z,{name:"date",onChange:function(e,n){C((0,r.Z)((0,r.Z)({},t),{},{date:n}))}})]}),(0,b.jsxs)("div",{className:"addActivity-form3",children:[(0,b.jsx)("p",{children:"ODABERITE 2 FOTOGRAFIJE ZA VA\u0160U NOVU AKTIVNOST!"}),(0,b.jsx)("input",{name:"image",type:"file",accept:".jpeg, .png, .jpg",multiple:!0,onChange:function(e){O(e.target.files[0].name),D(e.target.files[1].name),console.log(e.target.files)}})]}),(0,b.jsx)("div",{className:"addActivity-form3",children:(0,b.jsx)("button",{type:"submit",className:"btn btn-primary form-btn",children:"OBJAVI"})})]})})]})})})})]})}},7205:function(e,n,t){e.exports=t.p+"static/media/image1.d650ea8f9a30ba8c49d9.jpg"}}]);
//# sourceMappingURL=677.3d0464a1.chunk.js.map