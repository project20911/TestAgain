(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{320:function(t,e,o){"use strict";o.d(e,"a",(function(){return r}));var r,n=o(13);!function(t){t.foryou="bstar-web.homepage.for-you.all",t.trending="bstar-web.homepage.top-list.all",t.animeIndex="bstar-web.index-page.0.0",t.videoEp="bstar-web.pgc-video-detail.episode.0",t.videoOgvRecommend="bstar-web.pgc-video-detail.related-recommend.all",t.share="share",t.searchResult="bstar-web.search-result.0.0",t.history="bstar-web.my-history.0.0"}(r||(r={}));var i={from:r,clickStyles:function(t){Object(n.a)("ogv_style_click",{style:t})},clickEpCard:function(){Object(n.a)("episode_card_click")},clickSection:function(){Object(n.a)("season_switch_click")},clickSeries:function(){Object(n.a)("series_click")},clickSeasonTitle:function(t){Object(n.a)("season_big_title_click",t)},clickOgvRecommend:function(t){Object(n.a)("ogv_related_recommend_card_click",t)},clickUgcRecommend:function(t){Object(n.a)("ugc_related_recommend_card_click",t)}};e.b=i},321:function(t,e,o){"use strict";var r,n=o(13);!function(t){t.homePopular="bstar-web.homepage.ugc.all",t.videoTab="bstar-web.video-tab.0.0",t.ogvVideoUgcRecommend="bstar-web.pgc-video-detail.related-recommend.all",t.ugcVideoRelatedRecommend="bstar-web.ugc-video-detail.related-recommend.all",t.ugcVideoTopListRecommend="bstar-web.ugc-video-detail.top-list.all",t.share="share",t.searchResult="bstar-web.search-result.0.0",t.history="bstar-web.my-history.0.0",t.space="bstar-web.personal-space.0.0"}(r||(r={}));var i={from:r,clickUp:function(t){Object(n.a)("up_icon_click",t)},clickUpFollow:function(t){Object(n.a)("up_follow_click",t)},clickRelatedRecommend:function(t){Object(n.a)("related_recommend_card_click",t)},clickTopListRecommend:function(t){Object(n.a)("topList_card_click",t)}};e.a=i},332:function(t,e,o){"use strict";var r=o(5),n=o.n(r),i=o(10),c=o.n(i),a=o(7),s=o.n(a),l=o(8),u=o.n(l),d=o(3),f=o.n(d),p=o(6),v=o.n(p),h=o(0),y=o(27),b=o(16);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=f()(t);if(e){var n=f()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u()(this,o)}}var g=function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===("undefined"==typeof Reflect?"undefined":v()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},_=function(t){s()(o,t);var e=m(o);function o(){return n()(this,o),e.apply(this,arguments)}return c()(o,[{key:"darkModeClass",get:function(){return this.dark?"horizontal-card-dark":""}},{key:"showGradientMask",get:function(){var t=["coverBottomLeft","coverBottomRight"];return Object.keys(this.$slots).filter((function(e){return t.includes(e)})).length>0}},{key:"sizeClass",get:function(){return""!==this.size?"horizontal-card-".concat(this.size):""}},{key:"jumpUrl",get:function(){if(this.videoId)return"ugc"===this.type?Object(y.e)("ugc",{aID:String(this.videoId)},this.sLocale):"ogv"===this.type?Object(y.e)("ogv",{sId:String(this.videoId)},this.sLocale):void 0}},{key:"spaceUrl",get:function(){if(this.userId)return"/".concat(this.sLocale,"/space/").concat(this.userId)}},{key:"onClickCover",value:function(){this.$emit("click",{type:"cover"})}},{key:"onClickAvatar",value:function(){this.$emit("click",{type:"avatar"})}},{key:"onClickTitle",value:function(){this.$emit("click",{type:"title"})}},{key:"onClickDesc",value:function(){this.$emit("click",{type:"desc"})}},{key:"onCoverError",value:function(t){t.target&&(t.target.src=this.errorCover)}}]),o}(h.f);g([Object(h.d)(String)],_.prototype,"cover",void 0),g([Object(h.d)(String)],_.prototype,"loadingCover",void 0),g([Object(h.d)(String)],_.prototype,"title",void 0),g([Object(h.d)(String)],_.prototype,"desc",void 0),g([Object(h.d)(String)],_.prototype,"avatar",void 0),g([Object(h.d)(Boolean)],_.prototype,"ogvAvatar",void 0),g([Object(h.d)(String)],_.prototype,"videoId",void 0),g([Object(h.d)(String)],_.prototype,"userId",void 0),g([Object(h.d)(String)],_.prototype,"alt",void 0),g([Object(h.d)(String)],_.prototype,"type",void 0),g([Object(h.d)({default:"",type:String})],_.prototype,"size",void 0),g([Object(h.d)({default:0,type:Number})],_.prototype,"watched",void 0),g([Object(h.d)({default:o(172),type:String})],_.prototype,"errorCover",void 0),g([Object(h.d)({default:!1,type:Boolean})],_.prototype,"lazyLoad",void 0),g([Object(h.d)({default:!1,type:Boolean})],_.prototype,"dark",void 0),g([Object(h.d)({default:!0,type:Boolean})],_.prototype,"showAvatar",void 0),g([Object(b.b)("sLocale")],_.prototype,"sLocale",void 0);var k=_=g([h.a],_),O=(o(353),o(9)),j=Object(O.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["horizontal-card",t.darkModeClass,t.sizeClass]},[o("a",{staticClass:"seo-link--block",attrs:{href:t.jumpUrl},on:{click:function(t){return t.preventDefault()}}},[o("div",{staticClass:"horizontal-card__body",on:{click:t.onClickCover}},[o("div",{class:["card-cover-layer",{"has-mask":t.showGradientMask}]},[o("div",{staticClass:"card-cover-layer__topleft"},[t._t("coverTopLeft")],2),t._v(" "),o("div",{staticClass:"card-cover-layer__topright"},[t._t("coverTopRight")],2),t._v(" "),o("div",{staticClass:"card-cover-layer__bottomleft"},[t._t("coverBottomLeft")],2),t._v(" "),o("div",{staticClass:"card-cover-layer__bottomright"},[t._t("coverBottomRight")],2)]),t._v(" "),o("div",{staticClass:"horizontal-card__watched",style:{width:t.watched+"%"}}),t._v(" "),o("img",{attrs:{loading:t.lazyLoad?"lazy":"auto",src:t.cover,alt:t.alt||t.title},on:{error:t.onCoverError}})])]),t._v(" "),o("div",{staticClass:"horizontal-card__foot"},[t.showAvatar?o("div",{class:{"horizontal-card__avatar":!0,"horizontal-card__avatar--square":t.ogvAvatar},on:{click:t.onClickAvatar}},[o("a",{staticClass:"seo-link--block",attrs:{href:t.spaceUrl},on:{click:function(t){return t.preventDefault()}}},[o("img",{attrs:{loading:t.lazyLoad?"lazy":"auto",src:t.avatar,alt:"avatar"},on:{error:t.onCoverError}})])]):t._e(),t._v(" "),o("div",{staticClass:"horizontal-card__info"},[o("p",{staticClass:"horizontal-card__info_title",on:{click:t.onClickTitle}},[t._t("title",(function(){return[t._v("\n          "+t._s(t.title)+"\n        ")]}),{title:t.title})],2),t._v(" "),o("p",{staticClass:"horizontal-card__info_desc",on:{click:t.onClickDesc}},[t._t("desc",(function(){return[t._v("\n          "+t._s(t.desc)+"\n        ")]}),{desc:t.desc})],2)]),t._v(" "),o("div",{staticClass:"horizontal-card__operate"},[t._t("extra")],2)])])}),[],!1,null,null,null);e.a=j.exports},333:function(t,e,o){},337:function(t,e,o){"use strict";var r=o(5),n=o.n(r),i=o(10),c=o.n(i),a=o(7),s=o.n(a),l=o(8),u=o.n(l),d=o(3),f=o.n(d),p=o(6),v=o.n(p),h=o(0);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=f()(t);if(e){var n=f()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u()(this,o)}}var b=function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===("undefined"==typeof Reflect?"undefined":v()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},m=function(t){s()(o,t);var e=y(o);function o(){return n()(this,o),e.apply(this,arguments)}return c()(o,[{key:"sizeClass",get:function(){return""!==this.size?"widgets-total-time-".concat(this.size):""}},{key:"styleVar",get:function(){return{"--right":this.right+"px","--bottom":this.bottom+"px","--fontsize":this.fontSize+"px"}}}]),o}(h.f);b([Object(h.d)(String)],m.prototype,"time",void 0),b([Object(h.d)({default:"",type:String})],m.prototype,"size",void 0),b([Object(h.d)({type:Number,default:10})],m.prototype,"right",void 0),b([Object(h.d)({type:Number,default:10})],m.prototype,"bottom",void 0),b([Object(h.d)({type:Number,default:12})],m.prototype,"fontSize",void 0);var g=m=b([h.a],m),_=(o(391),o(9)),k=Object(_.a)(g,(function(){var t=this.$createElement;return(this._self._c||t)("div",{class:["widgets-total-time",this.sizeClass],style:this.styleVar},[this._v("\n  "+this._s(this.time)+"\n")])}),[],!1,null,null,null);e.a=k.exports},341:function(t,e,o){"use strict";var r=o(5),n=o.n(r),i=o(10),c=o.n(i),a=o(7),s=o.n(a),l=o(8),u=o.n(l),d=o(3),f=o.n(d),p=o(6),v=o.n(p),h=o(0),y=o(17);function b(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=f()(t);if(e){var n=f()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u()(this,o)}}var m=function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===("undefined"==typeof Reflect?"undefined":v()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},g={show:!1,text:"View All"},_=function(t){s()(r,t);var e=b(r);function r(){var t;return n()(this,r),(t=e.apply(this,arguments)).iconMore=o(354),t.isH5=!1,t}return c()(r,[{key:"updateXlScreen",value:function(t){this.isH5=t[0]===y.c.DEFAULT[0]}},{key:"handleClick",value:function(t){t.preventDefault(),this.$emit("click")}}]),r}(h.f);m([Object(h.d)({type:String,required:!0})],_.prototype,"title",void 0),m([Object(h.d)({type:String,required:!1})],_.prototype,"moreUrl",void 0),m([Object(h.d)({type:Boolean,default:!1})],_.prototype,"dark",void 0),m([Object(h.d)({type:Object,default:function(){return g}})],_.prototype,"moreButton",void 0),m([Object(h.d)({type:String,default:""})],_.prototype,"customClass",void 0),m([Object(h.g)("$store.state.layoutNums",{immediate:!0,deep:!0})],_.prototype,"updateXlScreen",null);var k=_=m([h.a],_),O=(o(506),o(9)),j=Object(O.a)(k,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:["category-title",{"category-title-dark":t.dark},t.customClass]},[o("h3",{staticClass:"category-title__text"},[t._v("\n    "+t._s(t.title)+"\n  ")]),t._v(" "),t.moreButton.show?o("a",{staticClass:"category-title__more seo-link",attrs:{href:t.moreUrl},on:{click:t.handleClick}},[t._t("moreButton",(function(){return[o("span",{directives:[{name:"show",rawName:"v-show",value:!t.isH5,expression:"!isH5"}]},[t._v("\n        "+t._s(t.moreButton.text||t.$t("home.subTitle.viewAll"))+"\n      ")]),t._v(" "),o("img",{staticClass:"category-title__icon",attrs:{src:t.iconMore}})]}))],2):t._e()])}),[],!1,null,"0730c448",null);e.a=j.exports},345:function(t,e,o){"use strict";var r=o(5),n=o.n(r),i=o(10),c=o.n(i),a=o(7),s=o.n(a),l=o(8),u=o.n(l),d=o(3),f=o.n(d),p=o(6),v=o.n(p),h=o(0),y=o(74),b=null,m=!0,g={data:function(){return{scrollBottomContinue:!1,isAtBottom:!1,isAtTop:!0}},unmounted:function(){window.removeEventListener("scroll",this.handleWindowScroll)},methods:{initBindScroll:function(){b=document.body,window.addEventListener("scroll",this.handleWindowScroll)},handleWindowScroll:function(){if(m){m=!1;var t=document.documentElement.clientHeight,e=b.getBoundingClientRect(),o=e.bottom,r=e.top,n=o<=t+150;this.scrollBottomContinue=!this.scrollBottomContinue&&(this.isAtBottom&&n),this.isAtBottom=n,this.isAtTop=r>0&&r<=100,setTimeout((function(){m=!0}),50)}}}};function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var o,r=f()(t);if(e){var n=f()(this).constructor;o=Reflect.construct(r,arguments,n)}else o=r.apply(this,arguments);return u()(this,o)}}var k=function(t,e,o,r){var n,i=arguments.length,c=i<3?e:null===r?r=Object.getOwnPropertyDescriptor(e,o):r;if("object"===("undefined"==typeof Reflect?"undefined":v()(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,r);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(c=(i<3?n(c):i>3?n(e,o,c):n(e,o))||c);return i>3&&c&&Object.defineProperty(e,o,c),c},O=function(t){s()(o,t);var e=_(o);function o(){var t;return n()(this,o),(t=e.apply(this,arguments)).hasLoadBefore=!1,t.observer=null,t.options={threshold:1},t}return c()(o,[{key:"requestMore",value:function(t){!this.loading&&this.hasMore&&t&&this.$emit("reach-bottom")}},{key:"requestContinueMore",value:function(t){!this.loading&&this.hasMore&&t&&this.$emit("reach-bottom")}},{key:"isShowNoMore",get:function(){return this.hasLoadBefore&&!this.hasMore}},{key:"canUseObserver",get:function(){return"undefined"!=typeof window&&("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype)}},{key:"mounted",value:function(){var t=this;this.canUseObserver?(this.observer=new IntersectionObserver(this.check,this.options),this.$nextTick((function(){var e=t.$refs.bottomMarking;t.observer.observe(e)}))):this.initBindScroll()}},{key:"unmounted",value:function(){this.observer&&(this.observer.disconnect(),this.observer=null)}},{key:"check",value:function(t){var e=this;!this.loading&&this.hasMore&&t[0].intersectionRatio>=1&&setTimeout((function(){e.hasLoadBefore=!0,e.$emit("reach-bottom")}),this.delay)}}]),o}(h.f);k([Object(h.d)({type:Number,default:200})],O.prototype,"delay",void 0),k([Object(h.d)({type:Boolean,default:!1})],O.prototype,"disable",void 0),k([Object(h.d)({type:Boolean,default:!1})],O.prototype,"loading",void 0),k([Object(h.d)({type:Boolean,default:!1})],O.prototype,"hasMore",void 0),k([Object(h.d)({type:Boolean,default:!0})],O.prototype,"showNoMore",void 0),k([Object(h.d)({type:Boolean,default:!1})],O.prototype,"dark",void 0),k([Object(h.g)("isAtBottom")],O.prototype,"requestMore",null),k([Object(h.g)("scrollBottomContinue")],O.prototype,"requestContinueMore",null);var j=O=k([Object(h.a)({mixins:[g],components:{Loading:y.a}})],O),w=(o(520),o(9)),R=Object(w.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"scroll-loading"},[o("div",{ref:"bottomMarking",staticClass:"scroll-loading__bottom"}),t._v(" "),t._t("loading",(function(){return[o("loading",{attrs:{"is-loading":t.loading,dark:t.dark}})]})),t._v(" "),t.showNoMore&&t.isShowNoMore?t._t("end",(function(){return[o("p",{staticClass:"scroll-loading__end"},[t._v("\n      "+t._s(t.$t("history.noMore"))+"\n    ")])]})):t._e()],2)}),[],!1,null,"19079da9",null);e.a=R.exports},353:function(t,e,o){"use strict";o(333)},354:function(t,e,o){t.exports=o.p+"assets/icon_arrow_right.png"},355:function(t,e,o){},391:function(t,e,o){"use strict";o(355)},431:function(t,e,o){},441:function(t,e,o){},506:function(t,e,o){"use strict";o(431)},520:function(t,e,o){"use strict";o(441)}}]);