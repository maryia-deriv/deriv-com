(window.webpackJsonp=window.webpackJsonp||[]).push([[44,98],{"3OHM":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"d",(function(){return s}));var a=n("vOnD"),r=n("O4Du"),i=n("Z/CU"),c=n("aC/h"),o=a.c.div.withConfig({displayName:"_help-centre-style__ArticleWrapper",componentId:"xgb5w4-0"})(["max-width:71.2rem;display:flex;flex-direction:column;justify-content:flex-start;height:100%;font-size:var(--text-size-s);line-height:1.5;margin-left:12.6rem;margin-top:1.6rem;@media ","{margin-left:",";}@media ","{margin-left:0;}"],c.a.laptopL,(function(e){var t=e.margin_left;return null!=t?t:"12.6rem"}),c.a.tabletL),l=Object(a.c)(i.d).withConfig({displayName:"_help-centre-style__ExternalLink",componentId:"xgb5w4-1"})(["text-decoration:none;font-size:var(--text-size-s);font-weight:bold;color:var(--color-red);:hover{text-decoration:underline;}"]),d=Object(a.c)(r.k).withConfig({displayName:"_help-centre-style__StyledHeader",componentId:"xgb5w4-2"})(["font-size:2.4rem;margin-bottom:2.4rem;"]),s=Object(a.c)(r.w).withConfig({displayName:"_help-centre-style__StyledText",componentId:"xgb5w4-3"})(["margin-top:1.7rem;"])},"J/Db":function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),c=n("omHr"),o=n("8k0H"),l=n("Z/CU"),d=n("O4Du"),s=n("g2Kc"),u=n("aC/h"),m=i.c.div.withConfig({displayName:"_article__Content",componentId:"sc-17ehp3-0"})(["display:flex;flex-direction:row;justify-content:center;width:100%;"]),g=i.c.div.withConfig({displayName:"_article__TabWrapper",componentId:"sc-17ehp3-1"})(["width:100%;margin-top:8rem;@media ","{margin-top:0;}"],u.a.tabletL),f=i.c.div.withConfig({displayName:"_article__ContactContainer",componentId:"sc-17ehp3-2"})(["margin-top:8rem;"]),h=function(e){var t=e.children,n=e.header,a=e.title,i=e.description;return r.a.createElement(o.b,null,r.a.createElement(s.h,{title:a,description:i}),r.a.createElement(s.b,{align:"left",justify:"flex-start",direction:"column"},r.a.createElement(d.u,{to:"/help-centre/",has_arrow:"true",color:"black",size:"var(--text-size-s)",weight:"bold",arrow_margin:"1rem",margin:"4rem 0 0"},Object(l.g)("Back")),r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement(d.s,{line_height:"1.5",opacity:"0.72",size:"var(--text-size-s)",tab_header:n},t)))),r.a.createElement(f,null,r.a.createElement(c.DidntFindYourAnswerBanner,null)))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n("q1tI"),r=n.n(a),i=n("txul"),c=function(){var e=r.a.useState(!1),t=e[0],a=e[1],c=Object(i.G)()&&window.LC_API||{},o=r.a.useState(!1),l=o[0],d=o[1],s=r.a.useRef(null),u=new URLSearchParams(Object(i.G)()&&window.location.search||"").get("is_livechat_open");return r.a.useEffect((function(){var e,t=null,r=null;if(Object(i.G)()){var c=Object(i.z)();try{n.e(78).then(n.bind(null,"49Cj")).then((function(e){s.current=e}))}catch(l){console.error(l)}var o=(e=document.cookie,function(){var t=document.cookie;if(t!=e){var n=Object(i.w)(c);d(!!n),e=t}});t=setInterval(o,500),r=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){a(!0),"true"===(null==u?void 0:u.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(t),clearTimeout(r)}}),[]),r.a.useEffect((function(){if(Object(i.G)()){var e=null,n=Object(i.z)();if(s.current)try{e=s.current.init({licenseId:i.J,clientId:i.I})}catch(a){console.error(a)}t&&window.LiveChatWidget.on("ready",(function(){if(l){var t=Object(i.w)(n),a=JSON.parse(t),r=a.loginid,c=a.email,o=a.landing_company_shortcode,d=a.currency,s=a.residence,u=a.first_name,m=a.last_name,g={loginid:null!=r?r:"",landing_company_shortcode:null!=o?o:"",currency:null!=d?d:"",residence:null!=s?s:"",email:null!=c?c:""};window.LiveChatWidget.call("set_session_variables",g),c&&window.LiveChatWidget.call("set_customer_email",c),u&&m&&window.LiveChatWidget.call("set_customer_name",u+" "+m)}else{if(window.LiveChatWidget.get("chat_data")){var f,h,w=null!==(f=window.LiveChatWidget.get("chat_data").chatId)&&void 0!==f?f:"";null===(h=e)||void 0===h||h.deactivateChat({chatId:w}).catch((function(e){console.error(e)}))}window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")}var I=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==I?void 0:I.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[l,s]),[t,c]}},omHr:function(e,t,n){"use strict";n.r(t),n.d(t,"DidntFindYourAnswerBanner",(function(){return w}));var a=n("q1tI"),r=n.n(a),i=n("vOnD"),c=n("O4Du"),o=n("wYtL"),l=n("Z/CU"),d=n("g2Kc"),s=n("ctXc"),u=n("aC/h");var m=i.c.section.withConfig({displayName:"_didnt-find-answer__DFYAWrapper",componentId:"sc-1ba1494-0"})(["background-color:var(--color-black-3);"]),g=Object(i.c)(d.b).withConfig({displayName:"_didnt-find-answer__DFYASection",componentId:"sc-1ba1494-1"})(["padding:3.5rem 0;justify-content:center;align-items:center;@media ","{flex-wrap:wrap;justify-content:center;align-items:center;","{font-size:14px;padding:10px 16px;}}& > *{width:auto;}"],u.a.mobileL,o.a),f=i.c.img.withConfig({displayName:"_didnt-find-answer__StyledIcon",componentId:"sc-1ba1494-2"})(["@media ","{width:48px;height:48px;margin-right:1.6rem;}"],u.a.tabletL),h=Object(i.c)(c.w).withConfig({displayName:"_didnt-find-answer__MiddleText",componentId:"sc-1ba1494-3"})(["@media ","{margin:1.6rem 0;text-align:center;font-weight:bold;}"],u.a.mobileL),w=function(){var e=Object(s.a)(),t=e[0],n=e[1];return r.a.createElement(m,null,r.a.createElement(g,null,r.a.createElement(f,{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2NCIgaGVpZ2h0PSI2NCIgdmlld0JveD0iMCAwIDY0IDY0Ij4KICAgIDxkZWZzPgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0iYWM4cTZ6dW9sYSIgeDE9IjAlIiB4Mj0iMTAwJSIgeTE9Ijg3Ljk3MiUiIHkyPSIxMi4wMjglIj4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI0ZGNDQ0RiIgLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxMDAlIiBzdG9wLWNvbG9yPSIjRkY2NDQ0IiAvPgogICAgICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGZpbGw9InVybCgjYWM4cTZ6dW9sYSkiCiAgICAgICAgICAgIGQ9Ik02MiAyMWMxLjEwNSAwIDIgLjg5NSAyIDJ2MzQuNzczYzAgLjQ5LS4xOC45NjMtLjUwNSAxLjMyOS0uNzM0LjgyNS0xLjk5OC45LTIuODI0LjE2Nkw1My42MiA1M0gxOGMtMS4xMDUgMC0yLS44OTUtMi0yVjQwaDJ2MTFoMzUuNjJjLjQ5IDAgLjk2Mi4xOCAxLjMyOS41MDVMNjIgNTcuNzczVjIzSDUydi0yaDEwek00NiA0YzEuMTA1IDAgMiAuODk1IDIgMnYyOGMwIDEuMTA1LS44OTUgMi0yIDJIMTAuMzhMMy4zMyA0Mi4yNjhjLS44MjYuNzM0LTIuMDkuNjYtMi44MjQtLjE2NkMuMTggNDEuNzM2IDAgNDEuMjYzIDAgNDAuNzczVjZjMC0xLjEwNS44OTUtMiAyLTJ6bTAgMkgydjM0Ljc3M2w3LjA1MS02LjI2OGMuMzY3LS4zMjUuODQtLjUwNSAxLjMzLS41MDVINDZWNnpNMzAgMjJjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDMwIDI0SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDIyaDIxem05LThjLjU1MiAwIDEgLjQ0OCAxIDEgMCAuNTEzLS4zODYuOTM2LS44ODMuOTkzTDM5IDE2SDljLS41NTIgMC0xLS40NDgtMS0xIDAtLjUxMy4zODYtLjkzNi44ODMtLjk5M0w5IDE0aDMweiIgLz4KICAgIDwvZz4KPC9zdmc+",alt:"contact us icon"}),r.a.createElement(h,{size:"var(--text-size-l)",color:"white",m:"0 2.4rem"},Object(l.g)("Didn’t find your answer? We can help.")),t&&r.a.createElement(o.a,{secondary:"true",onClick:function(){n.open_chat_window()},weight:"bold",color:"black"},Object(l.g)("Chat"))))};t.default=w},qVFl:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),i=n("J/Db"),c=n("3OHM"),o=n("txul"),l=n("O4Du"),d=n("Z/CU"),s=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("What is DMT5?")),r.a.createElement(l.w,null,Object(d.g)("DMT5 is the MT5 platform on Deriv. It is a multi-asset online platform designed to give new and experienced traders access to a wide range of financial markets.")))},u=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("What are the major differences between DTrader and DMT5?")),r.a.createElement(l.w,null,Object(d.g)("DTrader allows you to trade more than 50 assets in the form of digitals, multiplier, and lookback options.")),r.a.createElement(c.d,null,Object(d.g)("DMT5 is a multi-asset trading platform that you can use to trade spot forex and contracts for difference (CFDs) with leverage.")))},m=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?")),r.a.createElement(l.w,null,Object(d.g)("The DMT5 Standard account offers new and experienced traders high leverage and variable spreads for maximum flexibility.")),r.a.createElement(c.d,null,Object(d.g)("The DMT5 Advanced account is a 100% A Book account where your trades are passed straight through to the market, giving you direct access to forex liquidity providers.")),r.a.createElement(c.d,null,Object(d.g)("The DMT5 Synthetic Indices account allows you to trade contracts for difference (CFDs) on synthetic indices that mimic real-world movements. It is available for trading 24/7 and audited for fairness by an independent third party.")))},g=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("How can I deposit funds into my DMT5 real money account?")),r.a.createElement(l.w,null,r.a.createElement(d.c,{translate_text:"To deposit funds into your MT5 account on Deriv, you’ll need to use the funds in your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[r.a.createElement("strong",{key:0}),r.a.createElement(c.b,{href:o.l+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),r.a.createElement(c.d,null,Object(d.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},f=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("How can I withdraw funds from my DMT5 real money account?")),r.a.createElement(l.w,{mb:"1.5rem"},r.a.createElement(d.c,{translate_text:"To withdraw funds from your MT5 account on Deriv, you’ll need to transfer the funds to your Deriv account. Go to <0>Cashier ></0> <1>Transfer between accounts</1> and follow the instructions on the screen.",components:[r.a.createElement("strong",{key:0}),r.a.createElement(c.b,{href:o.l+"/cashier/account-transfer",target:"_blank",rel:"noopener noreferrer",key:1})]})),r.a.createElement(l.w,null,Object(d.g)("Transfers are instant. Once you’ve completed all the steps, your DMT5 account balance will be updated immediately.")))},h=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("Why are my DMT5 login details different from my Deriv login details?")),r.a.createElement(l.w,null,Object(d.g)("MT5 on Deriv is a standalone trading platform that isn’t hosted on our website. Your DMT5 login details give you access to the MT5 platform while your Deriv login details give you access to the platforms hosted on our website, such as DTrader and DBot.")))},w=function(){return r.a.createElement(c.a,null,r.a.createElement(c.c,{as:"h4"},Object(d.g)("How can I reset my DMT5 account password?")),r.a.createElement(l.w,null,r.a.createElement(d.c,{translate_text:"Please go to the <0>DMT5 dashboard</0> and click on the <1>Password</1> button of that DMT5 account.",components:[r.a.createElement(c.b,{href:o.l+"/mt5",target:"_blank",rel:"noopener noreferrer",key:1}),r.a.createElement("strong",{key:0})]})))};t.default=Object(d.e)()((function(){return r.a.createElement("div",null,r.a.createElement(i.a,{header:"DMT5",title:Object(d.g)("Help centre | Frequently asked questions | DMT5 | Deriv"),description:Object(d.g)("Frequently asked questions - DMT5")},r.a.createElement(s,{text:Object(d.g)("What is DMT5?"),label:"what-is-dmt5"}),r.a.createElement(u,{text:Object(d.g)("What are the major differences between DTrader and DMT5?"),label:"differences-of-dtrader-and-dmt5"}),r.a.createElement(m,{text:Object(d.g)("What are the differences between the DMT5 Synthetic Indices, Financial and Financial STP accounts?"),label:"differences-of-dmt5-accounts"}),r.a.createElement(f,{text:Object(d.g)("How can I withdraw funds from my DMT5 real money account?"),label:"withdraw-funds-from-DMT5"}),r.a.createElement(h,{text:Object(d.g)("Why are my DMT5 login details different from my Deriv login details?")}),r.a.createElement(w,{text:Object(d.g)("How can I reset my DMT5 account password?"),label:"reset-dmt5-password"}),r.a.createElement(g,{text:Object(d.g)("How can I deposit funds into my DMT5 real money account?"),label:"deposit-to-dmt5"})))}))}}]);
//# sourceMappingURL=component---src-pages-help-centre-dmt-5-js-907f9fd8628beda9ac09.js.map