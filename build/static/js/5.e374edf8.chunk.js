(this["webpackJsonpmy-burger"]=this["webpackJsonpmy-burger"]||[]).push([[5],{105:function(e,r,n){e.exports={Order:"Order_Order__pQc3T"}},110:function(e,r,n){"use strict";n.r(r);var t=n(11),s=n(12),i=n(14),c=n(13),o=n(1),u=n(16),a=n(105),d=n.n(a),p=n(0),j=function(e){var r=[];for(var n in e.ingredients)r.push({name:n,amount:e.ingredients[n]});var t=r.map((function(e){return Object(p.jsxs)("span",{children:[e.name," (",e.amount,")"]},e.name)}));return Object(p.jsxs)("div",{className:d.a.Order,children:[Object(p.jsxs)("p",{children:["Ingredients:",Object(p.jsx)("br",{}),t]}),Object(p.jsxs)("p",{children:["Price: ",Object(p.jsxs)("strong",{children:[e.price.toFixed(2)," $"]})]})]})},b=n(18),h=n(44),O=n(45),l=n(43),f=function(e){Object(i.a)(n,e);var r=Object(c.a)(n);function n(){return Object(t.a)(this,n),r.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=Object(p.jsx)(l.a,{});return this.props.loading||(e=Object(p.jsx)("div",{style:{marginTop:"100px"},children:this.props.orders.map((function(e){return Object(p.jsx)(j,{ingredients:e.ingredients,price:+e.price},e.id)}))})),e}}]),n}(o.Component);r.default=Object(u.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(r,n){return e(O.c(r,n))}}}))(Object(h.a)(f,b.a))}}]);
//# sourceMappingURL=5.e374edf8.chunk.js.map