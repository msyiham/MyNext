"use strict";exports.id=163,exports.ids=[163],exports.modules={5678:(e,s,i)=>{i.d(s,{Z:()=>l});let l={src:"/_next/static/media/logo.51d91c64.png",height:32,width:190,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGOMc3sY9klI9HFT7SM2NlZW+T9//v5iZ2f7+vvXb3YWVpafAPQxDuTwigZYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}},7480:(e,s,i)=>{i.d(s,{Z:()=>layout_Navbar});var l=i(997),r=i(6689),n=i(1664),d=i.n(n),o=i(4620),c=i.n(o),a=i(5675),t=i.n(a),h=i(5678);let m={src:"/_next/static/media/logo-mobile.b7bb0421.png",height:31,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAzUlEQVR4nGMMZLjKyG7EXsvMzyrPxMV6hEWAnYeZi8UQiC8x/GeYwBiuezuEgYHhP7sy397/f/+uZuFl+/Dnze9YLh3+JEZGxouMYSo3i5mFWLgZ2ZkF/zz5Ucgix8nGpS4QwczFysTIxsTHGKZ6s4pZhHUJIyuTFQs/+3FmXlYOZm5WWSC+wsTGnA404UY2v4P0zK+33rUzC7A9YOFhZWHmYZXgNeCr/PHwVwljmNrNiUx8LGyMbIw9TOwsdzmU+BiYWJksmNiZk4H4GQDviS8eM+sgcwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},layout_Navbar=function(){let useDropdown=()=>{let[e,s]=(0,r.useState)(!1),closeDropdown=()=>{s(!1)},i=(0,r.useRef)(null);return c()(()=>{closeDropdown()},i),{isOpen:e,toggleDropdown:()=>{s(e=>!e)},closeDropdown,ref:i}},{isOpen:e,toggleDropdown:s,closeDropdown:i,ref:n}=useDropdown(),{isOpen:o,toggleDropdown:a,closeDropdown:x,ref:j}=useDropdown(),{isOpen:v,toggleDropdown:g,closeDropdown:u,ref:p}=useDropdown(),{isOpen:f,toggleDropdown:w,closeDropdown:N,ref:b}=useDropdown(),{isOpen:A,toggleDropdown:C,closeDropdown:k,ref:T}=useDropdown(),[_,D]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=document.getElementById("header-wrap"),s=document.getElementById("scroll-to-top"),i=e.offsetTop,scrollCallBack=()=>{window.pageYOffset>i?(e.classList.add("sticky"),s.classList.add("show")):(e.classList.remove("sticky"),s.classList.remove("show"))};return window.addEventListener("scroll",scrollCallBack),()=>{window.removeEventListener("scroll",scrollCallBack)}},[]),l.jsx("nav",{className:"navbar transition",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(d(),{className:"navbar-brand",href:"/",children:[l.jsx(t(),{src:h.Z,className:"img-fluid d-md-block d-none imginit",alt:"logo"}),l.jsx(t(),{src:m,className:"img-fluid d-md-none d-sms-none imginit",alt:"logo"})]}),l.jsx("div",{className:"mobile",children:_&&(0,l.jsxs)("div",{className:"menu",children:[l.jsx("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:n,children:[l.jsx("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{s(),x(),u(),N(),k()},children:"Home"}),e&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:i,children:[l.jsx(d(),{href:"/",onClick:()=>D(!_),children:"Homepage One"}),l.jsx(d(),{href:"/index1",onClick:()=>D(!_),children:"Homepage Two"}),l.jsx(d(),{href:"/index2",onClick:()=>D(!_),children:"Homepage Three"}),l.jsx(d(),{href:"/index3",onClick:()=>D(!_),children:"Homepage Four"}),l.jsx(d(),{href:"/index4",onClick:()=>D(!_),children:"Homepage Five"})]})})]})}),l.jsx("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:j,children:[l.jsx("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{a(),i(),u(),N(),k()},children:"Game Servers"}),o&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:x,children:[l.jsx(d(),{href:"/games",onClick:()=>D(!_),children:"Games Server List"}),l.jsx(d(),{href:"/pricing",onClick:()=>D(!_),children:"Pricing Table One"}),l.jsx(d(),{href:"/pricing2",onClick:()=>D(!_),children:"Pricing Table Two"}),l.jsx(d(),{href:"/pricing3",onClick:()=>D(!_),children:"Pricing Table Three"})]})})]})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx(d(),{href:"/location",onClick:()=>D(!_),children:"Locations"})}),l.jsx("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:p,children:[l.jsx("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{g(),x(),i(),N(),k()},children:"Support"}),v&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:u,children:[l.jsx(d(),{href:"/knowledgebase",onClick:()=>D(!_),children:"Knowledgebase"}),l.jsx(d(),{href:"/faq",onClick:()=>D(!_),children:"FAQ"}),l.jsx(d(),{href:"/contact",onClick:()=>D(!_),children:"Contact"})]})})]})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx(d(),{href:"/news",onClick:()=>D(!_),children:"News"})}),l.jsx("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:b,children:[l.jsx("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{w(),x(),u(),i(),k()},children:"Company"}),f&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:N,children:[l.jsx(d(),{href:"/about",onClick:()=>D(!_),children:"About Us"}),l.jsx(d(),{href:"/affliate",onClick:()=>D(!_),children:"Affliates"})]})})]})}),l.jsx("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:T,children:[l.jsx("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{C(),x(),u(),N(),i()},children:"More Pages"}),A&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:k,children:[l.jsx(d(),{href:"/login",onClick:()=>D(!_),children:"Login"}),l.jsx(d(),{href:"/register",onClick:()=>D(!_),children:"Register"})]})})]})})]})}),l.jsx("div",{className:"dekstop",children:(0,l.jsxs)("div",{className:"menu",children:[l.jsx("div",{className:"navbar-item counter",children:l.jsx("div",{ref:n,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:s,onMouseLeave:i,children:["Home",e&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:i,children:[l.jsx(d(),{href:"/",children:"Homepage One"}),l.jsx(d(),{href:"/index1",children:"Homepage Two"}),l.jsx(d(),{href:"/index2",children:"Homepage Three"}),l.jsx(d(),{href:"/index3",children:"Homepage Four"}),l.jsx(d(),{href:"/index4",children:"Homepage Five"})]})})]})})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx("div",{ref:j,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:a,onMouseLeave:x,children:["Game Servers",o&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:x,children:[l.jsx(d(),{href:"/games",children:"Games Server List"}),l.jsx(d(),{href:"/pricing",children:"Pricing Table One"}),l.jsx(d(),{href:"/pricing2",children:"Pricing Table Two"}),l.jsx(d(),{href:"/pricing3",children:"Pricing Table Three"})]})})]})})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx(d(),{href:"/location",children:"Locations"})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx("div",{ref:p,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:g,onMouseLeave:u,children:["Support",v&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:u,children:[l.jsx(d(),{href:"/knowledgebase",children:"Knowledgebase"}),l.jsx(d(),{href:"/faq",children:"FAQ"}),l.jsx(d(),{href:"/contact",children:"Contact"})]})})]})})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx(d(),{href:"/news",children:"News"})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx("div",{ref:b,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:w,onMouseLeave:N,children:["Company",f&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:N,children:[l.jsx(d(),{href:"/about",children:"About Us"}),l.jsx(d(),{href:"/affliate",children:"Affliates"})]})})]})})}),l.jsx("div",{className:"navbar-item counter",children:l.jsx("div",{ref:T,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:C,onMouseLeave:k,children:["More Pages",A&&l.jsx("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:k,children:[l.jsx(d(),{href:"/login",children:"Login"}),l.jsx(d(),{href:"/register",children:"Register"})]})})]})})})]})}),(0,l.jsxs)("div",{className:"menu_side_area",children:[l.jsx(d(),{href:"#",className:"btn-line",id:"btn-line",children:"Get Hosting"}),l.jsx("button",{className:"burgermenu",type:"button",onClick:()=>{D(!_),x(),u(),N(),k()},children:l.jsx("i",{className:"fa fa-bars","aria-hidden":"true"})})]})]})})}},5765:(e,s,i)=>{i.d(s,{Z:()=>ScrollToTop});var l=i(997),r=i(6689),n=i(1664),d=i.n(n);let ScrollToTop=class ScrollToTop extends r.Component{constructor(e){super(e),this.state={is_visible:!1,scrollProgress:0},this.handleScroll=this.handleScroll.bind(this),this.scrollToTop=this.scrollToTop.bind(this),this.toggleVisibility=this.toggleVisibility.bind(this)}componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){let e=window.innerHeight,s=document.documentElement.scrollHeight,i=window.scrollY;this.setState({scrollProgress:100*i/(s-e)}),this.toggleVisibility()}toggleVisibility(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){let{is_visible:e,scrollProgress:s}=this.state,i=`${s}%`;return l.jsx("div",{id:"scroll-to-top",className:"init",children:e&&(0,l.jsxs)("div",{className:"float-text",onClick:this.scrollToTop,children:[l.jsx("span",{children:l.jsx(d(),{href:"#",children:"Scroll to top"})}),l.jsx("div",{className:"scrollbar-v",style:{height:i}})]})})}}},6702:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997);i(6689);let __WEBPACK_DEFAULT_EXPORT__=()=>l.jsx("div",{className:"preloader fadeOut",children:l.jsx("div",{id:"de-loader",children:l.jsx("div",{className:"lds-roller",children:[...Array(8)].map((e,s)=>l.jsx("div",{},s))})})})},2792:(e,s,i)=>{i.d(s,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var l=i(997);i(6689);var r=i(1664),n=i.n(r),d=i(5675),o=i.n(d),c=i(5678);let __WEBPACK_DEFAULT_EXPORT__=()=>(0,l.jsxs)("footer",{children:[l.jsx("div",{className:"container",children:(0,l.jsxs)("div",{className:"row gx-5",children:[(0,l.jsxs)("div",{className:"col-lg-4",children:[l.jsx(o(),{src:c.Z,alt:""}),l.jsx("div",{className:"spacer-20"}),l.jsx("p",{children:"Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt in elit non sed ut velit ullamco aliquip. Nulla cupidatat elit amet sed labore ut et consequat nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse dolor laboris non duis sunt."})]}),l.jsx("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"row",children:[l.jsx("div",{className:"col-lg-6 col-sm-6",children:(0,l.jsxs)("div",{className:"widget",children:[l.jsx("h5",{children:"Game Server"}),(0,l.jsxs)("ul",{children:[l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Thunder and City"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Mystic Racing Z"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Silent Wrath"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Funk Dungeon"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Galactic Oddsey"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Warfare Legend"})})]})]})}),l.jsx("div",{className:"col-lg-6 col-sm-6",children:(0,l.jsxs)("div",{className:"widget",children:[l.jsx("h5",{children:"Pages"}),(0,l.jsxs)("ul",{children:[l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Game Server"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Knowledgebase"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"About Us"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Affliates"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Locations"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"News"})})]})]})})]})}),l.jsx("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"widget",children:[l.jsx("h5",{children:"Newsletter"}),l.jsx("form",{action:"blank.php",className:"row form-dark",id:"form_subscribe",method:"post",name:"form_subscribe",children:(0,l.jsxs)("div",{className:"col text-center",children:[l.jsx("input",{className:"form-control",id:"txt_subscribe",name:"txt_subscribe",placeholder:"enter your email",type:"text"})," ",l.jsx(n(),{href:"#",id:"btn-subscribe",children:l.jsx("i",{className:"arrow_right bg-color-secondary"})}),l.jsx("div",{className:"clearfix"})]})}),l.jsx("div",{className:"spacer-10"}),l.jsx("small",{children:"Your email is safe with us. We don't spam."}),l.jsx("div",{className:"spacer-30"}),(0,l.jsxs)("div",{className:"widget",children:[l.jsx("h5",{children:"Follow Us on"}),(0,l.jsxs)("div",{className:"social-icons",children:[l.jsx(n(),{href:"#",children:l.jsx("i",{className:"fa-brands fa-facebook-f"})}),l.jsx(n(),{href:"#",children:l.jsx("i",{className:"fa-brands fa-twitter"})}),l.jsx(n(),{href:"#",children:l.jsx("i",{className:"fa-brands fa-discord"})}),l.jsx(n(),{href:"#",children:l.jsx("i",{className:"fa-brands fa-tiktok"})}),l.jsx(n(),{href:"#",children:l.jsx("i",{className:"fa-brands fa-youtube"})})]})]})]})})]})}),l.jsx("div",{className:"subfooter",children:l.jsx("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[l.jsx("div",{className:"col-lg-6 col-sm-6",children:"Copyright 2023 - Playhost by Designesia"}),l.jsx("div",{className:"col-lg-6 col-sm-6 text-lg-end text-sm-start",children:(0,l.jsxs)("ul",{className:"menu-simple",children:[l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Terms & Conditions"})}),l.jsx("li",{children:l.jsx(n(),{href:"#",children:"Privacy Policy"})})]})})]})})})]})}};