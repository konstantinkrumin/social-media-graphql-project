(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{233:function(e,t,n){},235:function(e,t,n){"use strict";n.r(t);var a=n(86),s=n.n(a),c=n(0),r=n(203),o=n(236),i=n(266),l=n(262),j=n(205),d=n(38),u=n(78),b=n(261),m=n(15),O=n(265),h=n(39),p=n(195),x=n(3),g={user:null};if(localStorage.getItem("jwtToken")){var v=Object(p.a)(localStorage.getItem("jwtToken"));1e3*v.exp<Date.now()?localStorage.removeItem("jwtToken"):g.user=v}var f=Object(c.createContext)({user:null,login:function(e){},logout:function(){}});function C(e,t){switch(t.type){case"LOGIN":return Object(h.a)(Object(h.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(h.a)(Object(h.a)({},e),{},{user:null});default:return e}}function y(e){var t=Object(c.useReducer)(C,g),n=Object(m.a)(t,2),a=n[0],s=n[1];return Object(x.jsx)(f.Provider,Object(h.a)({value:{user:a.user,login:function(e){localStorage.setItem("jwtToken",e.token),s({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),s({type:"LOGOUT"})}}},e))}var I,w,k,P,S,$,N,A,D,L=function(){var e=Object(c.useContext)(f),t=e.user,n=e.logout,a=window.location.pathname,s="/"===a?"home":a.substr(1),r=Object(c.useState)(s),o=Object(m.a)(r,2),i=o[0],l=o[1],j=function(e,t){var n=t.name;return l(n)};return t?Object(x.jsxs)(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(x.jsx)(O.a.Item,{name:t.username,active:!0,as:d.b,to:"/"}),Object(x.jsx)(O.a.Menu,{position:"right",children:Object(x.jsx)(O.a.Item,{name:"logout",onClick:n})})]}):Object(x.jsxs)(O.a,{pointing:!0,secondary:!0,size:"massive",color:"teal",children:[Object(x.jsx)(O.a.Item,{name:"home",active:"home"===i,onClick:j,as:d.b,to:"/"}),Object(x.jsxs)(O.a.Menu,{position:"right",children:[Object(x.jsx)(O.a.Item,{name:"login",active:"login"===i,onClick:j,as:d.b,to:"/login"}),Object(x.jsx)(O.a.Item,{name:"register",active:"register"===i,onClick:j,as:d.b,to:"/register"})]})]})},E=n(272),R=n(267),T=n(260),Q=n(269),U=n(204),q=n(270),z=n(121),G=n(160),M=n(129),B=n.n(M),H=n(28),F=n(254),J=n(29),V=n(263),W=function(e){var t=e.content,n=e.children;return Object(x.jsx)(V.a,{inverted:!0,content:t,trigger:n})},K=Object(J.a)(I||(I=Object(H.a)(["\n  mutation likePost($postId: ID!) {\n    likePost(postId: $postId) {\n      id\n      likes {\n        id\n        username\n      }\n      likeCount\n    }\n  }\n"]))),X=function(e){var t=e.user,n=e.post,a=n.id,s=n.likeCount,r=n.likes,o=Object(c.useState)(!1),i=Object(m.a)(o,2),l=i[0],j=i[1];Object(c.useEffect)((function(){t&&r.find((function(e){return e.username===t.username}))?j(!0):j(!1)}));var u=Object(F.a)(K,{variables:{postId:a}}),b=Object(m.a)(u,1)[0],O=t?l?Object(x.jsx)(q.a,{color:"teal",children:Object(x.jsx)(z.a,{name:"heart"})}):Object(x.jsx)(q.a,{color:"teal",basic:!0,children:Object(x.jsx)(z.a,{name:"heart"})}):Object(x.jsx)(q.a,{as:d.b,to:"/login",color:"teal",basic:!0,children:Object(x.jsx)(z.a,{name:"heart"})});return Object(x.jsxs)(q.a,{as:"div",labelPosition:"right",onClick:b,children:[Object(x.jsx)(W,{content:l?"Unlike":"Like",children:O}),Object(x.jsx)(G.a,{basic:!0,color:"teal",pointing:"left",children:s})]})},Y=n(268),Z=Object(J.a)(w||(w=Object(H.a)(["\n  {\n    getPosts {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]))),_=Object(J.a)(k||(k=Object(H.a)(["\n  mutation deletePost($postId: ID!) {\n    deletePost(postId: $postId)\n  }\n"]))),ee=Object(J.a)(P||(P=Object(H.a)(["\n  mutation deleteComment($postId: ID!, $commentId: ID!) {\n    deleteComment(postId: $postId, commentId: $commentId) {\n      id\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n      commentCount\n    }\n  }\n"]))),te=function(e){var t=e.postId,n=e.commentId,a=e.callback,s=Object(c.useState)(!1),r=Object(m.a)(s,2),o=r[0],i=r[1],l=n?ee:_,j=Object(F.a)(l,{update:function(e){if(i(!1),!n){var s,c=e.readQuery({query:Z}),r=null===c||void 0===c||null===(s=c.getPosts)||void 0===s?void 0:s.filter((function(e){return e.id!==t}));e.writeQuery({query:Z,data:{getPosts:r}})}a&&a()},variables:{postId:t,commentId:n}}),d=Object(m.a)(j,1)[0];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(W,{content:n?"Delete comment":"Delete post",children:Object(x.jsx)(q.a,{as:"div",color:"red",floated:"right",onClick:function(){return i(!0)},children:Object(x.jsx)(z.a,{name:"trash",style:{margin:0}})})}),Object(x.jsx)(Y.a,{open:o,onCancel:function(){return i(!1)},onConfirm:d})]})},ne=function(e){var t=e.post,n=t.body,a=t.createdAt,s=t.id,r=t.username,o=t.likeCount,i=t.commentCount,l=t.likes,j=Object(c.useContext)(f).user;return Object(x.jsxs)(Q.a,{fluid:!0,children:[Object(x.jsxs)(Q.a.Content,{as:d.b,to:"/posts/".concat(s),children:[Object(x.jsx)(U.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"}),Object(x.jsx)(Q.a.Header,{children:r}),Object(x.jsx)(Q.a.Meta,{children:B()(a).fromNow(!0)}),Object(x.jsx)(Q.a.Description,{children:n})]}),Object(x.jsxs)(Q.a.Content,{extra:!0,children:[Object(x.jsx)(X,{user:j,post:{id:s,likes:l,likeCount:o}}),Object(x.jsx)(W,{content:"Comment on post",children:Object(x.jsxs)(q.a,{labelPosition:"right",as:d.b,to:"/posts/".concat(s),children:[Object(x.jsx)(q.a,{color:"blue",basic:!0,children:Object(x.jsx)(z.a,{name:"comments"})}),Object(x.jsx)(G.a,{basic:!0,color:"blue",pointing:"left",children:i})]})}),j&&j.username===r&&Object(x.jsx)(te,{postId:s})]})]})},ae=n(90),se=n(264),ce=n(136),re=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=Object(c.useState)(t),a=Object(m.a)(n,2),s=a[0],r=a[1],o=function(e){r(Object(h.a)(Object(h.a)({},s),{},Object(ce.a)({},e.target.name,e.target.value)))},i=function(t){t.preventDefault(),e()};return{onChange:o,onSubmit:i,values:s}},oe=Object(J.a)(S||(S=Object(H.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]))),ie=function(){var e=re((function(){r()}),{body:""}),t=e.values,n=e.onChange,a=e.onSubmit,s=Object(F.a)(oe,{variables:t,update:function(e,n){var a=e.readQuery({query:Z});e.writeQuery({query:Z,data:{getPosts:[n.data.createPost].concat(Object(ae.a)(a.getPosts))}}),t.body=""}}),c=Object(m.a)(s,2),r=c[0],o=c[1].error;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)(se.a,{onSubmit:a,children:[Object(x.jsx)("h2",{children:"Create a post:"}),Object(x.jsxs)(se.a.Field,{children:[Object(x.jsx)(se.a.Input,{placeholder:"Hi World!",name:"body",onChange:n,value:t.body,error:!!o}),Object(x.jsx)(q.a,{disabled:!t.body.trim(),type:"submit",color:"teal",children:"Submit"})]})]}),o&&Object(x.jsx)("div",{className:"ui error message",style:{marginBottom:20},children:Object(x.jsx)("ul",{className:"list",children:Object(x.jsx)("li",{children:o.graphQLErrors[0].message})})})]})},le=function(){var e=Object(c.useContext)(f).user,t=Object(T.a)(Z),n=t.loading,a=t.data;return Object(x.jsxs)(E.a,{columns:3,children:[Object(x.jsx)(E.a.Row,{className:"page-title",children:Object(x.jsx)("h1",{children:"Recent Posts"})}),Object(x.jsxs)(E.a.Row,{children:[e&&Object(x.jsx)(E.a.Column,{children:Object(x.jsx)(ie,{})}),n?Object(x.jsx)("h1",{children:"Loading posts..."}):Object(x.jsx)(R.a.Group,{children:a.getPosts&&a.getPosts.map((function(e){return Object(x.jsx)(E.a.Column,{style:{marginBottom:20},children:Object(x.jsx)(ne,{post:e})},e.id)}))})]})]})},je=Object(J.a)($||($=Object(H.a)(["\n  mutation login($username: String!, $password: String!) {\n    login(username: $username, password: $password) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]))),de=function(e){var t=Object(c.useContext)(f),n=Object(c.useState)({}),a=Object(m.a)(n,2),s=a[0],r=a[1],o=re((function(){b()}),{username:"",password:"",confirmPassword:"",email:""}),i=o.onChange,l=o.onSubmit,j=o.values,d=Object(F.a)(je,{update:function(n,a){var s=a.data.login;t.login(s),e.history.push("/")},onError:function(e){var t,n,a;r(null===e||void 0===e||null===(t=e.graphQLErrors[0])||void 0===t||null===(n=t.extensions)||void 0===n||null===(a=n.exception)||void 0===a?void 0:a.errors)},variables:j}),u=Object(m.a)(d,2),b=u[0],O=u[1].loading;return Object(x.jsxs)("div",{className:"form-container",children:[Object(x.jsxs)(se.a,{onSubmit:l,noValidate:!0,className:O?"loading":"",children:[Object(x.jsx)("h1",{children:"Login"}),Object(x.jsx)(se.a.Input,{label:"Username",placeholder:"Username...",name:"username",type:"text",value:j.username,error:!!s.username,onChange:i}),Object(x.jsx)(se.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:j.password,error:!!s.password,onChange:i}),Object(x.jsx)(q.a,{type:"submit",primary:!0,children:"Login"})]}),Object.keys(s).length>0&&Object(x.jsx)("div",{className:"ui error message",children:Object(x.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(x.jsx)("li",{children:e},e)}))})})]})},ue=Object(J.a)(N||(N=Object(H.a)(["\n  mutation register($username: String!, $email: String!, $password: String!, $confirmPassword: String!) {\n    register(registerInput: { username: $username, email: $email, password: $password, confirmPassword: $confirmPassword }) {\n      id\n      email\n      username\n      createdAt\n      token\n    }\n  }\n"]))),be=function(e){var t=Object(c.useContext)(f),n=Object(c.useState)({}),a=Object(m.a)(n,2),s=a[0],r=a[1],o=re((function(){b()}),{username:"",password:"",confirmPassword:"",email:""}),i=o.onChange,l=o.onSubmit,j=o.values,d=Object(F.a)(ue,{update:function(n,a){var s=a.data.register;t.login(s),e.history.push("/")},onError:function(e){var t,n,a;r(null===e||void 0===e||null===(t=e.graphQLErrors[0])||void 0===t||null===(n=t.extensions)||void 0===n||null===(a=n.exception)||void 0===a?void 0:a.errors)},variables:j}),u=Object(m.a)(d,2),b=u[0],O=u[1].loading;return Object(x.jsxs)("div",{className:"form-container",children:[Object(x.jsxs)(se.a,{onSubmit:l,noValidate:!0,className:O?"loading":"",children:[Object(x.jsx)("h1",{children:"Register"}),Object(x.jsx)(se.a.Input,{label:"Username",placeholder:"Username...",name:"username",type:"text",value:j.username,error:!!s.username,onChange:i}),Object(x.jsx)(se.a.Input,{label:"Email",placeholder:"Email...",name:"email",type:"email",value:j.email,error:!!s.email,onChange:i}),Object(x.jsx)(se.a.Input,{label:"Password",placeholder:"Password...",name:"password",type:"password",value:j.password,error:!!s.password,onChange:i}),Object(x.jsx)(se.a.Input,{label:"Confirm Password",placeholder:"Confirm Password...",name:"confirmPassword",type:"password",value:j.confirmPassword,error:!!s.confirmPassword,onChange:i}),Object(x.jsx)(q.a,{type:"submit",primary:!0,children:"Register"})]}),Object.keys(s).length>0&&Object(x.jsx)("div",{className:"ui error message",children:Object(x.jsx)("ul",{className:"list",children:Object.values(s).map((function(e){return Object(x.jsx)("li",{children:e},e)}))})})]})},me=Object(J.a)(A||(A=Object(H.a)(["\n  mutation ($postId: ID!, $body: String!) {\n    createComment(postId: $postId, body: $body) {\n      id\n      comments {\n        id\n        body\n        createdAt\n        username\n      }\n      commentCount\n    }\n  }\n"]))),Oe=Object(J.a)(D||(D=Object(H.a)(["\n  query ($postId: ID!) {\n    getPost(postId: $postId) {\n      id\n      body\n      createdAt\n      username\n      likeCount\n      likes {\n        username\n      }\n      commentCount\n      comments {\n        id\n        username\n        createdAt\n        body\n      }\n    }\n  }\n"]))),he=function(e){var t,n=e.match.params.postId,a=Object(c.useContext)(f).user,s=Object(c.useRef)(null),r=Object(c.useState)(""),o=Object(m.a)(r,2),i=o[0],l=o[1],j=Object(T.a)(Oe,{variables:{postId:n}}),d=j.loading,u=j.data,b=Object(F.a)(me,{update:function(){l(""),s.current.blur()},variables:{postId:n,body:i}}),O=Object(m.a)(b,1)[0];if(d)t=Object(x.jsx)("p",{children:"Loading post..."});else if(!d){var h=null===u||void 0===u?void 0:u.getPost,p=h.id,g=h.body,v=h.createdAt,C=h.username,y=h.comments,I=h.likes,w=h.likeCount,k=h.commentCount;t=Object(x.jsx)(E.a,{children:Object(x.jsxs)(E.a.Row,{children:[Object(x.jsx)(E.a.Column,{width:2,children:Object(x.jsx)(U.a,{floated:"right",size:"small",src:"https://react.semantic-ui.com/images/avatar/large/molly.png"})}),Object(x.jsxs)(E.a.Column,{width:10,children:[Object(x.jsxs)(Q.a,{fluid:!0,children:[Object(x.jsxs)(Q.a.Content,{children:[Object(x.jsx)(Q.a.Header,{children:C}),Object(x.jsx)(Q.a.Meta,{children:B()(v).fromNow()}),Object(x.jsx)(Q.a.Description,{children:g})]}),Object(x.jsx)("hr",{}),Object(x.jsxs)(Q.a.Content,{extra:!0,children:[Object(x.jsx)(X,{user:a,post:{id:p,likeCount:w,likes:I}}),Object(x.jsx)(W,{content:"Comment on post",children:Object(x.jsxs)(q.a,{as:"div",labelPosition:"right",onClick:function(){return s.current.focus()},children:[Object(x.jsx)(q.a,{basic:!0,color:"blue",children:Object(x.jsx)(z.a,{name:"comments"})}),Object(x.jsx)(G.a,{basic:!0,color:"blue ",pointing:"left",children:k})]})}),a&&a.username===C&&Object(x.jsx)(te,{postId:p,callback:function(){e.history.push("/")}})]})]}),a&&Object(x.jsx)(Q.a,{fluid:!0,children:Object(x.jsxs)(Q.a.Content,{children:[Object(x.jsx)("p",{children:"Post a comment"}),Object(x.jsx)(se.a,{children:Object(x.jsxs)("div",{className:"ui action input fluid",children:[Object(x.jsx)("input",{type:"text",placeholder:"Comment...",name:"comment",value:i,onChange:function(e){return l(e.target.value)},ref:s}),Object(x.jsx)("button",{type:"submit",className:"ui button teal",disabled:""===i.trim(),onClick:O,children:"Submit"})]})})]})}),y.map((function(e){return Object(x.jsx)(Q.a,{fluid:!0,children:Object(x.jsxs)(Q.a.Content,{children:[a&&a.username===e.username&&Object(x.jsx)(te,{postId:p,commentId:e.id}),Object(x.jsx)(Q.a.Header,{children:e.header}),Object(x.jsx)(Q.a.Meta,{children:B()(e.createdAt).fromNow()}),Object(x.jsx)(Q.a.Description,{children:e.body})]})},e.id)}))]})]})})}return t},pe=(n(232),n(233),n(207)),xe=["component"],ge=function(e){var t=e.component,n=Object(pe.a)(e,xe),a=Object(c.useContext)(f).user;return Object(x.jsx)(u.b,Object(h.a)(Object(h.a)({},n),{},{render:function(e){return a?Object(x.jsx)(u.a,{to:"/"}):Object(x.jsx)(t,Object(h.a)({},e))}}))};var ve=function(){return Object(x.jsx)(y,{children:Object(x.jsx)(d.a,{children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(L,{}),Object(x.jsx)(u.b,{exact:!0,path:"/",component:le}),Object(x.jsx)(ge,{exact:!0,path:"/login",component:de}),Object(x.jsx)(ge,{exact:!0,path:"/register",component:be}),Object(x.jsx)(u.b,{exact:!0,path:"/posts/:postId",component:he})]})})})},fe=Object(r.a)({uri:"https://social-media-graphql-proj.herokuapp.com/"}),Ce=Object(j.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"Bearer ".concat(e):""}}})),ye=new o.a({link:Ce.concat(fe),cache:new i.a}),Ie=Object(x.jsx)(l.a,{client:ye,children:Object(x.jsx)(ve,{})});s.a.render(Ie,document.getElementById("root"))}},[[235,1,2]]]);
//# sourceMappingURL=main.4ad74e16.chunk.js.map