"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[6977],{"./src/hooks/useAsync.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useAsync});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useAsyncFn.ts");function useAsync(fn,deps=[]){const[state,callback]=(0,_useAsyncFn__WEBPACK_IMPORTED_MODULE_1__.A)(fn,deps,{loading:!0});return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{callback()}),[callback]),state}},"./src/hooks/useAsyncFn.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useAsyncFn});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useMountedState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useMountedState.ts");function useAsyncFn(fn,deps=[],initialState={loading:!1}){const lastCallId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0),isMounted=(0,_useMountedState__WEBPACK_IMPORTED_MODULE_1__.A)(),[state,set]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState),callback=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(((...args)=>{const callId=++lastCallId.current;return state.loading||set((prevState=>({...prevState,loading:!0}))),fn(...args).then((value=>(isMounted()&&callId===lastCallId.current&&set({value,loading:!1}),value)),(error=>(isMounted()&&callId===lastCallId.current&&set({error,loading:!1}),error)))}),deps);return[state,callback]}},"./src/hooks/useMountedState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useMountedState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMountedState(){const mountedRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!1),get=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>mountedRef.current),[]);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(mountedRef.current=!0,()=>{mountedRef.current=!1})),[]),get}},"./src/stories/hooks/useAsyncRetry.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useAsyncRetry_stories});var react=__webpack_require__("./node_modules/react/index.js"),useAsync=__webpack_require__("./src/hooks/useAsync.ts");const hooks_useAsyncRetry=(fn,deps=[])=>{const[attempt,setAttempt]=(0,react.useState)(0),state=(0,useAsync.A)(fn,[...deps,attempt]),stateLoading=state.loading,retry=(0,react.useCallback)((()=>{stateLoading||setAttempt((currentAttempt=>currentAttempt+1))}),[...deps,stateLoading]);return{...state,retry}};var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const useAsyncRetry_stories={title:"Hooks/State Management/useAsyncRetry",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useAsyncRetry` is a hook that extends useAsync with retry functionality.\nIt's useful for handling retryable async operations, like API calls that might fail temporarily.\n\n### Module Federation Import\n```tsx\nimport { useAsyncRetry } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useAsyncRetry } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const state = useAsyncRetry(async () => {\n    const response = await fetch('/api/data');\n    if (!response.ok) throw new Error('Failed to fetch');\n    return response.json();\n  });\n\n  if (state.loading) return <div>Loading...</div>;\n  if (state.error) {\n    return (\n      <div>\n        Error: {state.error.message}\n        <button onClick={state.retry}>Retry</button>\n      </div>\n    );\n  }\n  return <div>Data: {JSON.stringify(state.value)}</div>;\n};\n```\n\n### Parameters\n```tsx\nuseAsyncRetry<T>(\n  fn: () => Promise<T>, // Async function to execute\n  deps?: DependencyList = [] // Dependencies array that triggers re-execution\n): AsyncStateRetry<T>\n```\n\n### Returns\n- AsyncStateRetry<T>: Extends AsyncState with retry functionality\n  - loading: boolean - Whether the async function is currently executing\n  - error: Error | undefined - Error object if the async function failed\n  - value: T | undefined - Result value if the async function succeeded\n  - retry: () => void - Function to retry the async operation\n\n### Browser Compatibility\nUses standard Promise API, supported in all modern browsers.\n\n### Related Resources\n- [MDN: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)\n- [MDN: Error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)"}}},tags:["autodocs"],decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement(Story,null))]},Example={render:()=>{const state=hooks_useAsyncRetry((async()=>{if(await new Promise((resolve=>setTimeout(resolve,1e3))),Math.random()>.5)throw new Error("Failed to fetch weather data. Please try again.");return{temperature:Math.round(30*Math.random()+10),condition:["Sunny","Cloudy","Rainy","Stormy"][Math.floor(4*Math.random())],humidity:Math.round(50*Math.random()+30),windSpeed:Math.round(30*Math.random())}}));return react.createElement("div",{className:"space-y-6 max-w-lg"},react.createElement("div",null,react.createElement("h3",{className:"text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100"},"Weather Data Fetcher"),react.createElement("div",{className:"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg"},react.createElement("div",{className:"space-y-4"},react.createElement("div",{className:"flex items-center justify-between"},react.createElement("div",{className:"text-sm text-slate-600 dark:text-slate-400"},state.loading?"Fetching weather data...":"Last update: just now"),react.createElement("button",{onClick:state.retry,disabled:state.loading,className:"px-3 py-1 rounded text-sm transition-colors "+(state.loading?"bg-blue-400 cursor-not-allowed text-white":"bg-blue-500 hover:bg-blue-600 text-white")},state.loading?"Fetching...":"Refresh")),state.error?react.createElement("div",{className:"bg-red-50 dark:bg-red-900/20 p-4 rounded space-y-3"},react.createElement("div",{className:"flex items-center text-red-600 dark:text-red-400"},react.createElement("svg",{className:"w-5 h-5 mr-2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor"},react.createElement("path",{d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})),react.createElement("span",null,state.error.message)),react.createElement("button",{onClick:state.retry,className:"w-full px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors"},"Try Again")):state.value?react.createElement("div",{className:"bg-white dark:bg-slate-700 rounded p-4 space-y-3"},react.createElement("div",{className:"grid grid-cols-2 gap-4"},react.createElement("div",{className:"space-y-1"},react.createElement("div",{className:"text-3xl font-bold text-slate-900 dark:text-slate-100"},state.value.temperature,"°C"),react.createElement("div",{className:"text-sm text-slate-500 dark:text-slate-400"},state.value.condition)),react.createElement("div",{className:"space-y-2"},react.createElement("div",{className:"flex items-center justify-between text-sm"},react.createElement("span",{className:"text-slate-500 dark:text-slate-400"},"Humidity"),react.createElement("span",{className:"text-slate-900 dark:text-slate-100"},state.value.humidity,"%")),react.createElement("div",{className:"flex items-center justify-between text-sm"},react.createElement("span",{className:"text-slate-500 dark:text-slate-400"},"Wind Speed"),react.createElement("span",{className:"text-slate-900 dark:text-slate-100"},state.value.windSpeed," km/h"))))):null,react.createElement("div",{className:"text-xs text-slate-500 dark:text-slate-400 italic"},"Note: This example simulates a flaky API that fails 50% of the time to demonstrate retry functionality.")),react.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Trigger error by hitting the refresh button, then use the try again button to attempt the request again! 🔁")))))}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    // Simulated flaky API that fails randomly\n    const fetchWeatherData = async () => {\n      await new Promise(resolve => setTimeout(resolve, 1000));\n\n      // Randomly fail 50% of the time\n      if (Math.random() > 0.5) {\n        throw new Error("Failed to fetch weather data. Please try again.");\n      }\n      return {\n        temperature: Math.round(Math.random() * 30 + 10),\n        // 10-40°C\n        condition: ["Sunny", "Cloudy", "Rainy", "Stormy"][Math.floor(Math.random() * 4)],\n        humidity: Math.round(Math.random() * 50 + 30),\n        // 30-80%\n        windSpeed: Math.round(Math.random() * 30) // 0-30 km/h\n      };\n    };\n    const state = useAsyncRetry(fetchWeatherData);\n    return <div className="space-y-6 max-w-lg">\n        <div>\n          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">\n            Weather Data Fetcher\n          </h3>\n          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg">\n            <div className="space-y-4">\n              <div className="flex items-center justify-between">\n                <div className="text-sm text-slate-600 dark:text-slate-400">\n                  {state.loading ? "Fetching weather data..." : "Last update: just now"}\n                </div>\n                <button onClick={state.retry} disabled={state.loading} className={`px-3 py-1 rounded text-sm transition-colors ${state.loading ? "bg-blue-400 cursor-not-allowed text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}`}>\n                  {state.loading ? "Fetching..." : "Refresh"}\n                </button>\n              </div>\n\n              {state.error ? <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded space-y-3">\n                  <div className="flex items-center text-red-600 dark:text-red-400">\n                    <svg className="w-5 h-5 mr-2" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">\n                      <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />\n                    </svg>\n                    <span>{state.error.message}</span>\n                  </div>\n                  <button onClick={state.retry} className="w-full px-4 py-2 bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 rounded hover:bg-red-200 dark:hover:bg-red-900/60 transition-colors">\n                    Try Again\n                  </button>\n                </div> : state.value ? <div className="bg-white dark:bg-slate-700 rounded p-4 space-y-3">\n                  <div className="grid grid-cols-2 gap-4">\n                    <div className="space-y-1">\n                      <div className="text-3xl font-bold text-slate-900 dark:text-slate-100">\n                        {state.value.temperature}°C\n                      </div>\n                      <div className="text-sm text-slate-500 dark:text-slate-400">\n                        {state.value.condition}\n                      </div>\n                    </div>\n                    <div className="space-y-2">\n                      <div className="flex items-center justify-between text-sm">\n                        <span className="text-slate-500 dark:text-slate-400">\n                          Humidity\n                        </span>\n                        <span className="text-slate-900 dark:text-slate-100">\n                          {state.value.humidity}%\n                        </span>\n                      </div>\n                      <div className="flex items-center justify-between text-sm">\n                        <span className="text-slate-500 dark:text-slate-400">\n                          Wind Speed\n                        </span>\n                        <span className="text-slate-900 dark:text-slate-100">\n                          {state.value.windSpeed} km/h\n                        </span>\n                      </div>\n                    </div>\n                  </div>\n                </div> : null}\n\n              <div className="text-xs text-slate-500 dark:text-slate-400 italic">\n                Note: This example simulates a flaky API that fails 50% of the\n                time to demonstrate retry functionality.\n              </div>\n            </div>\n\n            {/* Instructions */}\n            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n              <p className="text-sm text-blue-600 dark:text-blue-400">\n                Trigger error by hitting the refresh button, then use the try\n                again button to attempt the request again! 🔁\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>;\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);