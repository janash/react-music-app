(this["webpackJsonpreact-music-app"]=this["webpackJsonpreact-music-app"]||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(3),c=n.n(a),r=n(12),i=n.n(r),s=n(4),o=n.n(s),l=n(6),u=n(2),d=n(8),j=n(0),p=function(e){var t=e.currentSong,n=e.isPlaying;return Object(j.jsxs)("div",{className:"song-container",children:[Object(j.jsx)("img",{src:t.cover,alt:t.name,className:n?"rotateSong":""}),Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h3",{children:t.artist})]})},b=n(7),h=n(5),g=function(e){var t=e.isPlaying,n=e.setisPlaying,a=e.audioRef,c=e.setsongInfo,r=e.songInfo,i=e.songs,s=e.currentSong,d=e.setcurrentSong,p=e.setSongs,g=function(e){var t=i.map((function(t){return s.id===e.id?Object(u.a)(Object(u.a)({},t),{},{active:!0}):Object(u.a)(Object(u.a)({},t),{},{active:!1})}));p(t)};function m(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)}var f=function(){var e=Object(l.a)(o.a.mark((function e(n){var c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=i.findIndex((function(e){return e.id===s.id})),"skip-forward"!==n){e.next=7;break}return e.next=4,d(i[(c+1)%i.length]);case 4:g(i[(c+1)%i.length]),e.next=11;break;case 7:if("skip-back"!==n){e.next=11;break}return e.next=10,d(i[c-1]||i[i.length-1]);case 10:g(i[c-1]||i[i.length-1]);case 11:t&&a.current.play();case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v={transform:"translateX(".concat(r.animationPertantage,"%)")};return Object(j.jsxs)("div",{className:"player-container",children:[Object(j.jsxs)("div",{className:"time-control",children:[Object(j.jsx)("p",{style:{width:"7ch"},children:m(r.currentTime)}),Object(j.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(s.color[0],", ").concat(s.color[1])},className:"track",children:[Object(j.jsx)("input",{type:"range",min:0,max:r.duration||0,value:r.currentTime,onChange:function(e){a.current.currentTime=e.target.value,console.log(e.target.value),c(Object(u.a)(Object(u.a)({},r),{},{currentTime:e.target.value}))}}),Object(j.jsx)("div",{style:v,className:"animate-track"})]}),Object(j.jsx)("p",{style:{width:"5ch"},children:r.duration?m(r.duration):"0:00"})]}),Object(j.jsxs)("div",{className:"player-control",children:[Object(j.jsx)(b.a,{onClick:function(){return f("skip-back")},className:"skip-back",size:"2x",icon:h.a}),Object(j.jsx)(b.a,{onClick:function(){console.log(a),t?(a.current.pause(),n(!t)):(a.current.play(),n(!t))},className:"play",size:"2x",icon:t?h.d:h.e}),Object(j.jsx)(b.a,{onClick:function(){return f("skip-forward")},className:"skip-forward",size:"2x",icon:h.b})]})]})},m=function(e){var t=e.songs,n=e.song,a=e.setcurrentSong,c=e.audioRef,r=e.isPlaying,i=e.setSongs,s=function(){var e=Object(l.a)(o.a.mark((function e(){var s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=n,e.next=3,a(s);case 3:console.log(s),l=t.map((function(e){return s===e?Object(u.a)(Object(u.a)({},e),{},{active:!0}):Object(u.a)(Object(u.a)({},e),{},{active:!1})})),i(l),a(s),r&&c.current.play();case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{onClick:s,className:"library-song ".concat(n.active?"selected":""),children:[Object(j.jsx)("img",{src:n.cover,alt:n.name}),Object(j.jsxs)("div",{className:"song-description",children:[Object(j.jsx)("h3",{children:n.name}),Object(j.jsx)("h4",{children:n.artist})]})]})},f=function(e){var t=e.songs,n=e.setcurrentSong,a=e.audioRef,c=e.isPlaying,r=e.setsongInfo,i=e.setSongs,s=e.libraryStatus;return Object(j.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(j.jsx)("h2",{children:"Library"}),Object(j.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(j.jsx)(m,{id:e.id,song:e,setcurrentSong:n,audioRef:a,isPlaying:c,setsongInfo:r,songs:t,setSongs:i},e.id)}))})]})},v=function(e){var t=e.setLibraryStatus,n=e.libraryStatus;return Object(j.jsxs)("nav",{children:[Object(j.jsx)("h1",{children:"React Music App"}),Object(j.jsxs)("button",{onClick:function(){t(!n)},children:["Library",Object(j.jsx)(b.a,{className:"icon",icon:h.c})]})]})},O=(n(24),n(27)),x=n.p+"static/media/a.4565ceda.jpg",y=n.p+"static/media/b.2ffcbcbb.jpg",S=n.p+"static/media/c.8d46a55f.jpg",k=n.p+"static/media/d.357d7a55.jpg",N=n.p+"static/media/e.33723f04.jpg";var w=function(){return[{name:"Beaver Creek",cover:x,artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10075",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!0},{name:"Daylight",cover:y,artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9272",color:["#DE954A","#CA0E03"],id:Object(O.a)(),active:!1},{name:"Keep Going",cover:S,artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9222",color:["#93917A","#006C24"],id:Object(O.a)(),active:!1},{name:"Swimming",cover:N,artist:"Sleepy Fish",audio:"https://mp3.chillhop.com/serve.php/?mp3=3527",color:["#CEEAF1","#206F93"],id:Object(O.a)(),active:!1},{name:"Nightfall",cover:y,artist:"Aiguille",audio:"https://mp3.chillhop.com/serve.php/?mp3=9148",color:["#DE954A","#CA0E03"],id:Object(O.a)(),active:!1},{name:"Reflection",cover:S,artist:"Sw\xf8rn",audio:"https://mp3.chillhop.com/serve.php/?mp3=9228",color:["#93917A","#006C24"],id:Object(O.a)(),active:!1},{name:"Under the City Stars",cover:k,artist:"Aso, Middle School, Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=10074",color:["#205950","#2ab3bf"],id:Object(O.a)(),active:!1}]};var C=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(w()),n=Object(d.a)(t,2),c=n[0],r=n[1],i=Object(a.useState)(c[0]),s=Object(d.a)(i,2),b=s[0],h=s[1],m=Object(a.useState)(!1),O=Object(d.a)(m,2),x=O[0],y=O[1],S=Object(a.useState)({currentTime:0,duration:0,animationPertantage:0}),k=Object(d.a)(S,2),N=k[0],C=k[1],A=Object(a.useState)(!1),P=Object(d.a)(A,2),I=P[0],M=P[1],T=function(e){console.log(e);var t=e.target.currentTime,n=e.target.duration;console.log(t,n);var a=Math.round(t),c=Math.round(n),r=Math.round(a/c*100);console.log("check here",a,c,r),C(Object(u.a)(Object(u.a)({},N),{},{currentTime:t,duration:n,animationPertantage:r}))},R=function(){var t=Object(l.a)(o.a.mark((function t(){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.findIndex((function(e){return e.id===b.id})),t.next=3,h(c[n-1]||c[c.length-1]);case 3:x&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"App ".concat(I?"library-active":""),children:[Object(j.jsx)(v,{setLibraryStatus:M,libraryStatus:I}),Object(j.jsx)(p,{currentSong:b,isPlaying:x}),Object(j.jsx)(g,{audioRef:e,currentSong:b,setcurrentSong:h,isPlaying:x,setisPlaying:y,setsongInfo:C,songInfo:N,songs:c,setSongs:r}),Object(j.jsx)(f,{songs:c,setcurrentSong:h,audioRef:e,isPlaying:x,setsongInfo:C,setSongs:r,libraryStatus:I}),Object(j.jsx)("audio",{onTimeUpdate:T,onLoadedMetadata:T,ref:e,src:b.audio,onEnded:R})]})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(C,{})}),document.getElementById("root")),A()}},[[25,1,2]]]);
//# sourceMappingURL=main.60d1cc53.chunk.js.map