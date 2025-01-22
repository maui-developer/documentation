"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[766],{48517:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>l,frontMatter:()=>a,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step5DefiningTheRoutingRule","title":"Step 5. Defining the Routing Rule","description":"Cambiar","source":"@site/i18n/es/docusaurus-plugin-content-docs/current/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step5DefiningTheRoutingRule.md","sourceDirName":"ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess","slug":"/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step5DefiningTheRoutingRule","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step5DefiningTheRoutingRule","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step5DefiningTheRoutingRule.md","tags":[],"version":"current","sidebarPosition":0,"frontMatter":{"sidebar_position":0,"title":"Step 5. Defining the Routing Rule","description":"Cambiar"},"sidebar":"tutorialSidebar","previous":{"title":"Step 4. Creating DynaForms","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step4CreatingDynaForms"},"next":{"title":"Step 6. Steps and Assignment Rules","permalink":"/es/docs/ProcessMaker-3.8/BasicFeatures/2HowToCreateYourFirstProcess/1DesignerExperienceCreatingANewProcess/Step6StepsAndAssignmentRules"}}');var n=t(74848),i=t(28453);const a={sidebar_position:0,title:"Step 5. Defining the Routing Rule",description:"Cambiar"},o="Step 5: Defining the Routing Rule",u={},A=[];function d(e){const s={h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"step-5-defining-the-routing-rule",children:"Step 5: Defining the Routing Rule"})}),"\n",(0,n.jsx)(s.p,{children:'To route the case to one task or another, the routing rules need to be defined in the exclusive gateway, which was added between the "Submit Request" and "Deliver Order" tasks. To do this, right click on the gateway and select Properties from the menu to define the routing rules for the gateway.'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(58354).A+"",width:"146",height:"207"})}),"\n",(0,n.jsx)(s.p,{children:'If the supervisor selects "Yes" in the "Order Approval" field, then the "requestApproved" variable will be set to 1, whereas it will be 0 if "No" is selected. Add conditions to check for these two values.'}),"\n",(0,n.jsx)(s.p,{children:'To route to the "Submit Request" task, set the condition to @@requestApproved==0 To route to the "Deliver Order" task, set the condition to @@requestApproved==1.'}),"\n",(0,n.jsx)(s.p,{children:'Now, the process will loop back to the "Submit Request" task if the supervisor rejects the purchase request, or go onto the "Deliver Order" task if the Supervisor approves it.'}),"\n",(0,n.jsx)(s.p,{children:'Remember when writing conditions that variables are accessed as @@variable and variable names are case sensitive. Also remember that == means "equals to", whereas = assigns a value to a variable. Do not use = if testing for equality. If comparing a string rather than a number, remember to enclose it in quotation marks, like this: @@someField == "someValue"'}),"\n",(0,n.jsx)(s.p,{children:"To learn how to construct more complex conditions, see Using Conditions."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt text",src:t(41834).A+"",width:"752",height:"412"})})]})}function l(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},41834:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/3.0FirstProcess_Gatewayconditions-7dd8235618b3f523538e2ee9dd1b4070.png"},58354:(e,s,t)=>{t.d(s,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJIAAADPCAYAAAAea4inAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3woXAQ4jleRFFgAAAAd0RVh0QXV0aG9yAKmuzEgAAAAMdEVYdERlc2NyaXB0aW9uABMJISMAAAAKdEVYdENvcHlyaWdodACsD8w6AAAADnRFWHRDcmVhdGlvbiB0aW1lADX3DwkAAAAJdEVYdFNvZnR3YXJlAF1w/zoAAAALdEVYdERpc2NsYWltZXIAt8C0jwAAAAh0RVh0V2FybmluZwDAG+aHAAAAB3RFWHRTb3VyY2UA9f+D6wAAAAh0RVh0Q29tbWVudAD2zJa/AAAABnRFWHRUaXRsZQCo7tInAAAgAElEQVR4nO2de1iU1dqH7+EsmoJHCFM8JUkkUgqlmEYhHoJxi0ZlgSUeC2iLZe4vo9yaOzVBC1Esoe0pk0LzlDvTRHdgBRRioKFosUHFgAKEgeH9/oDBARkYYBgGWvd1zSXOuw7PDD+etd53rWc9MkmSJNoBmUxGO3UtaAOM2tsAQedACEmgE0y0LSiTyRp8vz2HJ0O06a+K1kKCO39Bmn6RLWlLV+20xiZByxFDm0AnNMsjtRRJkpCQqKrxHjnXrrM77jBdupjzlHwyva2tADCSyZAhE16lA6IXIclqBGIkg98Li4j7/Bg79x7E3NwUE4x5btaTdL+rmz5MEbQRzRJSaz1F/s0Ctu7YR9yBY3hOeIRKpZKPdn9OVVUV/n4+LRKT8F6GgdZCau3k+PfCIjbHfMK2nfuY+eQkli6eQ4VSSaWyksiPdmNibIz/03Isu1ho3aa4OzMc9DK0FZeUsn335/x77wGmeownaN5z9OvbG4Cli+ZQUlzKpg93YmpmwnMzvTE3N9OHWQIdImvrJZI/i0v4+JMDfLjrM9zdXAhdNId77GxuF5AkLl35jZXvRfFj+gUWzXmK2b5PYmFh3pZmCXRMmwqpsOhPPtz1GTG743liwsO8Mv/5uiJSI/tqDqve28p3P54jeN5z+E2fTBchpg5Dmz1HKi4p5d+fHiDyo924PjiS4HnPaRQRgP0AO14PCcRx+FDWR8YQf/g45YqKtjJPoGPaREilpbeIO/gftsTuZZzrKJa9PIeB/W2brDd4YH9WLJnPvUMGsmbjNg4eO0lFRWVbmCjQMTof2opLbxF/6CvCt+5gpONwXg+ay9DBA7RvQJL4+cIl3l4XyeVfc1j68otMe+JRzM3EBNyQMQ4LCwtT/WfSpEmUlZVhZ2eHhYUFRkbNc1glpaV88vlR1r7/EaOc7mN5SCBDBw1AoajAyNhIu2c+Mhm9elrhNGI4yWkZHDx2Etu+fRhifw/GxsbN/XwCfSGp0a1bN8na2lry8/OTPvvsMyk3N1eqqKiQtKGsvFz6eO8ByeHhJ6Xp/i9L5zIuSkqlUjpxOlGK2PKxlHX5SpNtVFVVST+eOy9t3xknXbt+U0o997PkNStQGuP5lHT4q1OSUqnUyhaB/qkjJFtbW8nIyEiSyWRSz549paeeekravXu3dPnyZamyslJjI+UKhbTvwJfS6CeekmYEBEupaRmSJElSQUGhNP/vK6Tug0ZLwa//U7r66/8aNSb9fKb01AtBUp/hY6WPdsZJkiRJZ5N/kibNmieNm/acdPR4glRZKcRkiNQZ2t59911KSkqQJIlbt26Rnp7OV199xblz56iqqsLMzIxu3bphampa69HKyxV8fug4G7Z8zOCB9/B/r8xn5P3Da69XVlaS8ctlTpxKpKikmPsdhmLVo/sdnjH95wusidjKoeP/5SHn+/F98gnusbPFzrYfDsMG813KOf5z6lvutunLoAH9MTISSyMGhbqq+vbtK8lkMgm449W9e3fp8ccflw4dOlRbvqysXNr12SHpgUenS3/zf7nWE6lTXl4uffL5QWn46ElS1373S4uXhkm//lbXM53PuCDNnr9E6mbjJD3q/bx05mzyHcPYdynnJK+n5kljpzwrfXXqW6mqqkqHf0+C1kJDotH08vX1lb788ktJkiRJUVEh7T/6tTTKw1eaNCtQOpv8k8ZOSktvSTs+iZeGjnpMsho0Wlr6xhopL++6JEmSlHkxSwpY/JrU7e4HpAcnTJe+PvWtxuHrVOL3kvuTz0mPevtLCYnJuv82BC2mSY9kbW0tTZ8+Xdq5c6eUnZ0tKZVKSaFQSMdOnpEe9XlemvbsIum/Z1MlpbJxD1FSUirt+eygdJ/bFOmekY9JK1aHSz+k/CQtXhom9Rz6sOT2xCzp64RvJYVC8+S+evJ+VprgEyA94fuilJD4g5iAGwh1niPZ2tpy7do1JEmiR48ePP7448jlcsaOHYu9vX3t7Xvcwf/w/oe76Nu7J68ufgGXkSO0urUvvVXG/sNfsTo8mpJbpdzdtxc5eb9jP/Bu3n51MQ+PHoWJSePryBKQ8N/veXfThxiZGBO6aA6PjHbGxEQ8GmhP6vzWiouLsbS0ZOLEiTz99NO4u7tz99133/H85uwPP3Ht+k08H32YBxzv1XpPkGUXC3wmP0ZhUSGrwj/kXGY2fXpbseylF3hkjItWz4lkwPhHHiIr+1fWRcaw74svcbpvKNZWPbT/1AKdU0dIDz30ED4+Psjlcvr376/RO8ye6U1B0R8cPXGGgQPs8H3SEzO1O7nGKCz6g19zqr2esbERSmUVmb9cZsyDD2BtZaVVGxcvXeF0UjK9e1kz/pHRdOnSRat6grajxUskF7KusOq9KH76+QKvLPDnKflkzM0aF1NObh4bt35MzCdfcO9ge5wdh5KQlEr+zZsEB85mzrMz6WnduGf5+cIlNkR9zMVL2YQunoPnxHGYimGtXZHJZHWXSJpDr55WON43jLTzF9h/5Gv69LLmvmGDNS6r/K9GRNti4uh/z90sDwlk7mxfjGWQkJTCyW+SMDM3wWHYICzMzasDBlSvqiqkKomfzl9g5frNnMv4hZB5s/HycMfE2LhuWfFql1erF23PZVzkzX99wP/ybvCPV+Yx9YnxVE+Zbs+b8q5dZ+OWj9ny0R56Wlvx1j+C+ds0T0xNTfj990KiP/6E8Pe3g7GMkEVzmPPMdO7qprZ/W5K4+lsuqyK28sOP5/n7An+mT/Wgi4X223IFukc1N5bJZLpZ/U9Jy2BV+Bby8wtZ+tIcJj/ujlFNJ9dv3CDyw51ExuyjexcL/u/VRcz08eLKr7mt7VZgINj0sdbdNpLU9Eze2bCFKzl5LA+ex5OTHqWsrIyNW//NushY+vTuyYrQBfh4PYaZmRmZv2RjZ9NbF10L2pGcvHy6dTHV3cY2Z8fhLA+ZT78+PVn1XhRHj5+mi4UF1tZWDBrYn2VBc/GZ7IG5uTlVVVW66lZgABQVFel2Y5skSXyfeo4V//qA8vJyVoQu5CHn+7mRf5O+vXthadmFqqoqKisrycr+TXikTkBOXj6/38jV7VZbmUyGywMjCFu6CDNzM95au5mzKWnYD+xP166WALWzfEHnoaioSPd7to2NjRk96n7Cli7G2EjGinc28c2Z7+qIRwxtnYvi4uK22fxvZGSEq4sTK5YuwsjIiLfXR5H4/Y91njsIOg9lZWVtF44kk8kYO8aFN5YspEpZxeqIaJKS09qqO0E7olAo2vZ8JGNjIzzGu7IseC5/Fpfw5ppNJP2QKjxSJ0OpVLb9QVtGRkZMmjiW5SHz+KO4hBX/+oDvU9PbuluBHpEkST8ntslkMjzc3arF9GcJ6yI/0qJWESkH1jP/+UDcvQPweP511h2/SnljVRRZ7I0+zU0d2d0sCk6wxDsA99pXIPMjT3BFUXM9Mxb3sBOts0398+miPQ1s2rSJ0tLSZtXR22GkxsZGeE58BEWFgvcitzdRupT06JVsZCarty3B1gwoziJ+3Ure6bqOMDcNOwRKrpKUAx5aWdQGuPgTHzaRXgCUcvHIehashh1hE+k13J+EsFa2r/75dNGeBiIjI+nevTt+fn6Ym2t3/kKzPFL9Fd/m1jM1McHrsXEEz3uu8QrXTrMxcyJhga7VIgLoNgR58EKcTSuAUi4eWInPDNVffhK55HM4IpazybHIa/5Sc09tZv7TAbjPWMSSA1mUU0rC2pUcLgAoJWFtAO6RydVe7tIuZkYmU95g2xWkRAaz45LKwCx2LIyl8QHakmGTF/Iyh0j4jdseJDMW9/BYNi4MYHJ0GuUN2gmQT0J4KB7egcyJzaC8/uer9UilXDneQP3MWNzDd7F3eSDu3oH4rD2Btqububm5bNiwgaNHj6JUKpssr7ehTR0zU1MmjB3TaJny37L43c2BgfUvWLsgf7A3XIpnebIrUXExJByIYLZiG/szezMl2J8xKq9waRfLk5xYvTuGhLh1vKCIZVOaKSNc4GxmKXCV9EuW2CRncBW4kpmMo4sD5g22bcooDxeOJGdV23EpiSMurjg2+Wl7M9Aun6sl9d5OKMU1IoYjgU6YN2hnBWQeYrXZTOIPvI1PWixHrtX7fKq2LsUTmtCb0OgYEuLewCN5DesTa4alhCy6BUeTcOBt5pTsYn9mkwbXkp2dzdq1azl48KBW5fVy0FZ9LLtYcLPgD63L3zy+EnlEzS/RxZ/4sGeIevoEx2M3k5KcQerlCiZPrlfncha/JBxDnrCt9j2zGVmEerhw5UAG5YPySXeS8+z1JK4U5KNI6sGYYEuw1tD28HFMjk7iou8QSE7CdfwzLf8CnBwYata4nXP6X2XE8KncRW/k696pvlBwZ1MFl7MY4L6QYd0AbJkyw5V3Eq+yfDzgNA7XftXvD7Or4GozzTx37hw7duzAx8enybJ6PUNSW8z7D6Hn7ixyfYdgC/TyeIMED6ontBGgSNvMC7GWLPH3JGjGXPJ2B5LQQDvOwevY5FF/Pc8Uj7TTpLqWwvCZOPaN50haBr8XuzLfGsrTNjO7wbaH4Oq2jaRLWXDcBQ9fbT5JLhczhzDUF7iuuVRDdt48rk37bYujoyPPPKPdH4zWQ5umnXFtQr9xBA0/xvLoJHJVdz2KfNITk7kKlFzPx2b8RB53GkLPkmSOJwG15SpQAL0GDSFv3yFSigGKSIoOZnViKTCEUS7JfLQ7A8f+vRkwyImUuHiueDhhCxQ30vYwt3Gkf7xLy2GtiItHtrGlnyfu1ppLabKzV/8BnM/M4k9KSYoMZKNqWKr5fCqsBw3hasIJLhYD5HI4LonJTs04/UUDAwcOJDQ0FG9vb63Kt8vQ1jSWOAa+zfLjsawO3kZqTgV07cG4x2ayOnQcQ81s8Vi+EvdtMMLLnwUzhvDR9XxwGoJryUpmLYe9q+Ws841ldWAA5xWWjPEPIsyteuF4qJsDv3xRymw7MC8ZQrfLabgOrz6/qZf7zIbbpjf0d8G1IB7bpx0aNjs5Frl3bPXPppaM8JhJVLArdzX2UQdrsnMqy4+sQe69jQGPzWXdcAC1z+evVt9dvf4yVrtZQjPmQ/WxsbEhJCSEKVOmaH0CTJufIQm3HxFUVVWhVCopLy/n1/9d73jbSApO8PrSXF7Y9gzD2tuWNmTjxo3MnTsXS0vLJsvm5OVz8viXIoWE1mTG4jH3ELYLp3ZqEQEEBQVpJSJ1DHRoM0CG+3M8rr2NMFyERxLoBCEkgU4QQhLoBCEkgU4QQhLoBA1CSmSNrDoBX+3L3o2AqFTK9GqeoKPQiEd6h2/Vl0NSo3CODyAqVX/GCToO2g9tVs7I/Ww4mZEHeXuQy/eQp7qm/v+8Pcjly1jjZ4PMfg2JQHZ8AA42Rtz92Ct8ma3rjyAwBLR/IFl4kj1RhUyI0pyYppb9qVj9nIfkAGTHMCnMhpjsKu79ej4jor/h3Aq3llssMEga8Uiv87DaHMnGbQ15ITEscNai1ZFeuNWsaxZmJJLq54ebBVh5bebXVY8iDqPpfDTikd7hW2kZLfId9jao/FZZYR5u9lp4MUGHplW3/7V3cGVlFGooY2FlQ2J2noargs5Cy4RkYYXN/j2czAYo5OSeKL7RUNTKwQ3nPXtILIOyxNd5yHcv11porMBwaZmQrLxYdsSeGDcZMvsAMhwC0Lir1z6AqLA8AuyNGPxCHm+sm0W/llorMFjExjZBqxAb2wQ6RQhJoBMMeIdkESkHthG1L4PzhRWYWdky2X8hL3sMQGMQsSKLvbG5eASOux1AqBfyORwWyjvJd14ZE7yO9XeERBk2mzZt4sUXX2zWdlsDFVJHi/3vzZSwGKZAbezdcvVo2A5Gm8f+641OEfuvQkPdzFjco4/x1apAtX6qafgsAP3R3Nh/MFAhdZ7Yf4BG6h5NQjE3moQD63jBNJaNp4pA01kAeqZDxP43lw4f+99g3STwkjOlH0APXMe7Enoql5sVGux20hCU2Ya0Wey/vug8sf8qGqibWW1LQzRst/5pVex/argzsoB4jWtneqFTxP7XpcG6SSdIKADIJ+F4Mh5Oto3YrV+aG/tfV0hlJ9mTOIHg7Cjis9vAOq2pif0fnMzq4Oqj/9z9V7LjN1dWh05kqPtMPE6txN07kKC4CjxmDOHi9XywHoJryafMWn6M3MFy1vmWEhUYgPuM19nbbyEvq8f+XxiAo1219+t2uRQP9dj/htqGmtj/q7iOb8Ew01DdrqUkrA3E3ft19vady8tuPWrOAmjYbn3R6tj/spPLCMgLYU1ZAPLCNaSG1Gw+ytuDfEEhfhPiWfbKlzApmKiocLzstbmWiqv5dpYnhnD60qs4JW9mzrNvs/KLbzveEklrYv/r182MxX33gLqHZhkIrYz9L+RoTB5+XjbYewVgv2YPJ9V3+u8PI94mimxJIjEEli2IIVura6lYheVRlb0Mt8KjLPH9hmmfdcBTbVsT+9/Bzg1oSez/bSFlxxNlFYCXFWDjRYDXv9hzUm2m1C+EED97AGy8QggpO0pqnhbX1HdLJu5n26wgfAd2wD2Sw/05HreOoAdbkIS5obrD/UkwQG/UUmrv2lLjw/ky4ke6RKhfPskaLzlWAG722Ne+b4GFVdntjW2NXVPfLVl0jSdH3vF0SNAJqPFIiRzdE0CKevjRrRO8dlRt0p2YfTtqhDLKCi1u771u7JoaFj368cWPV9rgYwjaGyOAspPxJC6QU2dfv8UE/JblER5fE8h2LZw1e7IByDsaTpRDABNUrqaxa2pYufkwd+9G9l0RYZadDSPVJDtAbn/HRWe/Zbcn3T4BuCUGYCOzYUKMA1FrvKqHPJq4po6VF+v3PcrBvzX3KYzA0NFuh2TeHuQLICrejzscTWPXahA7JDsvYoekQKeIPduCViE8kkCnCCEJdIIQkkAnCCEJdIIQkkAnCCEJdIIQkkAnCCEJdIIQkkAnGKaQ7kh9Xv1acjz/jqLp0QHVSfFUyYI1pWwvOMGS5qQ3b2469DZMn94RMMhwJKBe6nMtUKUvLzjRvinb/6KYjPNqVoBWi1BfzpMkCalKyYcfvNfC1kq5eGA9obFZKAZ5Mrl/zduZsbjv7kkQcZxNBnkYWgrxdnu/V5gywmsuYYtcsQVQZPHpql3sTKLO+7mnNhO2OakmY+MSVnsP0XywxV+A9e9HY3L66L4270jTom2jqKf1rGHm2hjmK2IJSnblo7g3sC1OY2PIMaiNsu3GY8H+JDbnEIfaEO03sKWUhPBg9me6sgDgXC42kZEk/KOClOhQNp5y4J3+h1ie5MS63QvpRSnp+9awKe0NQs2a6qjzsuSlwI43tF3cl4bHk3OrPUY3JyZ7WXKkNf0MbiT822Uc7v1NAVNGjXclqLGQ6r/40eGGKyQ9oTlEWzMNhlRnJrWZjR0Bw7xra4QBTq6kfHGi+giY4jSOHG8gnLleSvPGaCxEm7TTJF0DKCLpVBLjhhtOSLWhYbgeqYE5UvVwN5Mwl/UsmLGrerI9vF49a/WU7Z7VQ6CmNl38iV+uIT17f8DLFbNtgbgngfPzQYSN7wFoSK/eivTonQGxQ1LQKsQOSYFOEUIS6AQhJIFOEEIS6AQhJIFO0LmQUsPdsAk5WS+Jch575DYsPNquBwoK2hCdC8l5QRQhiSGEJ96WUuHRMJZZRPGmV4MnAgg6Abof2iycCQn3Yk9IFKkAZYmsCSskPFx++5yknz7UebeC9qVN5kgWbmFETYhhWUwqieEhZISsQa5SUeGXvPZ0U6tZgo5GGy2RWOAWFo6Dgxdy53C+fc2+9kreNx9z8MVFhLZNx4J2ou3u2iwm4LfgGm5+E9SOBQTKy7kR9nibdStoH/R/+29uztjINL13K2hb9C4kG9dZ9HvnTX13K2hj9L+NxMaH8N05/Kn3jgVtidhGImgVYhuJQKcIIQl0ghCSQCcIIQl0gmFu/i84wRL/WM7WvmHKCK9nWD53IgMbC0RsKnVVu6Vz7/wYppCgXoBkKRePrGfBatjRmoxC7ZbOvfPTQYY2S4ZNXsjLHCLht+p3mkppfud1bdK5C1pKBxESQG8G2uVztYSmU5o3eL2HFunc9Z8WvTOw/v1oAx7aGkFjKvaa+PsCTdf7a9FGO6RF7+gY9iESd5DLxcwhDPUFfms6/r7B6wW5df5rKGnROwMdZGgr4uKRbWzp54m7dWOp2Kuxbux6k+ncBS3BcD2Sepy+qSUjPGYSFezKXVCT0ryR+HtN11E/F0BTGUFLEIu2glYhFm0FOkUISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaAThJAEOkEISaATDHPPdktDtiklPXYFQXH5OIdGsH58D+37VIV7Lx/A8YbCuu+wqZqZa2MIoolQ8Q7Gpk2bePHFF7G01H4Pu2EKCVoYsn2V43EOrDswl1Et7bexsG5NKeQ7WdK/yMhIunfvjp+fH+bm2uUP7yBDmzYh2/kcDlvDp5wmyDuWdEq5eGAlPjMCcPcOZH5kUnX60sxY3GtCtgHSowPYWCuEYr6uF9bdPEq5cry+XaUkrF3J4YLq6wlrA3CPTK4OD7+0i5mqnw2I3NxcNmzYwNGjR1EqlVrV6SBCgqZDtnswJWwZM5lI1AF/HGvTsMeQcCCC2Ypt7G/Sc1Snex+jyfMkxyL3DsBd9YrOqHv9UjyhCb0JjY4hIe4NPJLXsD4RRrjA2cxS4CrplyyxSc7gKnAlMxlHFwe0+5vXL9nZ2axdu5aDBw9qVd5wh7ZG0BxurVaosTTsLUWTwGoouJzFAPeFDOsGYMuUGa68k3iV5ZNduHIgg/JB+aQ7yXn2ehJXCvJRJPVgTLDhxtKdO3eOHTt24OPj02TZDiQkLUK2ue0hNKZhNzWtzYmiN/o74JF2mlTXUhg+E8e+8RxJy+D3YlfmW+vbGO1xdHTkmWee0apsBxnamheyDY2kYbe2ZcBvWVxVAMVpHE82vbO7ZqR7V8d60BCuJpzgYjFALofjkpjsNAAYwiiXZD7anYFj/94MGORESlw8Vzyc6mYBNyAGDhxIaGgo3t7eWpU3XI/UkpBtNXq5a0jD7uTKC17HCPUNgPunsmTyAM6rV2ws3XtTDJazzl3drmWsrrFrqJsDv3xRymw7MC8ZQrfLabgON0wZ2djYEBISwpQpUzA2Nm6yfF6FCNkWNMDGjRuZO3euVs+RcvLycX95kwF7JEG7ERQU1KzyE8//1FHmSAJDJi7nphCSoPV88MF8ISRB69my9mshJEHrcXvhMSEkQesZ2avDPJAUGDpCSIJWI0mSEJKg5UiSVPuwWQhJ0CJUAlKJqV2XSIJfWtDWXQvaCNXvdOMHWwDhkQQtoCHfI9baBK2isrJSnLMtaD1isi3QKUJIglYhk8mQyWRCSILWIZPJAOGRBC1AJR7Vz8IjCVqMSkyqfw3z9n/qW8TOcaSr+nsllzm2YSlbU/Vkg2MAq+fZcSZ4FYcWR7BvTCHb/d/kkJ667wioi8kwhQRQkq72i7NH/tZbzJ4XwplF4aTro3/7QdhZ1fz8QTC+H+ij046HamgzXCHVIZv4s9lMn2WN/eII3nKGnK522N04wevBZxj71jw8HftiBpRcPsaGpVtJXRzBPsdC0k0dcbQGxfUUdr65ikM37JH/41VmjWqgfG27F7lkNYyuXWFO7Ftw1oo5YwrZ7r8d04bqOs9j7SueDOoKKK6TsvNNVh260b5fmZ7pGHOkPo48O8aeriUFZANYm5Lzri8L/7mXwnnPMs2+hGMbFuIbuoPsvp4sfnVsdb2+9nAoFN/Q9znLKOTzJtAnYDGz7HPYHuqL78INnGEs80Icq8vXtvser+5Np6SOV4RuGuo+MX0sdtcPstB3IRtSTRnlOUvvX1F7Y7geqasjc/btY07NfxUllzm2IZz0sRFQcoP0VLjBDaba9aUkey8xZ24A8byf4snmQc5wAbiewvvx2UA24enT2XevI2PM+mJmPYj56/YxX9WX2YTq8mrtNsSAQQ3XTU25DtOmERE7huwL37Flw9a2+lYMFsMVUj1vUMvYZrRRUdGgJErSt+P/Zr2WF0doaVYDdYHg76YyXT4W53s9mb96GHbPLCWmGaZ2dDrG0NYIZ3Ou09V+AgFj+4C9nJdG9aUgp+bWzs6RV5+wB/sneNWxDwXX06vLD/MkZGwfsJ9ASOQuol/VTp1XNdSd+lYsEQF2pG9dzptbz1JgZlb3jvMvgOF6JC25sXUnB+3m4fnKZqZRMwF+9wwsngUKU+xnr2NfVyjJOc2OrSe5caOwtvy+mvJbt5+BWfXmNYcuk/PstJrJdvVbxWp9qdc9gxVjVs/hlc2eQAk5Z3ewV79fQ7vTeTe2dYBnP3/8eYtLl68BMHhQP7rf1aWdLWo+Ee9HiW0k7c2ly9e4ce0iN65drBVUR6XDD20a6QAPEQsKSxv8uSMiPJJAJwghCXSCEJIBceLUeVJ/yuaPP2+1tynNpvPOkTogleU5fPddKlOmzaSgsBRrK8sOczcnPJKBMXq0MwWFpVSW53D44Kf8kHKZ1J+yKS+vaG/TNLL+/Wj9CEm11UD9JWiaBx98AID4z3fyc2aOwYop9OV5wiPpk9SfsrWeB1VVVVFVVQXAKOf7+fST7fycmaMPM5tNu+1H+qt6pILCUq5mJwMw0nlcnWuV5bdForj1a+0qAFQHIY4c6Wiwz5qMjY3bd7Id8X5Ue3avd+bP+zsAd9v248a1i5iY291RRuWJlEolSqWS32/8jFKppLKyEjDM78zMzEy/QlKfI9n0saa4uJiioqLaV3FxMWVlZSgUCpRKZYMx5h2ZRx52wnPSDI59Gcfdtv14belLda7XF1FlZWXtvyohffP1sfYw/Q5kMhnGxsaYmZlhYWHRPh7JyMgIIyMjTExMahHK3c4AAAHQSURBVA1RfVGmpqZUVFRQVVXV6YQ08oEeFBYW4+3zLN+f/Qq5z+0sO02JSPX99OjRjGSGbYhMJsPIyAhTU1PMzc31LySVRzI2NsbU1BQLC4vauYCJiUmtN+qMQgKYLvfi4OETfPddKqNHOwPaiSg5JY177rGlZ8+e7fwJqlEJSeWV2kVIKm+kEhJUT9jMzc2pqKioHdY6o5AA5vjPYsnSFZw6eUArESmVSj6PP8yj492wtjaMdEr1HYJe9iOpI0lS7RdXWVmJQqGgoqKCioqK2i9N5Y06q5AqKiqYPO059u6J5kGXB5oUUWVlJR6eT7EpYiX3OQxrb/MBtQjbGq/Ubrf/Kq+krmrVX2dnFpGKv4fM582wd9n/eWyTIkr9MR1Lyy64uT7U3mbXQV1M7TK0QfWEW90QladSP5uwM/PcbF8iNm3j7NkURo4coVFESqWSxKQUpk55vFlZr/VBu0faqhugLiTo/AJSYW5uzuuvBXHoyFfcf/9wjSKqnh8d4ZPdW7TOeK1vZDKZ/udI9anf/V9FSAAKhYL7R07g29NfaBRRVVUVT8rnkHUhqb3N1YhBhGzXXy75Ky2fWFhYMHSIPbb9nRst97iHO0ZGhr0s+v/v/G7eLrENHAAAAABJRU5ErkJggg=="},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);