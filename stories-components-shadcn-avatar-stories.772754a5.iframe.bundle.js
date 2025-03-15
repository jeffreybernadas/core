/*! For license information please see stories-components-shadcn-avatar-stories.772754a5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[961,1897],{"./node_modules/@radix-ui/react-avatar/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{H4:()=>Fallback,_V:()=>Image,bL:()=>Root});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),[createAvatarContext,createAvatarScope]=(0,_radix_ui_react_context__WEBPACK_IMPORTED_MODULE_2__.A)("Avatar"),[AvatarProvider,useAvatarContext]=createAvatarContext("Avatar"),Avatar=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,...avatarProps}=props,[imageLoadingStatus,setImageLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(AvatarProvider,{scope:__scopeAvatar,imageLoadingStatus,onImageLoadingStatusChange:setImageLoadingStatus,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...avatarProps,ref:forwardedRef})})}));Avatar.displayName="Avatar";var AvatarImage=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,src,onLoadingStatusChange=()=>{},...imageProps}=props,context=useAvatarContext("AvatarImage",__scopeAvatar),imageLoadingStatus=function useImageLoadingStatus(src,referrerPolicy){const[loadingStatus,setLoadingStatus]=react__WEBPACK_IMPORTED_MODULE_0__.useState("idle");return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{if(!src)return void setLoadingStatus("error");let isMounted=!0;const image=new window.Image,updateStatus=status=>()=>{isMounted&&setLoadingStatus(status)};return setLoadingStatus("loading"),image.onload=updateStatus("loaded"),image.onerror=updateStatus("error"),image.src=src,referrerPolicy&&(image.referrerPolicy=referrerPolicy),()=>{isMounted=!1}}),[src,referrerPolicy]),loadingStatus}(src,imageProps.referrerPolicy),handleLoadingStatusChange=(0,_radix_ui_react_use_callback_ref__WEBPACK_IMPORTED_MODULE_4__.c)((status=>{onLoadingStatusChange(status),context.onImageLoadingStatusChange(status)}));return(0,_radix_ui_react_use_layout_effect__WEBPACK_IMPORTED_MODULE_5__.N)((()=>{"idle"!==imageLoadingStatus&&handleLoadingStatusChange(imageLoadingStatus)}),[imageLoadingStatus,handleLoadingStatusChange]),"loaded"===imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.img,{...imageProps,ref:forwardedRef,src}):null}));AvatarImage.displayName="AvatarImage";var AvatarFallback=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{__scopeAvatar,delayMs,...fallbackProps}=props,context=useAvatarContext("AvatarFallback",__scopeAvatar),[canRender,setCanRender]=react__WEBPACK_IMPORTED_MODULE_0__.useState(void 0===delayMs);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(void 0!==delayMs){const timerId=window.setTimeout((()=>setCanRender(!0)),delayMs);return()=>window.clearTimeout(timerId)}}),[delayMs]),canRender&&"loaded"!==context.imageLoadingStatus?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_3__.sG.span,{...fallbackProps,ref:forwardedRef}):null}));AvatarFallback.displayName="AvatarFallback";var Root=Avatar,Image=AvatarImage,Fallback=AvatarFallback},"./node_modules/@radix-ui/react-compose-refs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s:()=>useComposedRefs,t:()=>composeRefs});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function setRef(ref,value){if("function"==typeof ref)return ref(value);null!=ref&&(ref.current=value)}function composeRefs(...refs){return node=>{let hasCleanup=!1;const cleanups=refs.map((ref=>{const cleanup=setRef(ref,node);return hasCleanup||"function"!=typeof cleanup||(hasCleanup=!0),cleanup}));if(hasCleanup)return()=>{for(let i=0;i<cleanups.length;i++){const cleanup=cleanups[i];"function"==typeof cleanup?cleanup():setRef(refs[i],null)}}}}function useComposedRefs(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useCallback(composeRefs(...refs),refs)}},"./node_modules/@radix-ui/react-context/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>createContextScope,q:()=>createContext2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function createContext2(rootComponentName,defaultContext){const Context=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),Provider=props=>{const{children,...context}=props,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName){const context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]}function createContextScope(scopeName,createContextScopeDeps=[]){let defaultContexts=[];const createScope=()=>{const scopeContexts=defaultContexts.map((defaultContext=>react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext)));return function useScope(scope){const contexts=scope?.[scopeName]||scopeContexts;return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${scopeName}`]:{...scope,[scopeName]:contexts}})),[scope,contexts])}};return createScope.scopeName=scopeName,[function createContext3(rootComponentName,defaultContext){const BaseContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(defaultContext),index=defaultContexts.length;defaultContexts=[...defaultContexts,defaultContext];const Provider=props=>{const{scope,children,...context}=props,Context=scope?.[scopeName]?.[index]||BaseContext,value=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>context),Object.values(context));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Context.Provider,{value,children})};return Provider.displayName=rootComponentName+"Provider",[Provider,function useContext2(consumerName,scope){const Context=scope?.[scopeName]?.[index]||BaseContext,context=react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);if(context)return context;if(void 0!==defaultContext)return defaultContext;throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``)}]},composeContextScopes(createScope,...createContextScopeDeps)]}function composeContextScopes(...scopes){const baseScope=scopes[0];if(1===scopes.length)return baseScope;const createScope=()=>{const scopeHooks=scopes.map((createScope2=>({useScope:createScope2(),scopeName:createScope2.scopeName})));return function useComposedScopes(overrideScopes){const nextScopes=scopeHooks.reduce(((nextScopes2,{useScope,scopeName})=>({...nextScopes2,...useScope(overrideScopes)[`__scope${scopeName}`]})),{});return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({[`__scope${baseScope.scopeName}`]:nextScopes})),[nextScopes])}};return createScope.scopeName=baseScope.scopeName,createScope}},"./node_modules/@radix-ui/react-primitive/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{hO:()=>dispatchDiscreteCustomEvent,sG:()=>Primitive});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Primitive=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce(((primitive,node)=>{const Node=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{asChild,...primitiveProps}=props,Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:node;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Comp,{...primitiveProps,ref:forwardedRef})}));return Node.displayName=`Primitive.${node}`,{...primitive,[node]:Node}}),{});function dispatchDiscreteCustomEvent(target,event){target&&react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>target.dispatchEvent(event)))}},"./node_modules/@radix-ui/react-slot/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{DX:()=>Slot,xV:()=>Slottable});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Slot=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props,childrenArray=react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children),slottable=childrenArray.find(isSlottable);if(slottable){const newElement=slottable.props.children,newChildren=childrenArray.map((child=>child===slottable?react__WEBPACK_IMPORTED_MODULE_0__.Children.count(newElement)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?newElement.props.children:null:child));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children:react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(newElement)?react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(newElement,void 0,newChildren):null})}return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(SlotClone,{...slotProps,ref:forwardedRef,children})}));Slot.displayName="Slot";var SlotClone=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,forwardedRef)=>{const{children,...slotProps}=props;if(react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(children)){const childrenRef=function getElementRef(element){let getter=Object.getOwnPropertyDescriptor(element.props,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning;if(mayWarn)return element.ref;if(getter=Object.getOwnPropertyDescriptor(element,"ref")?.get,mayWarn=getter&&"isReactWarning"in getter&&getter.isReactWarning,mayWarn)return element.props.ref;return element.props.ref||element.ref}(children),props2=function mergeProps(slotProps,childProps){const overrideProps={...childProps};for(const propName in childProps){const slotPropValue=slotProps[propName],childPropValue=childProps[propName];/^on[A-Z]/.test(propName)?slotPropValue&&childPropValue?overrideProps[propName]=(...args)=>{childPropValue(...args),slotPropValue(...args)}:slotPropValue&&(overrideProps[propName]=slotPropValue):"style"===propName?overrideProps[propName]={...slotPropValue,...childPropValue}:"className"===propName&&(overrideProps[propName]=[slotPropValue,childPropValue].filter(Boolean).join(" "))}return{...slotProps,...overrideProps}}(slotProps,children.props);return children.type!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&(props2.ref=forwardedRef?(0,_radix_ui_react_compose_refs__WEBPACK_IMPORTED_MODULE_2__.t)(forwardedRef,childrenRef):childrenRef),react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,props2)}return react__WEBPACK_IMPORTED_MODULE_0__.Children.count(children)>1?react__WEBPACK_IMPORTED_MODULE_0__.Children.only(null):null}));SlotClone.displayName="SlotClone";var Slottable=({children})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children});function isSlottable(child){return react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)&&child.type===Slottable}},"./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>useCallbackRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useCallbackRef(callback){const callbackRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(callback);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{callbackRef.current=callback})),react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>(...args)=>callbackRef.current?.(...args)),[])}},"./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>useLayoutEffect2});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),useLayoutEffect2=Boolean(globalThis?.document)?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:()=>{}},"./node_modules/react-dom/cjs/react-dom.production.js":(__unused_webpack_module,exports,__webpack_require__)=>{var React=__webpack_require__("./node_modules/react/index.js");function formatProdErrorMessage(code){var url="https://react.dev/errors/"+code;if(1<arguments.length){url+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)url+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+code+"; visit "+url+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function noop(){}var Internals={d:{f:noop,r:function(){throw Error(formatProdErrorMessage(522))},D:noop,C:noop,L:noop,m:noop,X:noop,S:noop,M:noop},p:0,findDOMNode:null},REACT_PORTAL_TYPE=Symbol.for("react.portal");var ReactSharedInternals=React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function getCrossOriginStringAs(as,input){return"font"===as?"":"string"==typeof input?"use-credentials"===input?input:"":void 0}exports.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Internals,exports.createPortal=function(children,container){var key=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!container||1!==container.nodeType&&9!==container.nodeType&&11!==container.nodeType)throw Error(formatProdErrorMessage(299));return function createPortal$1(children,containerInfo,implementation){var key=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:REACT_PORTAL_TYPE,key:null==key?null:""+key,children,containerInfo,implementation}}(children,container,null,key)},exports.flushSync=function(fn){var previousTransition=ReactSharedInternals.T,previousUpdatePriority=Internals.p;try{if(ReactSharedInternals.T=null,Internals.p=2,fn)return fn()}finally{ReactSharedInternals.T=previousTransition,Internals.p=previousUpdatePriority,Internals.d.f()}},exports.preconnect=function(href,options){"string"==typeof href&&(options?options="string"==typeof(options=options.crossOrigin)?"use-credentials"===options?options:"":void 0:options=null,Internals.d.C(href,options))},exports.prefetchDNS=function(href){"string"==typeof href&&Internals.d.D(href)},exports.preinit=function(href,options){if("string"==typeof href&&options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin),integrity="string"==typeof options.integrity?options.integrity:void 0,fetchPriority="string"==typeof options.fetchPriority?options.fetchPriority:void 0;"style"===as?Internals.d.S(href,"string"==typeof options.precedence?options.precedence:void 0,{crossOrigin,integrity,fetchPriority}):"script"===as&&Internals.d.X(href,{crossOrigin,integrity,fetchPriority,nonce:"string"==typeof options.nonce?options.nonce:void 0})}},exports.preinitModule=function(href,options){if("string"==typeof href)if("object"==typeof options&&null!==options){if(null==options.as||"script"===options.as){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.M(href,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0})}}else null==options&&Internals.d.M(href)},exports.preload=function(href,options){if("string"==typeof href&&"object"==typeof options&&null!==options&&"string"==typeof options.as){var as=options.as,crossOrigin=getCrossOriginStringAs(as,options.crossOrigin);Internals.d.L(href,as,{crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0,nonce:"string"==typeof options.nonce?options.nonce:void 0,type:"string"==typeof options.type?options.type:void 0,fetchPriority:"string"==typeof options.fetchPriority?options.fetchPriority:void 0,referrerPolicy:"string"==typeof options.referrerPolicy?options.referrerPolicy:void 0,imageSrcSet:"string"==typeof options.imageSrcSet?options.imageSrcSet:void 0,imageSizes:"string"==typeof options.imageSizes?options.imageSizes:void 0,media:"string"==typeof options.media?options.media:void 0})}},exports.preloadModule=function(href,options){if("string"==typeof href)if(options){var crossOrigin=getCrossOriginStringAs(options.as,options.crossOrigin);Internals.d.m(href,{as:"string"==typeof options.as&&"script"!==options.as?options.as:void 0,crossOrigin,integrity:"string"==typeof options.integrity?options.integrity:void 0})}else Internals.d.m(href)},exports.requestFormReset=function(form){Internals.d.r(form)},exports.unstable_batchedUpdates=function(fn,a){return fn(a)},exports.useFormState=function(action,initialState,permalink){return ReactSharedInternals.H.useFormState(action,initialState,permalink)},exports.useFormStatus=function(){return ReactSharedInternals.H.useHostTransitionStatus()},exports.version="19.0.0"},"./node_modules/react-dom/index.js":(module,__unused_webpack_exports,__webpack_require__)=>{!function checkDCE(){if("undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE)}catch(err){console.error(err)}}(),module.exports=__webpack_require__("./node_modules/react-dom/cjs/react-dom.production.js")},"./node_modules/react/cjs/react-jsx-runtime.production.js":(__unused_webpack_module,exports)=>{var REACT_ELEMENT_TYPE=Symbol.for("react.transitional.element"),REACT_FRAGMENT_TYPE=Symbol.for("react.fragment");function jsxProd(type,config,maybeKey){var key=null;if(void 0!==maybeKey&&(key=""+maybeKey),void 0!==config.key&&(key=""+config.key),"key"in config)for(var propName in maybeKey={},config)"key"!==propName&&(maybeKey[propName]=config[propName]);else maybeKey=config;return config=maybeKey.ref,{$$typeof:REACT_ELEMENT_TYPE,type,key,ref:void 0!==config?config:null,props:maybeKey}}exports.Fragment=REACT_FRAGMENT_TYPE,exports.jsx=jsxProd,exports.jsxs=jsxProd},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.js")},"./src/components/shadcn/avatar.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BK:()=>AvatarImage,eu:()=>Avatar,q5:()=>AvatarFallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-avatar/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");function Avatar({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__.bL,{"data-slot":"avatar",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full",className),...props})}function AvatarImage({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__._V,{"data-slot":"avatar-image",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("aspect-square size-full",className),...props})}function AvatarFallback({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_avatar__WEBPACK_IMPORTED_MODULE_1__.H4,{"data-slot":"avatar-fallback",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("bg-muted flex size-full items-center justify-center rounded-full",className),...props})}Avatar.__docgenInfo={description:"",methods:[],displayName:"Avatar"},AvatarImage.__docgenInfo={description:"",methods:[],displayName:"AvatarImage"},AvatarFallback.__docgenInfo={description:"",methods:[],displayName:"AvatarFallback"}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const cn=(...inputs)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))},"./src/stories/components/shadcn/avatar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ColoredFallback:()=>ColoredFallback,CustomSize:()=>CustomSize,Default:()=>Default,Group:()=>Group,Square:()=>Square,WithFallback:()=>WithFallback,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/shadcn/avatar.tsx"),_themes_shadcn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Shadcn/Avatar",component:_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.eu,parameters:{layout:"centered"},tags:["autodocs","stable","version:2.3.0"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themes_shadcn__WEBPACK_IMPORTED_MODULE_2__.N,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,null,"CN"))}},WithFallback={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://invalid-image-url.png",alt:"@user"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,null,"JD"))}},CustomSize={args:{className:"h-16 w-16",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,{className:"text-lg"},"CN"))}},ColoredFallback={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://invalid-image-url.png",alt:"@user"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,{className:"bg-primary text-primary-foreground"},"JD"))}},Square={args:{className:"rounded-md",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{className:"rounded-md",src:"https://github.com/shadcn.png",alt:"@shadcn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,{className:"rounded-md"},"CN"))}},Group={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex -space-x-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.eu,{className:"border-2 border-background"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://github.com/shadcn.png",alt:"@shadcn"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,null,"CN")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.eu,{className:"border-2 border-background"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.BK,{src:"https://github.com/diego3g.png",alt:"@diego3g"}),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,null,"D3")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.eu,{className:"border-2 border-background"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_avatar__WEBPACK_IMPORTED_MODULE_1__.q5,{className:"bg-primary text-primary-foreground"},"+2")))}},__namedExportsOrder=["Default","WithFallback","CustomSize","ColoredFallback","Square","Group"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n        <AvatarFallback>CN</AvatarFallback>\n      </>\n  }\n}',...Default.parameters?.docs?.source},description:{story:"Default avatar with an image and fallback.",...Default.parameters?.docs?.description}}},WithFallback.parameters={...WithFallback.parameters,docs:{...WithFallback.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AvatarImage src="https://invalid-image-url.png" alt="@user" />\n        <AvatarFallback>JD</AvatarFallback>\n      </>\n  }\n}',...WithFallback.parameters?.docs?.source},description:{story:"Avatar with a fallback when image fails to load.",...WithFallback.parameters?.docs?.description}}},CustomSize.parameters={...CustomSize.parameters,docs:{...CustomSize.parameters?.docs,source:{originalSource:'{\n  args: {\n    className: "h-16 w-16",\n    children: <>\n        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n        <AvatarFallback className="text-lg">CN</AvatarFallback>\n      </>\n  }\n}',...CustomSize.parameters?.docs?.source},description:{story:"Avatar with custom size.",...CustomSize.parameters?.docs?.description}}},ColoredFallback.parameters={...ColoredFallback.parameters,docs:{...ColoredFallback.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AvatarImage src="https://invalid-image-url.png" alt="@user" />\n        <AvatarFallback className="bg-primary text-primary-foreground">\n          JD\n        </AvatarFallback>\n      </>\n  }\n}',...ColoredFallback.parameters?.docs?.source},description:{story:"Avatar with colored fallback.",...ColoredFallback.parameters?.docs?.description}}},Square.parameters={...Square.parameters,docs:{...Square.parameters?.docs,source:{originalSource:'{\n  args: {\n    className: "rounded-md",\n    children: <>\n        <AvatarImage className="rounded-md" src="https://github.com/shadcn.png" alt="@shadcn" />\n        <AvatarFallback className="rounded-md">CN</AvatarFallback>\n      </>\n  }\n}',...Square.parameters?.docs?.source},description:{story:"Avatar with square shape.",...Square.parameters?.docs?.description}}},Group.parameters={...Group.parameters,docs:{...Group.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <div className="flex -space-x-4">\n        <Avatar className="border-2 border-background">\n          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />\n          <AvatarFallback>CN</AvatarFallback>\n        </Avatar>\n        <Avatar className="border-2 border-background">\n          <AvatarImage src="https://github.com/diego3g.png" alt="@diego3g" />\n          <AvatarFallback>D3</AvatarFallback>\n        </Avatar>\n        <Avatar className="border-2 border-background">\n          <AvatarFallback className="bg-primary text-primary-foreground">\n            +2\n          </AvatarFallback>\n        </Avatar>\n      </div>\n  }\n}',...Group.parameters?.docs?.source},description:{story:"Group of avatars.",...Group.parameters?.docs?.description}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);