"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[7261],{"./src/stories/hooks/useIdle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useIdle_stories});var react=__webpack_require__("./node_modules/react/index.js");const DEFAULT_OPTIONS={events:["keypress","mousemove","touchmove","click","scroll"],initialState:!0},hooks_useIdle=(timeout,options)=>{const{events,initialState}={...DEFAULT_OPTIONS,...options},[idle,setIdle]=(0,react.useState)(initialState),timer=(0,react.useRef)(-1);return(0,react.useEffect)((()=>{const handleEvents=()=>{setIdle(!1),timer.current&&window.clearTimeout(timer.current),timer.current=window.setTimeout((()=>{setIdle(!0)}),timeout)};return events.forEach((event=>document.addEventListener(event,handleEvents))),timer.current=window.setTimeout((()=>{setIdle(!0)}),timeout),()=>{events.forEach((event=>document.removeEventListener(event,handleEvents)))}}),[timeout]),idle};var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const useIdle_stories={title:"Hooks/Browser API/useIdle",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useIdle` is a hook that detects when a user becomes idle (no interaction) for a specified period.\nIt's useful for implementing auto-logout, screen savers, or any feature that needs to respond to user inactivity.\n\n### Module Federation Import\n```tsx\nimport { useIdle } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useIdle } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const isIdle = useIdle(5000); // 5 seconds\n\n  useEffect(() => {\n    if (isIdle) {\n      console.log('User is idle, logging out...');\n    }\n  }, [isIdle]);\n\n  return <div>{isIdle ? 'User is idle' : 'User is active'}</div>;\n};\n```\n\n### Advanced Usage\n```tsx\nconst CustomIdleMonitor = () => {\n  const isIdle = useIdle(3000, {\n    events: ['mousemove', 'click'], // Only monitor these events\n    initialState: false, // Start as not idle\n  });\n\n  return (\n    <div className={isIdle ? 'dimmed' : ''}>\n      {isIdle ? 'Wake up!' : 'Working...'}\n    </div>\n  );\n};\n```\n\n### Parameters\n```tsx\ntimeout: number // Time in milliseconds before considering user idle\noptions?: {\n  events?: (keyof DocumentEventMap)[] // Events to monitor\n  initialState?: boolean // Initial idle state\n}\n```\n\n### Returns\n```tsx\nboolean // True if user is idle, false otherwise\n```\n\n### Browser Compatibility\nUses standard DOM events and setTimeout:\n- keypress\n- mousemove\n- touchmove\n- click\n- scroll\nSupported in all modern browsers.\n\n### Related Resources\n- [MDN: Document Events](https://developer.mozilla.org/en-US/docs/Web/API/Document#events)\n- [MDN: setTimeout](https://developer.mozilla.org/en-US/docs/Web/API/setTimeout)"}}},tags:["autodocs"],decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement(Story,null))]},Example={render:()=>{const[idleTime,setIdleTime]=(0,react.useState)(5e3),[lastActivity,setLastActivity]=(0,react.useState)(new Date),isIdle=hooks_useIdle(idleTime);return react.useEffect((()=>{isIdle||setLastActivity(new Date)}),[isIdle]),react.createElement("div",{className:"space-y-6 w-[400px]"},react.createElement("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4"},react.createElement("div",{className:"text-center p-4 rounded-lg transition-colors "+(isIdle?"bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300":"bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300")},react.createElement("div",{className:"text-2xl mb-2"},isIdle?"😴 User is Idle":"👋 User is Active"),react.createElement("div",{className:"text-sm opacity-75"},"Last activity: ",lastActivity.toLocaleTimeString())),react.createElement("div",{className:"space-y-2"},react.createElement("label",{className:"block text-sm font-medium text-slate-700 dark:text-slate-300"},"Idle Timeout: ",idleTime/1e3,"s"),react.createElement("input",{type:"range",min:"1000",max:"10000",step:"1000",value:idleTime,onChange:e=>setIdleTime(Number(e.target.value)),className:"w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"}),react.createElement("div",{className:"flex justify-between text-xs text-slate-500 dark:text-slate-400"},react.createElement("span",null,"1s"),react.createElement("span",null,"10s"))),react.createElement("div",{className:"bg-slate-100 dark:bg-slate-700/50 rounded p-4 space-y-2"},react.createElement("h4",{className:"text-sm font-medium text-slate-700 dark:text-slate-300"},"Monitored Events:"),react.createElement("div",{className:"grid grid-cols-2 gap-2 text-xs"},["keypress","mousemove","touchmove","click","scroll"].map((event=>react.createElement("div",{key:event,className:"px-2 py-1 bg-white dark:bg-slate-600 rounded flex items-center gap-2"},react.createElement("span",{className:"w-2 h-2 rounded-full bg-green-500"}),event))))),react.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Stop moving your mouse and wait for the idle timer! Adjust the slider to change how quickly the idle state triggers. Any interaction will reset the timer! ⏰"))))}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [idleTime, setIdleTime] = useState(5000); // 5 seconds default\n    const [lastActivity, setLastActivity] = useState(new Date());\n    const isIdle = useIdle(idleTime);\n\n    // Update last activity timestamp when not idle\n    React.useEffect(() => {\n      if (!isIdle) {\n        setLastActivity(new Date());\n      }\n    }, [isIdle]);\n    return <div className="space-y-6 w-[400px]">\n        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-4">\n          {/* Status Display */}\n          <div className={`text-center p-4 rounded-lg transition-colors ${isIdle ? "bg-red-100 dark:bg-red-900/20 text-red-700 dark:text-red-300" : "bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300"}`}>\n            <div className="text-2xl mb-2">\n              {isIdle ? "😴 User is Idle" : "👋 User is Active"}\n            </div>\n            <div className="text-sm opacity-75">\n              Last activity: {lastActivity.toLocaleTimeString()}\n            </div>\n          </div>\n\n          {/* Idle Timer Control */}\n          <div className="space-y-2">\n            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">\n              Idle Timeout: {idleTime / 1000}s\n            </label>\n            <input type="range" min="1000" max="10000" step="1000" value={idleTime} onChange={e => setIdleTime(Number(e.target.value))} className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer" />\n            <div className="flex justify-between text-xs text-slate-500 dark:text-slate-400">\n              <span>1s</span>\n              <span>10s</span>\n            </div>\n          </div>\n\n          {/* Activity Monitor */}\n          <div className="bg-slate-100 dark:bg-slate-700/50 rounded p-4 space-y-2">\n            <h4 className="text-sm font-medium text-slate-700 dark:text-slate-300">\n              Monitored Events:\n            </h4>\n            <div className="grid grid-cols-2 gap-2 text-xs">\n              {["keypress", "mousemove", "touchmove", "click", "scroll"].map(event => <div key={event} className="px-2 py-1 bg-white dark:bg-slate-600 rounded flex items-center gap-2">\n                    <span className="w-2 h-2 rounded-full bg-green-500"></span>\n                    {event}\n                  </div>)}\n            </div>\n          </div>\n\n          {/* Instructions */}\n          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n            <p className="text-sm text-blue-600 dark:text-blue-400">\n              Stop moving your mouse and wait for the idle timer! Adjust the\n              slider to change how quickly the idle state triggers. Any\n              interaction will reset the timer! ⏰\n            </p>\n          </div>\n        </div>\n      </div>;\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);