(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{334:function(t,e,n){},335:function(t,e,n){},336:function(t,e,n){"use strict";n.d(e,"c",(function(){return a})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return p}));n(50),n(194),n(109);var r=/#.*$/,i=/\.(md|html)$/,o=/\/$/,s=/^(https?:|mailto:|tel:)/;function a(t){return s.test(t)}function c(t){return/^mailto:/.test(t)}function u(t){return/^tel:/.test(t)}function l(t){if(a(t))return t;var e=t.match(r),n=e?e[0]:"",s=function(t){return decodeURI(t).replace(r,"").replace(i,"")}(t);return o.test(s)?t:s+".html"+n}function p(t,e,n){if(!t)return n;for(var r,i=e;(i=i.$parent)&&!r;)r=i.$refs[t];return r&&r.$el&&(r=r.$el),r||n}},337:function(t,e,n){},338:function(t,e,n){},339:function(t,e,n){},340:function(t,e,n){},341:function(t,e,n){"use strict";var r=n(334);n.n(r).a},342:function(t,e,n){"use strict";var r=n(335);n.n(r).a},343:function(t,e,n){"use strict";var r=n(12),i=n(7),o=n(110),s=n(17),a=n(13),c=n(24),u=n(344),l=n(51),p=n(5),f=n(35),h=n(80).f,d=n(31).f,v=n(14).f,g=n(195).trim,m=i.Number,_=m.prototype,b="Number"==c(f(_)),$=function(t){var e,n,r,i,o,s,a,c,u=l(t,!1);if("string"==typeof u&&u.length>2)if(43===(e=(u=g(u)).charCodeAt(0))||45===e){if(88===(n=u.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(s=(o=u.slice(2)).length,a=0;a<s;a++)if((c=o.charCodeAt(a))<48||c>i)return NaN;return parseInt(o,r)}return+u};if(o("Number",!m(" 0o1")||!m("0b1")||m("+0x1"))){for(var y,x=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof x&&(b?p((function(){_.valueOf.call(n)})):"Number"!=c(n))?u(new m($(e)),n,x):$(e)},k=r?h(m):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;k.length>I;I++)a(m,y=k[I])&&!a(x,y)&&v(x,y,d(m,y));x.prototype=_,_.constructor=x,s(i,"Number",x)}},344:function(t,e,n){var r=n(9),i=n(111);t.exports=function(t,e,n){var o,s;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(s=o.prototype)&&s!==n.prototype&&i(t,s),t}},345:function(t,e,n){var r=n(192),i=n(185),o=n(346),s=n(350);t.exports=function(t,e){if(null==t)return{};var n=r(s(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},346:function(t,e,n){var r=n(116),i=n(347),o=n(108);t.exports=function(t,e,n){for(var s=-1,a=e.length,c={};++s<a;){var u=e[s],l=r(t,u);n(l,u)&&i(c,o(u,t),l)}return c}},347:function(t,e,n){var r=n(348),i=n(108),o=n(114),s=n(79),a=n(53);t.exports=function(t,e,n,c){if(!s(t))return t;for(var u=-1,l=(e=i(e,t)).length,p=l-1,f=t;null!=f&&++u<l;){var h=a(e[u]),d=n;if(u!=p){var v=f[h];void 0===(d=c?c(v,h,f):void 0)&&(d=s(v)?v:o(e[u+1])?[]:{})}r(f,h,d),f=f[h]}return t}},348:function(t,e,n){var r=n(349),i=n(113),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var s=t[e];o.call(t,e)&&i(s,n)&&(void 0!==n||e in t)||r(t,e,n)}},349:function(t,e,n){var r=n(193);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},350:function(t,e,n){var r=n(186),i=n(351),o=n(353);t.exports=function(t){return r(t,o,i)}},351:function(t,e,n){var r=n(112),i=n(352),o=n(187),s=n(188),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:s;t.exports=a},352:function(t,e,n){var r=n(191)(Object.getPrototypeOf,Object);t.exports=r},353:function(t,e,n){var r=n(189),i=n(354),o=n(115);t.exports=function(t){return o(t)?r(t,!0):i(t)}},354:function(t,e,n){var r=n(79),i=n(190),o=n(355),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&n.push(a);return n}},355:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},356:function(t,e,n){},363:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return f}));n(15);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,382,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(341),n(10)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,s=(n(342),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),a=(n(343),n(81)),c=n.n(a),u=n(345),l=n.n(u),p={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return l()(this.$props,c.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},364:function(t,e,n){"use strict";var r=n(3),i=n(36).findIndex,o=n(119),s=n(25),a=!0,c=s("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){a=!1})),r({target:"Array",proto:!0,forced:a||!c},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("findIndex")},365:function(t,e,n){"use strict";var r=n(337);n.n(r).a},366:function(t,e,n){"use strict";var r=n(338);n.n(r).a},367:function(t,e,n){"use strict";var r=n(339);n.n(r).a},368:function(t,e,n){"use strict";var r=n(340);n.n(r).a},369:function(t,e,n){"use strict";var r=n(356);n.n(r).a},383:function(t,e,n){"use strict";n.r(e);n(15),n(364),n(197);var r,i=n(336),o={props:["stick","tag"],data:function(){return{needFloat:!1,stickBottom:0}},watch:{stick:function(){this.unStick(),this.stickHandle()}},mounted:function(){this.stickHandle()},beforeDestroy:function(){this.unStick()},methods:{stickHandle:function(){var t=this;if(this.stick){var e=Object(i.b)(this.stick,this);e&&(this._stickerScroll=function(){var n=t.$el.getBoundingClientRect(),r=document.body.scrollTop+document.documentElement.scrollTop;t.needFloat=document.body.offsetHeight-r-n.height<e.offsetHeight,t.stickBottom=e.offsetHeight},this._stickerScroll(),window.addEventListener("scroll",this._stickerScroll))}},unStick:function(){this.needFloat=!1,this.stickBottom=0,window.removeEventListener("scroll",this._stickerScroll)}}},s=(n(365),n(10));function a(t){return t&&t.getBoundingClientRect?t.getBoundingClientRect().top+document.body.scrollTop+document.documentElement.scrollTop:0}var c={components:{Sticker:Object(s.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)(this.tag||"div",{tag:"component",staticClass:"sticker",class:this.needFloat?["stick-float"]:void 0,style:this.needFloat?{bottom:this.stickBottom+"px"}:void 0},[this._t("default")],2)}),[],!1,null,null,null).exports},data:function(){return{activeIndex:0}},computed:{visible:function(){return this.$frontmatter&&!1!==this.$frontmatter.toc&&!!(this.$page&&this.$page.headers&&this.$page.headers.length)}},watch:{activeIndex:function(){var t=(this.$refs.chairTocItem||[])[this.activeIndex];if(t){var e=t.getBoundingClientRect(),n=this.$el.getBoundingClientRect(),r=e.top-n.top;r<20?this.$el.scrollTop=this.$el.scrollTop+r-20:r+e.height>n.height&&(this.$el.scrollTop+=e.top-(n.height-e.height))}},$route:function(){}},mounted:function(){var t=this,e=function(){t.$emit("visible-change",t.visible)};e(),this.$watch("visible",e),setTimeout((function(){return t.triggerEvt()}),1e3),this._onScroll=function(){return t.onScroll()},this._onHashChange=function(){var e=decodeURIComponent(location.hash.substring(1)),n=(t.$page.headers||[]).findIndex((function(t){return t.slug===e}));n>=0&&(t.activeIndex=n);var r=e&&document.getElementById(e);r&&window.scrollTo(0,a(r)-20)},window.addEventListener("scroll",this._onScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this._onScroll),window.removeEventListener("hashchange",this._onHashChange)},methods:{onScroll:function(){var t=this;void 0===r&&(r=a(this.$el));for(var e=document.body.scrollTop+document.documentElement.scrollTop,n=this.$page.headers||[],i=0,o=function(e){t.activeIndex=e};i<n.length;i++){if(!(a(document.getElementById(n[i].slug))-50<e)){i||o(i);break}o(i)}},triggerEvt:function(){this._onScroll(),this._onHashChange()}}},u=(n(366),Object(s.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.visible?n("Sticker",t._b({staticClass:"vuepress-toc"},"Sticker",t.$attrs,!1),t._l(t.$page.headers,(function(e,r){return n("div",{key:r,ref:"chairTocItem",refInFor:!0,staticClass:"vuepress-toc-item",class:["vuepress-toc-h"+e.level,{active:t.activeIndex===r}]},[n("a",{attrs:{href:"#"+e.slug,title:e.title}},[t._v(t._s(e.title))])])})),0):t._e()}),[],!1,null,null,null).exports),l=(n(52),n(117)),p=n.n(l),f=n(8),h={name:"PostTag",props:{tag:{type:String,required:!0}}},d=(n(367),Object(s.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("li",{staticClass:"post-tag"},[e("router-link",{attrs:{to:"/tag/"+this.tag}},[e("span",[this._v(this._s(this.tag))])])],1)}),[],!1,null,"42ccfcd5",null).exports),v={name:"PostMeta",components:{NavigationIcon:f.n,ClockIcon:f.a,PostTag:d},props:{tags:{type:[Array,String]},author:{type:String},date:{type:String},location:{type:String}},computed:{resolvedDate:function(){return p()(this.date).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvedTags:function(){return!this.tags||Array.isArray(this.tags)?this.tags:[this.tags]}}},g=(n(368),{components:{Toc:u,PostMeta:Object(s.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-meta"},[t.author?n("div",{staticClass:"post-meta-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(t.author))]),t._v(" "),t.location?n("span",{attrs:{itemprop:"address"}},[t._v("   in "+t._s(t.location))]):t._e()],1):t._e(),t._v(" "),t.date?n("div",{staticClass:"post-meta-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:t.date}},[t._v("\n      "+t._s(t.resolvedDate)+"\n    ")])],1):t._e(),t._v(" "),t.tags?n("ul",{staticClass:"post-meta-tags",attrs:{itemprop:"keywords"}},t._l(t.resolvedTags,(function(t){return n("PostTag",{key:t,attrs:{tag:t}})})),1):t._e()])}),[],!1,null,null,null).exports,Comment:n(363).a,Newsletter:function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,384))}}}),m=(n(369),Object(s.a)(g,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"vuepress-theme-blog__post-layout"}},[n("article",{staticClass:"vuepress-blog-theme-content",attrs:{itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("header",[n("h1",{staticClass:"post-title",attrs:{itemprop:"name headline"}},[t._v("\n        "+t._s(t.$frontmatter.title)+"\n      ")]),t._v(" "),n("PostMeta",{attrs:{tags:t.$frontmatter.tags,author:t.$frontmatter.author,date:t.$frontmatter.date,location:t.$frontmatter.location}})],1),t._v(" "),n("Content",{attrs:{itemprop:"articleBody"}}),t._v(" "),n("footer",[t.$service.email.enabled?n("Newsletter"):t._e(),t._v(" "),n("hr"),t._v(" "),n("Comment")],1)],1),t._v(" "),n("Toc")],1)}),[],!1,null,null,null));e.default=m.exports}}]);