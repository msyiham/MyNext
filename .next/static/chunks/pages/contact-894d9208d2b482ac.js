(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[335],{2711:function(t,n,a){t.exports=function(){"use strict";var t="undefined"!=typeof window?window:void 0!==a.g?a.g:"undefined"!=typeof self?self:{},n="Expected a function",i=NaN,o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,d=parseInt,l="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,f=l||u||Function("return this")(),j=Object.prototype.toString,N=Math.max,E=Math.min,b=function(){return f.Date.now()};function g(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function w(t){if("number"==typeof t)return t;if("symbol"==typeof(n=t)||n&&"object"==typeof n&&"[object Symbol]"==j.call(n))return i;if(g(t)){var n,a="function"==typeof t.valueOf?t.valueOf():t;t=g(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var l=s.test(t);return l||c.test(t)?d(t.slice(2),l?2:8):r.test(t)?i:+t}var y=function(t,a,i){var o=!0,r=!0;if("function"!=typeof t)throw TypeError(n);return g(i)&&(o="leading"in i?!!i.leading:o,r="trailing"in i?!!i.trailing:r),function(t,a,i){var o,r,s,c,d,l,u=0,f=!1,j=!1,_=!0;if("function"!=typeof t)throw TypeError(n);function y(n){var a=o,i=r;return o=r=void 0,u=n,c=t.apply(i,a)}function h(t){var n=t-l;return void 0===l||n>=a||n<0||j&&t-u>=s}function k(){var t,n=b();if(h(n))return x(n);d=setTimeout(k,(t=a-(n-l),j?E(t,s-(n-u)):t))}function x(t){return d=void 0,_&&o?y(t):(o=r=void 0,c)}function O(){var t,n=b(),i=h(n);if(o=arguments,r=this,l=n,i){if(void 0===d)return u=t=l,d=setTimeout(k,a),f?y(t):c;if(j)return d=setTimeout(k,a),y(l)}return void 0===d&&(d=setTimeout(k,a)),c}return a=w(a)||0,g(i)&&(f=!!i.leading,s=(j="maxWait"in i)?N(w(i.maxWait)||0,a):s,_="trailing"in i?!!i.trailing:_),O.cancel=function(){void 0!==d&&clearTimeout(d),u=0,o=l=r=d=void 0},O.flush=function(){return void 0===d?c:x(b())},O}(t,a,{leading:o,maxWait:a,trailing:r})},_=NaN,q=/^\s+|\s+$/g,T=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,C=/^0o[0-7]+$/i,M=parseInt,z="object"==typeof t&&t&&t.Object===Object&&t,A="object"==typeof self&&self&&self.Object===Object&&self,I=z||A||Function("return this")(),F=Object.prototype.toString,J=Math.max,K=Math.min,S=function(){return I.Date.now()};function D(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function H(t){if("number"==typeof t)return t;if("symbol"==typeof(n=t)||n&&"object"==typeof n&&"[object Symbol]"==F.call(n))return _;if(D(t)){var n,a="function"==typeof t.valueOf?t.valueOf():t;t=D(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(q,"");var i=L.test(t);return i||C.test(t)?M(t.slice(2),i?2:8):T.test(t)?_:+t}var $=function(t,n,a){var i,o,r,s,c,d,l=0,u=!1,f=!1,j=!0;if("function"!=typeof t)throw TypeError("Expected a function");function m(n){var a=i,r=o;return i=o=void 0,l=n,s=t.apply(r,a)}function p(t){var a=t-d;return void 0===d||a>=n||a<0||f&&t-l>=r}function b(){var t,a=S();if(p(a))return v(a);c=setTimeout(b,(t=n-(a-d),f?K(t,r-(a-l)):t))}function v(t){return c=void 0,j&&i?m(t):(i=o=void 0,s)}function g(){var t,a=S(),r=p(a);if(i=arguments,o=this,d=a,r){if(void 0===c)return l=t=d,c=setTimeout(b,n),u?m(t):s;if(f)return c=setTimeout(b,n),m(d)}return void 0===c&&(c=setTimeout(b,n)),s}return n=H(n)||0,D(a)&&(u=!!a.leading,r=(f="maxWait"in a)?J(H(a.maxWait)||0,n):r,j="trailing"in a?!!a.trailing:j),g.cancel=function(){void 0!==c&&clearTimeout(c),l=0,i=d=o=c=void 0},g.flush=function(){return void 0===c?s:v(S())},g},W=function(){};function P(t){t&&t.forEach(function(t){var n=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes);if(function e(t){var n=void 0,a=void 0;for(n=0;n<t.length;n+=1)if((a=t[n]).dataset&&a.dataset.aos||a.children&&e(a.children))return!0;return!1}(n.concat(a)))return W()})}function Y(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var G={isSupported:function(){return!!Y()},ready:function(t,n){var a=window.document,i=new(Y())(P);W=n,i.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},B=function(t,n){if(!(t instanceof n))throw TypeError("Cannot call a class as a function")},U=function(){function e(t,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),Q=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(t[i]=a[i])}return t},et=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,en=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,ea=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,ei=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function R(){return navigator.userAgent||navigator.vendor||window.opera||""}var eo=new(function(){function e(){B(this,e)}return U(e,[{key:"phone",value:function(){var t=R();return!(!et.test(t)&&!en.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=R();return!(!ea.test(t)&&!ei.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),e}()),V=function(t,n){var a=void 0;return eo.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:n}):a=new CustomEvent(t,{detail:n}),document.dispatchEvent(a)},X=function(t){return t.forEach(function(t,n){var a,i,o,r,s,c;return a=window.pageYOffset,i=t.options,o=t.position,r=t.node,t.data,s=function(){var n;t.animated&&((n=i.animatedClassNames)&&n.forEach(function(t){return r.classList.remove(t)}),V("aos:out",r),t.options.id&&V("aos:in:"+t.options.id,r),t.animated=!1)},void(i.mirror&&a>=o.out&&!i.once?s():a>=o.in?t.animated||((c=i.animatedClassNames)&&c.forEach(function(t){return r.classList.add(t)}),V("aos:in",r),t.options.id&&V("aos:in:"+t.options.id,r),t.animated=!0):t.animated&&!i.once&&s())})},Z=function(t){for(var n=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)n+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),a+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:a,left:n}},ee=function(t,n,a){var i=t.getAttribute("data-aos-"+n);if(void 0!==i){if("true"===i)return!0;if("false"===i)return!1}return i||a},ne=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(t){return{node:t}})},er=[],es=!1,ec={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},re=function(){return document.all&&!window.atob},ce=function(){var t,n;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(es=!0),es&&(t=er,n=ec,t.forEach(function(t,a){var i,o,r,s,c,d=ee(t.node,"mirror",n.mirror),l=ee(t.node,"once",n.once),u=ee(t.node,"id"),f=n.useClassNames&&t.node.getAttribute("data-aos"),j=[n.animatedClassName].concat(f?f.split(" "):[]).filter(function(t){return"string"==typeof t});n.initClassName&&t.node.classList.add(n.initClassName),t.position={in:function(t,n,a){var i=window.innerHeight,o=ee(t,"anchor"),r=ee(t,"anchor-placement"),s=Number(ee(t,"offset",r?0:n)),c=r||a,d=t;o&&document.querySelectorAll(o)&&(d=document.querySelectorAll(o)[0]);var l=Z(d).top-i;switch(c){case"top-bottom":break;case"center-bottom":l+=d.offsetHeight/2;break;case"bottom-bottom":l+=d.offsetHeight;break;case"top-center":l+=i/2;break;case"center-center":l+=i/2+d.offsetHeight/2;break;case"bottom-center":l+=i/2+d.offsetHeight;break;case"top-top":l+=i;break;case"bottom-top":l+=i+d.offsetHeight;break;case"center-top":l+=i+d.offsetHeight/2}return l+s}(t.node,n.offset,n.anchorPlacement),out:d&&(i=t.node,o=n.offset,window.innerHeight,r=ee(i,"anchor"),s=ee(i,"offset",o),c=i,r&&document.querySelectorAll(r)&&(c=document.querySelectorAll(r)[0]),Z(c).top+c.offsetHeight-s)},t.options={once:l,mirror:d,animatedClassNames:j,id:u}}),X(er=t),window.addEventListener("scroll",y(function(){X(er,ec.once)},ec.throttleDelay)))},se=function(){if(er=ne(),de(ec.disable)||re())return ue();ce()},ue=function(){er.forEach(function(t,n){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),ec.initClassName&&t.node.classList.remove(ec.initClassName),ec.animatedClassName&&t.node.classList.remove(ec.animatedClassName)})},de=function(t){return!0===t||"mobile"===t&&eo.mobile()||"phone"===t&&eo.phone()||"tablet"===t&&eo.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return ec=Q(ec,t),er=ne(),ec.disableMutationObserver||G.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),ec.disableMutationObserver=!0),ec.disableMutationObserver||G.ready("[data-aos]",se),de(ec.disable)||re()?ue():(document.querySelector("body").setAttribute("data-aos-easing",ec.easing),document.querySelector("body").setAttribute("data-aos-duration",ec.duration),document.querySelector("body").setAttribute("data-aos-delay",ec.delay),-1===["DOMContentLoaded","load"].indexOf(ec.startEvent)?document.addEventListener(ec.startEvent,function(){ce(!0)}):window.addEventListener("load",function(){ce(!0)}),"DOMContentLoaded"===ec.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&ce(!0),window.addEventListener("resize",$(ce,ec.debounceDelay,!0)),window.addEventListener("orientationchange",$(ce,ec.debounceDelay,!0)),er)},refresh:ce,refreshHard:se}}()},3328:function(t,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contact",function(){return a(3799)}])},3799:function(t,n,a){"use strict";a.r(n),a.d(n,{default:function(){return Home}});var i=a(2729),o=a(5893),r=a(7294),s=a(9008),c=a.n(s),d=a(1113),l=a(7480),u=a(6702);let f={_origin:"https://api.emailjs.com"},validateParams=(t,n,a)=>{if(!t)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!n)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!a)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};let EmailJSResponseStatus=class EmailJSResponseStatus{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}};let sendPost=(t,n,a={})=>new Promise((i,o)=>{let r=new XMLHttpRequest;r.addEventListener("load",({target:t})=>{let n=new EmailJSResponseStatus(t);200===n.status||"OK"===n.text?i(n):o(n)}),r.addEventListener("error",({target:t})=>{o(new EmailJSResponseStatus(t))}),r.open("POST",f._origin+t,!0),Object.keys(a).forEach(t=>{r.setRequestHeader(t,a[t])}),r.send(n)}),findHTMLForm=t=>{let n;if(!(n="string"==typeof t?document.querySelector(t):t)||"FORM"!==n.nodeName)throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return n};var j={init:(t,n="https://api.emailjs.com")=>{f._userID=t,f._origin=n},send:(t,n,a,i)=>{let o=i||f._userID;return validateParams(o,t,n),sendPost("/api/v1.0/email/send",JSON.stringify({lib_version:"3.11.0",user_id:o,service_id:t,template_id:n,template_params:a}),{"Content-type":"application/json"})},sendForm:(t,n,a,i)=>{let o=i||f._userID,r=findHTMLForm(a);validateParams(o,t,n);let s=new FormData(r);return s.append("lib_version","3.11.0"),s.append("service_id",t),s.append("template_id",n),s.append("user_id",o),sendPost("/api/v1.0/email/send-form",s)}},N=a(2711),E=a.n(N);function Contactus(){return(0,r.useEffect)(()=>{E().init({easing:"ease-out-cubic",once:!0,offset:50})},[]),(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsxs)("div",{className:"col-lg-10 offset-lg-1","data-aos":"fade-up","data-aos-once":"true","data-aos-delay":"200","data-aos-duration":"1000","data-aos-easing":"ease",children:[(0,o.jsxs)("p",{className:"lead",children:["Please read our ",(0,o.jsx)("a",{href:"faq.html",children:"faq page"})," first. If you got any questions, please do not hestitae to send us a message."]}),(0,o.jsx)("div",{className:"contact_form_wrapper",children:(0,o.jsx)("form",{name:"contactForm",id:"contact_form",className:"form-border",onSubmit:function(t){let n=document.getElementById("success"),a=document.getElementById("send_message"),i=document.getElementById("failed");t.preventDefault(),j.sendForm("gmail","template_csfdEZiA",t.target,"user_zu7p2b3lDibMCDutH5hif").then(t=>{console.log(t.text),n.classList.add("show"),a.classList.add("show"),i.classList.remove("show")},t=>{console.log(t.text),i.classList.add("show")})},children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsxs)("div",{className:"col-lg-6 mb10",children:[(0,o.jsxs)("div",{className:"field-set",children:[(0,o.jsx)("span",{className:"d-label",children:"Name"}),(0,o.jsx)("input",{type:"text",name:"Name",id:"name",className:"form-control",placeholder:"Your Name",required:!0})]}),(0,o.jsxs)("div",{className:"field-set",children:[(0,o.jsx)("span",{className:"d-label",children:"Email"}),(0,o.jsx)("input",{type:"text",name:"Email",id:"email",className:"form-control",placeholder:"Your Email",required:!0})]}),(0,o.jsxs)("div",{className:"field-set",children:[(0,o.jsx)("span",{className:"d-label",children:"Phone"}),(0,o.jsx)("input",{type:"text",name:"phone",id:"phone",className:"form-control",placeholder:"Your Phone",required:!0})]})]}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsxs)("div",{className:"field-set",children:[(0,o.jsx)("span",{className:"d-label",children:"Message"}),(0,o.jsx)("textarea",{name:"message",id:"message",className:"form-control",placeholder:"Your Message",required:!0})]})}),(0,o.jsxs)("div",{className:"col-12",children:[(0,o.jsx)("div",{id:"success",className:"hide",children:"Your message has been sent..."}),(0,o.jsx)("div",{id:"failed",className:"hide",children:"Message failed..."}),(0,o.jsx)("div",{id:"submit",className:"mt30",children:(0,o.jsx)("button",{type:"submit",id:"send_message",className:"btn-main",children:"Send Message"})})]})]})})})]})})})}a(927);var _=a(2792),q=a(5765),T=a(9521);function _templateObject(){let t=(0,i._)(["\n  .react-parallax-bgimage {\n    transform: translate3d(-50%, -12%, 0px) !important;\n  }\n"]);return _templateObject=function(){return t},t}let L=(0,T.vJ)(_templateObject());function Home(){return(0,r.useEffect)(()=>{{let t=document.getElementById("mainpreloader");t&&setTimeout(()=>{t.classList.add("fadeOut"),t.style.display="none"},600)}},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"Playhost - Game Hosting Website Template"}),(0,o.jsx)("link",{rel:"icon",href:"../img/icon.png",type:"image/gif",sizes:"16x16"})]}),(0,o.jsx)(L,{}),(0,o.jsx)("div",{id:"mainpreloader",children:(0,o.jsx)(u.Z,{})}),(0,o.jsxs)("div",{className:"home dark-scheme",children:[(0,o.jsx)("header",{id:"header-wrap",children:(0,o.jsx)(l.Z,{})}),(0,o.jsx)(d.Parallax,{className:"",bgImage:"../../img/background/subheader-contact.webp",strength:300,children:(0,o.jsx)("section",{className:"no-bg",children:(0,o.jsx)("div",{className:"container z-9",children:(0,o.jsxs)("div",{className:"row",children:[(0,o.jsx)("div",{className:"col-lg-12",children:(0,o.jsx)("div",{className:"subtitle wow fadeInUp mb-3",children:"Do you have"})}),(0,o.jsx)("div",{className:"col-lg-6",children:(0,o.jsx)("h2",{children:"Any questions?"})})]})})})}),(0,o.jsx)("section",{children:(0,o.jsx)(Contactus,{})}),(0,o.jsx)(_.Z,{})]}),(0,o.jsx)(q.Z,{})]})}},927:function(){}},function(t){t.O(0,[172,93,163,774,888,179],function(){return t(t.s=3328)}),_N_E=t.O()}]);