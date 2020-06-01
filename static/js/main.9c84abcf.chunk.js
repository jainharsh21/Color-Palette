(this["webpackJsonpcolor-palette"]=this["webpackJsonpcolor-palette"]||[]).push([[0],{251:function(e,a,t){e.exports=t.p+"static/media/bg.c1507fee.svg"},272:function(e,a,t){e.exports=t(512)},277:function(e,a,t){},340:function(e,a,t){},512:function(e,a,t){"use strict";t.r(a);var o,n=t(0),r=t.n(n),l=t(7),i=t.n(l),c=(t(277),t(110)),s=t(20),m=t(21),d=t(8),u=t(25),h=t(24),p=t(71),g=t(574),f=t(572),b=t(243),v=t(40),C=t(515),y=t(13),E=t(49),x=t.n(E),j=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1600px"}[e],")")},w={ColorBox:(o={width:"20%",height:function(e){return e.showingFullPalette?"25%":"50%"},margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover button":{opacity:1}},Object(y.a)(o,j("lg"),{width:"25%",height:function(e){return e.showingFullPalette?"20%":"33.3333%"}}),Object(y.a)(o,j("md"),{width:"50%",height:function(e){return e.showingFullPalette?"10%":"20%"}}),Object(y.a)(o,j("xs"),{width:"100%",height:function(e){return e.showingFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return x()(e.background).luminance()>=.7?"black":"white"}},colorName:{color:function(e){return x()(e.background).luminance()<=.08?"white":"black"}},seeMore:{color:function(e){return x()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},background:"rgba(255, 255, 255, 0.3)",position:"absolute",border:"none",right:"0px",bottom:"0px",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return x()(e.background).luminance()>=.7?"rgba(0,0,0,0.6)":"white"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none",opacity:0},boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transition:"transform 0.6s ease-in-out",transform:"scale(0.1)"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMessage:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(0.1)",opacity:"0",color:"white","& h1":Object(y.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255, 255, 255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},j("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},k=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={copied:!1},o.changeCopyState=o.changeCopyState.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeCopyState",value:function(){var e=this;this.setState({copied:!0},(function(){setTimeout((function(){return e.setState({copied:!1})}),1500)}))}},{key:"render",value:function(){var e=this.props,a=e.name,t=e.background,o=e.moreUrl,n=e.showingFullPalette,l=e.classes,i=this.state.copied;return r.a.createElement(b.CopyToClipboard,{text:t,onCopy:this.changeCopyState},r.a.createElement("div",{style:{background:t},className:l.ColorBox},r.a.createElement("div",{style:{background:t},className:"".concat(l.copyOverlay," ").concat(i&&l.showOverlay)}),r.a.createElement("div",{className:"".concat(l.copyMessage," ").concat(i&&l.showMessage)},r.a.createElement("h1",null,"copied!"),r.a.createElement("p",{className:l.copyText},t)),r.a.createElement("div",null,r.a.createElement("div",{className:l.boxContent},r.a.createElement("span",{className:l.colorName},a)),r.a.createElement("button",{className:l.copyButton},"Copy")),n&&r.a.createElement(v.b,{to:o,onClick:function(e){return e.stopPropagation()}},r.a.createElement("span",{className:l.seeMore},"MORE"))))}}]),t}(n.Component),O=Object(C.a)(w)(k),S=t(257),N=t(571),P=t(557),F=t(573),B=t(558),D=t(137),I=t.n(D),A=(t(339),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(y.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto",height:"100%",display:"flex",alignItems:"center","& a":{textDecoration:"none",color:"black"}},j("xs"),{display:"none"}),slider:Object(y.a)({width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-rail":{height:"8px"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus,.rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},j("sm"),{width:"150px"}),selectContainer:{marginLeft:"auto",marginRight:"1rem"}}),T=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={format:"hex",open:!1},o.handleFormatChange=o.handleFormatChange.bind(Object(d.a)(o)),o.closeSnackbar=o.closeSnackbar.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"handleFormatChange",value:function(e){this.setState({format:e.target.value,open:!0}),this.props.handleChange(e.target.value)}},{key:"closeSnackbar",value:function(){this.setState({open:!1})}},{key:"render",value:function(){var e=this.props,a=e.level,t=e.changeLevel,o=e.showingAllColors,n=e.classes,l=this.state.format;return r.a.createElement("header",{className:n.Navbar},r.a.createElement("div",{className:n.logo},r.a.createElement(v.b,{to:"/"},"ColorPalette")),o&&r.a.createElement("div",null,r.a.createElement("span",null,"Level : ",a),r.a.createElement("div",{className:n.slider},r.a.createElement(S.a,{defaultValue:a,min:100,max:900,step:100,onAfterChange:t}))),r.a.createElement("div",{className:n.selectContainer},r.a.createElement(N.a,{value:l,onChange:this.handleFormatChange},r.a.createElement(P.a,{value:"hex"}," HEX - #ffffff "),r.a.createElement(P.a,{value:"rgb"}," RGB - rgb(255,255,255) "),r.a.createElement(P.a,{value:"rgba"}," RGBA - rgba(255,255,255,1.0) "))),r.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.open,autoHideDuration:3e3,message:r.a.createElement("span",{id:"message-id"},"Format Changed To ",l.toUpperCase()," "),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[r.a.createElement(B.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},r.a.createElement(I.a,null))]}))}}]),t}(n.Component),L=Object(C.a)(A)(T);var R,G,M,z=Object(C.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})((function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return r.a.createElement("footer",{className:o.PaletteFooter},a,r.a.createElement("span",{className:o.emoji},t))})),U={Palette:{height:"100vh",display:"flex",flexDirection:"column"},colors:{height:"90%"},goBack:(R={width:"20%",height:"50%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px",opacity:1,backgroundColor:"black","& a":{color:"white",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",background:"rgba(255, 255, 255, 0.3)",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",textDecoration:"none"}},Object(y.a)(R,j("lg"),{width:"25%",height:"33.3333%"}),Object(y.a)(R,j("md"),{width:"50%",height:"20%"}),Object(y.a)(R,j("xs"),{width:"100%",height:"10%"}),R)},H=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={level:500,format:"hex"},o.changeLevel=o.changeLevel.bind(Object(d.a)(o)),o.changeFormat=o.changeFormat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"changeLevel",value:function(e){this.setState({level:e})}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,l=this.props.classes,i=this.state,c=i.level,s=i.format,m=a[c].map((function(e){return r.a.createElement(O,{background:e[s],name:e.name,key:e.id,moreUrl:"/palette/".concat(n,"/").concat(e.id),showingFullPalette:!0})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(L,{level:c,changeLevel:this.changeLevel,handleChange:this.changeFormat,showingAllColors:!0}),r.a.createElement("div",{className:l.colors},m),r.a.createElement(z,{paletteName:t,emoji:o}))}}]),t}(n.Component),V=Object(C.a)(U)(H),q=t(138),W=t.n(q),J=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).deletePalette=o.deletePalette.bind(Object(d.a)(o)),o.handleClick=o.handleClick.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"deletePalette",value:function(e){e.stopPropagation(),this.props.openDialog(this.props.id)}},{key:"handleClick",value:function(){this.props.goToPalette(this.props.id)}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteName,o=e.emoji,n=e.colors.map((function(e){return r.a.createElement("div",{className:a.miniColor,style:{backgroundColor:e.color},key:e.name})}));return r.a.createElement("div",{className:a.root,onClick:this.handleClick},r.a.createElement(W.a,{className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"},onClick:this.deletePalette}),r.a.createElement("div",{className:a.colors},n),r.a.createElement("h5",{className:a.title},t," ",r.a.createElement("span",{className:a.emoji},o)," "))}}]),t}(n.PureComponent),Y=Object(C.a)({root:{backgroundColor:"white",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",margin:"0 auto",position:"relative",marginBottom:"-3.5px"},delete:{},deleteIcon:{color:"white",backgroundColor:"#eb3d30",width:"20px",height:"20px",position:"absolute",right:"0px",top:"0px",padding:"10px",zIndex:10,opacity:0}})(J),K=t(559),_=t(252),Q=t.n(_),X=t(560),$=t(181),Z=t.n($),ee=t(182),ae=t.n(ee),te=t(251),oe={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",backgroundColor:"#394bad",backgroundImage:"url(".concat(t.n(te).a,")"),overflow:"scroll"},heading:{fontSize:"2rem"},container:(G={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"column",flexWrap:"wrap"},Object(y.a)(G,j("xl"),{width:"80%"}),Object(y.a)(G,j("xs"),{width:"75%"}),G),nav:{display:"flex",width:"100%",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white"}},palettes:(M={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 30%)",gridGap:"2.5rem"},Object(y.a)(M,j("md"),{gridTemplateColumns:"repeat(2, 50%)"}),Object(y.a)(M,j("xs"),{gridTemplateColumns:"repeat(1, 100%)",gridGap:"1.4rem"}),M)},ne=t(556),re=t(513),le=t(561),ie=t(577),ce=t(562),se=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={openDeleteDialog:!1,deletingId:""},o.openDialog=o.openDialog.bind(Object(d.a)(o)),o.closeDialog=o.closeDialog.bind(Object(d.a)(o)),o.handleDelete=o.handleDelete.bind(Object(d.a)(o)),o.goToPalette=o.goToPalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"openDialog",value:function(e){this.setState({openDeleteDialog:!0,deletingId:e})}},{key:"closeDialog",value:function(){this.setState({openDeleteDialog:!1,deletingId:""})}},{key:"goToPalette",value:function(e){this.props.history.push("/palette/".concat(e))}},{key:"handleDelete",value:function(){this.props.deletePalette(this.state.deletingId),this.closeDialog()}},{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes,n=this.state.openDeleteDialog;return r.a.createElement("div",{className:o.root},r.a.createElement("div",{className:o.container},r.a.createElement("nav",{className:o.nav},r.a.createElement("h1",{className:o.heading},"React Colors!"),r.a.createElement(v.b,{to:"/palette/new"},"Create Palette")),r.a.createElement(g.a,{className:o.palettes},t.map((function(a){return r.a.createElement(f.a,{key:a.id,classNames:"fade",timeout:500},r.a.createElement(Y,Object.assign({},a,{goToPalette:e.goToPalette,openDialog:e.openDialog,key:a.id,id:a.id})))})))),r.a.createElement(K.a,{open:n,"aria-labelledby":"delete-dialog-title",onClose:this.closeDialog},r.a.createElement(X.a,{id:"delete-dialog-title"},"Delete This Palette?"),r.a.createElement(ne.a,null,r.a.createElement(re.a,{button:!0,onClick:this.handleDelete},r.a.createElement(le.a,null,r.a.createElement(ie.a,{style:{backgroundColor:Z.a[100],color:Z.a[600]}},r.a.createElement(Q.a,null))),r.a.createElement(ce.a,{primary:"Delete"})),r.a.createElement(re.a,{button:!0,onClick:this.closeDialog},r.a.createElement(le.a,null,r.a.createElement(ie.a,{style:{backgroundColor:ae.a[100],color:ae.a[600]}},r.a.createElement(I.a,null))),r.a.createElement(ce.a,{primary:"Cancel"})))))}}]),t}(n.Component),me=Object(C.a)(oe)(se),de=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e))._shades=o.gatherShades(o.props.palette,o.props.colorId),o.state={format:"hex"},o.changeFormat=o.changeFormat.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter((function(e){return e.id===a})));return t.slice(1)}},{key:"changeFormat",value:function(e){this.setState({format:e})}},{key:"render",value:function(){var e=this.props.palette,a=e.paletteName,t=e.emoji,o=e.id,n=this.state.format,l=this.props.classes,i=this._shades.map((function(e){return r.a.createElement(O,{key:e.name,name:e.name,background:e[n],showingFullPalette:!1})}));return r.a.createElement("div",{className:l.Palette},r.a.createElement(L,{handleChange:this.changeFormat,showingAllColors:!1}),r.a.createElement("div",{className:l.colors},i,r.a.createElement("div",{className:l.goBack},r.a.createElement(v.b,{to:"/palette/".concat(o)},"GO BACK"))),r.a.createElement(z,{paletteName:a,emoji:t}))}}]),t}(n.Component),ue=Object(C.a)(U)(de);t(340);var he,pe=function(e){var a=e.children;return r.a.createElement("section",{className:"page"},a)},ge=t(17),fe=t.n(ge),be=t(5),ve=t(575),Ce=t(98),ye=t(570),Ee=t(256),xe=t.n(Ee),je=t(566),we=t(93),ke={root:(he={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-3.5px","&:hover svg":{color:"white",transform:"scale(1.5)"}},Object(y.a)(he,j("lg"),{width:"25%",height:"20%"}),Object(y.a)(he,j("md"),{width:"50%",height:"10%"}),Object(y.a)(he,j("sm"),{width:"100%",height:"5%"}),he),boxContent:{position:"absolute",width:"100%",left:"0px",bottom:"0px",padding:"10px",color:function(e){return x()(e.color).luminance()<=.08?"rgba(255,255,255,0.8)":"rgba(0,0,0,0.6)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",display:"flex",justifyContent:"space-between"},deleteIcon:{transition:"all 0.3s ease-in-out"}},Oe=Object(we.b)((function(e){var a=e.classes,t=e.handleClick,o=e.name,n=e.color;return r.a.createElement("div",{className:a.root,style:{backgroundColor:n}},r.a.createElement("div",{className:a.boxContent},r.a.createElement("span",null,o),r.a.createElement(W.a,{className:a.deleteIcon,onClick:t})))})),Se=Object(be.a)(ke)(Oe),Ne=Object(we.a)((function(e){var a=e.colors,t=e.removeColor;return r.a.createElement("div",{style:{height:"100%"}},a.map((function(e,a){return r.a.createElement(Se,{index:a,key:e.name,color:e.color,name:e.name,handleClick:function(){return t(e.name)}})})))})),Pe=t(567),Fe=t(568),Be=t(569),De=t(254),Ie=t.n(De),Ae=t(565),Te=t(563),Le=t(564),Re=t(62),Ge=t(258),Me=(t(348),function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleClickOpen=function(){o.setState({open:!0})},o.handleClose=function(){o.setState({open:!1})},o.state={stage:"form",newPaletteName:""},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.showEmojiPicker=o.showEmojiPicker.bind(Object(d.a)(o)),o.savePalette=o.savePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Re.ValidatorForm.addValidationRule("isPaletteNameUnique",(function(a){return e.props.palettes.every((function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()}))}))}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"showEmojiPicker",value:function(){this.setState({stage:"emoji"})}},{key:"savePalette",value:function(e){var a={paletteName:this.state.newPaletteName,emoji:e.native};this.props.handleSubmit(a),this.setState({stage:""})}},{key:"render",value:function(){var e=this.state,a=e.newPaletteName,t=e.stage,o=this.props.hideForm;return r.a.createElement("div",null,r.a.createElement(K.a,{open:"emoji"===t,onClose:o},r.a.createElement(X.a,{id:"form-dialog-title"},"Choose A Palette Emoji"),r.a.createElement(Ge.a,{title:"Pick A Palette Emoji",onSelect:this.savePalette})),r.a.createElement(K.a,{open:"form"===t,onClose:o,"aria-labelledby":"form-dialog-title"},r.a.createElement(X.a,{id:"form-dialog-title"},"Choose A Palette Name"),r.a.createElement(Re.ValidatorForm,{onSubmit:this.showEmojiPicker},r.a.createElement(Te.a,null,r.a.createElement(Le.a,null,"Please enter a unique name for your own customized palette..."),r.a.createElement(Re.TextValidator,{label:"Palette Name",value:a,name:"newPaletteName",fullWidth:!0,margin:"normal",onChange:this.handleChange,validators:["required","isPaletteNameUnique"],errorMessages:["Enter Palette Name","Name already used"]})),r.a.createElement(Ae.a,null,r.a.createElement(je.a,{onClick:o,color:"primary"},"Cancel"),r.a.createElement(je.a,{variant:"contained",color:"primary",type:"submit"},"Save Palette")))))}}]),t}(n.Component)),ze=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},navBtns:Object(y.a)({marginRight:"1rem","& a":{textDecoration:"none"}},j("xs"),{marginRight:"0.5rem"}),button:Object(y.a)({margin:"0 0.5rem"},j("xs"),{margin:"0 0.2rem",padding:"0.3rem"})}},Ue=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={newPaletteName:"",formShowing:!1},o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.showForm=o.showForm.bind(Object(d.a)(o)),o.hideForm=o.hideForm.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"showForm",value:function(){this.setState({formShowing:!0})}},{key:"hideForm",value:function(){this.setState({formShowing:!1})}},{key:"render",value:function(){var e=this.props,a=e.open,t=e.classes,o=e.palettes,n=e.handleSubmit,l=e.handleDrawerOpen,i=this.state.formShowing;return r.a.createElement("div",{className:t.root},r.a.createElement(Pe.a,null),r.a.createElement(Fe.a,{position:"fixed",color:"default",className:fe()(t.appBar,Object(y.a)({},t.appBarShift,a))},r.a.createElement(Be.a,{disableGutters:!a},r.a.createElement(B.a,{color:"inherit","aria-label":"Open drawer",onClick:l,className:fe()(t.menuButton,a&&t.hide)},r.a.createElement(Ie.a,null)),r.a.createElement(Ce.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),r.a.createElement("div",{className:t.navBtns},r.a.createElement(v.b,{to:"/"},r.a.createElement(je.a,{variant:"contained",color:"secondary",className:t.button},"Go Back")),r.a.createElement(je.a,{variant:"contained",color:"primary",onClick:this.showForm,className:t.button},"Save"))),i&&r.a.createElement(Me,{palettes:o,handleSubmit:n,hideForm:this.hideForm}))}}]),t}(n.Component),He=Object(be.a)(ze,{withTheme:!0})(Ue),Ve=t(255),qe={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"1rem",fontSize:"2rem"},colorNameInput:{width:"100%",height:"70px"}},We=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={newColorName:"",currentColor:"teal"},o.updateCurrentColor=o.updateCurrentColor.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Re.ValidatorForm.addValidationRule("isColorNameUnique",(function(a){return e.props.colors.every((function(e){return e.name.toLowerCase()!==a.toLowerCase()}))})),Re.ValidatorForm.addValidationRule("isColorUnique",(function(a){return e.props.colors.every((function(a){return a.color!==e.state.currentColor}))}))}},{key:"updateCurrentColor",value:function(e){this.setState({currentColor:e.hex})}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e={color:this.state.currentColor,name:this.state.newColorName};this.props.addNewColor(e),this.setState({newColorName:""})}},{key:"render",value:function(){var e=this.props,a=e.paletteIsFull,t=e.classes,o=this.state,n=o.currentColor,l=o.newColorName;return r.a.createElement("div",null,r.a.createElement(Ve.ChromePicker,{color:n,onChangeComplete:this.updateCurrentColor,className:t.picker}),r.a.createElement(Re.ValidatorForm,{onSubmit:this.handleSubmit,ref:"form",instantValidate:!1},r.a.createElement(Re.TextValidator,{value:l,className:t.colorNameInput,name:"newColorName",placeholder:"Color Name",margin:"normal",variant:"filled",onChange:this.handleChange,validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["Enter a color name","Color name must be unique","Color already exists"]}),r.a.createElement(je.a,{variant:"contained",type:"submit",color:"primary",disabled:a,className:t.addColor,style:{backgroundColor:a?"grey":n}},a?"Palette Full":"Add Color")))}}]),t}(n.Component),Je=Object(be.a)(qe)(We),Ye=t(183),Ke=function(e){return{root:{display:"flex"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(Ye.a)(Object(Ye.a)({display:"flex",width:"100%",alignItems:"center",padding:"0 8px"},e.mixins.toolbar),{},{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},_e=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Qe=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).handleDrawerOpen=function(){o.setState({open:!0})},o.handleDrawerClose=function(){o.setState({open:!1})},o.onSortEnd=function(e){var a=e.oldIndex,t=e.newIndex;o.setState((function(e){var o=e.colors;return{colors:Object(we.c)(o,a,t)}}))},o.state={open:!0,colors:_e[0].colors},o.addNewColor=o.addNewColor.bind(Object(d.a)(o)),o.handleChange=o.handleChange.bind(Object(d.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(d.a)(o)),o.removeColor=o.removeColor.bind(Object(d.a)(o)),o.clearColors=o.clearColors.bind(Object(d.a)(o)),o.addRandomColor=o.addRandomColor.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"addNewColor",value:function(e){this.setState({colors:[].concat(Object(c.a)(this.state.colors),[e]),newColorName:""})}},{key:"handleChange",value:function(e){this.setState(Object(y.a)({},e.target.name,e.target.value))}},{key:"clearColors",value:function(){this.setState({colors:[]})}},{key:"addRandomColor",value:function(){for(var e,a,t=this.props.palettes.map((function(e){return e.colors})).flat(),o=!0;o;)e=Math.floor(Math.random()*t.length),a=t[e],o=this.state.colors.some((function(e){return e.name===a.name}));this.setState({colors:[].concat(Object(c.a)(this.state.colors),[a])})}},{key:"handleSubmit",value:function(e){e.id=e.paletteName.toLowerCase().replace(/ /g,"-"),e.colors=this.state.colors,this.props.savePalette(e),this.props.history.push("/")}},{key:"removeColor",value:function(e){this.setState({colors:this.state.colors.filter((function(a){return a.name!==e}))})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=e.palettes,n=this.state,l=n.open,i=n.colors,c=i.length>=t;return r.a.createElement("div",{className:a.root},r.a.createElement(He,{open:l,palettes:o,handleSubmit:this.handleSubmit,handleDrawerOpen:this.handleDrawerOpen}),r.a.createElement(ve.a,{className:a.drawer,variant:"persistent",anchor:"left",open:l,classes:{paper:a.drawerPaper}},r.a.createElement("div",{className:a.drawerHeader},r.a.createElement(B.a,{onClick:this.handleDrawerClose},r.a.createElement(xe.a,null))),r.a.createElement(ye.a,null),r.a.createElement("div",{className:a.container},r.a.createElement(Ce.a,{variant:"h4",gutterBottom:!0},"Design Your Palette!"),r.a.createElement("div",{className:a.buttons},r.a.createElement(je.a,{variant:"contained",className:a.button,color:"secondary",onClick:this.clearColors},"Clear Palette"),r.a.createElement(je.a,{variant:"contained",className:a.button,color:"primary",onClick:this.addRandomColor,disabled:c},"Random Color")),r.a.createElement(Je,{paletteIsFull:c,addNewColor:this.addNewColor,colors:i}))),r.a.createElement("main",{className:fe()(a.content,Object(y.a)({},a.contentShift,l))},r.a.createElement("div",{className:a.drawerHeader}),r.a.createElement(Ne,{colors:i,removeColor:this.removeColor,axis:"xy",onSortEnd:this.onSortEnd,distance:20})))}}]),t}(n.Component);Qe.defaultProps={maxColors:20};var Xe=Object(be.a)(Ke,{withTheme:!0})(Qe),$e=t(184),Ze=[50,100,200,300,400,500,600,700,800,900];function ea(e){var a,t={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=Object($e.a)(Ze);try{for(o.s();!(a=o.n()).done;){var n=a.value;t.colors[n]=[]}}catch(u){o.e(u)}finally{o.f()}var r,l,i,c=Object($e.a)(e.colors);try{for(c.s();!(r=c.n()).done;){var s=r.value,m=(l=s.color,i=10,x.a.scale(function(e){return[x()(e).darken(1.4).hex(),e,"#fff"]}(l)).mode("lab").colors(i)).reverse();for(var d in m)t.colors[Ze[d]].push({name:"".concat(s.name," ").concat(Ze[d]),id:s.name.toLowerCase().replace(/ /g,"-"),hex:m[d],rgb:x()(m[d]).css(),rgba:x()(m[d]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(u){c.e(u)}finally{c.f()}return t}var aa=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(e){var o;Object(s.a)(this,t),o=a.call(this,e);var n=JSON.parse(window.localStorage.getItem("palettes"));return o.state={palettes:n||_e},o.savePalette=o.savePalette.bind(Object(d.a)(o)),o.findPalette=o.findPalette.bind(Object(d.a)(o)),o.deletePalette=o.deletePalette.bind(Object(d.a)(o)),o}return Object(m.a)(t,[{key:"findPalette",value:function(e){return this.state.palettes.find((function(a){return a.id===e}))}},{key:"deletePalette",value:function(e){this.setState((function(a){return{palettes:a.palettes.filter((function(a){return a.id!==e}))}}),this.syncLocalStorage)}},{key:"savePalette",value:function(e){this.setState({palettes:[].concat(Object(c.a)(this.state.palettes),[e])},this.syncLocalStorage)}},{key:"syncLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return r.a.createElement(p.a,{render:function(a){var t=a.location;return r.a.createElement(g.a,null,r.a.createElement(f.a,{key:t.key,classNames:"page",timeout:500},r.a.createElement(p.c,{location:t},r.a.createElement(p.a,{exact:!0,path:"/palette/new",render:function(a){return r.a.createElement(pe,null,r.a.createElement(Xe,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),r.a.createElement(p.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return r.a.createElement(pe,null,r.a.createElement(ue,{colorId:a.match.params.colorId,palette:ea(e.findPalette(a.match.params.paletteId))}))}}),r.a.createElement(p.a,{exact:!0,path:"/",render:function(a){return r.a.createElement(pe,null,r.a.createElement(me,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}),r.a.createElement(p.a,{exact:!0,path:"/palette/:id",render:function(a){return r.a.createElement(pe,null,r.a.createElement(V,{palette:ea(e.findPalette(a.match.params.id))}))}}),r.a.createElement(p.a,{render:function(a){return r.a.createElement(pe,null,r.a.createElement(me,Object.assign({palettes:e.state.palettes,deletePalette:e.deletePalette},a)))}}))))}})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v.a,null,r.a.createElement(aa,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[272,1,2]]]);
//# sourceMappingURL=main.9c84abcf.chunk.js.map