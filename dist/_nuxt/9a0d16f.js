(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{176:function(t,e,n){"use strict";n.r(e);var o=n(419),r=n(418),c=(n(16),n(14),n(13),n(5),n(24),n(17),n(25),n(1)),l=n(42);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={name:"BottomNav",components:{WButton:n(96).default},data:function(){return{}},computed:m({},Object(l.c)({isEnrolled:"course/isEnrolled"})),methods:m({},Object(l.b)({}))},h=(n(383),n(18)),component=Object(h.a)(f,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"bottom-nav bottom-column-content-area pa-4",attrs:{"no-gutters":""}},[e(o.a,{staticClass:"flex bottom-nav--col px-0 mx-0"},[e("w-button",{staticClass:"bottom-nav--button",attrs:{label:t.isEnrolled?"Continue":"Enroll Now",block:"",dark:"",color:t.$vuetify.theme.themes.light.secondary},on:{click:function(t){}}})],1)],1)}),[],!1,null,"2b4a9946",null);e.default=component.exports},177:function(t,e,n){"use strict";n.r(e);var o=n(419),r=n(418),c=(n(30),n(16),n(14),n(13),n(5),n(24),n(17),n(25),n(48),n(53),n(39),n(20),n(54),n(57),n(40),n(1)),l=n(42);function d(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,r=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw r}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={name:"BottomNav",components:{WButton:n(96).default},data:function(){return{menus:[{label:"Job",path:"/job",name:"job",icon:"briefcase-outline",iconFill:"briefcase"},{label:"Course",path:"/course",name:"course",icon:"file-text-outline",iconFill:"file-text"},{label:"Forum",path:"/forum",name:"forum",icon:"globe-2-outline",iconFill:"globe-2"},{label:"Message",path:"/message",name:"message",icon:"message-square-outline",iconFill:"message-square"},{label:"Account",path:"/account",name:"account",icon:"person-outline",iconFill:"person"}]}},computed:h(h({},Object(l.c)({currentPath:"path/getCurrentPath"})),{},{currentRouteName:function(){var t,e=d(this.menus);try{for(e.s();!(t=e.n()).done;){var menu=t.value;if(menu.name===this.$route.name)return menu.name}}catch(t){e.e(t)}finally{e.f()}return this.currentPath}}),methods:h(h({},Object(l.b)({changeCurrentPath:"path/changeCurrentPath"})),{},{getButtonColor:function(t){return this.currentRouteName===t?this.$vuetify.theme.themes.light.primary:this.$vuetify.theme.themes.light.secondary},checkRoute:function(t){return this.currentRouteName===t},goToPath:function(menu){this.changeCurrentPath(menu.name),this.$router.push({path:menu.path})}})},v=(n(385),n(18)),component=Object(v.a)(y,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"bottom-nav bottom-column-content-area",attrs:{"no-gutters":""}},t._l(t.menus,(function(menu){return e(o.a,{key:"nav-".concat(menu.name),staticClass:"flex col5-custom bottom-nav--col px-0 mx-0"},[e("w-button",{staticClass:"bottom-nav--button",attrs:{label:menu.label,plain:"",tile:"",block:"",color:t.getButtonColor(menu.name),"icon-name":t.checkRoute(menu.name)?menu.iconFill:menu.icon,"icon-fill":t.getButtonColor(menu.name)},on:{click:function(e){return t.goToPath(menu)}}})],1)})),1)}),[],!1,null,"071173ef",null);e.default=component.exports},178:function(t,e,n){"use strict";n.r(e);var o=n(419),r=n(418),c=(n(16),n(14),n(13),n(5),n(24),n(17),n(25),n(1)),l=n(42),d=n(187);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"BottomNav",components:{WButton:n(96).default,WIcon:d.default},data:function(){return{}},computed:f({},Object(l.c)({})),methods:f({},Object(l.b)({}))},y=(n(389),n(18)),component=Object(y.a)(h,(function(){var t=this._self._c;return t(r.a,{staticClass:"bottom-nav bottom-column-content-area pa-4",attrs:{"no-gutters":""}},[t(o.a,{staticClass:"flex bottom-nav--col px-0 mx-0",attrs:{cols:10}},[t("w-button",{staticClass:"bottom-nav--button",attrs:{label:"Apply Now",block:"",dark:"",color:this.$vuetify.theme.themes.light.secondary},on:{click:function(t){}}})],1),t(o.a,{staticClass:"flex text-center my-auto",attrs:{cols:2}},[t("w-icon",{staticClass:"ml-3",attrs:{height:36,width:36,"icon-name":"message-circle-outline","icon-fill":this.$vuetify.theme.themes.light.secondary},on:{click:function(t){}}})],1)],1)}),[],!1,null,"22795a91",null);e.default=component.exports},183:function(t,e,n){"use strict";var o=n(0),r=n(281),c=n.n(r);o.default.use(c.a)},184:function(t,e,n){"use strict";var o=n(142),r=n.n(o);e.a=new r.a({theme:{dark:!1,themes:{light:{primary:"#FEB81E",secondary:"#404348",tertiary:"#EFECEC",danger:"#C82F2F",darkGrey:"#848484",lightGrey:"#C1C1C1",warning:"#EB7100",success:"#009966",brown:"#918679"}}}})},187:function(t,e,n){"use strict";n.r(e);var o=n(413),r=(n(67),{name:"WIcon",props:{iconName:{type:String,default:null},iconFill:{type:String,default:null},disabled:{type:Boolean,default:!1},width:{type:Number,default:24},height:{type:Number,default:24},to:{type:String,default:null}},computed:{buttonColor:function(){var t=this.iconFill;return this.color&&(t=this.color),this.disabled&&(t="darkGrey"),t}},methods:{emitClick:function(){this.$emit("click")}}}),c=(n(387),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"woreer-icon",attrs:{icon:"",color:t.buttonColor,width:t.width,height:t.height,to:t.to}},[e("client-only",[e("eva-icon",{attrs:{name:t.iconName,fill:t.iconFill,width:t.width,height:t.height},on:{click:t.emitClick}})],1)],1)}),[],!1,null,"328162ab",null);e.default=component.exports},265:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("04a85f12",content,!0,{sourceMap:!1})},266:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("7e128110",content,!0,{sourceMap:!1})},267:function(t,e,n){var content=n(386);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("73b57b8e",content,!0,{sourceMap:!1})},268:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("4564c55c",content,!0,{sourceMap:!1})},269:function(t,e,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(38).default)("4487be5e",content,!0,{sourceMap:!1})},283:function(t,e,n){"use strict";var o=n(416),r=n(420),c=n(417),l=n(418),d={name:"CourseLayout",components:{BottomEnrollButton:n(176).default},data:function(){return{}}},m=n(18),component=Object(m.a)(d,(function(){var t=this._self._c;return t(o.a,[t(c.a,[t(r.a,{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t(l.a,{staticClass:"ma-0 fill-height"},[t("Nuxt"),t("bottom-enroll-button")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BottomEnrollButton:n(176).default})},284:function(t,e,n){"use strict";var o=n(416),r=n(420),c=n(417),l=n(418),d={name:"DefaultLayout",components:{BottomNav:n(177).default},data:function(){return{}}},m=n(18),component=Object(m.a)(d,(function(){var t=this._self._c;return t(o.a,[t(c.a,[t(r.a,{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t(l.a,{staticClass:"ma-0 fill-height"},[t("Nuxt"),t("bottom-nav")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BottomNav:n(177).default})},285:function(t,e,n){"use strict";var o=n(416),r=n(420),c=n(417),l=n(418),d={name:"JobLayout",components:{BottomApplyButton:n(178).default},data:function(){return{}}},m=n(18),component=Object(m.a)(d,(function(){var t=this._self._c;return t(o.a,[t(c.a,[t(r.a,{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t(l.a,{staticClass:"ma-0 fill-height"},[t("Nuxt"),t("bottom-apply-button")],1)],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{BottomApplyButton:n(178).default})},286:function(t,e,n){"use strict";var o=n(416),r=n(420),c=n(417),l={name:"WelcomeLayout",data:function(){return{}}},d=n(18),component=Object(d.a)(l,(function(){var t=this._self._c;return t(o.a,[t(c.a,[t(r.a,{staticClass:"fill-height pa-0",attrs:{fluid:""}},[t("Nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports},295:function(t,e,n){n(296),t.exports=n(297)},381:function(t,e,n){"use strict";n(265)},382:function(t,e,n){var o=n(37)(!1);o.push([t.i,"[data-v-01c2a2d4] .btn-icon{display:flex;width:.8rem;margin-right:.5rem}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg[data-v-01c2a2d4]{background-color:#848484!important;color:#c1c1c1!important}[data-v-01c2a2d4] .v-btn__content{opacity:1!important;letter-spacing:-.011em}",""]),t.exports=o},383:function(t,e,n){"use strict";n(266)},384:function(t,e,n){var o=n(37)(!1);o.push([t.i,".text-h6[data-v-2b4a9946]{letter-spacing:-.014em!important}.full-width[data-v-2b4a9946]{width:100%}.upper-row[data-v-2b4a9946]{min-height:92px}.bottom-nav[data-v-2b4a9946]{position:absolute;bottom:0;width:100%}.bottom-column-content-area[data-v-2b4a9946]{border:solid hsla(0,0%,75.7%,.25);border-width:1px 0 0;background-color:#fff}",""]),t.exports=o},385:function(t,e,n){"use strict";n(267)},386:function(t,e,n){var o=n(37)(!1);o.push([t.i,".text-h6[data-v-071173ef]{letter-spacing:-.014em!important}.full-width[data-v-071173ef]{width:100%}.upper-row[data-v-071173ef]{min-height:92px}.v-btn--active[data-v-071173ef]{background-color:transparent}.v-btn:not(.v-btn--round).v-size--default[data-v-071173ef]{padding:0!important}.bottom-nav[data-v-071173ef]{position:absolute;bottom:0;width:100%;z-index:100}.bottom-column-content-area[data-v-071173ef]{border:solid hsla(0,0%,75.7%,.25);border-width:1px 0 0;background-color:#fff}.flex.col5-custom[data-v-071173ef]{width:20%;max-width:20%;flex-basis:20%}",""]),t.exports=o},387:function(t,e,n){"use strict";n(268)},388:function(t,e,n){var o=n(37)(!1);o.push([t.i,"[data-v-328162ab] .btn-icon{display:flex;width:.8rem;margin-right:.5rem}.theme--light.v-btn.v-btn--disabled.v-btn--has-bg[data-v-328162ab]{background-color:#848484!important;color:#c1c1c1!important}[data-v-328162ab] .v-btn__content{opacity:1!important;letter-spacing:-.011em}",""]),t.exports=o},389:function(t,e,n){"use strict";n(269)},390:function(t,e,n){var o=n(37)(!1);o.push([t.i,".text-h6[data-v-22795a91]{letter-spacing:-.014em!important}.full-width[data-v-22795a91]{width:100%}.upper-row[data-v-22795a91]{min-height:92px}.bottom-nav[data-v-22795a91]{position:absolute;bottom:0;width:100%}.bottom-column-content-area[data-v-22795a91]{border:solid hsla(0,0%,75.7%,.25);border-width:1px 0 0;background-color:#fff}",""]),t.exports=o},391:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));n(13),n(5);var o=function(){return{selectedCourse:null,courses:[{id:1,name:"Interview Training 101",company:1,premium:!1,taken:!0,completed:!1,total_level:5,completed_level:1},{id:2,name:"Leadership Training",company:2,premium:!0,taken:!0,completed:!1,total_level:5,completed_level:2},{id:3,name:"Interview Training 202",company:1,premium:!1,taken:!1,completed:!1,total_level:7},{id:4,name:"English Communication 101",company:2,premium:!1,taken:!0,completed:!0,total_level:5,completed_level:5},{id:5,name:"English Communication 202",company:2,premium:!1,taken:!1,completed:!1,total_level:5},{id:6,name:"Softskill Training 101",company:1,premium:!1,taken:!0,completed:!0,total_level:5,completed_level:5},{id:7,name:"Web Development Bootcamp",company:1,premium:!0,taken:!0,completed:!1,total_level:5,completed_level:4},{id:8,name:"AWS Certified Training",company:3,premium:!0,taken:!1,completed:!1,total_level:10},{id:9,name:"Stree Management Course",company:3,premium:!0,taken:!1,completed:!1,total_level:10},{id:10,name:"Microsoft Azure Certified Training",company:4,premium:!1,taken:!0,completed:!1,total_level:10,completed_level:5},{id:11,name:"Emotional Intelligence at Work",company:4,premium:!0,taken:!0,completed:!1,total_level:5,completed_level:3},{id:12,name:"Be a Greate Mentor: A Guide for mentorship",company:4,premium:!1,taken:!1,completed:!1,total_level:10}]}},r={getSelectedCourse:function(t){return t.selectedCourse},getCourses:function(t){return t.courses},getRecommendedCourses:function(t){return t.courses.filter((function(t){return!1===t.taken}))},getCurrentCourses:function(t){return t.courses.filter((function(t){return!0===t.taken}))},getRecentCourse:function(t){return t.courses[0]},isEnrolled:function(t){return t.selectedCourse.taken}},c={updateSelectedCourse:function(t,e){t.selectedCourse=e}},l={changeSelectedCourse:function(t,e){var n=t.commit;t.state;n("updateSelectedCourse",e)}}},392:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));n(13),n(5),n(52),n(68),n(185);var o=function(){return{selectedCategory:null,selectedJob:null,categories:[{id:1,name:"Family-friendly",new_job:54},{id:2,name:"Female-friendly",new_job:22},{id:3,name:"Internship",new_job:33},{id:4,name:"Part-time",new_job:23},{id:5,name:"Full-time",new_job:26},{id:6,name:"IT",new_job:16},{id:7,name:"Accounting",new_job:71},{id:8,name:"Art & Design",new_job:54}],jobs:[{id:1,name:"Frontend Developer Intern",cid:[2,3,6],salary:"MYR 750 - 1000",company:1},{id:2,name:"Accountant",cid:[1,2,5,7],salary:"MYR 3000 - 3500",company:2},{id:3,name:"UI/UX designer",cid:[2,5,6,8],salary:"MYR 4500",company:3},{id:4,name:"Game Developer",cid:[5,6],salary:"MYR 5000-6000",company:4},{id:5,name:"Backend Developer Intern",cid:[2,3,6],salary:"MYR 750 - 1000",company:1},{id:6,name:"Frontend Developer",cid:[1,2,5],salary:"MYR 750 - 1000",company:2},{id:7,name:"Frontend Developer Freelancar",cid:[2,4,6],salary:"MYR 750 - 1000",company:3},{id:8,name:"Frontend Developer Intern",cid:[2,3,6],salary:"MYR 750 - 1000",company:4},{id:9,name:"Frontend Developer",cid:[2,5,6],salary:"MYR 4000 - 5000",company:1},{id:10,name:"Backend Developer",cid:[2,5,6],salary:"MYR 4000 - 5000",company:1},{id:11,name:"Senior Frontend Developer",cid:[2,5,6],salary:"MYR 6000 - 7000",company:1},{id:12,name:"Senior Backend Developer",cid:[2,5,6],salary:"MYR 5000 - 7000",company:1},{id:13,name:"Full-stack Developer",cid:[2,5,6],salary:"MYR 4000 - 5000",company:1},{id:14,name:"UI/UX Developer",cid:[2,5,6],salary:"MYR 4000 - 5000",company:1},{id:15,name:"Project Manager",cid:[2,5,6],salary:"MYR 7000 - 10000",company:1},{id:16,name:"Junior Frontend Developer",cid:[2,5,6],salary:"MYR 4000 - 5000",company:1},{id:17,name:"Web Developer Intern",cid:[2,3,6],salary:"MYR 6000",company:4},{id:18,name:"Game Developer Freelancer",cid:[1,4,5,6],salary:"MYR 5000",company:2},{id:19,name:"Accountant",cid:[1,2,5,7],salary:"MYR 4000 - 5000",company:2},{id:20,name:"Mobile App Developer",cid:[1,2,5,6],salary:"MYR 7500 - 8000",company:2},{id:21,name:"Game Development Designer",cid:[5,8],salary:"MYR 7500 - 8000",company:2},{id:22,name:"Accountant",cid:[1,2,5,7],salary:"MYR 7500 - 8000",company:2},{id:23,name:"Frontend Developer",cid:[1,2,5],salary:"MYR 750 - 1000",company:2}],companies:[{id:1,name:"Yezza Sdn Bhd",location:"Putrajaya, Selangor",img:"yezza",verified:!0},{id:2,name:"FinCare Sdn Bhd",location:"Cheras, Kuala Lumpur",img:"fincare",verified:!1},{id:3,name:"EvoSports Sdn Bhd",location:"Putrajaya, Selangor",img:"evosports",verified:!0},{id:4,name:"FreshBox Sdn Bhd",location:"Kuala Lumpur",img:"freshbox",verified:!0}]}},r={getCategories:function(t){return t.categories},getRecommededJob:function(t){return t.jobs.filter((function(t){return t.id%3==0}))},getCompanies:function(t){return t.companies},getSelectedCategory:function(t){return t.selectedCategory},getJobs:function(t){return t.jobs.filter((function(e){return e.cid.includes(t.selectedCategory.id)}))},getSelectedJob:function(t){return t.selectedJob},getCompany:function(t){return t.companies.find((function(e){return e.id===t.selectedJob.company}))}},c={updateSelectedCategory:function(t,e){t.selectedCategory=e},updateSelectedJob:function(t,e){t.selectedJob=e}},l={changeSelectedCategory:function(t,e){var n=t.commit;t.state;n("updateSelectedCategory",e)},changeSelectedJob:function(t,e){var n=t.commit;t.state;n("updateSelectedJob",e)}}},393:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=function(){return{currentPath:"job"}},r={getCurrentPath:function(t){return t.currentPath}},c={updateCurrentPath:function(t,path){t.currentPath=path}},l={changeCurrentPath:function(t,path){(0,t.commit)("updateCurrentPath",path)}}},394:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o})),n.d(e,"getters",(function(){return r})),n.d(e,"mutations",(function(){return c})),n.d(e,"actions",(function(){return l}));var o=function(){return{}},r={getScrollClass:function(t){return console.log(window.innerHeight-165),{height:"".concat(window.innerHeight-150,"px")}},getScrollXClass:function(t){return{width:"".concat(window.innerWidth-2,"px")}},getWidthClass:function(t){return{"min-width":"".concat(window.innerWidth-42,"px")}}},c={},l={}},73:function(t,e,n){"use strict";var o={name:"ErrorLayout",props:{},data:function(){},head:function(){}},r=n(18),component=Object(r.a)(o,(function(){return(0,this._self._c)("div")}),[],!1,null,"7ab7f21a",null);e.a=component.exports},96:function(t,e,n){"use strict";n.r(e);var o=n(413),r={name:"WButton",props:{label:{type:String,default:null},color:{type:String,default:null},iconName:{type:String,default:null},iconFill:{type:String,default:null},to:{type:String,default:null},outlined:{type:Boolean,default:!1},block:{type:Boolean,default:!0},dark:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},activeClass:{type:String,default:null},plain:{type:Boolean,default:!1},borderless:{type:Boolean,default:!1},iconOnly:{type:Boolean,default:!1}},computed:{buttonMinHeight:function(){return this.iconName?"64px":this.iconName&&!this.label?"10px":"48px"},buttonColor:function(){var t="primary";return this.color&&(t=this.color),this.disabled&&(t="darkGrey"),t}},methods:{emitClick:function(){this.$emit("click")}}},c=(n(381),n(18)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"woreer-button text-none rounded-lg",attrs:{elevation:"0",block:t.block,dark:t.dark,"min-height":t.buttonMinHeight,color:t.buttonColor,plain:t.plain,outlined:t.outlined,disabled:t.disabled,to:t.to},on:{click:t.emitClick}},[e("client-only",[t.iconOnly?e("eva-icon",{staticClass:"ma-0",attrs:{name:t.iconName,fill:t.disabled?"#C1C1C1":t.iconFill}}):e("div",{staticClass:"d-flex flex-column px-2 align-center"},[t.iconName?e("div",{staticClass:"btn-icon mr-3"},[e("eva-icon",{attrs:{name:t.iconName,fill:t.disabled?"#C1C1C1":t.iconFill}})],1):t._e(),e("span",[t._v(t._s(t.label))])]),e("div",{staticClass:"right-action"},[t._t("action")],2)],1)],1)}),[],!1,null,"01c2a2d4",null);e.default=component.exports}},[[295,34,8,35]]]);