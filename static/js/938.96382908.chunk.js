"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[938],{6938:function(n,t,r){r.r(t),r.d(t,{default:function(){return x}});var e,a,u=r(5861),c=r(9439),i=r(4687),s=r.n(i),o=r(7689),p=r(2791),f=r(7746),l=r(168),h=r(8789),d=h.ZP.ul(e||(e=(0,l.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n"]))),m=h.ZP.li(a||(a=(0,l.Z)(["\n  width: calc(16.666% - 10px);\n  margin-bottom: 20px;\n\n  &:hover {\n    transform: translateY(-5px);\n  }\n\n  img {\n    display: block;\n    margin-bottom: 10px;\n    width: 100%;\n  }\n\n  p {\n    margin: 0;\n    text-align: center;\n  }\n"]))),v=r(184),x=function(){var n=(0,p.useState)([]),t=(0,c.Z)(n,2),r=t[0],e=t[1],a=(0,p.useState)(null),i=(0,c.Z)(a,2),l=i[0],h=i[1],x=(0,p.useState)(null),g=(0,c.Z)(x,2),w=g[0],b=g[1],k=(0,o.UO)().movieId;return(0,p.useEffect)((function(){var n=function(){var n=(0,u.Z)(s().mark((function n(){var t,r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.IQ)(k);case 3:if(t=n.sent,(r=t.cast).length){n.next=8;break}return b(!0),n.abrupt("return");case 8:e((function(){return r.map((function(n){return(0,v.jsxs)(m,{children:[(0,v.jsx)("img",{src:n.profile_path?(0,f.Jn)(n.profile_path,"original"):"https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",alt:"",width:"50px"}),n.name," chracter: ",n.character]},n.id)}))})),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),h(n.t0.message);case 14:return n.prev=14,n.finish(14);case 16:case"end":return n.stop()}}),n,null,[[0,11,14,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[k]),(0,v.jsxs)(v.Fragment,{children:[l&&(0,v.jsx)("p",{children:l}),w&&(0,v.jsx)("p",{children:"No cast information available for this movie"}),(0,v.jsx)(d,{children:r})]})}},7746:function(n,t,r){r.d(t,{IQ:function(){return p},JS:function(){return i},Jn:function(){return o},TP:function(){return s},V0:function(){return l},tx:function(){return f}});var e=r(5861),a=r(4687),u=r.n(a),c=r(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"65bf756d8028470116d86303f5d05e74"}}),i=function(){var n=(0,e.Z)(u().mark((function n(){var t,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/all/day");case 2:return t=n.sent,r=t.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(n,t){return" https://image.tmdb.org/t/p/".concat(t,"/").concat(n)},p=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return r=n.sent,e=r.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,e.Z)(u().mark((function n(t,r){var e,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t,page:r}});case 2:return e=n.sent,a=e.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,r){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=938.96382908.chunk.js.map