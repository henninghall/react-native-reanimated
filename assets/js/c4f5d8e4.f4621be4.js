(window.webpackJsonp=window.webpackJsonp||[]).push([[169,76],{241:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(0),l=a.n(r),o=a(343),c=a.n(o),i=a(324),m=a(309),s=a(16),u=a(310),d=a(242),E=a.n(d),f="img/swm-react-native-reanimated-illu-kon-06.svg",h=[{title:l.a.createElement(l.a.Fragment,null,"Animate with more ease than ever before"),description:l.a.createElement(l.a.Fragment,null,"Complexity reduced from tens to just a few methods. Try it out today: Check out our ",l.a.createElement("a",{href:"docs/"},"Documentation"),".")},{title:l.a.createElement(l.a.Fragment,null,"Native Performance and Precise Animations"),description:l.a.createElement(l.a.Fragment,null,"Declare your animations in JS, but have them run on the native thread! \ud83e\uddd9 The API affords new levels of precision and detailed control of your animations. \ud83d\udd79")}];function g(e){var t=e.title,a=e.description;return l.a.createElement("div",{className:"col col--6 info-box"},l.a.createElement("h3",null,t),l.a.createElement("p",null,a))}function b(){var e=Object(s.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement("header",{className:c()("hero hero--secondary",E.a.heroBanner)},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row-hero"},l.a.createElement("div",{className:"col col--5 hero-content"},l.a.createElement("h1",{className:"hero__title"},t.title),l.a.createElement("p",{className:"hero__p"},t.tagline),l.a.createElement("div",{className:c()("hero-buttons",E.a.buttons)},l.a.createElement(m.a,{className:c()("button button--primary button--lg",E.a.getStarted),to:Object(u.a)("docs")},"View Docs"),l.a.createElement(m.a,{className:c()("button button--primary button--lg",E.a.getStarted),to:"https://blog.swmansion.com/introducing-reanimated-2-752b913af8b3"},"Read Blog Post"))),l.a.createElement("div",{className:"col col--7 hero-image",style:{backgroundImage:"url(img/swm-react-native-reanimated-illu-top-05.svg)"}}))))}function v(){return l.a.createElement("div",{className:"col col--4 section-image",style:{backgroundImage:"url("+f+")",backgroundSize:"contain",backgroundPosition:"center center",backgroundRepeat:"no-repeat"}})}function p(){return l.a.createElement("div",{className:"col col--8 section-boxes"},h&&h.length>0&&l.a.createElement("div",{className:"row box-container"},h.map((function(e,t){return l.a.createElement(g,Object(n.a)({key:t},e))}))))}t.default=function(){var e=Object(s.default)().siteConfig,t=void 0===e?{}:e;return l.a.createElement(i.a,{title:"Hello from "+t.title,description:"Description will go into a meta tag in <head />"},l.a.createElement(b,null),l.a.createElement("main",null,l.a.createElement("section",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row row--box-section"},l.a.createElement(p,null),l.a.createElement(v,null)))),l.a.createElement("section",null,l.a.createElement("div",{className:"container container--center"},l.a.createElement("div",{className:"row row--center"},l.a.createElement("div",{className:"col col--7 text--center col--bottom-section"},l.a.createElement("h2",null,"Try it out"),l.a.createElement("p",null,"Check out the documentation and learn how to quickly get up and running with Reanimated. Take a look at our API guides to familiarize with the API."),l.a.createElement("div",{className:"item screenshot-container"},l.a.createElement("img",{src:"img/3.gif",alt:"Reanimated screenshot"})),l.a.createElement("div",null,l.a.createElement(m.a,{className:c()("button button--primary button--lg",E.a.getStarted),to:"https://github.com/software-mansion/react-native-reanimated/tree/master/Example"},"Example on GitHub"),l.a.createElement(m.a,{className:c()("button button--primary button--lg",E.a.getStarted),to:"https://github.com/software-mansion-labs/reanimated-2-playground"},"Playground App")),l.a.createElement("p",null,"Or just go to"," ",l.a.createElement("a",{href:"docs/installation"},"Documentation page")," to see how you can run it locally with React Native on both Android and iOS.")))))))}},326:function(e,t,a){"use strict";var n=a(3),r=a(8),l=a(0),o=a.n(l),c=a(304),i=a(309),m=a(303),s=a(310),u=a(57),d=a.n(u),E=a(323);function f(e){var t=e.to,a=e.href,l=e.label,c=e.prependBaseUrlToHref,m=Object(r.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(s.a)(t),d=Object(s.a)(a,{forcePrependBaseUrl:!0});return o.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{href:c?d:a}:{to:u},m),l)}var h=function(e){var t=e.sources,a=e.alt;return o.a.createElement(E.a,{className:"footer__logo",alt:a,sources:t})};t.a=function(){var e=Object(m.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,r=void 0===n?[]:n,l=t.logo,u=void 0===l?{}:l,E={light:Object(s.a)(u.src),dark:Object(s.a)(u.srcDark||u.src)};return e?o.a.createElement("footer",{className:Object(c.a)("footer",{"footer--dark":"dark"===e.style})},o.a.createElement("div",{className:"container"},r&&r.length>0&&o.a.createElement("div",{className:"row footer__links"},r.map((function(e,t){return o.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?o.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?o.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?o.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):o.a.createElement("li",{key:e.href||e.to,className:"footer__item"},o.a.createElement(f,e))}))):null)}))),(u||a)&&o.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&o.a.createElement("div",{className:"margin-bottom--sm"},u.href?o.a.createElement(i.a,{href:u.href,className:d.a.footerLogoLink},o.a.createElement(h,{alt:u.alt,sources:E})):o.a.createElement(h,{alt:u.alt,sources:E})),a?o.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}}}]);