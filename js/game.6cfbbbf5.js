(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"05ab":function(t,s,e){},"0a2c":function(t,s,e){},1319:function(t,s,e){t.exports=e.p+"img/kumamon.de3002f6.png"},"1b43":function(t,s,e){"use strict";var n=e("310f"),a=e.n(n);a.a},"310f":function(t,s,e){},3157:function(t,s,e){},"580a":function(t,s,e){"use strict";var n=e("eef2"),a=e.n(n);a.a},"6e57":function(t,s,e){"use strict";var n=e("05ab"),a=e.n(n);a.a},"7d36":function(t,s,e){"use strict";e.r(s);var n=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("transition",{attrs:{mode:"out-in"}},[t.score.success===t.numberOfQuestions?e("succeeded",{attrs:{test:t.test}}):t.score.failed>0?e("failed",{attrs:{test:t.test}}):t._e()],1),t.score.success!==t.numberOfQuestions&&0===t.score.failed?[e("score",{staticClass:"score-container"}),e("flag",{staticClass:"flag-container",attrs:{code:t.currentFlag.code}}),e("guessing-buttons",{staticClass:"buttons-container",attrs:{flags:t.currentOptions,"correct-flag":t.currentFlag,"current-guess":t.currentGuess,"just-guessed":t.justGuessed},on:{guess:t.guessFlag},nativeOn:{click:function(s){t.failedIcon(t.currentFlag)}}})]:t._e()],2)},a=[],r=e("be94"),c=(e("cadf"),e("551c"),e("097d"),e("2f62")),i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"content_wrapper"},[e("i",{class:t.code})])},o=[],u=(e("3846"),{name:"Flag",props:{code:String},methods:{},computed:Object(r["a"])({},Object(c["c"])({flags:function(t){var s=t.flags;return s}}))}),l=u,d=(e("ed38"),e("2877")),g=Object(d["a"])(l,i,o,!1,null,"1b7211f7",null);g.options.__file="Flag.vue";var p=g.exports,b=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("md-content",t._l(t.flags,function(s){return e("md-button",{key:"guessbutton-"+s.code,staticClass:"btn_wording",class:{correct:t.justGuessed&&t.correctFlag.code===s.code,wrong:t.justGuessed&&t.currentGuess===s.code&&t.correctFlag.code!==s.code},attrs:{disabled:t.justGuessed},on:{click:function(e){t.onClick(s.code)}}},[t._v(t._s(s.name))])}))},f=[],h={name:"GuessingButtons",props:{flags:Array,justGuessed:Boolean,currentGuess:String,correctFlag:Object},methods:{onClick:function(t){this.$emit("guess",t)}}},v=h,_=(e("1b43"),Object(d["a"])(v,b,f,!1,null,"5168dec0",null));_.options.__file="GuessingButtons.vue";var m=_.exports,w=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("md-table",[e("md-table-row",[e("md-table-head",{attrs:{"md-numeric":""}},[t._v("已連續答對")])],1),e("md-table-row",[e("md-table-head",{attrs:{"md-numeric":""}},[t._v(t._s(t.score.total))])],1)],1)},F=[],C={name:"Score",computed:Object(r["a"])({ratio:function(){return this.score.total>0?(100*this.score.success/this.score.total).toFixed(2):"0.00"}},Object(c["c"])({score:function(t){var s=t.score;return s}}))},O=C,j=(e("c390"),Object(d["a"])(O,w,F,!1,null,null,null));j.options.__file="Score.vue";var k=j.exports,E=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"wrapper"},[n("p",{staticClass:"score_wording"},[t._v(t._s(t.score.success)+" / "+t._s(t.numberOfQuestions))]),n("div",{staticClass:"slogan"},[0<=t.score.success&&t.score.success<=10?n("span",[t._v(t._s(t.slogan.low))]):t._e(),10<t.score.success&&t.score.success<=20?n("span",[t._v(t._s(t.slogan.medium))]):t._e(),20<t.score.success?n("span",[t._v(t._s(t.slogan.high))]):t._e()]),n("md-button",{staticClass:"restart_btn",attrs:{to:"/"}},[t._v("Restart")]),n("div",{staticClass:"failed_wrapper"},[n("span",[t._v("還有")]),n("i",{class:t.test.code}),n("span",[t._v("\n      我是 "),n("span",{staticClass:"keyword"},[t._v(t._s(t.test.name)+" ")]),t._v("啦\n    ")])]),n("div",{staticClass:"social_links"},[n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}})])]),t._v("Facebook\n      ")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://twitter.com/intent/tweet/?text=Taiwan%20Icon%20Font%20%E5%8F%B0%E7%81%A3%E5%9C%96%E6%A8%99%E5%AD%97%E5%9E%8B%E5%B0%8F%E9%81%8A%E6%88%B2&url=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Twitter"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}})])]),t._v("Twitter\n      ")])])]),n("img",{attrs:{src:e("1319"),alt:""}})],1)},G=[],x={name:"Failed",props:{test:{type:Object,default:function(){return{}}}},data:function(){return{slogan:{low:"已經是 .... 極限了嗎？",medium:"兄 day 加油好嗎？",high:"台灣還是很不錯的對吧"}}},computed:Object(r["a"])({},Object(c["c"])({score:function(t){var s=t.score;return s},numberOfQuestions:function(t){var s=t.numberOfQuestions;return s},currentFlag:function(t){var s=t.currentFlag;return s}}))},B=x,A=(e("580a"),Object(d["a"])(B,E,G,!1,null,"1016a5db",null));A.options.__file="Failed.vue";var Q=A.exports,S=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"wrapper"},[n("p",{staticClass:"score_wording"},[t._v(t._s(t.score.success)+" / "+t._s(t.numberOfQuestions))]),n("div",{staticClass:"slogan"},[n("span",[t._v(t._s(t.slogan))])]),n("md-button",{staticClass:"restart_btn",attrs:{to:"/"}},[t._v("Restart")]),n("div",{staticClass:"social_links"},[n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Facebook"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}})])]),t._v("Facebook\n      ")])]),n("a",{staticClass:"resp-sharing-button__link",attrs:{href:"https://twitter.com/intent/tweet/?text=Taiwan%20Icon%20Font%20%E5%8F%B0%E7%81%A3%E5%9C%96%E6%A8%99%E5%AD%97%E5%9E%8B%E5%B0%8F%E9%81%8A%E6%88%B2&url=https%3A%2F%2Fweichiachang.github.io%2Ftwicon-game%2F%23%2F",target:"_blank",rel:"noopener","aria-label":"Twitter"}},[n("div",{staticClass:"resp-sharing-button resp-sharing-button--twitter resp-sharing-button--medium"},[n("div",{staticClass:"resp-sharing-button__icon resp-sharing-button__icon--solid",attrs:{"aria-hidden":"true"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"}},[n("path",{attrs:{d:"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}})])]),t._v("Twitter\n      ")])])]),n("img",{attrs:{src:e("1319"),alt:""}})],1)},$=[],y={name:"Failed",props:{test:{type:Object,default:function(){return{}}}},data:function(){return{slogan:"哇係正港歹丸郎啦！"}},computed:Object(r["a"])({},Object(c["c"])({score:function(t){var s=t.score;return s},numberOfQuestions:function(t){var s=t.numberOfQuestions;return s},currentFlag:function(t){var s=t.currentFlag;return s}}))},M=y,R=(e("c50b"),Object(d["a"])(M,S,$,!1,null,"4fab87ea",null));R.options.__file="Succeeded.vue";var T=R.exports,I={name:"GameInfinite",data:function(){return{test:{}}},mounted:function(){this.setGameMode("infinite"),this.getRandomFlag(),this.getRandomOptions()},components:{Flag:p,GuessingButtons:m,Score:k,Failed:Q,Succeeded:T},methods:Object(r["a"])({},Object(c["b"])(["guessFlag","setGameMode","getRandomFlag","getRandomOptions"]),{failedIcon:function(t){this.test=t}}),computed:Object(r["a"])({},Object(c["c"])({currentFlag:function(t){var s=t.currentFlag;return s},currentOptions:function(t){var s=t.currentOptions;return s},justGuessed:function(t){var s=t.justGuessed;return s},currentGuess:function(t){var s=t.currentGuess;return s},score:function(t){var s=t.score;return s},numberOfQuestions:function(t){var s=t.numberOfQuestions;return s}}))},z=I,D=(e("6e57"),Object(d["a"])(z,n,a,!1,null,"edd93210",null));D.options.__file="Game.vue";s["default"]=D.exports},baa5:function(t,s,e){},c390:function(t,s,e){"use strict";var n=e("0a2c"),a=e.n(n);a.a},c50b:function(t,s,e){"use strict";var n=e("3157"),a=e.n(n);a.a},ed38:function(t,s,e){"use strict";var n=e("baa5"),a=e.n(n);a.a},eef2:function(t,s,e){}}]);
//# sourceMappingURL=game.6cfbbbf5.js.map