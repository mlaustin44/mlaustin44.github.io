(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{334:function(t,e,n){},335:function(t,e,n){},341:function(t,e,n){"use strict";var r=n(334);n.n(r).a},342:function(t,e,n){"use strict";var r=n(335);n.n(r).a},343:function(t,e,n){"use strict";var r=n(12),i=n(7),o=n(110),a=n(17),s=n(13),u=n(24),p=n(344),c=n(51),l=n(5),f=n(35),m=n(80).f,v=n(31).f,g=n(14).f,h=n(195).trim,d=i.Number,_=d.prototype,b="Number"==u(f(_)),y=function(t){var e,n,r,i,o,a,s,u,p=c(t,!1);if("string"==typeof p&&p.length>2)if(43===(e=(p=h(p)).charCodeAt(0))||45===e){if(88===(n=p.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(p.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+p}for(a=(o=p.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+p};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var x,P=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof P&&(b?l((function(){_.valueOf.call(n)})):"Number"!=u(n))?p(new d(y(e)),n,P):y(e)},N=r?m(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;N.length>I;I++)s(d,x=N[I])&&!s(P,x)&&g(P,x,v(d,x));P.prototype=_,_.constructor=P,a(i,"Number",P)}},344:function(t,e,n){var r=n(9),i=n(111);t.exports=function(t,e,n){var o,a;return i&&"function"==typeof(o=e.constructor)&&o!==n&&r(a=o.prototype)&&a!==n.prototype&&i(t,a),t}},345:function(t,e,n){var r=n(192),i=n(185),o=n(346),a=n(350);t.exports=function(t,e){if(null==t)return{};var n=r(a(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},346:function(t,e,n){var r=n(116),i=n(347),o=n(108);t.exports=function(t,e,n){for(var a=-1,s=e.length,u={};++a<s;){var p=e[a],c=r(t,p);n(c,p)&&i(u,o(p,t),c)}return u}},347:function(t,e,n){var r=n(348),i=n(108),o=n(114),a=n(79),s=n(53);t.exports=function(t,e,n,u){if(!a(t))return t;for(var p=-1,c=(e=i(e,t)).length,l=c-1,f=t;null!=f&&++p<c;){var m=s(e[p]),v=n;if(p!=l){var g=f[m];void 0===(v=u?u(g,m,f):void 0)&&(v=a(g)?g:o(e[p+1])?[]:{})}r(f,m,v),f=f[m]}return t}},348:function(t,e,n){var r=n(349),i=n(113),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},349:function(t,e,n){var r=n(193);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},350:function(t,e,n){var r=n(186),i=n(351),o=n(353);t.exports=function(t){return r(t,o,i)}},351:function(t,e,n){var r=n(112),i=n(352),o=n(187),a=n(188),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;t.exports=s},352:function(t,e,n){var r=n(191)(Object.getPrototypeOf,Object);t.exports=r},353:function(t,e,n){var r=n(189),i=n(354),o=n(115);t.exports=function(t){return o(t)?r(t,!0):i(t)}},354:function(t,e,n){var r=n(79),i=n(190),o=n(355),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},355:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},357:function(t,e,n){},363:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return f}));n(15);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(2).then(n.t.bind(null,382,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(341),n(10)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(n(342),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(n(343),n(81)),u=n.n(s),p=n(345),c=n.n(p),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return c()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},371:function(t,e,n){"use strict";var r=n(357);n.n(r).a},389:function(t,e,n){"use strict";n.r(e);n(52),n(2);var r=n(117),i=n.n(r),o=n(8),a=n(363),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"ddd MMM DD YYYY")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},u=(n(371),n(10)),p=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),e.excerpt?n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"},domProps:{innerHTML:t._s(e.excerpt)}}):n("p",{staticClass:"ui-post-summary",attrs:{itemprop:"description"}},[t._v("\n        "+t._s(e.frontmatter.summary||e.summary)+"\n      ")]),t._v(" "),n("footer",[e.frontmatter.author?n("div",{staticClass:"ui-post-meta ui-post-author",attrs:{itemprop:"publisher author",itemtype:"http://schema.org/Person",itemscope:""}},[n("NavigationIcon"),t._v(" "),n("span",{attrs:{itemprop:"name"}},[t._v(t._s(e.frontmatter.author))]),t._v(" "),e.frontmatter.location?n("span",{attrs:{itemprop:"address"}},[t._v("\n              in "+t._s(e.frontmatter.location)+"\n          ")]):t._e()],1):t._e(),t._v(" "),e.frontmatter.date?n("div",{staticClass:"ui-post-meta ui-post-date"},[n("ClockIcon"),t._v(" "),n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n            "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n          ")])],1):t._e(),t._v(" "),e.frontmatter.tags?n("div",{staticClass:"ui-post-meta ui-post-tag",attrs:{itemprop:"keywords"}},[n("TagIcon"),t._v(" "),t._l(t.resolvePostTags(e.frontmatter.tags),(function(e){return n("router-link",{key:e,attrs:{to:"/tag/"+e}},[t._v("\n            "+t._s(e)+"\n          ")])}))],2):t._e()])])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,null,null);e.default=p.exports}}]);