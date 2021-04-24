(this["webpackJsonpmy-burger"]=this["webpackJsonpmy-burger"]||[]).push([[3],{101:function(e,t,n){"use strict";var a=n(5),r=(n(1),n(102)),i=n.n(r),o=n(0);t.a=function(e){var t=null,n=[i.a.InputElement];switch(e.invalid?n.push(i.a.Invalid):n.includes(i.a.Invalid)&&n.pop(i.a.Invalid),e.elementType){case"input":t=Object(o.jsx)("input",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}));break;case"text-area":t=Object(o.jsx)("textarea",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}));break;case"select":t=Object(o.jsx)("select",{value:e.value,className:n.join(" "),onChange:e.changed,children:e.elementConfig.options.map((function(e){return Object(o.jsx)("option",{value:e.value,children:e.displayName},e.value)}))});break;default:t=Object(o.jsx)("input",Object(a.a)(Object(a.a)({},e.elementConfig),{},{value:e.value,className:n.join(" "),onChange:e.changed}))}return Object(o.jsx)(o.Fragment,{children:t})}},102:function(e,t,n){e.exports={InputElement:"Input_InputElement__1srPc",Invalid:"Input_Invalid__N4bnu"}},103:function(e,t,n){e.exports={ContactData:"ContactData_ContactData__1nPzo"}},104:function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__9Rkiw"}},109:function(e,t,n){"use strict";n.r(t);var a=n(11),r=n(12),i=n(14),o=n(13),c=n(1),l=n(4),u=n(16),s=n(5),d=n(103),p=n.n(d),h=n(33),m=n(18),v=n(43),j=n(101),f=n(45),b=n(44),g=n(0),O=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).orderHandler=function(e){e.preventDefault();var t={};for(var n in r.state.orderForm)t[n]=r.state.orderForm[n].value;var a={ingredients:r.props.ingr,price:r.props.price,orderData:t,userId:r.props.userId};r.props.onOrderBurger(a,r.props.token)},r.state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},phone:{elementType:"input",elementConfig:{type:"tel",placeholder:"Your Phone Number"},value:"",validation:{required:!0,isTel:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-mail"},value:"",validation:{required:!0,isMail:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},house:{elementType:"input",elementConfig:{type:"text",placeholder:"Your House"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayName:"Fastest"},{value:"cheapest",displayName:"Cheapest"}]},value:"fastest",valid:!0,validation:{}}},formIsValid:!1},r}return Object(r.a)(n,[{key:"checkValidity",value:function(e,t){var n=!0;if(t.required&&(n=""!==e.trim()&&n),t.isMail){n=/^[\w]{1}[\w-.]*@[\w-]+\.[a-z]{2,4}$/i.test(e)&&n}if(t.isTel){n=/^[\d+][\d()-]{7,19}\d$/.test(e)&&n}return n}},{key:"changeFormValueHandler",value:function(e,t){var n=Object(s.a)({},this.state.orderForm),a=Object(s.a)({},n[t]);a.value=e.target.value,a.touched=!0,a.valid=this.checkValidity(a.value,a.validation),n[t]=a;var r=!0;for(var i in n)r=n[i].valid&&r;this.setState({orderForm:n,formIsValid:r})}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var a=Object(g.jsxs)("form",{className:p.a.ContactData,onSubmit:this.orderHandler,children:[Object(g.jsx)("h4",{children:"Enter your contact data, please."}),t.map((function(t){return Object(g.jsx)(j.a,{elementConfig:t.config.elementConfig,elementType:t.config.elementType,value:t.config.value,changed:function(n){return e.changeFormValueHandler(n,t.id)},invalid:t.config.validation&&!t.config.valid&&t.config.touched},t.id)})),Object(g.jsx)(h.a,{btnType:"Success",disabled:!this.state.formIsValid,children:"CONFIRM"})]});this.props.loading&&(a=Object(g.jsx)(v.a,{}));var r=this.props.confirmed?Object(g.jsx)(l.a,{to:"/"}):null;return Object(g.jsxs)(g.Fragment,{children:[r,a]})}}]),n}(c.Component),C=Object(u.b)((function(e){return{ingr:e.burgerBuilder.ingredients,price:e.burgerBuilder.price,loading:e.order.loading,confirmed:e.order.orderConfirmed,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(f.a(t,n))}}}))(Object(b.a)(O,m.a)),y=n(55),k=n(104),x=n.n(k),I=function(e){return Object(g.jsxs)("div",{className:x.a.CheckoutSummary,children:[Object(g.jsx)("h1",{children:"We hope it tastes perfect!"}),Object(g.jsx)(y.a,{ingredients:e.ingredients}),Object(g.jsx)(h.a,{btnType:"Danger",clicked:e.checkoutCanceled,children:"Cancel"}),Object(g.jsx)(h.a,{btnType:"Success",clicked:e.checkoutContinued,children:"Continue"})]})},F=function(e){Object(i.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).checkoutCanceledHandler=function(){e.props.history.goBack()},e.checkoutContinuedHandler=function(){e.props.history.replace("/checkout/contact-data")},e}return Object(r.a)(n,[{key:"render",value:function(){var e=Object(g.jsx)(l.a,{to:"/"});if(this.props.ingr){var t=this.props.confirmed?Object(g.jsx)(l.a,{to:"/"}):null;e=Object(g.jsxs)(g.Fragment,{children:[t,Object(g.jsx)(I,{ingredients:this.props.ingr,checkoutContinued:this.checkoutContinuedHandler,checkoutCanceled:this.checkoutCanceledHandler}),Object(g.jsx)(l.b,{path:this.props.match.path+"/contact-data",component:C})]})}return e}}]),n}(c.Component);t.default=Object(u.b)((function(e){return{ingr:e.burgerBuilder.ingredients,confirmed:e.order.orderConfirmed}}))(F)}}]);
//# sourceMappingURL=3.a7079aff.chunk.js.map