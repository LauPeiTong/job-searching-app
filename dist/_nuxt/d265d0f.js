(window.webpackJsonp=window.webpackJsonp||[]).push([[30,9,23],{421:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return h})),r.d(e,"c",(function(){return d}));var o=r(424),n=r(4),c=Object(n.f)("v-card__actions"),l=Object(n.f)("v-card__subtitle"),h=Object(n.f)("v-card__text"),d=Object(n.f)("v-card__title");o.a},423:function(t,e,r){"use strict";r.r(e);var o=r(413),n=r(424),c=r(421),l=r(419),h=r(418),d=(r(67),{name:"WCard",props:{label:{type:String,default:null},label2:{type:String,default:null},label3:{type:String,default:null},height:{type:Number,default:95},color:{type:String,default:null},cornerIcon:{type:String,default:null},disabled:{type:Boolean,default:!1}},data:function(){return{isIconClicked:!1,cornerIconName:this.cornerIcon+"-outline",cornerIconColor:"#918679"}},computed:{},methods:{emitClick:function(){this.$emit("click")},emitIconClick:function(){this.isIconClicked?(this.cornerIconColor="".concat(this.$vuetify.theme.themes.light.brown),this.cornerIconName=this.cornerIcon+"-outline",this.isIconClicked=!1):(this.cornerIconColor="".concat(this.$vuetify.theme.themes.light.primary),this.cornerIconName=this.cornerIcon,this.isIconClicked=!0)}}}),f=r(18),component=Object(f.a)(d,(function(){var t=this,e=t._self._c;return!1===t.disabled?e(n.a,{staticClass:"rounded-xl d-flex flex-column justify-start",attrs:{"min-height":t.height,color:t.color,outlined:""},on:{click:function(e){return t.emitClick()}}},[e("div",{staticClass:"px-4 pt-4 mb-auto"},[e(h.a,[e(l.a,{attrs:{cols:10}},[e("p",{staticClass:"mb-0 font-weight-medium text-h6",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label))])]),t.cornerIcon?e(l.a,{staticClass:"text-right",attrs:{cols:2}},[e(o.a,{attrs:{icon:""},on:{click:function(e){return e.stopPropagation(),t.emitIconClick.apply(null,arguments)}}},[e("client-only",[e("eva-icon",{attrs:{name:t.cornerIconName,fill:t.cornerIconColor,width:"32",height:"32"}})],1)],1)],1):t._e()],1),e("p",{staticClass:"mb-0 caption font-weight-regular",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label2))]),e("p",{staticClass:"mb-0 caption font-weight-light",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label3))]),t._t("content")],2),e(c.a,{staticClass:"px-4 pb-4"},[t._t("action")],2)],1):e(n.a,{staticClass:"rounded-xl d-flex flex-column justify-start",attrs:{"min-height":t.height,color:t.color,outlined:""}},[e("div",{staticClass:"px-4 pt-4 mb-auto"},[e(h.a,[e(l.a,{attrs:{cols:10}},[e("p",{staticClass:"mb-0 font-weight-medium text-h6",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label))])]),t.cornerIcon?e(l.a,{staticClass:"text-right",attrs:{cols:2}},[e(o.a,{attrs:{icon:""}},[e("client-only",[e("eva-icon",{attrs:{name:t.cornerIconName,fill:t.cornerIconColor,width:"32",height:"32"}})],1)],1)],1):t._e()],1),e("p",{staticClass:"mb-0 caption font-weight-regular",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label2))]),e("p",{staticClass:"mb-0 caption font-weight-light",class:t.color?"white--text":"secondary--text"},[t._v(t._s(t.label3))]),t._t("content")],2),e(c.a,{staticClass:"px-4 pb-4"},[t._t("action")],2)],1)}),[],!1,null,"1ebab06a",null);e.default=component.exports},425:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("4207b7d7",content,!0,{sourceMap:!1})},426:function(t,e,r){"use strict";r.r(e);var o=r(419),n=r(418),c=(r(16),r(14),r(13),r(5),r(24),r(17),r(25),r(1)),l=r(42);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"UpperTitle",components:{WIcon:r(187).default},props:{title:{type:String,default:null},titleClass:{type:String,default:null},icon:{type:String,default:null},back:{type:Boolean,default:!1}},data:function(){return{}},computed:d(d({},Object(l.c)({})),{},{textColor:function(){return"dark-background"===this.titleClass?"tertiary--text":"secondary--text"}}),methods:d(d({},Object(l.b)({})),{},{emitBack:function(){this.$emit("goBack")}})},v=(r(431),r(18)),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e(n.a,{staticClass:"pt-8 pb-6 upper-title",class:t.titleClass,attrs:{dense:""}},[e(o.a,{staticClass:"text-center",attrs:{cols:2}},[!0===t.back?e("w-icon",{attrs:{"icon-name":"arrow-ios-back-outline","icon-fill":this.$vuetify.theme.themes.light.primary},on:{click:function(e){return t.emitBack()}}}):t._e()],1),e(o.a,{staticClass:"text-center",attrs:{cols:8}},[e("h3",{class:t.textColor},[t._v(t._s(t.title))])]),e(o.a,{staticClass:"text-center",attrs:{cols:2}},[e("w-icon",{attrs:{"icon-name":t.icon,"icon-fill":this.$vuetify.theme.themes.light.primary},on:{click:function(t){}}})],1)],1)}),[],!1,null,"67b954e4",null);e.default=component.exports},431:function(t,e,r){"use strict";r(425)},432:function(t,e,r){var o=r(37)(!1);o.push([t.i,".text-h6[data-v-67b954e4]{letter-spacing:-.014em!important}.full-width[data-v-67b954e4]{width:100%}.upper-row[data-v-67b954e4]{min-height:92px}.upper-title[data-v-67b954e4]{position:absolute;top:0;width:100%;border-radius:0 0 25px 25px;z-index:100}.dark-background[data-v-67b954e4]{background-color:#404348}",""]),t.exports=o},433:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("197fcea4",content,!0,{sourceMap:!1})},434:function(t,e,r){var o=r(37)(!1);o.push([t.i,'.text-h6{letter-spacing:-.014em!important}.full-width{width:100%}.upper-row{min-height:92px}.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:4px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:12px;font-size:12px;height:24px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=o},435:function(t,e,r){var content=r(443);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("09705597",content,!0,{sourceMap:!1})},442:function(t,e,r){"use strict";r(435)},443:function(t,e,r){var o=r(37)(!1);o.push([t.i,"[data-v-0c688ab8] .v-text-field .v-input__slot{min-height:40px}[data-v-0c688ab8] .font-18px{font-size:18px}.woreer-search-bar[data-v-0c688ab8]{position:absolute;top:70px;width:100%;z-index:100}",""]),t.exports=o},444:function(t,e,r){var content=r(445);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("1cdf85c7",content,!0,{sourceMap:!1})},445:function(t,e,r){var o=r(37)(!1);o.push([t.i,".text-h6{letter-spacing:-.014em!important}.full-width{width:100%}.upper-row{min-height:92px}.theme--light.v-image{color:rgba(0,0,0,.87)}.theme--dark.v-image{color:#fff}.v-image{z-index:0}.v-image__image,.v-image__placeholder{z-index:-1;position:absolute;top:0;left:0;width:100%;height:100%}.v-image__image{background-repeat:no-repeat}.v-image__image--preload{filter:blur(2px)}.v-image__image--contain{background-size:contain}.v-image__image--cover{background-size:cover}",""]),t.exports=o},446:function(t,e,r){var content=r(447);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("2fba213c",content,!0,{sourceMap:!1})},447:function(t,e,r){var o=r(37)(!1);o.push([t.i,".text-h6{letter-spacing:-.014em!important}.full-width{width:100%}.upper-row{min-height:92px}.v-responsive{position:relative;overflow:hidden;flex:1 0 auto;max-width:100%;display:flex}.v-responsive__content{flex:1 0 0px;max-width:100%}.v-application--is-ltr .v-responsive__sizer~.v-responsive__content{margin-left:-100%}.v-application--is-rtl .v-responsive__sizer~.v-responsive__content{margin-right:-100%}.v-responsive__sizer{transition:padding-bottom .2s cubic-bezier(.25,.8,.5,1);flex:1 0 0px}",""]),t.exports=o},448:function(t,e,r){"use strict";r.r(e);var o=r(418),n=r(598),c={name:"WSearchBar",props:{value:{type:String,default:null}},computed:{modelValue:{get:function(){return this.value},set:function(t){this.$emit("change",t)}}}},l=(r(442),r(18)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"woreer-search-bar px-6"},[e(n.a,{staticClass:"pt-0 mt-0 rounded-lg",attrs:{label:"Search","single-line":"","hide-details":"",solo:""},scopedSlots:t._u([{key:"append",fn:function(){return[e("client-only",[e("eva-icon",{attrs:{name:"search-outline",height:"20",fill:"#848484"}})],1)]},proxy:!0}]),model:{value:t.modelValue,callback:function(e){t.modelValue=e},expression:"modelValue"}})],1)}),[],!1,null,"0c688ab8",null);e.default=component.exports},450:function(t,e,r){"use strict";r(16),r(14),r(24),r(17),r(25);var o=r(15),n=r(1),c=(r(5),r(13),r(433),r(81)),l=r(436),h=r(427),d=r(119),f=r(190),v=r(118),m=r(188),y=r(144),x=r(186),_=r(21);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(d.a,x.a,y.a,v.a,Object(f.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return O(O(O(O({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var r=Object(o.a)(e,2),n=r[0],c=r[1];t.$attrs.hasOwnProperty(n)&&Object(_.a)(n,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],r=this.generateRouteLink(),o=r.tag,data=r.data;data.attrs=O(O({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var n=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(n,data),e)}})},454:function(t,e,r){var content=r(476);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("12840f70",content,!0,{sourceMap:!1})},473:function(t,e,r){t.exports=r.p+"img/StatisticLogo.563102f.jpg"},474:function(t,e,r){var content=r(503);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("73b89fbd",content,!0,{sourceMap:!1})},475:function(t,e,r){"use strict";r(454)},476:function(t,e,r){var o=r(37)(!1);o.push([t.i,".text-h6[data-v-e2b3f278]{letter-spacing:-.014em!important}.full-width[data-v-e2b3f278]{width:100%}.upper-row[data-v-e2b3f278]{min-height:92px}.min-350-width[data-v-e2b3f278]{min-width:353px!important}",""]),t.exports=o},478:function(t,e,r){"use strict";r.r(e);var o=r(450),n=r(419),c=r(449),l=r(418),h=(r(30),r(16),r(14),r(13),r(24),r(17),r(25),r(1)),d=(r(185),r(5),r(52),r(68),r(42));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={name:"JobList",components:{WCard:r(423).default},props:{title:{type:String,default:null},items:{type:Array||Object,default:null},tag:{type:String,default:null}},data:function(){return{}},computed:v({},Object(d.c)({widthX:"screen/getWidthClass",companies:"job/getCompanies",categories:"job/getCategories"})),methods:v(v({},Object(d.b)({changeSelectedJob:"job/changeSelectedJob"})),{},{getCompany:function(t){return this.companies.find((function(e){return e.id===t}))},getTag:function(t){for(var i=1;i<=this.categories.length;i++)if(t.includes(i))return this.categories[i-1].name},goToJobDetailsPage:function(t){this.changeSelectedJob(t),this.$router.push("/jobdetails")}})},y=(r(475),r(18)),component=Object(y.a)(m,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"job-list"},[t.title?e("p",{staticClass:"text-h6 font-weight-bold pt-4"},[t._v(t._s(t.title))]):t._e(),e(c.b,{staticClass:"pt-2 pb-8"},[t._l(t.items,(function(r){return[e(l.a,{staticClass:"d-flex flex-column px-4 pb-4 justify-center"},[e("w-card",{staticClass:"d-flex flex-column",style:t.widthX,attrs:{height:150,label:r.name,label2:t.getCompany(r.company).name,label3:t.getCompany(r.company).location,"corner-icon":"bookmark"},on:{click:function(e){return t.goToJobDetailsPage(r)}},scopedSlots:t._u([{key:"action",fn:function(){return[e(l.a,{staticClass:"mt-8"},[e(n.a,{staticClass:"py-0 pl-2"},[e(o.a,{attrs:{outlined:"",color:t.$vuetify.theme.themes.light.brown}},[e("span",[t._v(t._s(null===t.tag?t.getTag(r.cid):t.tag))])])],1),e(n.a,{staticClass:"py-0 px-0"},[t.getCompany(r.company).verified?e(o.a,{attrs:{outlined:"",color:t.$vuetify.theme.themes.light.success}},[e("span",[t._v("Verified")])]):t._e()],1),e(n.a,{staticClass:"py-0 justify-end text-right"},[e("eva-icon",{attrs:{name:"arrow-circle-right",fill:t.$vuetify.theme.themes.light.secondary,height:"32",width:"32"}})],1)],1)]},proxy:!0}],null,!0)})],1)]}))],2)],1)}),[],!1,null,"e2b3f278",null);e.default=component.exports},479:function(t,e,r){"use strict";var o=r(27),n=(r(67),r(84),r(290),r(60),r(75),r(444),r(192)),c=(r(446),r(191)),l=r(81),h=r(4),d=Object(l.a)(c.a).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},Object(h.k)(this))}},render:function(t){return t("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),f=r(118),v=r(83),m=r(21),y="undefined"!=typeof window&&"IntersectionObserver"in window;e.a=Object(l.a)(d,f.a).extend({name:"v-img",directives:{intersect:n.a},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio:function(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc:function(){return this.src&&"object"===Object(o.a)(this.src)?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage:function(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient(".concat(this.gradient,")")),e&&t.push('url("'.concat(e,'")'));var image=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[image]):image}},watch:{src:function(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted:function(){this.init()},methods:{init:function(t,e,r){if(!y||r||this.eager){if(this.normalisedSrc.lazySrc){var o=new Image;o.src=this.normalisedSrc.lazySrc,this.pollForSize(o,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError:function(){this.hasError=!0,this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,image=new Image;this.image=image,image.onload=function(){image.decode?image.decode().catch((function(e){Object(m.c)("Failed to decode image, trying to render anyway\n\n"+"src: ".concat(t.normalisedSrc.src)+(e.message?"\nOriginal error: ".concat(e.message):""),t)})).then(t.onLoad):t.onLoad()},image.onerror=this.onError,this.hasError=!1,this.sizes&&(image.sizes=this.sizes),this.normalisedSrc.srcset&&(image.srcset=this.normalisedSrc.srcset),image.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(image),this.getSrc()},pollForSize:function(img){var t=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,r=function r(){var o=img.naturalHeight,n=img.naturalWidth;o||n?(t.naturalWidth=n,t.calculatedAspectRatio=n/o):img.complete||!t.isLoading||t.hasError||null==e||setTimeout(r,e)};r()},genContent:function(){var content=d.options.methods.genContent.call(this);return this.naturalWidth&&this._b(content.data,"div",{style:{width:"".concat(this.naturalWidth,"px")}}),content},__genPlaceholder:function(){var slot=Object(h.k)(this,"placeholder");if(slot){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},slot)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render:function(t){var e=d.options.render.call(this,t),data=Object(v.a)(e.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:y?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,data,e.children)}})},502:function(t,e,r){"use strict";r(474)},503:function(t,e,r){var o=r(37)(!1);o.push([t.i,".text-h6[data-v-10df56f4]{letter-spacing:-.014em!important}.full-width[data-v-10df56f4]{width:100%}.upper-row[data-v-10df56f4]{min-height:92px}[data-v-10df56f4] .scroll-x{overflow-x:auto!important;overflow-y:hidden}[data-v-10df56f4] .vhl-item{padding-top:4px!important}",""]),t.exports=o},520:function(t,e,r){var content=r(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(38).default)("17c6c74e",content,!0,{sourceMap:!1})},533:function(t,e,r){"use strict";r.r(e);var o=r(424),n=r(479),c=r(487),l=r(515),h=r(430),d=(r(16),r(14),r(13),r(5),r(24),r(17),r(25),r(1)),f=r(42);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(d.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"StatisticCard",components:{},props:{},data:function(){return{statisticLogo:r(473)}},computed:m({},Object(f.c)({})),methods:m({},Object(f.b)({}))},x=r(18),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"statistic-card px-4"},[e(o.a,{staticClass:"rounded-lg",attrs:{outlined:""},on:{click:function(t){}}},[e(c.a,{staticClass:"pt-2",attrs:{"three-line":""}},[e(h.a,[e(h.c,{staticClass:"secondary--text font-weight-bold text-h5 mt-2"},[t._v("Job Statistics")]),e(h.b,[t._v("View the most popular job in Malaysia")])],1),e(l.a,{attrs:{size:"60",tile:""}},[e(n.a,{attrs:{src:t.statisticLogo}})],1)],1)],1)],1)}),[],!1,null,"0383bdcd",null);e.default=component.exports},534:function(t,e,r){"use strict";r.r(e);var o=r(450),n=r(419),c=r(418),l=(r(30),r(16),r(14),r(13),r(5),r(24),r(17),r(25),r(1)),h=r(42),d=r(453),f=r(423),v=r(187);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={name:"CategoryList",components:{WCard:f.default,WIcon:v.default,VueHorizontalList:d.a},props:{},data:function(){return{options:{responsive:[{end:500,size:1.75}],list:{padding:8}}}},computed:y({},Object(h.c)({categories:"job/getCategories",scrollSize:"screen/getScrollXClass"})),methods:y(y({},Object(h.b)({changeSelectedCategory:"job/changeSelectedCategory"})),{},{cardColor:function(t){return t%3==1?"#404348":t%3==2?"#918679":"#FEB81E"},getName:function(t){return"IT"===t?"information technology":t.toLowerCase()},viewAllCategories:function(){this.$router.push("/categories")},goToJobsPage:function(t){this.changeSelectedCategory(t),this.$router.push("/jobs")}})},_=(r(502),r(18)),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"category-list"},[e(c.a,{staticClass:"pa-0 ma-0 px-4"},[e(n.a,{staticClass:"pa-0 ma-0"},[e("p",{staticClass:"text-h6 font-weight-bold pt-4 mb-0"},[t._v("Category")])]),e(n.a,{staticClass:"pa-0 ma-0 d-flex"},[e(c.a,{staticClass:"pt-4 mb-1 pr-4 align-end justify-end",on:{click:function(e){return t.viewAllCategories()}}},[e("p",{staticClass:"mb-0"},[t._v("View all")]),e("w-icon",{staticClass:"ml-3",attrs:{height:20,width:20,"icon-name":"arrow-forward-outline","icon-fill":this.$vuetify.theme.themes.light.brown},on:{click:function(t){}}})],1)],1)],1),e(c.a,{staticClass:"pl-4 mx-0 scroll-x",style:t.scrollSize},[e("vue-horizontal-list",{attrs:{items:t.categories,options:t.options},scopedSlots:t._u([{key:"default",fn:function(r){var l=r.item;return[e("w-card",{staticClass:"d-flex flex-column",attrs:{height:150,label:l.name,label2:"View the job related to "+t.getName(l.name)+" job",color:t.cardColor(l.id)},on:{click:function(e){return t.goToJobsPage(l)}},scopedSlots:t._u([{key:"action",fn:function(){return[e(c.a,{staticClass:"mt-4"},[e(n.a,{staticClass:"py-0"},[e(o.a,{attrs:{outlined:"",color:"white"}},[e("span",[t._v(t._s(l.new_job)+" New")])])],1),e(n.a,{staticClass:"py-0 justify-end text-right"},[e("eva-icon",{attrs:{name:"arrow-circle-right",fill:"white",height:"32",width:"32"}})],1)],1)]},proxy:!0}],null,!0)})]}}])})],1)],1)}),[],!1,null,"10df56f4",null);e.default=component.exports},582:function(t,e,r){"use strict";r(520)},583:function(t,e,r){var o=r(37)(!1);o.push([t.i,"[data-v-6bdfa608] .scroll{overflow-x:hidden;overflow-y:auto;width:100%!important}",""]),t.exports=o},605:function(t,e,r){"use strict";r.r(e);var o=r(418),n=(r(16),r(14),r(13),r(5),r(24),r(17),r(25),r(1)),c=(r(20),r(193),r(42)),l=r(426),h=r(448),d=r(533),f=r(534),v=r(478);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y={name:"JobPage",components:{UpperTitle:l.default,WSearchBar:h.default,StatisticCard:d.default,CategoryList:f.default,JobList:v.default},layout:"default",data:function(){return{search:null}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(c.c)({scrollSize:"screen/getScrollClass",recommendedJob:"job/getRecommededJob"})),methods:{searchBy:function(t){this.search=t}}},x=y,_=(r(582),r(18)),component=Object(_.a)(x,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"fill-height job-page pa-0 ma-0"},[e(o.a,{staticClass:"pa-0 ma-0 upper-row"},[e("upper-title",{staticClass:"ma-0",attrs:{title:"Job",icon:"bookmark"}}),e("w-search-bar",{staticClass:"ma-0",on:{change:t.searchBy}})],1),e("div",{staticClass:"scroll ma-0 justify-top align-center",style:t.scrollSize},[e("statistic-card",{staticClass:"pt-10 pb-2"}),e("category-list",{staticClass:"pb-4"}),e("job-list",{staticClass:"px-4 pb-4",attrs:{items:t.recommendedJob,title:"Recommeded for you"}})],1)],1)}),[],!1,null,"6bdfa608",null);e.default=component.exports;installComponents(component,{UpperTitle:r(426).default,JobList:r(478).default})}}]);