(this["webpackJsonpfool-role-picker"]=this["webpackJsonpfool-role-picker"]||[]).push([[0],{146:function(e,r,t){},147:function(e,r,t){},148:function(e,r,t){},224:function(e,r,t){},231:function(e,r,t){"use strict";t.r(r);var l=t(0),c=t.n(l),o=t(23),n=t.n(o),a=(t(146),t(147),t(236)),i=t(79),s=t(235),d=t(37),b=(t(148),t(131)),u=t(16),j=function(e){var r=function(r){e.updatePlayers(r.target.playerId,r.target.checked)},t=e.players.map((function(e,t){return Object(u.jsx)(a.a,{span:12,children:Object(u.jsx)(i.a,{className:"custom-checkbox",playerId:e.id,checked:e.checked,value:e.value,onChange:r,children:e.label})},t)}));return Object(u.jsx)("div",{className:"container container--qty",children:Object(u.jsx)("div",{className:"players-qty",children:Object(u.jsxs)("div",{className:"players-qty__inner",children:[Object(u.jsx)(b.a,{children:"\u0418\u0433\u0440\u043e\u043a\u04381"}),Object(u.jsx)(s.a,{gutter:[16,16],align:"middle",justify:"center",children:t}),Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!1)},children:"GO"})]})})})},f=t(99),p=t(234),y=t(33),O=function(e){var r=Object(y.b)(),t=function(){r({type:"closeModal"})};return Object(u.jsx)(p.a,{title:e.modal.title,visible:e.modal.isVisible,onOk:t,onCancel:function(){r({type:"closeModal"})},footer:[Object(u.jsx)(d.a,{type:"primary",onClick:t,children:"OK"},"submit")],children:Object(u.jsx)("p",{children:e.modal.description})})},h=t(233),m=(t(224),function(e){var r=Object(l.useState)([]),t=Object(f.a)(r,2),c=t[0],o=t[1],n=Object(y.b)(),a=function(e){n({type:"openModal",roleId:e.target.dataset.id})},i=[{title:"\u0418\u0433\u0440\u043e\u043a",dataIndex:"player",key:"player",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(u.jsx)("div",{children:e})}}},{title:"\u0420\u043e\u043b\u044c",dataIndex:"role",key:"role",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(u.jsx)("span",{className:"roleLink","data-id":r.dataRole,onClick:a,children:e})}}},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442",dataIndex:"cardNum",key:"cardNum",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(u.jsx)("div",{children:e})}}},{title:"\u041a\u043e\u043b-\u0432\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0443",dataIndex:"resNum",key:"resNum",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(u.jsx)("div",{children:e})}}}];return Object(l.useEffect)((function(){if(0===c.length){var r=[];e.players.forEach((function(t){if(t.checked){var l=e.roles[e.getRandomInt(0,e.roles.length)],c={key:t.id,player:t.label,role:l.name,dataRole:l.id,color:l.color,bgColor:l.bgColor,cardNum:0===l.id?9:e.getRandomInt(5,8),resNum:0===l.id?0:e.getRandomInt(1,3)};r.push(c)}})),o(r)}}),[e,c.length]),Object(u.jsx)(h.a,{pagination:!1,columns:i,dataSource:c})}),g=function(e){var r=Object(y.c)((function(e){return e.roles})),t=Object(y.c)((function(e){return e.modal})),c=Object(l.useState)("..."),o=Object(f.a)(c,2),n=o[0],i=o[1];Object(l.useEffect)((function(){if("..."===n){i(function(){var r=e.players.filter((function(e){return e.checked}));return r.length>0?r[b(0,r.length)].label:"\u043d\u0438\u043a\u0442\u043e. \u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}())}}),[n,e.players]);var b=function(e,r){return e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e))+e};return Object(u.jsxs)("div",{className:"container container--main",children:[Object(u.jsx)(s.a,{justify:"center",children:Object(u.jsxs)(a.a,{xs:24,lg:12,align:"center",children:[Object(u.jsx)(m,{roles:r,players:e.players,getRandomInt:b}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:["\u0425\u043e\u0434\u0438\u0442 ",n]}),Object(u.jsx)("br",{}),Object(u.jsx)(d.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"})]})}),Object(u.jsx)(O,{modal:t})]})};var x=function(){var e=Object(y.c)((function(e){return e.playersSelector.isVisible})),r=Object(y.c)((function(e){return e.players})),t=Object(y.b)(),l=function(e){t({type:"setPlayersSelectorVisible",value:e})};return Object(u.jsx)("main",{children:e?Object(u.jsx)(j,{setPlayersSelectorVisible:l,players:r,updatePlayers:function(e,r){t({type:"updatePlayers",id:e,checked:r})}}):Object(u.jsx)(g,{setPlayersSelectorVisible:l,players:r})})},k=(t(230),t(135)),v=t(44),C=t(130),R={players:[{id:0,label:"\u0414\u0435\u043d\u0438\u0441",value:"\u0414\u0435\u043d\u0438\u0441",checked:!0},{id:1,label:"\u0421\u0435\u0440\u0433\u0435\u0439 1",value:"\u0421\u0435\u0440\u0433\u0435\u0439 1",checked:!0},{id:2,label:"\u0410\u043d\u043d\u0430",value:"\u0410\u043d\u043d\u0430",checked:!0},{id:3,label:"\u0421\u0435\u0440\u0433\u0435\u0439 2",value:"\u0421\u0435\u0440\u0433\u0435\u0439 2",checked:!0}],playersSelector:{isVisible:!0},modal:{isVisible:!1,title:"...",description:"..."},roles:[{id:0,name:"\u0412\u0430\u0440\u0432\u0430\u0440",color:"#000",bgColor:"#afafaf",roleRules:"\u041e\u0442\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f 1 \u0440\u0430\u0437 \u0437\u0430 \u0438\u0433\u0440\u0443, \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0438\u0433\u0440\u0443"},{id:1,name:"\u0422\u0430\u043d\u043a",color:"#000",bgColor:"#51885d",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043e\u0442\u0431\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 \u0434\u0432\u0435"},{id:2,name:"\u041d\u0435\u043a\u0440\u043e\u043c\u0430\u043d\u0442",color:"#fff",bgColor:"#212121",roleRules:"\u0412\u043e\u0441\u043a\u0440\u0435\u0448\u0430\u0435\u0442 2 \u043a\u0430\u0440\u0442\u044b \u0438\u0437 \u043e\u0442\u0431\u043e\u044f \u0432 \u0440\u0443\u043a\u0443 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0443 3 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:3,name:"\u042f\u0434\u043e\u0432\u0438\u0442\u044b\u0439",color:"#000",bgColor:"#00ff1f",roleRules:"\u0414\u0435\u043b\u0430\u0435\u0442 \u0443\u043a\u043e\u043b \u0441 \u044f\u0434\u043e\u043c 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:4,name:"\u0414\u0430\u043c\u0430\u0433\u0435\u0440",color:"#000",bgColor:"#ff5151",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c +- 1 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u0443"},{id:5,name:"\u041f\u043b\u0443\u0442",color:"#000",bgColor:"#f8ff8d",roleRules:"\u0414\u0432\u0430 \u043a\u043e\u0437\u044b\u0440\u044f"},{id:6,name:"\u041e\u0442\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c",color:"#000",bgColor:"#ce8e00",roleRules:"\u041e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0443 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:7,name:"\u0420\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0439",color:"#000",bgColor:"#b912ff",roleRules:"\u0411\u044c\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044c\u0448\u0438\u043c\u0438, \u043c\u043e\u0436\u0435\u0442 1 \u0440\u0430\u0437 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0435\u0431\u0435 2 \u0441\u0432\u043e\u0438 \u043a\u0430\u0440\u0442\u044b \u0438\u0437 \u043e\u0442\u0431\u043e\u044f"},{id:8,name:"\u0420\u044b\u0446\u0430\u0440\u044c",color:"#fff",bgColor:"#000f72",roleRules:"\u041f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0443 \u0443\u0433\u043e\u0434\u043d\u043e, \u0430 \u0435\u043c\u0443 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0433\u0440\u043e\u043a \u0441\u043f\u0440\u0430\u0432\u0430"}]},I=Object(C.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"updatePlayers":return Object(v.a)(Object(v.a)({},e),{},{players:Object(k.a)(e.players.map((function(e,t){return t===r.id&&(e.checked=r.checked),Object(v.a)({},e)})))});case"setPlayersSelectorVisible":return Object(v.a)(Object(v.a)({},e),{},{playersSelector:{isVisible:r.value}});case"openModal":var t=R.roles[r.roleId];return Object(v.a)(Object(v.a)({},e),{},{modal:{isVisible:!0,title:t.name,description:t.roleRules}});case"closeModal":return Object(v.a)(Object(v.a)({},e),{},{modal:{isModalVisible:!1}});default:return e}}));n.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(y.a,{store:I,children:Object(u.jsx)(x,{})})}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.b5a344f8.chunk.js.map