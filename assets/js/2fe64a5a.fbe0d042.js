"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3801],{58303:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"ProcessMaker-3.8/BasicFeatures/7Dynaforms/Form","title":"Form","description":"Form","source":"@site/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Form.md","sourceDirName":"ProcessMaker-3.8/BasicFeatures/7Dynaforms","slug":"/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Form","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Form","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Form.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Form","description":"Form"},"sidebar":"tutorialSidebar","previous":{"title":"Grid Control","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/Image"},"next":{"title":"Row","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Row"}}');var s=r(74848),i=r(28453);const a={sidebar_position:3,title:"Form",description:"Form"},o="Form",d={},c=[{value:"Overview",id:"overview",level:2},{value:"Properties",id:"properties",level:2},{value:"Description",id:"description",level:3},{value:"JavaScript",id:"javascript",level:3},{value:"External Libs",id:"external-libs",level:3},{value:"Language",id:"language",level:3},{value:"Print Dynaform",id:"print-dynaform",level:3},{value:"JavaScript in Forms",id:"javascript-in-forms",level:2},{value:"Form Functions",id:"form-functions",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"form",children:"Form"})}),"\n",(0,s.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:'In the Dynaform designer, the main container of the form is represented by the light gray canvas where the rows are added and the design of the Dynaform is built. Forms inside the designer depend on properties that may define the entire behavior of the Dynaform. It is inside forms that JavaScript code and External Libraries can be added inside forms in order to enable extra functionality for the current Dynaform. Also, inside the properties of the form, the "Language" property allows selecting the translations of the form content, after uploading custom /po files to it. This functionality is fully explained at the following page: Dynaform Multi-language Support. Finally, the view mode of the form can affect the way elements will be displayed.'}),"\n",(0,s.jsx)(t.p,{children:"When entering the designer for the first time:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(5222).A+"",width:"573",height:"135"})}),"\n",(0,s.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Click on any light gray space of the Form or Sub Form to view and work on its properties."}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Property"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"form (readonly)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"ID"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Auto generated HTML unique ID (readonly). A string of 32 characters."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Name"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Name of the form."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Mode"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"[Required] Display mode of the form: edit: the control is enabled for editing when it is rendered. view: the control can only be viewed when it is rendered. The content can\u2019t be edited. disabled: the control is displayed as disabled. The control is displayed in gray in order to indicate the disabled mode. The content can't be edited either."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Description"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Brief description of what the form is about."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"JavaScript"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Opens the JavaScript editor used to insert JavaScript code in the form."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Language"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"If there are many languages saved for the form, the dropdown will list them and will render the form in the language selected."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"External Libs"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Area where the external libraries can be defined to be used in the execution time."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Print Dynaform"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Check this option to have the ability to print the Dynaform. This property also adds a printer icon at the top right side of the Dynaform when it is rendered. Available Version: Available from 3.0.1.7"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"description",children:"Description"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"This property allows designers to add a brief description of what the Dynaform is about."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(15448).A+"",width:"246",height:"62"})}),"\n",(0,s.jsx)(t.h3,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"This property uses JavaScript code to enhance and give more functionality to the form behavior."}),"\n",(0,s.jsx)(t.p,{children:'To add JavaScript commands to the form, click on the "edit..." button of the property.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(24459).A+"",width:"736",height:"435"})}),"\n",(0,s.jsx)(t.p,{children:"A editor window opens where the JavaScript code must be added. For example, let's add a simple alert when the form is loaded:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'alert("Hello User!");'})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(37712).A+"",width:"851",height:"460"})}),"\n",(0,s.jsx)(t.p,{children:'Save the code inserted by clicking on "Save" at the lower part of the editor. When the Dynaform opens while running a case, this message is shown:'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(26540).A+"",width:"421",height:"180"})}),"\n",(0,s.jsx)(t.p,{children:"To view more examples using JavaScript in Dynaforms, the scope of the property and a better explanation of the use of the code, take a look at the explanation below for JavaScript in forms"}),"\n",(0,s.jsx)(t.h3,{id:"external-libs",children:"External Libs"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"This property allows users to add external library files to the Dynaform to add additional functionalities, content or styles to the Dynaform. This property is useful to add JavaScript or CSS (Cascading Style Sheets) files to the Dynaform, so they can be accessed by HTML code placed in a Panel's content property."}),"\n",(0,s.jsx)(t.p,{children:"Libraries can be added using their web address, but note that if ProcessMaker works with the HTTPS protocol, the libraries added to this property must work with the HTTPS protocol as well. To know more about the HTTPS protocol recommendation, see Preventing Mixed Content."}),"\n",(0,s.jsx)(t.p,{children:"To add more than one library file, simply add commas (,) to separate the addresses inside the value of the property"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(77547).A+"",width:"692",height:"394"})}),"\n",(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"Warning: The loader.js library from the gstatic site does NOT work as an external library.\nFor examples on how to use external library files, see External JavaScript Files and Panel Examples."})}),"\n",(0,s.jsx)(t.h3,{id:"language",children:"Language"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:'This property allows the selection of the language the form will be rendered when running a case. All Dynaforms include the "English" language by default. Nevertheless, if more languages have been uploaded to the Dynaform, this dropdown will list all of them.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(53414).A+"",width:"215",height:"51"})}),"\n",(0,s.jsx)(t.p,{children:'For example, a Dynaform created with the "English" language.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(19821).A+"",width:"1215",height:"403"})}),"\n",(0,s.jsx)(t.p,{children:'Let\'s change the language by selecting "es"'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(53414).A+"",width:"215",height:"51"})}),"\n",(0,s.jsx)(t.p,{children:"When rendering the form, the following is shown"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(31373).A+"",width:"1215",height:"408"})}),"\n",(0,s.jsx)(t.p,{children:"To learn how to add translations to Dynaforms, see Dynaform Multi-language Support."}),"\n",(0,s.jsx)(t.h3,{id:"print-dynaform",children:"Print Dynaform"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"Available on: ProcessMaker 3.0.1.7 on"}),"\n",(0,s.jsx)(t.p,{children:"This property enables end users to print the entire content of a Dynaform (using the current field values) when running cases, by adding the  icon to the top right corner of the form."}),"\n",(0,s.jsx)(t.p,{children:"To enable this icon, select the form in the Dynaform designer and check the print dynaform option."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(89264).A+"",width:"593",height:"365"})}),"\n",(0,s.jsxs)(t.p,{children:["When rendering this form (running a case or previewing the design), the ",(0,s.jsx)(t.img,{alt:"alt text",src:r(43026).A+"",width:"20",height:"22"})," icon is shown at the top right corner of the form."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(29023).A+"",width:"729",height:"527"})}),"\n",(0,s.jsx)(t.p,{children:'Click on this icon to print the form. All current content in the form will be printed, no matter how extensive the form is. The page header contains the current date at the top left corner, with the "PMDynaform" text in the center. The footer contains the URL address where it was printed from.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(91774).A+"",width:"544",height:"678"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:r(77525).A+"",width:"539",height:"678"})}),"\n",(0,s.jsx)(t.h2,{id:"javascript-in-forms",children:"JavaScript in Forms"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:"To learn how to add custom code to Dynaforms, see JavaScript in Dynaforms"}),"\n",(0,s.jsx)(t.h3,{id:"form-functions",children:"Form Functions"}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["Note: TO VIEW CODE EXAMPLES OF EACH OF THE FUNCTIONS OF THE TABLE BELOW, SEE ",(0,s.jsx)(t.a,{href:"http://wiki.processmaker.com/3.0/JavaScript_Functions_and_Methods",children:"http://wiki.processmaker.com/3.0/JavaScript_Functions_and_Methods"}),"."]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Functions"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:'$("#formid").setOnChange(functionName)'})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Define a function that is executed when any of the fields in the Dynaform change. The function has the following format: functionName(fieldID, newValue, oldValue)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:'$("#formid").submitForm()'})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Submit the Dynaform and moves to the next step"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.code,{children:'$("#formid").saveForm()'})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"Save the values entered into a Dynaform to the ProcessMaker database without closing the Dynaform"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},53414:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,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"},15448:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,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"},77547:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ControlPropertyExternalLibsVersion3-2a56abedd8eda4d29c30c6779735b1d4.png"},37712:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ControlPropertyJavaScriptEditorVersion3-88172e8f6124943c921d643d98d35a65.png"},26540:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ControlPropertyJavaScriptMessageVersion3-d7885b736c333411830cdfc5b07df585.png"},5222:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/FormDesignerControlVersion3-e83539fb622df136b7bda940abc9eb80.png"},43026:(e,t,r)=>{r.d(t,{A:()=>n});const n="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAWCAYAAADAQbwGAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4AEEFCsPlXLkkQAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAACrUlEQVQ4jaWUy24TWRCGv3PpdtsOdi6aKCQQNigsEMwCZsOCFxjNeqR5gnmGeaBB7GdWsEZISIAihGYQQYIRkePJhdhut/tyTrE4sY0dLgF+qaXWqTp/VZ36q5SICEA/9/y53ePvFymdQcVZsLZg+XmryW/XW5yraQD02OgEjkaevTOSAewNKo5GHifTMz3vVI/UmQk/5jshFITCCcNSTjl9CsMy3BGmd+z4Zykx3FxPUEBWeSoPIuNAwSc2J1kohdVQt5ob6wlLiZkSll7wHkaVsNm2NKI6uRPySqh8iD0sQgaNWKEAoxWJVcRG8UPDcDzy1KzCaLDPuwWv35W8OirZHzr+Tx2DwuNOyATw/iQzDQompHWrWG4YVpuGrZWYS4sR9u6zHru9it1+NXmTr8FiomlEmu1OzoW2xd7fGX4VwYe40LJstCygePQ245/9YtqUb8HNjYRfrizgBdLC86ybfx/hoPB0Uzdz9l2ED95kPN7NUQoOhu40YWyCvkIfvwwvwruRw3/QRwuw2jTc2qzTzz39PIja8/lua4LumrGmVdM8/C+jm7pA+ONawu8/LbLdyXl5WJIW/kwZNmPN5eWI62s1slK4t5MGwqedEX/9m3IwdPQLT2wUK3VNPdIz5QBoBVnpOcg8x3lFP/e8Oa542hmFkm+sJwDsHBa87VUUXlhbsLQTjdWKck7oVisqgcPM0RlUxFqx0bJstiM22xH2j9sr1CNFN3Xc2e7x6qjEKEDCo8+/pT+ZR6PAeTjftvx6rcVq05CVgr3YDo2OdBh2IXQ7iRSNSJ8axdgociczvhvnQkUwJxthOvixCZ+aU9A4sNFh88xrYULoEWRcpgilE0r/8WVROpn4icxKbCZDo6EzcHQGGU9qOTWrJqtrDK0hr4ReHgxXV2ft7wEGlUinejcKlAAAAABJRU5ErkJggg=="},24459:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_JavaScriptProperty_Designer-f07db524f002342e7dc62832c3bf18ce.png"},19821:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_LanguageProperty_English-2e6efed45325a982a48187d5d40a6270.png"},31373:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_LanguageProperty_Spanish-1f27d38bf2526d00bf48f12c6991b94b.png"},89264:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_PrintDynaForm-fcb0835396d09af389ca5e5e3101c7b3.png"},29023:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_PrintDynaFormIcon-59c9926aee72bb31ed085f57382866a8.png"},91774:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_PrintDynaFormSheet1-0cc3527110dd1e82d6d7f22ed5816fe1.png"},77525:(e,t,r)=>{r.d(t,{A:()=>n});const n=r.p+"assets/images/ProcessMaker3_Form_PrintDynaFormSheet2-c8c070b0142cdf54d5a796abf17515c3.png"},28453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>o});var n=r(96540);const s={},i=n.createContext(s);function a(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);