parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"qJUB":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.refs=void 0;const e={body:document.querySelector("body"),homeButton:document.querySelector("#home_btn"),logo:document.querySelector("#header-logo"),libraryButton:document.querySelector("#library_btn"),searchForm:document.querySelector("#search-form"),filmGallery:document.querySelector(".gallery__list"),filmCardModalWrap:document.querySelector("#filmCardModalWrap"),pagination:document.querySelector("#pagination"),watched:document.querySelector("#watched"),queue:document.querySelector("#queue"),spanToggle:document.querySelector(".footer-team-popup"),animeEl:document.querySelectorAll(".anime"),headerContainer:document.querySelector("#header"),homeCurrentPage:document.querySelector("#home-current-page"),libraryCurrentPage:document.querySelector("#library-current-page"),hederLibraryPage:document.querySelector("#header-library"),modalCloseButton:document.querySelector(".modal-close_button"),modalCardDetail:document.querySelector(".film-detail-modal"),backdrop:document.querySelector(".backdrop"),libraryWatchedButton:document.querySelector("#library-watched__button"),libraryQueueButton:document.querySelector("#library-queue__button"),header:document.querySelector(".page-header"),clearLibraryBtn:document.querySelector(".clear-lbr")};exports.refs=e;
},{}],"BpRJ":[function(require,module,exports) {
"use strict";var t=require("../getRefs");const e=[...t.refs.animeEl];function n(){r.restart(),e.map(t=>t.classList.remove("anime-pointer-off")),e.map(t=>t.classList.add("anime-pointer-on")),setTimeout(()=>{t.refs.body.addEventListener("click",s)},10)}function a(){i.restart(),e.map(t=>t.classList.remove("anime-pointer-on")),e.map(t=>t.classList.add("anime-pointer-off"))}function s(e){t.refs.spanToggle.classList.contains("cls-anime")?e.target.classList.contains("student")||(a(),t.refs.spanToggle.classList.remove("cls-anime"),t.refs.body.removeEventListener("click",s)):t.refs.body.removeEventListener("click",s)}document.querySelector(".footer-team-popup").onclick=function(e){t.refs.spanToggle.classList.toggle("cls-anime"),t.refs.spanToggle.classList.contains("cls-anime")?n():a()};const r=anime({targets:".footer-wrap .anime",duration:500,easing:"spring",translateY:[0,function(t,e){return t.getAttribute("data-y")+"px"}],scale:[0,20],autoplay:!1,opacity:1,translateX:[0,function(t){return t.getAttribute("data-x")}],delay:function(){return anime.random(400,0)}}),i=anime({targets:".footer-wrap .anime",duration:500,easing:"spring",translateY:[function(t,e){return t.getAttribute("data-y")+"px"},0],scale:[20,0],autoplay:!1,translateX:[function(t){return t.getAttribute("data-x")},0],delay:function(){return anime.random(0,400)}});
},{"../getRefs":"qJUB"}]},{},["BpRJ"], null)
//# sourceMappingURL=/Filmoteka/modal-footer-GoIT-Students.261ce95e.js.map