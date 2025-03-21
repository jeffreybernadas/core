"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[8818],{"./node_modules/next-themes/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>z,N:()=>J});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),M=(e,r,s,u,m,d,l,h)=>{let a=document.documentElement,v=["light","dark"];function p(c){(Array.isArray(e)?e:[e]).forEach((y=>{let k="class"===y,S=k&&d?m.map((f=>d[f]||f)):m;k?(a.classList.remove(...S),a.classList.add(d[c]||c)):a.setAttribute(y,c)})),function R(c){h&&v.includes(c)&&(a.style.colorScheme=c)}(c)}if(u)p(u);else try{let c=localStorage.getItem(r)||s;p(l&&"system"===c?function i(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}():c)}catch(c){}},b=["light","dark"],I="(prefers-color-scheme: dark)",O="undefined"==typeof window,x=react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0),U={setTheme:e=>{},themes:[]},z=()=>{var e;return null!=(e=react__WEBPACK_IMPORTED_MODULE_0__.useContext(x))?e:U},J=e=>react__WEBPACK_IMPORTED_MODULE_0__.useContext(x)?react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,e.children):react__WEBPACK_IMPORTED_MODULE_0__.createElement(V,{...e}),N=["light","dark"],V=({forcedTheme:e,disableTransitionOnChange:r=!1,enableSystem:s=!0,enableColorScheme:u=!0,storageKey:m="theme",themes:d=N,defaultTheme:l=(s?"system":"light"),attribute:h="data-theme",value:a,children:v,nonce:p,scriptProps:R})=>{let[i,c]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>H(m,l))),[w,y]=react__WEBPACK_IMPORTED_MODULE_0__.useState((()=>"system"===i?E():i)),k=a?Object.values(a):d,S=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((n=>{let o=n;if(!o)return;"system"===n&&s&&(o=E());let T=a?a[o]:o,C=r?W(p):null,P=document.documentElement,L=g=>{"class"===g?(P.classList.remove(...k),T&&P.classList.add(T)):g.startsWith("data-")&&(T?P.setAttribute(g,T):P.removeAttribute(g))};if(Array.isArray(h)?h.forEach(L):L(h),u){let g=b.includes(l)?l:null,D=b.includes(o)?o:g;P.style.colorScheme=D}null==C||C()}),[p]),f=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((n=>{let o="function"==typeof n?n(i):n;c(o);try{localStorage.setItem(m,o)}catch(T){}}),[i]),A=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((n=>{let o=E(n);y(o),"system"===i&&s&&!e&&S("system")}),[i,e]);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let n=window.matchMedia(I);return n.addListener(A),A(n),()=>n.removeListener(A)}),[A]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{let n=o=>{o.key===m&&(o.newValue?c(o.newValue):f(l))};return window.addEventListener("storage",n),()=>window.removeEventListener("storage",n)}),[f]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{S(null!=e?e:i)}),[e,i]);let Q=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({theme:i,setTheme:f,forcedTheme:e,resolvedTheme:"system"===i?w:i,themes:s?[...d,"system"]:d,systemTheme:s?w:void 0})),[i,f,e,w,s,d]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(x.Provider,{value:Q},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_,{forcedTheme:e,storageKey:m,attribute:h,enableSystem:s,enableColorScheme:u,defaultTheme:l,value:a,themes:d,nonce:p,scriptProps:R}),v)},_=react__WEBPACK_IMPORTED_MODULE_0__.memo((({forcedTheme:e,storageKey:r,attribute:s,enableSystem:u,enableColorScheme:m,defaultTheme:d,value:l,themes:h,nonce:a,scriptProps:v})=>{let p=JSON.stringify([s,r,d,e,h,l,u,m]).slice(1,-1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("script",{...v,suppressHydrationWarning:!0,nonce:"undefined"==typeof window?a:"",dangerouslySetInnerHTML:{__html:`(${M.toString()})(${p})`}})})),H=(e,r)=>{if(O)return;let s;try{s=localStorage.getItem(e)||void 0}catch(u){}return s||r},W=e=>{let r=document.createElement("style");return e&&r.setAttribute("nonce",e),r.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),setTimeout((()=>{document.head.removeChild(r)}),1)}},E=e=>(e||(e=window.matchMedia(I)),e.matches?"dark":"light")},"./src/hooks/misc/util.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AU:()=>off,Bd:()=>isBrowser,lQ:()=>noop,on:()=>on,w2:()=>isNavigator});const noop=()=>{};function on(obj,...args){obj&&obj.addEventListener&&obj.addEventListener(...args)}function off(obj,...args){obj&&obj.removeEventListener&&obj.removeEventListener(...args)}const isBrowser="undefined"!=typeof window,isNavigator="undefined"!=typeof navigator},"./src/stories/hooks/useNetworkState.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicExample:()=>BasicExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useNetworkState_stories});var react=__webpack_require__("./node_modules/react/index.js"),util=__webpack_require__("./src/hooks/misc/util.ts");const nav=util.w2?navigator:void 0,conn=nav&&(nav.connection||nav.mozConnection||nav.webkitConnection);function getConnectionState(previousState){const online=nav?.onLine,previousOnline=previousState?.online;return{online,previous:previousOnline,since:online!==previousOnline?new Date:previousState?.since,downlink:conn?.downlink,downlinkMax:conn?.downlinkMax,effectiveType:conn?.effectiveType,rtt:conn?.rtt,saveData:conn?.saveData,type:conn?.type}}var dist=__webpack_require__("./node_modules/next-themes/dist/index.mjs");const useNetworkState_stories={title:"Hooks/Browser API/useNetworkState",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useNetworkState` is a hook that tracks the browser's network connection state.\nIt's useful for implementing offline-first functionality and network-aware features.\n\n### Module Federation Import\n```tsx\nimport { useNetworkState } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useNetworkState } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const state = useNetworkState();\n\n  return (\n    <div>\n      <div>Online: {state.online ? 'Yes' : 'No'}</div>\n      {state.online && (\n        <div>\n          <div>Downlink: {state.downlink} Mbps</div>\n          <div>Effective Type: {state.effectiveType}</div>\n        </div>\n      )}\n    </div>\n  );\n};\n```\n\n### Advanced Usage\n```tsx\nconst NetworkAwareComponent = () => {\n  const state = useNetworkState();\n\n  const getImageQuality = () => {\n    if (!state.online) return 'low';\n    if (state.effectiveType === '4g') return 'high';\n    if (state.downlink > 1) return 'medium';\n    return 'low';\n  };\n\n  return (\n    <div>\n      <div>Connection Status: {state.online ? 'Connected' : 'Offline'}</div>\n      <div>Loading images in {getImageQuality()} quality</div>\n    </div>\n  );\n};\n```\n\n### Parameters\nNone\n\n### Returns\n```tsx\n{\n  online: boolean;\n  since?: Date;\n  downlink?: number;\n  downlinkMax?: number;\n  effectiveType?: '2g' | '3g' | '4g';\n  rtt?: number;\n  saveData?: boolean;\n  type?: 'bluetooth' | 'cellular' | 'ethernet' | 'none' | 'wifi' | 'wimax' | 'other' | 'unknown';\n}\n```\n\n### Browser Compatibility\n- Network Information API is not fully supported in all browsers\n- Basic online/offline status is widely supported\n- Advanced metrics (downlink, effectiveType) may be undefined in some browsers\n\n### Related Resources\n- [MDN: Network Information API](https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API)\n- [MDN: Navigator.onLine](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/onLine)"}}},tags:["autodocs"],decorators:[Story=>react.createElement(dist.N,null,react.createElement(Story,null))]},BasicExample={render:()=>{const state=function useNetworkState(initialState){const[state,setState]=(0,react.useState)(initialState??getConnectionState);return(0,react.useEffect)((()=>{const handleStateChange=()=>{setState(getConnectionState)};return(0,util.on)(window,"online",handleStateChange,{passive:!0}),(0,util.on)(window,"offline",handleStateChange,{passive:!0}),conn&&(0,util.on)(conn,"change",handleStateChange,{passive:!0}),()=>{(0,util.AU)(window,"online",handleStateChange),(0,util.AU)(window,"offline",handleStateChange),conn&&(0,util.AU)(conn,"change",handleStateChange)}}),[]),state}();return react.createElement("div",{className:"space-y-6 max-w-lg"},react.createElement("div",null,react.createElement("h3",{className:"text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100"},"Network Status"),react.createElement("div",{className:"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4"},react.createElement("div",{className:"flex items-center space-x-2"},react.createElement("div",{className:"w-3 h-3 rounded-full "+(state.online?"bg-green-500":"bg-red-500")}),react.createElement("span",{className:"text-slate-700 dark:text-slate-300"},state.online?"Online":"Offline")),state.online&&react.createElement("div",{className:"space-y-2 text-sm text-slate-600 dark:text-slate-400"},state.effectiveType&&react.createElement("div",null,"Connection: ",state.effectiveType.toUpperCase()),state.downlink&&react.createElement("div",null,"Speed: ",state.downlink," Mbps"),state.type&&react.createElement("div",null,"Type: ",state.type),state.rtt&&react.createElement("div",null,"Latency: ",state.rtt,"ms"),void 0!==state.saveData&&react.createElement("div",null,"Data Saver: ",state.saveData?"On":"Off")))),react.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Toggle your device's network connection or switch between Wi-Fi and mobile data to see the network state changes! 📶")))}},__namedExportsOrder=["BasicExample"];BasicExample.parameters={...BasicExample.parameters,docs:{...BasicExample.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const state = useNetworkState();\n    return <div className="space-y-6 max-w-lg">\n        <div>\n          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">\n            Network Status\n          </h3>\n          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">\n            <div className="flex items-center space-x-2">\n              <div className={`w-3 h-3 rounded-full ${state.online ? "bg-green-500" : "bg-red-500"}`} />\n              <span className="text-slate-700 dark:text-slate-300">\n                {state.online ? "Online" : "Offline"}\n              </span>\n            </div>\n            {state.online && <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">\n                {state.effectiveType && <div>Connection: {state.effectiveType.toUpperCase()}</div>}\n                {state.downlink && <div>Speed: {state.downlink} Mbps</div>}\n                {state.type && <div>Type: {state.type}</div>}\n                {state.rtt && <div>Latency: {state.rtt}ms</div>}\n                {state.saveData !== undefined && <div>Data Saver: {state.saveData ? "On" : "Off"}</div>}\n              </div>}\n          </div>\n        </div>\n\n        {/* Instructions */}\n        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n          <p className="text-sm text-blue-600 dark:text-blue-400">\n            Toggle your device\'s network connection or switch between Wi-Fi and\n            mobile data to see the network state changes! 📶\n          </p>\n        </div>\n      </div>;\n  }\n}',...BasicExample.parameters?.docs?.source}}}}}]);