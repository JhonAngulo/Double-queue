(this["webpackJsonpdouble-cola"]=this["webpackJsonpdouble-cola"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),a=n(5),l=n(2),r=n(8);function o(e,t){for(var n=e.length;t>n;)t-=n,n*=2;return e[Math.ceil(t/(n/e.length))-1]}var u={running:!1,drinksAvailable:1,iteration:0,queueClient:[],clientList:["Sheldon","Leonard","Penny","Rajesh","Howard"]},j=n(0),b=Object(c.createContext)({});function d(e){var t=e.children,n=Object(c.useState)(u),i=Object(r.a)(n,2),s=i[0],d=i[1],h=Object(c.useCallback)((function(e){var t=e.newClient;d(Object(l.a)(Object(l.a)({},s),{},{iteration:s.iteration+1,queueClient:[].concat(Object(a.a)(s.queueClient),[t])}))}),[s]),O=Object(c.useCallback)((function(e){var t=e.flag;d(Object(l.a)(Object(l.a)({},s),{},{running:!1,iteration:0,queueClient:t?[]:Object(a.a)(s.queueClient)}))}),[s]),m=s.running,v=s.iteration,x=s.drinksAvailable,g=s.clientList;Object(c.useEffect)((function(){var e=null;return m?v<x?e=setInterval((function(){h({newClient:o(g,v+1)})}),1e3):(O({flag:!1}),clearInterval(e)):m||0===v||clearInterval(e),function(){return clearInterval(e)}}),[m,v,x,h,g,O]);var f={toggleRunning:function(){d(Object(l.a)(Object(l.a)({},s),{},{running:!s.running,queueClient:s.running||0!==s.iteration?Object(a.a)(s.queueClient):[]}))},changeDrinksAvailable:function(e){var t=e.value;d(Object(l.a)(Object(l.a)({},s),{},{drinksAvailable:t}))},reset:O};return Object(j.jsx)(b.Provider,{value:{state:s,actions:f},children:t})}var h=b,O=function(){var e=Object(c.useContext)(h),t=e.state,n=e.actions,i=t.running,s=t.drinksAvailable,a=t.queueClient,l=t.iteration,r=n.toggleRunning,o=n.changeDrinksAvailable,u=n.reset,b=a[a.length-1];return Object(j.jsxs)("div",{children:[Object(j.jsxs)("div",{className:"controls",children:[Object(j.jsxs)("div",{className:"controls__instructions",children:[Object(j.jsx)("h3",{className:"controls__instructions-title",children:"Instructions: "}),Object(j.jsxs)("ol",{className:"controls__instructions-items",children:[Object(j.jsxs)("li",{className:"controls__instructions-item",children:["set the amount of ",Object(j.jsx)("strong",{children:"drinks available"})]}),Object(j.jsx)("li",{className:"controls__instructions-item",children:"press start to start delivering the drinks"})]})]}),Object(j.jsx)("div",{className:"controls__input",children:Object(j.jsxs)("label",{className:"controls__input-label",children:[Object(j.jsx)("span",{children:" Drinks available:"}),Object(j.jsx)("input",{className:"controls__input-in",type:"number",min:"1",max:"100",value:s,onChange:function(e){o({value:e.target.value})},disabled:l})]})}),Object(j.jsxs)("div",{className:"controls__buttons",children:[Object(j.jsx)("button",{className:"btn",onClick:function(){r()},children:i?"Stop":"Start"}),Object(j.jsx)("button",{className:"btn",onClick:function(){u({flag:!0})},children:"Reset"})]})]}),Object(j.jsx)("br",{}),b&&!i&&Object(j.jsx)("p",{className:"alert info",children:"The last in the queue was: ".concat(b)})]})},m=function(){return Object(j.jsxs)("div",{className:"container-hero",children:[Object(j.jsx)("h2",{className:"container-hero-title",children:"welcome to the drink machine"}),Object(j.jsxs)("div",{className:"container-machine",children:[Object(j.jsx)("img",{className:"container-machine__img",src:"/images/machine.png",alt:"machine"}),Object(j.jsx)(O,{})]})]})},v=function(e){var t=e.img,n=e.name;return Object(j.jsxs)("div",{className:"client",children:[Object(j.jsx)("img",{className:"client__img",src:t,alt:n}),Object(j.jsxs)("div",{className:"client__detail",children:[Object(j.jsx)("h3",{className:"client__detail-title",children:n}),Object(j.jsx)("p",{children:"has been attended"})]})]})},x=function(){var e=Object(c.useContext)(h).state,t=e.queueClient,n=e.running,i=function(e){return"/images/".concat(e.toLowerCase(),".png")},s=Object(c.useRef)(null);return Object(c.useEffect)((function(){n&&s.current.scrollIntoView({behavior:"smooth"})}),[t,n]),Object(j.jsxs)("div",{className:"container-queue",children:[Object(j.jsxs)("h2",{className:"container-queue__title",children:["Queue: ",t.length]}),Object(j.jsxs)("div",{className:"container-queue__list",children:[t.map((function(e,t){return Object(j.jsx)(v,{name:e,img:i(e)},"client_".concat(t))})),Object(j.jsx)("div",{ref:s})]})]})},g=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m,{}),Object(j.jsx)(x,{})]})};n(14);Object(s.render)(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(d,{children:Object(j.jsx)(g,{})})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.33413e52.chunk.js.map