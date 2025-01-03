"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3148],{2446:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"ProcessMaker-3.8/BasicFeatures/8InputDocuments","title":"8. Input Documents","description":"Cambiar","source":"@site/docs/ProcessMaker-3.8/BasicFeatures/8InputDocuments.md","sourceDirName":"ProcessMaker-3.8/BasicFeatures","slug":"/ProcessMaker-3.8/BasicFeatures/8InputDocuments","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/8InputDocuments","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/8InputDocuments.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"8. Input Documents","description":"Cambiar"},"sidebar":"tutorialSidebar","previous":{"title":"Titles and Subtitles","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/7Dynaforms/Dynaform Controls/TitlesAndSubtitles"},"next":{"title":"9. Output Documents","permalink":"/docs/ProcessMaker-3.8/BasicFeatures/9OutputDocuments"}}');var i=n(4848),o=n(8453);const a={sidebar_position:0,title:"8. Input Documents",description:"Cambiar"},r="ProcessMaker 3.8 - Input Documents",l={},c=[{value:"Overview",id:"overview",level:2},{value:"Before Working with Input Documents",id:"before-working-with-input-documents",level:2},{value:"Creating Input Documents",id:"creating-input-documents",level:2},{value:"Creating Input Documents",id:"creating-input-documents-1",level:2}];function d(e){const t={admonition:"admonition",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"processmaker-38---input-documents",children:"ProcessMaker 3.8 - Input Documents"})}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Input Document is a feature that allows the user to upload a file or files to attach them to a particular case. These files can be text documents, spreadsheets, images or any other kind of file. An Input Document can be a hard copy (which has been printed out and stored in a filing cabinet), a digital file that is uploaded to the case, or both.\nFrom version 3.0.1.5, an Input Document can also be related to a file object in a Dynaform."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: The Input Document feature is not available for ProcessMaker Mobile as a step: it will not open the case or create a case if the Input Document feature is the first step on the display list. If a process has a Dynaform and then the Input Document step, the Mobile version skips the Input Document step and continues. Only the Input Document in a Dynaform is available for ProcessMaker Mobile. This feature will be implemented in future versions."})}),"\n",(0,i.jsx)(t.h2,{id:"before-working-with-input-documents",children:"Before Working with Input Documents"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Take a look at the complete list of best practices related to the use of Input Documents."}),"\n",(0,i.jsx)(t.h2,{id:"creating-input-documents",children:"Creating Input Documents"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"To create a new input document go to the main toolbox of the Process Map. Hover the pointer of the mouse over the + symbol next to Input Documents and click on Create. Take into account that input documents created inside a project can be used only by elements related to the same project and can not be invoked from other projects or processes."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(4468).A+"",width:"179",height:"178"})}),"\n",(0,i.jsx)(t.p,{children:"A new popup window will allow you to configure the new input document's characteristics."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"alt text",src:n(2645).A+"",width:"735",height:"473"})}),"\n",(0,i.jsx)(t.p,{children:"Here, the following properties can be defined:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Title: Enter a title to identify the input document."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Document Type: Select whether the uploaded document will be digital, printed, or both. This option is only a reference to the process designer to indicate that a printed file may also exist outside ProcessMaker."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Description: Enter a description of the input document, which will help the user better understand its purpose and what type of document should be submitted."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Enable Versioning: Select Yes to keep multiple versions of the input document."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Versioning is useful if the same input document will be submitted multiple times over the course of a case or to maintain an audit trail."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Destination Path: Create the name of a folder where this input document will be placed in CASES > Documents. To use a variable in the folder name, click on the [@@] button to select a variable."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: Variables used for Input document paths should be saved in earlier steps. This means that these variables are not populated in the same form where files are being uploaded."})}),"\n",(0,i.jsx)(t.p,{children:"For example: Receipts_@@USR_USERNAME\nTo place the input document inside a subfolder inside other folders, enter a path to that folder, separating each folder with a / (forward slash).\nFor example: Receipts/@@USR_USERNAME/@@subject_@@date\nTo see a list of input documents, output documents and attached files found in each folder, go to CASES > Documents and click on the folder."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: The Destination Path only effects where the files are found in the graphical interface. It does not effect where input documents are stored in the file system."})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Tags: Enter the name of the identifying tag(s), that will be associated with this input document. To specify more than one tag name, separate each tag name with commas. Click on the [@@] button to select the variable that will be used in the tag name. Tags are really useful when looking for input documents in the ProcessMaker database."}),"\n",(0,i.jsx)(t.li,{children:"Allowed file extensions: A required field that defines which file extensions are allowed to be uploaded as an input document. When uploading a file as an input document, ProcessMaker will verify that only files with the specified extension(s) are uploaded. The following format is used to define allowed file extensions:"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.em,{children:"."})," Allows any type of file."]}),"\n",(0,i.jsx)(t.p,{children:"*.pdf, *.jpg, *.docx Specific types of files. To specify more than one type, separate them using commas."}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:'Note: This feature can only be used to verify the file extension, not to specify the allowed file name of an input document. For example: Student_*.pdf does not validate that all input document file names should start with "Student_".'})}),"\n",(0,i.jsx)(t.p,{children:"Also, see the hint below for help defining the extensions:"}),"\n",(0,i.jsx)(t.p,{children:"To use this feature, the fileinfo extension must be enabled. This extension not only verifies the extension of the file, but also ensures that the extension matches the file's contents so that the user cannot upload a dangerous file (for example, when an .exe file has been renamed with the .jpg extension)."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Maximum file size: A required field that defines the maximum sizein KB or MB of the file to be attached. If set to zero, then the file size is unlimited."}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsx)(t.p,{children:"Note: This value can not be larger than the value configured in the php.ini file. For more information, please go to the Configuring an Input Document Maximum Size section."})}),"\n",(0,i.jsx)(t.p,{children:'After filling in the fields with the necessary information, click on "Save".'}),"\n",(0,i.jsx)(t.h2,{id:"creating-input-documents-1",children:"Creating Input Documents"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Configuring the Maximum Size of an Input Document\nSince uploaded files are stored as files in the hard drive, their size can be as large as allowed by the server's operating system and hard drive. Nonetheless, PHP is configured to allow the upload of files no larger than 2MB by default. To increase the maximum size of uploaded files, edit your php.ini file to allow for larger file uploads."}),"\n",(0,i.jsx)(t.p,{children:'Look for the "File Uploads" section and set file_uploads = On and increase the size of upload_max_filesize:'})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2645:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/3.2InputDocumentsCreate-0f4670ad34d22d595490ddcf2c08555c.png"},4468:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(6540);const i={},o=s.createContext(i);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);