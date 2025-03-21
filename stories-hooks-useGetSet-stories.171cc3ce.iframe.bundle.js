"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[7427],{"./src/hooks/misc/hookState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveHookState(nextState,currentState){return"function"==typeof nextState?nextState.length?nextState(currentState):nextState():nextState}__webpack_require__.d(__webpack_exports__,{Z:()=>resolveHookState})},"./src/hooks/useGetSet.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useGetSet});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useUpdate__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useUpdate.ts"),_misc_hookState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/misc/hookState.ts");function useGetSet(initialState){const state=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)((0,_misc_hookState__WEBPACK_IMPORTED_MODULE_1__.Z)(initialState)),update=(0,_useUpdate__WEBPACK_IMPORTED_MODULE_2__.A)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>[()=>state.current,newState=>{state.current=(0,_misc_hookState__WEBPACK_IMPORTED_MODULE_1__.Z)(newState,state.current),update()}]),[])}},"./src/hooks/useUpdate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useUpdate});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const updateReducer=num=>(num+1)%1e6;function useUpdate(){const[,update]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(updateReducer,0);return update}},"./src/stories/hooks/useGetSet.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useGetSet__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useGetSet.ts"),_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Hooks/State Management/useGetSet",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:'`useGetSet` is a hook that provides get and set functions for managing state.\nUnlike useState, it ensures you always have access to the latest state value through the getter function.\n\n### Module Federation Import\n```tsx\nimport { useGetSet } from "@core/hooks";\n```\n\n### NPM Package Import\n```tsx\nimport { useGetSet } from "@bernz322/core/hooks";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const [get, set] = useGetSet(0);\n\n  const increment = () => {\n    set(get() + 1);\n  };\n\n  return (\n    <div>\n      <p>Count: {get()}</p>\n      <button onClick={increment}>Increment</button>\n    </div>\n  );\n};\n```\n\n### Parameters\n```tsx\nuseGetSet<S>(\n  initialState: S | (() => S) // Initial state or initializer function\n): [() => S, (newState: S | ((prevState: S) => S)) => void]\n```\n\n### Returns\n```tsx\n[\n  get: () => S, // Function to get current state\n  set: (newState: S | ((prevState: S) => S)) => void // Function to set new state\n]\n```'}}},tags:["autodocs"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__.N,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},Example={render:()=>{const[getCount,setCount]=(0,_hooks_useGetSet__WEBPACK_IMPORTED_MODULE_2__.A)(0),[getUser,setUser]=(0,_hooks_useGetSet__WEBPACK_IMPORTED_MODULE_2__.A)({name:"John Doe",age:25,visits:0}),simulateAsyncOperation=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{setTimeout((()=>{const currentCount=getCount();setCount(currentCount+1)}),1e3)}),[]),updateUserVisits=(0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((()=>{const currentUser=getUser();setUser({...currentUser,visits:currentUser.visits+1})}),[]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[400px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100"},"Simple Counter"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-slate-100 dark:bg-slate-700 p-4 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-slate-500 dark:text-slate-400"},"Current Count:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-lg font-mono mt-1 text-slate-700 dark:text-slate-300"},getCount()),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-2 space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>setCount(getCount()+1),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"},"Increment"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:simulateAsyncOperation,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"},"Async Increment")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100"},"User Object State"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-green-100 dark:bg-green-900/20 p-4 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-green-600 dark:text-green-400"},"Name:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-lg font-mono text-green-700 dark:text-green-300"},getUser().name)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-green-600 dark:text-green-400"},"Age:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-lg font-mono text-green-700 dark:text-green-300"},getUser().age)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-green-600 dark:text-green-400"},"Visits:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-lg font-mono text-green-700 dark:text-green-300"},getUser().visits))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:updateUserVisits,className:"mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},"Increment Visits"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Try the different buttons! Notice how the async increment always uses the latest state value, and how object updates preserve other properties. The get function always returns the current state! 🔄"))))}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    // Example 1: Simple Counter\n    const [getCount, setCount] = useGetSet(0);\n\n    // Example 2: Object State\n    const [getUser, setUser] = useGetSet({\n      name: "John Doe",\n      age: 25,\n      visits: 0\n    });\n\n    // Example 3: Async Update\n    const simulateAsyncOperation = useCallback(() => {\n      // Start async operation\n      setTimeout(() => {\n        // After 1 second, increment the count using the latest value\n        const currentCount = getCount();\n        setCount(currentCount + 1);\n      }, 1000);\n    }, []);\n\n    // Example 4: Complex Object Update\n    const updateUserVisits = useCallback(() => {\n      const currentUser = getUser();\n      setUser({\n        ...currentUser,\n        visits: currentUser.visits + 1\n      });\n    }, []);\n    return <div className="w-[400px]">\n        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">\n          {/* Simple Counter */}\n          <div className="space-y-2">\n            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">\n              Simple Counter\n            </h3>\n            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">\n              <p className="text-sm text-slate-500 dark:text-slate-400">\n                Current Count:\n              </p>\n              <p className="text-lg font-mono mt-1 text-slate-700 dark:text-slate-300">\n                {getCount()}\n              </p>\n              <div className="mt-2 space-x-2">\n                <button onClick={() => setCount(getCount() + 1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">\n                  Increment\n                </button>\n                <button onClick={simulateAsyncOperation} className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm">\n                  Async Increment\n                </button>\n              </div>\n            </div>\n          </div>\n\n          {/* Object State */}\n          <div className="space-y-2">\n            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">\n              User Object State\n            </h3>\n            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">\n              <div className="space-y-2">\n                <div>\n                  <p className="text-sm text-green-600 dark:text-green-400">\n                    Name:\n                  </p>\n                  <p className="text-lg font-mono text-green-700 dark:text-green-300">\n                    {getUser().name}\n                  </p>\n                </div>\n                <div>\n                  <p className="text-sm text-green-600 dark:text-green-400">\n                    Age:\n                  </p>\n                  <p className="text-lg font-mono text-green-700 dark:text-green-300">\n                    {getUser().age}\n                  </p>\n                </div>\n                <div>\n                  <p className="text-sm text-green-600 dark:text-green-400">\n                    Visits:\n                  </p>\n                  <p className="text-lg font-mono text-green-700 dark:text-green-300">\n                    {getUser().visits}\n                  </p>\n                </div>\n              </div>\n              <button onClick={updateUserVisits} className="mt-3 px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">\n                Increment Visits\n              </button>\n            </div>\n          </div>\n\n          {/* Instructions */}\n          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n            <p className="text-sm text-blue-600 dark:text-blue-400">\n              Try the different buttons! Notice how the async increment always\n              uses the latest state value, and how object updates preserve other\n              properties. The get function always returns the current state! 🔄\n            </p>\n          </div>\n        </div>\n      </div>;\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);