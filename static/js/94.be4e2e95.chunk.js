"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[94],{2094:function(n,t,e){e.r(t),e.d(t,{default:function(){return k}});var r,a,u,c,i=e(5861),s=e(9439),o=e(4687),f=e.n(o),p=e(7689),d=e(2791),l=e(7746),h=e(9771),x=e(168),v=e(7402),m=v.Z.div(r||(r=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),w=v.Z.div(a||(a=(0,x.Z)(["\n  font-size: 24px;\n  font-weight: bold;\n"]))),g=v.Z.ul(u||(u=(0,x.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  list-style: none;\n  padding: 0;\n  margin: 0;\n"]))),b=v.Z.li(c||(c=(0,x.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  width: 100%;\n  padding: 10px;\n  margin: 10px;\n  background-color: #f2f2f2;\n  border-radius: 10px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);\n  text-align: left;\n  font-size: 16px;\n  line-height: 1.5;\n  word-break: break-word;\n  overflow: hidden;\n\n  p {\n    font-weight: bold;\n    margin-bottom: 5px;\n  }\n"]))),Z=e(184),k=function(){var n=(0,d.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1],a=(0,d.useState)(!1),u=(0,s.Z)(a,2),c=u[0],o=u[1],x=(0,d.useState)(null),v=(0,s.Z)(x,2),k=v[0],y=v[1],j=(0,d.useState)(null),_=(0,s.Z)(j,2),S=_[0],z=_[1],C=(0,p.UO)().movieId;return(0,d.useEffect)((function(){var n=function(){var n=(0,i.Z)(f().mark((function n(){var t,e;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o(!0),n.next=4,(0,l.tx)(C);case 4:if(t=n.sent,(e=t.results).length){n.next=9;break}return z(!0),n.abrupt("return");case 9:r((function(){return e.map((function(n){return(0,Z.jsxs)(b,{children:[(0,Z.jsx)("p",{children:n.author})," ",n.content]},n.id)}))})),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(0),y(n.t0.message);case 15:return n.prev=15,o(!1),n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[0,12,15,18]])})));return function(){return n.apply(this,arguments)}}();n()}),[C]),(0,Z.jsxs)(m,{children:[S&&(0,Z.jsx)(w,{children:"No comment"}),0!==e.length&&(0,Z.jsxs)(g,{children:[" ",e]}),k&&(0,Z.jsx)("p",{children:k}),c&&(0,Z.jsx)(h.Z,{})]})}},7746:function(n,t,e){e.d(t,{IQ:function(){return f},JS:function(){return i},Jn:function(){return o},TP:function(){return s},V0:function(){return d},tx:function(){return p}});var r=e(5861),a=e(4687),u=e.n(a),c=e(1912).Z.create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"65bf756d8028470116d86303f5d05e74"}}),i=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/trending/all/day");case 2:return t=n.sent,e=t.data,n.abrupt("return",e);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),o=function(n,t){return" https://image.tmdb.org/t/p/".concat(t,"/").concat(n)},f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/credits"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/movie/".concat(t,"/reviews"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t,e){var r,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.get("/search/movie",{params:{query:t,page:e}});case 2:return r=n.sent,a=r.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=94.be4e2e95.chunk.js.map