(this.webpackJsonpmy_portfolio=this.webpackJsonpmy_portfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},,,,,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(7),s=a(1),i=a(0);const c=Object(s.createContext)(),r=e=>{let{children:t}=e;const[a,n]=Object(s.useState)("dark");Object(s.useEffect)((()=>{const e=window.matchMedia("(prefers-color-scheme: dark)");n(e.matches?"light":"dark"),e.addEventListener("change",(e=>{n(e.matches?"dark":"light")}))}),[]);return Object(i.jsx)(c.Provider,{value:[{themeName:a,toggleTheme:()=>{const e="dark"===a?"light":"dark";localStorage.setItem("themeName",e),n(e)}}],children:t})},l={homepage:"https://pandey-narendra.github.io/my_portfolio/",title:"NP."},o={name:"Narendra Pandey",role:"Developer and a Programmer",description:"looking for new opportunities and challenges.",resume:"https://drive.google.com/file/d/1hM3Id01Jqk5AwaWKRq8fEhDPyb7uqPVJ/view?usp=drive_link",social:{linkedin:"https://linkedin.com/in/pandey-narendra",github:"https://github.com/Pandey-Narendra"}},d=[{name:"Goldengate Technolabs",duration:"August 2022 - October 2023",post:"Web Developer",description:["I\u2019ve gained extensive experience in React JS, Laravel, WordPress, MySQL and more.","I\u2019ve been deeply involved in developing, maintaining, and deploying websites for diverse clients.","Prioritized project clearity by meeting clients, writing detailed docs, and keeping things organized in Jira.","Additionally, integrating React.js within Laravel and Gatsby Js with WordPress (Headless CMS)."],stack:["React","Laravel","PHP","Wordpress","MySQL","HTML","CSS","JavaScript","Git","Jira"],livePreview:"https://goldengatetechnolabs.com/"},{name:"GEC - Dahod",duration:"January 2022 \u2013 May 2022",post:"Web Developer",description:["Worked on the GEC Dahod website, concentrating on understanding its flow and developing dynamic modules while ensuring the maintenance of dependencies by following directives from the HOD and internal mentor.."],stack:["HTML","CSS","Bootstrap","JavaScript","jQuery","PHP","MySQL"],livePreview:"https://gecdahod.ac.in/"}],j=[{name:"Tic Tac Toe",description:["In this Application players can edit their names, easy to differentiate players turns, dynamically updating after each move,\n      identifies winning as well as draw conditions and declares a winner or draw, stores the history of moves and more."],stack:["React","HTML","CSS"],sourceCode:"https://github.com/Pandey-Narendra/Tic_Tac_toe",livePreview:"https://pandey-narendra.github.io/Tic_Tac_toe/"},{name:"TO-DO-Application",description:["This application serves as a practical tool for users to efficiently manage their tasks. Users can seamlessly create a list of\n      tasks that require completion, and as they accomplish each task, they have the ability to delete it from the list."],stack:["React","HTML","CSS"],sourceCode:"https://github.com/Pandey-Narendra/TO-DO-Application",livePreview:"https://pandey-narendra.github.io/TO-DO-Application/"},{name:"Authentication System",description:["The application\u2019s front-end is developed using React.js and Material UI and the back-end is built on Laravel\u2018s MVC\n      pattern, MySQL which allows register, login and more to manage their profiles through a user-friendly interface."],stack:["React Js","Laravel","Breeze","Inertia Js","MySQL"],sourceCode:"https://github.com/Pandey-Narendra/laravel_React_Inertia"},{name:"Realtime Chat Application",description:["This application is a dynamic communication system developed for users to exchange messages in real-time. Integration of\n      Laravel for the backend, Vue.js for the frontend, MySQL for secure storage of user data and messages, WebSockets\n      for instantaneous client-server communication, and Pusher for efficient message transmission."],stack:["Laravel","Vue js","MySQL","WebSockets","Pusher","Bootstrap"],sourceCode:"https://github.com/Pandey-Narendra/Chat_Application"}],h=["Python","Java","C","HTML","CSS","JavaScript","Bootstrap","Material UI","React","PHP","Laravel","Wordpress","MySQL","Git","Jira","Postman"],b="pandeynarendra7487@mail.com";var m=a(14),p=a.n(m),u=a(12),O=a.n(u),x=a(16),v=a.n(x),g=a(15),f=a.n(g);a(26);var k=()=>{const[{themeName:e,toggleTheme:t}]=Object(s.useContext)(c),[a,n]=Object(s.useState)(!1),r=()=>n(!a);return Object(i.jsxs)("nav",{className:"center nav",children:[Object(i.jsxs)("ul",{style:{display:a?"flex":null},className:"nav__list",children:[d.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#experiences",onClick:r,className:"link link--nav",children:"Experiences"})}):null,j.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#projects",onClick:r,className:"link link--nav",children:"Projects"})}):null,h.length?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#skills",onClick:r,className:"link link--nav",children:"Skills"})}):null,b?Object(i.jsx)("li",{className:"nav__list-item",children:Object(i.jsx)("a",{href:"#contact",onClick:r,className:"link link--nav",children:"Contact"})}):null]}),Object(i.jsx)("button",{type:"button",onClick:t,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===e?Object(i.jsx)(O.a,{}):Object(i.jsx)(p.a,{})}),Object(i.jsx)("button",{type:"button",onClick:r,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:a?Object(i.jsx)(f.a,{}):Object(i.jsx)(v.a,{})})]})};a(30);var y=()=>{const{homepage:e,title:t}=l;return Object(i.jsxs)("header",{className:"header center",children:[Object(i.jsx)("h3",{children:e?Object(i.jsx)("a",{href:e,className:"link",children:t}):t}),Object(i.jsx)(k,{})]})},_=a(8),N=a.n(_),w=a(17),S=a.n(w);a(31);var P=()=>{const{name:e,role:t,description:a,resume:n,social:s}=o;return Object(i.jsxs)("div",{className:"about center",children:[e&&Object(i.jsxs)("h1",{children:["Hi, I am ",Object(i.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(i.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(i.jsx)("p",{className:"about__desc",children:a&&a}),Object(i.jsxs)("div",{className:"about__contact center",children:[n&&Object(i.jsx)("a",{href:n,children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(i.jsxs)(i.Fragment,{children:[s.github&&Object(i.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(i.jsx)(N.a,{})}),s.linkedin&&Object(i.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(i.jsx)(S.a,{})})]})]})]})},C=a(6),L=a.n(C),T=a(18),M=a.n(T);a(33);var J=e=>{let{project:t}=e;return Object(i.jsxs)("div",{className:"project",children:[Object(i.jsxs)("h3",{children:[t.name,t.post&&Object(i.jsx)("p",{children:t.post})]}),t.description.map(((e,t)=>Object(i.jsx)("li",{className:"project__description",children:e},t))),t.stack&&Object(i.jsx)("ul",{className:"project__stack",children:t.stack.map((e=>Object(i.jsx)("li",{className:"project__stack-item",children:e},L()())))}),t.duration&&Object(i.jsx)("p",{children:t.duration}),t.sourceCode&&Object(i.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(i.jsx)(N.a,{})}),t.livePreview&&Object(i.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(i.jsx)(M.a,{})})]})};a(11),a(34);var E=()=>d.length?Object(i.jsxs)("section",{id:"experiences",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Experiences"}),Object(i.jsx)("div",{className:"experiences__grid",children:d.map((e=>Object(i.jsx)(J,{project:e},L()())))})]}):null;var I=()=>j.length?Object(i.jsxs)("section",{id:"projects",className:"section projects",children:[Object(i.jsx)("h2",{className:"section__title",children:"Projects"}),Object(i.jsx)("div",{className:"projects__grid",children:j.map((e=>Object(i.jsx)(J,{project:e},L()())))})]}):null;a(35);var R=()=>h.length?Object(i.jsxs)("section",{className:"section skills",id:"skills",children:[Object(i.jsx)("h2",{className:"section__title",children:"Skills"}),Object(i.jsx)("ul",{className:"skills__list",children:h.map((e=>Object(i.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},L()())))})]}):null,A=a(19),H=a.n(A);a(36);var D=()=>{const[e,t]=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=()=>window.pageYOffset>500?t(!0):t(!1);return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)}),[]),e?Object(i.jsx)("div",{className:"scroll-top",children:Object(i.jsx)("a",{href:"#top",children:Object(i.jsx)(H.a,{fontSize:"large"})})}):null};a(37);var W=()=>b?Object(i.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(i.jsx)("h2",{className:"section__title",children:"Contact"}),Object(i.jsx)("a",{href:"mailto:".concat(b),children:Object(i.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null;a(38);var Q=()=>Object(i.jsx)("footer",{className:"footer",children:Object(i.jsx)("a",{href:"#",className:"link footer__link"})});a(39);var G=()=>{const[{themeName:e}]=Object(s.useContext)(c);return Object(i.jsxs)("div",{id:"top",className:"".concat(e," app"),children:[Object(i.jsx)(y,{}),Object(i.jsxs)("main",{children:[Object(i.jsx)(P,{}),Object(i.jsx)(E,{}),Object(i.jsx)(R,{}),Object(i.jsx)(I,{}),Object(i.jsx)(W,{})]}),Object(i.jsx)(D,{}),Object(i.jsx)(Q,{})]})};a(40);Object(n.render)(Object(i.jsx)(r,{children:Object(i.jsx)(G,{})}),document.getElementById("root"))}],[[42,1,2]]]);
//# sourceMappingURL=main.f73517b5.chunk.js.map