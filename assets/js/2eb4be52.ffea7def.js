"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2808],{9436:(e,_,E)=>{E.r(_),E.d(_,{assets:()=>S,contentTitle:()=>n,default:()=>t,frontMatter:()=>r,metadata:()=>a,toc:()=>i});var s=E(4848),P=E(8453);const r={sidebar_position:0,title:"4. Roles",description:"Cambiar"},n="ProcessMaker 3.8 - Roles",a={id:"ProcessMaker-3.8/BasicFeatures/4Roles",title:"4. Roles",description:"Cambiar",source:"@site/docs/ProcessMaker-3.8/BasicFeatures/4Roles.md",sourceDirName:"ProcessMaker-3.8/BasicFeatures",slug:"/ProcessMaker-3.8/BasicFeatures/4Roles",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/4Roles",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/4Roles.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"4. Roles",description:"Cambiar"},sidebar:"tutorialSidebar",previous:{title:"3. Managing Users",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/3ManagingUsers"},next:{title:"5. Using Conditions",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/5UsingConditions"}},S={},i=[{value:"Overview",id:"overview",level:2},{value:"Managing Roles",id:"managing-roles",level:2},{value:"PROCESSMAKER_ADMIN",id:"processmaker_admin",level:3},{value:"PROCESSMAKER_MANAGER",id:"processmaker_manager",level:3},{value:"PROCESSMAKER_OPERATOR",id:"processmaker_operator",level:3},{value:"Managing Permissions",id:"managing-permissions",level:2},{value:"PM_ALLCASES",id:"pm_allcases",level:2}];function R(e){const _={admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,P.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(_.header,{children:(0,s.jsx)(_.h1,{id:"processmaker-38---roles",children:"ProcessMaker 3.8 - Roles"})}),"\n",(0,s.jsx)(_.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"A role is a set of permissions used to access specific functionalities and resources in ProcessMaker. Each user is assigned a role, which determines what actions that user can perform in ProcessMaker and what parts of the interface that user can access."}),"\n",(0,s.jsx)(_.h2,{id:"managing-roles",children:"Managing Roles"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:'To see the available roles, log in to ProcessMaker with a user such as the "admin" who has the PM_USERS permission in his/her role. Then, go to Admin > Users > Roles and the following list will be displayed:'}),"\n",(0,s.jsx)(_.p,{children:(0,s.jsx)(_.img,{alt:"alt text",src:E(7413).A+"",width:"684",height:"224"})}),"\n",(0,s.jsx)(_.h3,{id:"processmaker_admin",children:"PROCESSMAKER_ADMIN"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"The PROCESSMAKER_ADMIN role is designed for system administrators and process designers who need access to all the features and functionalities in ProcessMaker. Users who are assigned this role can do everything, including configure the system, create and edit processes, manage users and groups, manage cases, and oversee productivity with reports and dashboards."}),"\n",(0,s.jsx)(_.h3,{id:"processmaker_manager",children:"PROCESSMAKER_MANAGER"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"The PROCESSMAKER_MANAGER role is for users who need to manage cases, users and groups and oversee productivity, but do not need to design processes or configure ProcessMaker."}),"\n",(0,s.jsx)(_.h3,{id:"processmaker_operator",children:"PROCESSMAKER_OPERATOR"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"The PROCESSMAKER_OPERATOR role is for normal production users who just need to log in and run cases."}),"\n",(0,s.jsx)(_.p,{children:"Note: If a role is set as INACTIVE, and a user is assigned to that role, the user can NOT log in to ProcessMaker until the role is changed to ACTIVE"}),"\n",(0,s.jsx)(_.h2,{id:"managing-permissions",children:"Managing Permissions"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"If these three sets of permissions do not suit your organization's needs, the three default roles can be modified and new roles can be created as well. To customize roles, see the following descriptions of the available permissions that can be assigned to a role."}),"\n",(0,s.jsx)(_.admonition,{type:"note",children:(0,s.jsx)(_.p,{children:"Remember that if any of the role's permissions are changed (removed/added), it is necessary to update the process design to fit the newly assigned or removed permissions."})}),"\n",(0,s.jsx)(_.p,{children:"The 3 roles explained below have the following permissions:"}),"\n",(0,s.jsxs)(_.table,{children:[(0,s.jsx)(_.thead,{children:(0,s.jsxs)(_.tr,{children:[(0,s.jsx)(_.th,{children:"PROCESSMAKER_ADMIN"}),(0,s.jsx)(_.th,{children:"PROCESSMAKER_MANAGER"}),(0,s.jsx)(_.th,{children:"PROCESSMAKER_OPERATOR"})]})}),(0,s.jsx)(_.tbody,{children:(0,s.jsxs)(_.tr,{children:[(0,s.jsx)(_.td,{children:"PM_ALLCASES PM_CANCELCASE PM_CASES PM_DASHBOARD PM_DELETE_PROCESS_CASES PM_EDIT_USER_PROFILE_ADDRESS PM_EDIT_USER_PROFILE_CALENDAR PM_EDIT_USER_PROFILE_COSTS PM_EDIT_USER_PROFILE_COUNTRY PM_EDIT_USER_PROFILE_DEFAULT_CASES_MENU_OPTIONS PM_EDIT_USER_PROFILE_DEFAULT_LANGUAGE PM_EDIT_USER_PROFILE_DEFAULT_MAIN_MENU_OPTIONS PM_EDIT_USER_PROFILE_EMAIL PM_EDIT_USER_PROFILE_EXPIRATION_DATE PM_EDIT_USER_PROFILE_FIRST_NAME PM_EDIT_USER_PROFILE_LAST_NAME PM_EDIT_USER_PROFILE_LOCATION PM_EDIT_USER_PROFILE_PASSWORD PM_EDIT_USER_PROFILE_PHONE PM_EDIT_USER_PROFILE_PHOTO PM_EDIT_USER_PROFILE_POSITION PM_EDIT_USER_PROFILE_REPLACED_BY PM_EDIT_USER_PROFILE_ROLE PM_EDIT_USER_PROFILE_STATE_OR_REGION PM_EDIT_USER_PROFILE_STATUS PM_EDIT_USER_PROFILE_TIME_ZONE PM_EDIT_USER_PROFILE_USER_MUST_CHANGE_PASS... PM_EDIT_USER_PROFILE_USERNAME PM_EDIT_USER_PROFILE_ZIP_CODE PM_EDITPERSONALINFO PM_EDITPERSONALINFO_CALENDAR PM_FACTORY PM_FOLDER_DELETE PM_FOLDERS_ADD_FILE PM_FOLDERS_ADD_FOLDER PM_FOLDERS_ALL PM_FOLDERS_OWNER PM_LOGIN PM_REASSIGNCASE PM_REASSIGNCASE_SUPERVISOR PM_REST_API_APPLICATIONS PM_SETUP PM_SETUP_ADVANCE PM_SETUP_CALENDAR PM_SETUP_CASES_LIST_CACHE_BUILDER PM_SETUP_CLEAR_CACHE PM_SETUP_CUSTOM_CASES_LIST PM_SETUP_DASHBOARDS PM_SETUP_EMAIL PM_SETUP_ENVIRONMENT PM_SETUP_HEART_BEAT PM_SETUP_LANGUAGE PM_SETUP_LOGIN PM_SETUP_LOGO PM_SETUP_LOGS PM_SETUP_PLUGINS PM_SETUP_PM_TABLES PM_SETUP_PROCESS_CATEGORIES PM_SETUP_SKIN PM_SETUP_USERS_AUTHENTICATION_SOURCES PM_SUPERVISOR PM_TASK_SCHEDULER_ADMIN PM_UNCANCELCASE PM_USERS PM_WEBDAV"}),(0,s.jsx)(_.td,{children:"PM_ALLCASES PM_CANCELCASE PM_CASES PM_DASHBOARD PM_DELETE_PROCESS_CASES PM_EDIT_USER_PROFILE_ADDRESS PM_EDIT_USER_PROFILE_CALENDAR PM_EDIT_USER_PROFILE_COSTS PM_EDIT_USER_PROFILE_COUNTRY PM_EDIT_USER_PROFILE_DEFAULT_CASES_MENU_OPTIONS PM_EDIT_USER_PROFILE_DEFAULT_LANGUAGE PM_EDIT_USER_PROFILE_DEFAULT_MAIN_MENU_OPTIONS PM_EDIT_USER_PROFILE_EMAIL PM_EDIT_USER_PROFILE_EXPIRATION_DATE PM_EDIT_USER_PROFILE_FIRST_NAME PM_EDIT_USER_PROFILE_LAST_NAME PM_EDIT_USER_PROFILE_LOCATION PM_EDIT_USER_PROFILE_PASSWORD PM_EDIT_USER_PROFILE_PHONE PM_EDIT_USER_PROFILE_PHOTO PM_EDIT_USER_PROFILE_POSITION PM_EDIT_USER_PROFILE_REPLACED_BY PM_EDIT_USER_PROFILE_ROLE PM_EDIT_USER_PROFILE_STATE_OR_REGION PM_EDIT_USER_PROFILE_STATUS PM_EDIT_USER_PROFILE_TIME_ZONE PM_EDIT_USER_PROFILE_USER_MUST_CHANGE_PASS... PM_EDIT_USER_PROFILE_USERNAME PM_EDIT_USER_PROFILE_ZIP_CODE PM_EDITPERSONALINFO PM_EDITPERSONALINFO_CALENDAR PM_FOLDER_DELETE PM_FOLDERS_ADD_FILE PM_FOLDERS_ADD_FOLDER PM_FOLDERS_ALL PM_LOGIN PM_REASSIGNCASE PM_REST_API_APPLICATIONS PM_SETUP_CALENDAR PM_SETUP_CASES_LIST_CACHE_BUILDER PM_SETUP_CLEAR_CACHE PM_SETUP_CUSTOM_CASES_LIST PM_SETUP_DASHBOARDS PM_SETUP_EMAIL PM_SETUP_ENVIRONMENT PM_SETUP_HEART_BEAT PM_SETUP_LANGUAGE PM_SETUP_LOGIN PM_SETUP_LOGO PM_SETUP_LOGS PM_SETUP_PLUGINS PM_SETUP_PM_TABLES PM_SETUP_PROCESS_CATEGORIES PM_SETUP_SKIN PM_SETUP_USERS_AUTHENTICATION_SOURCES PM_SUPERVISOR PM_UNCANCELCASE PM_USERS"}),(0,s.jsx)(_.td,{children:"PM_CASES PM_EDIT_USER_PROFILE_ADDRESS PM_EDIT_USER_PROFILE_CALENDAR PM_EDIT_USER_PROFILE_COUNTRY PM_EDIT_USER_PROFILE_DEFAULT_LANGUAGE PM_EDIT_USER_PROFILE_EMAIL PM_EDIT_USER_PROFILE_FIRST_NAME PM_EDIT_USER_PROFILE_LAST_NAME PM_EDIT_USER_PROFILE_LOCATION PM_EDIT_USER_PROFILE_PASSWORD PM_EDIT_USER_PROFILE_PHONE PM_EDIT_USER_PROFILE_PHOTO PM_EDIT_USER_PROFILE_STATE_OR_REGION PM_EDIT_USER_PROFILE_TIME_ZONE PM_EDIT_USER_PROFILE_USERNAME PM_EDIT_USER_PROFILE_ZIP_CODE PM_LOGIN"})]})})]}),"\n",(0,s.jsx)(_.p,{children:"To see which permissions are assigned to a role, select the role and click on Permissions:"}),"\n",(0,s.jsx)(_.p,{children:(0,s.jsx)(_.img,{alt:"alt text",src:E(9150).A+"",width:"708",height:"164"})}),"\n",(0,s.jsx)(_.h2,{id:"pm_allcases",children:"PM_ALLCASES"}),"\n",(0,s.jsx)(_.hr,{}),"\n",(0,s.jsx)(_.p,{children:"The PM_ALLCASES permission provides access to the Advanced Search option under the HOME tab. Advanced Search permits users to search for particular cases among all cases of all users in the current workspace. This feature narrows the search using the following search criteria: Category, Process, Status, User, Delegated Date, and Case Number."}),"\n",(0,s.jsx)(_.p,{children:"To search for a case, enter the search criteria and click on the Search button. All cases matching the search criteria will be listed as follows."})]})}function t(e={}){const{wrapper:_}={...(0,P.R)(),...e.components};return _?(0,s.jsx)(_,{...e,children:(0,s.jsx)(R,{...e})}):R(e)}},9150:(e,_,E)=>{E.d(_,{A:()=>s});const s=E.p+"assets/images/3.2PermissionsRolesPermissions-677800e30bbe8990e93176ef5842a96d.png"},7413:(e,_,E)=>{E.d(_,{A:()=>s});const s=E.p+"assets/images/3.5.0RolesAccess-91da461b3a5dda10cca3a579531ae2d4.png"},8453:(e,_,E)=>{E.d(_,{R:()=>n,x:()=>a});var s=E(6540);const P={},r=s.createContext(P);function n(e){const _=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(_):{..._,...e}}),[_,e])}function a(e){let _;return _=e.disableParentContext?"function"==typeof e.components?e.components(P):e.components||P:n(e.components),s.createElement(r.Provider,{value:_},e.children)}}}]);