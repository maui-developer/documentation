"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1149],{59220:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});const l=JSON.parse('{"id":"ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/DynaformControl","title":"Dynaform Controls","description":"Dynaform Controls","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/DynaformControl.md","sourceDirName":"ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls","slug":"/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/DynaformControl","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/DynaformControl","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/DynaformControl.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"Dynaform Controls","description":"Dynaform Controls"},"sidebar":"tutorialSidebar","previous":{"title":"Dynaform Controls","permalink":"/es/docs/category/dynaform-controls"},"next":{"title":"Textboxes and Textareas","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/TextandTextarea"}}');var i=n(74848),s=n(28453);const r={sidebar_position:0,title:"Dynaform Controls",description:"Dynaform Controls"},o="Dynaform Controls",a={},d=[{value:"Overview",id:"overview",level:2},{value:"General Controls",id:"general-controls",level:2},{value:"Web Controls",id:"web-controls",level:2},{value:"Other Controls",id:"other-controls",level:4},{value:"Management of Variables Inside Forms",id:"management-of-variables-inside-forms",level:2},{value:"Allowed Variables for each Control",id:"allowed-variables-for-each-control",level:3},{value:"Null Value",id:"null-value",level:3},{value:"Default Value",id:"default-value",level:3},{value:"Default Value in Fields with Domain Values",id:"default-value-in-fields-with-domain-values",level:4},{value:"Default Value for Suggests",id:"default-value-for-suggests",level:4},{value:"Default Value in Single Value Fields",id:"default-value-in-single-value-fields",level:4},{value:"Setting Multiple Default Values",id:"setting-multiple-default-values",level:4},{value:"Fields that Must Select an Initial Value",id:"fields-that-must-select-an-initial-value",level:4},{value:"SQL Format",id:"sql-format",level:3},{value:"SQL instruction that returns values and text",id:"sql-instruction-that-returns-values-and-text",level:4},{value:"SQL instruction that returns a value",id:"sql-instruction-that-returns-a-value",level:4},{value:"SQL and Options in Controls",id:"sql-and-options-in-controls",level:3},{value:"SQL and Options that Define the Domain of Options",id:"sql-and-options-that-define-the-domain-of-options",level:4},{value:"SQL Property in Scalar Controls",id:"sql-property-in-scalar-controls",level:4},{value:"Fields without SQL and options properties",id:"fields-without-sql-and-options-properties",level:4},{value:"Duplicated Variables in Dynaforms",id:"duplicated-variables-in-dynaforms",level:3}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dynaform-controls",children:"Dynaform Controls"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Final users interact with a form through the controls available within it. The controls of the HTML5 responsive Dynaform designer use global variables created within the project to interact with elements of the project when the data needed must be entered by a user through a form. ProcessMaker has created an interface that allows users define these variables, add options and define the data type."}),"\n",(0,i.jsx)(t.h2,{id:"general-controls",children:"General Controls"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"When a new form is created, the container where all controls will be added (form) and the container where each particular control will be added as well (row) have their own particular functionality and properties inside them."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Form"}),"\n",(0,i.jsx)(t.li,{children:"Row"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"web-controls",children:"Web Controls"}),"\n",(0,i.jsx)(t.p,{children:"The responsive Dynaform designer comes with the following controls that are directly related to the variables created in the project:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Textbox and Textarea"}),"\n",(0,i.jsx)(t.li,{children:"DateTime"}),"\n",(0,i.jsx)(t.li,{children:"Dropdown"}),"\n",(0,i.jsx)(t.li,{children:"Checkbox and Checkgroup"}),"\n",(0,i.jsx)(t.li,{children:"Radio (group)"}),"\n",(0,i.jsx)(t.li,{children:"Suggest"}),"\n",(0,i.jsx)(t.li,{children:"Hidden"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following controls that were available in previous versions of ProcessMaker are not available inside version 3:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"ListBox"}),"\n",(0,i.jsx)(t.li,{children:"Yes/No"}),"\n",(0,i.jsx)(t.li,{children:"Percentage"}),"\n",(0,i.jsx)(t.li,{children:"Currency"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If needing to manage the controls above, take into account that the properties of the new controls replace the functionality to most of them by simply configuring the behavior of the controls."}),"\n",(0,i.jsx)(t.h4,{id:"other-controls",children:"Other Controls"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"These controls are available inside the designer and give more functionality to forms such as managing documents, links, images, adding extra HTML code, etc. These controls are not directly related to a variable of the project. These controls are directly added into the design and each one of them can be configured using its properties. The available controls of this section are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Title"}),"\n",(0,i.jsx)(t.li,{children:"Subtitle"}),"\n",(0,i.jsx)(t.li,{children:"Comment/Label *"}),"\n",(0,i.jsx)(t.li,{children:"Link"}),"\n",(0,i.jsx)(t.li,{children:"Image"}),"\n",(0,i.jsx)(t.li,{children:"File"}),"\n",(0,i.jsx)(t.li,{children:"Submit"}),"\n",(0,i.jsx)(t.li,{children:"Button"}),"\n",(0,i.jsx)(t.li,{children:"Grid"}),"\n",(0,i.jsx)(t.li,{children:"SubForm"}),"\n",(0,i.jsx)(t.li,{children:"Panel"}),"\n",(0,i.jsx)(t.li,{children:"Multiple File Uploader"}),"\n"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'From version 3.0.1 this control changed its name from "Comment" to "Label".'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"management-of-variables-inside-forms",children:"Management of Variables Inside Forms"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Take into account the following considerations when working with variables related to controls inside the Dynaform designer."}),"\n",(0,i.jsx)(t.h3,{id:"allowed-variables-for-each-control",children:"Allowed Variables for each Control"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Each of the controls available has different properties that give the control major functionality and allows users to define the scope of the control. The explanation of these properties and their characteristics are in the following sections. The table below details the available controls for each data type:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Control/Data Type"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"String"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Integer"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Float"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Boolean"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Datetime"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Grid"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Array"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"File **"}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:"Multiple File"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Text"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"TextArea"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Dropdown"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Checkbox *"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Checkgroup *"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Radio (group)"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Suggest"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Datetime"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Hidden"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Grid"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"File"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Multiple File Uploader"}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"}}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"X"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:'*Available Version: From version 3.0.1.4, checkboxes controls have been divided into two: "Checkboxes" and "Checkgroups". Take a look at their documentation to learn more about it.'}),"\n",(0,i.jsx)(t.p,{children:"**Available Version: From version 3.0.1.5."}),"\n",(0,i.jsx)(t.h3,{id:"null-value",children:"Null Value"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The following are the conditions used for working with null values in Dynaforms"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:'Fields of Dynaforms related to variables have a null value initially (the null value is interpreted as "missing value").'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"If the field (rendered) is not altered by the user in a Dynaform at any moment, the value will continue to be null."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"An empty string is different to the null value. If the user cleans the content of a field, the empty string is used as a valid value (it means that the value saved will be the empty string)."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Take into account that variables store null values, thus Report Tables and PM Tables fields must also support null values"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"default-value",children:"Default Value"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The following are the conditions used for working with default values in Dynaforms"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The default value in a field of a Dynaform is set as the value retrieved from the field (when it is rendered) if it doesn\u2019t contain any previous value."}),"\n",(0,i.jsx)(t.li,{children:"The default value is set as the value retrieved from the field only if its value is null (not the value set by the user even if that value is an empty string)."}),"\n",(0,i.jsxs)(t.li,{children:['The default value overrides the "SQL" and "Options" properties. This is the order in which the values are saved (shown by priority):',"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"First SQL value //minor priority"}),"\n",(0,i.jsx)(t.li,{children:"First Option value"}),"\n",(0,i.jsx)(t.li,{children:"Default Value //max priority"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"If the default value is defined, it overrides the options or SQL values. If the default value is not set, the first value in the Options property overrides the value set by SQL."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"default-value-in-fields-with-domain-values",children:"Default Value in Fields with Domain Values"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The default value must be defined inside the domain of values retrieved by the SQL query or set in the Options of the variable of the field. The following are the fields in which this consideration must be taken into account:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dropdown"}),"\n",(0,i.jsx)(t.li,{children:"Checkgroup"}),"\n",(0,i.jsx)(t.li,{children:"Radio group"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"These fields will look for the value set as default in the data returned by the SQL query or by the Options set for the control. If the value is found in the data retrieved, then the default value is set as the value by default. If the default value is not found in these domains then, the default value is not saved in the data of the control."}),"\n",(0,i.jsx)(t.h4,{id:"default-value-for-suggests",children:"Default Value for Suggests"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In case of the suggest field, the behavior of the default value is different. The default value can be out of the domain defined in the domain (SQL and options). It\u2019s not required that the default value be part of the domain."}),"\n",(0,i.jsx)(t.p,{children:"The default value will be displayed in the text area of the suggest control and stored in the variable. In that case the value and the text displayed are the same."}),"\n",(0,i.jsx)(t.h4,{id:"default-value-in-single-value-fields",children:"Default Value in Single Value Fields"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In the other controls that do not define a domain of options, just set the default value in the properties of the control."}),"\n",(0,i.jsx)(t.h4,{id:"setting-multiple-default-values",children:"Setting Multiple Default Values"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Checkgroups allow zero, one or multiple options to be selected by default. To select multiple options, separate the values of the selected options with vertical pipes ( | ) . Remember to use the values of the options, and not the labels, which is the text displayed to the user. For example, if wishing to select just Canada in a checkgroup of countries, then enter CA in the default value property. To select Bolivia, Argentina and the United States by default, then enter BO|AR|US in the default value property."}),"\n",(0,i.jsx)(t.h4,{id:"fields-that-must-select-an-initial-value",children:"Fields that Must Select an Initial Value"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The fields that define a domain of options define a group of possible values."}),"\n",(0,i.jsx)(t.p,{children:"Only the dropdown control always selects a value when it is first rendered. In order to define an empty or null value, create an option without value and add any description such as \u201c--Select an option--\u201d."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: From version 3.0.1.5 the Placeholder property was added to this control in which it is possible set an empty value."})}),"\n",(0,i.jsx)(t.p,{children:"If the dropdown is required and the value returned is null, then the validation will return false and it will not be possible to go to the next step. The form will ask to select a value from the dropdown."}),"\n",(0,i.jsx)(t.h3,{id:"sql-format",children:"SQL Format"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The SQL property is used in many controls in the Dynaform. Take into account the following conditions to set the SQL instructions. For more information about the SQL property, see Dynaform Control Properties - SQL."}),"\n",(0,i.jsx)(t.h4,{id:"sql-instruction-that-returns-values-and-text",children:"SQL instruction that returns values and text"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The following rules must be applied to the controls:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dropdown"}),"\n",(0,i.jsx)(t.li,{children:"Checkgroup"}),"\n",(0,i.jsx)(t.li,{children:"Radio group"}),"\n",(0,i.jsx)(t.li,{children:"Suggest"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following syntax must be used in the SQL property:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"SELECT [value Column], [text Column] FROM [table Name] WHERE [any condition]"})}),"\n",(0,i.jsx)(t.p,{children:"Where:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"value Column: Is the identifier of the option."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: Identifiers just support one-word text and characters as . and @. The following characters are not supported when they are between words: ', |. `,  (space), \", !, and ^ (by example: A^A). In addition, the ProcessMaker Dynaform Designer does not support SQL queries with the * identifier. Using the * identifier is considered a bad practice because generates performance issues."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"text Column: Is the text that is displayed in the control."}),"\n",(0,i.jsx)(t.li,{children:"table Name: The name of the table in the database."}),"\n",(0,i.jsx)(t.li,{children:"condition: Any condition for the SQL query"}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"sql-instruction-that-returns-a-value",children:"SQL instruction that returns a value"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The following rules must be applied to the controls:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Textbox"}),"\n",(0,i.jsx)(t.li,{children:"Textarea"}),"\n",(0,i.jsx)(t.li,{children:"Hidden"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The following syntax must be used in the SQL property:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"SELECT [value Column] FROM [table Name] WHERE [any condition]"})}),"\n",(0,i.jsx)(t.p,{children:"Where:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"value Column: The value must always be the first field in the query. It is the identifier of the option."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: The * identifier is not supported in SQL queries."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"table Name: The name of the table in the database."}),"\n",(0,i.jsx)(t.li,{children:"condition: Any condition for the SQL query."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"sql-and-options-in-controls",children:"SQL and Options in Controls"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"There are two groups of controls that use the SQL and Options properties in different way. Both of them are explained below"}),"\n",(0,i.jsx)(t.h4,{id:"sql-and-options-that-define-the-domain-of-options",children:"SQL and Options that Define the Domain of Options"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The values returned by the SQL query and the Options properties constitute the domain values of the field. The valid values for the control are only the defined in the domain. The following controls can contain and use the SQL property and Options property as domain values:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Dropdown"}),"\n",(0,i.jsx)(t.li,{children:"Checkgroup"}),"\n",(0,i.jsx)(t.li,{children:"Radio group"}),"\n",(0,i.jsx)(t.li,{children:"Suggest"}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: The * identifier is not supported in SQL queries."})}),"\n",(0,i.jsx)(t.h4,{id:"sql-property-in-scalar-controls",children:"SQL Property in Scalar Controls"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The SQL property can also be used as a scalar value in a control. If there are more than one value as the result of the execution of the SQL query, only the first value is used to set the control value."}),"\n",(0,i.jsx)(t.p,{children:"The following controls can contain and use SQL property as scalar value:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"TextBox"}),"\n",(0,i.jsx)(t.li,{children:"TextArea"}),"\n",(0,i.jsx)(t.li,{children:"Hidden"}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Consider the rules defined in the section \u201cDefault value\u201d in order to define which value is set when the SQL and Default Value are defined. Note that these controls do not have the property Options ."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: The * identifier is not supported in SQL queries."})}),"\n",(0,i.jsx)(t.h4,{id:"fields-without-sql-and-options-properties",children:"Fields without SQL and options properties"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"The following fields don\u2019t include the SQL and options properties:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Title"}),"\n",(0,i.jsx)(t.li,{children:"Subtitle"}),"\n",(0,i.jsx)(t.li,{children:"Label"}),"\n",(0,i.jsx)(t.li,{children:"Checkbox"}),"\n",(0,i.jsx)(t.li,{children:"Datetime"}),"\n",(0,i.jsx)(t.li,{children:"Link"}),"\n",(0,i.jsx)(t.li,{children:"Image"}),"\n",(0,i.jsx)(t.li,{children:"File"}),"\n",(0,i.jsx)(t.li,{children:"Multiple File Uploader"}),"\n",(0,i.jsx)(t.li,{children:"Submit"}),"\n",(0,i.jsx)(t.li,{children:"Button"}),"\n",(0,i.jsx)(t.li,{children:"Grid"}),"\n",(0,i.jsx)(t.li,{children:"Panel"}),"\n",(0,i.jsx)(t.li,{children:"Subform"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"duplicated-variables-in-dynaforms",children:"Duplicated Variables in Dynaforms"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Inside a Dynaform it is recommended to set only one instance of a variable. Nevertheless, it is possible to define two fields using the same variable in the following situations:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"The same variable is assigned in two or more subforms in the design of the form (it means that the subforms added used the same variable in their controls). Remember that a form can only be used one time as a subform in a form, but a form can have more than one subform in its design."}),"\n",(0,i.jsx)(t.li,{children:"The design of the subform is modified after the subform was assigned to many forms. And a variable is duplicated in any of the main forms."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The designer wants to duplicate the use of the variable in two sections of the form, and display or hide one of the associated fields depending of the design. In that case, the Dynaform designer is going to alert the architect that a variable is being used in two or more fields, but the architect must define if the field with reference to the same variable is possible."}),"\n",(0,i.jsx)(t.p,{children:"When running cases, if a variable is used in two or more controls, then the control in which the value of the variable is set at the end will be saved as the value of the variable. The definition of the order of the controls is top to down and left to right (note that this depends on the browser). To avoid these problems it\u2019s recommended to not duplicate variables."}),"\n",(0,i.jsx)(t.p,{children:"To know more about variables restrictions, see naming variables best practices."})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var l=n(96540);const i={},s=l.createContext(i);function r(e){const t=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:t},e.children)}}}]);