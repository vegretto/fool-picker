(this["webpackJsonpfool-role-picker"]=this["webpackJsonpfool-role-picker"]||[]).push([[0],{141:function(e,t,a){},142:function(e,t,a){},143:function(e,t,a){},216:function(e,t,a){},223:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),l=a(23),r=a.n(l),s=(a(141),a(38)),i=(a(142),a(130)),o=a(228),d=a(76),u=a(227),j=a(36),b=(a(143),a(126)),O=a(17),h=function(e){var t=Object(c.useState)(4),a=Object(s.a)(t,2),n=a[0],l=a[1],r=function(t){var a=0;e.players.forEach((function(c){c.value===t.target.value&&(c.checked=t.target.checked,e.updatePlayers(Object(i.a)(e.players))),c.checked&&a++})),l(a)},h=e.players.map((function(e,t){return Object(O.jsx)(o.a,{span:12,children:Object(O.jsx)(d.a,{className:"custom-checkbox",checked:e.checked,value:e.value,onChange:r,children:e.label})},t)}));return Object(O.jsx)("div",{className:"container container--qty",children:Object(O.jsx)("div",{className:"players-qty",children:Object(O.jsxs)("div",{className:"players-qty__inner",children:[Object(O.jsx)(b.a,{children:"\u0418\u0433\u0440\u043e\u043a\u0438"}),Object(O.jsx)(u.a,{gutter:[16,16],align:"middle",justify:"center",children:h}),Object(O.jsx)("br",{}),Object(O.jsx)(j.a,{type:"primary",size:"large",onClick:function(){e.updPQ(n),e.setPlayersQtyVisible(!1)},children:"GO"})]})})})},y=a(226),p=function(e){var t=function(){e.handleOk()};return Object(O.jsx)(y.a,{title:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u0440\u043e\u043b\u0438",visible:e.isModalVisible,onOk:t,onCancel:function(){e.handleCancel()},footer:[Object(O.jsx)(j.a,{type:"primary",onClick:t,children:"OK"},"submit")],children:Object(O.jsx)("p",{children:e.roleRules})})},f=a(225),m=(a(216),function(e){var t=Object(c.useState)([]),a=Object(s.a)(t,2),n=a[0],l=a[1],r=[{title:"\u0418\u0433\u0440\u043e\u043a",dataIndex:"player",key:"player"},{title:"\u0420\u043e\u043b\u044c",dataIndex:"role",key:"role",render:function(t,a){return Object(O.jsx)("span",{className:"roleLink","data-id":a.dataRole,onClick:e.showModal,children:t})}},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442",dataIndex:"cardNum",key:"cardNum"},{title:"\u041a\u043e\u043b-\u0432\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u0439 \u0432 \u0438\u0433\u0440\u0443",dataIndex:"resNum",key:"resNum"}];return Object(c.useEffect)((function(){var t=[];e.players.forEach((function(a){if(a.checked){var c=e.roles[e.getRandomInt(0,e.roles.length)],n={key:a.id,player:a.label,role:c.name,dataRole:c.id,cardNum:0===c.id?9:e.getRandomInt(5,8),resNum:0===c.id?0:e.getRandomInt(1,3)};t.push(n)}})),l(t)}),[]),Object(O.jsx)(f.a,{pagination:!1,columns:r,dataSource:n})}),x=function(e){var t=Object(c.useState)(!1),a=Object(s.a)(t,2),n=a[0],l=a[1],r=Object(c.useState)("..."),i=Object(s.a)(r,2),d=i[0],b=i[1],h=Object(c.useState)("..."),y=Object(s.a)(h,2),f=y[0],x=y[1];Object(c.useEffect)((function(){x(e.players[v(0,e.players.length)].label)}),[e.players]);var k=[{id:0,name:"\u0412\u0430\u0440\u0432\u0430\u0440",roleRules:"\u041e\u0442\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f 1 \u0440\u0430\u0437 \u0437\u0430 \u0438\u0433\u0440\u0443, \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0438\u0433\u0440\u0443"},{id:1,name:"\u0422\u0430\u043d\u043a",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043e\u0442\u0431\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 \u0434\u0432\u0435"},{id:2,name:"\u041d\u0435\u043a\u0440\u043e\u043c\u0430\u043d\u0442",roleRules:"\u0412\u043e\u0441\u043a\u0440\u0435\u0448\u0430\u0435\u0442 2 \u043a\u0430\u0440\u0442\u044b \u0438\u0437 \u043e\u0442\u0431\u043e\u044f \u0432 \u0440\u0443\u043a\u0443 \u0441\u043e\u043f\u0435\u0440\u043d\u0438\u043a\u0443 3 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:3,name:"\u042f\u0434\u043e\u0432\u0438\u0442\u044b\u0439",roleRules:"\u0414\u0435\u043b\u0430\u0435\u0442 \u0443\u043a\u043e\u043b \u0441 \u044f\u0434\u043e\u043c 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:4,name:"\u0414\u0430\u043c\u0430\u0433\u0435\u0440",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c +- 1 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u0443"},{id:5,name:"\u041f\u043b\u0443\u0442",roleRules:"\u0414\u0432\u0430 \u043a\u043e\u0437\u044b\u0440\u044f"},{id:6,name:"\u041e\u0442\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c",roleRules:"\u041e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0443 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443"},{id:7,name:"\u0420\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0439",roleRules:"\u0411\u044c\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044c\u0448\u0438\u043c\u0438, \u043c\u043e\u0436\u0435\u0442 1 \u0440\u0430\u0437 \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0441\u0435\u0431\u0435 2 \u0441\u0432\u043e\u0438 \u043a\u0430\u0440\u0442\u044b \u0438\u0437 \u043e\u0442\u0431\u043e\u044f"}],v=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e};return Object(O.jsxs)("div",{className:"container container--main",children:[Object(O.jsx)(u.a,{justify:"center",children:Object(O.jsxs)(o.a,{xs:24,lg:12,align:"center",children:[Object(O.jsx)(m,{playersQty:e.playersQty,showModal:function(e){l(!0);var t=e.target.dataset.id;b(k[t].roleRules)},roles:k,players:e.players,getRandomInt:v}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{children:["\u0425\u043e\u0434\u0438\u0442 ",f]}),Object(O.jsx)("br",{}),Object(O.jsx)(j.a,{type:"primary",size:"large",onClick:function(){e.setPlayersQtyVisible(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"})]})}),Object(O.jsx)(p,{isModalVisible:n,handleOk:function(){l(!1)},handleCancel:function(){l(!1)},roleRules:d})]})};var k=function(){var e=Object(c.useState)(0),t=Object(s.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)(!0),r=Object(s.a)(l,2),i=r[0],o=r[1],d=Object(c.useState)([{id:1,label:"\u0414\u0435\u043d\u0438\u0441",value:"\u0414\u0435\u043d\u0438\u0441",checked:!0},{id:2,label:"\u0421\u0435\u0440\u0433\u0435\u0439 1",value:"\u0421\u0435\u0440\u0433\u0435\u0439 1",checked:!0},{id:3,label:"\u0410\u043d\u043d\u0430",value:"\u0410\u043d\u043d\u0430",checked:!0},{id:4,label:"\u0421\u0435\u0440\u0433\u0435\u0439 2",value:"\u0421\u0435\u0440\u0433\u0435\u0439 2",checked:!0}]),u=Object(s.a)(d,2),j=u[0],b=u[1];return Object(O.jsx)("main",{children:i?Object(O.jsx)(h,{updPQ:function(e){n(e)},setPlayersQtyVisible:o,players:j,updatePlayers:function(e){b(e)}}):Object(O.jsx)(x,{playersQty:a,setPlayersQtyVisible:o,players:j})})};a(222);r.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root"))}},[[223,1,2]]]);
//# sourceMappingURL=main.0e5f528f.chunk.js.map