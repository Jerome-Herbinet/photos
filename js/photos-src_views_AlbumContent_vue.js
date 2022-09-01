/*! For license information please see photos-src_views_AlbumContent_vue.js.LICENSE.txt */
"use strict";(self.webpackChunkphotos=self.webpackChunkphotos||[]).push([["src_views_AlbumContent_vue","src_assets_Illustrations_folder_svg"],{28391:(t,n,e)=>{function i(t,n){var e="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!e){if(Array.isArray(t)||(e=function(t,n){if(!t)return;if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(t,n)}(t))||n&&t&&"number"==typeof t.length){e&&(t=e);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,s=!1;return{s:function(){e=e.call(t)},n:function(){var t=e.next();return l=t.done,t},e:function(t){s=!0,o=t},f:function(){try{l||null==e.return||e.return()}finally{if(s)throw o}}}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}e.d(n,{Z:()=>a});const a={name:"FilesByMonthMixin",computed:{fileIdsByMonth:function(){var t,n=this,e={},r=i(this.fetchedFileIds);try{for(r.s();!(t=r.n()).done;){var a,o=t.value,l=this.files[o];e[l.month]=null!==(a=e[l.month])&&void 0!==a?a:[],e[l.month].push(l.fileid)}}catch(t){r.e(t)}finally{r.f()}return Object.keys(e).forEach((function(t){return e[t].sort(n.sortFilesByTimestamp)})),e},monthsList:function(){return Object.keys(this.fileIdsByMonth).sort((function(t,n){return t>n?-1:1}))}}}},62670:(t,n,e)=>{e.d(n,{Z:()=>l});var i=e(87537),r=e.n(i),a=e(23645),o=e.n(a)()(r());o.push([t.id,".file-picker[data-v-de65aff0]{display:flex;flex-direction:column;padding:12px}.file-picker__content[data-v-de65aff0]{display:flex;align-items:flex-start;flex-grow:1;height:500px}.file-picker__navigation[data-v-de65aff0]{flex-basis:200px;overflow:scroll;margin-right:8px;padding-right:8px;height:100%}@media only screen and (max-width: 1200px){.file-picker__navigation[data-v-de65aff0]{flex-basis:80px}}.file-picker__navigation--loading[data-v-de65aff0]{background:var(--color-primary-light);border-radius:16px}.file-picker__navigation__month[data-v-de65aff0]{font-weight:bold;font-size:16px;border-radius:48px;padding:8px 16px;margin:4px 0;cursor:pointer}@media only screen and (max-width: 1200px){.file-picker__navigation__month[data-v-de65aff0]{text-align:center}}.file-picker__navigation__month[data-v-de65aff0]:hover{background:var(--color-background-dark)}.file-picker__navigation__month.selected[data-v-de65aff0]{background:var(--color-primary-element-lighter)}.file-picker__file-list[data-v-de65aff0]{flex-grow:1;min-width:0;height:100%}.file-picker__file-list--loading[data-v-de65aff0]{background:var(--color-primary-light);border-radius:16px}.file-picker__file-list .section-header[data-v-de65aff0]{font-weight:bold;font-size:20px;padding:8px 0 4px 0}.file-picker__actions[data-v-de65aff0]{display:flex;justify-content:space-between;justify-items:center;padding-top:16px}","",{version:3,sources:["webpack://./src/components/FilesPicker.vue"],names:[],mappings:"AA+KA,8BACC,YAAA,CACA,qBAAA,CACA,YAAA,CAEA,uCACC,YAAA,CACA,sBAAA,CACA,WAAA,CACA,YAAA,CAGD,0CACC,gBAAA,CACA,eAAA,CACA,gBAAA,CACA,iBAAA,CACA,WAAA,CAEA,2CAPD,0CAQE,eAAA,CAAA,CAGD,mDACC,qCAAA,CACA,kBAAA,CAGD,iDACC,gBAAA,CACA,cAAA,CACA,kBAAA,CACA,gBAAA,CACA,YAAA,CACA,cAAA,CAEA,2CARD,iDASE,iBAAA,CAAA,CAGD,uDACC,uCAAA,CAGD,0DACC,+CAAA,CAKH,yCACC,WAAA,CACA,WAAA,CACA,WAAA,CAEA,kDACC,qCAAA,CACA,kBAAA,CAGD,yDACC,gBAAA,CACA,cAAA,CACA,mBAAA,CAIF,uCACC,YAAA,CACA,6BAAA,CACA,oBAAA,CACA,gBAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.file-picker {\n\tdisplay: flex;\n\tflex-direction: column;\n\tpadding: 12px;\n\n\t&__content {\n\t\tdisplay: flex;\n\t\talign-items: flex-start;\n\t\tflex-grow: 1;\n\t\theight: 500px;\n\t}\n\n\t&__navigation {\n\t\tflex-basis: 200px;\n\t\toverflow: scroll;\n\t\tmargin-right: 8px;\n\t\tpadding-right: 8px;\n\t\theight: 100%;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tflex-basis: 80px;\n\t\t}\n\n\t\t&--loading {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: 16px;\n\t\t}\n\n\t\t&__month {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 16px;\n\t\t\tborder-radius: 48px;\n\t\t\tpadding: 8px 16px;\n\t\t\tmargin: 4px 0;\n\t\t\tcursor: pointer;\n\n\t\t\t@media only screen and (max-width: 1200px) {\n\t\t\t\ttext-align: center;\n\t\t\t}\n\n\t\t\t&:hover {\n\t\t\t\tbackground: var(--color-background-dark);\n\t\t\t}\n\n\t\t\t&.selected {\n\t\t\t\tbackground: var(--color-primary-element-lighter);\n\t\t\t}\n\t\t}\n\t}\n\n\t&__file-list {\n\t\tflex-grow: 1;\n\t\tmin-width: 0;\n\t\theight: 100%;\n\n\t\t&--loading {\n\t\t\tbackground: var(--color-primary-light);\n\t\t\tborder-radius: 16px;\n\t\t}\n\n\t\t.section-header {\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 20px;\n\t\t\tpadding: 8px 0 4px 0;\n\t\t}\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tjustify-items: center;\n\t\tpadding-top: 16px;\n\t}\n}\n'],sourceRoot:""}]);const l=o},84701:(t,n,e)=>{e.d(n,{Z:()=>l});var i=e(87537),r=e.n(i),a=e(23645),o=e.n(a)()(r());o.push([t.id,".album[data-v-b8458cd0]{display:flex;flex-direction:column}.album__empty[data-v-b8458cd0]{display:flex;flex-direction:column;align-items:center}.album__empty__button[data-v-b8458cd0]{margin-top:32px}.album__location[data-v-b8458cd0]{margin-left:-4px;display:flex;color:var(--color-text-lighter)}.album__name[data-v-b8458cd0]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.album__header[data-v-b8458cd0]{display:flex;min-height:60px;align-items:center;justify-content:space-between;position:-webkit-sticky;position:sticky;top:var(--header-height);z-index:3;background:var(--color-main-background);padding:8px 64px 32px 64px}@media only screen and (max-width: 1200px){.album__header[data-v-b8458cd0]{padding:8px 48px 32px 48px}}.album__header__left[data-v-b8458cd0]{height:100%;display:flex;align-items:center;min-width:0}.album__header__title[data-v-b8458cd0]{min-width:0}.album__header__loader[data-v-b8458cd0]{margin-left:32px}.album__header__actions[data-v-b8458cd0]{display:flex;align-items:center}.album__header__actions button[data-v-b8458cd0]{margin-left:16px}.album__photos[data-v-b8458cd0]{height:100%;min-height:0;padding:0 64px}@media only screen and (max-width: 1200px){.album__photos[data-v-b8458cd0]{padding:0 4px}}.empty-content-with-illustration[data-v-b8458cd0]  .empty-content__icon{width:200px;height:200px}.empty-content-with-illustration[data-v-b8458cd0]  .empty-content__icon svg{width:200px;height:200px}","",{version:3,sources:["webpack://./src/views/AlbumContent.vue"],names:[],mappings:"AA2cA,wBACC,YAAA,CACA,qBAAA,CAEA,+BACC,YAAA,CACA,qBAAA,CACA,kBAAA,CAEA,uCACC,eAAA,CAKF,kCACC,gBAAA,CACA,YAAA,CACA,+BAAA,CAGD,8BACC,eAAA,CACA,kBAAA,CACA,sBAAA,CAGD,gCACC,YAAA,CACA,eAAA,CACA,kBAAA,CACA,6BAAA,CACA,uBAAA,CAAA,eAAA,CACA,wBAAA,CACA,SAAA,CACA,uCAAA,CACA,0BAAA,CAEA,2CAXD,gCAYE,0BAAA,CAAA,CAGD,sCACC,WAAA,CACA,YAAA,CACA,kBAAA,CACA,WAAA,CAGD,uCACC,WAAA,CAGD,wCACC,gBAAA,CAGD,yCACC,YAAA,CACA,kBAAA,CAEA,gDACC,gBAAA,CAKH,gCACC,WAAA,CACA,YAAA,CACA,cAAA,CAEA,2CALD,gCAME,aAAA,CAAA,CAMH,wEACC,WAAA,CACA,YAAA,CAEA,4EACC,WAAA,CACA,YAAA",sourcesContent:['$sizes: ("400": ("count": 3, "marginTop": 66, "marginW": 8), "700": ("count": 4, "marginTop": 66, "marginW": 8), "1024": ("count": 5, "marginTop": 66, "marginW": 44), "1280": ("count": 4, "marginTop": 66, "marginW": 44), "1440": ("count": 5, "marginTop": 88, "marginW": 66), "1600": ("count": 6, "marginTop": 88, "marginW": 66), "2048": ("count": 7, "marginTop": 88, "marginW": 66), "2560": ("count": 8, "marginTop": 88, "marginW": 88), "3440": ("count": 9, "marginTop": 88, "marginW": 88), "max": ("count": 10, "marginTop": 88, "marginW": 88));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.album {\n\tdisplay: flex;\n\tflex-direction: column;\n\n\t&__empty {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\n\t\t&__button {\n\t\t\tmargin-top: 32px;\n\t\t}\n\n\t}\n\n\t&__location {\n\t\tmargin-left: -4px;\n\t\tdisplay: flex;\n\t\tcolor: var(--color-text-lighter);\n\t}\n\n\t&__name {\n\t\toverflow: hidden;\n\t\twhite-space: nowrap;\n\t\ttext-overflow: ellipsis;\n\t}\n\n\t&__header {\n\t\tdisplay: flex;\n\t\tmin-height: 60px;\n\t\talign-items: center;\n\t\tjustify-content: space-between;\n\t\tposition: sticky;\n\t\ttop: var(--header-height);\n\t\tz-index: 3;\n\t\tbackground: var(--color-main-background);\n\t\tpadding: 8px 64px 32px 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 8px 48px 32px 48px;\n\t\t}\n\n\t\t&__left {\n\t\t\theight: 100%;\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tmin-width: 0;\n\t\t}\n\n\t\t&__title {\n\t\t\tmin-width: 0;\n\t\t}\n\n\t\t&__loader {\n\t\t\tmargin-left: 32px;\n\t\t}\n\n\t\t&__actions {\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\n\t\t\tbutton {\n\t\t\t\tmargin-left: 16px;\n\t\t\t}\n\t\t}\n\t}\n\n\t&__photos {\n\t\theight: 100%;\n\t\tmin-height: 0; // Prevent it from overflowing in a flex context.\n\t\tpadding: 0 64px;\n\n\t\t@media only screen and (max-width: 1200px) {\n\t\t\tpadding: 0 4px;\n\t\t}\n\n\t}\n}\n\n.empty-content-with-illustration ::v-deep .empty-content__icon {\n\twidth: 200px;\n\theight: 200px;\n\n\tsvg {\n\t\twidth: 200px;\n\t\theight: 200px;\n\t}\n}\n'],sourceRoot:""}]);const l=o},24777:(t,n,e)=>{e.d(n,{Z:()=>r});const i={name:"AlertCircleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const r=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",t._b({staticClass:"material-design-icon alert-circle-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},33691:(t,n,e)=>{e.d(n,{Z:()=>r});const i={name:"DeleteIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const r=(0,e(51900).Z)(i,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",t._b({staticClass:"material-design-icon delete-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},17861:(t,n,e)=>{e.r(n),e.d(n,{default:()=>ut});var i=e(20629),r=e(93050),a=e(40502),o=e(91482),l=e(33691);const s={name:"ImagePlusIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};var c=e(51900);const d=(0,c.Z)(s,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",t._b({staticClass:"material-design-icon image-plus-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M18 15V18H15V20H18V23H20V20H23V18H20V15H18M13.3 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5V13.3C20.4 13.1 19.7 13 19 13C17.9 13 16.8 13.3 15.9 13.9L14.5 12L11 16.5L8.5 13.5L5 18H13.1C13 18.3 13 18.7 13 19C13 19.7 13.1 20.4 13.3 21Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var u=e(24777),f=e(75760),p=e(31894),A=e(2470);const m={name:"DownloadMultipleIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const h=(0,c.Z)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",t._b({staticClass:"material-design-icon download-multiple-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9,1V7H5L12,14L19,7H15V1H9M5,16V18H19V16H5M5,20V22H19V20H5Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var g=e(33476),b=e(45994),C=e(12945),v=e(66951),_=e(98171),x=e(42408),y=e(53932),w=e(8702);const k={name:"UploadIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}};const F=(0,c.Z)(k,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("span",t._b({staticClass:"material-design-icon upload-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(n){return t.$emit("click",n)}}},"span",t.$attrs,!1),[e("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[e("path",{attrs:{d:"M9,16V10H5L12,3L19,10H15V16H9M5,20V18H19V20H5Z"}},[t.title?e("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports;var M=e(80351),B=e.n(M),S=e(28391);function Z(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function E(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const P={name:"FilesPicker",components:{ImagePlus:d,Upload:F,Button:g.Button,FilesListViewer:x.Z,File:y.Z,Loader:w.Z},filters:{dateMonthAndYear:function(t){return B()(t,"YYYYMM").format("MMMM YYYY")}},mixins:[v.Z,S.Z,_.Z],props:{destination:{type:String,required:!0},blacklistIds:{type:Array,default:function(){return[]}},loading:{type:Boolean,default:!1}},data:function(){return{targetMonth:null}},computed:function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(e),!0).forEach((function(n){E(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):Z(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}({},(0,i.Se)(["files"])),watch:{monthsList:function(t){null===this.targetMonth&&(this.targetMonth=t[0])}},methods:{getFiles:function(){this.fetchFiles("",{},this.blacklistIds)},emitPickedEvent:function(){this.$emit("files-picked",this.selectedFileIds)}}};var D=e(93379),I=e.n(D),T=e(7795),O=e.n(T),H=e(90569),j=e.n(H),V=e(3565),L=e.n(V),R=e(19216),W=e.n(R),Y=e(44589),$=e.n(Y),z=e(62670),N={};N.styleTagTransform=$(),N.setAttributes=L(),N.insert=j().bind(null,"head"),N.domAPI=O(),N.insertStyleElement=W();I()(z.Z,N);z.Z&&z.Z.locals&&z.Z.locals;const G=(0,c.Z)(P,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"file-picker"},[e("div",{staticClass:"file-picker__content"},[e("div",{staticClass:"file-picker__navigation",class:{"file-picker__navigation--loading":t.loadingFiles&&0===t.monthsList.length}},t._l(t.monthsList,(function(n){return e("div",{key:n,staticClass:"file-picker__navigation__month",class:{selected:t.targetMonth===n},on:{click:function(e){t.targetMonth=n}}},[t._v("\n\t\t\t\t"+t._s(t._f("dateMonthAndYear")(n))+"\n\t\t\t")])})),0),t._v(" "),e("FilesListViewer",{staticClass:"file-picker__file-list",class:{"file-picker__file-list--loading":t.loadingFiles&&0===t.monthsList.length},attrs:{"file-ids-by-section":t.fileIdsByMonth,sections:t.monthsList,loading:t.loadingFiles,"base-height":100,"section-header-height":50,"scroll-to-section":t.targetMonth},on:{"need-content":t.getFiles},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.file,r=n.height,a=n.visibility;return[i.sectionHeader?e("h3",{staticClass:"section-header",style:{height:r+"px"},attrs:{id:"file-picker-section-header-"+i.id}},[t._v("\n\t\t\t\t\t"+t._s(t._f("dateMonthAndYear")(i.id))+"\n\t\t\t\t")]):e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],visibility:a,semaphore:t.semaphore},on:{"select-toggled":t.onFileSelectToggle}})]}}])})],1),t._v(" "),e("div",{staticClass:"file-picker__actions"},[e("Button",{attrs:{type:"tertiary",disabled:t.loading},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Upload")]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Upload from computer"))+"\n\t\t")]),t._v(" "),e("Button",{attrs:{type:"primary",disabled:t.loading||0===t.selectedFileIds.length},on:{click:t.emitPickedEvent},scopedSlots:t._u([{key:"icon",fn:function(){return[t.loading?t._e():e("ImagePlus"),t._v(" "),t.loading?e("Loader"):t._e()]},proxy:!0}])},[t._v("\n\t\t\t"+t._s(t.t("photos","Add to {destination}",{destination:t.destination}))+"\n\t\t")])],1)])}),[],!1,null,"de65aff0",null).exports;const U={name:"ShareAlbumForm"};const q=(0,c.Z)(U,(function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",[t._v("ShareAlbumForm")])}),[],!1,null,null,null).exports;var K=e(29195),X=e(80917),Q=e(59537),J=e(81067),tt=e(2161),nt=e(94236),et=e(69363);function it(t,n,e,i,r,a,o){try{var l=t[a](o),s=l.value}catch(t){return void e(t)}l.done?n(s):Promise.resolve(s).then(i,r)}function rt(t){return function(){var n=this,e=arguments;return new Promise((function(i,r){var a=t.apply(n,e);function o(t){it(a,i,r,o,l,"next",t)}function l(t){it(a,i,r,o,l,"throw",t)}o(void 0)}))}}function at(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,i)}return e}function ot(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?at(Object(e),!0).forEach((function(n){lt(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):at(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function lt(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const st={name:"AlbumContent",components:{MapMarker:r.Z,Plus:a.Z,Pencil:o.default,Star:f.default,Close:p.default,Download:A.Z,DownloadMultiple:h,Delete:l.Z,ImagePlus:d,AlertCircle:u.Z,FilesListViewer:x.Z,File:y.Z,AlbumForm:K.Z,EmptyContent:g.EmptyContent,Loader:w.Z,Actions:g.Actions,ActionButton:g.ActionButton,Button:g.Button,Modal:g.Modal,FilesPicker:G,ShareAlbumForm:q},mixins:[C.Z,v.Z,_.Z,et.Z,g.isMobile],props:{albumName:{type:String,default:"/"}},data:function(){return{showAddPhotosModal:!1,showShareModal:!1,showEditAlbumForm:!1,FolderIllustration:X,loadingCount:0,loadingAddFilesToAlbum:!1}},computed:ot(ot({},(0,i.Se)(["files","albumsFiles"])),{},{album:function(){return this.albums[this.albumName]},albumFileIds:function(){return this.albumsFiles[this.albumName]||[]},shouldFavoriteSelection:function(){var t=this;return this.selectedFileIds.some((function(n){return 0===t.$store.state.files.files[n].favorite}))}}),watch:{album:function(){this.fetchAlbumContent()}},methods:ot(ot({},(0,i.nv)(["appendFiles","deleteAlbum","addFilesToAlbum","removeFilesFromAlbum","toggleFavoriteForFiles","downloadFiles"])),{},{fetchAlbumContent:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){var e,i,r,a,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.loadingFiles&&!t.showEditAlbumForm){n.next=2;break}return n.abrupt("return",[]);case 2:return n.prev=2,t.errorFetchingFiles=null,t.loadingFiles=!0,n.next=7,J.Z.getDirectoryContents("/photos/".concat(null===(e=(0,b.ts)())||void 0===e?void 0:e.uid,"/albums/").concat(t.albumName),{data:tt.Z,details:!0,signal:t.abortController.signal});case 7:if(i=n.sent,r=i.data.map((function(t){return(0,nt.AX)(t)})).map((function(t){return ot(ot({},t),{},{filename:t.realpath.replace("/".concat((0,b.ts)().uid,"/files"),"")})})),a=r.map((function(t){return t.fileid})).map((function(t){return t.toString()})),t.appendFiles(r),!(r.length>0)){n.next=14;break}return n.next=14,t.$store.commit("addFilesToAlbum",{albumName:t.albumName,fileIdsToAdd:a});case 14:Q.Z.debug("[AlbumContent] Fetched ".concat(a.length," new files: "),a),n.next=29;break;case 17:if(n.prev=17,n.t0=n.catch(2),404!==(null===(o=n.t0.response)||void 0===o?void 0:o.status)){n.next=23;break}t.errorFetchingFiles=404,n.next=28;break;case 23:if("ERR_CANCELED"!==n.t0.code){n.next=27;break}return n.abrupt("return");case 27:t.errorFetchingFiles=n.t0;case 28:Q.Z.error("Error fetching album files",n.t0);case 29:return n.prev=29,t.loadingFiles=!1,n.finish(29);case 32:return n.abrupt("return",[]);case 33:case"end":return n.stop()}}),n,null,[[2,17,29,32]])})))()},openViewer:function(t){var n=this,e=this.files[t];OCA.Viewer.open({path:e.filename,list:this.albumFileIds.map((function(t){return n.files[t]})).filter((function(t){return!t.sectionHeader})),loadMore:e.loadMore?rt(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.loadMore(!0);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)}))):function(){return[]},canLoop:e.canLoop})},redirectToNewName:function(t){var n=t.album;this.showEditAlbumForm=!1,this.album.basename!==n.basename&&this.$router.push("/albums/".concat(n.basename))},handleFilesPicked:function(t){var n=this;return rt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.loadingAddFilesToAlbum=!0,e.next=4,n.addFilesToAlbum({albumName:n.albumName,fileIdsToAdd:t});case 4:n.showAddPhotosModal=!1,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),Q.Z.error(e.t0);case 10:return e.prev=10,n.loadingAddFilesToAlbum=!1,e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[0,7,10,13]])})))()},handleRemoveFilesFromAlbum:function(t){var n=this;return rt(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n.loadingCount++,e.next=4,n.removeFilesFromAlbum({albumName:n.albumName,fileIdsToRemove:t});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),Q.Z.error(e.t0);case 9:return e.prev=9,n.loadingCount--,e.finish(9);case 12:case"end":return e.stop()}}),e,null,[[0,6,9,12]])})))()},handleDeleteAlbum:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loadingCount++,n.next=4,t.deleteAlbum({albumName:t.albumName});case 4:t.$router.push("/albums"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),Q.Z.error(n.t0);case 10:return n.prev=10,t.loadingCount--,n.finish(10);case 13:case"end":return n.stop()}}),n,null,[[0,7,10,13]])})))()},favoriteSelection:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loadingCount++,n.next=4,t.toggleFavoriteForFiles({fileIds:t.selectedFileIds,favoriteState:!0});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),Q.Z.error(n.t0);case 9:return n.prev=9,t.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()},unFavoriteSelection:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loadingCount++,n.next=4,t.toggleFavoriteForFiles({fileIds:t.selectedFileIds,favoriteState:!1});case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),Q.Z.error(n.t0);case 9:return n.prev=9,t.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()},downloadAllFiles:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loadingCount++,n.next=4,t.downloadFiles(t.albumFileIds);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),Q.Z.error(n.t0);case 9:return n.prev=9,t.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()},downloadSelection:function(){var t=this;return rt(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t.loadingCount++,n.next=4,t.downloadFiles(t.selectedFileIds);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),Q.Z.error(n.t0);case 9:return n.prev=9,t.loadingCount--,n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})))()}})};var ct=e(84701),dt={};dt.styleTagTransform=$(),dt.setAttributes=L(),dt.insert=j().bind(null,"head"),dt.domAPI=O(),dt.insertStyleElement=W();I()(ct.Z,dt);ct.Z&&ct.Z.locals&&ct.Z.locals;const ut=(0,c.Z)(st,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return void 0!==t.album||t.loadingAlbums?t.errorFetchingFiles||t.errorFetchingAlbums?e("EmptyContent",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("AlertCircle")]},proxy:!0}])},[t._v("\n\t"+t._s(t.t("photos","An error occurred"))+"\n")]):e("div",{staticClass:"album"},[e("div",{staticClass:"album__header"},[e("div",{staticClass:"album__header__left"},[e("div",{staticClass:"album__header__title"},[void 0!==t.album?e("h2",{staticClass:"album__name"},[t._v("\n\t\t\t\t\t"+t._s(t.album.basename)+"\n\t\t\t\t")]):t._e(),t._v(" "),void 0!==t.album&&""!==t.album.location?e("div",{staticClass:"album__location"},[e("MapMarker"),t._v(t._s(t.album.location)+"\n\t\t\t\t")],1):t._e()]),t._v(" "),t.loadingCount>0?e("Loader",{staticClass:"album__header__loader"}):t._e()],1),t._v(" "),void 0!==t.album?e("div",{staticClass:"album__header__actions"},[0!==t.album.nbItems?e("Button",{attrs:{type:"tertiary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(n){t.showAddPhotosModal=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)}):t._e(),t._v(" "),e("Actions",{attrs:{"force-menu":!0}},[e("ActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Edit album details")},on:{click:function(n){t.showEditAlbumForm=!0}}},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Edit album details"))+"\n\t\t\t\t\t"),e("Pencil",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),t.albumFileIds.length>0?e("ActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Download all files in album")},on:{click:t.downloadAllFiles}},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Download all files in album"))+"\n\t\t\t\t\t"),e("DownloadMultiple",{attrs:{slot:"icon"},slot:"icon"})],1):t._e(),t._v(" "),t.selectedFileIds.length>0?[e("ActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Download selection")},on:{click:t.downloadSelection}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Download selected files"))+"\n\t\t\t\t\t\t"),e("Download",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),t.shouldFavoriteSelection?e("ActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Mark selection as favorite")},on:{click:t.favoriteSelection}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Favorite"))+"\n\t\t\t\t\t\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1):e("ActionButton",{attrs:{"close-after-click":!0,"aria-label":t.t("photos","Remove selection from favorites")},on:{click:t.unFavoriteSelection}},[t._v("\n\t\t\t\t\t\t"+t._s(t.t("photos","Remove from favorites"))+"\n\t\t\t\t\t\t"),e("Star",{attrs:{slot:"icon"},slot:"icon"})],1),t._v(" "),e("ActionButton",{attrs:{"close-after-click":!0},on:{click:function(n){return t.handleRemoveFilesFromAlbum(t.selectedFileIds)}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Close")]},proxy:!0}],null,!1,1051939733)},[t._v("\n\t\t\t\t\t\t"+t._s(t.n("photos","Remove item from album","Remove selection from album",t.selection.length))+"\n\t\t\t\t\t\t")])]:t._e(),t._v(" "),e("ActionButton",{attrs:{"close-after-click":!0},on:{click:t.handleDeleteAlbum}},[t._v("\n\t\t\t\t\t"+t._s(t.t("photos","Delete album"))+"\n\t\t\t\t\t"),e("Delete",{attrs:{slot:"icon"},slot:"icon"})],1)],2)],1):t._e()]),t._v(" "),void 0===t.album||0!==t.album.nbItems||t.loadingFiles||t.loadingAlbums?t._e():e("div",{staticClass:"album__empty"},[e("EmptyContent",{scopedSlots:t._u([{key:"icon",fn:function(){return[e("ImagePlus")]},proxy:!0},{key:"desc",fn:function(){return[t._v("\n\t\t\t\t"+t._s(t.t("photos","This album doesn't have any photos or videos yet!"))+"\n\t\t\t")]},proxy:!0}],null,!1,589841004)}),t._v(" "),e("Button",{staticClass:"album__empty__button",attrs:{type:"primary","aria-label":t.t("photos","Add photos to this album")},on:{click:function(n){t.showAddPhotosModal=!0}},scopedSlots:t._u([{key:"icon",fn:function(){return[e("Plus")]},proxy:!0}],null,!1,1489515321)},[t._v("\n\t\t\t"+t._s(t.t("photos","Add"))+"\n\t\t")])],1),t._v(" "),void 0!==t.album?e("FilesListViewer",{staticClass:"album__photos",attrs:{"use-window":!0,"file-ids":t.albumFileIds,"base-height":t.isMobile?120:200,loading:t.loadingFiles||t.loadingAlbums},scopedSlots:t._u([{key:"default",fn:function(n){var i=n.file,r=n.visibility;return e("File",{attrs:{file:t.files[i.id],"allow-selection":!0,selected:!0===t.selection[i.id],visibility:r,semaphore:t.semaphore},on:{click:t.openViewer,"select-toggled":t.onFileSelectToggle}})}}],null,!1,3592900521)}):t._e(),t._v(" "),t.showAddPhotosModal?e("Modal",{attrs:{size:"large",title:t.t("photos","Add photos to the album")},on:{close:function(n){t.showAddPhotosModal=!1}}},[e("FilesPicker",{attrs:{destination:t.album.basename,"blacklist-ids":t.albumFileIds,loading:t.loadingAddFilesToAlbum},on:{"files-picked":t.handleFilesPicked}})],1):t.showShareModal?e("Modal",{attrs:{title:t.t("photos","Share the album")},on:{close:function(n){t.showShareModal=!1}}},[e("ShareAlbumForm",{on:{albumShared:function(n){t.showShareModal=!1}}})],1):t._e(),t._v(" "),t.showEditAlbumForm?e("Modal",{attrs:{title:t.t("photos","Edit album details")},on:{close:function(n){t.showEditAlbumForm=!1}}},[e("AlbumForm",{attrs:{album:t.album},on:{done:t.redirectToNewName}})],1):t._e()],1):e("EmptyContent",{staticClass:"empty-content-with-illustration",scopedSlots:t._u([{key:"icon",fn:function(){return[e("span",{staticClass:"empty-content-illustration",domProps:{innerHTML:t._s(t.FolderIllustration)}})]},proxy:!0}],null,!1,3945105199)},[t._v("\n\t"+t._s(t.t("photos","This album does not exist"))+"\n")])}),[],!1,null,"b8458cd0",null).exports},80917:t=>{t.exports='<svg id="3ecf9745-447a-4766-8a86-6837975429df" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="729.47" height="695.09" viewBox="0 0 729.47 695.09" style="margin-left:calc(50% * (730 - 615) / 730)"><defs><linearGradient id="fc2ce546-a06c-4acb-8cca-fc7989cc5e45" x1="611.98" y1="687.2" x2="611.98" y2="258.73" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"/><stop offset="0.54" stop-color="gray" stop-opacity="0.12"/><stop offset="1" stop-color="gray" stop-opacity="0.1"/></linearGradient><linearGradient id="8de405ef-36e0-4554-af41-d0565e95cbca" x1="410.91" y1="358.56" x2="452.61" y2="86.08" gradientTransform="matrix(1.01, 0.13, -0.13, 1.02, 62.29, -41.05)" xlink:href="#fc2ce546-a06c-4acb-8cca-fc7989cc5e45"/><linearGradient id="90a47f5c-11a4-432e-bbe5-e819485e2974" x1="597.01" y1="453.03" x2="597.01" y2="138.64" gradientTransform="translate(140.76 -189.73) rotate(20.42)" xlink:href="#fc2ce546-a06c-4acb-8cca-fc7989cc5e45"/><linearGradient id="c3d8783b-6f33-4c65-b7a9-7a0b4c25dfb1" x1="756.62" y1="488.3" x2="772.25" y2="249.01" gradientTransform="matrix(0.26, 0.99, -1.02, 0.25, 910.43, -476.82)" xlink:href="#fc2ce546-a06c-4acb-8cca-fc7989cc5e45"/><linearGradient id="1441cd83-913d-413c-98d4-824021df009a" x1="310" y1="695.09" x2="310" y2="203.86" xlink:href="#fc2ce546-a06c-4acb-8cca-fc7989cc5e45"/><linearGradient id="4913d3bc-5f66-46f4-9c65-3645c89ed5d3" x1="545.79" y1="695.81" x2="545.79" y2="464.64" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3" stop-opacity="0.25"/><stop offset="0.54" stop-color="#b3b3b3" stop-opacity="0.1"/><stop offset="1" stop-color="#b3b3b3" stop-opacity="0.05"/></linearGradient><linearGradient id="0cf8a40c-444c-472e-8722-d672ac4b1674" x1="310.8" y1="580.62" x2="310.8" y2="375.85" xlink:href="#4913d3bc-5f66-46f4-9c65-3645c89ed5d3"/><clipPath id="f4edd298-8257-4895-a91b-ae15b3b0d94f" transform="translate(-235.26 -102.45)"><rect x="400.07" y="483.3" width="291.69" height="194.01" rx="8.85" ry="8.85" fill="#fff"/></clipPath></defs><title>folder</title><polygon points="618.97 687.2 513.53 687.2 513.53 258.73 710.42 258.73 618.97 687.2" fill="url(#fc2ce546-a06c-4acb-8cca-fc7989cc5e45)"/><polygon points="613.72 687.2 510.37 687.2 510.37 258.73 703.35 258.73 613.72 687.2" fill="#f5f5f5"/><rect x="249.88" y="158.45" width="439.19" height="168.85" transform="translate(-283.32 32.9) rotate(-15.62)" fill="url(#8de405ef-36e0-4554-af41-d0565e95cbca)"/><rect x="254.32" y="160.66" width="431.85" height="163.44" transform="translate(-283.15 33.09) rotate(-15.62)" fill="#f4f4f4"/><rect x="367.9" y="230.63" width="108.65" height="8.29" transform="translate(-282.88 19.88) rotate(-15.62)" fill="#f5f5f5"/><rect x="376.82" y="262.55" width="108.65" height="8.29" transform="translate(-291.14 23.46) rotate(-15.62)" fill="#fff"/><rect x="371.14" y="237.71" width="174.6" height="8.29" transform="translate(-283.45 29.89) rotate(-15.62)" fill="#fff"/><circle cx="329.58" cy="277.88" r="19.34" transform="translate(-297.9 -3.47) rotate(-15.62)" fill="#fff"/><rect x="376.38" y="210.25" width="441.26" height="171.17" transform="translate(-300.97 124.47) rotate(-20.42)" fill="url(#90a47f5c-11a4-432e-bbe5-e819485e2974)"/><rect x="381.03" y="214.81" width="431.85" height="163.44" transform="translate(-301.21 124.5) rotate(-20.42)" fill="#f7f7f7"/><rect x="494.14" y="288.83" width="108.65" height="8.29" transform="translate(-303.02 107.35) rotate(-20.42)" fill="#f5f5f5"/><rect x="505.71" y="319.89" width="108.65" height="8.29" transform="translate(-313.13 113.34) rotate(-20.42)" fill="#fff"/><rect x="497.85" y="292.85" width="174.6" height="8.29" transform="matrix(0.94, -0.35, 0.35, 0.94, -302.12, 120.41)" fill="#fff"/><circle cx="459.76" cy="343.69" r="19.34" transform="translate(-326.29 79.59) rotate(-20.42)" fill="#fff"/><rect x="646.89" y="150.88" width="172.17" height="440.14" transform="translate(3.97 925.06) rotate(-79.9)" fill="url(#c3d8783b-6f33-4c65-b7a9-7a0b4c25dfb1)"/><rect x="515.81" y="288.22" width="431.85" height="163.44" transform="translate(-159.05 -225.04) rotate(10.1)" fill="#fafafa"/><rect x="687.63" y="287.92" width="8.29" height="108.65" transform="translate(-1.75 860.83) rotate(-79.9)" fill="#f5f5f5"/><rect x="681.81" y="320.56" width="8.29" height="108.65" transform="translate(-38.67 882.02) rotate(-79.9)" fill="#fff"/><rect x="717.18" y="277.05" width="8.29" height="174.6" transform="translate(0.86 908.15) rotate(-79.9)" fill="#fff"/><circle cx="589.6" cy="340.88" r="19.34" transform="translate(-84.66 759.11) rotate(-79.9)" fill="#fff"/><polygon points="171.78 253.69 100.61 203.86 2.07 203.86 2.07 253.69 2.07 278.1 2.07 695.09 617.93 695.09 617.93 253.69 171.78 253.69" fill="url(#1441cd83-913d-413c-98d4-824021df009a)"/><polygon points="174.44 258.73 104.36 210.36 7.34 210.36 7.34 258.73 7.34 282.43 7.34 687.2 613.72 687.2 613.72 258.73 174.44 258.73" fill="#fff"/><path d="M711.54,688.53a7.25,7.25,0,0,1-7.21,7.28H387.26a7.25,7.25,0,0,1-7.21-7.28V471.93a7.25,7.25,0,0,1,7.21-7.28H704.33a7.25,7.25,0,0,1,7.21,7.28" transform="translate(-235.26 -102.45)" fill="url(#4913d3bc-5f66-46f4-9c65-3645c89ed5d3)"/><path d="M707.81,685a7,7,0,0,1-7,7H391.05a7,7,0,0,1-7-7V475.62a7,7,0,0,1,7-7H700.77a7,7,0,0,1,7,7" transform="translate(-235.26 -102.45)" fill="#fff"/><g id="114cebd5-d8fe-4021-8e49-fe55d7dac6be" data-name="&lt;Rectangle&gt;"><rect x="161.12" y="375.85" width="299.37" height="204.76" rx="8.85" ry="8.85" fill="url(#0cf8a40c-444c-472e-8722-d672ac4b1674)"/></g><rect x="164.8" y="380.84" width="291.69" height="194.01" rx="8.85" ry="8.85" fill="#fff"/><g clip-path="url(#f4edd298-8257-4895-a91b-ae15b3b0d94f)"><path d="M383.84,675.53l81.44-93.31a16.21,16.21,0,0,1,22.94-1.5L511,600.84a16.21,16.21,0,0,0,21.16.25l69.7-58.58A16.21,16.21,0,0,1,624.3,544l85.53,94.14a16.21,16.21,0,0,1,4.15,9.47l3.3,37.13a16.21,16.21,0,0,1-16.15,17.65H396.06a16.21,16.21,0,0,1-16.2-15.72h0A16.21,16.21,0,0,1,383.84,675.53Z" transform="translate(-235.26 -102.45)" fill="#6c63ff"/></g><circle cx="199.93" cy="411.95" r="18.06" fill="#ff5252"/></svg>'}}]);
//# sourceMappingURL=photos-src_views_AlbumContent_vue.js.map?v=3f1582c6585631b98da8