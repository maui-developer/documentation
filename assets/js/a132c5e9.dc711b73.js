"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8292],{2070:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=n(4848),r=n(8453);const i={sidebar_position:0,title:"3. Managing Users",description:"You can log on to ProcessMaker in different ways depending on whether you log on through the standard interface or through an Enterprise plugin."},a="ProcessMaker 3.8.2 - Users Management",o={id:"ProcessMaker-3.8/BasicFeatures/3ManagingUsers",title:"3. Managing Users",description:"You can log on to ProcessMaker in different ways depending on whether you log on through the standard interface or through an Enterprise plugin.",source:"@site/docs/ProcessMaker-3.8/BasicFeatures/3ManagingUsers.md",sourceDirName:"ProcessMaker-3.8/BasicFeatures",slug:"/ProcessMaker-3.8/BasicFeatures/3ManagingUsers",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/3ManagingUsers",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/3ManagingUsers.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,title:"3. Managing Users",description:"You can log on to ProcessMaker in different ways depending on whether you log on through the standard interface or through an Enterprise plugin."},sidebar:"tutorialSidebar",previous:{title:"2. Create your first process",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess"},next:{title:"4. Roles",permalink:"/documentation/docs/ProcessMaker-3.8/BasicFeatures/4Roles"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"The Users Tab",id:"the-users-tab",level:2},{value:"Users",id:"users",level:2},{value:"Altering the User List",id:"altering-the-user-list",level:2},{value:"View User Information",id:"view-user-information",level:2},{value:"Create New Users",id:"create-new-users",level:2}];function l(e){const s={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"processmaker-382---users-management",children:"ProcessMaker 3.8.2 - Users Management"})}),"\n",(0,t.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"Only people who are registered as users have the right to access ProcessMaker. Those users can be organized into groups and departments. The type of activities that users can perform and the interface users see is determined by their roles."}),"\n",(0,t.jsx)(s.h2,{id:"the-users-tab",children:"The Users Tab"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:'To administer users, groups and departments, log in as the "admin" or another user who has the PM_USERS permission in their role. Then, go to the Users tab in the sidebar under the Admin menu:'}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(5275).A+"",width:"258",height:"156"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'User: A user account in ProcessMaker usually represents a person in the organization, but can also represent an account with special privileges, such as the "admin" account.'}),"\n",(0,t.jsx)(s.li,{children:'Groups: Users can be assigned to zero, one, or more groups. A group of users simplifies the assignment of users to tasks. For example, a "Help Desk" process may involve a pool of customer support clerks, all belonging to a group named "Customer Support".'}),"\n",(0,t.jsx)(s.li,{children:"Departments: Arranges users under a hierarchical organizational structure. A user can only belong to one department."}),"\n",(0,t.jsx)(s.li,{children:"Roles: Makes it possible to define customized roles with different levels of permissions, so that the functions and privileges of different users can be easily controlled and managed."}),"\n",(0,t.jsx)(s.li,{children:"Authentication Sources: Defines external user authentication sources, such as LDAP or Active Directory, to be used by ProcessMaker. External authentication allows users to use the same username and password across multiple applications."}),"\n",(0,t.jsx)(s.li,{children:"User Experience: This is an option to use a simplified interface for the Cases inbox. For more information, please visit User Experience"}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"users",children:"Users"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"To see the list of users registered in the current workspace, go to Admin > Users > Users."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Users List!",src:n(1228).A+"",width:"728",height:"200"})}),"\n",(0,t.jsx)(s.p,{children:"The following columns provide information about the user accounts:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"User Name: Displays the username, which is used to log in to ProcessMaker and identify the user."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Full Name: Displays the last and first name of each user."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Status: Displays the status of the user: Active, Inactive or Vacation"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Role: Displays the current role of each user account. There are three default roles: PROCESSMAKER_OPERATOR, PROCESSMAKER_MANAGER and PROCESSMAKER_ADMIN. User accounts assigned to the PROCESSMAKER_ADMIN role can create, modify or delete existing processes. User accounts assigned to the PROCESSMAKER_OPERATOR role are meant for production mode, with access limited to the HOME interface. Additional roles can be defined to give users a different set of permissions."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Department: Displays the department that the user belongs to."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Last Login: Displays the last time the user logged in."}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.code,{children:"#"}),"  Cases: Displays the number of cases that the user has participated in (i.e., was designated to work on)."]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsx)(s.p,{children:"Due Date: Displays the date when the user's account is scheduled to be deactivated.\nTo search for users, use the field in the upper right side of the Users window:"}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["\n",(0,t.jsxs)(s.p,{children:['Search: To find users, enter text found in the full name, username or emails of users. After entering text in the Search box, press Enter to filter the list of users. To remove the filter, delete the text and press Enter again. To do a wildcard search, use "',(0,t.jsxs)(s.em,{children:['" (an underscore) to represent any single character and "%" (a percent sign) to represent any number of characters including spaces and zero characters. For instance, "am%o" would find "Bamos Andrew", "',(0,t.jsx)(s.code,{children:"Amy@processmaker.com"}),'" and "Ram Powell". To search for the literal characters "']}),'" and "%", use "_" and "%". Note that the search is case insensitive.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"altering-the-user-list",children:"Altering the User List"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"By default, users are listed according to the order they are found in the wf_WORKSPACE.USERS table in the database; however, the table can be resorted by column by clicking on the column's header. To sort the column in ascending or descending order, click on the down arrow to the right of the header label and select Sort Ascending or Sort Descending from the dropdown menu."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(7658).A+"",width:"266",height:"166"})}),"\n",(0,t.jsx)(s.p,{children:"To change which columns are displayed in the User list, click on the down arrow in a column's header and select Columns from the dropdown menu. Then, mark or unmark the checkboxes next to the columns to be displayed in the list."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(6425).A+"",width:"401",height:"289"})}),"\n",(0,t.jsx)(s.h2,{id:"view-user-information",children:"View User Information"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"As of ProcessMaker 3.6.0, there is a new interface to view the user information. To view it, at the upper right side of the screen, click the username of the logged user. The user redirects to the user information section:"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(5626).A+"",width:"141",height:"51"}),"\n",(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(3624).A+"",width:"1922",height:"923"})]}),"\n",(0,t.jsx)(s.h2,{id:"create-new-users",children:"Create New Users"}),"\n",(0,t.jsx)(s.hr,{}),"\n",(0,t.jsx)(s.p,{children:"New users can be created inside the ProcessMaker interface or by importing them from an external authentication source such as LDAP or Active Directory."}),"\n",(0,t.jsx)(s.p,{children:"To create a new user inside the ProcessMaker interface, go to Admin > Users > Users and click the New button in the toolbar."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(1956).A+"",width:"528",height:"107"})}),"\n",(0,t.jsx)(s.p,{children:"Fill out the following form. All required fields are identified by an asterisk (*)."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"The Admin menu!",src:n(7683).A+"",width:"1919",height:"920"})}),"\n",(0,t.jsx)(s.p,{children:"Personal Information"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"First Name: Enter your first name."}),"\n",(0,t.jsx)(s.li,{children:"Last Name: Enter your last name."}),"\n",(0,t.jsx)(s.li,{children:"Address: Enter your address."}),"\n",(0,t.jsx)(s.li,{children:"Zip Code: Enter the zip code of your country."}),"\n",(0,t.jsx)(s.li,{children:"Country: Select a country. According to your country, select the State or Region and City."}),"\n",(0,t.jsx)(s.li,{children:"Phone: Enter your phone."}),"\n",(0,t.jsx)(s.li,{children:"Position: Enter your job position"}),"\n",(0,t.jsx)(s.li,{children:'Replaced by: Choose another user who will replace your account when your status changes to "Inactive" or to "On Vacation" from the dropdown menu. All the cases currently assigned to the user will be reassigned to the replacement user. For more information, see Using Replaced By below.'}),"\n",(0,t.jsx)(s.li,{children:"Calendar: Select the calendar, which determines the working hours for the user and calculates the due date for tasks."}),"\n",(0,t.jsx)(s.li,{children:"Time Zone: Select a time zone."}),"\n",(0,t.jsx)(s.li,{children:"Default Language: Select the default language for your workspace."}),"\n",(0,t.jsx)(s.li,{children:"Default Main Menu Option: Select the menu to be displayed after logging: Home, Designer, Dashboards, KPIs or Admin."}),"\n",(0,t.jsx)(s.li,{children:"Default Cases Menu Option: Select the menu displayed for the Home option: New case, Batch Routing, Inbox, Draft, My Cases, Unassigned, Paused, Advanced Search, Review, Reassign or Documents."}),"\n",(0,t.jsx)(s.li,{children:"Photo: Upload a profile photo no bigger than 32MB may be uploaded. The extensions .png, .jpg, .gif are supported. Click the user icon to browse the computer for a photo and upload it to the user's profile."}),"\n",(0,t.jsx)(s.li,{children:"Username: Enter the account name that will be provided when the user logs into the system. Usernames can contain letters, numbers and underscores. Usernames are not case sensitive when logging in."}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsx)(s.p,{children:'Usernames can start with a number, such as "01John".'})}),"\n",(0,t.jsx)(s.p,{children:"ProcessMaker validates that the username is not already being used by another user. If the username is assigned to another user, a red error message displays."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"E-mail: Enter your email address, which can be used to deliver e-mail notifications concerning cases."}),"\n",(0,t.jsx)(s.li,{children:'Status: If set to Active, you can access to ProcessMaker. If set to Inactive, you are denied login access and will not be assigned to work on any new cases, until the status is changed back to Active. If set to "Vacation", then your account will be inactive and will not be assigned to any new cases until the next time that you log into ProcessMaker. After logging in, you will again be available to be assigned to new cases. Note that only a user, such as the "admin" who has the PM_USERS permission in their role may change the status of a user.'}),"\n",(0,t.jsx)(s.li,{children:"Expiration date: Select the date when you will no longer be allowed to log in to ProcessMaker. The expiration date helps protect an organization's data by preventing old users from accessing ProcessMaker."}),"\n",(0,t.jsx)(s.li,{children:"Role: Select the role, which determines what functionality and interfaces you can access in ProcessMaker. ProcessMaker provides the default roles PROCESSMAKER_OPERATOR, PROCESSMAKER_MANAGER and PROCESSMAKER_ADMIN, but other roles may be created for more customized permissions. As of ProcessMaker 3.6.0, each time that you change the role, the Extended Attributes section changes accordingly. If you change a role and it does not have the extended attributes when saving, the following message displays:"}),"\n"]}),"\n",(0,t.jsx)(s.admonition,{type:"info",children:(0,t.jsx)(s.p,{children:"The role of John Doe has been changed and the extended attributes will be modified, if you proceed to save this attribute, all information for users stored in the attribute will be deleted for the removed role, please confirm."})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"New Password: Enter a new password. A string of at least 5 characters, which can include spaces and symbols. If entering any text into New Password, it is required to confirm the password in Confirm Password."}),"\n",(0,t.jsx)(s.li,{children:"Confirm Password: Confirm the new password. A string of at least 5 characters, which can include spaces and symbols. It validates if the password does not match the first password, or the passwords don't meet the set requirements."}),"\n",(0,t.jsx)(s.li,{children:"Extended Attributes: As of ProcessMaker 3.6.0, enter the information configured in the User Extended Attributes."}),"\n",(0,t.jsx)(s.li,{children:"User must change password at next logon: Click this checkbox to force change the password at next login. When entering credentials, the Change Password Form displays:"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1228:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/3.1UsersUsersList-6075868c22f24f8fea82b28c1b54b88f.png"},5275:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/3.1UsersUsersTab-be159cff82ef3372ee2a72ab32a21fb5.png"},7683:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/3.6.0Users_CreateUser-577e9348b975b3d9c8aec8fcf1d56354.png"},3624:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/3.6.0Users_ViewUser-117a655910d1f581bb319d1ebe24b7ca.png"},1956:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/CreateNewUserOption-8d3c09f4ebb7452810cd8d1d3d637334.png"},7658:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/MenuToSortUsersList-14e7bdbaf07c62133fa297580be6b6da.png"},6425:(e,s,n)=>{n.d(s,{A:()=>t});const t=n.p+"assets/images/SelectingColumnsToDisplayInUsersList-003f6bf306d68b58f363c531104f3ff2.png"},5626:(e,s,n)=>{n.d(s,{A:()=>t});const t="data:image/png;base64,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"},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(6540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);