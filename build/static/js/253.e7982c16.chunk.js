"use strict";(self.webpackChunkkud_frontend=self.webpackChunkkud_frontend||[]).push([[253],{6253:function(n,e,t){t.r(e),t.d(e,{default:function(){return N}});var i=t(6459),c=t(9439),r=t(2791),a=t(7689),o=t(1087),s=t(9434),l=t(5001),d=t(8345),u=t(142),m=t(501),h=t(8301),f=t(7962),v=t(586),x=t(737),j=t(9879),g=t(7907),p=(t(8595),t(7205)),Z=t(184),b=v.Z.Content,A=v.Z.Sider,N=function(){var n=(0,r.useContext)(g.V),e=(0,r.useState)(!1),t=(0,c.Z)(e,2),N=t[0],C=t[1],k=x.Z.useToken();(0,i.Z)(k.token);var I=(0,a.s0)(),y=(0,s.I0)(),V=(0,s.v9)((function(n){return n.loadData}));return(0,r.useEffect)((function(){y((0,l.i)())}),[y]),(0,r.useEffect)((function(){var n=function(){window.innerWidth<576?C(!0):C(!1)};return n(),window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),(0,Z.jsxs)(v.Z,{style:{minHeight:"max-content"},children:[(0,Z.jsx)(A,{collapsible:!0,collapsed:N,onCollapse:function(n){return C(n)},children:(0,Z.jsxs)(j.Z,{theme:"dark",defaultSelectedKeys:["4"],mode:"inline",children:[(0,Z.jsx)("div",{style:{height:32,margin:16,background:"rgba(255, 255, 255, 0.2)"}}),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(d.Z,{}),onClick:function(){return I("/")},children:"PO\u010cETNA"},"1"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(d.Z,{}),onClick:function(){return I("/Admin/Control-panel")},children:"ADMIN PANEL"},"2"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(u.Z,{}),onClick:function(){return I("/Admin/Control-panel/Activities/Add")},children:"NOVA AKTIVNOST"},"3"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(m.Z,{}),onClick:function(){return I("/Admin/Control-panel/Activities/Select")},children:(0,Z.jsx)("b",{children:"UREDI AKTIVNOSTI"})},"4"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(u.Z,{}),onClick:function(){return I("/Admin/Control-panel/Notifications/Add")},children:"NOVA OBAVIJEST"},"5"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(m.Z,{}),onClick:function(){return I("/Admin/Control-panel/Notifications/Select")},children:"UREDI OBAVIJESTI"},"6"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(h.Z,{}),onClick:function(){return I("/Admin/Control-panel/Memberships")},children:"NOVI \u010cLANOVI"},"7"),(0,Z.jsx)(j.Z.Item,{icon:(0,Z.jsx)(f.Z,{}),onClick:function(){n.logout(),I("/Login")},children:"LOGOUT"},"8")]})}),(0,Z.jsx)(v.Z,{className:"site-layout",children:(0,Z.jsx)(b,{style:{margin:"0 0"},children:(0,Z.jsx)("div",{className:"adminActivities-page-main",style:{minHeight:"100vh",backgroundImage:"linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.6)), url(".concat(p,")"),backgroundSize:"cover",height:"max-content"},children:(0,Z.jsx)("div",{className:"row adminActivities-row1",children:V.map((function(n){return(0,Z.jsx)("div",{className:"col-4 adminActivity",children:(0,Z.jsx)("div",{children:(0,Z.jsxs)("div",{className:"card adminCard1",children:[(0,Z.jsx)("img",{src:p,className:"card-img-top",alt:"..."}),(0,Z.jsx)("div",{className:"card-body",children:(0,Z.jsx)("h5",{className:"card-title",children:n.name})}),(0,Z.jsxs)("ul",{className:"list-group list-group-flush",children:[(0,Z.jsx)("li",{className:"list-group-item adminCard2",children:n.location}),(0,Z.jsx)("li",{className:"list-group-item adminCard2",children:n.country}),(0,Z.jsx)("li",{className:"list-group-item adminCard2",children:n.date})]}),(0,Z.jsxs)("div",{className:"card-body text-center",children:[(0,Z.jsx)(o.rU,{to:"/Admin/Control-panel/Activities/".concat(n._id),children:(0,Z.jsx)("button",{type:"button",className:"btn btn-open btn-outline-secondary",children:"Otvori aktivnost"})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(o.rU,{to:"/Admin/Control-panel/Activities/Edit/".concat(n._id),children:(0,Z.jsx)("button",{type:"button",className:"btn btn-edit btn-outline-secondary",children:"Uredi aktivnost"})}),(0,Z.jsx)("br",{}),(0,Z.jsx)(o.rU,{to:"/Admin/Control-panel/Activities/Delete/".concat(n._id),children:(0,Z.jsx)("button",{type:"button",className:"btn btn-delete btn-outline-secondary",children:"Obri\u0161i aktivnost"})})]})]})})},n._id)}))})})})})]})}},142:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),c=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M476 399.1c0-3.9-3.1-7.1-7-7.1h-42c-3.8 0-7 3.2-7 7.1V484h-84.5c-4.1 0-7.5 3.1-7.5 7v42c0 3.8 3.4 7 7.5 7H420v84.9c0 3.9 3.2 7.1 7 7.1h42c3.9 0 7-3.2 7-7.1V540h84.5c4.1 0 7.5-3.2 7.5-7v-42c0-3.9-3.4-7-7.5-7H476v-84.9zM560.5 704h-225c-4.1 0-7.5 3.2-7.5 7v42c0 3.8 3.4 7 7.5 7h225c4.1 0 7.5-3.2 7.5-7v-42c0-3.8-3.4-7-7.5-7zm-7.1-502.6c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v704c0 17.7 14.3 32 32 32h512c17.7 0 32-14.3 32-32V397.3c0-8.5-3.4-16.6-9.4-22.6L553.4 201.4zM664 888H232V264h282.2L664 413.8V888zm190.2-581.4L611.3 72.9c-6-5.7-13.9-8.9-22.2-8.9H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h277l219 210.6V824c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V329.6c0-8.7-3.5-17-9.8-23z"}}]},name:"diff",theme:"outlined"},a=t(4291),o=function(n,e){return c.createElement(a.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:r}))};o.displayName="DiffOutlined";var s=c.forwardRef(o)},501:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),c=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M904 512h-56c-4.4 0-8 3.6-8 8v320H184V184h320c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V520c0-4.4-3.6-8-8-8z"}},{tag:"path",attrs:{d:"M355.9 534.9L354 653.8c-.1 8.9 7.1 16.2 16 16.2h.4l118-2.9c2-.1 4-.9 5.4-2.3l415.9-415c3.1-3.1 3.1-8.2 0-11.3L785.4 114.3c-1.6-1.6-3.6-2.3-5.7-2.3s-4.1.8-5.7 2.3l-415.8 415a8.3 8.3 0 00-2.3 5.6zm63.5 23.6L779.7 199l45.2 45.1-360.5 359.7-45.7 1.1.7-46.4z"}}]},name:"form",theme:"outlined"},a=t(4291),o=function(n,e){return c.createElement(a.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:r}))};o.displayName="FormOutlined";var s=c.forwardRef(o)},7962:function(n,e,t){t.d(e,{Z:function(){return s}});var i=t(1413),c=t(2791),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M868 732h-70.3c-4.8 0-9.3 2.1-12.3 5.8-7 8.5-14.5 16.7-22.4 24.5a353.84 353.84 0 01-112.7 75.9A352.8 352.8 0 01512.4 866c-47.9 0-94.3-9.4-137.9-27.8a353.84 353.84 0 01-112.7-75.9 353.28 353.28 0 01-76-112.5C167.3 606.2 158 559.9 158 512s9.4-94.2 27.8-137.8c17.8-42.1 43.4-80 76-112.5s70.5-58.1 112.7-75.9c43.6-18.4 90-27.8 137.9-27.8 47.9 0 94.3 9.3 137.9 27.8 42.2 17.8 80.1 43.4 112.7 75.9 7.9 7.9 15.3 16.1 22.4 24.5 3 3.7 7.6 5.8 12.3 5.8H868c6.3 0 10.2-7 6.7-12.3C798 160.5 663.8 81.6 511.3 82 271.7 82.6 79.6 277.1 82 516.4 84.4 751.9 276.2 942 512.4 942c152.1 0 285.7-78.8 362.3-197.7 3.4-5.3-.4-12.3-6.7-12.3zm88.9-226.3L815 393.7c-5.3-4.2-13-.4-13 6.3v76H488c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h314v76c0 6.7 7.8 10.5 13 6.3l141.9-112a8 8 0 000-12.6z"}}]},name:"logout",theme:"outlined"},a=t(4291),o=function(n,e){return c.createElement(a.Z,(0,i.Z)((0,i.Z)({},n),{},{ref:e,icon:r}))};o.displayName="LogoutOutlined";var s=c.forwardRef(o)},7205:function(n,e,t){n.exports=t.p+"static/media/image1.d650ea8f9a30ba8c49d9.jpg"}}]);
//# sourceMappingURL=253.e7982c16.chunk.js.map