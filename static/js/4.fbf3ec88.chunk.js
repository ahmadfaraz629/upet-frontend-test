(this["webpackJsonpupet-frontend-test"]=this["webpackJsonpupet-frontend-test"]||[]).push([[4],{324:function(e,a,t){"use strict";t.r(a);var r,n,i=t(1),o=t.n(i),l=t(5),c=t(62),m=t(267),s=t(319),u=t(296),d=t(320),p=t(315),f=t(317),h=t(309),b=t(318),g=t(82),x=t(26),E=t(323),v=t(16);!function(e){e.USA="usa",e.AUS="aus"}(r||(r={}));var F=[{name:r.USA,label:"+1 - United States"},{name:r.AUS,label:"+61 - Australia"}],N=(n={},Object(v.a)(n,r.USA,["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/]),Object(v.a)(n,r.AUS,[/[1-9]/,/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/," ",/\d/,/\d/,/\d/]),n),w="#02E0B1",y="#F44336",O="#DFDFDF",j=["error","label","capitilizeFirst"],S=Object(u.a)((function(e){return{textField:function(e){return{"& .MuiFilledInput-root":{height:"58px",backgroundColor:"inherit",border:"1px solid ".concat(e.error?y:O),boxSizing:"border-box",borderRadius:"2px"},"& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before":{borderBottom:"none"},"& .MuiFormHelperText-contained":{marginLeft:"0px"}}}}})),M=Object(i.memo)((function(e){var a=e.error,t=e.label,r=e.capitilizeFirst,n=Object(x.a)(e,j),i=S({error:!!a});return o.a.createElement(E.a,Object.assign({},n,{onChange:r?function(e){var a=e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1);n.onChange(a)}:n.onChange,fullWidth:!0,id:"filled-primary-".concat(n.name),label:t,variant:"filled",color:"primary",className:i.textField,error:!!a,helperText:null===a||void 0===a?void 0:a.message}))})),z=t(316),I=t(306),k=t(305),C=t(312),A=t(313),T=t(314),W=t(310),D=t(307),P=t(329),B=Object(u.a)((function(){return{dialogHeader:{padding:"16px 24px 0px 24px","& .MuiDialogTitle-root":{},"& .MuiTypography-root":{fontWeight:"normal",fontStyle:"normal",fontSize:"22px",color:"rgba(0, 0, 0, 0.87)"}},dialogList:{"& .MuiButtonBase-root":{paddingTop:"0px",paddingBottom:"0px"},"& .MuiListItemAvatar-root":{minWidth:"55px"},"& .MuiAvatar-colorDefault":{backgroundColor:"inherit"},"& .MuiListItem-gutters":{paddingLeft:"24px",paddingRight:"26px"},"& img":{width:"24px",height:"16px"}}}}));var L=function(e){var a=B({}),t=e.onClose,r=e.selectedValue,n=e.open;return o.a.createElement(D.a,{onClose:function(){t(r)},"aria-labelledby":"simple-dialog-title",open:n},o.a.createElement(W.a,{className:a.dialogHeader,id:"simple-dialog-title"},"Select country"),o.a.createElement(k.a,{className:a.dialogList},F.map((function(e){return o.a.createElement(C.a,{button:!0,onClick:function(){return a=e.name,void t(a);var a},key:e.name},o.a.createElement(A.a,null,o.a.createElement(P.a,null,o.a.createElement("img",{src:"svgs/".concat(e.name,"_flag.svg"),alt:"icon"}))),o.a.createElement(T.a,{primary:e.label}))}))))},U=t(303),V=t(302),R=t(328),H=t(163),$=t.n(H),q=["inputRef","pattern"],Y=["error","label","capitilizeFirst","mask"],Z=Object(u.a)((function(e){return{textField:function(e){return{"& .MuiFilledInput-root":{height:"58px",backgroundColor:"inherit",border:"1px solid ".concat(e.error?y:O),boxSizing:"border-box",borderRadius:"2px"},"& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before":{borderBottom:"none"},"& .MuiFormHelperText-contained":{marginLeft:"0px"}}}}}));function _(e){var a=e.inputRef,t=e.pattern,r=Object(x.a)(e,q);return o.a.createElement($.a,Object.assign({},r,{ref:function(e){a(e?e.inputElement:null)},mask:t,placeholderChar:"\u2000"}))}var J=Object(i.memo)((function(e){var a=e.error,t=e.label,r=(e.capitilizeFirst,e.mask,Object(x.a)(e,Y)),n=Z({error:!!a});return o.a.createElement(o.a.Fragment,null,o.a.createElement(U.a,{className:n.textField,variant:"filled",error:!!a},o.a.createElement(R.a,{variant:"filled",htmlFor:"formatted-text-mask-input"},t),o.a.createElement(V.a,Object.assign({},r,{inputProps:r,id:"formatted-text-mask-input",inputComponent:_}))))})),G=Object(u.a)((function(){return{iconTextField:function(e){return{border:"1px solid ".concat(e.error?"#F44336":"#DFDFDF"),"& .MuiFilledInput-root":{height:"58px",backgroundColor:"inherit",border:"none",boxSizing:"border-box",borderRadius:"2px"},"& .MuiFilledInput-underline:after, .MuiFilledInput-underline:before":{borderBottom:"none"},"& .MuiFormHelperText-contained":{marginLeft:"0px"}}},icon:{cursor:"pointer",padding:"21px 0px 0px 20px",width:"24px",height:"16px"}}}));var X=function(e){var a,t=e.form,r=t.setValue,n=t.watch,i=t.control,l=t.formState,m=G({error:!!l.errors.phoneNumber}),s=n("country"),u=o.a.useState(!1),d=Object(c.a)(u,2),f=d[0],h=d[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{container:!0,alignItems:"flex-end",className:m.iconTextField},o.a.createElement(p.a,{item:!0},o.a.createElement(z.a,{component:"span",onClick:function(){h(!0)}},o.a.createElement("img",{src:"svgs/".concat(s,"_flag.svg"),alt:"icon",className:m.icon})),o.a.createElement(g.a,{defaultValue:"",name:"phoneNumber",control:i,render:function(e){var a=e.field;return o.a.createElement(J,Object.assign({},a,{label:"Phone number",pattern:N[s],error:l.errors.phoneNumber}))}}))),o.a.createElement(I.a,{error:!0,id:"Phone number"},null===(a=l.errors.phoneNumber)||void 0===a?void 0:a.message),o.a.createElement(L,{country:s,open:f,onClose:function(e){h(!1),r("country",e)}}))},K=t(268),Q=t(266),ee=Q.a().shape({firstName:Q.b().required("Please enter your First name"),lastName:Q.b().required("Please enter your Last name"),phoneNumber:Q.b().required("Please enter your Phone").when("country",{is:function(e){return e===r.USA},then:Q.b().matches(/^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/,"Invalid Usa format"),otherwise:Q.b().matches(/^[0-9]{4} [0-9]{3} [0-9]{3}$/,"Invalid Aus format")}),email:Q.b().required("Please enter your Email").email("Invalid email address").matches(/^[a-z]+[A-Za-z\d.@$!%*#?&]*$/,"Must start with a lowercase letter"),password:Q.b().required("Please Enter your password").matches(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,"Oops! You need a password longer than 8 characters with numbers and letters.")}),ae=Object(u.a)((function(e){return{halfWidth:{width:"50%"},fullwidth:{width:"100%"},button:{width:"100%",height:"60px","& .MuiButton-label":{color:"#FFFFFF",opacity:.9,fontWeight:500,fontSize:"14px"},boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.03)",borderRadius:"2px"},icon:{cursor:"pointer",padding:"21px 0px 0px 20px",width:"24px",height:"16px"},header:{width:"414px",height:"78px",margin:0},headerContainer:{margin:0,position:"relative",top:"25%","-ms-transform":"translateY(-50%)",transform:"translateY(-50%)"},headerIcon:{cursor:"pointer",height:"30px"},backdrop:{zIndex:e.zIndex.drawer+1,backgroundColor:"rgba(255, 255, 255, 0.9)"}}}));var te=function(e){var a=e.setFormData,t=ae({error:!1}),r=Object(i.useState)(!1),n=Object(c.a)(r,2),l=n[0],m=n[1],s=Object(g.e)({mode:"onBlur",defaultValues:{firstName:"Ahmad",lastName:"Faraz",email:"ahmadfaraz629@gmail.com",password:"aaaaaaA1",country:"usa",phoneNumber:"03218447889"},resolver:Object(K.a)(ee)}),u=s.control,d=s.formState,x=s.handleSubmit;return o.a.createElement(p.a,{container:!0,direction:"row",spacing:2},o.a.createElement(p.a,{item:!0,className:t.halfWidth},o.a.createElement(g.a,{defaultValue:"",name:"firstName",control:u,render:function(e){var a=e.field;return o.a.createElement(M,Object.assign({},a,{label:"First name",error:d.errors.firstName,capitilizeFirst:!0}))}})),o.a.createElement(p.a,{item:!0,className:t.halfWidth},o.a.createElement(g.a,{defaultValue:"",name:"lastName",control:u,render:function(e){var a=e.field;return o.a.createElement(M,Object.assign({},a,{label:"Last name",error:d.errors.lastName,capitilizeFirst:!0}))}})),o.a.createElement(p.a,{item:!0,className:t.fullwidth},o.a.createElement(X,{form:s})),o.a.createElement(p.a,{item:!0,className:t.fullwidth},o.a.createElement(g.a,{defaultValue:"",name:"email",control:u,render:function(e){var a=e.field;return o.a.createElement(M,Object.assign({},a,{label:"Email",error:d.errors.email}))}})),o.a.createElement(p.a,{item:!0,className:t.fullwidth},o.a.createElement(g.a,{defaultValue:"",name:"password",control:u,render:function(e){var a=e.field;return o.a.createElement(M,Object.assign({},a,{type:"password",label:"Password",error:d.errors.password}))}})),o.a.createElement(p.a,{item:!0,className:t.fullwidth},o.a.createElement(f.a,{variant:"contained",type:"submit",disabled:!d.isValid,color:"primary",onClick:x((function(e){m(!0),setTimeout((function(){m(!1),a(e)}),2e3)})),className:t.button},"NEXT")),o.a.createElement(h.a,{className:t.backdrop,open:l},o.a.createElement(b.a,{color:"primary",thickness:3.6,size:54})))},re=t(322),ne=t(311),ie=Object(u.a)((function(e){return{notificationIcon:{width:"71px",height:"53.99px"},notificationText:{fontSize:"22px",lineHeight:"29px",color:"#000000",fontStyle:"normal",fontWeight:"normal"},notificationParagraph:{fontSize:"15px",lineHeight:"21px",color:"rgba(0, 0, 0, 0.54)",fontStyle:"normal",fontWeight:"normal"}}}));var oe=function(e){var a=e.formData,t=ie();return o.a.createElement(o.a.Fragment,null,o.a.createElement(p.a,{container:!0,spacing:3},o.a.createElement(p.a,{item:!0},o.a.createElement(z.a,{component:"span"},o.a.createElement("img",{src:"svgs/notification.svg",alt:"icon",className:t.notificationIcon}))),o.a.createElement(p.a,{item:!0},o.a.createElement(p.a,{container:!0,direction:"column"},o.a.createElement(p.a,{item:!0},o.a.createElement(ne.a,{variant:"inherit",component:"span",className:t.notificationText},"Thanks, ",a.firstName,"!"," ")),o.a.createElement(p.a,{item:!0},o.a.createElement(ne.a,{variant:"inherit",component:"span",className:t.notificationText},"We\u2019ve received your application"))))),o.a.createElement(re.a,{paddingTop:"27px"},o.a.createElement(ne.a,{variant:"inherit",component:"span",className:t.notificationParagraph},"We\u2019ll process your application as soon as possible and send you a decision within 30 days to ",a.phoneNumber," or"," ",a.email,". We will contact you in case more information is needed.")),o.a.createElement(re.a,{paddingTop:"21px"},o.a.createElement(ne.a,{variant:"inherit",component:"span",className:t.notificationParagraph},"While we\u2019re reviewing your application, please don\u2019t submit another application for the uPet\u2019s breeder program.")))},le=Object(u.a)((function(e){return{header:{height:"78px",margin:0},headerContainer:{margin:0,position:"relative",top:"25%","-ms-transform":"translateY(-50%)",transform:"translateY(-50%)"},headerIcon:{cursor:"pointer",height:"30px"}}}));var ce=function(){var e=le();return o.a.createElement(re.a,{className:e.header},o.a.createElement(z.a,{component:"span",className:e.headerContainer},o.a.createElement("img",{src:"svgs/upet_logo.svg",alt:"icon",className:e.headerIcon})))},me=Object(m.a)({typography:{fontFamily:["Rawline"].join(",")},palette:{primary:{main:w},action:{disabledBackground:w,disabledOpacity:.6}}}),se=Object(u.a)((function(){return{root:function(e){return{"& .MuiGrid-container":{flexWrap:e.isFormData?"nowrap":"wrap"},"& .MuiButton-contained.Mui-disabled":{opacity:.6}}}}}));var ue=function(){var e=o.a.useState(null),a=Object(c.a)(e,2),t=a[0],r=a[1],n=se({isFormData:!!t});return o.a.createElement(s.a,{theme:me},o.a.createElement(d.a,{maxWidth:"sm",className:n.root},o.a.createElement(ce,null),t?o.a.createElement(oe,{formData:t}):o.a.createElement(te,{setFormData:r})))};a.default=function(e){var a=e.match.url;return o.a.createElement(l.d,null,o.a.createElement(l.b,{path:"".concat(a),exact:!0,component:ue}),o.a.createElement(l.a,{to:"".concat(a)}))}}}]);
//# sourceMappingURL=4.fbf3ec88.chunk.js.map