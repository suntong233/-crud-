(this["webpackJsonpreact-demo1"]=this["webpackJsonpreact-demo1"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(1),i=a.n(n),s=a(8),l=a.n(s),r=(a(14),a(7)),d=a(3),o=a(2),j=(a(15),{Weapons:[{id:0xe8d4a51001,name:"\u9ece\u660e\u4e4b\u5251(80)",type:"sword",base:355,criticalStrike:42.7,effect:"\u751f\u547d\u503c\u9ad8\u4e8e90%\u65f6\u5019,\u66b4\u51fb\u7387\u63d0\u534728%"}],Characters:[{id:1100000000001,name:"test",type:"sword",hp:2500,base:225,defence:400,atRate:12.5,criticalRate:5,criticalStrike:50,skill:[{type:"physicsReward",rate:[100,90,110],name:"\u666e\u653b",key:1110000000001}]}],Relics:[{id:1200000000001,type:"flower",mainProp:"hp",mainValue:4780,second:[{},{},{},{}]},{id:1200000000002,type:"plume",mainProp:"attack",mainValue:311,second:[{},{},{},{}]},{id:1200000000003,type:"sandglass",mainProp:"atRate",mainValue:46.6,second:[{},{},{},{}]},{id:1200000000004,type:"cann",mainProp:"fire",mainValue:46.6,second:[{},{},{},{}]},{id:1200000000005,type:"header",mainProp:"criticalRate",mainValue:31.1,second:[{},{},{},{}]}]}),u={hp:"\u751f\u547d\u503c",hpRate:"\u751f\u547d\u503c\u767e\u5206\u6bd4",type:"\u7c7b\u578b",defence:"\u9632\u5fa1\u529b",defenceRate:"\u9632\u5fa1\u529b\u767e\u5206\u6bd4",base:"\u767d\u5b57",magic:"\u6cd5\u5668",sword:"\u5355\u624b\u5251",glaive:"\u5927\u5251",arch:"\u5f13",longHandle:"\u957f\u67c4",attack:"\u653b\u51fb\u529b\u56fa\u5b9a\u503c",atRate:"\u653b\u51fb\u529b\u767e\u5206\u6bd4",criticalRate:"\u66b4\u51fb\u7387",criticalStrike:"\u7206\u4f24",physicsReward:"\u7269\u7406",fire:"\u706b",electric:"\u96f7",water:"\u6c34",ice:"\u51b0",wind:"\u98ce",rock:"\u5ca9",treatment:"\u6cbb\u7597",charging:"\u5143\u7d20\u5145\u80fd",reaction:"\u5143\u7d20\u7cbe\u901a",flower:"\u751f\u4e4b\u82b1",plume:"\u6b7b\u4e4b\u7fbd",sandglass:"\u65f6\u4e4b\u6c99",cann:"\u7a7a\u4e4b\u676f",header:"\u7406\u4e4b\u51a0",damageRate:"\u4f24\u5bb3\u589e\u52a0",effect:"\u6548\u679c"};function b(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],s=a[1],l=Object(n.useState)({type:"magic"}),r=Object(o.a)(l,2),j=r[0],b=r[1],m=e.Weapons,h=e.changeWeapons,p=function(e){e.stopPropagation(),s(!1)},x=function(e){var t={};for(var a in j)t[a]=j[a];/base|atRate|defence|reaction|charging|criticalRate|criticalStrike|physicsReward|hp/gi.test(e.target.dataset.key)&&(e.target.value=Math.abs(parseFloat(e.target.value||0))-0),t[e.target.dataset.key]=e.target.value,b(t)};return Object(c.jsxs)("div",{className:"weapon_container",children:[m.map((function(e){return Object(c.jsxs)("div",{className:"weapon_box",children:[Object(c.jsxs)("div",{className:"weapon_box_head",children:[Object(c.jsxs)("div",{className:"weapon_box_head_item",children:["\u540d\u79f0\uff1a",e.name||"\u672a\u7f16\u8f91"]}),Object(c.jsxs)("div",{className:"weapon_box_head_item",children:["\u57fa\u7840\u653b\u51fb\uff1a",e.base||0]})]}),Object(c.jsx)("div",{className:"weapon_box_body",children:Object.keys(e).map((function(t){return/id|name|base/gi.test(t)?null:Object(c.jsxs)("div",{children:[u[t]," : ",u[e[t]]?u[e[t]]:e[t]]},t)}))}),Object(c.jsxs)("div",{className:"weapon_box_btn",children:[Object(c.jsx)("div",{onClick:function(){return function(e){var t=m.find((function(t){return t.id===e})),a={};for(var c in t)a[c]=t[c];b(a),s(!0)}(e.id)},className:"weapon_box_edit",children:"\u7f16\u8f91"}),Object(c.jsx)("div",{onClick:function(){return function(e){var t=m.filter((function(t){return t.id!==e}));h(t)}(e.id)},className:"weapon_box_dele",children:"\u5220\u9664"})]})]},e.id)})),Object(c.jsx)("div",{className:i?"show":"hide",children:Object(c.jsx)("div",{className:"mderContainer",children:Object(c.jsxs)("div",{className:"InputsBox",children:[Object(c.jsx)("button",{onClick:p,className:"font_small button button_red righttop",children:"\u53d6\u6d88"}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u540d\u79f0\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"name",value:j.name||"",className:"input",type:"text"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7c7b\u578b\uff1a"}),Object(c.jsxs)("select",{onChange:x,"data-key":"type",value:j.type||"",className:"input",children:[Object(c.jsx)("option",{value:"magic",children:u.magic}),Object(c.jsx)("option",{value:"sword",children:u.sword}),Object(c.jsx)("option",{value:"glaive",children:u.glaive}),Object(c.jsx)("option",{value:"arch",children:u.arch}),Object(c.jsx)("option",{value:"longHandle",children:u.longHandle})]})]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u767d\u5b57\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"base",value:j.base||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u653b\u51fb\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"atRate",value:j.atRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u9632\u5fa1\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"defenceRate",value:j.defenceRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7cbe\u901a\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"reaction",value:j.reaction||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u5145\u80fd\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"charging",value:j.charging||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u66b4\u51fb\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"criticalRate",value:j.criticalRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7206\u4f24\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"criticalStrike",value:j.criticalStrike||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7269\u7406\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"physicsReward",value:j.physicsReward||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u751f\u547d\uff1a"}),Object(c.jsx)("input",{onChange:x,"data-key":"hpRate",value:j.hpRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u6280\u80fd\uff1a"}),Object(c.jsx)("textarea",{onChange:x,"data-key":"effect",className:"textarea",value:j.effect||""})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item_btnbox",children:[Object(c.jsx)("button",{onClick:function(){j.id||(j.id=(new Date).getTime());var e=m.find((function(e){return e.id===j.id}));if(e){for(var t in j)e[t]=j[t];h(Object(d.a)(m))}else{var a={};for(var c in j)a[c]=j[c];h([].concat(Object(d.a)(m),[a]))}b({type:"magic"}),s(!1)},className:"clobtn font_middle button button_blue",children:"\u4fdd\u5b58"}),Object(c.jsx)("button",{onClick:p,className:"clobtn font_middle button button_red",children:"\u53d6\u6d88"})]})]})})}),Object(c.jsx)("div",{onClick:function(){b({type:"magic"}),s(!0)},className:"newWeapon",children:"NEW+"})]})}function m(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],s=a[1],l=Object(n.useState)(!1),j=Object(o.a)(l,2),b=j[0],m=j[1],h=Object(n.useState)(0),p=Object(o.a)(h,2),x=p[0],v=p[1],O=Object(n.useState)(),_=Object(o.a)(O,2),f=_[0],g=_[1],k=Object(n.useState)({type:"physicsReward",rate:[]}),y=Object(o.a)(k,2),w=y[0],C=y[1],I=Object(n.useState)({criticalRate:5,criticalStrike:50,type:"magic",skill:[]}),B=Object(o.a)(I,2),R=B[0],S=B[1],P=e.Characters,V=e.changeCharacters,W=function(e){e.stopPropagation(),s(!1)},F=function(e){var t={};for(var a in R)t[a]=R[a];/base|atRate|defence|reaction|charging|criticalRate|criticalStrike|physicsReward|hp|fire|electric|water|ice|wind|rock|treatment/gi.test(e.target.dataset.key)&&(e.target.value=Math.abs(parseFloat(e.target.value||0))-0),t[e.target.dataset.key]=e.target.value,S(t)},J=function(e){var t={};for(var a in w)t[a]=w[a];t[e.target.dataset.key]=e.target.value,C(t)};return Object(c.jsxs)("div",{className:"weapon_container",children:[P.map((function(e){return Object(c.jsxs)("div",{className:"weapon_box",children:[Object(c.jsxs)("div",{className:"weapon_box_head",children:[Object(c.jsxs)("div",{className:"weapon_box_head_item",children:["\u540d\u79f0\uff1a",e.name||"\u672a\u7f16\u8f91"]}),Object(c.jsxs)("div",{className:"weapon_box_head_item",children:["\u57fa\u7840\u653b\u51fb\uff1a",e.base||0]})]}),Object(c.jsxs)("div",{className:"weapon_box_body",children:[Object(c.jsx)("div",{className:"weapon_box_body_title",children:"\u5c5e\u6027"}),Object.keys(e).map((function(t){return/id|name|base|skill/gi.test(t)?null:Object(c.jsxs)("div",{children:[u[t]," : ",u[e[t]]?u[e[t]]:e[t]]},t)}))]}),Object(c.jsx)("div",{onClick:function(){g(e.id),m(!0)},className:"weapon_box_skill",children:" \u5929\u8d4b "}),Object(c.jsxs)("div",{className:"weapon_box_btn",children:[Object(c.jsx)("div",{onClick:function(){return function(e){var t=P.find((function(t){return t.id===e})),a={};for(var c in t)a[c]=t[c];S(a),s(!0)}(e.id)},className:"weapon_box_edit",children:"\u7f16\u8f91"}),Object(c.jsx)("div",{onClick:function(){return function(e){var t=P.filter((function(t){return t.id!==e}));V(t)}(e.id)},className:"weapon_box_dele",children:"\u5220\u9664"})]})]},e.id)})),Object(c.jsx)("div",{className:i?"show":"hide",children:Object(c.jsx)("div",{className:"mderContainer",children:Object(c.jsxs)("div",{className:"InputsBox",children:[Object(c.jsx)("button",{onClick:W,className:"font_small button button_red righttop",children:"\u53d6\u6d88"}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u89d2\u8272\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"name",value:R.name||"",className:"input",type:"text"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7c7b\u578b\uff1a"}),Object(c.jsxs)("select",{onChange:F,"data-key":"type",value:R.type||"",className:"input",children:[Object(c.jsx)("option",{value:"magic",children:u.magic}),Object(c.jsx)("option",{value:"sword",children:u.sword}),Object(c.jsx)("option",{value:"glaive",children:u.glaive}),Object(c.jsx)("option",{value:"arch",children:u.arch}),Object(c.jsx)("option",{value:"longHandle",children:u.longHandle})]})]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u751f\u547d\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"hp",value:R.hp||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u9632\u5fa1\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"defence",value:R.defence||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u66b4\u51fb\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"criticalRate",value:R.criticalRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7206\u4f24\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"criticalStrike",value:R.criticalStrike||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u767d\u5b57\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"base",value:R.base||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u653b\u7387\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"atRate",value:R.atRate||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7cbe\u901a\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"reaction",value:R.reaction||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u5145\u80fd\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"charging",value:R.charging||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7269\u7406\uff1a"}),Object(c.jsx)("input",{onChange:F,"data-key":"physicsReward",value:R.physicsReward||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.fire,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"fire",value:R.fire||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.electric,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"electric",value:R.electric||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.water,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"water",value:R.water||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.ice,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"ice",value:R.ice||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.wind,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"wind",value:R.wind||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.rock,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"rock",value:R.rock||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u.treatment,"\uff1a"]}),Object(c.jsx)("input",{onChange:F,"data-key":"treatment",value:R.treatment||0,className:"input",type:"number"})," "]}),Object(c.jsxs)("div",{className:"InputsBox_item_btnbox",children:[Object(c.jsx)("button",{onClick:function(){R.id||(R.id=(new Date).getTime());var e=P.find((function(e){return e.id===R.id}));if(e){for(var t in R)e[t]=R[t];V(Object(d.a)(P))}else{var a={};for(var c in R)a[c]=R[c];V([].concat(Object(d.a)(P),[a]))}S({criticalRate:5,criticalStrike:50,type:"magic",skill:[]}),s(!1)},className:"clobtn font_middle button button_blue",children:"\u4fdd\u5b58"}),Object(c.jsx)("button",{onClick:W,className:"clobtn font_middle button button_red",children:"\u53d6\u6d88"})]})]})})}),Object(c.jsx)("div",{className:b?"show":"hide",children:Object(c.jsx)("div",{className:"mderContainer",children:Object(c.jsxs)("div",{className:"InputsBox",children:[Object(c.jsx)("button",{onClick:function(e){e.stopPropagation(),m(!1)},className:"font_small button button_red righttop",children:"\u53d6\u6d88"}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u540d\u79f0\uff1a"}),Object(c.jsx)("input",{onChange:J,"data-key":"name",value:w.name||"",className:"input",type:"text"})]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7c7b\u578b\uff1a"}),Object(c.jsxs)("select",{onChange:J,"data-key":"type",value:w.type||"physicsReward",className:"input",children:[Object(c.jsx)("option",{value:"physicsReward",children:u.physicsReward}),Object(c.jsx)("option",{value:"fire",children:u.fire}),Object(c.jsx)("option",{value:"electric",children:u.electric}),Object(c.jsx)("option",{value:"water",children:u.water}),Object(c.jsx)("option",{value:"ice",children:u.ice}),Object(c.jsx)("option",{value:"wind",children:u.wind}),Object(c.jsx)("option",{value:"rock",children:u.rock})]})]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u500d\u7387\uff1a"}),Object(c.jsx)("div",{className:"InputsBox_item_rate",children:w.rate.join(" ")}),Object(c.jsx)("input",{onChange:function(e){return v(Math.abs(parseFloat(e.target.value))-0)},value:x-0,className:"input input_small",type:"number"}),Object(c.jsx)("button",{onClick:function(){if(/\d/.test(x)&&0!==x){var e={};for(var t in w)e[t]=w[t];var a=Math.abs(x)-0;e.rate=[].concat(Object(d.a)(e.rate),[a]),C(e),v(0)}},className:"btn",children:"+"})]}),Object(c.jsxs)("div",{className:"InputsBox_btn_item",children:[Object(c.jsx)("button",{onClick:function(){f&&0!==f&&(P.find((function(e){return e.id===f})).skill.push(Object(r.a)(Object(r.a)({},w),{},{key:(new Date).getTime()})),V(Object(d.a)(P)),C({type:"physicsReward",rate:[]}))},className:"button button_blue button_long",children:"\u63d2\u5165"}),Object(c.jsx)("button",{className:"button button_blue button_long",onClick:function(){return C({type:"physicsReward",rate:[]})},children:"\u6e05\u9664"})]}),Object(c.jsx)("div",{children:P.find((function(e){return e.id===f}))?P.find((function(e){return e.id===f})).skill.map((function(e,t){return Object(c.jsxs)("div",{className:"InputsBox_btn_item_list",children:[Object(c.jsx)("div",{children:e.name||""}),Object(c.jsx)("div",{children:u[e.type][0]||""}),Object(c.jsxs)("div",{children:["\u500d\u7387:",e.rate.join(" ")||0]}),Object(c.jsxs)("div",{children:["\u5408\u8ba1:",N(e.rate)]}),Object(c.jsx)("button",{onClick:function(){return e=t,void(f&&0!==f&&(P.find((function(e){return e.id===f})).skill.splice(e,1),V(Object(d.a)(P))));var e},className:"button button_red right",children:"\u5220\u9664"})]},e.key)})):null})]})})}),Object(c.jsx)("div",{onClick:function(){s(!0)},className:"newWeapon",children:"NEW+"})]})}function h(e){var t=["attack","atRate","criticalRate","criticalStrike","charging","reaction","defence","defenceRate","hp","hpRate"],a={flower:["hp"],plume:["attack"],sandglass:["atRate","reaction"],cann:["physicsReward","fire","electric","water","ice","wind","rock"],header:["criticalRate","criticalStrike"]},i={flower:{hp:4780},plume:{attack:311},sandglass:{atRate:46.6,reaction:187},cann:{physicsReward:58.3,fire:46.6,electric:46.6,water:46.6,ice:46.6,wind:46.6,rock:46.6},header:{criticalRate:31.1,criticalStrike:62.2}},s=e.Relics,l=e.changeRelics,r=Object(n.useState)(!1),j=Object(o.a)(r,2),b=j[0],m=j[1],h=Object(n.useState)({type:"flower",mainProp:"hp",mainValue:i.flower.hp,second:[{},{},{},{}]}),p=Object(o.a)(h,2),x=p[0],v=p[1],O=function(e){e.stopPropagation(),m(!1)},_=Object(n.useCallback)((function(e){var t={};for(var a in x)t[a]=x[a];t.mainProp=e.target.value,v(t)}),[x]),f=function(e){var t={};for(var a in x)t[a]=x[a];t.mainValue=Math.abs(parseFloat(e.target.value||0))-0,e.target.value=t.mainValue,v(t)},N=function(e){if(e.target.value&&""!==e.target.value){var t={};for(var a in x)t[a]=x[a];t.second[e.target.dataset.index].secondProp=e.target.value,t.second[e.target.dataset.index].secondValue=0,v(t)}},g=function(e){var t=Math.abs(parseFloat(e.target.value||0))-0;e.target.value=t;var a={};for(var c in x)a[c]=x[c];a.second[e.target.dataset.index].secondValue=t,v(a)};Object(n.useEffect)((function(){_({target:{value:a[x.type][0]}})}),[x.type]),Object(n.useEffect)((function(){f({target:{value:i[x.type][x.mainProp]}})}),[x.mainProp]);return Object(c.jsxs)("div",{className:"weapon_container",children:[s.map((function(e){return Object(c.jsxs)("div",{className:"weapon_box",children:[Object(c.jsxs)("div",{className:"weapon_box_head",children:[Object(c.jsxs)("div",{className:"weapon_box_head_item",children:["\u7c7b\u578b\uff1a",u[e.type]]}),Object(c.jsxs)("div",{className:"weapon_box_head_item",children:[u[e.mainProp],"\uff1a",e.mainValue]})]}),Object(c.jsxs)("div",{children:["id:",e.id]}),Object(c.jsx)("div",{className:"weapon_box_body",children:e.second.map((function(e){return Object(c.jsxs)("div",{children:[u[e.secondProp]," : ",e.secondValue||0]},e.secondProp)}))}),Object(c.jsxs)("div",{className:"weapon_box_btn",children:[Object(c.jsx)("div",{onClick:function(){return function(e){var t=s.find((function(t){return t.id===e})),a={};for(var c in t)a[c]=t[c];v(a),m(!0)}(e.id)},className:"weapon_box_edit",children:"\u7f16\u8f91"}),Object(c.jsx)("div",{onClick:function(){return function(e){var t=s.filter((function(t){return t.id!==e}));l(t)}(e.id)},className:"weapon_box_dele",children:"\u5220\u9664"})]})]},e.id)})),Object(c.jsx)("div",{className:b?"show":"hide",children:Object(c.jsx)("div",{className:"mderContainer",children:Object(c.jsxs)("div",{className:"InputsBox",children:[Object(c.jsx)("button",{onClick:O,className:"font_small button button_red righttop",children:"\u53d6\u6d88"}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u7c7b\u578b\uff1a"}),Object(c.jsxs)("select",{onChange:function(e){var t={};for(var a in x)t[a]=x[a];t.type=e.target.value,v(t)},value:x.type||"flower",className:"input",children:[Object(c.jsx)("option",{value:"flower",children:u.flower}),Object(c.jsx)("option",{value:"plume",children:u.plume}),Object(c.jsx)("option",{value:"sandglass",children:u.sandglass}),Object(c.jsx)("option",{value:"cann",children:u.cann}),Object(c.jsx)("option",{value:"header",children:u.header})]})]}),Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u4e3b\u8bcd\uff1a"}),Object(c.jsx)("select",{onChange:_,value:x.mainProp||"",className:"relic_main_key_select",children:a[x.type].map((function(e){return Object(c.jsx)("option",{value:e,children:u[e]},e)}))}),Object(c.jsx)("input",{onChange:f,value:x.mainValue||0,className:"input2",type:"number"})]}),x.second.map((function(e,a){return Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsx)("div",{className:"InputsBox_item_font",children:"\u526f\u8bcd\uff1a"}),Object(c.jsxs)("select",{onChange:N,"data-index":a,value:e.secondProp||"",className:"relic_main_key_select",children:[Object(c.jsx)("option",{value:""}),t.filter((function(e){return e!==x.mainProp})).map((function(e){return Object(c.jsx)("option",{value:e,children:u[e]},e)}))]}),Object(c.jsx)("input",{onChange:g,"data-index":a,value:e.secondValue||0,className:"input2",type:"number"})]},a)})),Object(c.jsxs)("div",{className:"InputsBox_item_btnbox",children:[Object(c.jsx)("button",{onClick:function(){x.id||(x.id=(new Date).getTime());var e=s.find((function(e){return e.id===x.id}));if(e){for(var t in x)e[t]=x[t];l(Object(d.a)(s))}else{var a={};for(var c in x)a[c]=x[c];l([].concat(Object(d.a)(s),[a]))}v({type:"flower",mainProp:"hp",mainValue:i.flower.hp,second:[{},{},{},{}]}),m(!1)},className:"clobtn font_middle button button_blue",children:"\u4fdd\u5b58"}),Object(c.jsx)("button",{onClick:O,className:"clobtn font_middle button button_red",children:"\u53d6\u6d88"})]})]})})}),Object(c.jsx)("div",{onClick:function(){m(!0)},className:"newWeapon",children:"NEW+"})]})}function p(e){var t=[];for(var a in e)if(!/id|name|skill/.test(a)){var n=e[a];"type"===a&&(n=u[n]),t.push({key:a,value:n})}return Object(c.jsx)(c.Fragment,{children:t.map((function(e){return Object(c.jsxs)("div",{className:"info_item",children:[u[e.key],":",e.value]},e.key)}))})}function x(e){var t=[];for(var a in e)if(!/id|name|skill|effect/.test(a)){var n=e[a];"type"===a&&(n=u[n]),t.push({key:a,value:n})}return Object(c.jsxs)(c.Fragment,{children:[t.map((function(e){return Object(c.jsxs)("div",{className:"info_item",children:[u[e.key],":",e.value]},e.key)})),Object(c.jsxs)("div",{className:"weapon_effect",children:["\u6280\u80fd:",e.effect]})]})}function v(e,t,a){var c=e.baseAt,n=e.criticalStrikeAt,i=e.criticalStrikeDps,s=e.reaction_value;return n*=t,i*=t,"\u672a\u66b4\u51fb\u4f24\u5bb3:".concat((c*=t).toFixed(2)," \u7206\u51fb\u4f24\u5bb3:").concat(n.toFixed(2)," \u66b4\u51fb\u671f\u671b\u4f24\u5bb3:").concat(i.toFixed(2))+("\u7269"===a[0]?"":" \u7cbe\u901a\u671f\u671b\u4f24\u5bb3".concat((i*s).toFixed(2)))}function O(e){var t=Object(n.useState)(!1),a=Object(o.a)(t,2),i=a[0],s=a[1],l=function(e){e.stopPropagation(),s(!1)},r=e.Weapons,d=e.Characters,j=e.Relics,b=Object(n.useState)({hp:0,hpRate:0,defence:0,defenceRate:0,base:0,attack:0,atRate:0,criticalRate:0,criticalStrike:0,physicsReward:0,fire:0,electric:0,water:0,ice:0,wind:0,rock:0,treatment:0,charging:0,reaction:0,damageRate:0}),m=Object(o.a)(b,2),h=m[0],O=m[1],_=Object(n.useState)(!1),f=Object(o.a)(_,2),N=f[0],k=f[1],y=Object(n.useState)({}),w=Object(o.a)(y,2),C=w[0],I=w[1],B=Object(n.useState)({}),R=Object(o.a)(B,2),S=R[0],P=R[1],V=Object(n.useState)({flower:{},plume:{},sandglass:{},cann:{},header:{}}),W=Object(o.a)(V,2),F=W[0],J=W[1],M=Object(n.useState)(10),E=Object(o.a)(M,2),A=E[0],D=E[1],H=Object(n.useState)(""),T=Object(o.a)(H,2),L=T[0],q=T[1],z=function(e){var t=0;C[e]&&(t=C[e]-0);var a=0;S[e]&&(a=S[e]-0);var c=0;return Object.values(F).forEach((function(t){t.mainProp===e&&t.mainValue&&(c+=t.mainValue||0),t.second&&t.second.length&&t.second.forEach((function(t){t.secondProp===e&&t.secondValue&&(c+=t.secondValue||0)}))})),h[e]+t+a+c},G=function(e){var t={};for(var a in h)t[a]=h[a];e.target.value=Math.abs(parseFloat(e.target.value||0))-0,t[e.target.dataset.key]=e.target.value-0,O(t)},K=function(){var e=z("base"),t=z("attack"),a=z("atRate"),c=z("criticalRate"),n=z("criticalStrike"),i=z("reaction"),s=(e*(1+a/100)+t)*(1+z("damageRate")/100),l=s*(1+n/100),r=1+.16*i/100;return{baseAt:s,criticalStrikeAt:l,criticalStrikeDps:g({dmg:s,criticalStrikeAt:l,criticalRate:c}),reaction_value:r}},Q=function(e){if(e.target.value&&""!==e.target.value){var t=JSON.parse(JSON.stringify(F));t[e.target.dataset.key]=j.find((function(t){return t.id===e.target.value-0})),J(t)}};return Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"mockcalc_title",children:"\u89d2\u8272\u5207\u6362"}),Object(c.jsxs)("div",{className:"mockcalc_character_container",children:[Object(c.jsxs)("div",{className:"mockcalc_character_select_box",children:[Object(c.jsx)("div",{className:"mockcalc_character_select_box_title",children:"\u89d2\u8272\u9009\u62e9"}),Object(c.jsx)("div",{children:Object(c.jsxs)("select",{onChange:function(e){if(e.target.value&&""!==e.target.value){var t=d.find((function(t){return t.id===e.target.value-0}));I(JSON.parse(JSON.stringify(t))),S.type&&t.type!==S.type&&P({})}},className:"mockcalc_character_select",children:[Object(c.jsx)("option",{value:""}),d.map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(c.jsx)("div",{className:"infobox",children:p(C)})]}),Object(c.jsx)("div",{className:"mockcalc_title",children:"\u6b66\u5668\u5207\u6362"}),Object(c.jsxs)("div",{className:"mockcalc_character_container",children:[Object(c.jsxs)("div",{className:"mockcalc_character_select_box",children:[Object(c.jsx)("div",{className:"mockcalc_character_select_box_title",children:"\u6b66\u5668\u5207\u6362"}),Object(c.jsx)("div",{children:Object(c.jsxs)("select",{onChange:function(e){if(e.target.value&&""!==e.target.value){var t=r.find((function(t){return t.id===e.target.value-0}));P(JSON.parse(JSON.stringify(t)))}},className:"mockcalc_character_select",children:[Object(c.jsx)("option",{value:""}),r.filter((function(e){return e.type===C.type})).map((function(e){return Object(c.jsx)("option",{value:e.id,children:e.name},e.id)}))]})})]}),Object(c.jsx)("div",{className:"infobox",children:x(S)})]}),Object(c.jsx)("div",{className:"mockcalc_title",children:"\u5723\u9057\u7269"}),Object(c.jsxs)("div",{className:"relics_container",children:[Object(c.jsxs)("div",{className:"relics_item",children:[Object(c.jsx)("div",{className:"relics_title",children:"\u751f\u4e4b\u82b1"}),Object(c.jsxs)("div",{className:"relics_head",children:[Object(c.jsxs)("div",{className:"relics_head_left",children:["\u9009\u62e9: ",Object(c.jsxs)("select",{onChange:Q,"data-key":"flower",children:[Object(c.jsx)("option",{}),j.filter((function(e){return"flower"===e.type})).map((function(e){return Object(c.jsxs)("option",{value:e.id,children:["id:...",String(e.id).substr(-4,4)]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"relics_head_right",children:[F.flower.mainProp?u[F.flower.mainProp]:"\u4e3b\u8bcd\u6761",":",F.flower.mainValue||0]})]}),Object(c.jsxs)("div",{className:"relics_body",children:[Object(c.jsxs)("div",{children:["id:",F.flower.id||""]}),F.flower.second?F.flower.second.map((function(e,t){return Object(c.jsxs)("div",{children:[u[e.secondProp],":",e.secondValue]},t)})):null]})]}),Object(c.jsxs)("div",{className:"relics_item",children:[Object(c.jsx)("div",{className:"relics_title",children:"\u6b7b\u4e4b\u7fbd"}),Object(c.jsxs)("div",{className:"relics_head",children:[Object(c.jsxs)("div",{className:"relics_head_left",children:["\u9009\u62e9: ",Object(c.jsxs)("select",{onChange:Q,"data-key":"plume",children:[Object(c.jsx)("option",{}),j.filter((function(e){return"plume"===e.type})).map((function(e){return Object(c.jsxs)("option",{value:e.id,children:["id:...",String(e.id).substr(-4,4)]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"relics_head_right",children:[F.plume.mainProp?u[F.plume.mainProp]:"\u4e3b\u8bcd\u6761",":",F.plume.mainValue||0]})]}),Object(c.jsxs)("div",{className:"relics_body",children:[Object(c.jsxs)("div",{children:["id:",F.plume.id||""]}),F.plume.second?F.plume.second.map((function(e,t){return Object(c.jsxs)("div",{children:[u[e.secondProp],":",e.secondValue]},t)})):null]})]}),Object(c.jsxs)("div",{className:"relics_item",children:[Object(c.jsx)("div",{className:"relics_title",children:"\u65f6\u4e4b\u6c99"}),Object(c.jsxs)("div",{className:"relics_head",children:[Object(c.jsxs)("div",{className:"relics_head_left",children:["\u9009\u62e9: ",Object(c.jsxs)("select",{onChange:Q,"data-key":"sandglass",children:[Object(c.jsx)("option",{}),j.filter((function(e){return"sandglass"===e.type})).map((function(e){return Object(c.jsxs)("option",{value:e.id,children:["id:...",String(e.id).substr(-4,4)]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"relics_head_right",children:[F.sandglass.mainProp?u[F.sandglass.mainProp]:"\u4e3b\u8bcd\u6761",":",F.sandglass.mainValue||0]})]}),Object(c.jsxs)("div",{className:"relics_body",children:[Object(c.jsxs)("div",{children:["id:",F.sandglass.id||""]}),F.sandglass.second?F.sandglass.second.map((function(e,t){return Object(c.jsxs)("div",{children:[u[e.secondProp],":",e.secondValue]},t)})):null]})]}),Object(c.jsxs)("div",{className:"relics_item",children:[Object(c.jsx)("div",{className:"relics_title",children:"\u7a7a\u4e4b\u676f"}),Object(c.jsxs)("div",{className:"relics_head",children:[Object(c.jsxs)("div",{className:"relics_head_left",children:["\u9009\u62e9: ",Object(c.jsxs)("select",{onChange:Q,"data-key":"cann",children:[Object(c.jsx)("option",{}),j.filter((function(e){return"cann"===e.type})).map((function(e){return Object(c.jsxs)("option",{value:e.id,children:["id:...",String(e.id).substr(-4,4)]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"relics_head_right",children:[F.cann.mainProp?u[F.cann.mainProp]:"\u4e3b\u8bcd\u6761",":",F.cann.mainValue||0]})]}),Object(c.jsxs)("div",{className:"relics_body",children:[Object(c.jsxs)("div",{children:["id:",F.cann.id||""]}),F.cann.second?F.cann.second.map((function(e,t){return Object(c.jsxs)("div",{children:[u[e.secondProp],":",e.secondValue]},t)})):null]})]}),Object(c.jsxs)("div",{className:"relics_item",children:[Object(c.jsx)("div",{className:"relics_title",children:"\u7406\u4e4b\u51a0"}),Object(c.jsxs)("div",{className:"relics_head",children:[Object(c.jsxs)("div",{className:"relics_head_left",children:["\u9009\u62e9: ",Object(c.jsxs)("select",{onChange:Q,"data-key":"header",children:[Object(c.jsx)("option",{}),j.filter((function(e){return"header"===e.type})).map((function(e){return Object(c.jsxs)("option",{value:e.id,children:["id:...",String(e.id).substr(-4,4)]},e.id)}))]})]}),Object(c.jsxs)("div",{className:"relics_head_right",children:[F.header.mainProp?u[F.header.mainProp]:"\u4e3b\u8bcd\u6761",":",F.header.mainValue||0]})]}),Object(c.jsxs)("div",{className:"relics_body",children:[Object(c.jsxs)("div",{children:["id:",F.header.id||""]}),F.header.second?F.header.second.map((function(e,t){return Object(c.jsxs)("div",{children:[u[e.secondProp],":",e.secondValue]},t)})):null]})]})]}),Object(c.jsx)("div",{onClick:function(){s(!0)},className:"mockcalc_title click",children:" \u81ea\u5b9a\u4e49\u7f16\u8f91\u521d\u59cb\u9762\u677f "}),Object(c.jsx)("div",{className:i?"show":"hide",children:Object(c.jsx)("div",{className:"mderContainer",children:Object(c.jsxs)("div",{className:"InputsBox",children:[Object(c.jsx)("button",{onClick:l,className:"font_small button button_red righttop",children:"\u53d6\u6d88"}),Object.keys(h).map((function(e){return Object(c.jsxs)("div",{className:"InputsBox_item",children:[Object(c.jsxs)("div",{className:"InputsBox_item_font",children:[u[e],"\uff1a"]}),Object(c.jsx)("input",{onChange:G,"data-key":e,value:h[e]||0,className:"input",type:"number"})]},e)})),Object(c.jsx)("div",{className:"InputsBox_item_btnbox",children:Object(c.jsx)("button",{onClick:l,className:"clobtn font_middle button button_red",children:"\u8fd4\u56de"})})]})})}),Object(c.jsx)("div",{className:"mockcalc_title",children:"\u9762\u677f"}),Object(c.jsxs)("div",{className:"mockcalc_sh",children:[Object(c.jsx)("div",{onClick:function(){return k(!N)},className:"ShowLastDataBox",children:N?"\u6536\u7f29":"\u5c55\u5f00"}),Object(c.jsx)("div",{className:N?"mockcalc_container":"mockcalc_container mockcalc_container_hide",children:Object.keys(h).map((function(e){return Object(c.jsxs)("div",{className:"mockcalc_container_row",children:[Object(c.jsx)("div",{className:"mockcalc_container_row_key",children:u[e]}),Object(c.jsx)("div",{className:"mockcalc_container_row_value",children:z(e)})]},e)}))})]}),Object(c.jsx)("div",{children:C.skill?C.skill.map((function(e,t){return Object(c.jsxs)("div",{className:"cinfo_skill_container",children:[Object(c.jsxs)("div",{className:"cinfo_skill_title",children:[e.name||"\u5929\u8d4b".concat(t+1)," \u4f24\u5bb3\u7c7b\u578b:",u[e.type]]}),Object(c.jsxs)("div",{className:"center",children:["\u500d\u7387:",e.rate.join(" ")]}),e.rate.map((function(t,a){return Object(c.jsxs)("div",{className:"skilldmg",children:["\u7b2c",a+1,"\u6bb5\u4f24\u5bb3:",v(K(),(z(e.type)/100+1)*(t/100),u[e.type])]},t+""+a)}))]},e.key)})):null}),Object(c.jsx)("div",{className:"mockcalc_title",children:"\u653b\u51fb\u53cc\u7206\u6570\u503c\u5e73\u8861"}),Object(c.jsxs)("div",{children:[Object(c.jsx)("button",{className:"button button_blue margin_1",onClick:function(){for(var e=z("base"),t=z("attack"),a=z("atRate"),c=z("criticalRate"),n=z("criticalStrike"),i=parseInt(A),s=[],l=0;l<=i;l++)for(var r=l,d=0;d<=i-l;d++){var o=d,j=i-l-d;s.push({atRate:5.8*j,criticalRate:3.9*o,criticalStrike:7.8*r})}(s=s.map((function(i){return i.value=function(e){var t=e.base,a=e.attack,c=e.atRate,n=e.criticalRate,i=t*(1+c/100)+a;return g({dmg:i,criticalStrikeAt:i*(1+e.criticalStrike/100),criticalRate:n})}({base:e,attack:t,atRate:a+i.atRate,criticalRate:c+i.criticalRate,criticalStrike:n+i.criticalStrike}),i}))).sort((function(e,t){return t.value-e.value})),q("\u653b\u51fb\u529b\u767e\u5206\u6bd4:".concat(s[0].atRate," \u66b4\u51fb\u7387:").concat(s[0].criticalRate," \u7206\u4f24:").concat(s[0].criticalStrike))},children:"\u8ba1\u7b97"}),Object(c.jsx)("input",{type:"number",onChange:function(e){var t=e.target.value;e.target.value||(t=0),D(Number(t))},value:A}),Object(c.jsx)("div",{children:L})]})]})}function _(e){for(var t in e){var a=e[t];/string|number/gi.test(typeof a)||(a=JSON.stringify(a)),window.localStorage.setItem(t,a)}}function f(e){return window.localStorage[e]}function N(e){return e.length>0?e.reduce((function(e,t){return e+t})):0}function g(e){var t=e.dmg,a=e.criticalStrikeAt,c=e.criticalRate;c>100&&(c=100),c<0&&(c=0);return((10*c*a+(1e3-10*c)*t)/1e3).toFixed(0)-0}var k=function(){var e=Object(n.useState)(f("MenuPage")||"1"),t=Object(o.a)(e,2),a=t[0],i=t[1],s=Object(n.useState)(JSON.parse(f("Weapons")||"[]")),l=Object(o.a)(s,2),r=l[0],d=l[1],u=Object(n.useState)(JSON.parse(f("Characters")||"[]")),p=Object(o.a)(u,2),x=p[0],v=p[1],N=Object(n.useState)(JSON.parse(f("Relics")||"[]")),g=Object(o.a)(N,2),k=g[0],y=g[1],w=Object(n.useCallback)((function(e){i((function(){return e})),_({MenuPage:e})}),[]),C=Object(n.useCallback)((function(e){d((function(){return e})),_({Weapons:e})}),[]),I=Object(n.useCallback)((function(e){v((function(){return e})),_({Characters:e})}),[]),B=Object(n.useCallback)((function(e){y((function(){return e})),_({Relics:e})}),[]);return Object(n.useEffect)((function(){i((function(){return a}))}),[a]),Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("div",{className:"head",children:[{1:"\u6b66\u5668",2:"\u89d2\u8272",3:"\u5723\u9057\u7269",4:"\u6a21\u62df"}[a],Object(c.jsxs)("div",{className:"head_btn",children:[Object(c.jsx)("button",{onClick:function(){window.localStorage.clear(),_(j),window.location.reload()},children:"\u5bfc\u5165\u6570\u636e"}),Object(c.jsx)("button",{onClick:function(){window.localStorage.clear(),window.location.reload()},children:"\u6e05\u9664\u7f13\u5b58"})]})]}),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)("div",{className:"1"===a?"show":"hide",children:b({Weapons:r,changeWeapons:C})}),Object(c.jsx)("div",{className:"2"===a?"show":"hide",children:m({Characters:x,changeCharacters:I})}),Object(c.jsx)("div",{className:"3"===a?"show":"hide",children:h({Relics:k,changeRelics:B})}),Object(c.jsx)("div",{className:"4"===a?"show":"hide",children:O({Weapons:r,Characters:x,Relics:k})})]}),Object(c.jsxs)("div",{className:"menu",children:[Object(c.jsx)("div",{onClick:function(){return w("1")},className:"1"===a?"menu_item menu_item_active":"menu_item",children:"\u6b66\u5668"}),Object(c.jsx)("div",{onClick:function(){return w("2")},className:"2"===a?"menu_item menu_item_active":"menu_item",children:"\u89d2\u8272"}),Object(c.jsx)("div",{onClick:function(){return w("3")},className:"3"===a?"menu_item menu_item_active":"menu_item",children:"\u5723\u9057\u7269"}),Object(c.jsx)("div",{onClick:function(){return w("4")},className:"4"===a?"menu_item menu_item_active":"menu_item",children:"\u6a21\u62df"})]})]})};l.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.6681aedb.chunk.js.map