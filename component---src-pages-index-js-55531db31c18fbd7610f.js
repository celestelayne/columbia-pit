(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"3Z9Z":function(e,a,t){"use strict";var l=t("wx14"),n=t("zLVn"),r=t("TSYQ"),i=t.n(r),s=t("q1tI"),c=t.n(s),o=t("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.noGutters,d=e.as,m=void 0===d?"div":d,E=Object(n.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(o.a)(t,"row"),g=f+"-cols",p=[];return u.forEach((function(e){var a,t=E[e];delete E[e];var l="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&p.push(""+g+l+"-"+a)})),c.a.createElement(m,Object(l.a)({ref:a},E,{className:i.a.apply(void 0,[r,f,s&&"no-gutters"].concat(p))}))}));d.displayName="Row",d.defaultProps={noGutters:!1},a.a=d},"6xyR":function(e,a,t){"use strict";var l=t("wx14"),n=t("zLVn"),r=t("TSYQ"),i=t.n(r),s=t("q1tI"),c=t.n(s),o=t("vUet"),u=t("YdCC"),d=function(e){return c.a.forwardRef((function(a,t){return c.a.createElement("div",Object(l.a)({},a,{ref:t,className:i()(a.className,e)}))}))},m=t("Wzyw"),E=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.variant,u=e.as,d=void 0===u?"img":u,m=Object(n.a)(e,["bsPrefix","className","variant","as"]),E=Object(o.a)(t,"card-img");return c.a.createElement(d,Object(l.a)({ref:a,className:i()(s?E+"-"+s:E,r)},m))}));E.displayName="CardImg",E.defaultProps={variant:null};var f=E,g=d("h5"),p=d("h6"),h=Object(u.a)("card-body"),y=Object(u.a)("card-title",{Component:g}),v=Object(u.a)("card-subtitle",{Component:p}),b=Object(u.a)("card-link",{Component:"a"}),S=Object(u.a)("card-text",{Component:"p"}),w=Object(u.a)("card-header"),k=Object(u.a)("card-footer"),T=Object(u.a)("card-img-overlay"),x=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,u=e.bg,d=e.text,E=e.border,f=e.body,g=e.children,p=e.as,y=void 0===p?"div":p,v=Object(n.a)(e,["bsPrefix","className","bg","text","border","body","children","as"]),b=Object(o.a)(t,"card"),S=Object(s.useMemo)((function(){return{cardHeaderBsPrefix:b+"-header"}}),[b]);return c.a.createElement(m.a.Provider,{value:S},c.a.createElement(y,Object(l.a)({ref:a},v,{className:i()(r,b,u&&"bg-"+u,d&&"text-"+d,E&&"border-"+E)}),f?c.a.createElement(h,null,g):g))}));x.displayName="Card",x.defaultProps={body:!1},x.Img=f,x.Title=y,x.Subtitle=v,x.Body=h,x.Link=b,x.Text=S,x.Header=w,x.Footer=k,x.ImgOverlay=T;a.a=x},"9eSz":function(e,a,t){"use strict";var l=t("TqRt");a.__esModule=!0,a.default=void 0;var n,r=l(t("PJYZ")),i=l(t("VbXa")),s=l(t("8OQS")),c=l(t("pVnL")),o=l(t("q1tI")),u=l(t("17x9")),d=function(e){var a=(0,c.default)({},e),t=a.resolutions,l=a.sizes,n=a.critical;return t&&(a.fixed=t,delete a.resolutions),l&&(a.fluid=l,delete a.sizes),n&&(a.loading="eager"),a.fluid&&(a.fluid=w([].concat(a.fluid))),a.fixed&&(a.fixed=w([].concat(a.fixed))),a},m=function(e){var a=e.media;return!!a&&(y&&!!window.matchMedia(a).matches)},E=function(e){var a=e.fluid,t=e.fixed,l=f(a||t||[]);return l&&l.src},f=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var a=e.findIndex(m);if(-1!==a)return e[a];var t=e.findIndex((function(e){return void 0===e.media}));if(-1!==t)return e[t]}return e[0]},g=Object.create({}),p=function(e){var a=d(e),t=E(a);return g[t]||!1},h="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,b=new WeakMap;function S(e){return e.map((function(e){var a=e.src,t=e.srcSet,l=e.srcSetWebp,n=e.media,r=e.sizes;return o.default.createElement(o.default.Fragment,{key:a},l&&o.default.createElement("source",{type:"image/webp",media:n,srcSet:l,sizes:r}),o.default.createElement("source",{media:n,srcSet:t,sizes:r}))}))}function w(e){var a=[],t=[];return e.forEach((function(e){return(e.media?a:t).push(e)})),[].concat(a,t)}function k(e){return e.map((function(e){var a=e.src,t=e.media,l=e.tracedSVG;return o.default.createElement("source",{key:a,media:t,srcSet:l})}))}function T(e){return e.map((function(e){var a=e.src,t=e.media,l=e.base64;return o.default.createElement("source",{key:a,media:t,srcSet:l})}))}function x(e,a){var t=e.srcSet,l=e.srcSetWebp,n=e.media,r=e.sizes;return"<source "+(a?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(a?l:t)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var I=function(e,a){var t=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var a=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),b.delete(e.target),a())}}))}),{rootMargin:"200px"})),n);return t&&(t.observe(e),b.set(e,a)),function(){t.unobserve(e),b.delete(e)}},C=function(e){var a=e.src?'src="'+e.src+'" ':'src="" ',t=e.sizes?'sizes="'+e.sizes+'" ':"",l=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',i=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",o=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?x(e,!0):"")+x(e)})).join("")+"<img "+o+i+s+t+l+a+r+n+c+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},N=o.default.forwardRef((function(e,a){var t=e.src,l=e.imageVariants,n=e.generateSources,r=e.spreadProps,i=e.ariaHidden,s=o.default.createElement(O,(0,c.default)({ref:a,src:t},r,{ariaHidden:i}));return l.length>1?o.default.createElement("picture",null,n(l),s):s})),O=o.default.forwardRef((function(e,a){var t=e.sizes,l=e.srcSet,n=e.src,r=e.style,i=e.onLoad,u=e.onError,d=e.loading,m=e.draggable,E=e.ariaHidden,f=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return o.default.createElement("img",(0,c.default)({"aria-hidden":E,sizes:t,srcSet:l,src:n},f,{onLoad:i,onError:u,ref:a,loading:d,draggable:m,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));O.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function a(a){var t;(t=e.call(this,a)||this).seenBefore=y&&p(a),t.isCritical="eager"===a.loading||a.critical,t.addNoScript=!(t.isCritical&&!a.fadeIn),t.useIOSupport=!h&&v&&!t.isCritical&&!t.seenBefore;var l=t.isCritical||y&&(h||!t.useIOSupport);return t.state={isVisible:l,imgLoaded:!1,imgCached:!1,fadeIn:!t.seenBefore&&a.fadeIn},t.imageRef=o.default.createRef(),t.placeholderRef=a.placeholderRef||o.default.createRef(),t.handleImageLoaded=t.handleImageLoaded.bind((0,r.default)(t)),t.handleRef=t.handleRef.bind((0,r.default)(t)),t}(0,i.default)(a,e);var t=a.prototype;return t.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},t.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},t.handleRef=function(e){var a=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(a.props);a.state.isVisible||"function"!=typeof a.props.onStartLoad||a.props.onStartLoad({wasCached:e}),a.setState({isVisible:!0},(function(){a.setState({imgLoaded:e,imgCached:!(!a.imageRef.current||!a.imageRef.current.currentSrc)})}))})))},t.handleImageLoaded=function(){var e,a,t;e=this.props,a=d(e),(t=E(a))&&(g[t]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},t.render=function(){var e=d(this.props),a=e.title,t=e.alt,l=e.className,n=e.style,r=void 0===n?{}:n,i=e.imgStyle,s=void 0===i?{}:i,u=e.placeholderStyle,m=void 0===u?{}:u,E=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,b=e.itemProp,w=e.loading,x=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,H=(0,c.default)({opacity:I?1:0,transition:P?"opacity "+y+"ms":"none"},s),R="boolean"==typeof h?"lightgray":h,j={transitionDelay:y+"ms"},L=(0,c.default)({opacity:this.state.imgLoaded?0:1},P&&j,s,m),W={title:a,alt:this.state.isVisible?"":t,style:L,className:E,itemProp:b};if(g){var A=g,G=f(g);return o.default.createElement(v,{className:(l||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:G.maxWidth?G.maxWidth+"px":null,maxHeight:G.maxHeight?G.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},o.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),R&&o.default.createElement(v,{"aria-hidden":!0,title:a,style:(0,c.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&j)}),G.base64&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:G.base64,spreadProps:W,imageVariants:A,generateSources:T}),G.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:G.tracedSVG,spreadProps:W,imageVariants:A,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,S(A),o.default.createElement(O,{alt:t,title:a,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:t,title:a,loading:w},G,{imageVariants:A}))}}))}if(p){var M=p,K=f(p),z=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:K.width,height:K.height},r);return"inherit"===r.display&&delete z.display,o.default.createElement(v,{className:(l||"")+" gatsby-image-wrapper",style:z,ref:this.handleRef,key:"fixed-"+JSON.stringify(K.srcSet)},R&&o.default.createElement(v,{"aria-hidden":!0,title:a,style:(0,c.default)({backgroundColor:R,width:K.width,opacity:this.state.imgLoaded?0:1,height:K.height},P&&j)}),K.base64&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:K.base64,spreadProps:W,imageVariants:M,generateSources:T}),K.tracedSVG&&o.default.createElement(N,{ariaHidden:!0,ref:this.placeholderRef,src:K.tracedSVG,spreadProps:W,imageVariants:M,generateSources:k}),this.state.isVisible&&o.default.createElement("picture",null,S(M),o.default.createElement(O,{alt:t,title:a,width:K.width,height:K.height,sizes:K.sizes,src:K.src,crossOrigin:this.props.crossOrigin,srcSet:K.srcSet,style:H,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:b,loading:w,draggable:x})),this.addNoScript&&o.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:C((0,c.default)({alt:t,title:a,loading:w},K,{imageVariants:M}))}}))}return null},a}(o.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var H=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),R=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function j(e){return function(a,t,l){var n;if(!a.fixed&&!a.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+l+"`, but their values are both `undefined`.");u.default.checkPropTypes(((n={})[t]=e,n),a,"prop",l)}}P.propTypes={resolutions:H,sizes:R,fixed:j(u.default.oneOfType([H,u.default.arrayOf(H)])),fluid:j(u.default.oneOfType([R,u.default.arrayOf(R)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var L=P;a.default=L},JI6e:function(e,a,t){"use strict";var l=t("wx14"),n=t("zLVn"),r=t("TSYQ"),i=t.n(r),s=t("q1tI"),c=t.n(s),o=t("vUet"),u=["xl","lg","md","sm","xs"],d=c.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,s=e.as,d=void 0===s?"div":s,m=Object(n.a)(e,["bsPrefix","className","as"]),E=Object(o.a)(t,"col"),f=[],g=[];return u.forEach((function(e){var a,t,l,n=m[e];if(delete m[e],"object"==typeof n&&null!=n){var r=n.span;a=void 0===r||r,t=n.offset,l=n.order}else a=n;var i="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+E+i:""+E+i+"-"+a),null!=l&&g.push("order"+i+"-"+l),null!=t&&g.push("offset"+i+"-"+t)})),f.length||f.push(E),c.a.createElement(d,Object(l.a)({},m,{ref:a,className:i.a.apply(void 0,[r].concat(f,g))}))}));d.displayName="Col",a.a=d},RXBc:function(e,a,t){"use strict";t.r(a);var l=t("q1tI"),n=t.n(l),r=(t("Wbzz"),t("3Z9Z")),i=t("JI6e"),s=t("wx14"),c=t("zLVn"),o=t("TSYQ"),u=t.n(o),d=t("vUet"),m=n.a.forwardRef((function(e,a){var t,l=e.as,r=void 0===l?"div":l,i=e.className,o=e.fluid,m=e.bsPrefix,E=Object(c.a)(e,["as","className","fluid","bsPrefix"]),f=((t={})[m=Object(d.a)(m,"jumbotron")]=!0,t[m+"-fluid"]=o,t);return n.a.createElement(r,Object(s.a)({ref:a},E,{className:u()(i,f)}))}));m.defaultProps={fluid:!1},m.displayName="Jumbotron";var E=m,f=t("JCAc"),g=t("ILyh"),p=n.a.createContext(null);p.displayName="AccordionContext";var h=p;var y=n.a.forwardRef((function(e,a){var t=e.as,r=void 0===t?"button":t,i=e.children,o=e.eventKey,u=e.onClick,d=Object(c.a)(e,["as","children","eventKey","onClick"]),m=function(e,a){var t=Object(l.useContext)(h),n=Object(l.useContext)(g.a);return function(l){n&&n(e===t?null:e,l),a&&a(l)}}(o,u);return"button"===r&&(d.type="button"),n.a.createElement(r,Object(s.a)({ref:a,onClick:m},d),i)})),v=t("vYJ8"),b=n.a.forwardRef((function(e,a){var t=e.children,r=e.eventKey,i=Object(c.a)(e,["children","eventKey"]),o=Object(l.useContext)(h);return n.a.createElement(v.a,Object(s.a)({ref:a,in:o===r},i),n.a.createElement("div",null,n.a.Children.only(t)))}));b.displayName="AccordionCollapse";var S=b,w=n.a.forwardRef((function(e,a){var t=Object(f.a)(e,{activeKey:"onSelect"}),l=t.as,r=void 0===l?"div":l,i=t.activeKey,o=t.bsPrefix,m=t.children,E=t.className,p=t.onSelect,y=Object(c.a)(t,["as","activeKey","bsPrefix","children","className","onSelect"]),v=u()(E,Object(d.a)(o,"accordion"));return n.a.createElement(h.Provider,{value:i||null},n.a.createElement(g.a.Provider,{value:p||null},n.a.createElement(r,Object(s.a)({ref:a},y,{className:v}),m)))}));w.displayName="Accordion",w.Toggle=y,w.Collapse=S;var k=w,T=t("6xyR"),x=t("Bl7J"),I=(t("9eSz"),t("vrFN"));a.default=function(){return n.a.createElement(x.a,null,n.a.createElement(r.a,null,n.a.createElement(I.a,{title:"Public Interest Technology",description:"A Graduate Seminar of the computer science, journalism and architecture departments.",pathname:"/"}),n.a.createElement(i.a,null,n.a.createElement(E,null,n.a.createElement("h1",null,"Public Interest Technology:",n.a.createElement("br",null),"Cities, Design, Code, Reporting"),n.a.createElement("h2",null,"GSAPP A6883-1",n.a.createElement("br",null),"COMS 6998 SEC 006 Advanced Web Design Studio",n.a.createElement("br",null),"Friday, 11AM - 1PM",n.a.createElement("br",null),"Some Tuesdays 6-8PM, Dates TBD:  Guest Lectures",n.a.createElement("br",null),"Office Hours: By appointment")),n.a.createElement(k,null,n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"0"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 01: 09/11/2020"),n.a.createElement(i.a,{md:"auto"},"Introduction to Public Interest Technology"),n.a.createElement(i.a,{style:{color:"red"}},n.a.createElement("small",null,"HW DUE 09/18"))))),n.a.createElement(k.Collapse,{eventKey:"0"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Faculty & Syllabus Introductions"),n.a.createElement("li",null,"PIT Mission & History"),n.a.createElement("li",null,"Mini Human Centered Design Exercise"),n.a.createElement("li",null,"Introduce PIT ",n.a.createElement("strong",null,"Double Diamond")," questions"),n.a.createElement("li",null,"Assignments due next week at 11AM:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Complete pre-readings"),n.a.createElement("li",null,"Write up design exercise")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"1"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 02: 09/18/2020"),n.a.createElement(i.a,{md:"auto"},"How I Built This..."),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"1"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small group discussion of pre-readings."),n.a.createElement("li",null,"Large group report back."),n.a.createElement("li",null,"Journalism PIT Example: ",n.a.createElement("em",null,"How I Built This...")),n.a.createElement("li",null,"Architecture PIT Example: ",n.a.createElement("em",null,"How I Built This...")),n.a.createElement("li",null,"Q & A: Large Group Discussio."),n.a.createElement("li",null,"Faculty Introduces the prompts. Students select their preference."),n.a.createElement("li",null,"Faculty Introduces RESEARCH homework."),n.a.createElement("li",null,"Assignments due next week at 11AM:"),n.a.createElement("ul",null,n.a.createElement("li",null,"Project Groups meet virtually."),n.a.createElement("li",null,"Do background research on chosen topic."),n.a.createElement("li",null,"Write interview questions.")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"2"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 03: 09/25/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 01 - Research"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"2"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present RESEARCH homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Lecture: Human Centered Design & HCD Process Walkthrough"),n.a.createElement("li",null,"Assignment due next week at 11AM:"),n.a.createElement("ul",null,n.a.createElement("p",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Insights into the domain"),n.a.createElement("li",null,"Insights into the stakeholders (e.g. social workers, librarians…)"),n.a.createElement("li",null,"Determine what has already been done."),n.a.createElement("li",null,"Determine the gaps"),n.a.createElement("p",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"Data Gathering"),n.a.createElement("li",null,"Site Analysis"),n.a.createElement("li",null,"Field Work"),n.a.createElement("li",null,"Surveys"),n.a.createElement("li",null,"Ethnography"),n.a.createElement("li",null,"Asset Mapping"),n.a.createElement("p",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"Are we centralizing people who are normally marginalized by design?"),n.a.createElement("li",null,"Is there existing bias in the data?"),n.a.createElement("li",null,"Who is being included/excluded?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"3"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 04: 10/02/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 02 - Engagement"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"3"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present ENGAGEMENT homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Faculty introduces DEFINE homework"),n.a.createElement("li",null,"Assignment due next week at 11AM:"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Gather local knowledge, lived experience"),n.a.createElement("li",null,"Establish a common base of knowledge "),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"1:1 Conversations"),n.a.createElement("li",null,"Participatory Design Workshops"),n.a.createElement("li",null,"Mental Maps (Kevin Lynch)"),n.a.createElement("li",null,"User Interviews"),n.a.createElement("li",null,"Expert Interviews"),n.a.createElement("li",null,"Co-Design"),n.a.createElement("li",null,"User Journey Maps (storytelling)"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"Is there an established common language?"),n.a.createElement("li",null,"How are we engaging people without access to the internet or smart technologies?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"4"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 05: 10/09/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 03 - Define"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"4"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present DEFINE homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Faculty introduces IDEATE homework"),n.a.createElement("li",null,"Assignment (due next week)"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Synthesize ideas (find patterns/label things)"),n.a.createElement("li",null,"Map the  design space / world view"),n.a.createElement("li",null,"Develop your ‘How Might We...’ or “What if…” scenarios"),n.a.createElement("li",null,"Develop a design brief"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"Affinity Diagrams"),n.a.createElement("li",null,"MoSCoW Maps"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"What are the unintended consequences of these ideas?"),n.a.createElement("li",null,"What is the larger systemic issue that this problem sits in?"),n.a.createElement("li",null,"What facets of the larger problem are being overlooked?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"5"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 06: 10/16/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 04 - Ideate"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"5"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present IDEATE homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Faculty introduces PROTOTYPE homework"),n.a.createElement("li",null,"Assignment (due next week)"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Come up with multiple, diverse ideas"),n.a.createElement("li",null,"Involve all stakeholders"),n.a.createElement("li",null,"Democratic process to represent participant’s ideas and perspectives  are reflected "),n.a.createElement("li",null,"No idea is too radical."),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"System Diagrams"),n.a.createElement("li",null,"Maps"),n.a.createElement("li",null,"Data Visualizations"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"What is the larger systemic issue that this problem sits in?"),n.a.createElement("li",null,"What facets of the larger problem are being overlooked?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"6"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 07: 10/23/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 05 - Prototype"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"6"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present PROTOTYPE homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Faculty introduces TEST homework"),n.a.createElement("li",null,"Assignment (due next week)"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Understand whether these ideas can be implemented"),n.a.createElement("li",null,"You  must have design alternatives"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"Schematic"),n.a.createElement("li",null,"Pen & Paper"),n.a.createElement("li",null,"Storytelling"),n.a.createElement("li",null,"Narrative"),n.a.createElement("li",null,"Medium (app, map, website, sensor, algorithm, process, system, etc...)"),n.a.createElement("li",null,"Simulate"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"Tech Risk Zones (surveillance, privacy, disinformation.)"),n.a.createElement("li",null,"What are the unintended consequences of these ideas?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"7"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 08: 10/30/2020"),n.a.createElement(i.a,{md:"auto"},"Stage 06 - Test"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"7"},n.a.createElement(T.a.Body,null,n.a.createElement("ul",null,n.a.createElement("li",null,"Small Group: Present TEST homework"),n.a.createElement("li",null,"Large Group report back"),n.a.createElement("li",null,"Assignment (due next week)"),n.a.createElement("ul",null,n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Goals")),n.a.createElement("li",null,"Evaluate the effectiveness of various prototypes"),n.a.createElement("li",null,"Further understand the domain and interaction with the community"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Methods")),n.a.createElement("li",null,"Accessibility"),n.a.createElement("li",null,"A/B Testing"),n.a.createElement("li",null,"Usability Audit (Jakob Nielsen)"),n.a.createElement("li",null,"Hallway Testing (intercept)"),n.a.createElement("li",null,"Eye Tracking"),n.a.createElement("li",null,"Think Aloud Protocol"),n.a.createElement("li",null,"Make sure the testing audience reflects the user audience"),n.a.createElement("li",null,"Go beyond clickbait (performance metrics, usability metrics, engagement metrics..?)"),n.a.createElement("li",{className:"list-unstyled"},n.a.createElement("strong",null,"Questions")),n.a.createElement("li",null,"Evaluation based on Tech Risk Zones (surveillance, privacy, disinformation, etc…)"),n.a.createElement("li",null,"What is the value system implied by the test?")))))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"8"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 09: 11/06/2020"),n.a.createElement(i.a,{md:"auto"},"Iterate & Test"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"8"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"Studio Time")))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"9"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 10: 11/13/2020"),n.a.createElement(i.a,{md:"auto"},"Iterate & Test"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"9"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"Studio Time")))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"10"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 11: 11/20/2020"),n.a.createElement(i.a,{md:"auto"},"Write Up"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"10"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"Studio Time")))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"11"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 12: 11/27/2020"),n.a.createElement(i.a,{md:"auto"},"No Class -- Thanksgiving Holiday"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"11"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"No Class -- Thanksgiving Holiday")))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"12"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 13: 12/04/2020"),n.a.createElement(i.a,{md:"auto"},"Write Up"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"12"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"Studio Time")))),n.a.createElement(T.a,null,n.a.createElement(T.a.Header,null,n.a.createElement(k.Toggle,{as:T.a.Header,variant:"link",eventKey:"12"},n.a.createElement(r.a,null,n.a.createElement(i.a,{md:"auto"},"Week 14: 12/11/2020"),n.a.createElement(i.a,{md:"auto"},"Final Presentations"),n.a.createElement(i.a,null)))),n.a.createElement(k.Collapse,{eventKey:"12"},n.a.createElement(T.a.Body,null,n.a.createElement("p",null,"Final Presentations"))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-55531db31c18fbd7610f.js.map