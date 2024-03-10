import{defineTheme as n}from"@directus/extensions-sdk";var t=[],e=[];!function(n,i){if(n&&"undefined"!=typeof document){var o,p=!0===i.prepend?"prepend":"append",r=!0===i.singleTag,a="string"==typeof i.container?document.querySelector(i.container):document.getElementsByTagName("head")[0];if(r){var d=t.indexOf(a);-1===d&&(d=t.push(a)-1,e[d]={}),o=e[d]&&e[d][p]?e[d][p]:e[d][p]=l()}else o=l();65279===n.charCodeAt(0)&&(n=n.substring(1)),o.styleSheet?o.styleSheet.cssText+=n:o.appendChild(document.createTextNode(n))}function l(){var n=document.createElement("style");if(n.setAttribute("type","text/css"),i.attributes)for(var t=Object.keys(i.attributes),e=0;e<t.length;e++)n.setAttribute(t[e],i.attributes[t[e]]);var o="prepend"===p?"afterbegin":"beforeend";return a.insertAdjacentElement(o,n),n}}("/* main view */\n.private-view {\n  /* main view padding */\n  --content-padding:0 32px!important;\n  /* listing content */\n  /* All content */ }\n  .private-view .v-table {\n    --content-padding:32px!important; }\n  .private-view #main-content {\n    font-size: 13px !important; }\n  .private-view #navigation .module-nav {\n    font-size: 0.9rem !important; }\n\n/* fix size in overlay */\n.v-drawer .content {\n  font-size: 13px !important;\n  --theme--form--row-gap: 25px!important; }\n\n/* head of table */\n.table-header .cell {\n  font-size: 13px !important; }\n\n/* Label au dessus des champs de formulaire */\n.type-label {\n  font-size: 14px !important;\n  margin-bottom: 5px !important; }\n\n/* fix align between item list/notice with input form */\n.v-list, .v-notice {\n  margin-top: 0px !important; }\n\n.v-notice {\n  padding: 8px 16px !important; }\n\n/* badge in listing */\n.v-chip.small {\n  font-size: 12px !important; }\n\n/* group form */\n.v-detail.group-detail.full {\n  padding: 1rem;\n  border: var(--theme--border-width) solid var(--theme--form--field--input--border-color);\n  border-radius: var(--theme--border-radius); }\n\n.v-detail.group-detail hr {\n  display: none; }\n\n/* accordions style */\n.v-item-group.group-accordion.full {\n  padding: 0;\n  border: var(--theme--border-width) solid var(--theme--form--field--input--border-color);\n  border-radius: var(--theme--border-radius); }\n  .v-item-group.group-accordion.full .accordion-section {\n    padding: 0 1rem; }\n    .v-item-group.group-accordion.full .accordion-section:first-child {\n      border-top: 0px none !important; }\n    .v-item-group.group-accordion.full .accordion-section:last-child {\n      border-bottom: 0px none !important; }\n  .v-item-group.group-accordion.full span.field-name {\n    font-size: 15px !important;\n    font-weight: 600 !important; }\n\n/* Title of field group and separator */\n.v-divider.large .type-text {\n  font-size: 17px !important;\n  font-weight: 600 !important; }\n  .v-divider.large .type-text .title {\n    font-size: 15px !important;\n    font-weight: 600 !important; }\n\n/* textarea padding fix (text touch top border without this) */\n.v-textarea textarea {\n  padding: 10px !important; }\n\n/* in relationship field, align fix */\n.render-template {\n  line-height: 18px !important; }\n\n/* page title size ajust */\nh1.type-title {\n  font-size: 20px; }\n\n/* button ajust */\nbutton.button {\n  font-size: 14px !important;\n  height: 40px !important; }\n  button.button span.content {\n    height: 100%;\n    line-height: 40px !important; }\n  button.button.icon {\n    width: 40px !important; }\n    button.button.icon i {\n      font-size: 24px !important;\n      line-height: 25px !important; }\n\n/* font ajust and marge in menu outlet*/\n#menu-outlet {\n  font-size: 12px; }\n  #menu-outlet .v-list-item {\n    min-height: 30px;\n    margin: 0px; }\n  #menu-outlet .v-list-group {\n    margin: 0px; }\n\n.v-list .v-list-item {\n  /* Size of icons, check in Settings page, list all modules */\n  /* Settings page, list all modules */ }\n  .v-list .v-list-item .v-icon.icon {\n    width: 20px !important;\n    height: 20px !important;\n    margin: 0 10px !important; }\n    .v-list .v-list-item .v-icon.icon svg {\n      width: 20px !important;\n      height: 20px !important; }\n    .v-list .v-list-item .v-icon.icon i {\n      width: 20px !important;\n      height: 20px !important;\n      font-size: 20px !important; }\n  .v-list .v-list-item .info .name {\n    line-height: 12px;\n    font-size: 12px;\n    padding-bottom: 2px; }\n  .v-list .v-list-item .info .to {\n    color: var(--theme--foreground-subdued);\n    line-height: 12px;\n    font-size: 12px; }\n\n/* ajustement de l'affichage des input texte prepend, append, content, icon */\n.v-input .input .content {\n  line-height: 18px;\n  padding: 10px 0; }\n\n.v-input .input .prepend .preview {\n  width: 30px;\n  height: 30px;\n  margin-left: -6px; }\n  .v-input .input .prepend .preview .v-icon {\n    text-align: center; }\n  .v-input .input .prepend .preview .v-icon:not(.small) i {\n    font-size: 20px;\n    line-height: 24px; }\n  .v-input .input .prepend .preview .v-button.swatch {\n    width: 30px;\n    height: 30px;\n    margin-left: -6px;\n    max-height: 30px;\n    margin-top: 4px; }\n\n.v-input .input .append .v-icon {\n  text-align: center; }\n\n.v-input .input .append .v-icon:not(.small) i {\n  font-size: 20px;\n  line-height: 24px; }\n",{});var i=n({id:"clean-light",name:"Clean Light Theme",appearance:"light",rules:{form:{field:{input:{height:"40px",padding:"0 10px"}},rowGap:"25px"},borderWidth:"1px",borderRadius:"5px"}});export{i as default};
