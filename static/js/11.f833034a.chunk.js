(this["webpackJsonpmy-resume"]=this["webpackJsonpmy-resume"]||[]).push([[11],{188:function(e,t,a){e.exports={veryDarkDesaturatedBlue:"#353352",white:"#fff",moderateRed:"#c4475f",red:"red",softOrange:"#f9ae56",very_dark_desaturated_blue:"#302f4e"}},538:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return Q}));var n=a(199),o=a(28),l=a(45),r=a(0),i=a.n(r),c=a(4),s=a(522),m=a(532),u=a(530),d=a(483),p=a(238),b=a(534),h=a(42),g=a(198),f=a(523),E=a(524),v=a(525),O=a(526),j=a(127),x=a(188),y=a.n(x),k=Object(s.a)((function(e){return{root:Object(g.a)({maxWidth:345,borderRadius:"16px",transition:"0.5s",border:"2px solid #fff","&:hover":{borderRadius:0,border:"2px solid "+y.a.softOrange}},e.breakpoints.down("sm"),{margin:"0 auto"}),MuiCardActionArea:{position:"relative",height:200},MuiCardMedia:{position:"absolute",height:"100%",width:"100%",left:0,top:0}}})),C=function(e){var t=e.image,a=e.title,n=e.onOpen,o=k();return i.a.createElement("div",{className:"Post"},i.a.createElement(f.a,{className:o.root},i.a.createElement(E.a,{onClick:n,className:o.MuiCardActionArea},i.a.createElement(v.a,{alt:a,image:t,className:o.MuiCardMedia,title:a}),i.a.createElement(O.a,null,i.a.createElement(j.a,{gutterBottom:!0,variant:"h6",component:"h3"},a)))))},M=a(541),W=a(149),N=a(150),w=a(493),A=a.n(w),B=a(492),P=a.n(B),S=a(491),R=a.n(S),T=a(527),z=a(528),D=a(148),_=a(540),I=a(529),J=function(e){var t=e.open,a=e.onClose,o=e.onClick,r=e.classes,c=e.fullWidth,s=e.maxWidth,m=e.children,u=e.disabledTitle,d=e.titleProps,p=e.disabledAction,b=e.actionProps,h=e.title,g=Object(l.a)(e,["open","onClose","onClick","classes","fullWidth","maxWidth","children","disabledTitle","titleProps","disabledAction","actionProps","title"]),f=Object(n.a)({title:{},action:{},actionClose:{},actionAccept:{},content:{}},r),E=!u&&i.a.createElement(T.a,{id:"max-width-dialog-title",classes:f.title},h),v=!p&&i.a.createElement(z.a,{classes:f.action},i.a.createElement(D.a,{onClick:a,classes:f.actionClose},"Close"),i.a.createElement(D.a,{onClick:o,color:"primary",classes:f.actionAccept},"Accept")),O=i.a.createRef();return i.a.createElement(_.a,Object.assign({ref:O,fullWidth:c,maxWidth:s,open:t,onClose:a},g),d||E,i.a.createElement(I.a,{classes:f.content},i.a.createElement(i.a.Fragment,null,m)),b||v)};J.defaultProps={open:!1,disabledAction:!1,disabledTitle:!1,fullWidth:!1,title:"This is title",maxWidth:"sm"};var F=J,H=Object(s.a)((function(){return{root:{backgroundColor:y.a.veryDarkDesaturatedBlue,color:y.a.white,"&.MuiPaper-elevation1":{boxShadow:"none"}},MuiDialogSizes:{"& .MuiPaper-root":{overflow:"revert"}},MuiIconButton:{position:"absolute",right:"-45px",top:0,padding:5},MuiChip:{height:26,margin:6,fontSize:"15px",fontWeight:600,backgroundColor:y.a.moderateRed,color:y.a.white},MuiTypography:{display:"flex",alignItems:"center"}}})),q=function(e){var t=e.open,a=e.onClose,n=e.image,o=e.source,l=e.title,r=e.body,c=e.technical,s=e.due_date,m=e.positions,u=H(),d=m&&m.map((function(e){return i.a.createElement(M.a,{key:e,label:e,className:u.MuiChip})})),p=o?i.a.createElement("div",{className:"source"},"Source:"," ",i.a.createElement(W.a,{href:o.link,target:"_blank",color:"inherit",classes:{root:"text--capitalize color--moderateRed"},rel:"noopener"},o.name)):null,b=i.a.createElement(N.a,{onClick:a,className:u.MuiIconButton},i.a.createElement(R.a,{fontSize:"large",htmlColor:y.a.white}));return i.a.createElement("div",{className:"Post"},i.a.createElement(F,{open:t,onClose:a,classes:{content:{root:"bg--veryDarkDesaturatedBlue"}},actionProps:b,className:u.MuiDialogSizes,fullWidth:!0,disabledTitle:!0,disabledAction:!0},i.a.createElement(f.a,{className:u.root},i.a.createElement(v.a,{component:"img",alt:l,height:"140",image:n,title:l}),i.a.createElement(O.a,{className:"padding--left--0 padding--right--0 padding--bottom--8"},i.a.createElement(j.a,{gutterBottom:!0,variant:"h5",component:"h2",classes:{h5:"text--bold"}},l),i.a.createElement(j.a,{gutterBottom:!0,align:"justify",variant:"body1",component:"p"},r),i.a.createElement(j.a,{gutterBottom:!0,variant:"body2",component:"p",className:u.MuiTypography},i.a.createElement(P.a,{fontSize:"small",classes:{root:"margin--right--6"}})," ",c),i.a.createElement(j.a,{gutterBottom:!0,variant:"body2",component:"p",className:u.MuiTypography},i.a.createElement(A.a,{fontSize:"small",classes:{root:"margin--right--6"}})," ",s),i.a.createElement("div",{className:"position"},i.a.createElement(j.a,{variant:"body2",component:"span"},"Position:"),d),p))))},G=a(43);function K(e){var t=e.children,a=e.value,n=e.index,o=Object(l.a)(e,["children","value","index"]);return i.a.createElement("div",Object.assign({role:"tabpanel",hidden:a!==n,id:"scrollable-auto-tabpanel-".concat(n),"aria-labelledby":"scrollable-auto-tab-".concat(n)},o),a===n&&i.a.createElement(m.a,{p:1},i.a.createElement("div",null,t)))}var L=Object(s.a)((function(){return{root:{minHeight:"100vh",height:"auto"},MuiTab:{fontSize:18}}}));function Q(){var e=L(),t=Object(r.useState)({open:!1,value:0}),a=Object(o.a)(t,2),l=a[0],s=a[1],m=Object(r.useState)(),g=Object(o.a)(m,2),f=g[0],E=g[1],v=function(e){return function(){s(Object(n.a)(Object(n.a)(Object(n.a)({},l),e),{},{open:!0}))}};Object(r.useEffect)((function(){var e=!0;return e&&G.a.get("/api/projects").then((function(e){E(e.data.data)})),function(){e=!1}}),[]);var O=[],j=[];f&&f.map((function(e){return"project"===e.type&&O.push(e),"example"===e.type&&j.push(e),null}));var x=["Everything","Recent Works","Examples"].map((function(t){return i.a.createElement(u.a,Object.assign({key:t,label:t,classes:{wrapper:Object(c.a)(e.MuiTab,"color--white text--bold text--capitalize")}},{id:"scrollable-auto-tab-".concat(a=0),"aria-controls":"scrollable-auto-tabpanel-".concat(a)}));var a})),y=f&&f.map((function(e){return i.a.createElement(d.a,{key:e.id,item:!0,xs:12,sm:6,md:4},i.a.createElement(C,Object.assign({onOpen:v(e)},e)))})),k=O.length>0&&O.map((function(e){return i.a.createElement(d.a,{key:e.id,item:!0,xs:12,sm:6,md:4},i.a.createElement(C,Object.assign({onOpen:v(e)},e)))})),M=j.length>0&&j.map((function(e){return i.a.createElement(d.a,{key:e.id,item:!0,xs:12,sm:6,md:4},i.a.createElement(C,Object.assign({onOpen:v(e)},e)))}));return i.a.createElement("div",{id:"Recent-Works",className:Object(c.a)("Recent-Works page-section",e.root)},i.a.createElement(p.a,{maxWidth:"md"},i.a.createElement(h.d,{height:30}),i.a.createElement(h.e,null,"Recent Works"),i.a.createElement(h.d,{height:30}),i.a.createElement(b.a,{value:l.value,onChange:function(e,t){s(Object(n.a)(Object(n.a)({},l),{},{value:t}))},variant:"scrollable",scrollButtons:"auto",classes:{indicator:"bg--softOrange"}},x),i.a.createElement(K,{value:l.value,index:0},i.a.createElement(d.a,{container:!0,spacing:3},y)),i.a.createElement(K,{value:l.value,index:1},i.a.createElement(d.a,{container:!0,spacing:3},k)),i.a.createElement(K,{value:l.value,index:2},i.a.createElement(d.a,{container:!0,spacing:3},M))),i.a.createElement(q,Object.assign({onClose:function(){s(Object(n.a)(Object(n.a)({},l),{},{open:!1}))}},l)))}}}]);
//# sourceMappingURL=11.f833034a.chunk.js.map