(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{dkMi:function(e,t,n){"use strict";n.r(t);n("q1tI");var r=n("rIun"),o=n("9Dj+"),c=n("2A+t"),i=n("rKqW"),a=n("Xd5l"),u=n("xm9o"),l=n("FZdU"),s=n("vh5r"),p=n("wx14"),f=n("zLVn"),d=n("7ljp"),m=n("qKvR"),y={_frontmatter:{}};function b(e){var t=e.components,n=Object(f.default)(e,["components"]);return Object(d.b)("wrapper",Object(p.default)({},y,n,{components:t,mdxType:"MDXLayout"}),Object(d.b)("h1",null,"Thank you!"),Object(d.b)("p",null,"Have a great day! ❤️"))}b.isMDXComponent=!0;var h=function(e){var t=e.offset,n=e.factor,r=void 0===n?1:n;return Object(c.c)("div",null,Object(c.c)(i.a,{speed:.2,offset:t,factor:r},Object(c.c)(s.a,null,Object(c.c)(l.a,{icon:"king",hiddenMobile:!0,width:64,stroke:!0,color:"icon_orange",left:"60%",top:"20%"}),Object(c.c)(l.a,{icon:"triangle",width:48,stroke:!0,color:"icon_blue",left:"60%",top:"70%"}),Object(c.c)(l.a,{icon:"box",width:6,color:"icon_darker",left:"60%",top:"15%"}),Object(c.c)(l.a,{icon:"box",hiddenMobile:!0,width:64,color:"icon_purple",left:"15%",top:"65%"})),Object(c.c)(s.b,null,Object(c.c)(l.a,{icon:"arrowUp",hiddenMobile:!0,width:16,color:"icon_blue",left:"80%",top:"10%"}),Object(c.c)(l.a,{icon:"king",width:24,stroke:!0,color:"icon_brightest",left:"90%",top:"50%"}),Object(c.c)(l.a,{icon:"queen",width:16,stroke:!0,color:"icon_darker",left:"70%",top:"90%"}),Object(c.c)(l.a,{icon:"triangle",width:16,stroke:!0,color:"icon_darkest",left:"30%",top:"65%"}),Object(c.c)(l.a,{icon:"cross",width:16,stroke:!0,color:"icon_pink",left:"20%",top:"10%"}),Object(c.c)(l.a,{icon:"queen",width:12,stroke:!0,color:"icon_darkest",left:"75%",top:"10%"}),Object(c.c)(l.a,{icon:"upDown",hiddenMobile:!0,width:8,color:"icon_darkest",left:"45%",top:"10%"})),Object(c.c)(l.a,{icon:"queen",hiddenMobile:!0,width:24,color:"icon_darker",left:"5%",top:"70%"}),Object(c.c)(l.a,{icon:"queen",width:6,stroke:!0,color:"icon_darkest",left:"4%",top:"20%"}),Object(c.c)(l.a,{icon:"queen",width:12,stroke:!0,color:"icon_darkest",left:"50%",top:"60%"}),Object(c.c)(l.a,{icon:"upDown",width:12,stroke:!0,color:"icon_darkest",left:"60%",top:"50%"}),Object(c.c)(l.a,{icon:"upDown",width:8,color:"icon_darkest",left:"95%",top:"90%"}),Object(c.c)(l.a,{icon:"upDown",hiddenMobile:!0,width:24,color:"icon_darker",left:"40%",top:"80%"}),Object(c.c)(l.a,{icon:"king",width:8,stroke:!0,color:"icon_darker",left:"25%",top:"5%"}),Object(c.c)(l.a,{icon:"circle",width:64,color:"icon_green",left:"32%",top:"4%"}),Object(c.c)(l.a,{icon:"box",width:6,color:"icon_darkest",left:"10%",top:"10%"}),Object(c.c)(l.a,{icon:"box",width:12,color:"icon_darkest",left:"40%",top:"30%"}),Object(c.c)(l.a,{icon:"hexa",width:16,stroke:!0,color:"icon_darker",left:"10%",top:"50%"}),Object(c.c)(l.a,{icon:"hexa",width:8,stroke:!0,color:"icon_darker",left:"80%",top:"70%"})),Object(c.c)(u.a,{sx:{variant:"texts.bigger"},speed:.4,offset:t,factor:r},Object(c.c)(a.a,null,Object(c.c)(b,null))))},v=n("eWwy"),w="https://js.stripe.com/v3",j=/^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,O="loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used",g=null,k=function(e){return null!==g?g:g=new Promise((function(t,n){if("undefined"!=typeof window)if(window.Stripe&&e&&console.warn(O),window.Stripe)t(window.Stripe);else try{var r=function(){for(var e=document.querySelectorAll('script[src^="'.concat(w,'"]')),t=0;t<e.length;t++){var n=e[t];if(j.test(n.src))return n}return null}();r&&e?console.warn(O):r||(r=function(e){var t=e&&!e.advancedFraudSignals?"?advancedFraudSignals=false":"",n=document.createElement("script");n.src="".concat(w).concat(t);var r=document.head||document.body;if(!r)throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");return r.appendChild(n),n}(e)),r.addEventListener("load",(function(){window.Stripe?t(window.Stripe):n(new Error("Stripe.js not available"))})),r.addEventListener("error",(function(){n(new Error("Failed to load Stripe.js"))}))}catch(o){return void n(o)}else t(null)}))},E=function(e,t,n){if(null===e)return null;var r=e.apply(void 0,t);return function(e,t){e&&e._registerWrapper&&e._registerWrapper({name:"stripe-js",version:"1.14.0",startTime:t})}(r,n),r},_=Promise.resolve().then((function(){return k(null)})),S=!1;_.catch((function(e){S||console.warn(e)}));var x=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];S=!0;var r=Date.now();return _.then((function(e){return E(e,t,r)}))}("pk_test_51IpY1nBH875LZID8M0nacoAqaWhAVv28QSmrEBjqeFCg96jEAdvSNuzvXiqy5OKTOiSuY5VBPSPsqFhLUs9VB79d000E0uQxjv");t.default=function(){return Object(m.d)(v.Elements,{stripe:x},Object(m.d)(o.a,null,Object(m.d)(r.Parallax,{pages:1},Object(m.d)(h,{offset:0,factor:1}))))}},eWwy:function(e,t,n){!function(e,t){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,c=void 0;try{for(var i,a=e[Symbol.iterator]();!(r=(i=a.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(u){o=!0,c=u}finally{try{r||null==a.return||a.return()}finally{if(o)throw c}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(){}function a(){}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t,a.resetWarningCache=i;var u=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){e.exports=function(){function e(e,t,n,r,o,c){if("SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"!==c){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:i};return n.PropTypes=n,n}()})),l=function(e){return null!==e&&"object"===n(e)},s=function e(t,n){if(!l(t)||!l(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o="[object Object]"===Object.prototype.toString.call(t);if(o!==("[object Object]"===Object.prototype.toString.call(n)))return!1;if(!o&&!r)return!1;var c=Object.keys(t),i=Object.keys(n);if(c.length!==i.length)return!1;for(var a={},u=0;u<c.length;u+=1)a[c[u]]=!0;for(var s=0;s<i.length;s+=1)a[i[s]]=!0;var p=Object.keys(a);if(p.length!==c.length)return!1;var f=t,d=n;return p.every((function(t){return e(f[t],d[t])}))},p=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},f=function(e){if(null===e||l(t=e)&&"function"==typeof t.elements&&"function"==typeof t.createToken&&"function"==typeof t.createPaymentMethod&&"function"==typeof t.confirmCardPayment)return e;var t;throw new Error("Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.")},d=function(e){if(function(e){return l(e)&&"function"==typeof e.then}(e))return{tag:"async",stripePromise:Promise.resolve(e).then(f)};var t=f(e);return null===t?{tag:"empty"}:{tag:"sync",stripe:t}},m=t.createContext(null);m.displayName="ElementsContext";var y=function(e){return function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e}(t.useContext(m),e)},b=function(e){return(0,e.children)(y("mounts <ElementsConsumer>"))};b.propTypes={children:u.func.isRequired};var h=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),function(){n.current&&n.current.apply(n,arguments)}},v=function(e){return l(e)?(e.paymentRequest,r(e,["paymentRequest"])):{}},w=function(){},j=function(e,n){var r,o="".concat((r=e).charAt(0).toUpperCase()+r.slice(1),"Element"),c=n?function(e){y("mounts <".concat(o,">"));var n=e.id,r=e.className;return t.createElement("div",{id:n,className:r})}:function(n){var r=n.id,c=n.className,i=n.options,a=void 0===i?{}:i,u=n.onBlur,l=void 0===u?w:u,p=n.onFocus,f=void 0===p?w:p,d=n.onReady,m=void 0===d?w:d,b=n.onChange,j=void 0===b?w:b,O=n.onEscape,g=void 0===O?w:O,k=n.onClick,E=void 0===k?w:k,_=y("mounts <".concat(o,">")).elements,S=t.useRef(null),x=t.useRef(null),C=h(m),q=h(l),P=h(f),R=h(E),A=h(j),B=h(g);t.useLayoutEffect((function(){if(null==S.current&&_&&null!=x.current){var t=_.create(e,a);S.current=t,t.mount(x.current),t.on("ready",(function(){return C(t)})),t.on("change",A),t.on("blur",q),t.on("focus",P),t.on("escape",B),t.on("click",R)}}));var T=t.useRef(a);return t.useEffect((function(){T.current&&T.current.paymentRequest!==a.paymentRequest&&console.warn("Unsupported prop change: options.paymentRequest is not a customizable property.");var e=v(a);0===Object.keys(e).length||s(e,v(T.current))||S.current&&(S.current.update(e),T.current=a)}),[a]),t.useLayoutEffect((function(){return function(){S.current&&S.current.destroy()}}),[]),t.createElement("div",{id:r,className:c,ref:x})};return c.propTypes={id:u.string,className:u.string,onChange:u.func,onBlur:u.func,onFocus:u.func,onReady:u.func,onClick:u.func,options:u.object},c.displayName=o,c.__elementType=e,c},O="undefined"==typeof window,g=j("auBankAccount",O),k=j("card",O),E=j("cardNumber",O),_=j("cardExpiry",O),S=j("cardCvc",O),x=j("fpxBank",O),C=j("iban",O),q=j("idealBank",O),P=j("p24Bank",O),R=j("epsBank",O),A=j("paymentRequestButton",O),B=j("afterpayClearpayMessage",O);e.AfterpayClearpayMessageElement=B,e.AuBankAccountElement=g,e.CardCvcElement=S,e.CardElement=k,e.CardExpiryElement=_,e.CardNumberElement=E,e.Elements=function(e){var n=e.stripe,r=e.options,c=e.children,i=t.useRef(!1),a=t.useRef(!0),u=t.useMemo((function(){return d(n)}),[n]),l=o(t.useState((function(){return{stripe:null,elements:null}})),2),f=l[0],y=l[1],b=p(n),h=p(r);return null!==b&&(b!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it."),s(r,h)||console.warn("Unsupported prop change on Elements: You cannot change the `options` prop after setting the `stripe` prop.")),i.current||("sync"===u.tag&&(i.current=!0,y({stripe:u.stripe,elements:u.stripe.elements(r)})),"async"===u.tag&&(i.current=!0,u.stripePromise.then((function(e){e&&a.current&&y({stripe:e,elements:e.elements(r)})})))),t.useEffect((function(){return function(){a.current=!1}}),[]),t.useEffect((function(){var e=f.stripe;e&&e._registerWrapper&&e._registerWrapper({name:"react-stripe-js",version:"1.4.0"})}),[f.stripe]),t.createElement(m.Provider,{value:f},c)},e.ElementsConsumer=b,e.EpsBankElement=R,e.FpxBankElement=x,e.IbanElement=C,e.IdealBankElement=q,e.P24BankElement=P,e.PaymentRequestButtonElement=A,e.useElements=function(){return y("calls useElements()").elements},e.useStripe=function(){return y("calls useStripe()").stripe},Object.defineProperty(e,"__esModule",{value:!0})}(t,n("q1tI"))}}]);
//# sourceMappingURL=component---src-templates-success-tsx-0a47ea0b08b4d3a5688e.js.map