"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[163],{5678:function(e,s){s.Z={src:"/_next/static/media/logo.51d91c64.png",height:32,width:190,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAKklEQVR4nGOMc3sY9klI9HFT7SM2NlZW+T9//v5iZ2f7+vvXb3YWVpafAPQxDuTwigZYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:1}},7480:function(e,s,i){i.d(s,{Z:function(){return layout_Navbar}});var l=i(5893),r=i(7294),n=i(1664),d=i.n(n),o=i(975),c=i(5675),a=i.n(c),t=i(5678),h={src:"/_next/static/media/logo-mobile.b7bb0421.png",height:31,width:44,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAzUlEQVR4nGMMZLjKyG7EXsvMzyrPxMV6hEWAnYeZi8UQiC8x/GeYwBiuezuEgYHhP7sy397/f/+uZuFl+/Dnze9YLh3+JEZGxouMYSo3i5mFWLgZ2ZkF/zz5Ucgix8nGpS4QwczFysTIxsTHGKZ6s4pZhHUJIyuTFQs/+3FmXlYOZm5WWSC+wsTGnA404UY2v4P0zK+33rUzC7A9YOFhZWHmYZXgNeCr/PHwVwljmNrNiUx8LGyMbIw9TOwsdzmU+BiYWJksmNiZk4H4GQDviS8eM+sgcwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:6},layout_Navbar=function(){let useDropdown=()=>{let[e,s]=(0,r.useState)(!1),closeDropdown=()=>{s(!1)},i=(0,r.useRef)(null);return(0,o.Z)(()=>{closeDropdown()},i),{isOpen:e,toggleDropdown:()=>{s(e=>!e)},closeDropdown,ref:i}},{isOpen:e,toggleDropdown:s,closeDropdown:i,ref:n}=useDropdown(),{isOpen:c,toggleDropdown:m,closeDropdown:x,ref:j}=useDropdown(),{isOpen:u,toggleDropdown:v,closeDropdown:g,ref:p}=useDropdown(),{isOpen:f,toggleDropdown:w,closeDropdown:N,ref:b}=useDropdown(),{isOpen:A,toggleDropdown:k,closeDropdown:C,ref:T}=useDropdown(),[y,D]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=document.getElementById("header-wrap"),s=document.getElementById("scroll-to-top"),i=e.offsetTop,scrollCallBack=()=>{window.pageYOffset>i?(e.classList.add("sticky"),s.classList.add("show")):(e.classList.remove("sticky"),s.classList.remove("show"))};return window.addEventListener("scroll",scrollCallBack),()=>{window.removeEventListener("scroll",scrollCallBack)}},[]),(0,l.jsx)("nav",{className:"navbar transition",children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)(d(),{className:"navbar-brand",href:"/",children:[(0,l.jsx)(a(),{src:t.Z,className:"img-fluid d-md-block d-none imginit",alt:"logo"}),(0,l.jsx)(a(),{src:h,className:"img-fluid d-md-none d-sms-none imginit",alt:"logo"})]}),(0,l.jsx)("div",{className:"mobile",children:y&&(0,l.jsxs)("div",{className:"menu",children:[(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:n,children:[(0,l.jsx)("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{s(),x(),g(),N(),C()},children:"Home"}),e&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:i,children:[(0,l.jsx)(d(),{href:"/",onClick:()=>D(!y),children:"Homepage One"}),(0,l.jsx)(d(),{href:"/index1",onClick:()=>D(!y),children:"Homepage Two"}),(0,l.jsx)(d(),{href:"/index2",onClick:()=>D(!y),children:"Homepage Three"}),(0,l.jsx)(d(),{href:"/index3",onClick:()=>D(!y),children:"Homepage Four"}),(0,l.jsx)(d(),{href:"/index4",onClick:()=>D(!y),children:"Homepage Five"})]})})]})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:j,children:[(0,l.jsx)("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{m(),i(),g(),N(),C()},children:"Game Servers"}),c&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:x,children:[(0,l.jsx)(d(),{href:"/games",onClick:()=>D(!y),children:"Games Server List"}),(0,l.jsx)(d(),{href:"/pricing",onClick:()=>D(!y),children:"Pricing Table One"}),(0,l.jsx)(d(),{href:"/pricing2",onClick:()=>D(!y),children:"Pricing Table Two"}),(0,l.jsx)(d(),{href:"/pricing3",onClick:()=>D(!y),children:"Pricing Table Three"})]})})]})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)(d(),{href:"/location",onClick:()=>D(!y),children:"Locations"})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:p,children:[(0,l.jsx)("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{v(),x(),i(),N(),C()},children:"Support"}),u&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:g,children:[(0,l.jsx)(d(),{href:"/knowledgebase",onClick:()=>D(!y),children:"Knowledgebase"}),(0,l.jsx)(d(),{href:"/faq",onClick:()=>D(!y),children:"FAQ"}),(0,l.jsx)(d(),{href:"/contact",onClick:()=>D(!y),children:"Contact"})]})})]})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)(d(),{href:"/news",onClick:()=>D(!y),children:"News"})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:b,children:[(0,l.jsx)("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{w(),x(),g(),i(),C()},children:"Company"}),f&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:N,children:[(0,l.jsx)(d(),{href:"/about",onClick:()=>D(!y),children:"About Us"}),(0,l.jsx)(d(),{href:"/affliate",onClick:()=>D(!y),children:"Affliates"})]})})]})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsxs)("div",{ref:T,children:[(0,l.jsx)("div",{className:"dropdown-custom dropdown-toggle btn",onClick:()=>{k(),x(),g(),N(),i()},children:"More Pages"}),A&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:C,children:[(0,l.jsx)(d(),{href:"/login",onClick:()=>D(!y),children:"Login"}),(0,l.jsx)(d(),{href:"/register",onClick:()=>D(!y),children:"Register"})]})})]})})]})}),(0,l.jsx)("div",{className:"dekstop",children:(0,l.jsxs)("div",{className:"menu",children:[(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)("div",{ref:n,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:s,onMouseLeave:i,children:["Home",e&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:i,children:[(0,l.jsx)(d(),{href:"/",children:"Homepage One"}),(0,l.jsx)(d(),{href:"/index1",children:"Homepage Two"}),(0,l.jsx)(d(),{href:"/index2",children:"Homepage Three"}),(0,l.jsx)(d(),{href:"/index3",children:"Homepage Four"}),(0,l.jsx)(d(),{href:"/index4",children:"Homepage Five"})]})})]})})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)("div",{ref:j,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:m,onMouseLeave:x,children:["Game Servers",c&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:x,children:[(0,l.jsx)(d(),{href:"/games",children:"Games Server List"}),(0,l.jsx)(d(),{href:"/pricing",children:"Pricing Table One"}),(0,l.jsx)(d(),{href:"/pricing2",children:"Pricing Table Two"}),(0,l.jsx)(d(),{href:"/pricing3",children:"Pricing Table Three"})]})})]})})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)(d(),{href:"/location",children:"Locations"})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)("div",{ref:p,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:v,onMouseLeave:g,children:["Support",u&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:g,children:[(0,l.jsx)(d(),{href:"/knowledgebase",children:"Knowledgebase"}),(0,l.jsx)(d(),{href:"/faq",children:"FAQ"}),(0,l.jsx)(d(),{href:"/contact",children:"Contact"})]})})]})})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)(d(),{href:"/news",children:"News"})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)("div",{ref:b,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:w,onMouseLeave:N,children:["Company",f&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:N,children:[(0,l.jsx)(d(),{href:"/about",children:"About Us"}),(0,l.jsx)(d(),{href:"/affliate",children:"Affliates"})]})})]})})}),(0,l.jsx)("div",{className:"navbar-item counter",children:(0,l.jsx)("div",{ref:T,children:(0,l.jsxs)("div",{className:"dropdown-custom dropdown-toggle btn",onMouseEnter:k,onMouseLeave:C,children:["More Pages",A&&(0,l.jsx)("div",{className:"item-dropdown",children:(0,l.jsxs)("div",{className:"dropdown",onClick:C,children:[(0,l.jsx)(d(),{href:"/login",children:"Login"}),(0,l.jsx)(d(),{href:"/register",children:"Register"})]})})]})})})]})}),(0,l.jsxs)("div",{className:"menu_side_area",children:[(0,l.jsx)(d(),{href:"#",className:"btn-line",id:"btn-line",children:"Get Hosting"}),(0,l.jsx)("button",{className:"burgermenu",type:"button",onClick:()=>{D(!y),x(),g(),N(),C()},children:(0,l.jsx)("i",{className:"fa fa-bars","aria-hidden":"true"})})]})]})})}},5765:function(e,s,i){i.d(s,{Z:function(){return ScrollToTop}});var l=i(5893),r=i(7294),n=i(1664),d=i.n(n);let ScrollToTop=class ScrollToTop extends r.Component{componentDidMount(){window.addEventListener("scroll",this.handleScroll)}componentWillUnmount(){window.removeEventListener("scroll",this.handleScroll)}handleScroll(){let e=window.innerHeight,s=document.documentElement.scrollHeight,i=window.scrollY;this.setState({scrollProgress:100*i/(s-e)}),this.toggleVisibility()}toggleVisibility(){window.pageYOffset>300?this.setState({is_visible:!0}):this.setState({is_visible:!1})}scrollToTop(){window.scrollTo({top:0,behavior:"smooth"})}render(){let{is_visible:e,scrollProgress:s}=this.state;return(0,l.jsx)("div",{id:"scroll-to-top",className:"init",children:e&&(0,l.jsxs)("div",{className:"float-text",onClick:this.scrollToTop,children:[(0,l.jsx)("span",{children:(0,l.jsx)(d(),{href:"#",children:"Scroll to top"})}),(0,l.jsx)("div",{className:"scrollbar-v",style:{height:"".concat(s,"%")}})]})})}constructor(e){super(e),this.state={is_visible:!1,scrollProgress:0},this.handleScroll=this.handleScroll.bind(this),this.scrollToTop=this.scrollToTop.bind(this),this.toggleVisibility=this.toggleVisibility.bind(this)}}},6702:function(e,s,i){var l=i(5893);i(7294),s.Z=()=>(0,l.jsx)("div",{className:"preloader fadeOut",children:(0,l.jsx)("div",{id:"de-loader",children:(0,l.jsx)("div",{className:"lds-roller",children:[...Array(8)].map((e,s)=>(0,l.jsx)("div",{},s))})})})},2792:function(e,s,i){var l=i(5893);i(7294);var r=i(1664),n=i.n(r),d=i(5675),o=i.n(d),c=i(5678);s.Z=()=>(0,l.jsxs)("footer",{children:[(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row gx-5",children:[(0,l.jsxs)("div",{className:"col-lg-4",children:[(0,l.jsx)(o(),{src:c.Z,alt:""}),(0,l.jsx)("div",{className:"spacer-20"}),(0,l.jsx)("p",{children:"Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt in elit non sed ut velit ullamco aliquip. Nulla cupidatat elit amet sed labore ut et consequat nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse dolor laboris non duis sunt."})]}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,l.jsxs)("div",{className:"widget",children:[(0,l.jsx)("h5",{children:"Game Server"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Thunder and City"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Mystic Racing Z"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Silent Wrath"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Funk Dungeon"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Galactic Oddsey"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Warfare Legend"})})]})]})}),(0,l.jsx)("div",{className:"col-lg-6 col-sm-6",children:(0,l.jsxs)("div",{className:"widget",children:[(0,l.jsx)("h5",{children:"Pages"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Game Server"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Knowledgebase"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"About Us"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Affliates"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Locations"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"News"})})]})]})})]})}),(0,l.jsx)("div",{className:"col-lg-4",children:(0,l.jsxs)("div",{className:"widget",children:[(0,l.jsx)("h5",{children:"Newsletter"}),(0,l.jsx)("form",{action:"blank.php",className:"row form-dark",id:"form_subscribe",method:"post",name:"form_subscribe",children:(0,l.jsxs)("div",{className:"col text-center",children:[(0,l.jsx)("input",{className:"form-control",id:"txt_subscribe",name:"txt_subscribe",placeholder:"enter your email",type:"text"})," ",(0,l.jsx)(n(),{href:"#",id:"btn-subscribe",children:(0,l.jsx)("i",{className:"arrow_right bg-color-secondary"})}),(0,l.jsx)("div",{className:"clearfix"})]})}),(0,l.jsx)("div",{className:"spacer-10"}),(0,l.jsx)("small",{children:"Your email is safe with us. We don't spam."}),(0,l.jsx)("div",{className:"spacer-30"}),(0,l.jsxs)("div",{className:"widget",children:[(0,l.jsx)("h5",{children:"Follow Us on"}),(0,l.jsxs)("div",{className:"social-icons",children:[(0,l.jsx)(n(),{href:"#",children:(0,l.jsx)("i",{className:"fa-brands fa-facebook-f"})}),(0,l.jsx)(n(),{href:"#",children:(0,l.jsx)("i",{className:"fa-brands fa-twitter"})}),(0,l.jsx)(n(),{href:"#",children:(0,l.jsx)("i",{className:"fa-brands fa-discord"})}),(0,l.jsx)(n(),{href:"#",children:(0,l.jsx)("i",{className:"fa-brands fa-tiktok"})}),(0,l.jsx)(n(),{href:"#",children:(0,l.jsx)("i",{className:"fa-brands fa-youtube"})})]})]})]})})]})}),(0,l.jsx)("div",{className:"subfooter",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-lg-6 col-sm-6",children:"Copyright 2023 - Playhost by Designesia"}),(0,l.jsx)("div",{className:"col-lg-6 col-sm-6 text-lg-end text-sm-start",children:(0,l.jsxs)("ul",{className:"menu-simple",children:[(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Terms & Conditions"})}),(0,l.jsx)("li",{children:(0,l.jsx)(n(),{href:"#",children:"Privacy Policy"})})]})})]})})})]})}}]);