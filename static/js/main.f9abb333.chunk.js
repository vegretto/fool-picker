(this["webpackJsonpfool-role-picker"]=this["webpackJsonpfool-role-picker"]||[]).push([[0],{151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},229:function(e,t,c){},236:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(23),l=c.n(n),o=(c(151),c(152),c(242)),s=c(81),i=c(241),d=c(240),u=c(35),b=(c(153),c(138)),j=c(11),m=function(e){var t=function(t){e.updatePlayers(t.target.playerId,t.target.checked)},c=e.players.map((function(e,c){return Object(j.jsx)(o.a,{span:12,children:Object(j.jsx)(s.a,{className:"custom-checkbox",playerId:e.id,checked:e.checked,value:e.value,onChange:t,children:e.label})},c)}));return Object(j.jsx)("div",{className:"container container--qty",children:Object(j.jsx)("div",{className:"players-qty",children:Object(j.jsxs)("div",{className:"players-qty__inner",children:[Object(j.jsx)(b.a,{children:"\u0418\u0433\u0440\u043e\u043a\u0438"}),Object(j.jsx)(i.a,{gutter:[16,16],align:"middle",justify:"center",children:c}),Object(j.jsx)("br",{}),Object(j.jsx)("div",{className:"options-subtitle",children:"\u0420\u0435\u0436\u0438\u043c\u044b \u0438\u0433\u0440\u044b"}),Object(j.jsx)("div",{className:"modes-wrapper",children:Object(j.jsx)(s.a,{className:"custom-checkbox",checked:e.gameModes[0].isOn,value:e.gameModes[0].name,onChange:function(t){e.setGameMode(t.target.value,t.target.checked)},children:"\u0414\u0432\u043e\u0439\u043d\u044b\u0435 \u0440\u043e\u043b\u0438"})}),Object(j.jsx)("div",{className:"options-subtitle",children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}),Object(j.jsx)("div",{className:"new-players-box",children:Object(j.jsx)(d.a,{placeholder:"\u0418\u043c\u044f",onBlur:function(t){e.addCustomPlayer(t.target.value)}})}),Object(j.jsx)(u.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!1)},children:"GO"})]})})})},f=c(103),h=c(239),O=c(36),p=function(e){var t=Object(O.b)(),c=function(){t({type:"closeModal"})};return Object(j.jsx)(h.a,{title:e.modal.title,visible:e.modal.isVisible,onOk:c,onCancel:function(){t({type:"closeModal"})},footer:[Object(j.jsx)(u.a,{type:"primary",onClick:c,children:"OK"},"submit")],children:Object(j.jsx)("p",{children:e.modal.description})})},g=c(238),y=(c(229),function(e){var t=Object(r.useState)([]),c=Object(f.a)(t,2),a=c[0],n=c[1],l=Object(O.b)(),o=function(e){l({type:"openModal",roleId:e.target.dataset.id})},s=[{title:"",dataIndex:"color",key:"color",className:"ant-table-cell--color",render:function(e,t){return{props:{style:{backgroundColor:t.bgColor[0],background:"linear-gradient(135deg, ".concat(t.bgColor[0]," 40%, ").concat(t.bgColor[1]," 60%)")}}}}},{title:"",dataIndex:"icon",key:"icon",className:"ant-table-cell--icon",render:function(e,t){return{children:Object(j.jsx)("div",{className:"roles-icons",children:t.icons.map((function(e,t){return Object(j.jsx)("img",{className:"role-icon",alt:"",src:"".concat("/fool-picker","/img/").concat(e)},t)}))})}}},{title:"\u0418\u0433\u0440\u043e\u043a",dataIndex:"player",key:"player",render:function(e,t){return{children:Object(j.jsx)("div",{children:e})}}},{title:"\u0420\u043e\u043b\u044c",dataIndex:"roles",key:"roles",render:function(e,t){return{children:Object(j.jsx)("div",{className:"roles-list",children:t.roles.map((function(e,c){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("span",{className:"roleLink","data-id":e.dataRole,onClick:o,children:[e.role,t.roles.length>1&&0===c?",":""]},c),Object(j.jsx)("space",{children:" "})]})}))})}}},{title:"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043a\u0430\u0440\u0442",dataIndex:"cardNum",key:"cardNum",render:function(e,t){return{children:Object(j.jsx)("div",{children:e})}}},{title:"\u0427\u0438\u0441\u043b\u043e \u0434\u043b\u044f \u043a\u0443\u0431\u0438\u043a\u043e\u0432",dataIndex:"diesNums",key:"diesNums",render:function(e,t){return{children:Object(j.jsx)("div",{className:"dies-num",children:t.diesNums.map((function(e,t){return Object(j.jsx)("span",{children:e},t)}))})}}},{title:"\u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0435\u043d\u0438\u044f",dataIndex:"resNum",key:"resNum",render:function(e,t){return{children:Object(j.jsx)("div",{children:e})}}}];return Object(r.useEffect)((function(){if(0===a.length){var t=[];e.players.forEach((function(c){var r=1;if(e.gameModes[0].isOn&&(r=2),c.checked){for(var a,n,l=[],o=[],s=[],i=[],d=0;d<r;d++){a=e.roles[e.getRandomInt(0,e.roles.length)],o.push(a.bgColor),s.push(a.icon),0===d&&(n=a);var u={role:a.name,dataRole:a.id,color:a.color};l.push(u)}for(var b=0;b<1;b++){var j=e.getRandomInt(1,13);i.push(j)}console.log(o);var m={key:c.id,player:c.label,roles:l,bgColor:o,icons:s,diesNums:i,color:n.color,cardNum:0===n.id||0===a.id?9:e.getRandomInt(5,8),resNum:0===n.id||0===a.id?0:e.getRandomInt(1,3)};t.push(m)}})),n(t)}}),[e,a.length]),Object(j.jsx)(g.a,{pagination:!1,columns:s,dataSource:a})}),v=function(e){var t=Object(O.c)((function(e){return e.roles})),c=Object(O.c)((function(e){return e.modal})),a=Object(r.useState)("..."),n=Object(f.a)(a,2),l=n[0],s=n[1];Object(r.useEffect)((function(){if("..."===l){s(function(){var t=e.players.filter((function(e){return e.checked}));return t.length>0?t[d(0,t.length)].label:"\u043d\u0438\u043a\u0442\u043e. \u041d\u0435\u0434\u043e\u0441\u0442\u0430\u0442\u043e\u0447\u043d\u043e \u0438\u0433\u0440\u043e\u043a\u043e\u0432"}())}}),[l,e.players]);var d=function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e};return Object(j.jsxs)("div",{className:"container container--main",children:[Object(j.jsx)(i.a,{justify:"center",children:Object(j.jsxs)(o.a,{align:"center",children:[Object(j.jsx)(y,{roles:t,players:e.players,getRandomInt:d,gameModes:e.gameModes}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{children:["\u0425\u043e\u0434\u0438\u0442 ",l]}),Object(j.jsx)("br",{}),Object(j.jsx)(u.a,{type:"primary",size:"large",onClick:function(){e.setPlayersSelectorVisible(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u043f\u0430\u0440\u0442\u0438\u044f"})]})}),Object(j.jsx)(p,{modal:c})]})};var x=function(){var e=Object(O.c)((function(e){return e.playersSelector.isVisible})),t=Object(O.c)((function(e){return e.players})),c=Object(O.c)((function(e){return e.gameModes})),r=Object(O.b)(),a=function(e){r({type:"setPlayersSelectorVisible",value:e})};return Object(j.jsx)("main",{children:e?Object(j.jsx)(m,{setPlayersSelectorVisible:a,players:t,updatePlayers:function(e,t){r({type:"updatePlayers",id:e,checked:t})},gameModes:c,setGameMode:function(e,t){r({type:"setGameMode",gameMode:e,value:t})},addCustomPlayer:function(e){r({type:"addCustomPlayer",name:e})}}):Object(j.jsx)(v,{setPlayersSelectorVisible:a,players:t,gameModes:c})})},k=(c(235),c(110)),M=c(33),C=c(136),N={players:[{id:0,label:"\u0414\u0435\u043d\u0438\u0441",value:"\u0414\u0435\u043d\u0438\u0441",checked:!0},{id:1,label:"\u0421\u0435\u0440\u0433\u0435\u0439 1",value:"\u0421\u0435\u0440\u0433\u0435\u0439 1",checked:!0},{id:2,label:"\u0410\u043d\u043d\u0430",value:"\u0410\u043d\u043d\u0430",checked:!0},{id:3,label:"\u0421\u0435\u0440\u0433\u0435\u0439 2",value:"\u0421\u0435\u0440\u0433\u0435\u0439 2",checked:!0}],playersSelector:{isVisible:!0},modal:{isVisible:!1,title:"...",description:"..."},gameModes:[{id:0,name:"doubleRoles",isOn:!1}],roles:[{id:0,name:"\u0412\u0430\u0440\u0432\u0430\u0440",color:"#000",bgColor:"#afafaf",roleRules:"\u041e\u0442\u0431\u0438\u0432\u0430\u0435\u0442\u0441\u044f 1 \u0440\u0430\u0437 \u0437\u0430 \u0438\u0433\u0440\u0443, \u043d\u0435\u043b\u044c\u0437\u044f \u0432\u0435\u0440\u043d\u0443\u0442\u044c \u0432 \u0438\u0433\u0440\u0443",icon:"barbarian.svg"},{id:1,name:"\u041a\u0440\u0435\u0441\u0442\u043e\u043d\u043e\u0441\u0435\u0446",color:"#000",bgColor:"#51885d",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043e\u0442\u0431\u0438\u0442\u044c \u043e\u0434\u043d\u043e\u0439 \u043a\u0430\u0440\u0442\u043e\u0439 \u0434\u0432\u0435",icon:"crusader.svg"},{id:2,name:"\u041d\u0435\u043a\u0440\u043e\u043c\u0430\u043d\u0442",color:"#fff",bgColor:"#212121",roleRules:"\u0412\u043e\u0441\u043a\u0440\u0435\u0448\u0430\u0435\u0442 \u043f\u043e\u043b\u043e\u0432\u0438\u043d\u0443 \u043e\u0442 \u043a\u043e\u043b-\u0432\u0430 \u0441\u0432\u043e\u0438\u0445 \u043a\u0430\u0440\u0442 \u0432 \u043a\u043e\u043b\u043e\u0434\u0443 \u043f\u0440\u043e\u0442\u0438\u0432\u043d\u0438\u043a\u0430 3 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443",icon:"necromancer.svg"},{id:3,name:"\u042f\u0434\u043e\u0432\u0438\u0442\u044b\u0439",color:"#000",bgColor:"#00ff1f",roleRules:"\u0414\u0435\u043b\u0430\u0435\u0442 \u0443\u043a\u043e\u043b \u0441 \u044f\u0434\u043e\u043c 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443",icon:"poisonous.svg"},{id:4,name:"\u0411\u0435\u0440\u0441\u0435\u0440\u043a",color:"#000",bgColor:"#ff5151",roleRules:"\u041c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0442\u044c +- 1 \u043a\u0430\u0440\u0442\u0443 \u043f\u043e \u043d\u043e\u043c\u0438\u043d\u0430\u043b\u0443",icon:"berserk.svg"},{id:5,name:"\u0420\u0430\u0437\u0431\u043e\u0439\u043d\u0438\u043a",color:"#000",bgColor:"#f8ff8d",roleRules:"\u0414\u0432\u0430 \u043a\u043e\u0437\u044b\u0440\u044f",icon:"rogue.svg"},{id:6,name:"\u041e\u0442\u0440\u0430\u0436\u0430\u0442\u0435\u043b\u044c",color:"#000",bgColor:"#ce8e00",roleRules:"\u041e\u0442\u0440\u0430\u0436\u0430\u0435\u0442 \u043a\u0430\u0440\u0442\u0443 2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443",icon:"deflector.svg"},{id:7,name:"\u0420\u0435\u0432\u0435\u0440\u0441\u0438\u0432\u043d\u044b\u0439",color:"#000",bgColor:"#b912ff",roleRules:"\u0411\u044c\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0438\u0435 \u043a\u0430\u0440\u0442\u044b \u043c\u0435\u043d\u044c\u0448\u0438\u043c\u0438",icon:"reverse.svg"},{id:8,name:"\u0420\u044b\u0446\u0430\u0440\u044c",color:"#fff",bgColor:"#000f72",roleRules:"\u041f\u043e\u0434\u043a\u0438\u0434\u044b\u0432\u0430\u0435\u0442 \u043a\u043e\u043c\u0443 \u0443\u0433\u043e\u0434\u043d\u043e, \u0430 \u0435\u043c\u0443 \u043c\u043e\u0436\u0435\u0442 \u043f\u043e\u0434\u043a\u0438\u043d\u0443\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0433\u0440\u043e\u043a \u0441\u043f\u0440\u0430\u0432\u0430",icon:"knight.svg"},{id:9,name:"\u0412\u043e\u0440",color:"#fff",bgColor:"#555",roleRules:"2 \u0440\u0430\u0437\u0430 \u0437\u0430 \u0438\u0433\u0440\u0443 \u0441\u043c\u043e\u0442\u0440\u0438\u0442 \u043a\u0430\u0440\u0442\u044b \u043e\u043f\u043f\u043e\u043d\u0435\u043d\u0442\u0430 \u0438 \u0432\u043e\u0440\u0443\u0435\u0442 \u043b\u044e\u0431\u0443\u044e \u043e\u0434\u043d\u0443 \u0438\u0437 \u043d\u0438\u0445",icon:"thief.svg"}]},R=Object(C.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"addCustomPlayer":return Object(M.a)(Object(M.a)({},e),{},{players:[].concat(Object(k.a)(e.players),[{id:4,label:t.name,value:t.name,checked:!0}])});case"setGameMode":return Object(M.a)(Object(M.a)({},e),{},{gameModes:Object(k.a)(e.gameModes.map((function(e){return e.name===t.gameMode&&(e.isOn=t.value),Object(M.a)({},e)})))});case"updatePlayers":return Object(M.a)(Object(M.a)({},e),{},{players:Object(k.a)(e.players.map((function(e,c){return c===t.id&&(e.checked=t.checked),Object(M.a)({},e)})))});case"setPlayersSelectorVisible":return Object(M.a)(Object(M.a)({},e),{},{playersSelector:{isVisible:t.value}});case"openModal":var c=N.roles[t.roleId];return Object(M.a)(Object(M.a)({},e),{},{modal:{isVisible:!0,title:c.name,description:c.roleRules}});case"closeModal":return Object(M.a)(Object(M.a)({},e),{},{modal:{isModalVisible:!1}});default:return e}}));document.state=R.getState();var I=R;l.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(O.a,{store:I,children:Object(j.jsx)(x,{})})}),document.getElementById("root"))}},[[236,1,2]]]);
//# sourceMappingURL=main.f9abb333.chunk.js.map