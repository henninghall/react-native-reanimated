(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{150:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(3),a=t(8),r=(t(0),t(302)),i={id:"code",title:"Animated.Code",sidebar_label:"Animated.Code"},d={unversionedId:"code",id:"version-1.x.x/code",isDocsHomePage:!1,title:"Animated.Code",description:"Animated.Code component allows you to define reanimated nodes that you want to execute when their input nodes updates, but aren't necessarily strictly related to some view properties and hence it does not feel right to place them under translate or other prop of an Animated.View. This component renders null, so you can place it in any place you want in your render method. It is required that your code is put inside component as we rely on componentDidMount and componentWillUnmount callbacks to install and cleanup animated nodes. Note that the code you put is going to be executed only once. We currently have no way of telling if your code changes and so it will only be run in componentDidMount. If you wish for your reanimated nodes to be updated when the component updates, you can update the key property of the Animated.Code component, which will effectively unmount old and mount new versions of it in the React tree. You can provide dependencies key which works just like second argueent in useCode.",source:"@site/versioned_docs/version-1.x.x/code.md",slug:"/code",permalink:"/react-native-reanimated/docs/1.x.x/code",version:"1.x.x",sidebar_label:"Animated.Code",sidebar:"version-1.x.x/docs",previous:{title:"View, Props, etc",permalink:"/react-native-reanimated/docs/1.x.x/view"}},c=[{value:"<code>Animated.useCode</code>",id:"animatedusecode",children:[]}],s={toc:c};function l(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component allows you to define reanimated nodes that you want to execute when their input nodes updates, but aren't necessarily strictly related to some view properties and hence it does not feel right to place them under ",Object(r.b)("inlineCode",{parentName:"p"},"translate")," or other prop of an ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.View"),". This component renders ",Object(r.b)("inlineCode",{parentName:"p"},"null"),", so you can place it in any place you want in your render method. It is required that your code is put inside component as we rely on ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount")," and ",Object(r.b)("inlineCode",{parentName:"p"},"componentWillUnmount")," callbacks to install and cleanup animated nodes. Note that the code you put is going to be executed only once. We currently have no way of telling if your code changes and so it will only be run in ",Object(r.b)("inlineCode",{parentName:"p"},"componentDidMount"),". If you wish for your reanimated nodes to be updated when the component updates, you can update the ",Object(r.b)("inlineCode",{parentName:"p"},"key")," property of the ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component, which will effectively unmount old and mount new versions of it in the React tree. You can provide ",Object(r.b)("inlineCode",{parentName:"p"},"dependencies")," key which works just like second argueent in ",Object(r.b)("inlineCode",{parentName:"p"},"useCode"),"."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"<Animated.Code>\n  {() =>\n    block([\n      set(this.transX1, add(multiply(-1, this._transX))),\n      set(this.transX2, add(multiply(-2, this._transX), 120)),\n      set(this.transX3, sub(multiply(2, this._transX), 120)),\n      set(this.transX4, add(multiply(1, this._transX))),\n    ])\n  }\n</Animated.Code>\n")),Object(r.b)("p",null,"or:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"<Animated.Code\n  exec={block([\n    set(this.transX1, add(multiply(-1, this._transX))),\n    set(this.transX2, add(multiply(-2, this._transX), 120)),\n    set(this.transX3, sub(multiply(2, this._transX), 120)),\n    set(this.transX4, add(multiply(1, this._transX))),\n  ])}\n/>\n")),Object(r.b)("h2",{id:"animatedusecode"},Object(r.b)("inlineCode",{parentName:"h2"},"Animated.useCode")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"useCode")," hook acts as an alternative to the ",Object(r.b)("inlineCode",{parentName:"p"},"Animated.Code")," component."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"Animated.useCode(\n    () => Node | Node[] | boolean | null | undefined,\n    [...dependencies]\n)\n")),Object(r.b)("p",null,"It's passed as 1st parameter a factory function that should return an optional animated node, or array of nodes (which will be then placed in a ",Object(r.b)("inlineCode",{parentName:"p"},"block")," node), and as 2nd parameter, an array of dependencies. It will update that node, both when the component mounts and every time a value in that array changes. It does nothing on versions of React Native that don't support hooks (<0.59)."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-js"},"const [animated, setAnimated] = React.useState(false);\nconst [offset, setOffset] = React.useState(20);\n\nAnimated.useCode(\n  () =>\n    animated && [\n      //...\n      set(transX1, add(_transX, offset)),\n    ],\n  [animated, offset]\n);\n")),Object(r.b)("p",null,"We recommend to use ",Object(r.b)("inlineCode",{parentName:"p"},"useCode()")," with the ",Object(r.b)("inlineCode",{parentName:"p"},"react-hooks/exhaustive-deps")," ",Object(r.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/eslint-plugin-react-hooks"},"eslint rule"),"."))}l.isMDXComponent=!0},302:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var o=t(0),a=t.n(o);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=a.a.createContext({}),l=function(e){var n=a.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=l(e.components);return a.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||r;return t?a.a.createElement(b,d(d({ref:n},s),{},{components:t})):a.a.createElement(b,d({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,i=new Array(r);i[0]=m;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,i[1]=d;for(var s=2;s<r;s++)i[s]=t[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);