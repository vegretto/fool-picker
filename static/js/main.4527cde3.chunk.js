(this["webpackJsonpfool-role-picker"]=this["webpackJsonpfool-role-picker"]||[]).push([[0],{146:function(e,r,t){},147:function(e,r,t){},148:function(e,r,t){},224:function(e,r,t){},231:function(e,r,t){"use strict";t.r(r);var c=t(0),l=t.n(c),a=t(23),o=t.n(a),n=(t(146),t(147),t(236)),s=t(79),i=t(235),d=t(38),u=(t(148),t(132)),b=t(15),j=function(e){var r=function(r){e.updatePlayers(r.target.playerId,r.target.checked)},t=e.players.map((function(e,t){return Object(b.jsx)(n.a,{span:12,children:Object(b.jsx)(s.a,{className:"custom-checkbox",playerId:e.id,checked:e.checked,value:e.value,onChange:r,children:e.label})},t)}));return Object(b.jsx)("div",{className:"container container--qty",children:Object(b.jsx)("div",{className:"players-qty",children:Object(b.jsxs)("div",{className:"players-qty__inner",children:[Object(b.jsx)(u.a,{children:"\u0418\u0433\u0440\u043e\u043a\u0438"}),Object(b.jsx)(i.a,{gutter:[16,16],align:"middle",justify:"center",children:t}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{className:"modes-wrapper",children:[Object(b.jsx)(s.a,{className:"custom-checkbox",checked:e.gameModes[0].isOn,value:e.gameModes[0].name,onChange:function(r){e.setGameMode(r.target.value,r.target.checked)},children:"\u0414\u0432\u043e\u0439\u043d\u044b\u0435 \u0440\u043e\u043b\u0438"}),Object(b.jsx)(d.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!1)},children:"GO"})]})]})})})},f=t(99),m=t(234),p=t(33),O=function(e){var r=Object(p.b)(),t=function(){r({type:"closeModal"})};return Object(b.jsx)(m.a,{title:e.modal.title,visible:e.modal.isVisible,onOk:t,onCancel:function(){r({type:"closeModal"})},footer:[Object(b.jsx)(d.a,{type:"primary",onClick:t,children:"OK"},"submit")],children:Object(b.jsx)("p",{children:e.modal.description})})},h=t(233),y=(t(224),function(e){var r=Object(c.useState)([]),t=Object(f.a)(r,2),l=t[0],a=t[1],o=Object(p.b)(),n=function(e){o({type:"openModal",roleId:e.target.dataset.id})},s=[{title:"\u0418\u0433\u0440\u043e\u043a",dataIndex:"player",key:"player",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(b.jsx)("div",{children:e})}}},{title:"\u0420\u043e\u043b\u044c",dataIndex:"roles",key:"roles",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(b.jsx)("div",{className:"roles-list",children:r.roles.map((function(e,r){return Object(b.jsxs)("span",{className:"roleLink","data-id":e.dataRole,onClick:n,children:[e.role,0===r?", ":""]},r)}))})}}},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442",dataIndex:"cardNum",key:"cardNum",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(b.jsx)("div",{children:e})}}},{title:"\u041a\u043e\u043b-\u0432\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0443",dataIndex:"resNum",key:"resNum",render:function(e,r){return{props:{style:{color:r.color,background:r.bgColor}},children:Object(b.jsx)("div",{children:e})}}}];return Object(c.useEffect)((function(){if(0===l.length){var r=[];e.players.forEach((function(t){var c=1;if(!0===e.gameModes[0].isOn&&(c=2),t.checked){for(var l,a,o=[],n=0;n<c;n++){l=e.roles[e.getRandomInt(0,e.roles.length)],0===n&&(a=l);var s={role:l.name,dataRole:l.id,color:l.color};o.push(s)}var i={key:t.id,player:t.label,roles:o,bgColor:a.bgColor,cardNum:0===a.id?9:e.getRandomInt(5,8),resNum:0===a.id?0:e.getRandomInt(1,3)};r.push(i)}})),a(r)}}),[e,l.length]),Object(b.jsx)(h.a,{pagination:!1,columns:s,dataSource:l})}),g=function(e){var r=Object(p.c)((function(e){return e.roles})),t=Object(p.c)((function(e){return e.modal})),l=Object(c.useState)("..."),a=Object(f.a)(l,2),o=a[0],s=a[1];Object(c.useEffect)((function(){if("..."===o){s(function(){var r=e.players.filter((function(e){return e.checked}));return r.length>0?r[u(0,r.length)].label:"\u043d\u0438\u043a\u0442\u043e. \u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}())}}),[o,e.players]);var u=function(e,r){return e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e))+e};return Object(b.jsxs)("div",{className:"container container--main",children:[Object(b.jsx)(i.a,{justify:"center",children:Object(b.jsxs)(n.a,{xs:24,lg:12,align:"center",children:[Object(b.jsx)(y,{roles:r,players:e.players,getRandomInt:u,gameModes:e.gameModes}),Object(b.jsx)("br",{}),Object(b.jsxs)("div",{children:["\u0425\u043e\u0434\u0438\u0442 ",o]}),Object(b.jsx)("br",{}),Object(b.jsx)(d.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"})]})}),Object(b.jsx)(O,{modal:t})]})};var v=function(){var e=Object(p.c)((function(e){return e.playersSelector.isVisible})),r=Object(p.c)((function(e){return e.players})),t=Object(p.c)((function(e){return e.gameModes})),c=Object(p.b)(),l=function(e){c({type:"setPlayersSelectorVisible",value:e})};return Object(b.jsx)("main",{children:e?Object(b.jsx)(j,{setPlayersSelectorVisible:l,players:r,updatePlayers:function(e,r){c({type:"updatePlayers",id:e,checked:r})},gameModes:t,setGameMode:function(e,r){c({type:"setGameMode",gameMode:e,value:r})}}):Object(b.jsx)(g,{setPlayersSelectorVisible:l,players:r,gameModes:t})})},x=(t(230),t(113)),k=t(35),M=t(131),C={players:[{id:0,label:"\u0414\u0435\u043d\u0438\u0441",value:"\u0414\u0435\u043d\u0438\u0441",checked:!0},{id:1,label:"\u0421\u0435\u0440\u0433\u0435\u0439 1",value:"\u0421\u0435\u0440\u0433\u0435\u0439 1",checked:!0},{id:2,label:"\u0410\u043d\u043d\u0430",value:"\u0410\u043d\u043d\u0430",checked:!0},{id:3,label:"\u0421\u0435\u0440\u0433\u0435\u0439 2",value:"\u0421\u0435\u0440\u0433\u0435\u0439 2",checked:!0}],playersSelector:{isVisible:!0},modal:{isVisible:!1,title:"...",description:"..."},gameModes:[{id:0,name:"doubleRoles",isOn:!1}],roles:[{id:0,name:"\u0412\u0430\u0440\u0432\u0430\u0440",color:"#000",bgColor:"#afafaf",roleRules:"\u041e\u0442\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f 1 \u0440\u0430\u0437 \u0437\u0430 \u0438\u0433\u0440\u0443, \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0438\u0433\u0440\u0443"},{id:1,name:"\u0422\u0430\u043d\u043a",color:"#000",bgColor:"#51885d",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043e\u0442\u0431\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 \u0434\u0432\u0435"},{id:2,name:"\u041d\u0435\u043a\u0440\u043e\u043c\u0430\u043d\u0442",color:"#fff",bgColor:"#212121",roleRules:"\u0412\u043e\u0441\u043a\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u043e\u0442 \u043a\u043e\u043b-\u0432\u0430 \u0441\u0432\u043e\u0438\u0445 \u043a\u0430\u0440\u0442 \u0432 \u043a\u043e\u043b\u043e\u0434\u0443 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430 3 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:3,name:"\u042f\u0434\u043e\u0432\u0438\u0442\u044b\u0439",color:"#000",bgColor:"#00ff1f",roleRules:"\u0414\u0435\u043b\u0430\u0435\u0442 \u0443\u043a\u043e\u043b \u0441 \u044f\u0434\u043e\u043c 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:4,name:"\u0414\u0430\u043c\u0430\u0433\u0435\u0440",color:"#000",bgColor:"#ff5151",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c +- 1 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u0443"},{id:5,name:"\u041f\u043b\u0443\u0442",color:"#000",bgColor:"#f8ff8d",roleRules:"\u0414\u0432\u0430 \u043a\u043e\u0437\u044b\u0440\u044f"},{id:6,name:"\u041e\u0442\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c",color:"#000",bgColor:"#ce8e00",roleRules:"\u041e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0443 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:7,name:"\u0420\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0439",color:"#000",bgColor:"#b912ff",roleRules:"\u0411\u044c\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044c\u0448\u0438\u043c\u0438"},{id:8,name:"\u0420\u044b\u0446\u0430\u0440\u044c",color:"#fff",bgColor:"#000f72",roleRules:"\u041f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0443 \u0443\u0433\u043e\u0434\u043d\u043e, \u0430 \u0435\u043c\u0443 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0433\u0440\u043e\u043a \u0441\u043f\u0440\u0430\u0432\u0430"}]},R=Object(M.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"setGameMode":return Object(k.a)(Object(k.a)({},e),{},{gameModes:Object(x.a)(e.gameModes.map((function(e){return e.name===r.gameMode&&(e.isOn=r.value),Object(k.a)({},e)})))});case"updatePlayers":return Object(k.a)(Object(k.a)({},e),{},{players:Object(x.a)(e.players.map((function(e,t){return t===r.id&&(e.checked=r.checked),Object(k.a)({},e)})))});case"setPlayersSelectorVisible":return Object(k.a)(Object(k.a)({},e),{},{playersSelector:{isVisible:r.value}});case"openModal":var t=C.roles[r.roleId];return Object(k.a)(Object(k.a)({},e),{},{modal:{isVisible:!0,title:t.name,description:t.roleRules}});case"closeModal":return Object(k.a)(Object(k.a)({},e),{},{modal:{isModalVisible:!1}});default:return e}}));document.state=R.getState();var N=R;o.a.render(Object(b.jsx)(l.a.StrictMode,{children:Object(b.jsx)(p.a,{store:N,children:Object(b.jsx)(v,{})})}),document.getElementById("root"))}},[[231,1,2]]]);
//# sourceMappingURL=main.4527cde3.chunk.js.map