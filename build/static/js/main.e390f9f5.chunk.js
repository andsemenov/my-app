(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{41:function(e,a,t){e.exports=t.p+"static/media/male1.596ece33.png"},50:function(e,a,t){e.exports=t.p+"static/media/male.596ece33.png"},53:function(e,a,t){e.exports=t.p+"static/media/earth.67af05e1.jpg"},66:function(e,a,t){e.exports=t(97)},72:function(e,a,t){},74:function(e,a,t){},75:function(e,a,t){},78:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){var n={"./image1.jpg":85,"./image2.jpg":86,"./image3.jpg":87,"./image4.jpg":88,"./image5.jpg":89};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=84},85:function(e,a,t){e.exports=t.p+"static/media/image1.9a3dfe86.jpg"},86:function(e,a,t){e.exports=t.p+"static/media/image2.82c37520.jpg"},87:function(e,a,t){e.exports=t.p+"static/media/image3.a122b6b6.jpg"},88:function(e,a,t){e.exports=t.p+"static/media/image4.c4e0b857.jpg"},89:function(e,a,t){e.exports=t.p+"static/media/image5.b658e612.jpg"},90:function(e,a,t){var n={"./image1.png":91,"./image2.png":92};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=90},91:function(e,a,t){e.exports=t.p+"static/media/image1.24820d5a.png"},92:function(e,a,t){e.exports=t.p+"static/media/image2.77058f67.png"},93:function(e,a,t){var n={"./image1.jpg":94};function r(e){var a=c(e);return t(a)}function c(e){if(!t.o(n,e)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=93},94:function(e,a,t){e.exports=t.p+"static/media/image1.28470933.jpg"},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(49),l=t.n(c),o=(t(71),t(72),t(73),t(74),t(75),t(76),t(77),t(78),t(79),t(80),t(1)),i=t.n(o);i.a.easing.jswing=i.a.easing.swing,i.a.extend(i.a.easing,{def:"easeOutQuad",swing:function(e,a,t,n,r){return i.a.easing[i.a.easing.def](e,a,t,n,r)},easeInQuad:function(e,a,t,n,r){return n*(a/=r)*a+t},easeOutQuad:function(e,a,t,n,r){return-n*(a/=r)*(a-2)+t},easeInOutQuad:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a+t:-n/2*(--a*(a-2)-1)+t},easeInCubic:function(e,a,t,n,r){return n*(a/=r)*a*a+t},easeOutCubic:function(e,a,t,n,r){return n*((a=a/r-1)*a*a+1)+t},easeInOutCubic:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a+t:n/2*((a-=2)*a*a+2)+t},easeInQuart:function(e,a,t,n,r){return n*(a/=r)*a*a*a+t},easeOutQuart:function(e,a,t,n,r){return-n*((a=a/r-1)*a*a*a-1)+t},easeInOutQuart:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a+t:-n/2*((a-=2)*a*a*a-2)+t},easeInQuint:function(e,a,t,n,r){return n*(a/=r)*a*a*a*a+t},easeOutQuint:function(e,a,t,n,r){return n*((a=a/r-1)*a*a*a*a+1)+t},easeInOutQuint:function(e,a,t,n,r){return(a/=r/2)<1?n/2*a*a*a*a*a+t:n/2*((a-=2)*a*a*a*a+2)+t},easeInSine:function(e,a,t,n,r){return-n*Math.cos(a/r*(Math.PI/2))+n+t},easeOutSine:function(e,a,t,n,r){return n*Math.sin(a/r*(Math.PI/2))+t},easeInOutSine:function(e,a,t,n,r){return-n/2*(Math.cos(Math.PI*a/r)-1)+t},easeInExpo:function(e,a,t,n,r){return 0===a?t:n*Math.pow(2,10*(a/r-1))+t},easeOutExpo:function(e,a,t,n,r){return a===r?t+n:n*(1-Math.pow(2,-10*a/r))+t},easeInOutExpo:function(e,a,t,n,r){return 0===a?t:a===r?t+n:(a/=r/2)<1?n/2*Math.pow(2,10*(a-1))+t:n/2*(2-Math.pow(2,-10*--a))+t},easeInCirc:function(e,a,t,n,r){return-n*(Math.sqrt(1-(a/=r)*a)-1)+t},easeOutCirc:function(e,a,t,n,r){return n*Math.sqrt(1-(a=a/r-1)*a)+t},easeInOutCirc:function(e,a,t,n,r){return(a/=r/2)<1?-n/2*(Math.sqrt(1-a*a)-1)+t:n/2*(Math.sqrt(1-(a-=2)*a)+1)+t},easeInElastic:function(e,a,t,n,r){var c=1.70158,l=0,o=n;return 0===a?t:1===(a/=r)?t+n:(l||(l=.3*r),o<Math.abs(n)?(o=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/o),-o*Math.pow(2,10*(a-=1))*Math.sin((a*r-c)*(2*Math.PI)/l)+t)},easeOutElastic:function(e,a,t,n,r){var c=1.70158,l=0,o=n;return 0===a?t:1===(a/=r)?t+n:(l||(l=.3*r),o<Math.abs(n)?(o=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/o),o*Math.pow(2,-10*a)*Math.sin((a*r-c)*(2*Math.PI)/l)+n+t)},easeInOutElastic:function(e,a,t,n,r){var c=1.70158,l=0,o=n;return 0===a?t:2===(a/=r/2)?t+n:(l||(l=r*(.3*1.5)),o<Math.abs(n)?(o=n,c=l/4):c=l/(2*Math.PI)*Math.asin(n/o),a<1?o*Math.pow(2,10*(a-=1))*Math.sin((a*r-c)*(2*Math.PI)/l)*-.5+t:o*Math.pow(2,-10*(a-=1))*Math.sin((a*r-c)*(2*Math.PI)/l)*.5+n+t)},easeInBack:function(e,a,t,n,r,c){return void 0===c&&(c=1.70158),n*(a/=r)*a*((c+1)*a-c)+t},easeOutBack:function(e,a,t,n,r,c){return void 0===c&&(c=1.70158),n*((a=a/r-1)*a*((c+1)*a+c)+1)+t},easeInOutBack:function(e,a,t,n,r,c){return void 0===c&&(c=1.70158),(a/=r/2)<1?n/2*(a*a*((1+(c*=1.525))*a-c))+t:n/2*((a-=2)*a*((1+(c*=1.525))*a+c)+2)+t},easeInBounce:function(e,a,t,n,r){return n-i.a.easing.easeOutBounce(e,r-a,0,n,r)+t},easeOutBounce:function(e,a,t,n,r){return(a/=r)<1/2.75?n*(7.5625*a*a)+t:a<2/2.75?n*(7.5625*(a-=1.5/2.75)*a+.75)+t:a<2.5/2.75?n*(7.5625*(a-=2.25/2.75)*a+.9375)+t:n*(7.5625*(a-=2.625/2.75)*a+.984375)+t},easeInOutBounce:function(e,a,t,n,r){return a<r/2?.5*i.a.easing.easeInBounce(e,2*a,0,n,r)+t:.5*i.a.easing.easeOutBounce(e,2*a-r,0,n,r)+.5*n+t}});t(82),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=t(8),m=t(9),u=t(12),d=t(11),p=t(41),v=t.n(p),f=t(50),h=t.n(f),g=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={logo:v.a},e}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=i()("nav").outerHeight();i()(".navbar-toggler").on("click",(function(){i()("#mainNav").hasClass("navbar-reduce")||i()("#mainNav").addClass("navbar-reduce")})),i()("body").scrollspy({target:"#mainNav",offset:a}),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")})),window.addEventListener("scroll",(function(){window.pageYOffset>50?(document.querySelector(".navbar-expand-md").classList.add("navbar-reduce"),document.querySelector(".navbar-expand-md").classList.remove("navbar-trans"),e.setState({logo:h.a})):(document.querySelector(".navbar-expand-md").classList.add("navbar-trans"),document.querySelector(".navbar-expand-md").classList.remove("navbar-reduce"),e.setState({logo:v.a}))})),i()('a.js-scroll[href*="#"]:not([href="#"])').on("click",(function(){if(window.location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&window.location.hostname===this.hostname){var e=i()(this.hash);if((e=e.length?e:i()("[name="+this.hash.slice(1)+"]")).length)return i()("html, body").animate({scrollTop:e.offset().top-a+5},1e3,"easeInExpo"),!1}})),i()(".js-scroll").on("click",(function(){i()(".navbar-collapse").collapse("hide")}))}},{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-b navbar-trans navbar-expand-md fixed-top",id:"mainNav"},r.a.createElement("div",{className:"container"},r.a.createElement("a",{className:"navbar-brand js-scroll",href:"#page-top"},r.a.createElement("img",{src:this.state.logo,alt:"logo",style:{maxWidth:"100px",borderRadius:"50%"}})),r.a.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarDefault","aria-controls":"navbarDefault","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement("div",{className:"navbar-collapse collapse justify-content-end",id:"navbarDefault"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll active",href:"#home"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#work"},"Work")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll",href:"#contact"},"Contact"))))))}}]),t}(r.a.Component),E=(t(83),t(51)),b=t.n(E),N=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{id:"home",className:"intro route bg-image background"},r.a.createElement("div",{id:"stars"}),r.a.createElement("div",{id:"stars2"}),r.a.createElement("div",{id:"stars3"}),r.a.createElement("div",{className:"intro-content display-table"},r.a.createElement("div",{className:"table-cell"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"intro-title mb-4"},"Hello, I am Andrei Semenov"),r.a.createElement("p",{className:"intro-subtitle"},r.a.createElement("span",{className:"text-slider-items"}),r.a.createElement("strong",{className:"text-slider"},r.a.createElement(b.a,{strings:["Front End Developer","Back End Developer","Software Engineer"],typeSpeed:80,backDelay:1100,backSpeed:30,loop:!0}))),r.a.createElement("p",{className:"pt-3"},r.a.createElement("a",{className:"btn btn-primary btn js-scroll px-4",href:"#work",role:"button"},"View My Work"))))))}}]),t}(r.a.Component),k=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).state={skills:[{id:"HTML5_skill",content:"HTML5",porcentage:"65%",value:"65"},{id:"CSS3_skill",content:"CSS3",porcentage:"60%",value:"60"},{id:"JavaScript_skill",content:"JavaScript",porcentage:"70%",value:"70"},{id:"ReactJS_skill",content:"ReactJS",porcentage:"75%",value:"75"},{id:"NodeJS_skill",content:"NodeJS",porcentage:"70%",value:"70"},{id:"PostgreSQL_skill",content:"PostgreSQL",porcentage:"60%",value:"60"},{id:"GIT_skill",content:"GIT",porcentage:"65%",value:"65"},{id:"Linux_skill",content:"Linux",porcentage:"60%",value:"60"}],about_me:[{id:"first-p-about",content:"Junior web developer with strong technical skills, passionate about creating perfect digital solutions with clean code and the latest technologies. A quick learner, focused on gaining knowledge, new skills and continuous improvement. Described throughout career as a hardworking, highly motivated and helpful individual with self discipline."},{id:"second-p-about",content:"During intensive nine months of training with the Code Your Future with over 600 hours of studying gained Full-stack tech skills: HTML and CSS, JavaScript, React js, Node.js, PostgreSQL, Testing, asynchronous programming; Employ-ability skills: Teamwork, Adaptability, Problem-solving, Communication and Continuous Learning Skills Project delivery experience Within a team of 5 developers created a Full Stack app Diversihire  \u2013 the hiring platform of new type on base of PERN stack."},{id:"third-p-about",content:"I have engineering diplomas in Information Technology and Aircraft Engine Technology, I worked as an IT manager for more than 12 years, so I have both technical education and practical experience in the building and maintenance of complex systems."}]},e}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{id:"about",className:"about-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6 col-md-5",style:{margin:"0 auto"}},r.a.createElement("div",{className:"about-img",style:{textAlign:"center"}},r.a.createElement("img",{className:"img-fluid rounded b-shadow-a",alt:""})))),r.a.createElement("div",{className:"skill-mf"},this.state.skills.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement("span",null,e.content)," ",r.a.createElement("span",{className:"pull-right"},e.porcentage),r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar",role:"progressbar",style:{width:e.porcentage},"aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100"})))})))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"about-me pt-4 pt-md-0"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"About Me")),this.state.about_me.map((function(e){return r.a.createElement("p",{className:"lead",key:e.id},e.content)}))))))))))}}]),t}(r.a.Component),w=t(102),y=t(101),O=[{contextOfImages:t(84),description:"Diversihire platform",technologies:"PostgreSQL Express React Node Html CSS Semantic UI React",githubLink:"https://github.com/andsemenov/scot-diversihire",liveSiteLink:"https://diversihire.herokuapp.com/"},{contextOfImages:t(90),description:"There will be project -2",technologies:"JavaScript HTML CSS",githubLink:"https://github.com/andsemenov/tv-show-dom-project",liveSiteLink:"https://cyf-andsemenov-tv.netlify.app/"},{contextOfImages:t(93),description:"There will be project -3",technologies:"There will be tech for project-3",githubLink:"http://gitlinkproject-3",liveSiteLink:"https://project-3.com/"}],j=function(e){return e.keys().map(e)},x=function(){return r.a.createElement("section",{id:"work",className:"portfolio-mf sect-pt4 route"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"title-box text-center"},r.a.createElement("h3",{className:"title-a"},"Portfolio"),r.a.createElement("p",{className:"subtitle-a"},"There are my projects."),r.a.createElement("div",{className:"line-mf"})))),r.a.createElement("div",{className:"row"},O.map((function(e,a){return r.a.createElement("div",{key:"div1"+a,className:"col-md-4"},r.a.createElement("div",{className:"work-box"},r.a.createElement("a",{href:j(e.contextOfImages)[0],"data-lightbox":"gallery-vmarine"+a},r.a.createElement("div",{className:"work-img"},r.a.createElement("img",{src:j(e.contextOfImages)[0],alt:"Main_picture",className:"img-fluid"})),r.a.createElement("div",{className:"work-content"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-8"},r.a.createElement("h2",{className:"w-title"},e.description),r.a.createElement("div",{className:"w-more"},r.a.createElement("span",{className:"w-ctegory"},e.technologies))),r.a.createElement("div",{className:"col-sm-4"},r.a.createElement("div",{className:"w-like"},r.a.createElement("span",{className:"ion-ios-plus-outline"})))))),j(e.contextOfImages).slice(1).map((function(e,t){return r.a.createElement("a",{href:e,key:t,"data-lightbox":"gallery-vmarine"+a,style:{display:"none"}},"jsx-a11y/anchor-has-content warning")})),r.a.createElement(w.a,{centered:!0},r.a.createElement(w.a.Row,{columns:2},r.a.createElement(w.a.Column,{textAlign:"center",verticalAlign:"middle",className:"links",width:5},r.a.createElement("a",{href:e.githubLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a,{name:"code"}),r.a.createElement("p",null,"Code."))),r.a.createElement(w.a.Column,{textAlign:"center",verticalAlign:"middle",className:"links",width:5},r.a.createElement("a",{href:e.liveSiteLink,target:"_blank",rel:"noopener noreferrer"},r.a.createElement(y.a,{name:"desktop"}),r.a.createElement("p",null,"Live site.")))))))})))))},I=t(53),S=t.n(I),M=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"paralax-mf footer-paralax bg-image sect-mt4 route",style:{backgroundImage:"url("+S.a+")"}},r.a.createElement("div",{className:"overlay-mf"}),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"contact-mf"},r.a.createElement("div",{id:"contact",className:"box-shadow-full"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2"},r.a.createElement("h5",{className:"title-left"},"Send A Message")),r.a.createElement("div",null,r.a.createElement("form",{action:"https://formspree.io/f/myybbgqn",method:"POST",className:"contactForm"},r.a.createElement("div",{id:"sendmessage"},"Your message has been sent. Thank you!"),r.a.createElement("div",{id:"errormessage"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",name:"name",className:"form-control",id:"name",placeholder:"Your Name","data-rule":"minlen:4","data-msg":"Please enter at least 4 chars"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"email",className:"form-control",name:"email",id:"email",placeholder:"Your Email","data-rule":"email","data-msg":"Please enter a valid email"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("input",{type:"text",className:"form-control",name:"subject",id:"subject",placeholder:"Subject","data-rule":"minlen:4","data-msg":"Please enter at least 8 chars of subject"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12 mb-3"},r.a.createElement("div",{className:"form-group"},r.a.createElement("textarea",{className:"form-control",name:"message",rows:"5","data-rule":"required","data-msg":"Please write something for us",placeholder:"Message"}),r.a.createElement("div",{className:"validation"}))),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{type:"submit",className:"button button-a button-big button-rouded"},"Send Message")))))),r.a.createElement("div",{className:"col-md-6"},r.a.createElement("div",{className:"title-box-2 pt-4 pt-md-0"},r.a.createElement("h5",{className:"title-left"},"Get in Touch")),r.a.createElement("div",{className:"more-info"},r.a.createElement("p",{className:"lead"},"Whether you want to get in touch, talk about a project collaboration, or just say hi, I'd love to hear from you.",r.a.createElement("br",null),"Simply fill the from and send me an email.")),r.a.createElement("div",{className:"socials"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("a",{href:"https://github.com/andsemenov",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-github"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"https://www.linkedin.com/in/andrei-semenov",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("span",{className:"ico-circle"},r.a.createElement("i",{className:"ion-social-linkedin"}))))))))))))),r.a.createElement("footer",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-12"},r.a.createElement("div",{className:"copyright-box"}))))))}}]),t}(r.a.Component),L=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){i()(".back-to-top").click((function(){return i()("html, body").animate({scrollTop:0},1500,"easeInOutExpo"),!1})),window.addEventListener("scroll",(function(){window.pageYOffset>100?(document.querySelector(".back-to-top").classList.remove("fadeOut"),document.querySelector(".back-to-top").style.display="block",document.querySelector(".back-to-top").classList.add("fadeIn")):(document.querySelector(".back-to-top").classList.remove("fadeIn"),document.querySelector(".back-to-top").classList.add("fadeOut"))}))}},{key:"render",value:function(){return r.a.createElement("a",{href:"#",className:"back-to-top animated"},r.a.createElement("i",{className:"fa fa-chevron-up"}))}}]),t}(r.a.Component),C=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(m.a)(t,[{key:"componentDidMount",value:function(){i()(window).on("load",(function(){i()("#preloader").length&&i()("#preloader").delay(100).fadeOut("slow",(function(){i()(this).remove()}))}))}},{key:"render",value:function(){return r.a.createElement("div",{id:"preloader"})}}]),t}(r.a.Component);l.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(g,null),r.a.createElement(N,null),r.a.createElement(k,null),r.a.createElement(x,null),r.a.createElement(M,null),r.a.createElement(L,null),r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[66,1,2]]]);
//# sourceMappingURL=main.e390f9f5.chunk.js.map