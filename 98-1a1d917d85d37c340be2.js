(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{ctXc:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var i=t("q1tI"),c=t.n(i),a=t("txul"),o=function(){var e=c.a.useState(!1),n=e[0],i=e[1],o=Object(a.G)()&&window.LC_API||{},l=c.a.useState(!1),r=l[0],d=l[1],u=c.a.useRef(null),g=new URLSearchParams(Object(a.G)()&&window.location.search||"").get("is_livechat_open");return c.a.useEffect((function(){var e,n=null,c=null;if(Object(a.G)()){var o=Object(a.z)();try{t.e(78).then(t.bind(null,"49Cj")).then((function(e){u.current=e}))}catch(r){console.error(r)}var l=(e=document.cookie,function(){var n=document.cookie;if(n!=e){var t=Object(a.w)(o);d(!!t),e=n}});n=setInterval(l,500),c=setTimeout((function(){var e,n;e=function(){window.LiveChatWidget.on("ready",(function(){i(!0),"true"===(null==g?void 0:g.toLowerCase())&&window.LC_API.open_chat_window()}))},(n=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(n),e&&e()}),2e3)}return function(){clearInterval(n),clearTimeout(c)}}),[]),c.a.useEffect((function(){if(Object(a.G)()){var e=null,t=Object(a.z)();if(u.current)try{e=u.current.init({licenseId:a.J,clientId:a.I})}catch(i){console.error(i)}n&&window.LiveChatWidget.on("ready",(function(){if(r){var n=Object(a.w)(t),i=JSON.parse(n),c=i.loginid,o=i.email,l=i.landing_company_shortcode,d=i.currency,u=i.residence,g=i.first_name,I=i.last_name,w={loginid:null!=c?c:"",landing_company_shortcode:null!=l?l:"",currency:null!=d?d:"",residence:null!=u?u:"",email:null!=o?o:""};window.LiveChatWidget.call("set_session_variables",w),o&&window.LiveChatWidget.call("set_customer_email",o),g&&I&&window.LiveChatWidget.call("set_customer_name",g+" "+I)}else{if(window.LiveChatWidget.get("chat_data")){var s,M,j=null!==(s=window.LiveChatWidget.get("chat_data").chatId)&&void 0!==s?s:"";null===(M=e)||void 0===M||M.deactivateChat({chatId:j}).catch((function(e){console.error(e)}))}window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")}var L=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==L?void 0:L.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[r,u]),[n,o]}},omHr:function(e,n,t){"use strict";t.r(n),t.d(n,"DidntFindYourAnswerBanner",(function(){return j}));var i=t("q1tI"),c=t.n(i),a=t("vOnD"),o=t("O4Du"),l=t("wYtL"),r=t("Z/CU"),d=t("g2Kc"),u=t("ctXc"),g=t("aC/h");var I=a.c.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),w=Object(a.c)(d.b).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;justify-content:center;align-items:center;@media ","{flex-wrap:wrap;justify-content:center;align-items:center;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],g.a.mobileL,l.a),s=a.c.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],g.a.tabletL),M=Object(a.c)(o.w).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],g.a.mobileL),j=function(){var e=Object(u.a)(),n=e[0],t=e[1];return c.a.createElement(I,null,c.a.createElement(w,null,c.a.createElement(s,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWM4cTZ6dW9sYSIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9Ijg3Ljk3MiUiIHkyPSIxMi4wMjglIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNDQ0RiIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY2NDQ0IiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYWM4cTZ6dW9sYSkiCiAgICAgICAgICAgIGQ9Ik02MiAyMWMxLjEwNSAwIDIgLjg5NSAyIDJ2MzQuNzczYzAgLjQ5LS4xOC45NjMtLjUwNSAxLjMyOS0uNzM0LjgyNS0xLjk5OC45LTIuODI0LjE2Nkw1My42MiA1M0gxOGMtMS4xMDUgMC0yLS44OTUtMi0yVjQwaDJ2MTFoMzUuNjJjLjQ5IDAgLjk2Mi4xOCAxLjMyOS41MDVMNjIgNTcuNzczVjIzSDUydi0yaDEwek00NiA0YzEuMTA1IDAgMiAuODk1IDIgMnYyOGMwIDEuMTA1LS44OTUgMi0yIDJIMTAuMzhMMy4zMyA0Mi4yNjhjLS44MjYuNzM0LTIuMDkuNjYtMi44MjQtLjE2NkMuMTggNDEuNzM2IDAgNDEuMjYzIDAgNDAuNzczVjZjMC0xLjEwNS44OTUtMiAyLTJ6bTAgMkgydjM0Ljc3M2w3LjA1MS02LjI2OGMuMzY3LS4zMjUuODQtLjUwNSAxLjMzLS41MDVINDZWNnpNMzAgMjJjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDMwIDI0SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDIyaDIxem05LThjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDM5IDE2SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDE0aDMweiIgLz4KICAgIDwvZz4KPC9zdmc+",alt:"contact us icon"}),c.a.createElement(M,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},Object(r.g)("Didn’t find your answer? We can help.")),n&&c.a.createElement(l.a,{secondary:"true",onClick:function(){t.open_chat_window()},weight:"bold",color:"black"},Object(r.g)("Chat"))))};n.default=j}}]);
//# sourceMappingURL=98-1a1d917d85d37c340be2.js.map