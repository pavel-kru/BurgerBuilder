(this["webpackJsonpmy-burger"]=this["webpackJsonpmy-burger"]||[]).push([[0],[,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"u",(function(){return c})),n.d(t,"v",(function(){return a})),n.d(t,"n",(function(){return i})),n.d(t,"p",(function(){return o})),n.d(t,"i",(function(){return s})),n.d(t,"k",(function(){return u})),n.d(t,"l",(function(){return d})),n.d(t,"h",(function(){return l})),n.d(t,"j",(function(){return b})),n.d(t,"q",(function(){return j})),n.d(t,"s",(function(){return f})),n.d(t,"t",(function(){return O})),n.d(t,"r",(function(){return p})),n.d(t,"m",(function(){return h})),n.d(t,"f",(function(){return g})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return _})),n.d(t,"o",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"b",(function(){return k})),n.d(t,"g",(function(){return B}));var r="ADD_INGREDIENT",c="REMOVE_INGREDIENT",a="SET_INGREDIENTS",i="FETCH_INGREDIENTS_FAILED",o="INIT_INGREDIENTS",s="BURGER_ORDER_INIT",u="BURGER_ORDER_START",d="BURGER_ORDER_SUCCESS",l="BURGER_ORDER_FAIL",b="BURGER_ORDER_SENT",j="ORDERS_FETCH",f="ORDERS_FETCH_START",O="ORDERS_FETCH_SUCCESS",p="ORDERS_FETCH_FAIL",h="CHECK_STATE",g="AUTH_SUCCESS",x="AUTH_START",_="AUTH_FAIL",m="INITIAT_LOGOUT",v="AUTH_LOGOUT",k="AUTH_CHECK_TIMEOUT",B="AUTH_USER"},,,,,,,,function(e,t,n){"use strict";n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"g",(function(){return o})),n.d(t,"h",(function(){return s})),n.d(t,"f",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return l}));var r=n(4),c=function(){return{type:r.e}},a=function(e,t){return{type:r.f,userId:e,idToken:t}},i=function(e){return{type:r.c,error:e}},o=function(){return{type:r.o}},s=function(){return{type:r.d}},u=function(e){return{type:r.b,expirationTime:e}},d=function(e,t,n){return{type:r.g,email:e,password:t,isSignUp:n}},l=function(){return{type:r.m}}},,function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return a}));var r=n(8),c=function(e,t){return Object(r.a)(Object(r.a)({},e),t)},a=function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.isMail){n=/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(e)&&n}if(t.isTel){n=/^[\d+][\d()-]{7,19}\d$/.test(e)&&n}return t.minLength&&(n=e.length>=t.minLength&&n),n}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e.children}},function(e,t,n){"use strict";n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"i",(function(){return l})),n.d(t,"h",(function(){return b}));var r=n(4),c=function(){return{type:r.i}},a=function(e,t){return{type:r.l,orderId:e,orderData:t}},i=function(e){return{type:r.h,error:e}},o=function(){return{type:r.k}},s=function(e,t){return{type:r.j,orderData:e,token:t}},u=function(e){return{type:r.t,orders:e}},d=function(e){return{type:r.r,error:e}},l=function(){return{type:r.s}},b=function(e,t){return{type:r.q,token:e,userId:t}}},,function(e,t,n){e.exports={BreadBottom:"BurgerIngridient_BreadBottom__1e8WM",BreadTop:"BurgerIngridient_BreadTop__2J-Dy",Seeds1:"BurgerIngridient_Seeds1__3de5-",Seeds2:"BurgerIngridient_Seeds2__3zZ0T",Meat:"BurgerIngridient_Meat__1Wfci",Cheese:"BurgerIngridient_Cheese__3ES2J",Salad:"BurgerIngridient_Salad__1JntN",Bacon:"BurgerIngridient_Bacon__2huDN"}},,,,,function(e,t,n){e.exports={sideDrawer:"SideDrawer_sideDrawer__35o3j",Logo:"SideDrawer_Logo__1HMUC",open:"SideDrawer_open__3FYZn",close:"SideDrawer_close__3WHhR"}},function(e,t,n){"use strict";var r=n(26),c=n.n(r).a.create({baseURL:"https://burger-builder-b8bbf-default-rtdb.firebaseio.com/"});t.a=c},,,function(e,t,n){"use strict";n(1);var r=n(71),c=n.n(r),a=n(0);t.a=function(){return Object(a.jsx)("div",{className:c.a.Spinner,children:"Loading..."})}},,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(1);var r=n(69),c=n.n(r),a=n(0),i=function(e){return e.show?Object(a.jsx)("div",{className:c.a.Backdrop,onClick:e.clicked}):null}},function(e,t,n){"use strict";var r=n(1),c=n.n(r),a=n(70),i=n.n(a),o=n(19),s=n(36),u=n(0),d=function(e){return Object(u.jsxs)(o.a,{children:[Object(u.jsx)(s.a,{show:e.show,clicked:e.close}),Object(u.jsx)("div",{className:i.a.Modal,style:{transform:e.show?null:"translateY(-100vh)",opacity:e.show?"1":"0"},children:e.children})]})};t.a=c.a.memo(d,(function(e,t){return e.show===t.show&&e.children===t.children}))},function(e,t,n){e.exports={ToolBar:"ToolBar_ToolBar__22xwC",Logo:"ToolBar_Logo__N5kZh",DesktopOnly:"ToolBar_DesktopOnly__37fAp"}},function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__3VLZS",Less:"BuildControl_Less__2WPhh",More:"BuildControl_More__1iyhO"}},function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__2hBVC",controlsContainer:"BuildControls_controlsContainer__3zIR5",OrderButton:"BuildControls_OrderButton__3p7qa",enable:"BuildControls_enable__2akrc"}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n(1);var r=n(49),c=n.n(r),a=n(0),i=function(e){return Object(a.jsx)("button",{disabled:e.disabled,onClick:e.clicked,className:[c.a.Button,c.a[e.btnType]].join(" "),children:e.children})}},,,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__32hJl",active:"NavigationItem_active__jvC-c"}},,,function(e,t,n){e.exports={Burger:"Burger_Burger__141A4",AddingIngr:"Burger_AddingIngr__3eSSy"}},function(e,t,n){e.exports={Button:"Button_Button__O86Jr",Success:"Button_Success__RpvQZ",Danger:"Button_Danger__2N_MP"}},function(e,t,n){e.exports={Button:"BurgerSummary_Button__QfS8B"}},function(e,t,n){"use strict";var r=n(8),c=n(23),a=n(1),i=n(37),o=n(0);t.a=function(e,t){return function(n){var s=function(e){var t=Object(a.useState)(null),n=Object(c.a)(t,2),r=n[0],i=n[1],o=e.interceptors.request.use((function(e){return i(null),e})),s=e.interceptors.response.use((function(e){return e}),(function(e){i(e)}));return Object(a.useEffect)((function(){return function(){e.interceptors.request.eject(o),e.interceptors.response.eject(s)}}),[o,s,e.interceptors.request,e.interceptors.response]),[r,function(){i(null)}]}(t),u=Object(c.a)(s,2),d=u[0],l=u[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i.a,{show:d,modalClosed:l,children:d?d.message:null}),Object(o.jsx)(e,Object(r.a)({},n))]})}}},,,,,,,,,,function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(72),c=(n(1),n(22)),a=n.n(c),i=n(0),o=function(e){var t=null;switch(e.type){case"bread-bottom":t=Object(i.jsx)("div",{className:a.a.BreadBottom});break;case"bread-top":t=Object(i.jsxs)("div",{className:a.a.BreadTop,children:[Object(i.jsx)("div",{className:a.a.Seeds1}),Object(i.jsx)("div",{className:a.a.Seeds2})]});break;case"meat":t=Object(i.jsx)("div",{className:a.a.Meat});break;case"cheese":t=Object(i.jsx)("div",{className:a.a.Cheese});break;case"salad":t=Object(i.jsx)("div",{className:a.a.Salad});break;case"bacon":t=Object(i.jsx)("div",{className:a.a.Bacon});break;default:t=null}return t},s=n(48),u=n.n(s),d=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(r.a)(Array(e.ingredients[t])).map((function(e,n){return Object(i.jsx)(o,{type:t},t+n)}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=Object(i.jsx)("p",{className:u.a.AddingIngr,children:"Please start adding ingredients!"})),Object(i.jsxs)("div",{className:u.a.Burger,children:[Object(i.jsx)(o,{type:"bread-top"}),t,Object(i.jsx)(o,{type:"bread-bottom"})]})}},,,,function(e,t,n){e.exports={Content:"Layout_Content__Sj01h"}},function(e,t,n){e.exports={Logo:"Logo_Logo__2rFNZ"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__3qN7N"}},function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__3VcHU"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__2Xhd_"}},function(e,t,n){e.exports={Modal:"Modal_Modal__3nQCS"}},function(e,t,n){e.exports={Spinner:"Spinner_Spinner__1REUx",load6:"Spinner_load6__iJolW",round:"Spinner_round__37103"}},,,,,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(32),i=n.n(a),o=n(24),s=n(13),u=n(21),d=n(64),l=n(73),b=(n(84),n(8)),j=n(10),f=n(23),O=n(19),p=n(65),h=n.n(p),g=n.p+"static/media/burger-logo.ec69c7f6.png",x=n(66),_=n.n(x),m=n(0),v=function(e){return Object(m.jsx)("div",{className:_.a.Logo,style:{height:e.height},children:Object(m.jsx)("img",{onClick:e.clicked,src:g,alt:"Logo"})})},k=n(67),B=n.n(k),S=n(45),I=n.n(S),y=function(e){return Object(m.jsx)("li",{className:I.a.NavigationItem,children:Object(m.jsx)(o.b,{to:e.link,activeClassName:I.a.active,exact:e.exact,onClick:e.clicked,children:e.children})})},N=function(e){return Object(m.jsxs)("ul",{className:B.a.NavigationItems,children:[Object(m.jsx)(y,{clicked:e.clicked,link:"/",exact:!0,children:"Burger Builder"}),e.isAuth?Object(m.jsx)(y,{clicked:e.clicked,link:"/orders",children:"Orders"}):null,e.isAuth?Object(m.jsx)(y,{clicked:e.clicked,link:"/logout",children:"Logout"}):Object(m.jsx)(y,{clicked:e.clicked,link:"/auth",children:"Login"})]})},T=n(68),w=n.n(T),C=function(e){var t=e.drawerToggle;return Object(m.jsxs)("div",{onClick:t,className:w.a.DrawerToggle,children:[Object(m.jsx)("div",{}),Object(m.jsx)("div",{}),Object(m.jsx)("div",{})]})},D=n(38),E=n.n(D),R=function(e){return Object(m.jsxs)("header",{className:E.a.ToolBar,children:[Object(m.jsx)(C,{drawerToggle:e.clicked}),Object(m.jsx)(v,{className:E.a.Logo}),Object(m.jsx)("nav",{className:E.a.DesktopOnly,children:Object(m.jsx)(N,{isAuth:e.isAuth})})]})},A=n(27),L=n.n(A),U=n(36),H=function(e){var t=[L.a.sideDrawer,L.a.close];return e.open&&(t=[L.a.sideDrawer,L.a.open]),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(U.a,{show:e.open,clicked:e.closed}),Object(m.jsxs)("div",{className:t.join(" "),children:[Object(m.jsx)("div",{className:L.a.Logo,children:Object(m.jsx)(v,{clicked:e.closed})}),Object(m.jsx)("nav",{children:Object(m.jsx)(N,{isAuth:e.isAuth,clicked:e.closed})})]})]})},F=Object(s.b)((function(e){return{isAuth:null!==e.auth.token}}))((function(e){var t=Object(r.useState)(!1),n=Object(f.a)(t,2),c=n[0],a=n[1];return Object(m.jsxs)(O.a,{children:[Object(m.jsx)(R,{isAuth:e.isAuth,clicked:function(){a((function(e){return{showSideDrawer:!e.showSideDrawer}}))}}),Object(m.jsx)(H,{isAuth:e.isAuth,open:c,closed:function(){a(!1)}}),Object(m.jsx)("main",{className:h.a.ToolBar,children:e.children})]})})),M=n(61),G=n(39),P=n.n(G),q=function(e){return Object(m.jsxs)("div",{className:P.a.BuildControl,children:[Object(m.jsx)("h3",{children:e.label}),Object(m.jsx)("button",{className:P.a.Less,onClick:e.remove,disabled:e.disabled,children:"Less"}),Object(m.jsx)("button",{className:P.a.more,onClick:e.add,children:"More"})]})},J=n(40),z=n.n(J),Z=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],W=function(e){return Object(m.jsxs)("div",{className:z.a.BuildControls,children:[Object(m.jsxs)("p",{children:["Burger price: ",Object(m.jsxs)("strong",{children:[e.price.toFixed(2),"$"]})]}),Object(m.jsx)("div",{className:z.a.controlsContainer,children:Z.map((function(t){return Object(m.jsx)(q,{label:t.label,add:function(){return e.ingredientsAdd(t.type)},remove:function(){return e.ingredientsRemove(t.type)},disabled:e.disabled[t.type],price:e.price},t.label)}))}),Object(m.jsx)("button",{className:z.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered,children:e.isAuthanticated?"ORDER NOW":"PLEASE, LOGIN"})]})},Q=n(37),Y=n(41),V=n(50),$=n.n(V),K=function(e){var t=e.ingredients,n=e.continuePurchasing,r=e.CancelPurchasing,c=e.price,a=Object.keys(t).map((function(e){return Object(m.jsxs)("li",{children:[Object(m.jsxs)("span",{children:[e,":"]}),Object(m.jsxs)("span",{children:[" ",t[e]]})]},e)}));return Object(m.jsxs)(O.a,{children:[Object(m.jsx)("h3",{children:"Your order"}),Object(m.jsx)("p",{children:"A delicius burger with:"}),Object(m.jsx)("ul",{children:a}),Object(m.jsx)("p",{children:Object(m.jsxs)("strong",{children:["Total price: ",Object(m.jsx)("span",{style:{color:"blue"},children:c.toFixed(2)}),Object(m.jsx)("span",{style:{color:"green"},children:"$"})]})}),Object(m.jsx)("p",{children:"Continue to checkout?"}),Object(m.jsx)(Y.a,{className:$.a.Button,btnType:"Success",clicked:n,children:"Confirm"}),Object(m.jsx)(Y.a,{className:$.a.Button,btnType:"Danger",clicked:r,children:"Cancel"})]})},X=n(28),ee=n(31),te=n(51),ne=n(4),re=n(20),ce=Object(te.a)((function(e){var t=c.a.useState(!1),n=Object(f.a)(t,2),a=n[0],i=n[1],o=Object(s.c)(),u=Object(r.useCallback)((function(){o({type:ne.p})}),[o]),d=Object(s.d)((function(e){return e.burgerBuilder.ingredients})),l=Object(s.d)((function(e){return e.burgerBuilder.price})),j=Object(s.d)((function(e){return e.burgerBuilder.error})),p=Object(s.d)((function(e){return null!==e.auth.token}));c.a.useEffect((function(){u()}),[u]);var h=function(){i(!1)},g=Object(b.a)({},e.ingr);for(var x in g)g[x]=g[x]<=0;var _,v=null,k=j?Object(m.jsx)("p",{style:{color:"black",margin:"200px 0 0 50px"},children:"ingredients can't be loaded"}):Object(m.jsx)(ee.a,{});return d&&(k=Object(m.jsxs)(O.a,{children:[Object(m.jsx)(M.a,{ingredients:d}),Object(m.jsx)(W,{ingredientsAdd:function(e){return o(function(e){return{type:ne.a,ingredientName:e}}(e))},ingredientsRemove:function(e){return o(function(e){return{type:ne.u,ingredientName:e}}(e))},disabled:g,purchasable:(_=d,Object.keys(_).map((function(e){return _[e]})).reduce((function(e,t){return e+t}),0)>0),price:l,ordered:function(){p?i(!0):e.history.push("/auth")},isAuthanticated:p})]}),v=Object(m.jsx)(K,{ingredients:d,continuePurchasing:function(){e.history.push("/checkout"),o(re.e())},CancelPurchasing:h,price:l})),Object(m.jsxs)(O.a,{children:[Object(m.jsx)(Q.a,{show:a,close:h,children:v}),k]})}),X.a),ae=n(12),ie=Object(s.b)(null,(function(e){return{onLogout:function(){return e(ae.g())}}}))((function(e){var t=e.onLogout;return Object(r.useEffect)((function(){t()}),[t]),Object(m.jsx)(j.a,{to:"/"})})),oe=Object(r.lazy)((function(){return n.e(3).then(n.bind(null,117))})),se=Object(r.lazy)((function(){return n.e(5).then(n.bind(null,118))})),ue=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,115))})),de=Object(j.g)(Object(s.b)((function(e){return{isAuthanticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e(ae.b())}}}))((function(e){var t=e.onTryAutoSignup;c.a.useEffect((function(){t()}),[t]);var n=Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{path:"/auth",render:function(e){return Object(m.jsx)(ue,Object(b.a)({},e))}}),Object(m.jsx)(j.b,{path:"/",component:ce}),Object(m.jsx)(j.a,{to:"/"})]});return e.isAuthanticated&&(n=Object(m.jsxs)(j.d,{children:[Object(m.jsx)(j.b,{path:"/auth",render:function(e){return Object(m.jsx)(ue,Object(b.a)({},e))}}),Object(m.jsx)(j.b,{path:"/orders",render:function(e){return Object(m.jsx)(se,Object(b.a)({},e))}}),Object(m.jsx)(j.b,{path:"/checkout",render:function(e){return Object(m.jsx)(oe,Object(b.a)({},e))}}),Object(m.jsx)(j.b,{path:"/logout",component:ie}),Object(m.jsx)(j.b,{path:"/",component:ce}),Object(m.jsx)(j.a,{to:"/"})]})),Object(m.jsx)(F,{children:Object(m.jsx)(r.Suspense,{fallback:Object(m.jsx)(ee.a,{}),children:n})})}))),le=function(e){e&&e instanceof Function&&n.e(6).then(n.bind(null,116)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},be=n(34),je={ingredients:null,price:1,error:!1},fe={salad:.5,bacon:.7,cheese:.4,meat:1.9},Oe=function(e,t,n){return Object(b.a)(Object(b.a)({},e),{},{ingredients:Object(b.a)(Object(b.a)({},e.ingredients),{},Object(be.a)({},t.ingredientName,"+"===n?e.ingredients[t.ingredientName]+1:"-"===n?e.ingredients[t.ingredientName]-1:null)),price:"+"===n?e.price+fe[t.ingredientName]:"-"===n?e.price-fe[t.ingredientName]:null})},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.a:return Oe(e,t,"+");case ne.u:return Oe(e,t,"-");case ne.v:return Object(b.a)(Object(b.a)({},e),{},{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},price:je.price,error:!1});case ne.n:return Object(b.a)(Object(b.a)({},e),{},{error:!0});default:return e}},he=n(14),ge={orders:[],loading:!1,orderConfirmed:!1},xe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.k:return Object(he.b)(e,{loading:!0});case ne.i:return Object(he.b)(e,{orderConfirmed:!1});case ne.l:var n=Object(he.b)(t.orderData,{id:t.orderId});return Object(he.b)(e,{loading:!1,orders:e.orders.concat(n),error:!1,orderConfirmed:!0});case ne.h:return Object(he.b)(e,{loading:!1});case ne.s:return Object(he.b)(e,{loading:!0});case ne.t:return Object(he.b)(e,{orders:t.orders,loading:!1});case ne.r:return Object(he.b)(e,{loading:!1});default:return e}},_e={userId:null,token:null,error:null,loading:!1},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne.e:return Object(he.b)(e,{loading:!0,error:null});case ne.f:return Object(he.b)(e,{userId:t.userId,token:t.idToken,error:!1,loading:!1});case ne.c:return Object(he.b)(e,{error:t.error,loading:!1});case ne.d:return Object(he.b)(e,{userId:null,token:null});default:return e}},ve=n(9),ke=n.n(ve),Be=n(7),Se=n(26),Ie=n.n(Se),ye=ke.a.mark(Ce),Ne=ke.a.mark(De),Te=ke.a.mark(Ee),we=ke.a.mark(Re);function Ce(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.b)([localStorage,"removeItem"],"token");case 2:return e.next=4,Object(Be.b)([localStorage,"removeItem"],"expirationDate");case 4:return e.next=6,Object(Be.b)([localStorage,"removeItem"],"userId");case 6:return e.next=8,Object(Be.d)(Object(ae.h)());case 8:case"end":return e.stop()}}),ye)}function De(e){return ke.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Be.c)(1e3*e.expirationTime);case 2:return t.next=4,Object(Be.d)(Object(ae.g)());case 4:case"end":return t.stop()}}),Ne)}function Ee(e){var t,n,r,c;return ke.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Be.d)(Object(ae.d)());case 2:return t={email:e.email,password:e.password,returnSecureToken:!0},n="https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBlGFZ3Hke0OHMJgdrlfYabcIExiHCtxxQ",e.isSignUp&&(n="https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBlGFZ3Hke0OHMJgdrlfYabcIExiHCtxxQ"),a.prev=5,a.next=8,Ie.a.post(n,t);case 8:return r=a.sent,a.next=11,new Date((new Date).getTime()+1e3*r.data.expiresIn);case 11:return c=a.sent,a.next=14,localStorage.setItem("token",r.data.idToken);case 14:return a.next=16,localStorage.setItem("expirationDate",c);case 16:return a.next=18,localStorage.setItem("userId",r.data.localId);case 18:return a.next=20,Object(Be.d)(Object(ae.e)(r.data.localId,r.data.idToken));case 20:return a.next=22,Object(Be.d)(Object(ae.f)(r.data.expiresIn));case 22:a.next=28;break;case 24:return a.prev=24,a.t0=a.catch(5),a.next=28,Object(Be.d)(Object(ae.c)(a.t0.response.data.error));case 28:case"end":return a.stop()}}),Te,null,[[5,24]])}function Re(e){var t,n,r;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("token")){e.next=6;break}return e.next=4,Object(Be.d)(Object(ae.g)());case 4:e.next=19;break;case 6:return e.next=8,new Date(localStorage.getItem("expirationDate"));case 8:if(!((n=e.sent)<=new Date)){e.next=14;break}return e.next=12,Object(Be.d)(Object(ae.g)());case 12:e.next=19;break;case 14:return r=localStorage.getItem("userId"),e.next=17,Object(Be.d)(Object(ae.e)(r,t));case 17:return e.next=19,Object(Be.d)(Object(ae.f)((n.getTime()-(new Date).getTime())/1e3));case 19:case"end":return e.stop()}}),we)}var Ae=ke.a.mark(Le);function Le(e){var t;return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Ie.a.get("https://burger-builder-b8bbf-default-rtdb.firebaseio.com/ingredients.json");case 3:return t=e.sent,e.next=6,Object(Be.d)((n=t.data,{type:ne.v,ingredients:n}));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(Be.d)({type:ne.n});case 12:case"end":return e.stop()}var n}),Ae,null,[[0,8]])}var Ue=ke.a.mark(Fe),He=ke.a.mark(Me);function Fe(e){var t;return ke.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Be.d)(Object(re.f)());case 2:return n.prev=2,n.next=5,X.a.post("/orders.json?auth="+e.token,e.orderData);case 5:return t=n.sent,n.next=8,Object(Be.d)(Object(re.g)(t.data.name,e.orderData));case 8:n.next=14;break;case 10:return n.prev=10,n.t0=n.catch(2),n.next=14,Object(Be.d)(Object(re.d)(n.t0));case 14:case"end":return n.stop()}}),Ue,null,[[2,10]])}function Me(e){var t,n,r,c;return ke.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,Object(Be.d)(Object(re.i)());case 2:return t="?auth="+e.token+'&orderBy="userId"&equalTo="'+e.userId+'"',a.prev=3,a.next=6,X.a.get("/orders.json"+t);case 6:for(c in n=a.sent,r=[],n.data)r.push(Object(b.a)(Object(b.a)({},n.data[c]),{},{id:c}));return a.next=11,Object(Be.d)(Object(re.b)(r));case 11:a.next=17;break;case 13:return a.prev=13,a.t0=a.catch(3),a.next=17,Object(Be.d)(Object(re.a)(a.t0));case 17:case"end":return a.stop()}}),He,null,[[3,13]])}var Ge=ke.a.mark(Je),Pe=ke.a.mark(ze),qe=ke.a.mark(Ze);function Je(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.a)([Object(Be.e)(ne.o,Ce),Object(Be.e)(ne.b,De),Object(Be.e)(ne.g,Ee),Object(Be.e)(ne.m,Re)]);case 2:case"end":return e.stop()}}),Ge)}function ze(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.e)(ne.p,Le);case 2:case"end":return e.stop()}}),Pe)}function Ze(){return ke.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Be.f)(ne.j,Fe);case 2:return e.next=4,Object(Be.e)(ne.q,Me);case 4:case"end":return e.stop()}}),qe)}var We=Object(u.c)({burgerBuilder:pe,order:xe,auth:me}),Qe=Object(l.a)(),Ye=u.d,Ve=Object(u.e)(We,Ye(Object(u.a)(d.a,Qe)));Qe.run(Je),Qe.run(ze),Qe.run(Ze),i.a.render(Object(m.jsx)(s.a,{store:Ve,children:Object(m.jsx)(o.a,{children:Object(m.jsx)(de,{})})}),document.getElementById("root")),le()}],[[108,1,2]]]);
//# sourceMappingURL=main.28bd660e.chunk.js.map