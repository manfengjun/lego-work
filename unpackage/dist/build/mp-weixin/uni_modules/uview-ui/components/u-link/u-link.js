(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["uni_modules/uview-ui/components/u-link/u-link"],{"17c7":function(t,n,e){},"29b1":function(t,n,e){"use strict";var i=e("17c7"),u=e.n(i);u.a},6513:function(t,n,e){"use strict";e.r(n);var i=e("7732"),u=e("673b");for(var o in u)"default"!==o&&function(t){e.d(n,t,(function(){return u[t]}))}(o);e("29b1");var a,c=e("f0c5"),r=Object(c["a"])(u["default"],i["b"],i["c"],!1,null,"43f120f2",null,!1,i["a"],a);n["default"]=r.exports},"673b":function(t,n,e){"use strict";e.r(n);var i=e("d299"),u=e.n(i);for(var o in i)"default"!==o&&function(t){e.d(n,t,(function(){return i[t]}))}(o);n["default"]=u.a},7732:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return u})),e.d(n,"c",(function(){return o})),e.d(n,"a",(function(){return i}));var u=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__get_style([t.linkStyle,t.$u.addStyle(t.customStyle)]));t.$mp.data=Object.assign({},{$root:{s0:e}})},o=[]},d299:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=u(e("df40"));function u(t){return t&&t.__esModule?t:{default:t}}var o={name:"u-link",mixins:[t.$u.mpMixin,t.$u.mixin,i.default],computed:{linkStyle:function(){var n={color:this.color,fontSize:t.$u.addUnit(this.fontSize),lineHeight:t.$u.addUnit(t.$u.getPx(this.fontSize)+2),textDecoration:this.underLine?"underline":"none"};return n}},methods:{openLink:function(){var n=this;t.setClipboardData({data:this.href,success:function(){t.hideToast(),n.$nextTick((function(){t.$u.toast(n.mpTips)}))}}),this.$emit("click")}}};n.default=o}).call(this,e("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'uni_modules/uview-ui/components/u-link/u-link-create-component',
    {
        'uni_modules/uview-ui/components/u-link/u-link-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("6513"))
        })
    },
    [['uni_modules/uview-ui/components/u-link/u-link-create-component']]
]);
