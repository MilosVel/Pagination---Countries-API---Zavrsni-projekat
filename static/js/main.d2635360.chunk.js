(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{44:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c,o,r,a,s,i,u,l=n(1),j=n.n(l),b=n(35),h=n.n(b),d=(n(44),n(3)),O=n.p+"static/media/Mapa.74bd22f6.png",p=n(9),g=n.n(p),f=n(13),m=function(){return g.a.get("https://project-pagination.herokuapp.com/users")},x=n(10),v=n(11),S=v.a.input(c||(c=Object(x.a)(["\ncolor: white;\nfont-size:1em;\nborder-radius: 10px;\nbackground: blue;\nmargin:25px;\n:hover{\nbackground:green;\n}\n"]))),w=v.a.div(o||(o=Object(x.a)(["\ndisplay:flex;\njustify-content:center;\nalign-items:flex-end;\n\n"]))),y=v.a.div(r||(r=Object(x.a)(["\nbackground:green;\ndisplay:flex;\njustify-content:flex-end;\n:hover{\n    background:red;\n    }\nbutton{color: white;\n    font-size:1em;\n    border-radius: 10px;\n    background: blue;\n    :hover{\n    background:red;\n    }\n}\n"]))),P=v.a.button(a||(a=Object(x.a)(["\ncolor: white;\nfont-size:1em;\nborder-radius: 10px;\nbackground: orange;\n\n\n&.transform{\n    background:green;\n}\n}\n"]))),k=v.a.div(s||(s=Object(x.a)(["\nwidth:45rm;\ndisplay: flex;\nflex-wrap: wrap;\njustify-content: space-between;\nbackground-image: url(",");\nalign-items:flex-start;\n"])),O),C=v.a.nav(i||(i=Object(x.a)(["\nwidth:85rm;\nbackground-image: url(",");\ndisplay: flex;\n\njustify-content: space-around;\n"])),O),F=(v.a.img(u||(u=Object(x.a)(["\nwidth:200px;\nheight: 200px;\nborder - radius: 30px;\n"]))),n(0)),E=function(e){var t=e.countries,n=e.country,c=e.single,o=Object(l.useState)([]),r=Object(d.a)(o,2),a=r[0],s=r[1],i=Object(l.useState)(null),u=Object(d.a)(i,2),j=u[0],b=u[1];return c?Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:n.name.common}),Object(F.jsx)("img",{src:n.flags.png,alt:"Flag of ".concat(n.name.common),style:{width:"150px"}}),Object(F.jsxs)("h2",{children:["Basic information about ",n.name.common]}),Object(F.jsxs)("p",{children:[n.name.common," has population of ",n.population," citizens "]}),Object(F.jsxs)("a",{href:n.maps.googleMaps,children:[" You can find ",n.name.common," on google maps"]}),Object(F.jsx)("button",{onClick:function(){n.borders.map((function(e){return g.a.get("https://restcountries.com/v3.1/alpha/".concat(e)).then((function(e){s((function(t){return[].concat(Object(f.a)(t),[e.data[0].name.common])}))}))}))},children:"Click here for borders"}),0!==a.length?Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("p",{children:[" ",n.name.common," has common border with ",a.length," countries:"]}),Object(F.jsxs)("ul",{children:[a.map((function(e,t){return Object(F.jsxs)("li",{children:[t+1,": ",e,"  "]},1e3*Math.random())}))," "]})]}):Object(F.jsx)(F.Fragment,{}),Object(F.jsx)("button",{onClick:function(){console.log(t),b(function(e,t){var n=[];e.forEach((function(e){return n.push(e.population)})),n.sort((function(e,t){if(e>t)return-1}));var c=n.indexOf(t.population),o=[];e.forEach((function(e){return o.push(e.area)})),o.sort((function(e,t){if(e>t)return-1}));var r=o.indexOf(t.area);return Object(F.jsxs)(F.Fragment,{children:[Object(F.jsxs)("p",{children:[" In aspect of population ",t.name.common," is number ",c+1," in the world with ",n[c]," citizens "]}),Object(F.jsxs)("p",{children:["In ascpet of Area ",t.name.common," is number ",r+1," in the world with ",o[r],"    km^2"]})]})}(t,n))},children:"Click to se Rang By Population"}),j?Object(F.jsxs)("div",{children:["    ",j]}):Object(F.jsx)(F.Fragment,{})]}):Object(F.jsxs)("div",{children:[Object(F.jsx)("h2",{children:n.name.common}),Object(F.jsx)("img",{src:n.flags.png,alt:"Flag of ".concat(n.name.common),style:{width:"500px",height:"250px "}})]})},I=function(e){var t=e.countries,n=e.select,c=e.inputSearch,o=e.setOnPage,r=e.countriesAll,a=e.countriesSelect,s=e.change,i=n?Math.ceil(a.length/10):Math.ceil(r.length/10),u=Object(l.useState)([]),j=Object(d.a)(u,2),b=j[0],h=j[1],O=Object(l.useState)(0),p=Object(d.a)(O,2),g=p[0],f=p[1];Object(l.useEffect)((function(){for(var e=[],t=0;t<i;t++)e.push(t);h(e)}),[n,c,t,s]);var m=function(e){f(e);var t=10*e,c=t+10;o(n?a.slice(t,c):r.slice(t,c))};return Object(F.jsxs)("div",{children:[Object(F.jsx)(P,{disabled:g>=b.length-1,onClick:function(){m(g+1)},children:"Next"}),b.map((function(e){return Object(F.jsxs)(P,{className:e==g?"transform":"",onClick:function(){m(e)},children:[" ",e+1," "]},1e6*Math.random())})),Object(F.jsx)(P,{value:"Preview",disabled:g<=0,onClick:function(){m(g-1)},children:" Preview "}),Object(F.jsx)(k,{children:t.map((function(e){return Object(F.jsx)(E,{countries:r,country:e,single:1===t.length},e.name.official)}))})]})},B=function(e){var t=e.setInputSearch;return Object(F.jsx)("input",{type:"search",placeholder:"search by name...",onChange:function(e){t(e.target.value)}})},M=function(e){var t=e.countries,n=e.setSelect,c=e.setOnPage,o=e.setCountriesSelect;return Object(F.jsxs)("select",{onChange:function(e){n(e.target.value),c(t.filter((function(t){return t.region.includes(e.target.value)}))),o(t.filter((function(t){return t.region.includes(e.target.value)}))),e.target.value="-1"},children:[Object(F.jsx)("option",{selected:!0,value:"-1",children:"Izaberi kontinent"}),Object(F.jsx)("option",{value:"",children:"All"}),Object(f.a)(new Set(t.map((function(e){return e.region})))).map((function(e){return Object(F.jsx)("option",{value:e,children:e},e)}))]})},U=function(e){var t=e.countries,n=e.onPage,c=e.setOnPage,o=e.select,r=e.setChange,a=e.change,s=Object(l.useState)(n),i=Object(d.a)(s,2),u=i[0],j=i[1];Object(l.useEffect)((function(){j(0==n.length?Object(f.a)(t):n)}),[a,o,t]);var b=function(e,t){if(e.population>t.population)return-1},h=function(e,t){if(e.population<t.population)return-1};return Object(F.jsx)("div",{children:Object(F.jsxs)("select",{onChange:function(e){console.log(e.target.value),"PopulationFrom9to1"===e.target.value&&c(u.sort(b)),"PopulationFrom1to9"===e.target.value&&c(u.sort(h)),r((function(e){return e+1})),console.log(o),console.log(t.filter((function(e){return e.region.includes(o)}))),e.target.value="-1"},children:[Object(F.jsx)("option",{default:!0,selected:!0,value:"-1",children:" Choose option for sort"}),Object(F.jsx)("option",{value:"PopulationFrom9to1",children:"Sort By Population form Biggest to Lowest"}),Object(F.jsx)("option",{value:"PopulationFrom1to9",children:"Sort By Population form Lowest to Biggest"})]})})},L=n(2),z=function(e){var t=e.loggedIn;return Object(F.jsx)("div",{children:t?Object(F.jsx)(L.a,{to:"/countries"}):Object(F.jsx)(L.a,{to:"/onlyPagination"})})},A=n(14),N=function(e){var t=e.setUser,n=Object(l.useState)([]),c=Object(d.a)(n,2),o=c[0],r=c[1],a=Object(l.useState)(""),s=Object(d.a)(a,2),i=s[0],u=s[1],j=Object(l.useState)(""),b=Object(d.a)(j,2),h=b[0],O=b[1],p=Object(L.g)();return Object(l.useEffect)((function(){m().then((function(e){r(e.data)}))}),[]),Object(F.jsx)(w,{children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault();var n=o.find((function(e){return e.username===i&&e.password===h}));n?(t(n),p.push("/countries")):console.log("neispravni podaci")},children:[Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:"Username"}),Object(F.jsx)("input",{type:"text",placeholder:"type your username...",onChange:function(e){u(e.target.value)}})]}),Object(F.jsxs)("div",{children:[Object(F.jsx)("p",{children:"Password"}),Object(F.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){O(e.target.value)}})]}),Object(F.jsx)(S,{type:"submit",value:"Login"}),Object(F.jsx)("div",{children:Object(F.jsx)(A.b,{to:"/register",children:"Registrujte se"})})]})})},D=function(e){e.setUser;var t=Object(l.useState)(""),n=Object(d.a)(t,2),c=n[0],o=n[1],r=Object(l.useState)(""),a=Object(d.a)(r,2),s=a[0],i=a[1],u=Object(l.useState)(""),j=Object(d.a)(u,2),b=j[0],h=j[1],O=Object(L.g)();return Object(F.jsx)(F.Fragment,{children:Object(F.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={username:c,password:s,email:b};m().then((function(e){var n;e.data.some((function(e){return e.username===c||e.email===b}))?console.log("Postoji korisnik sa istim usernamom i passwordom"):(n=t,g.a.post("http://localhost:3006/users",n)).then((function(e){O.push("/countries")}))}))},children:[Object(F.jsx)("input",{type:"text",placeholder:"Username...",onChange:function(e){o(e.target.value)}}),Object(F.jsx)("input",{type:"email",placeholder:"Email...",onChange:function(e){h(e.target.value)}}),Object(F.jsx)("input",{type:"password",placeholder:"Password...",onChange:function(e){i(e.target.value)}}),Object(F.jsx)(S,{type:"submit",value:"Register"})]})})},J=function(e){var t=e.setUser,n=Object(L.g)();return Object(F.jsx)(y,{children:Object(F.jsx)("button",{onClick:function(){t(null),n.push("/home")},children:"Logout"})})};var R=function(){var e=Object(l.useState)(null),t=Object(d.a)(e,2),n=t[0],c=t[1],o=Object(l.useState)([]),r=Object(d.a)(o,2),a=r[0],s=r[1],i=Object(l.useState)(""),u=Object(d.a)(i,2),j=u[0],b=u[1],h=Object(l.useState)(""),O=Object(d.a)(h,2),p=O[0],f=O[1],m=Object(l.useState)([]),x=Object(d.a)(m,2),v=x[0],S=x[1],w=Object(l.useState)([]),y=Object(d.a)(w,2),P=y[0],k=y[1],E=Object(l.useState)(1),R=Object(d.a)(E,2),T=R[0],G=R[1];function H(e,t){return 0===t.length?Object(F.jsx)(I,{countries:e.filter((function(e){return e.name.common.includes(j)})),select:p,inputSearch:j,setOnPage:S,countriesAll:e,countriesSelect:P,change:T}):Object(F.jsx)(I,{countries:t.filter((function(e){return e.name.common.includes(j)})),select:p,inputSearch:j,setOnPage:S,countriesAll:e,countriesSelect:P,change:T})}return Object(l.useEffect)((function(){g.a.get("https://restcountries.com/v3.1/all").then((function(e){s(e.data)}))}),[]),Object(F.jsxs)(A.a,{children:[Object(F.jsxs)(C,{children:[Object(F.jsx)(A.b,{to:"/",children:Object(F.jsx)("p",{children:"HOME"})}),Object(F.jsx)("p",{children:"NESTO"}),Object(F.jsx)("p",{children:"Jos nesto"}),Object(F.jsx)(A.b,{to:"/login",children:Object(F.jsx)("p",{children:"LOGIN"})})]}),Object(F.jsxs)(L.d,{children:[Object(F.jsx)(L.b,{exact:!0,path:"/",children:Object(F.jsx)(z,{loggedIn:n})}),Object(F.jsxs)(L.b,{exact:!0,path:"/countries",children:[Object(F.jsx)(J,{setUser:c}),Object(F.jsx)(M,{countries:a,setSelect:f,setOnPage:S,setCountriesSelect:k,setChange:G}),Object(F.jsx)(B,{setInputSearch:b}),Object(F.jsx)(U,{countries:a,onPage:v,setOnPage:S,select:p,setSelect:f,setChange:G,change:T}),H(a,v)]}),Object(F.jsx)(L.b,{exact:!0,path:"/onlyPagination",children:H(a,v)}),Object(F.jsx)(L.b,{exact:!0,path:"/login",children:Object(F.jsx)(N,{setUser:c})}),Object(F.jsx)(L.b,{exact:!0,path:"/register",children:Object(F.jsx)(D,{setUser:c})})]})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,69)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};h.a.render(Object(F.jsx)(j.a.StrictMode,{children:Object(F.jsx)(R,{})}),document.getElementById("root")),T()}},[[68,1,2]]]);
//# sourceMappingURL=main.d2635360.chunk.js.map