(this["webpackJsonpadinno-react"]=this["webpackJsonpadinno-react"]||[]).push([[0],{236:function(e,t,a){e.exports=a(473)},473:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),l=(a(241),a(4)),c=a(224),i=a(73),s=(a(243),a(218)),u=(a(475),a(217)),m=(a(247),a(216)),d=(a(249),a(228)),p=(a(60),a(22)),f=(a(61),a(15)),E=(a(254),a(231)),g=(a(474),a(74)),h=(a(75),a(32)),w=(a(83),a(27)),y=(a(42),a(11)),b=(a(264),a(162)),v=a(233),x=a(17),k=a.n(x),j=(a(76),a(14)),C=a(25),O=a(30),I=a(480),S=a(481),T=a(482),F=a(28),A=a.n(F),P=(a(94),a(52)),q=(a(105),a(34)),W=(a(84),a(18)),z=a(477),R=a(43),Y=a.n(R),D=r.a.createContext(null);var B=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(D),c=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/tasks/add/",Y.a.stringify({name:t.name,manager:t.manager,members:t.members,progress:t.progress})).then((function(e){1===e.data.status?(j.a.success({message:"\u6dfb\u52a0\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u6dfb\u52a0\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{placement:"bottom",title:"\u6dfb\u52a0\u9879\u76ee",arrowPointAtCenter:!0},r.a.createElement("div",{style:{float:"left",marginLeft:15,marginBottom:15}},r.a.createElement(y.a,{disabled:a,onClick:function(){return o(!0)},type:"primary",icon:r.a.createElement(z.a,null)}))),r.a.createElement(P.a,{visible:a,footer:null,onCancel:function(){return o(!1)}},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:24,sm:24,md:24,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:c},r.a.createElement(W.a.Item,{name:"name",rules:[{required:!0,message:"\u9879\u76ee\u540d\u79f0\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{placeholder:"\u9879\u76ee\u540d\u79f0",allowClear:!0})),r.a.createElement(W.a.Item,{name:"manager",rules:[{required:!0,message:"\u9879\u76ee\u8d1f\u8d23\u4eba\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(q.a,{placeholder:"\u9879\u76ee\u8d1f\u8d23\u4eba",allowClear:!0},l.users.map((function(e){return r.a.createElement(q.a.Option,{key:e[0]},e[1])})))),r.a.createElement(W.a.Item,{name:"members",rules:[{required:!0,message:"\u9879\u76ee\u53c2\u4e0e\u4eba\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(q.a,{mode:"multiple",placeholder:"\u9879\u76ee\u53c2\u4e0e\u4eba",allowClear:!0},l.users.map((function(e){return r.a.createElement(q.a.Option,{key:e[0]},e[1])})))),r.a.createElement(W.a.Item,{name:"progress",rules:[{required:!0,message:"\u9879\u76ee\u8fdb\u5ea6\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a.TextArea,{autoSize:!0,placeholder:"\u9879\u76ee\u8fdb\u5ea6",allowClear:!0})),r.a.createElement(W.a.Item,null,r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u4fdd \u5b58")))))))},L=a(478);var H=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(D),c=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/tasks/update/"+l.id+"/",Y.a.stringify({name:t.name,manager:t.manager})).then((function(e){1===e.data.status?(j.a.success({message:"\u4fee\u6539\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u4fee\u6539\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{placement:"bottom",title:"\u4fee\u6539\u9879\u76ee",arrowPointAtCenter:!0},r.a.createElement(y.a,{disabled:a,onClick:function(){return o(!0)},type:"primary",icon:r.a.createElement(L.a,null)})),r.a.createElement(P.a,{visible:a,footer:null,onCancel:function(){return o(!1)}},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:24,sm:12,md:12,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:c},r.a.createElement(W.a.Item,{name:"name"},r.a.createElement(h.a,{placeholder:"\u9879\u76ee\u540d\u79f0",allowClear:!0})),r.a.createElement(W.a.Item,{name:"manager"},r.a.createElement(q.a,{placeholder:"\u9879\u76ee\u8d1f\u8d23\u4eba",allowClear:!0},l.users.map((function(e){return r.a.createElement(q.a.Option,{key:e[0]},e[1])})))),r.a.createElement(W.a.Item,null,r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u4fee \u6539")))))))},M=a(479);var K=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(D),c=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/tasks/progress/"+l.id+"/",Y.a.stringify({progress:t.progress})).then((function(e){1===e.data.status?(j.a.success({message:"\u66f4\u65b0\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u66f4\u65b0\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{placement:"bottom",title:"\u66f4\u65b0\u8fdb\u5ea6",arrowPointAtCenter:!0},r.a.createElement(y.a,{disabled:a,onClick:function(){return o(!0)},type:"primary",icon:r.a.createElement(M.a,null)})),r.a.createElement(P.a,{visible:a,footer:null,onCancel:function(){return o(!1)}},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:24,sm:12,md:12,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:c},r.a.createElement(W.a.Item,{name:"progress",rules:[{required:!0,message:"\u9879\u76ee\u8fdb\u5ea6\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a.TextArea,{autoSize:!0,placeholder:"\u9879\u76ee\u8fdb\u5ea6",allowClear:!0})),r.a.createElement(W.a.Item,null,r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u4fee \u6539")))))))};var U=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useContext)(D),c=function(){var e=Object(C.a)(k.a.mark((function e(t){var a,n,r,o,c,i;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=function(e,t){for(var a=new Object,n=0,r=t.length;n<r;n++)a[t[n]]=1;for(var o=0,l=e.length;o<l;o++)a.hasOwnProperty(e[o])&&(a[e[o]]=void 0);var c=new Array,i=0;for(var s in a)a[s]&&(c[i++]=s);return c},r=function(e,t){for(var a=new Object,n=0,r=e.length;n<r;n++)a[e[n]]=1;for(var o=0,l=t.length;o<l;o++)a.hasOwnProperty(t[o])&&(a[t[o]]=void 0);var c=new Array,i=0;for(var s in a)a[s]&&(c[i++]=s);return c},a=l.members,n=t.members,c=r(a,n),i=o(a,n),e.next=8,A.a.post("/tasks/members/"+l.id+"/",Y.a.stringify({add:i,del:c})).then((function(e){1===e.data.status?(j.a.success({message:"\u4fee\u6539\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u4fee\u6539\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(w.a,{placement:"bottom",title:"\u4fee\u6539\u53c2\u4e0e\u4eba",arrowPointAtCenter:!0},r.a.createElement(y.a,{disabled:a,onClick:function(){return o(!0)},type:"primary",icon:r.a.createElement(M.a,null)})),r.a.createElement(P.a,{visible:a,footer:null,onCancel:function(){return o(!1)}},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:24,sm:12,md:12,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:c},r.a.createElement(W.a.Item,{name:"members"},r.a.createElement(q.a,{allowClear:!0,mode:"multiple",placeholder:"\u9879\u76ee\u53c2\u4e0e\u4eba",value:l.members},l.users.map((function(e){return r.a.createElement(q.a.Option,{key:e[1]},e[1])})))),r.a.createElement(W.a.Item,null,r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u4fee \u6539")))))))},_=a(159),J=a.n(_),N=a(71),$=a.n(N),G=a(201),Q=a(202),V=a(232),X=a(203),Z=a(234),ee=function(e){function t(){var e,a;Object(G.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(V.a)(this,(e=Object(X.a)(t)).call.apply(e,[this].concat(r)))).state={error:null,errorInfo:null},a}return Object(Z.a)(t,e),Object(Q.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,errorInfo:t})}},{key:"render",value:function(){return this.state.errorInfo?r.a.createElement("div",null,r.a.createElement("h2",null,"Something went wrong"),r.a.createElement("details",{style:{whiteSpace:"pre-wrap"}},this.state.error&&this.state.error.toString(),r.a.createElement("br",null),this.state.errorInfo.componentStack)):this.props.children}}]),t}(r.a.Component);var te=function(){var e=Object(n.useState)([]),t=Object(O.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),c=Object(O.a)(l,2),i=c[0],x=c[1],F=Object(n.useState)([]),P=Object(O.a)(F,2),q=P[0],W=P[1],z=Object(n.useState)([]),R=Object(O.a)(z,2),Y=R[0],L=R[1],M=Object(n.useState)(""),_=Object(O.a)(M,2),N=(_[0],_[1]),G=Object(n.useState)(""),Q=Object(O.a)(G,2),V=(Q[0],Q[1]);Object(n.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==$.a.get("name")){e.next=5;break}j.a.error({message:"Cookie\u8fc7\u671f\uff0c\u91cd\u65b0\u767b\u5f55",description:"",duration:1}),setTimeout((function(){window.location.reload()}),1e3),e.next=9;break;case 5:return e.next=7,X();case 7:return e.next=9,Z();case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var X=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/tasks/all/").then((function(e){o(e.data.tasks)})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/users/all").then((function(e){for(var t in e.data.users)e.data.users[t]=Object(v.a)({},e.data.users[t]);x(e.data.users);var a=[];for(var n in e.data.users)a.push({text:e.data.users[n][1],value:e.data.users[n][1]});L(a)})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te=function(e,t){t(),N(e[0])},ae=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/tasks/delete/"+t.id+"/").then((function(e){1===e.data.status?(j.a.success({message:"\u5220\u9664\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u5220\u9664\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ne=function(){var e=Object(C.a)(k.a.mark((function e(t,a){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/tasks/progresses/"+a.id+"/").then((function(e){W(e.data.progress)})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),re=function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("/users/logout/").then((function(){$.a.remove("name",{path:"/",domain:document.domain}),window.location.reload()})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement(ee,null,r.a.createElement(g.a,{dataSource:a,rowKey:"id",pagination:{simple:!0,total:a.length,size:"small",pageSize:20},expandedRowRender:function(){return r.a.createElement(ee,null,r.a.createElement(b.a,null,q.map((function(e){return r.a.createElement(b.a.Item,{key:e.last_update},e.progress,"---\x3e",e.submitter,J()(e.last_update).format("YYYY-MM-DD HH:mm:ss"))}))))},title:function(){return r.a.createElement(n.Fragment,null,r.a.createElement(D.Provider,{value:{users:i}},r.a.createElement(ee,null,r.a.createElement(B,null))),r.a.createElement(w.a,{placement:"bottom",title:"\u767b\u51fa",arrowPointAtCenter:!0},r.a.createElement("div",{style:{float:"right",marginRight:15,marginBottom:15}},r.a.createElement(y.a,{type:"danger",icon:r.a.createElement(I.a,null),onClick:re}))))},onExpand:ne,scroll:{scrollToFirstRowOnChange:!0}},r.a.createElement(g.a.Column,{title:"\u9879\u76ee\u540d\u79f0",dataIndex:"name",key:"name",width:"13%",filterDropdown:function(e){var t=e.setSelectedKeys,a=e.selectedKeys,n=e.confirm,o=e.clearFilters;return r.a.createElement("div",{style:{padding:8}},r.a.createElement(ee,null,r.a.createElement(h.a.Search,{ref:function(e){V(e)},placeholder:"\u9879\u76ee\u641c\u7d22",value:a[0],onChange:function(e){return t(e.target.value?[e.target.value]:[])},onPressEnter:function(){return te(a,n)},style:{width:188,marginBottom:8,display:"block"}})),r.a.createElement(y.a,{type:"primary",onClick:function(){return te(a,n)},icon:r.a.createElement(S.a,null),size:"small",style:{width:90,marginRight:8}},"\u641c\u7d22"),r.a.createElement(y.a,{onClick:function(){return function(e){e(),N("")}(o)},size:"small",style:{width:90}},"\u91cd\u7f6e"))},filterIcon:function(e){return r.a.createElement(S.a,{style:{color:e?"#1890ff":void 0}})},onFilter:function(e,t){return t.name.toString().toLowerCase().includes(e.toLowerCase())}}),r.a.createElement(g.a.Column,{title:"\u9879\u76ee\u8d1f\u8d23\u4eba",dataIndex:"manager",key:"manager",width:"10%",filters:Y,onFilter:function(e,t){return t.manager.includes(e)}}),")} />",r.a.createElement(g.a.Column,{title:"\u9879\u76ee\u53c2\u4e0e\u4eba",dataIndex:"members",key:"members",width:"14%",render:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{span:20},t.members.map((function(e){return r.a.createElement(f.a,{span:8,key:e,style:{marginTop:3,marginBottom:3}},r.a.createElement(E.a,null,e))}))),r.a.createElement(f.a,{span:2},r.a.createElement(D.Provider,{value:{id:t.id,members:t.members,users:i}},r.a.createElement(ee,null,r.a.createElement(U,null))))))}}),r.a.createElement(g.a.Column,{title:"\u9879\u76ee\u8fdb\u5ea6",dataIndex:"progress",key:"progress",render:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(f.a,{span:22},r.a.createElement(d.a.Paragraph,{ellipsis:{rows:1,expandable:!0}},t.progress)),r.a.createElement(f.a,{span:2},r.a.createElement(D.Provider,{value:{id:t.id}},r.a.createElement(ee,null,r.a.createElement(K,null))))))}}),r.a.createElement(g.a.Column,{title:"\u9879\u76ee\u8fdb\u5ea6\u4fee\u6539\u4eba/\u4fee\u6539\u65f6\u95f4",dataIndex:"submitter",key:"submitter",width:"15%",render:function(e,t){return r.a.createElement(n.Fragment,null,r.a.createElement(p.a,null,r.a.createElement(f.a,null,t.submitter),r.a.createElement(f.a,null,J()(t.last_update).format("YYYY-MM-DD HH:mm:ss"))))}}),r.a.createElement(g.a.Column,{title:"\u64cd\u4f5c",dataIndex:"option",key:"option",width:"9%",render:function(e,t){return a.length>=1?r.a.createElement(n.Fragment,null,r.a.createElement(D.Provider,{value:{users:i,id:t.id}},r.a.createElement(ee,null,r.a.createElement(H,null))),r.a.createElement(m.a,{type:"vertical"}),r.a.createElement(u.a,{title:"\u786e\u8ba4\u5220\u9664",cancelText:"\u53d6\u6d88",okText:"\u786e\u5b9a",onConfirm:function(){return ae(t)}},r.a.createElement(w.a,{placement:"bottom",title:"\u5220\u9664\u9879\u76ee",arrowPointAtCenter:!0},r.a.createElement(y.a,{type:"danger",icon:r.a.createElement(T.a,null)})))):null}}))),r.a.createElement(s.a,null))},ae=(a(476),a(227));var ne=function(){var e=Object(n.useState)(!1),t=Object(O.a)(e,2),a=t[0],o=t[1],l=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/users/password/",Y.a.stringify({username:t.username,password:t.password,new:t.new})).then((function(e){1===e.data.status?(j.a.success({message:"\u4fee\u6539\u6210\u529f",description:"",duration:2}),setTimeout((function(){window.location.reload()}),2e3)):j.a.error({message:"\u4fee\u6539\u5931\u8d25",description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,r.a.createElement("a",{onClick:function(){return o(!0)},type:"primary"},"\u4fee\u6539\u5bc6\u7801"),r.a.createElement(P.a,{visible:a,footer:null,onCancel:function(){return o(!1)}},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:24,sm:12,md:12,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:l},r.a.createElement("div",{style:{margin:"0 auto",textAlign:"center"}},r.a.createElement("p",{style:{marginTop:20,fontSize:20,fontWeight:600}},"\u4fee\u6539\u5bc6\u7801")),r.a.createElement(W.a.Item,{name:"username",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{placeholder:"\u7528\u6237\u540d",allowClear:!0})),r.a.createElement(W.a.Item,{name:"password",rules:[{required:!0,message:"\u539f\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{type:"password",autoComplete:"true",placeholder:"\u539f\u5bc6\u7801",allowClear:!0})),r.a.createElement(W.a.Item,{name:"new",rules:[{required:!0,message:"\u65b0\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{type:"password",autoComplete:"true",placeholder:"\u65b0\u5bc6\u7801",allowClear:!0})),r.a.createElement(W.a.Item,null,r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u63d0 \u4ea4")))))))};var re=function(){var e=function(){var e=Object(C.a)(k.a.mark((function e(t){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.post("/users/login/",Y.a.stringify({username:t.username,password:t.password})).then((function(e){1===e.data.status?($.a.set("name","adinno",{expires:new Date(e.data.expiry),domain:document.domain}),window.location.reload()):2===e.data.status?j.a.error({message:"\u5df2\u767b\u5f55",description:"",duration:2}):j.a.error({message:unescape(e.data.reason.replace(/\\u/g,"%u")),description:e.data.reason,duration:2})})).catch((function(e){j.a.error({message:"Error",description:e,duration:2})}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){void 0!=$.a.get("name")&&window.location.reload()}),[]),r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle",style:{position:"absolute",top:0,left:0,right:0,bottom:0,margin:"auto"}},r.a.createElement(f.a,{xs:24,sm:24,md:24,lg:8,xl:8,xxl:8},r.a.createElement(ae.a,{bodyStyle:{padding:0},style:{boxShadow:"0 0 10px #888888"},bordered:!1},r.a.createElement(p.a,{type:"flex",justify:"center",align:"middle"},r.a.createElement(f.a,{xs:22,sm:12,md:12,lg:12,xl:12,xxl:12},r.a.createElement(W.a,{onFinish:e},r.a.createElement("div",{style:{margin:"0 auto",textAlign:"center"}},r.a.createElement("p",{style:{marginTop:20,fontSize:20,fontWeight:600}},"\u767b \u5f55")),r.a.createElement(W.a.Item,{name:"username",rules:[{required:!0,message:"\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{allowClear:!0,placeholder:"\u7528\u6237\u540d"})),r.a.createElement(W.a.Item,{name:"password",rules:[{required:!0,whitespace:!0,message:"\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"}]},r.a.createElement(h.a,{allowClear:!0,autoComplete:"true",type:"password",placeholder:"\u5bc6\u7801"})),r.a.createElement(W.a.Item,null,r.a.createElement(ne,null),r.a.createElement(y.a,{type:"primary",block:!0,htmlType:"submit"},"\u767b \u5f55"))))))))};var oe=function(){return void 0!==$.a.get("name")?r.a.createElement(te,null):r.a.createElement(re,null)},le=a(229),ce=(a(467),a(230));var ie=function(){return r.a.createElement(ce.a,{status:"404",title:"404",subTitle:"\u9875\u9762\u4e0d\u5b58\u5728",extra:r.a.createElement(y.a,{type:"primary",href:"/"},"\u8fd4\u56de\u9996\u9875")})},se=function(){return r.a.createElement(l.b,{locale:le.a},r.a.createElement(c.a,null,r.a.createElement(i.c,null,r.a.createElement(i.a,{exact:!0,path:"/",component:oe}),r.a.createElement(i.a,{component:ie}))))},ue=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function me(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}Object(o.render)(r.a.createElement(se,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ue?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):me(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):me(t,e)}))}}()}},[[236,1,2]]]);
//# sourceMappingURL=main.acb58433.chunk.js.map