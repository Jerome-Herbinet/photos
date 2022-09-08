"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_Timeline_vue"],{61495:(n,t,e)=>{e.d(t,{Z:()=>l});var i=e(87537),a=e.n(i),o=e(23645),r=e.n(o)()(a());r.push([n.id,".album-picker[data-v-943c5c1a]{padding:32px;padding-top:16px}.album-picker h2[data-v-943c5c1a]{display:flex;align-items:center;height:60px;padding-left:8px}.album-picker h2 .loading-icon[data-v-943c5c1a]{margin-left:32px}.album-picker .albums-container[data-v-943c5c1a]{min-height:150px;max-height:350px;overflow:scroll;padding-right:8px}.album-picker .albums-container .album[data-v-943c5c1a]{display:flex;padding:8px;border-radius:8px}.album-picker .albums-container .album[data-v-943c5c1a],.album-picker .albums-container .album *[data-v-943c5c1a]{cursor:pointer}.album-picker .albums-container .album[data-v-943c5c1a]:not(:last-child){margin-bottom:16px}.album-picker .albums-container .album[data-v-943c5c1a]:hover{background:var(--color-background-dark)}.album-picker .albums-container .album__image[data-v-943c5c1a]{width:50px;height:50px;object-fit:none;border-radius:4px;margin-right:8px;background:var(--color-background-darker)}.album-picker .albums-container .album__image--placeholder[data-v-943c5c1a]{background:var(--color-primary-light)}.album-picker .albums-container .album__image--placeholder[data-v-943c5c1a]  .material-design-icon{width:100%;height:100%}.album-picker .albums-container .album__image--placeholder[data-v-943c5c1a]  .material-design-icon .material-design-icon__svg{fill:var(--color-primary)}.album-picker .albums-container .album__details[data-v-943c5c1a]{display:flex;align-items:flex-start;flex-direction:column;min-width:0}.album-picker .albums-container .album__details__first-line[data-v-943c5c1a]{width:100%}.album-picker .albums-container .album__details__name[data-v-943c5c1a]{display:block;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album-picker .albums-container .album__details__second-line[data-v-943c5c1a]{color:var(--color-text-lighter)}.album-picker .new-album-button[data-v-943c5c1a]{margin-top:32px}","",{version:3,sources:["webpack://./src/components/AlbumPicker.vue"],names:[],mappings:"AA8HA,+BACC,YAAA,CACA,gBAAA,CAEA,kCACC,YAAA,CACA,kBAAA,CACA,WAAA,CACA,gBAAA,CAEA,gDACC,gBAAA,CAIF,iDACC,gBAAA,CACA,gBAAA,CACA,eAAA,CACA,iBAAA,CAEA,wDACC,YAAA,CACA,WAAA,CACA,iBAAA,CAEA,kHACC,cAAA,CAGD,yEACC,kBAAA,CAGD,8DACC,uCAAA,CAGD,+DACC,UAAA,CACA,WAAA,CACA,eAAA,CACA,iBAAA,CACA,gBAAA,CACA,yCAAA,CAEA,4EACC,qCAAA,CAEA,mGACC,UAAA,CACA,WAAA,CAEA,8HACC,yBAAA,CAMJ,iEACC,YAAA,CACA,sBAAA,CACA,qBAAA,CACA,WAAA,CAEA,6EACC,UAAA,CAGD,uEACC,aAAA,CACA,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,8EACC,+BAAA,CAMJ,iDACC,eAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album-picker {\n\tpadding: 32px;\n\tpadding-top: 16px;\n\n\th2 {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\theight: 60px;\n\t\tpadding-left: 8px;\n\n\t\t.loading-icon {\n\t\t\tmargin-left: 32px;\n\t\t}\n\t}\n\n\t.albums-container {\n\t\tmin-height: 150px;\n\t\tmax-height: 350px;\n\t\toverflow: scroll;\n\t\tpadding-right: 8px;\n\n\t\t.album {\n\t\t\tdisplay: flex;\n\t\t\tpadding: 8px;\n\t\t\tborder-radius: 8px;\n\n\t\t\t&, & * {\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\n\t\t\t&:not(:last-child) {\n\t\t\t\tmargin-bottom: 16px;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&__image {\n\t\t\t\twidth: 50px;\n\t\t\t\theight: 50px;\n\t\t\t\tobject-fit: none;\n\t\t\t\tborder-radius: 4px;\n\t\t\t\tmargin-right: 8px;\n\t\t\t\tbackground: var(--color-background-darker);\n\n\t\t\t\t&--placeholder {\n\t\t\t\t\tbackground: var(--color-primary-light);\n\n\t\t\t\t\t::v-deep .material-design-icon {\n\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\theight: 100%;\n\n\t\t\t\t\t\t.material-design-icon__svg {\n\t\t\t\t\t\t\tfill: var(--color-primary);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t&__details {\n\t\t\t\tdisplay: flex;\n\t\t\t\talign-items: flex-start;\n\t\t\t\tflex-direction: column;\n\t\t\t\tmin-width: 0;\n\n\t\t\t\t&__first-line {\n\t\t\t\t\twidth: 100%;\n\t\t\t\t}\n\n\t\t\t\t&__name {\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\toverflow: hidden;\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t\ttext-overflow: ellipsis;\n\t\t\t\t}\n\n\t\t\t\t&__second-line{\n\t\t\t\t\tcolor: var(--color-text-lighter);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t.new-album-button {\n\t\tmargin-top: 32px;\n\t}\n}\n'],sourceRoot:""}]);const l=r},45923:(n,t,e)=>{e.d(t,{Z:()=>l});var i=e(87537),a=e.n(i),o=e(23645),r=e.n(o)()(a());r.push([n.id,".timeline[data-v-8eb2b022]{display:flex;flex-direction:column;height:100%}.timeline__header[data-v-8eb2b022]{display:flex;align-items:center;position:-webkit-sticky;position:sticky;width:100%;height:60px;z-index:3;background:var(--color-main-background);padding:0 64px}@media only screen and (max-width: 1200px){.timeline__header[data-v-8eb2b022]{padding:0 48px}}.timeline__header>*[data-v-8eb2b022]{margin-right:8px}.timeline__header .loader[data-v-8eb2b022]{margin-left:16px}.timeline__file-list[data-v-8eb2b022]{padding:0 64px;height:calc(100% - 60px)}@media only screen and (max-width: 1200px){.timeline__file-list[data-v-8eb2b022]{padding:0 4px}}.timeline__file-list[data-v-8eb2b022]  .files-list-viewer__section-header{top:0}.timeline__file-list .section-header[data-v-8eb2b022]{padding:24px 0 16px 0}","",{version:3,sources:["webpack://./src/views/Timeline.vue"],names:[],mappings:"AA6UA,2BACC,YAAA,CACA,qBAAA,CACA,WAAA,CAEA,mCACC,YAAA,CACA,kBAAA,CACA,uBAAA,CAAA,eAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,uCAAA,CACA,cAAA,CAEA,2CAVD,mCAWE,cAAA,CAAA,CAGD,qCACC,gBAAA,CAGD,2CACC,gBAAA,CAIF,sCACC,cAAA,CACA,wBAAA,CAEA,2CAJD,sCAKE,aAAA,CAAA,CAGD,0EACC,KAAA,CAGD,sDACC,qBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.timeline {\n\tdisplay: flex;\n\tflex-direction: column;\n\theight: 100%;\n\n\t&__header {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tposition: sticky;\n\t\twidth: 100%;\n\t\theight: 60px;\n\t\tz-index: 3;\n\t\tbackground: var(--color-main-background);\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 48px;\n\t\t}\n\n\t\t& > * {\n\t\t\tmargin-right: 8px;\n\t\t}\n\n\t\t.loader {\n\t\t\tmargin-left: 16px;\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tpadding: 0 64px;\n\t\theight: calc(100% - 60px);\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\n\t\t::v-deep .files-list-viewer__section-header {\n\t\t\ttop: 0;\n\t\t}\n\n\t\t.section-header {\n\t\t\tpadding: 24px 0 16px 0;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]);const l=r},36288:(n,t,e)=>{e.d(t,{Z:()=>a});const i={name:"ImageMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const a=(0,e(51900).Z)(i,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon image-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M22,16V4A2,2 0 0,0 20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16M11,12L13.03,14.71L16,11L20,16H8M2,6V20A2,2 0 0,0 4,22H18V20H4V6"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports},35578:(n,t,e)=>{e.r(t),e.d(t,{default:()=>K});var i=e(20629),a=e(40502),o=e(33691);const r={name:"PlusBoxMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var l=e(51900);const s=(0,l.Z)(r,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon plus-box-multiple-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,11H15V15H13V11H9V9H13V5H15V9H19M20,2H8A2,2 0 0,0 6,4V16A2,2 0 0,0 8,18H20A2,2 0 0,0 22,16V4A2,2 0 0,0 20,2M4,6H2V20A2,2 0 0,0 4,22H18V20H4V6Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports;const c={name:"FileUploadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const u=(0,l.Z)(c,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("span",n._b({staticClass:"material-design-icon file-upload-icon",attrs:{"aria-hidden":!n.title,"aria-label":n.title,role:"img"},on:{click:function(t){return n.$emit("click",t)}}},"span",n.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:n.fillColor,width:n.size,height:n.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M13.5,16V19H10.5V16H8L12,12L16,16H13.5M13,9V3.5L18.5,9H13Z"}},[n.title?e("title",[n._v(n._s(n.title))]):n._e()])])])}),[],!1,null,null,null).exports;var A=e(75760),d=e(2470),m=e(33476),p=e(80351),g=e.n(p),b=e(59537),h=e(3301),C=e(66951),f=e(28391),v=e(98171),_=e(19172),x=e(77571),k=e(72034),w=e(36288),y=e(79753),F=e(12945);const B={name:"AlbumPicker",components:{Plus:a.Z,ImageMultiple:w.Z,NcButton:m.NcButton,NcLoadingIcon:m.NcLoadingIcon,AlbumForm:k.Z},filters:{toCoverUrl:function(n){return(0,y.generateUrl)("/core/preview?fileId=".concat(n,"&x=",64,"&y=",64,"&forceIcon=0&a=1"))}},mixins:[F.Z],data:function(){return{showAlbumCreationForm:!1}},methods:{albumCreatedHandler:function(){this.showAlbumCreationForm=!1,this.fetchAlbums()},pickAlbum:function(n){this.$emit("album-picked",n)}}};var T=e(93379),M=e.n(T),N=e(7795),Z=e.n(N),D=e(90569),I=e.n(D),P=e(3565),E=e.n(P),S=e(19216),H=e.n(S),W=e(44589),V=e.n(W),O=e(61495),L={};L.styleTagTransform=V(),L.setAttributes=E(),L.insert=I().bind(null,"head"),L.domAPI=Z(),L.insertStyleElement=H();M()(O.Z,L);O.Z&&O.Z.locals&&O.Z.locals;const Y=(0,l.Z)(B,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.showAlbumCreationForm?e("AlbumForm",{attrs:{"display-back-button":!0,title:n.t("photos","New album")},on:{back:function(t){n.showAlbumCreationForm=!1},done:n.albumCreatedHandler}}):e("div",{staticClass:"album-picker"},[e("h2",[n._v("\n\t\t"+n._s(n.t("photos","Add to Album"))+"\n\t\t"),n.loadingAlbums?e("NcLoadingIcon",{staticClass:"loading-icon"}):n._e()],1),n._v(" "),e("div",{staticClass:"albums-container"},n._l(n.albums,(function(t){return e("div",{key:t.basename,staticClass:"album",on:{click:function(e){return n.pickAlbum(t.basename)}}},[0!==t.lastPhoto?e("img",{staticClass:"album__image",attrs:{src:n._f("toCoverUrl")(t.lastPhoto)}}):e("div",{staticClass:"album__image album__image--placeholder"},[e("ImageMultiple",{attrs:{size:32}})],1),n._v(" "),e("div",{staticClass:"album__details"},[e("div",{staticClass:"album__details__first-line"},[e("b",{staticClass:"album__details__name"},[n._v("\n\t\t\t\t\t\t"+n._s(t.basename)+"\n\t\t\t\t\t")])]),n._v(" "),e("div",{staticClass:"album__details__second-line"},[n._v("\n\t\t\t\t\t"+n._s(n.n("photos","%n item","%n photos and videos",t.nbItems))+"\n\t\t\t\t\t")])])])})),0),n._v(" "),e("NcButton",{staticClass:"new-album-button",attrs:{"aria-label":n.t("photos","Create a new album."),type:"tertiary"},on:{click:function(t){n.showAlbumCreationForm=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[n._v("\n\t\t"+n._s(n.t("photos","Create new album"))+"\n\t")])],1)}),[],!1,null,"943c5c1a",null).exports;function R(n,t,e,i,a,o,r){try{var l=n[o](r),s=l.value}catch(n){return void e(n)}l.done?t(s):Promise.resolve(s).then(i,a)}function j(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function r(n){R(o,i,a,r,l,"next",n)}function l(n){R(o,i,a,r,l,"throw",n)}r(void 0)}))}}function z(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,i)}return e}function U(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?z(Object(e),!0).forEach((function(t){$(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):z(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function $(n,t,e){return t in n?Object.defineProperty(n,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):n[t]=e,n}const G={name:"Timeline",components:{Delete:o.Z,FileUpload:u,PlusBoxMultiple:s,Star:A.default,Download:d.Z,NcLoadingIcon:m.NcLoadingIcon,NcEmptyContent:m.NcEmptyContent,NcModal:m.NcModal,NcActions:m.NcActions,NcActionButton:m.NcActionButton,NcButton:m.NcButton,Plus:a.Z,AlbumForm:k.Z,AlbumPicker:Y,FilesListViewer:_.Z,File:x.Z},filters:{dateMonth:function(n){return g()(n,"YYYYMM").format("MMMM")},dateYear:function(n){return g()(n,"YYYYMM").format("YYYY")}},mixins:[C.Z,v.Z,f.Z,m.isMobile],beforeRouteLeave:function(n,t,e){window.scrollTo(0,0),e()},props:{onlyFavorites:{type:Boolean,default:!1},mimesType:{type:Array,default:function(){return h.Oj}},onThisDay:{type:Boolean,default:!1}},data:function(){return{loadingCount:0,showAlbumCreationForm:!1,showAlbumPicker:!1}},computed:U(U({},(0,i.Se)(["files"])),{},{shouldFavorite:function(){var n=this;return this.selectedFileIds.some((function(t){return 0===n.$store.state.files.files[t].favorite}))}}),methods:U(U({},(0,i.nv)(["deleteFiles","toggleFavoriteForFiles","downloadFiles","addFilesToAlbum"])),{},{getContent:function(){this.fetchFiles("",{mimesType:this.mimesType,onThisDay:this.onThisDay,onlyFavorites:this.onlyFavorites})},openViewer:function(n){var t=this,e=this.files[n];OCA.Viewer.open({path:e.filename,list:Object.values(this.fileIdsByMonth).flat().map((function(n){return t.files[n]})),loadMore:e.loadMore?j(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.loadMore(!0);case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)}))):function(){return[]},canLoop:e.canLoop})},openUploader:function(){},addSelectionToAlbum:function(n){var t=this;return j(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.showAlbumPicker=!1,t.loadingCount++,e.next=5,t.addFilesToAlbum({albumName:n,fileIdsToAdd:t.selectedFileIds});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),b.Z.error(e.t0);case 10:return e.prev=10,t.loadingCount--,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},favoriteSelection:function(){var n=this;return j(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,t.next=4,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:!0});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),b.Z.error(t.t0);case 9:return t.prev=9,n.loadingCount--,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},unFavoriteSelection:function(){var n=this;return j(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,t.next=4,n.toggleFavoriteForFiles({fileIds:n.selectedFileIds,favoriteState:!1});case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),b.Z.error(t.t0);case 9:return t.prev=9,n.loadingCount--,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()},deleteSelection:function(){var n=this;return j(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,e=n.selectedFileIds,n.onUncheckFiles(e),n.fetchedFileIds=n.fetchedFileIds.filter((function(n){return!e.includes(n)})),t.next=7,n.deleteFiles(e);case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),b.Z.error(t.t0);case 12:return t.prev=12,n.loadingCount--,t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()},downloadSelection:function(){var n=this;return j(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n.loadingCount++,t.next=4,n.downloadFiles(n.selectedFileIds);case 4:t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),b.Z.error(t.t0);case 9:return t.prev=9,n.loadingCount--,t.finish(9);case 12:case"end":return t.stop()}}),t,null,[[0,6,9,12]])})))()}})};var q=e(45923),J={};J.styleTagTransform=V(),J.setAttributes=E(),J.insert=I().bind(null,"head"),J.domAPI=Z(),J.insertStyleElement=H();M()(q.Z,J);q.Z&&q.Z.locals&&q.Z.locals;const K=(0,l.Z)(G,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return n.errorFetchingFiles?e("NcEmptyContent",[n._v("\n\t"+n._s(n.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"timeline"},[e("div",{staticClass:"timeline__header"},[0===n.selectedFileIds.length?e("NcActions",{attrs:{"force-title":!0,"force-menu":!0,"menu-title":n.t("photos","Add"),primary:!0}},[e("Plus",{attrs:{slot:"icon"},slot:"icon"}),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0},on:{click:n.openUploader}},[n._v("\n\t\t\t\t"+n._s(n.t("photos","Upload media"))+"\n\t\t\t\t"),e("FileUpload",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Create a new album")},on:{click:function(t){n.showAlbumCreationForm=!0}}},[n._v("\n\t\t\t\t"+n._s(n.t("photos","Create new album"))+"\n\t\t\t\t"),e("PlusBoxMultiple",{attrs:{slot:"icon"},slot:"icon"})],1)],1):[e("NcButton",{attrs:{"close-after-click":!0,type:"primary","aria-label":n.t("photos","Add selection to an album")},on:{click:function(t){n.showAlbumPicker=!0}},scopedSlots:n._u([{key:"icon",fn:function(){return[e("Plus",{attrs:{slot:"icon"},slot:"icon"})]},proxy:!0}])},[n._v("\n\t\t\t\t"+n._s(n.t("photos","Add to album"))+"\n\t\t\t")]),n._v(" "),e("NcActions",[e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Download selection")},on:{click:n.downloadSelection}},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Download"))+"\n\t\t\t\t\t"),e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),n.shouldFavorite?e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Mark selection as favorite")},on:{click:n.favoriteSelection}},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Favorite"))+"\n\t\t\t\t\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1):e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Remove selection from favorites")},on:{click:n.unFavoriteSelection}},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Remove from favorites"))+"\n\t\t\t\t\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1),n._v(" "),e("NcActionButton",{attrs:{"close-after-click":!0,"aria-label":n.t("photos","Delete selection")},on:{click:n.deleteSelection}},[n._v("\n\t\t\t\t\t"+n._s(n.t("photos","Delete"))+"\n\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1)],1),n._v(" "),e("NcActions")],n._v(" "),n.loadingCount>0?e("NcLoadingIcon",{key:"loader",attrs:{size:32}}):n._e()],2),n._v(" "),e("FilesListViewer",{ref:"filesListViewer",staticClass:"timeline__file-list",attrs:{"file-ids-by-section":n.fileIdsByMonth,sections:n.monthsList,loading:n.loadingFiles,"base-height":n.isMobile?120:200,"empty-message":n.t("photos","No photos in here")},on:{"need-content":n.getContent},scopedSlots:n._u([{key:"default",fn:function(t){var i=t.file,a=t.visibility;return[i.sectionHeader?e("h3",{staticClass:"section-header",attrs:{id:"file-picker-section-header-"+i.id}},[e("b",[n._v(n._s(n._f("dateMonth")(i.id)))]),n._v("\n\t\t\t\t"+n._s(n._f("dateYear")(i.id))+"\n\t\t\t")]):e("File",{attrs:{file:n.files[i.id],"allow-selection":!0,selected:!0===n.selection[i.id],visibility:a,semaphore:n.semaphore},on:{click:n.openViewer,"select-toggled":n.onFileSelectToggle}})]}}])}),n._v(" "),n.showAlbumCreationForm?e("NcModal",{key:"albumCreationForm",attrs:{"close-button-contained":!1,title:n.t("photos","New album")},on:{close:function(t){n.showAlbumCreationForm=!1}}},[e("AlbumForm",{on:{done:function(t){n.showAlbumCreationForm=!1}}})],1):n._e(),n._v(" "),n.showAlbumPicker?e("NcModal",{key:"albumPicker",attrs:{"close-button-contained":!1,title:n.t("photos","Add to album")},on:{close:function(t){n.showAlbumPicker=!1}}},[e("AlbumPicker",{on:{"album-picked":n.addSelectionToAlbum}})],1):n._e()],1)}),[],!1,null,"8eb2b022",null).exports}}]);
//# sourceMappingURL=photos-src_views_Timeline_vue.js.map?v=e61515e8948168a5d0a3