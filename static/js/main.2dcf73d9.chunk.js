(this["webpackJsonptest-ra"]=this["webpackJsonptest-ra"]||[]).push([[0],{1028:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function l(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.GetCSVItems=t.CheckCSVValidation=t.GetIdsColliding=void 0;var o=n(1029),i=n(499);function l(e){var t=new i.SimpleLogger("import-controller",!0);return t.setEnabled(e),t}t.GetIdsColliding=function(e,t,n,o,i){return r(this,void 0,void 0,(function(){var r,u,c,s;return a(this,(function(a){switch(a.label){case 0:if(r=l(e),!o.some((function(e){return e.id})))return[2,[]];a.label=1;case 1:return a.trys.push([1,3,,4]),u=o.filter((function(e){return!!e.id})).map((function(e){return e.id})),[4,n.getMany(i,{ids:u})];case 2:return c=a.sent(),[2,c.data.map((function(e){return e.id}))];case 3:throw s=a.sent(),r.error("GetIdsColliding",{csvValues:o},s),t("csv.parsing.collidingIds");case 4:return[2]}}))}))},t.CheckCSVValidation=function(e,t,n,o){return r(this,void 0,void 0,(function(){var r,i;return a(this,(function(a){switch(a.label){case 0:if(r=l(e),!o)return[2];a.label=1;case 1:return a.trys.push([1,3,,4]),[4,Promise.all(n.map(o))];case 2:return a.sent(),[3,4];case 3:throw i=a.sent(),r.error("onFileAdded",{csvValues:n},i),t("csv.parsing.failedValidateRow");case 4:return[2]}}))}))},t.GetCSVItems=function(e,t,n,i){return r(this,void 0,void 0,(function(){var r,u,c;return a(this,(function(a){switch(a.label){case 0:r=l(e),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,o.processCsvFile(n,i)];case 2:return[2,(u=a.sent())||[]];case 3:throw c=a.sent(),r.error("onFileAdded",{csvValues:u},c),t("csv.parsing.invalidCsvDocument");case 4:return[2]}}))}))}},1029:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function l(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.processCsvData=t.getCsvData=t.processCsvFile=void 0;var l=n(1030),u=i(n(1031)),c=i(n(1053)),s=function(e,t,n){var r=u.default(t.split("."));return c.default(r,(function(){return n}),e||{})};function d(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){var n;return o(this,(function(a){return n={},!!t&&"object"===typeof t&&(n=t),[2,new Promise((function(t,a){return l.parse(e,r(r({delimiter:",",skipEmptyLines:!0},n),{complete:function(e){return t(e.data)},error:function(e){return a(e)}}))}))]}))}))}function f(e){if(Array.isArray(e[0])){var t=e[0];return e.slice(1).map((function(e){var n={};return t.forEach((function(t,r){n=s(n,t,e[r])})),n}))}var n=[];return e.forEach((function(e){var t={};for(var r in e)t=s(t,r,e[r]);n.push(t)})),n}t.processCsvFile=function(e,t){return void 0===t&&(t={}),a(this,void 0,void 0,(function(){return o(this,(function(n){switch(n.label){case 0:return e?[4,d(e,t)]:[2];case 1:return[2,f(n.sent())]}}))}))},t.getCsvData=d,t.processCsvData=f},1054:function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function l(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.update=t.create=void 0;var o=new(n(499).SimpleLogger)("uploader",!1);function i(e,t,n,i){return r(this,void 0,void 0,(function(){var r,u,c,s,d,f;return a(this,(function(a){switch(a.label){case 0:o.setEnabled(e),o.log("createInDataProvider",{dataProvider:t,resource:n,values:i}),r=[],a.label=1;case 1:return a.trys.push([1,3,,8]),[4,t.createMany(n,{data:i})];case 2:return u=a.sent(),r.push({value:null,success:!0,response:u}),[3,8];case 3:if(c=a.sent(),s=c.toString().includes("Unknown dataProvider"),!s&&r.push({value:null,err:c,success:!1,response:null}),!s)return[3,7];o.log("createInDataProvider","createMany not found on data provider (you may need to implement it see: https://github.com/benwinding/react-admin-import-csv#reducing-requests): using fallback instead"),a.label=4;case 4:return a.trys.push([4,6,,7]),[4,l(t,n,i)];case 5:return d=a.sent(),r.push.apply(r,d),[3,7];case 6:return f=a.sent(),o.error("createInDataProvider",f),[3,7];case 7:return[3,8];case 8:return[2,r]}}))}))}function l(e,t,n){return r(this,void 0,void 0,(function(){var r;return a(this,(function(a){switch(a.label){case 0:return r=[],[4,Promise.all(n.map((function(n){return e.create(t,{data:n}).then((function(e){return r.push({value:n,success:!0,response:e})})).catch((function(e){return r.push({value:n,success:!1,err:e})}))})))];case 1:return a.sent(),[2,r]}}))}))}function u(e,t,n,i){return r(this,void 0,void 0,(function(){var r,l,u,s,d,f,p;return a(this,(function(a){switch(a.label){case 0:r=i.map((function(e){return e.id})),o.setEnabled(e),o.log("updateInDataProvider",{dataProvider:t,resource:n,values:i,logging:e,ids:r}),l=[],a.label=1;case 1:return a.trys.push([1,3,,8]),[4,t.updateManyArray(n,{ids:r,data:i})];case 2:return u=a.sent(),l.push({value:null,success:!0,response:u}),[3,8];case 3:if(s=a.sent(),d=s.toString().includes("Unknown dataProvider"),!d&&l.push({value:null,err:s,success:!1,response:null}),!d)return[3,7];o.log("updateInDataProvider","updateManyArray not found on data provider (you may need to implement it see: https://github.com/benwinding/react-admin-import-csv#reducing-requests): using fallback instead"),a.label=4;case 4:return a.trys.push([4,6,,7]),[4,c(t,n,i)];case 5:return f=a.sent(),l.push.apply(l,f),[3,7];case 6:return p=a.sent(),o.error("updateInDataProvider",p),[3,7];case 7:return[3,8];case 8:return[2,l]}}))}))}function c(e,t,n){return r(this,void 0,void 0,(function(){var r;return a(this,(function(a){switch(a.label){case 0:return r=[],[4,Promise.all(n.map((function(n){return e.update(t,{id:n.id,data:n,previousData:null}).then((function(e){return r.push({value:n,success:!0,response:e})})).catch((function(e){return r.push({value:n,success:!1,err:e})}))})))];case 1:return a.sent(),[2,r]}}))}))}t.create=function(e,t,n,o,l,u){return r(this,void 0,void 0,(function(){var r,c;return a(this,(function(a){switch(a.label){case 0:return l?[4,l("create",o)]:[3,2];case 1:return r=a.sent(),[3,3];case 2:r=o,a.label=3;case 3:return[4,i(e,t,n,r)];case 4:return c=a.sent(),u&&u(c),!u&&c.some((function(e){return!e.success}))?[2,Promise.reject(c.map((function(e){return e.response})))]:[2]}}))}))},t.update=function(e,t,n,o,i,l){return r(this,void 0,void 0,(function(){var r,c;return a(this,(function(a){switch(a.label){case 0:return i?[4,i("overwrite",o)]:[3,2];case 1:return r=a.sent(),[3,3];case 2:r=o,a.label=3;case 3:return[4,u(e,t,n,r)];case 4:return c=a.sent(),l&&l(c),!l&&c.some((function(e){return!e.success}))?[2,Promise.reject(c.map((function(e){return e.response})))]:[2]}}))}))}},1055:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"Importar",tooltip:"Debe ser un archivo '.csv' o '.tsv'",emptyResource:"La propiedad 'resource' estaba vac\xeda, \xbfpas\xf3 el {... props} al Importar Bot\xf3n?"},parsing:{collidingIds:'Se encontraron campos de "id" en conflicto',failedValidateRow:"CSV no cumpli\xf3 con los requisitos de validaci\xf3n",invalidCsv:'El documento no se pudo analizar como un archivo "csv"'},dialogCommon:{subtitle:'Importando %{count} elementos de %{fileName} a "%{resource}"',conflictCount:"El recurso <strong> %{resource} </strong> tiene <strong> %{conflictingCount} </strong> m\xe1s registros con ID en conflicto",buttons:{cancel:"Cancelar"}},dialogImport:{alertClose:"Importado %{fname}",title:'Importando a "%{resource}"',buttons:{replaceAllConflicts:"Reemplazar las filas",skipAllConflicts:"Salta estas filas",letmeDecide:"D\xe9jame decidir por cada fila"}},dialogDecide:{title:'Importando id %{id} a "%{resource}"',buttons:{replaceRow:"Reemplazar el id de fila = %{id}",addAsNewRow:"Agregar como nueva fila (no reemplazar)",skipDontReplace:"Omitir esta fila (no reemplazar)"}},loading:"Cargando..."}}},1056:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"Import",tooltip:"Must be a '.csv' or '.tsv' file",emptyResource:"The 'resource' property was empty, did you pass in the {...props} to the ImportButton?"},parsing:{collidingIds:'Found colliding "id" fields',failedValidateRow:"CSV failed the validation requirements",invalidCsv:'The documnent could not be parsed as a "csv" file'},dialogCommon:{subtitle:'Importing %{count} items from %{fileName} to "%{resource}"',conflictCount:"The resource <strong>%{resource}</strong> has <strong>%{conflictingCount}</strong> more records with conflicting ids",buttons:{cancel:"Cancel"}},dialogImport:{alertClose:"Imported %{fname}",title:'Importing to "%{resource}"',buttons:{replaceAllConflicts:"Replace the rows",skipAllConflicts:"Skip these rows",letmeDecide:"Let me decide for each row"}},dialogDecide:{title:'Importing id %{id} to "%{resource}"',buttons:{replaceRow:"Replace the row id=%{id}",addAsNewRow:"Add as new row (Don't replace)",skipDontReplace:"Skip this row (Don't replace)"}},loading:"Loading..."}}},1057:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={csv:{buttonMain:{label:"\u5bfc\u5165",tooltip:"\u5fc5\u987b\u662f\u201c.csv\u201d\u6216\u201c.tsv\u201d\u6587\u4ef6",emptyResource:"'resource'\u5c5e\u6027\u4e3a\u7a7a\uff0c\u60a8\u662f\u5426\u5c06{... props}\u4f20\u9012\u7ed9ImportButton\uff1f"},parsing:{collidingIds:"\u627e\u5230\u51b2\u7a81\u7684\u201cid\u201d\u5b57\u6bb5",failedValidateRow:"CSV\u672a\u80fd\u901a\u8fc7\u9a8c\u8bc1\u8981\u6c42",invalidCsv:"\u8be5\u6587\u6863\u65e0\u6cd5\u89e3\u6790\u4e3a\u201ccsv\u201d\u6587\u4ef6"},dialogCommon:{subtitle:"\u5c06%{count}\u4e2a\u9879\u76ee\u4ece%{fileName}\u5bfc\u5165\u5230\u201c%{resource}\u201d",conflictCount:"\u4e0e\u8d44\u6e90<strong>%{resource}</strong>\u7684ID\u51b2\u7a81\u7684\u8bb0\u5f55\u8fd8\u6709<strong>%{conflictingCount}</strong>\u4e2a",buttons:{cancel:"\u53d6\u6d88"}},dialogImport:{alertClose:"\u5df2\u5bfc\u5165%{fname}",title:"\u5bfc\u5165\u5230\u201c%{resource}\u201d",buttons:{replaceAllConflicts:"\u66ff\u6362\u6240\u6709\u884c",skipAllConflicts:"\u8df3\u8fc7\u8fd9\u4e9b\u884c",letmeDecide:"\u8ba9\u6211\u4e3a\u6bcf\u4e00\u884c\u51b3\u5b9a"}},dialogDecide:{title:"\u5c06ID%{id}\u5bfc\u5165\u201c%{resource}\u201d",buttons:{replaceRow:"\u66ff\u6362\u884cid=%{id}",addAsNewRow:"\u6dfb\u52a0\u4e3a\u65b0\u884c\uff08\u8bf7\u52ff\u66ff\u6362\uff09",skipDontReplace:"\u8df3\u8fc7\u6b64\u884c\uff08\u8bf7\u52ff\u66ff\u6362\uff09"}},loading:"\u8f7d\u5165\u4e2d..."}}},1058:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.ImportCsvDialogStrategy=void 0;var i=o(n(0)),l=n(665),u=n(666),c=n(320),s=n(25),d=n(668),f=n(667);t.ImportCsvDialogStrategy=function(e){var t=e.count,n=e.disableImportOverwrite,r=e.resourceName,a=e.fileName,o=e.handleClose,p=e.handleReplace,h=e.handleSkip,v=e.handleAskDecide,m=e.open,g=e.isLoading,b=e.idsConflicting,y=i.default.useState({}),w=y[0],C=y[1],_=c.translateWrapper();return i.useEffect((function(){C({title:_("csv.dialogImport.title",{resource:r}),subTitle:_("csv.dialogCommon.subtitle",{count:t,fileName:a,resource:r}),loadingTxt:_("csv.loading"),labelSkip:_("csv.dialogImport.buttons.skipAllConflicts"),labelReplace:_("csv.dialogImport.buttons.replaceAllConflicts"),labelDecide:_("csv.dialogImport.buttons.letmeDecide"),messageHtml:_("csv.dialogCommon.conflictCount",{resource:r,conflictingCount:b&&b.length+1})})}),[t,r,a,b]),i.default.createElement(l.SharedDialogWrapper,{title:w.title,subTitle:w.subTitle,open:m,handleClose:o},g&&i.default.createElement(u.SharedLoader,{loadingTxt:w.loadingTxt}),b&&b.length>0&&!g&&i.default.createElement("div",null,i.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0"},dangerouslySetInnerHTML:{__html:w.messageHtml}}),i.default.createElement(s.List,null,i.default.createElement(f.SharedDialogButton,{disabled:n,onClick:p,icon:i.default.createElement(d.Done,{htmlColor:"#29c130"}),label:w.labelReplace}),i.default.createElement(f.SharedDialogButton,{onClick:h,icon:i.default.createElement(d.FileCopy,{htmlColor:"#3a88ca"}),label:w.labelSkip}),i.default.createElement(f.SharedDialogButton,{onClick:v,icon:i.default.createElement(d.Undo,{htmlColor:"black"}),label:w.labelDecide}))))}},1059:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImportCsvDialogEachItem=void 0;var a=r(n(0)),o=n(667),i=n(665),l=n(666),u=n(320),c=n(25),s=n(668);t.ImportCsvDialogEachItem=function(e){var t=e.disableImportNew,n=e.disableImportOverwrite,r=e.currentValue,d=e.resourceName,f=e.values,p=e.fileName,h=e.openAskDecide,v=e.handleClose,m=e.handleAskDecideReplace,g=e.handleAskDecideAddAsNew,b=e.handleAskDecideSkip,y=e.handleAskDecideSkipAll,w=e.isLoading,C=e.idsConflicting,_=u.translateWrapper();return a.default.createElement(i.SharedDialogWrapper,{title:_("csv.dialogDecide.title",{id:r&&r.id,resource:d}),subTitle:_("csv.dialogCommon.subtitle",{count:f&&f.length,fileName:p,resource:d}),open:h,handleClose:v},w&&a.default.createElement(l.SharedLoader,{loadingTxt:_("csv.loading")}),!w&&a.default.createElement("div",null,a.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0"},dangerouslySetInnerHTML:{__html:_("csv.dialogCommon.conflictCount",{resource:d,conflictingCount:C&&C.length+1})}}),a.default.createElement(c.List,null,a.default.createElement(o.SharedDialogButton,{disabled:n,onClick:m,icon:a.default.createElement(s.Done,{htmlColor:"#29c130"}),label:_("csv.dialogDecide.buttons.replaceRow",{id:r&&r.id})}),a.default.createElement(o.SharedDialogButton,{disabled:t,onClick:g,icon:a.default.createElement(s.Add,{htmlColor:"#3a88ca"}),label:_("csv.dialogDecide.buttons.addAsNewRow")}),a.default.createElement(o.SharedDialogButton,{onClick:b,icon:a.default.createElement(s.Undo,{htmlColor:"black"}),label:_("csv.dialogDecide.buttons.skipDontReplace")}),a.default.createElement(o.SharedDialogButton,{onClick:y,icon:a.default.createElement(s.Clear,{htmlColor:"#3a88ca"}),label:_("csv.dialogCommon.buttons.cancel")}))))}},1060:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ImportButton=void 0;var a=r(n(0)),o=n(255),i=n(25),l=r(n(271)),u=n(320);t.ImportButton=function(e){var t=e.variant,n=e.label,r=e.clickImportButton,c=e.onFileAdded,s=e.onRef,d=u.translateWrapper();return a.default.createElement(i.Tooltip,{title:d("csv.buttonMain.tooltip")},a.default.createElement("div",null,a.default.createElement(o.Button,{color:"primary",component:"span",variant:t,label:n,onClick:r},a.default.createElement(l.default,{style:{transform:"rotate(180deg)",fontSize:"20"}})),a.default.createElement("input",{ref:s,type:"file",style:{display:"none"},onChange:c,accept:".csv,.tsv"})))}},1062:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(21),i=n.n(o),l=n(186),u=n(639),c=n(653),s=n(628),d=n(274),f=n(722),p=n(541),h=n.n(p),v=n(670),m=n(99),g=n(652),b=n(213),y=n(105),w=n(534),C=n(531),_=n(530),E=n(648),D=n(370),k=n(646),S=n(368),I=n(86),O=n(647),P=n(232),j=n(529),A=n(532),M=function(e){var t=e.className,n=e.basePath,a=e.total,o=e.resource,i=e.currentSort,l=e.filterValues,u=e.exporter,c={logging:!0,validateRow:function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.id;case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),postCommitCallback:function(e){console.log("reportItems",{reportItems:e})}};return r.createElement(m.a,{className:t},r.createElement(j.a,{basePath:n}),r.createElement(A.a,{disabled:0===a,resource:o,sort:i,filter:l,exporter:u}),r.createElement(P.ImportButton,Object.assign({},e,c,{parseConfig:{dynamicTyping:!0}})))},x=function(e){return r.createElement(g.a,Object.assign({},e,{actions:r.createElement(M,null)}),r.createElement(b.a,null,r.createElement(y.a,{source:"id"}),r.createElement(y.a,{source:"title"}),r.createElement(w.a,{label:""}),r.createElement(C.a,{label:""}),r.createElement(_.a,{label:"",redirect:!1})))},R=function(e){return r.createElement(E.a,e,r.createElement(D.a,null,r.createElement(y.a,{source:"id"}),r.createElement(y.a,{source:"title"})))},B=function(e){return r.createElement(k.a,e,r.createElement(S.a,null,r.createElement(I.a,{source:"id"}),r.createElement(I.a,{source:"title"})))},L=function(e){return r.createElement(O.a,e,r.createElement(S.a,null,r.createElement(I.a,{disabled:!0,source:"id"}),r.createElement(I.a,{source:"title"})))},N=n(425),T=n(720),V=n.n(T),F=n(721),G=n.n(F),W=function(){var e=Object(f.a)({posts:[{id:1,title:"FooBar"},{id:2,title:"Another"},{id:3,title:"Thing"},{id:4,title:"Hello, world!"}]}),t={en:Object(l.a)(Object(l.a)({},N.a),P.i18n.en),zh:Object(l.a)(Object(l.a)({},G.a),P.i18n.zh),es:Object(l.a)(Object(l.a)({},V.a),P.i18n.es)},n=Object(d.default)((function(e){var n=t[e]?t[e]:t.en;return console.log("i18nProvider: polyglotI18nProvider",{locale:e,localeMessages:n}),n}),Object(u.b)());return a.a.createElement(c.a,{dataProvider:e,i18nProvider:n},a.a.createElement(s.a,{name:"posts",list:x,show:R,edit:L,create:B}))};i.a.render(a.a.createElement(W,null),document.getElementById("root"))},232:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.i18n=t.ImportButton=void 0;var i=n(11),l=n(761);Object.defineProperty(t,"ImportButton",{enumerable:!0,get:function(){return l.MainCsvImport}});var u=o(n(664));t.i18n=u,t.default=i.connect()(l.MainCsvImport)},320:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.translateWrapper=void 0;var l=n(255),u=o(n(664)),c=i(n(274)).default((function(e){return u[e]?u[e]:u.en}),l.resolveBrowserLocale());t.translateWrapper=function(){var e=l.useTranslate();return function(t,n){(n=n||{})._="";var r=e(t,n);return r||c.translate(t,n)}}},499:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SimpleLogger=void 0;var r=function(){function e(e,t){this.prefix=e,this.debug=t,this.loggerID=Math.random().toString(32).slice(2,6)}return e.prototype.getLogString=function(){return"\ud83c\udf1f react-admin-import-csv:: "+this.prefix+" ["+this.loggerID+"] "},Object.defineProperty(e.prototype,"log",{get:function(){return this.debug?console.log.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"warn",{get:function(){return this.debug?console.warn.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"error",{get:function(){return this.debug?console.error.bind(console,this.getLogString()):function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t]}},enumerable:!1,configurable:!0}),e.prototype.setEnabled=function(e){this.debug=e},e}();t.SimpleLogger=r},664:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1055);Object.defineProperty(t,"es",{enumerable:!0,get:function(){return r.default}});var a=n(1056);Object.defineProperty(t,"en",{enumerable:!0,get:function(){return a.default}});var o=n(1057);Object.defineProperty(t,"zh",{enumerable:!0,get:function(){return o.default}})},665:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedDialogWrapper=void 0;var a=r(n(0)),o=n(25);t.SharedDialogWrapper=function(e){return a.default.createElement(o.Dialog,{open:e.open,onClose:e.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},a.default.createElement(o.DialogTitle,{id:"alert-dialog-title"},e.title),a.default.createElement(o.DialogContent,null,a.default.createElement("div",{style:{width:"400px",maxWidth:"100%"}},a.default.createElement("p",{style:{fontFamily:"sans-serif",margin:"0",fontSize:"0.9em",marginBottom:"10px",marginTop:"-7px",color:"#555"}},e.subTitle),e.children)))}},666:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedLoader=void 0;var a=r(n(0)),o=n(25);t.SharedLoader=function(e){return a.default.createElement("div",{style:{textAlign:"center",paddingTop:"10px",paddingBottom:"10px"}},a.default.createElement(o.CircularProgress,{variant:"indeterminate"}),a.default.createElement("p",{style:{fontFamily:"sans-serif"}},e.loadingTxt))}},667:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SharedDialogButton=void 0;var a=r(n(0)),o=n(25);t.SharedDialogButton=function(e){return a.default.createElement(o.ListItem,{disableGutters:!0},a.default.createElement(o.Button,{disabled:e.disabled,style:{width:"100%",backgroundColor:"#efefef",padding:"13px"},onClick:e.onClick},e.icon,a.default.createElement("span",{style:{width:"100%",textAlign:"left",marginLeft:"8px"}},e.label)))}},749:function(e,t,n){e.exports=n(1062)},761:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{u(r.next(e))}catch(t){o(t)}}function l(e){try{u(r.throw(e))}catch(t){o(t)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,l)}u((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function l(o){return function(l){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(l){o=[6,l],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,l])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.MainCsvImport=void 0;var l=i(n(0)),u=n(255),c=n(499),s=n(1028),d=n(1054),f=n(320),p=n(1058),h=n(1059),v=n(1060);t.MainCsvImport=function(e){var t=u.useRefresh(),n=f.translateWrapper(),i=u.useDataProvider(),m=e,g=m.parseConfig,b=m.preCommitCallback,y=m.postCommitCallback,w=m.validateRow,C=m.transformRows,_=!!m.disableImportNew,E=!!m.disableImportOverwrite,D=!!e.logging,k=e.variant,S=e.label,I=e.resource,O=e.resourceName,P=new c.SimpleLogger("import-csv-button",!0);if(P.setEnabled(D),!I)throw new Error(n("csv.buttonMain.emptyResource"));S||(S=n("csv.buttonMain.label",{numb:99})),k||(k="text"),O||(O=I);var j,A=l.default.useState(!1),M=A[0],x=A[1],R=l.default.useState(!1),B=R[0],L=R[1],N=l.default.useState([]),T=N[0],V=N[1],F=l.default.useState([]),G=F[0],W=F[1],z=l.default.useState(!1),H=z[0],q=z[1],U=l.default.useState(null),J=U[0],K=U[1],Q=l.default.useState(),X=Q[0],Y=Q[1],Z=(X&&X.name)+"";function $(){x(!1),L(!1),V([]),W([]),q(!1),Y(null)}function ee(e){return a(this,void 0,void 0,(function(){return o(this,(function(t){return[2,d.create(D,i,O,e,b,y)]}))}))}function te(e){return a(this,void 0,void 0,(function(){return o(this,(function(t){return[2,d.update(D,i,O,e,b,y)]}))}))}l.default.useEffect((function(){var e=!0;if(X)return x(!0),function(){return a(this,void 0,void 0,(function(){function t(e){var t=d.has(e.id+"");return!(f.has(+e.id)||t)}var r,a,l,u,c,d,f,p,h;return o(this,(function(o){switch(o.label){case 0:if(!X)throw new Error("File not processed from input field");return P.log("Parsing CSV file"),[4,s.GetCSVItems(D,n,X,g)];case 1:return r=o.sent(),C?[4,C(r)]:[3,3];case 2:return l=o.sent(),[3,4];case 3:l=r,o.label=4;case 4:return a=l,e&&V(a),P.log("Validating CSV file"),[4,s.CheckCSVValidation(D,n,a,w)];case 5:return o.sent(),P.log("Checking rows to import"),[4,s.GetIdsColliding(D,n,i,a,O)];case 6:return u=o.sent(),e&&W(u),c=!!u.length,P.log("Has colliding ids?",{hasCollidingIds:c,collidingIds:u}),c?(d=new Set(u.map((function(e){return e+""}))),f=new Set,p=u.map((function(e){return parseFloat(e+"")})),p.every((function(e){return isFinite(e)}))&&p.map((function(e){return f.add(e)})),h=a.filter(t),P.log("Importing items which arent colliding",{csvItemsNotColliding:h}),[2,[h,c]]):[2,[a,c]]}}))}))}().then((function(t){var n=t[0],r=t[1];return a(void 0,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,ee(n)];case 1:return t.sent(),e&&!r&&re(),[2]}}))}))})).catch((function(t){e&&$(),P.error(t)})),function(){e=!1};x(!1)}),[X]);var ne=u.useNotify(),re=function(){console.log("handleClose",{file:X}),$(),ne(n("csv.dialogImport.alertClose",{fname:Z})),t()},ae=function(){var e=Array.isArray(G)&&G.pop();W(G);var t=Array.isArray(T)&&T.filter((function(t){return t.id===e})).pop();return P.log("nextConflicting",{foundValue:t,currentId:e}),!t||K(t),t&&r({},t)};return l.default.createElement(l.default.Fragment,null,l.default.createElement(v.ImportButton,{variant:k,label:S,clickImportButton:function(){$(),j.value="",j.click()},onFileAdded:function(e){var t=e.target.files&&e.target.files[0];Y(t)},onRef:function(e){return j=e}}),l.default.createElement(p.ImportCsvDialogStrategy,{disableImportOverwrite:E,resourceName:O,fileName:Z,count:T&&T.length,handleClose:re,handleReplace:function(){return a(void 0,void 0,void 0,(function(){var e,t;return o(this,(function(n){switch(n.label){case 0:P.log("handleReplace"),n.label=1;case 1:return n.trys.push([1,4,,5]),q(!0),[4,new Promise((function(e){return setTimeout(e,1e3)}))];case 2:return n.sent(),e=new Set(G.map((function(e){return e}))),[4,te(T.filter((function(t){return e.has(t.id)})))];case 3:return n.sent(),re(),[3,5];case 4:return t=n.sent(),q(!1),P.error("handleReplace",t),[3,5];case 5:return[2]}}))}))},handleSkip:function(){P.log("handleSkip"),re()},handleAskDecide:function(){return a(void 0,void 0,void 0,(function(){return o(this,(function(e){return P.log("handleAskDecide"),x(!1),ae(),L(!0),[2]}))}))},open:M,isLoading:H,idsConflicting:G}),l.default.createElement(h.ImportCsvDialogEachItem,{disableImportNew:_,disableImportOverwrite:E,currentValue:J,resourceName:O,values:T,fileName:Z,openAskDecide:B,handleClose:re,handleAskDecideReplace:function(){return a(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return P.log("handleAskDecideReplace"),(e=ae())?[4,te([e])]:[2,re()];case 1:return t.sent(),[2]}}))}))},handleAskDecideAddAsNew:function(){return a(void 0,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return P.log("handleAskDecideAddAsNew"),(e=ae())?(delete e.id,[4,ee([e])]):[2,re()];case 1:return t.sent(),[2]}}))}))},handleAskDecideSkip:function(){return a(void 0,void 0,void 0,(function(){return o(this,(function(e){return P.log("handleAskDecideSkip"),ae()?[2]:[2,re()]}))}))},handleAskDecideSkipAll:function(){return a(void 0,void 0,void 0,(function(){return o(this,(function(e){return P.log("handleAskDecideSkipAll"),re(),[2]}))}))},isLoading:H,idsConflicting:G}))}}},[[749,1,2]]]);
//# sourceMappingURL=main.2dcf73d9.chunk.js.map