"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[20108],{28399:function(e,a,t){t.d(a,{Z:function(){return v}});var i=t(67294),n=t(88650),s=t.n(n),c=t(1597),r=t(64905),o=t(68636),l=t(75900),d=t.n(l);var p=e=>{let{title:a,theme:t,tabs:n=[]}=e;return i.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12"},i.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var m=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:n}}}=(0,c.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:o}=t||n,l=`${s}/edit/${o}${r}/src/pages${a}`;return s?i.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},i.createElement("div",{className:"cds--col"},i.createElement("a",{className:"EditLink-module--link--IDrl1",href:l},"Edit this page on GitHub"))):null},g=t(56328),h=t(51721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,h.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,n=t.split("/").filter(Boolean).slice(-1)[0],r=a.map((e=>{const a=s()(e,{lower:!0,strict:!0}),r=a===n,o=new RegExp(`${n}/?(#.*)?$`),l=t.replace(o,a);return i.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},i.createElement(c.Link,{className:"PageTabs-module--link--Kz-7R",to:`${l}`},e))}));return i.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},i.createElement("div",{className:"cds--grid"},i.createElement("div",{className:"cds--row"},i.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},i.createElement("nav",{"aria-label":e},i.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},a}(i.Component);var u=b,A=t(17680),y=t(75387),f=t(50041);var k=e=>{let{date:a}=e;const t=new Date(a);return a?i.createElement(f.X2,{className:"last-modified-date-module--row--XJoYQ"},i.createElement(f.sg,null,i.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var v=e=>{let{pageContext:a,children:t,location:n,Title:l}=e;const{frontmatter:d={},relativePagePath:h,titleType:b}=a,{tabs:f,title:v,theme:w,description:E,keywords:x,date:C}=d,{interiorTheme:N}=(0,y.Z)(),{site:{pathPrefix:B}}=(0,c.useStaticQuery)("2456312558"),S=B?n.pathname.replace(B,""):n.pathname,T=f?S.split("/").filter(Boolean).slice(-1)[0]||s()(f[0],{lower:!0}):"",z=w||N;return i.createElement(o.Z,{tabs:f,homepage:!1,theme:z,pageTitle:v,pageDescription:E,pageKeywords:x,titleType:b},i.createElement(p,{title:l?i.createElement(l,null):v,label:"label",tabs:f,theme:z}),f&&i.createElement(u,{title:v,slug:S,tabs:f,currentTab:T}),i.createElement(A.Z,{padded:!0},t,i.createElement(m,{relativePagePath:h}),i.createElement(k,{date:C})),i.createElement(g.Z,{pageContext:a,location:n,slug:S,tabs:f,currentTab:T}),i.createElement(r.Z,null))}},6505:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return r},default:function(){return A}});var i=t(45987),n=(t(67294),t(64983)),s=t(28399);t(90039);const c=["components"],r={},o=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",a)},l=o("PageDescription"),d=o("AnchorLinks"),p=o("AnchorLink"),m=o("Row"),g=o("Column"),h=o("Caption"),b={_frontmatter:r},u=s.Z;function A(e){let{components:a}=e,t=(0,i.Z)(e,c);return(0,n.kt)(u,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)(l,{mdxType:"PageDescription"},(0,n.kt)("p",null,"Carbon’s search component provides the basic input mechanism for conducting a\nsearch. No accessibility annotations are needed for the input, but design\nannotations are needed to make the search messaging and results accessible.")),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(p,{mdxType:"AnchorLink"},"What Carbon provides"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Design recommendations"),(0,n.kt)(p,{mdxType:"AnchorLink"},"Development considerations")),(0,n.kt)("h2",null,"What Carbon provides"),(0,n.kt)("p",null,"Carbon bakes keyboard operation into its components, improving the experience of\nblind users and others who operate via keyboard. Carbon also incorporates other\naccessibility considerations, some of which are described below."),(0,n.kt)("h3",null,"Keyboard interaction"),(0,n.kt)("p",null,"The search component is in the tab order, and users can type directly into the\nsearch input on focus. Users press ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," to submit their text as a search\nterm, or they can press ",(0,n.kt)("inlineCode",{parentName:"p"},"Esc")," to clear it. Once users start typing, a Cancel\nicon (‘x’) will appear, which becomes the next tab stop and provides another way\nto clear the input field via click, ",(0,n.kt)("inlineCode",{parentName:"p"},"Space")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"Enter")," keys."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(g,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAABgklEQVQoz62SO0sDQRRGv12jibbio4ivFEIQtLBwRSzEJjEKVqIIKSxsrOxEELQQwZjCJmChYGkhgj9CUDuJYFbdXbKzmX1MTCpREEcmZhULJaIfHOYOzBwucwfxjhT6MItYeBuiFoja3/864tJUJI3x1i0ACvqxinYsoQfLmOjc+b1wfjBTuSg64pxLnHO5YHoyJawW6vQclfKaA0ElfVjB4tiBpITWg5Pd6U0ltLFysn+Bp+dH2FYRtsW+hzDoKoWpOzB9oYQkBrAaWEseNx5lzqZPDy/niqw8RAkbtq0fUWyLjeoqjXwRiswM7AZGmjab8zo99zzGLdN+LRCHCyyTfqye88CLXpkzr8SLXumFuSVODHdPdEsJC1Rkie50Q6JrJ8g5R+7K7NJVGjU1p/c78lWqdVTNkjbtpoD7m8LHlENiykEswFApiOG+v0ktaA5uswRajkLLfQrrY+EUxlu2xAGJGK5cM7or311bkhiMwBc2+h/a50+Jd6QCVan0H8I38iFmew6UPxoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"example of search keyboard navigation",title:"example of search keyboard navigation",src:"/static/a11454633bff35e6aab92a1540ca99d5/3cbba/search-accessibility-1.png",srcSet:["/static/a11454633bff35e6aab92a1540ca99d5/7fc1e/search-accessibility-1.png 288w","/static/a11454633bff35e6aab92a1540ca99d5/a5df1/search-accessibility-1.png 576w","/static/a11454633bff35e6aab92a1540ca99d5/3cbba/search-accessibility-1.png 1152w","/static/a11454633bff35e6aab92a1540ca99d5/92c65/search-accessibility-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"The search input is in the tab order just like any other input."))),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(g,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACkUlEQVQoz22SbUhTYRTH/7ubzRlBFm5qTVviSzFIpdIJZpRT79xALKm+hEbgtyIKChFxVmxzmppp9PLBihFCZB8yCpUwxE+JERrTbO3lupe7uxcDUarxxL1Os/DAj/Occzj/5zwvoJVW/E/V3naB9Vj3tyamlVZJ3INWdmzu4/MS8EYIEeDtZIoJJduNaDzxBOtNugyhMZFWWqW00poQ94mbxGS00rqNrwlCvc1v8LTrPb8WEUIoxsVSPiZIOexeMZ+7dsqWdKtxSBqvC/Axn79Y9khWtvM2pVWYBXEY9t9BnfouzhX0yar3dfYXoPn883sTiJFVeN1BrKwsC5s65nwIBsICYS6KmY/O9VOJgEIA+jXBgfZx2LomMfR4SvKgbbR+2DZ1JhyKHl10sSVBf7jYYfeWfrN7S1l/uNjPcBr/IqfxeThNJLx05MPwbPXY0Gf15IgdV2tt4op0CzA/wwDQAJCKln5E37JsIGb/8jUW8HEkzEUJF4yQ0BZwbCTGuAKEDXDdIy+nIUYDtKkWoPXCCwCVwoN0XHld8fDmmIFx+7IX7J48xxyT63YEcng8cc/jWvDnhoKRrJ7r70631r86fmyHOU2v6izRploSUK4wAzgo3EdNTvegNs00EL8bGQBq5tM8fJ4QPN8DAoyTxc9fq3jWNQ5DtsVYqTJaatSm+jp172BRYksy9KpOYcLfYYKz+X1t+v3WVsVhJBUeKtrVdKNFwr+ofdZBMU52A7fTSzmml6kaEMAIEblEoFOZQKf0A7oMK/LRBMCA2rweVCnNwmx7FCokHADkcvkGvI2Wrf1X0kAwUR5fewiqs0xU1e77a4IZuAwgGXXqXhGdaRFBCqQrMqGQp/4jxtvmDbbiD6eyajfBXopDAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"illustration showing that after a user begins typing in a search field, an X button appears on the right side of the input that can be tabbed to and activated with Space or Enter",title:"illustration showing that after a user begins typing in a search field, an X button appears on the right side of the input that can be tabbed to and activated with Space or Enter",src:"/static/5e08223bcb2609a879ae07ee2aeea2da/3cbba/search-accessibility-2.png",srcSet:["/static/5e08223bcb2609a879ae07ee2aeea2da/7fc1e/search-accessibility-2.png 288w","/static/5e08223bcb2609a879ae07ee2aeea2da/a5df1/search-accessibility-2.png 576w","/static/5e08223bcb2609a879ae07ee2aeea2da/3cbba/search-accessibility-2.png 1152w","/static/5e08223bcb2609a879ae07ee2aeea2da/92c65/search-accessibility-2.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"The user can clear the input by pressing Esc or activating the X button that appears inside the input."))),(0,n.kt)("p",null,"Variations of the search component use a non-persistent text input that is\nhidden behind a magnifying glass icon. In one variation, the user activates the\nicon-only button to reveal and put focus into the search input. In another\nvariation, as the icon receives focus it exposes the input and the focus is\nimmediately placed into the search input. Once in the input, the interaction,\ndescribed above, is the same for all variations."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(g,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACA0lEQVQoz62SS2gTQRzGv2RjVRAvJRStqeRSo6TZJj4QlGKsFlM8GEtI4wMl4MVrBUEQDxJLjbGEuqB48yrqwZNQD5714AvTmGyS2cdssrOpLVsPQnFkk9qqUM3BD37MYYbffMP8cdKfA+ccTi4cvD8c3zU9cin6EMnBGWFsIOsaFyUh2p3BsHcSMV8W/8yp/mmc2JH1JEJ5z9DWTPrwlpsT8f48UhEJCfEuUmEJR7ozOOq91ZmwC2lkLj/zABDMhpXjfPns8Z7b8XHx3pXkYH4oEZyZGtuT7wXCeP7ojUBV5l5FYe7KHHUpch1ErreF0vUXrSc7FD+QnK6YKS8u7j/knTjvQzJ0rGfynHPvy6fvsfR1CYZqtdEsUJWhUqRQ5MaacPbJOwBRSNdm8fG1sn3urRbm/FuA88Xd84uNEOfcb9u2qNXMfYZm7TXUVSJUZQcqRdr3m9BpdiP9uAuAm8j0larovFgof28YTd5kC5zV57llfuFNtoblrNbCcsOweLWkP6iWVZAK9bSEozvvdJ0O5Dfato3qZ8NPFSZqxAxqNXPAQSfrwYIaMcXyJ723VqqjVjLaDWO+7KYzEanV1NmgCoNOTOiE/Z2Vc3JBx5/CDSPbphDAVahV0+X8nE6YW1c6gDC3XKAuUq63pD+Fm535+pXRvg7mbb3EfFlhRSr8D+EPn4pzBqPguX4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"illustration showing the search icon being activated via Enter or Space",title:"illustration showing the search icon being activated via Enter or Space",src:"/static/da31485e2342994fd9a59caef807cc6b/3cbba/search-accessibility-3.png",srcSet:["/static/da31485e2342994fd9a59caef807cc6b/7fc1e/search-accessibility-3.png 288w","/static/da31485e2342994fd9a59caef807cc6b/a5df1/search-accessibility-3.png 576w","/static/da31485e2342994fd9a59caef807cc6b/3cbba/search-accessibility-3.png 1152w","/static/da31485e2342994fd9a59caef807cc6b/92c65/search-accessibility-3.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"A variation where the search input is revealed by activating the magnifying glass icon."))),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(g,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5ElEQVQoz63QT0gUYRgG8GdnN7WM2UtuGY0VQR5y8x9EFBWZhCMdCoqoQ+VaBkEX6dSlQxTEbJSHIKhTh8BLRKcgNMWbzLo7O7jW7MzKGqiHdQ/Ofl+rO+4bM25LIJRFL/x44Ts8PN+Lc/ufgojgzvWjL89caH5+9taJN+gK96Nxp4RQKLTBb+f8wWfo2aMELh0eCpwMPooc3/5w8JBwG2Iz0BDa8feBdYjg8Z13AQD+XG4pyouFm27ji5eviqe6eupPd/fWX+u/W8OJhMnUkpCwWJVmMWFM5z4q2XCJfWXg1YOP3pdd5nQ2aqXmblRO4Pv57ppM5aDPfoeWYVXJDMO4zkGO7RH71gDsJq9n8vUHDI+yxgk132YsltuNBWpzfZ2n9um51Y6ExTq1DOvUrKoOLcOOjOv8gNfQsRGMlIE4gOH7b2vdFupM/pP5LU9GNu/MztuUXSxQdqGwvjdy3J2w2HuiZRAt+71AuSlacyU8VEv8Cz4n+b4pk7WqBmtRDRb+g5ZYmrWOaHzvatGGKxhZA2RJqRs49gJEJYzpHHGTQU0zxDZpROMoFW2PWAnc0r3rCbbhHiZmir64yYRYenOm0kwY1bivtGLDWancUJaUrbKk4Fe9TQr+eWRJ8VdC/f8j8AeIdX6KovaS+QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"putting focus on the magnifying glass causes the search input to be revealed and given focus",title:"putting focus on the magnifying glass causes the search input to be revealed and given focus",src:"/static/8c3ffec6754e9ca07dea5023c4629641/3cbba/search-accessibility-4.png",srcSet:["/static/8c3ffec6754e9ca07dea5023c4629641/7fc1e/search-accessibility-4.png 288w","/static/8c3ffec6754e9ca07dea5023c4629641/a5df1/search-accessibility-4.png 576w","/static/8c3ffec6754e9ca07dea5023c4629641/3cbba/search-accessibility-4.png 1152w","/static/8c3ffec6754e9ca07dea5023c4629641/92c65/search-accessibility-4.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"A variation where the search input is revealed when the magnifying glass receives focus."))),(0,n.kt)("h3",null,"Role and label"),(0,n.kt)("p",null,"Carbon assigns the entire search interaction a ",(0,n.kt)("inlineCode",{parentName:"p"},"role")," of “search”. It also\nprovides non-visible labels for the search input and icon (“search”), and for\nthe cancel icon (“clear search input”)."),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(g,{colLg:8,mdxType:"Column"},(0,n.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,n.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAADqElEQVQ4y32TXUwcVRiG39ldumqMokkbatrGC63RqK0XpmITY8JFhWgBGwmmpraxN+pFL7SSNMGQeKEJbaGwtBbjhTUG1BgxRCBAWsKyi1v+/5bdnZ05Z/72b1hmZwdWZG2PmQEa9aInefLN975n3pn5cgZ60kQ2ZTmk1Cw0KQNN1sEYw9XGQa7+kA+ny6/jzNFOVO5vxuVP+zjb0yQdCUVHPKw5e21sH4qQhUp1JJVVxCZz98zXHmvi3i+/jroX2qvqD/t8777U4as92Ppi/eEOHHngc67x9E/ovUrQ/VXkv4GGXoBprMEyC672IwwL6hC+/uWCs8E/sISjD31xsHJ/c13VgYt1T+H8ntG+hXsBjG2CsSKiiSBWizzesANnx0V80+RHe8PwLlVKDSiymo7zopjVDZpdMSTLsiIbm4U5G9PM87a2umLQ1WxO0DPZrEySl7Yf4HLeMDgUxic13fj42A23yCufUaJci8dIa0JNtyW1TJumpNtVOeWzSajpdltLao7XmlBTnUJUeW87kKvc1wyElyKgggrGZsDYBorMxFoxA8bugLG794E5n8vYX06Y3auaDBBCQCkFpWTHcDFWdG1V5ire2XDnDNO90/8Lt2Hk3JE5hWNsHZEwD0miTqCXUuq1qygSryhsYfexSNzLGCthjHmSacUb50VH56OCt/D3yi5btzHWUruEuOjkgBDqopS6RIG4qKh4qKiUiHGpROSVEsb+9DR98PPD545/Vzrav+A1zKxHiMolm3ctz43LIw9+dOzb0rOvdz7S0tDrYWydi4R5F4hIkcpKmArwkISkM08+QpwZdncEULH7y/NVBy72AK+W9n4/6cyuyxfAs2h4+c0nL/1W/XTLr7XPtB469co17ME5DtF5BcE+gmB/3E1iiQrCq2/zy1K1QtI1SXXlrZmAcOr2rdhZyqdqNVmvVmmmJiHrx/kl7cTo74sfDvw4XbFzLi+c7No6h7vRCOCMK6llRhNaklEiWcaquZ4z8oV83spblmWaufx6zjALOcN0qpnL5zQ5zVIJvSUekSHGVM87z7cBP1zxw17On9EXfnx8OLp3fDhaFhyMOIwNhMv8/eG9gcHlbW25LDi0pd/sWXjiZs/io8vTGmYDBCeeuwLYc9lZ02MC5kIiZscFzIcI5kLEqf+/dvo/REyM8JjyC1ickDE7TrZC+rumAZQD2IcpP8/NBHlucizKzYcIN3/7PoQIF7oV5SZGYpgOxO17ncB/APrA7N43af3zAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,n.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"role and input named \"search\", and button named 'clear search input'",title:"role and input named \"search\", and button named 'clear search input'",src:"/static/9d50af966e64fd6d97b15dc39a9b3de7/3cbba/search-accessibility-5.png",srcSet:["/static/9d50af966e64fd6d97b15dc39a9b3de7/7fc1e/search-accessibility-5.png 288w","/static/9d50af966e64fd6d97b15dc39a9b3de7/a5df1/search-accessibility-5.png 576w","/static/9d50af966e64fd6d97b15dc39a9b3de7/3cbba/search-accessibility-5.png 1152w","/static/9d50af966e64fd6d97b15dc39a9b3de7/92c65/search-accessibility-5.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,n.kt)(h,{mdxType:"Caption"},"The search region, input name, and clear button are all incorporated by Carbon."))),(0,n.kt)("h2",null,"Design recommendations"),(0,n.kt)("p",null,"Carbon provides a\n",(0,n.kt)("a",{parentName:"p",href:"https://carbondesignsystem.com/patterns/search-pattern/"},"search pattern")," that\noutlines three search types: basic, active, and focused. Each of these types\nstarts with the basic search input mechanism provided by Carbon’s search\ncomponent. However, each search type displays suggestions or results in\ndifferent ways, which all have accessibility considerations. There are three\nbroad areas that designers need to consider and annotate for accessibility:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Search suggestions and typeaheads"),(0,n.kt)("li",{parentName:"ul"},"Search outcomes and status (e.g., “25 results found”, “no results found”)"),(0,n.kt)("li",{parentName:"ul"},"Results navigation")),(0,n.kt)("p",null,"Future updates to this guidance will offer specific documentation on these\naccessibility needs."),(0,n.kt)("h2",null,"Development considerations"),(0,n.kt)("p",null,"Keep these considerations in mind if you are modifying Carbon or creating a\ncustom component."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The div containing the search function is given a ",(0,n.kt)("inlineCode",{parentName:"li"},'role="button"'),"."),(0,n.kt)("li",{parentName:"ul"},"The hidden label for the input has a default value of “search”."),(0,n.kt)("li",{parentName:"ul"},"The input is ",(0,n.kt)("inlineCode",{parentName:"li"},'type="text"')," with a ",(0,n.kt)("inlineCode",{parentName:"li"},'role="searchbox"'),"; using ",(0,n.kt)("inlineCode",{parentName:"li"},'type="search"')," is\nequivalent and also valid."),(0,n.kt)("li",{parentName:"ul"},"See the\n",(0,n.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/search"},"Mozilla search input documentation"),"\nfor more considerations.")))}A.isMDXComponent=!0}}]);