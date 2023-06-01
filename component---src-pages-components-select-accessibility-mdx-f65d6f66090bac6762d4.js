"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[45195],{28399:function(e,t,a){a.d(t,{Z:function(){return A}});var i=a(67294),n=a(88650),s=a.n(n),o=a(1597),l=a(64905),c=a(68636),r=a(75900),d=a.n(r);var p=e=>{let{title:t,theme:a,tabs:n=[]}=e;return i.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:n}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:l,branch:c}=a||n,r=`${s}/edit/${c}${l}/src/pages${t}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:r},"Edit this page on GitHub"))):null},b=a(56328),g=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,n=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),l=t===n,c=new RegExp(`${n}/?(#.*)?$`),r=a.replace(c,t);return i.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},i.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${r}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(i.Component);var h=u,f=a(17680),y=a(75387),k=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?i.createElement(k.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(k.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var A=e=>{let{pageContext:t,children:a,location:n,Title:r}=e;const{frontmatter:d={},relativePagePath:g,titleType:u}=t,{tabs:k,title:A,theme:C,description:E,keywords:N,date:v}=d,{interiorTheme:x}=(0,y.Z)(),{site:{pathPrefix:T}}=(0,o.useStaticQuery)("2456312558"),B=T?n.pathname.replace(T,""):n.pathname,L=k?B.split("/").filter(Boolean).slice(-1)[0]||s()(k[0],{lower:!0}):"",P=C||x;return i.createElement(c.Z,{tabs:k,homepage:!1,theme:P,pageTitle:A,pageDescription:E,pageKeywords:N,titleType:u},i.createElement(p,{title:r?i.createElement(r,null):A,label:"label",tabs:k,theme:P}),k&&i.createElement(h,{title:A,slug:B,tabs:k,currentTab:L}),i.createElement(f.Z,{padded:!0},a,i.createElement(m,{relativePagePath:g}),i.createElement(w,{date:v})),i.createElement(b.Z,{pageContext:t,location:n,slug:B,tabs:k,currentTab:L}),i.createElement(l.Z,null))}},12276:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return f}});var i=a(45987),n=(a(67294),a(64983)),s=a(28399);a(90039);const o=["components"],l={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},r=c("PageDescription"),d=c("AnchorLinks"),p=c("AnchorLink"),m=c("Row"),b=c("Column"),g=c("Caption"),u={_frontmatter:l},h=s.Z;function f(e){let{components:t}=e,a=(0,i.Z)(e,o);return(0,n.kt)(h,Object.assign({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(r,{mdxType:"PageDescription"},(0,n.kt)("p",null,"No accessibility annotations are needed for selects, but keep these\nconsiderations in mind if you are modifying Carbon or creating a custom\ncomponent.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),(0,n.kt)("h3",null,"Keyboard interaction"),(0,n.kt)("p",null,"A select component is reached by ",(0,n.kt)("inlineCode",{parentName:"p"},"Tab")," and opened with ",(0,n.kt)("inlineCode",{parentName:"p"},"Space"),", or the ",(0,n.kt)("inlineCode",{parentName:"p"},"Up")," or\n",(0,n.kt)("inlineCode",{parentName:"p"},"Down")," arrow keys. The currently selected option will have focus. The arrow keys\nare also used for navigating between options. Users can jump about in the list\nby pressing individual letter keys, which will reposition to the first option\nbeginning with that letter. Options are selected with ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," keys,\nwhich also close the select. Pressing ",(0,n.kt)("inlineCode",{parentName:"p"},"Esc")," closes a select without changing the\nselected option."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAACxLAAAsSwGlPZapAAABC0lEQVQoz51TTUsDMRDN//8TXsSj4MUiFUShB6EF6aHgB+tBLEXdbRM3m2QzyZNp3ZqWrFgH3mEyyePNm4kAgBjjDgIFhBCQ1v4aIk32H/7kBxKmKnxLuB0+YXxVIKc+RU6ESIutIzjrcXY0wfnx3feDfjU5K0RasMYjhAiKDs43MMaCiLLo81ikPtmmRS0t5OcSi7c5nDcwtkFd19Bab6GUgjEm33J3yGTkA4gCLk+nGF3MML55RPHwCqVWKD9KlOUGVVVBSpn1UXTe8TA4mHRwMsVocI/J9TNeind4ctC62SpkdYy07R1C9u7QfesbzJqQJ8vD6C5sFjuu8dva9LbMBOzhf37G/tp8Ad7dX+49eJTDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of select keyboard interaction",title:"example of select keyboard interaction",src:"/static/d86fb95dbf04b5ec1aaa41c863bc69ff/3cbba/select-accessibility-1.png",srcSet:["/static/d86fb95dbf04b5ec1aaa41c863bc69ff/7fc1e/select-accessibility-1.png 288w","/static/d86fb95dbf04b5ec1aaa41c863bc69ff/a5df1/select-accessibility-1.png 576w","/static/d86fb95dbf04b5ec1aaa41c863bc69ff/3cbba/select-accessibility-1.png 1152w","/static/d86fb95dbf04b5ec1aaa41c863bc69ff/0b124/select-accessibility-1.png 1728w","/static/d86fb95dbf04b5ec1aaa41c863bc69ff/4ea69/select-accessibility-1.png 2304w","/static/d86fb95dbf04b5ec1aaa41c863bc69ff/fed7c/select-accessibility-1.png 2432w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"Selects are reached by Tab. Space and arrow keys open the list of options."))),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(b,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAACxLAAAsSwGlPZapAAABb0lEQVQ4y72UO08CQRSF/adGtNHaWFhZ+Q+sVBpNbLQxGhMSLbTQRGMw+ISsQWCBXXZBYGdXZnfmM6L4ggULdZKTyTxy5tx7z50xfnmM/Rmh1vp9/opBe/rT/SEK9fdTdCx6j72uhyhUSiOCDn4gCRVEMRgU1UBCP+iQy1sUKw0sV2C7ojv3YNd9qo6gKdTAFPURPrY8jo5POUtnqNTqlKoOpvWBsuXyYFqYtWB4USL1SriXdphauWFuI8f0Wp6JVYNE0iCxajCZvGd82WB2q0Bq547D7UtE0KJeb9But+MUCtKZLLfZe0pVt4uy3eiiZLkUqy6m7eKLJwLRQYYSKSVhGH4lVG8K8zc2ywsHZE7yLM2n2N+8QEpB87GBVtGn6o/wYY/QuLJYnNnm+rxAueBSKTl4nkez2UIIgVIqxq8xRamVW+yupzEfHBSSIPDxPNHN0QuiKOqzzM+NHRNZfwOMaL0oVGilR7Sc/p/P4RlGxowMfpcsswAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"illustration showing an open select with the focus on the Previewer option while the Editor option is already selected",title:"illustration showing an open select with the focus on the Previewer option while the Editor option is already selected",src:"/static/a44269e5b523f4559c227a31566c5b5b/3cbba/select-accessibility-2.png",srcSet:["/static/a44269e5b523f4559c227a31566c5b5b/7fc1e/select-accessibility-2.png 288w","/static/a44269e5b523f4559c227a31566c5b5b/a5df1/select-accessibility-2.png 576w","/static/a44269e5b523f4559c227a31566c5b5b/3cbba/select-accessibility-2.png 1152w","/static/a44269e5b523f4559c227a31566c5b5b/0b124/select-accessibility-2.png 1728w","/static/a44269e5b523f4559c227a31566c5b5b/4ea69/select-accessibility-2.png 2304w","/static/a44269e5b523f4559c227a31566c5b5b/fed7c/select-accessibility-2.png 2432w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(g,{mdxType:"Caption"},"The arrow keys navigate the open list of options, with the Space or Enter keys selecting the option with focus and closing the list. Esc closes the list without changing the option."))),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Carbon uses the combined attributes ",(0,n.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"hidden"),", and ",(0,n.kt)("inlineCode",{parentName:"li"},"selected")," in\norder to make a default prompt such as “Choose an option” not appear in the\nlist of options when the select is open."),(0,n.kt)("li",{parentName:"ul"},"The component is built on the HTML ",(0,n.kt)("inlineCode",{parentName:"li"},"select")," element and has limited styling,\nwith most of the visual appearance coming from the browser.")))}f.isMDXComponent=!0}}]);