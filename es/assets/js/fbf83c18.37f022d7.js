"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7836],{9459:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"ProcessMaker-3.8/BasicFeatures/7Dynaforms/ImportExportDynaformJSONFormat","title":"Import and Export Dynaform in JSON Format","description":"Import and Export Dynaform in JSON Format","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/ProcessMaker-3.8/BasicFeatures/7Dynaforms/ImportExportDynaformJSONFormat.md","sourceDirName":"ProcessMaker-3.8/BasicFeatures/7Dynaforms","slug":"/ProcessMaker-3.8/BasicFeatures/7Dynaforms/ImportExportDynaformJSONFormat","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/ImportExportDynaformJSONFormat","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/ImportExportDynaformJSONFormat.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"title":"Import and Export Dynaform in JSON Format","description":"Import and Export Dynaform in JSON Format"},"sidebar":"tutorialSidebar","previous":{"title":"Dynaform Control Properties","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/CommonDynaformFieldProperties"},"next":{"title":"Create Multi-language Dynaforms","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/CreateMultilanguageDynaforms"}}');var o=i(74848),r=i(28453);const a={sidebar_position:6,title:"Import and Export Dynaform in JSON Format",description:"Import and Export Dynaform in JSON Format"},s="Import and Export Dynaform in JSON Format",d={},l=[{value:"Overview",id:"overview",level:2},{value:"Exporting a DynaForm",id:"exporting-a-dynaform",level:2},{value:"Importing a DynaForm",id:"importing-a-dynaform",level:2}];function m(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"import-and-export-dynaform-in-json-format",children:"Import and Export Dynaform in JSON Format"})}),"\n",(0,o.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"DynaForms inside ProcessMaker version 3 have the option to be exported and imported from the designer. The DynaForms are exported in .json format containing the definition of all the controls and properties included in the design. When importing a DynaForm, the file must contain the json definition of the DynaForm and its controls and properties will be included and rendered in the form."}),"\n",(0,o.jsx)(n.h2,{id:"exporting-a-dynaform",children:"Exporting a DynaForm"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"The DynaForm designer includes the option to export a DynaForm in the menu at the top right side of the window"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(4269).A+"",width:"559",height:"463"})}),"\n",(0,o.jsx)(n.p,{children:"By clicking on this option a .json file downloads containing the definition of the controls and properties included in the form. The name of the file has the format NameDynaForm.json. The elements downloaded in the file are:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Name of the DynaForm"}),"\n",(0,o.jsx)(n.li,{children:"Description of the DynaForm"}),"\n",(0,o.jsx)(n.li,{children:"Properties of the Form"}),"\n",(0,o.jsx)(n.li,{children:"Items of the Form which are its Controls"}),"\n",(0,o.jsx)(n.li,{children:"Control Properties"}),"\n",(0,o.jsx)(n.li,{children:"Variables related to the controls and their configuration"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"For example, the json definition of a DynaForm with a Text control that has a variable related would be:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{"name":"Employee Request",\n "description":"",\n "items":[{"type":"form",\n              "id":"1619873045550e531470b73029369295",\n              "name":"Employee Request",\n              "description":"",\n              "mode":"edit",\n              "script":"",\n              "language":"en",\n              "externalLibs":"",\n              "items":[[{"type":"text",\n                             "variable":"EmployeeName",\n                      "dataType":"string",\n                      "id":"EmployeeName",\n                      "name":"EmployeeName",\n                      "label":"text_1",\n                      "defaultValue":"",\n                      "placeholder":"",\n                      "hint":"",\n                      "required":false,\n                      "dependentFields":[],\n                      "textTransform":"none",\n                      "validate":"",\n                      "validateMessage":"",\n                      "maxLength":1000,\n                      "formula":"",\n                      "mode":"parent",\n                      "operation":"",\n                      "dbConnection":"workflow",\n                      "dbConnectionLabel":"PM Database",\n                      "sql":"",\n                      "options":[],\n                      "var_uid":"3959960935550eed0191762082100042",\n                      "var_name":"EmployeeName",\n                      "colSpan":12}\n                    ]\n'})}),"\n",(0,o.jsx)(n.h2,{id:"importing-a-dynaform",children:"Importing a DynaForm"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsx)(n.p,{children:"Inside the DynaForm designer of ProcessMaker version 3, it is not only possible to export the definition of the DynaForm but it is also possible to import an entire DynaForm by importing a .json file that contains the definition of the elements included in the form."}),"\n",(0,o.jsx)(n.p,{children:"Take into account that when importing a DynaForm from a .json file, the entire content of the DynaForm where it is imported is replaced by the definition of the DynaForm. That is the reason why it is recommended as a first step, to create a new blank DynaForm and make the import there so no elements are lost in the process."}),"\n",(0,o.jsx)(n.p,{children:"The option to import a DynaForm is included at the top right side of the DynaForm designer:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(89688).A+"",width:"561",height:"153"})}),"\n",(0,o.jsx)(n.p,{children:"When the Dynaform to be imported is empty, only the window to select the .json file opens and after selecting it, the import of the elements is done."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(88888).A+"",width:"561",height:"467"})}),"\n",(0,o.jsx)(n.p,{children:"When the DynaForm to be imported has controls previously added, then a message window is shown indicating that when importing all elements will be lost:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(21941).A+"",width:"426",height:"162"})}),"\n",(0,o.jsx)(n.p,{children:'To import the DynaForm losing all changes, click on "Yes". Click on "No" to not import the DynaForm and keep the controls already added in the DynaForm.'}),"\n",(0,o.jsx)(n.p,{children:"When a dynaform is imported over an existing dynaform, all the configuration of the existing dynaform is overwritten. Therefore, an alert message is displayed at the beginning saying that all the current dynaform is going to be replaced by the new one."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(17910).A+"",width:"468",height:"176"})}),"\n",(0,o.jsx)(n.p,{children:"Additionally, the import process scan the variables that are related to the dynaform controls and defined in the process with the variables that are included in the .JSON definition of the dynaform that is being imported."}),"\n",(0,o.jsx)(n.p,{children:"The imported process tries to reuse the existing variables (variables with the same name) in the process and if a new variable is imported, then it is automatically created in the process. If the variable already exist in the process then the following variable properties are compared to define if the form can use the existing variables:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Name"}),"\n",(0,o.jsx)(n.li,{children:"Type"}),"\n",(0,o.jsx)(n.li,{children:"DB Connection"}),"\n",(0,o.jsx)(n.li,{children:"SQL Query"}),"\n",(0,o.jsx)(n.li,{children:"Options"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"If any of the properties is different then a new variable needs to be created. The new variable is created with the same name plus the suffix \u201c_1\u201d. And the dynaform changes the references to the new created variables. The following dialog is display:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"alt text",src:i(82104).A+"",width:"517",height:"320"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},17910:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1ImportingExportingDynaforms_Confirm-a751d4a895dc234ed45619dbc86c3ec2.png"},82104:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/2ImportingExportingDynaforms_NewVariablesCreated-ea0cbf3da3f238530215d5f4d052db88.png"},21941:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},4269:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ExportOptionDynaFormDesignerVersion3-a67c113f0969310de2191e9377f6704e.png"},89688:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ImportOptionDynaFormDesignerVersion3-1b25afff8bc4dc7bbee6f322a2be58e1.png"},88888:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/ImportedDynaFormElementsVersion3-5d49966be32dfa88ac3346c75d9de6a3.png"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(96540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);