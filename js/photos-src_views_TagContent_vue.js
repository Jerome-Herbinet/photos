"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_TagContent_vue"],{64148:(n,t,e)=>{e.d(t,{Z:()=>s});var r=e(87537),o=e.n(r),i=e(23645),a=e.n(i)()(o());a.push([n.id,".loader[data-v-64772592]{margin-top:30vh}.photos-navigation[data-v-64772592]{display:flex;height:44px;padding:0 40px;align-items:center;max-width:100%}.photos-navigation h2[data-v-64772592]{padding:0;margin:0}.heading-subline[data-v-64772592]{margin-left:85px;margin-top:-11px;color:var(--color-text-maxcontrast)}.tag__photos[data-v-64772592]{padding:0 64px}","",{version:3,sources:["webpack://./src/views/TagContent.vue"],names:[],mappings:"AA2LA,yBACC,eAAA,CAGD,oCACC,YAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CACA,cAAA,CAEA,uCACC,SAAA,CACA,QAAA,CAIF,kCACC,gBAAA,CACA,gBAAA,CACA,mCAAA,CAGD,8BACC,cAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.loader {\n\tmargin-top: 30vh;\n}\n\n.photos-navigation {\n\tdisplay: flex;\n\theight: 44px;\n\tpadding: 0 40px;\n\talign-items: center;\n\tmax-width: 100%;\n\n\th2 {\n\t\tpadding: 0;\n\t\tmargin: 0;\n\t}\n}\n\n.heading-subline {\n\tmargin-left: 85px;\n\tmargin-top: -11px;\n\tcolor: var(--color-text-maxcontrast);\n}\n\n.tag__photos {\n\tpadding: 0 64px;\n}\n'],sourceRoot:""}]);const s=a},37219:(n,t,e)=>{e.r(t),e.d(t,{default:()=>E});var r=e(20629),o=e(76240),i=e(33476),a=e(77571),s=e(23565),c=e(32114),u=e(98171),l=e(69363),p=e(25108);function g(n,t,e,r,o,i,a){try{var s=n[i](a),c=s.value}catch(n){return void e(n)}s.done?t(c):Promise.resolve(c).then(r,o)}function h(n){return function(){var t=this,e=arguments;return new Promise((function(r,o){var i=n.apply(t,e);function a(n){g(i,r,o,a,s,"next",n)}function s(n){g(i,r,o,a,s,"throw",n)}a(void 0)}))}}function d(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?d(Object(e),!0).forEach((function(t){m(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):d(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function m(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const A={name:"TagContent",components:{File:a.Z,FilesListViewer:s.Z,NcEmptyContent:i.NcEmptyContent,NcActions:i.NcActions,NcActionButton:i.NcActionButton,NcLoadingIcon:i.NcLoadingIcon,ArrowLeft:o.default},mixins:[i.isMobile,u.Z,l.Z],props:{path:{type:String,default:""}},data:function(){return{error:null,loading:!1,semaphore:new c.Z(30)}},computed:f(f({},(0,r.Se)(["files","tags","tagsNames"])),{},{tagId:function(){return this.$store.getters.tagId(this.path)},tag:function(){return this.tags[this.tagId]},fileIds:function(){return this.tag?this.tag.files:[]},isEmpty:function(){return 0===this.fileIds.length}}),watch:{path:function(){var n=this;return h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.fetchContent();case 1:case"end":return t.stop()}}),t)})))()}},beforeMount:function(){var n=this;return h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.fetchContent();case 1:case"end":return t.stop()}}),t)})))()},methods:{fetchContent:function(){var n=this;return h(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(OCA.Viewer.close(),n.loading=!0,n.error=null,t.prev=3,n.tags[n.tagId]){t.next=7;break}return t.next=7,n.$store.dispatch("fetchAllTags",{signal:n.abortController.signal});case 7:return t.next=9,n.$store.dispatch("fetchTagFiles",{id:n.tagId,signal:n.abortController.signal});case 9:t.next=15;break;case 11:t.prev=11,t.t0=t.catch(3),p.error(t.t0),n.error=!0;case 15:return t.prev=15,n.loading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,11,15,18]])})))()},openViewer:function(n){var t=this,e=this.files[n];OCA.Viewer.open({path:e.filename,list:this.fileIds.map((function(n){return t.files[n]})),loadMore:e.loadMore?h(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadMore(!0);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))):function(){return[]},canLoop:e.canLoop})}}};var v=e(93379),C=e.n(v),w=e(7795),b=e.n(w),x=e(90569),y=e.n(x),_=e(3565),k=e.n(_),O=e(19216),T=e.n(O),I=e(44589),N=e.n(I),j=e(64148),P={};P.styleTagTransform=N(),P.setAttributes=k(),P.insert=y().bind(null,"head"),P.domAPI=b(),P.insertStyleElement=T();C()(j.Z,P);j.Z&&j.Z.locals&&j.Z.locals;const E=(0,e(51900).Z)(A,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.error?e("NcEmptyContent",{attrs:{title:n.t("photos","An error occurred")}}):n.loading?e("NcLoadingIcon",{staticClass:"loader"}):e("div",[e("div",{staticClass:"photos-navigation"},[e("NcActions",{staticClass:"photos-navigation__back"},[e("NcActionButton",{on:{click:function(t){return n.$router.push({name:"tags"})}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("ArrowLeft")]},proxy:!0}])},[n._v("\n\t\t\t\t"+n._s(n.t("photos","Back to tags overview"))+"\n\t\t\t")])],1),n._v(" "),e("h2",{staticClass:"photos-navigation__title"},[n._v("\n\t\t\t"+n._s(n.path)+"\n\t\t")])],1),n._v(" "),e("div",{staticClass:"heading-subline"},[n._v("\n\t\t"+n._s(n.n("photos","%n photo","%n photos",n.fileIds.length))+"\n\t")]),n._v(" "),n.isEmpty?e("NcEmptyContent",{attrs:{title:n.t("photos","No photos with this tag yet")}}):n._e(),n._v(" "),e("FilesListViewer",{staticClass:"tag__photos",attrs:{"use-window":!0,"file-ids":n.fileIds,"base-height":n.isMobile?120:200,loading:n.loading},scopedSlots:n._u([{key:"default",fn:function(t){var r=t.file,o=t.visibility;return e("File",{attrs:{file:n.files[r.id],"allow-selection":!0,selected:!0===n.selection[r.id],visibility:o,semaphore:n.semaphore},on:{click:n.openViewer,"select-toggled":n.onFileSelectToggle}})}}])})],1)}),[],!1,null,"64772592",null).exports}}]);
//# sourceMappingURL=photos-src_views_TagContent_vue.js.map?v=1cb49390a7063cb8fbd4