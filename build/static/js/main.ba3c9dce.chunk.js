(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var s=n(0),c=n(10),i=n.n(c),a=(n(22),n(23),n(9)),r=n.n(a),o=n(11),l=n(7),d=n(17),j=n(34),m=n(35),h=n(42),b=n(36),u=n(37),x=n(40),O=n(41),v=n(38),f=n(39),p=n.p+"static/media/2.4e1103b4.jpg",y=n(14),g=n.n(y),N={dateTimeFormat:"DD/MM/YYYY, h:m A"},k=n(1),w=function(){var e,t,n,c,i,a,y,w,I,D=Object(s.useState)({topStoriesId:[],commentList:[],loading:!0,storyId:!1}),L=Object(d.a)(D,2),C=L[0],z=L[1];Object(s.useEffect)((function(){S()}),[]);var S=function(){fetch("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty").then((function(e){return e.json()})).then((function(e){var t=e.slice(Math.max(e.length-10));z(Object(l.a)(Object(l.a)({},C),{},{topStoriesId:t,storyId:0}))})).catch((function(e){console.error(e)}))};Object(s.useEffect)((function(){!1!==C.storyId&&T(C.topStoriesId[C.storyId])}),[C.storyId]);var T=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(Object(l.a)(Object(l.a)({},C),{},{loading:!0})),e.next=3,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json?print=pretty")).then((function(e){return e.json()})).then(function(){var e=Object(o.a)(r.a.mark((function e(t){var n,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.time=g()(t.time).format(N.dateTimeFormat),!t.kids){e.next=11;break}n=20,t.kids.length<20&&(n=t.kids.length),s=0;case 5:if(!(s<n)){e.next=11;break}return e.next=8,B(t.kids[s]);case 8:s++,e.next=5;break;case 11:z(Object(l.a)(Object(l.a)({},C),{},{loading:!1,storyDetails:t}));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(Object(l.a)(Object(l.a)({},C),{},{loading:!0})),e.next=3,fetch("https://hacker-news.firebaseio.com/v0/item/".concat(t,".json?print=pretty")).then((function(e){return e.json()})).then((function(e){var t=C.commentList;e.time=g()(e.time).format(N.dateTimeFormat),t.push(e),z(Object(l.a)(Object(l.a)({},C),{},{commentList:t,loading:!1}))})).catch((function(e){console.error(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(e){z(Object(l.a)(Object(l.a)({},C),{},{commentList:[],storyId:e}))};return console.log(999,C),C.loading?Object(k.jsx)("div",{className:"page-loading",children:"Loading..."}):Object(k.jsxs)("div",{className:"story-div",children:[Object(k.jsx)("h1",{className:"main-heading",children:"10 great short stories everyone should read"}),Object(k.jsxs)(m.a,{className:"text-right",style:{marginBottom:20},children:[C.storyId>0&&Object(k.jsx)(h.a,{variant:"light",size:"sm",disabled:C.commentLoading,onClick:function(){return F(C.storyId-1)},children:"Back"}),C.storyId<9&&Object(k.jsx)(h.a,{variant:"light",size:"sm",disabled:C.commentLoading,onClick:function(){return F(C.storyId+1)},children:"Next"})]}),Object(k.jsxs)(m.a,{className:"box-design",children:[Object(k.jsx)(b.a,{children:Object(k.jsx)(u.a,{xs:12,md:12,children:Object(k.jsx)("h5",{className:"story-title",children:null===(e=C.storyDetails)||void 0===e?void 0:e.title})})}),Object(k.jsx)(b.a,{children:Object(k.jsxs)(u.a,{xs:12,md:12,children:[Object(k.jsxs)("div",{className:"user-info",children:[Object(k.jsx)("div",{className:"user-pic",children:Object(k.jsx)(j.a,{src:p,roundedCircle:!0,height:"50px"})}),Object(k.jsxs)("div",{className:"user-name",children:[Object(k.jsx)("p",{className:"writer-name",children:Object(k.jsx)("b",{children:null===(t=C.storyDetails)||void 0===t?void 0:t.by})}),Object(k.jsx)("p",{className:"date",children:null===(n=C.storyDetails)||void 0===n?void 0:n.time})]})]}),(null===(c=C.storyDetails)||void 0===c?void 0:c.url)&&Object(k.jsx)(h.a,{variant:"danger",size:"sm",style:{marginTop:20},onClick:function(){var e;return window.open(null===(e=C.storyDetails)||void 0===e?void 0:e.url)},children:"Read More..."})]})}),Object(k.jsx)(m.a,{className:"box-design",children:Object(k.jsx)(b.a,{children:Object(k.jsx)(u.a,{md:12,children:Object(k.jsxs)(x.a,{defaultActiveKey:"0",children:[Object(k.jsxs)("div",{className:"comment-head",children:[Object(k.jsxs)(h.a,{variant:"light",size:"sm",children:[Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)(v.a,{})}),"Score ",Object(k.jsx)("b",{children:null===(i=C.storyDetails)||void 0===i?void 0:i.score})]}),Object(k.jsxs)(x.a.Toggle,{as:h.a,variant:"link",eventKey:"1",children:[Object(k.jsx)("span",{className:"icon",children:Object(k.jsx)(f.a,{})}),"Comments ",Object(k.jsx)("b",{children:(null===(a=C.storyDetails)||void 0===a?void 0:a.kids)?null===(y=C.storyDetails)||void 0===y||null===(w=y.kids)||void 0===w?void 0:w.length:0})]}),Object(k.jsxs)(h.a,{variant:"light",size:"sm",children:["Descendants ",Object(k.jsx)("b",{children:null===(I=C.storyDetails)||void 0===I?void 0:I.descendants})]})]}),Object(k.jsx)(x.a.Collapse,{eventKey:"1",children:Object(k.jsx)(O.a.Body,{className:"p-0",children:C.commentList&&C.commentList.length>0&&C.commentList.filter((function(e){return e})).map((function(e,t){return Object(k.jsxs)("div",{className:"comment-box",children:[Object(k.jsx)("div",{className:"comment-left",children:Object(k.jsx)(j.a,{src:p,roundedCircle:!0,className:"comment-pic"})}),Object(k.jsxs)("div",{className:"comment-right",children:[Object(k.jsx)("p",{className:"comment-by",children:null===e||void 0===e?void 0:e.by}),Object(k.jsx)("p",{className:"comment-text",children:null===e||void 0===e?void 0:e.text}),Object(k.jsx)("p",{className:"text-right",children:null===e||void 0===e?void 0:e.time})]})]},t)}))})})]})})})})]})]})};var I=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(w,{})})};n(29);i.a.render(Object(k.jsx)(k.Fragment,{children:Object(k.jsx)(I,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.ba3c9dce.chunk.js.map