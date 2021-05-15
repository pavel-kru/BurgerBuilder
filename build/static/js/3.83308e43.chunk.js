(this["webpackJsonpmy-burger"]=this["webpackJsonpmy-burger"]||[]).push([[3],{104:function(e,t,n){"use strict";var a=n(5),r=(n(1),n(105)),i=n.n(r),o=n(0);t.a=function(e){var t=null,n=[i.a.InputElement];switch(e.invalid?n.push(i.a.Invalid):n.includes(i.a.Invalid)&&n.pop(i.a.Invalid),e.elementType){case"input":t=Object(o.jsx)("input",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}));break;case"text-area":t=Object(o.jsx)("textarea",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}));break;case"select":t=Object(o.jsx)("select",{value:e.value,className:n.join(" "),onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.displayName},e.value)}))});break;default:t=Object(o.jsx)("input",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}))}return Object(o.jsx)(o.Fragment,{children:t})}},105:function(e,t,n){e.exports={InputElement:"Input_InputElement__1srPc",Invalid:"Input_Invalid__N4bnu"}},106:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1nPzo"}},107:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__9Rkiw"}},112:function(e,t,n){"use strict";n.r(t);var a=n(17),r=n(18),i=n(20),o=n(19),c=n(1),l=n.n(c),u=n(4),d=n(12),s=n(5),p=n(57),h=n(106),m=n.n(h),v=n(36),j=n(14),f=n(25),b=n(104),g=n(47),O=n(46),C=n(0),y=Object(d.b)((function(e){return{ingr:e.burgerBuilder.ingredients,price:e.burgerBuilder.price,loading:e.order.loading,confirmed:e.order.orderConfirmed,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(g.a(t,n))}}}))(Object(O.a)((function(e){var t=l.a.useState({orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},phone:{elementType:"input",elementConfig:{type:"tel",placeholder:"Your Phone Number"},value:"",validation:{required:!0,isTel:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isMail:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},house:{elementType:"input",elementConfig:{type:"text",placeholder:"Your House"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayName:"Fastest"},{value:"cheapest",displayName:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1}),n=Object(p.a)(t,2),a=n[0],r=n[1],i=[];for(var o in a.orderForm)i.push({id:o,config:a.orderForm[o]});var c=Object(C.jsxs)("form",{className:m.a.ContactData,onSubmit:function(t){t.preventDefault();var n={};for(var r in a.orderForm)n[r]=a.orderForm[r].value;var i={ingredients:e.ingr,price:e.price,orderData:n,userId:e.userId};e.onOrderBurger(i,e.token)},children:[Object(C.jsx)("h4",{children:"Enter your contact data, please."}),i.map((function(e){return Object(C.jsx)(b.a,{elementConfig:e.config.elementConfig,elementType:e.config.elementType,value:e.config.value,changed:function(t){return function(e,t){var n=Object(s.a)({},a.orderForm),i=Object(s.a)({},n[t]);i.value=e.target.value,i.touched=!0,i.valid=function(e,t){var n=!0;return t.required&&(n=""!==e.trim()&&n),t.isMail&&(n=/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(e)&&n),t.isTel&&(n=/^[\d+][\d()-]{7,19}\d$/.test(e)&&n),n}(i.value,i.validation),n[t]=i;var o=!0;for(var c in n)o=n[c].valid&&o;r({orderForm:n,formIsValid:o})}(t,e.id)},invalid:e.config.validation&&!e.config.valid&&e.config.touched},e.id)})),Object(C.jsx)(v.a,{btnType:"Success",disabled:!a.formIsValid,children:"CONFIRM"})]});e.loading&&(c=Object(C.jsx)(f.a,{}));var d=e.confirmed?Object(C.jsx)(u.a,{to:"/"}):null;return Object(C.jsxs)(C.Fragment,{children:[d,c]})}),j.a)),x=n(58),k=n(107),I=n.n(k),T=function(e){return Object(C.jsxs)("div",{className:I.a.CheckoutSummary,children:[Object(C.jsx)("h1",{children:"We hope it tastes perfect!"}),Object(C.jsx)(x.a,{ingredients:e.ingredients}),Object(C.jsx)(v.a,{btnType:"Danger",clicked:e.checkoutCanceled,children:"Cancel"}),Object(C.jsx)(v.a,{btnType:"Success",clicked:e.checkoutContinued,children:"Continue"})]})},N=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(C.jsx)(u.a,{to:"/"});if(this.props.ingr){var t=this.props.confirmed?Object(C.jsx)(u.a,{to:"/"}):null;e=Object(C.jsxs)(C.Fragment,{children:[t,Object(C.jsx)(T,{ingredients:this.props.ingr,checkoutContinued:this.checkoutContinuedHandler,checkoutCanceled:this.checkoutCanceledHandler}),Object(C.jsx)(u.b,{path:this.props.match.path+"/contact-data",component:y})]})}return e}}]),n}(c.Component);t.default=Object(d.b)((function(e){return{ingr:e.burgerBuilder.ingredients,confirmed:e.order.orderConfirmed}}))(N)}}]);
//# sourceMappingURL=3.83308e43.chunk.js.map