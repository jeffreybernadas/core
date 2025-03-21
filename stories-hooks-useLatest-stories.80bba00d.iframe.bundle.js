"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[1810],{"./src/stories/hooks/useLatest.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useLatest_stories});var react=__webpack_require__("./node_modules/react/index.js");const hooks_useLatest=value=>{const ref=(0,react.useRef)(value);return ref.current=value,ref};var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const useLatest_stories={title:"Hooks/State Management/useLatest",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:'`useLatest` is a hook that returns a ref object with the latest value.\nUnlike useRef, it automatically updates the ref when the value changes.\n\n### Module Federation Import\n```tsx\nimport { useLatest } from "@core/hooks";\n```\n\n### NPM Package Import\n```tsx\nimport { useLatest } from "@bernz322/core/hooks";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const [count, setCount] = useState(0);\n  const latestCount = useLatest(count);\n\n  useEffect(() => {\n    const timer = setInterval(() => {\n      console.log("Latest count:", latestCount.current);\n    }, 1000);\n    return () => clearInterval(timer);\n  }, []); // Empty deps array but still gets latest count\n\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Count: {count}\n    </button>\n  );\n};\n```\n\n### Parameters\n```tsx\nuseLatest<T>(\n  value: T // The value to keep up-to-date in the ref\n): { readonly current: T }\n```\n\n### Returns\n```tsx\n{ readonly current: T } // A ref object that always has the latest value\n```'}}},tags:["autodocs"],decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement(Story,null))]},Example={render:()=>{const[count,setCount]=(0,react.useState)(0),latestCount=hooks_useLatest(count),[logs,setLogs]=(0,react.useState)([]),simulateAsyncOperation=(0,react.useCallback)((()=>{const startCount=count;setTimeout((()=>{setLogs((prevLogs=>[`After 2s - Start Count: ${startCount}, Latest Count: ${latestCount.current}`,...prevLogs.slice(0,4)]))}),2e3)}),[count]),[user,setUser]=(0,react.useState)({name:"John",age:25}),latestUser=hooks_useLatest(user),[userLogs,setUserLogs]=(0,react.useState)([]),simulateUserUpdate=(0,react.useCallback)((()=>{const startUser={...user};setTimeout((()=>{setUserLogs((prevLogs=>[`After 2s - Start Age: ${startUser.age}, Latest Age: ${latestUser.current.age}`,...prevLogs.slice(0,4)]))}),2e3)}),[user]);return react.createElement("div",{className:"w-[400px]"},react.createElement("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6"},react.createElement("div",{className:"space-y-2"},react.createElement("h3",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100"},"Counter Example"),react.createElement("div",{className:"bg-slate-100 dark:bg-slate-700 p-4 rounded"},react.createElement("div",{className:"text-center mb-3"},react.createElement("p",{className:"text-sm text-slate-500 dark:text-slate-400"},"Current Count:"),react.createElement("p",{className:"text-2xl font-mono text-slate-700 dark:text-slate-300"},count)),react.createElement("div",{className:"space-x-2 flex justify-center"},react.createElement("button",{onClick:()=>setCount((c=>c+1)),className:"px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm"},"Increment"),react.createElement("button",{onClick:simulateAsyncOperation,className:"px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm"},"Start Async Operation")),logs.length>0&&react.createElement("div",{className:"mt-3 space-y-1"},react.createElement("p",{className:"text-sm font-semibold text-slate-600 dark:text-slate-300"},"Async Operation Logs:"),logs.map(((log,index)=>react.createElement("p",{key:index,className:"text-xs text-slate-500 dark:text-slate-400"},log)))))),react.createElement("div",{className:"space-y-2"},react.createElement("h3",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100"},"User Object Example"),react.createElement("div",{className:"bg-green-100 dark:bg-green-900/20 p-4 rounded"},react.createElement("div",{className:"text-center mb-3"},react.createElement("p",{className:"text-sm text-green-600 dark:text-green-400"},"Current User Age:"),react.createElement("p",{className:"text-2xl font-mono text-green-700 dark:text-green-300"},user.age)),react.createElement("div",{className:"space-x-2 flex justify-center"},react.createElement("button",{onClick:()=>setUser((u=>({...u,age:u.age+1}))),className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},"Increment Age"),react.createElement("button",{onClick:simulateUserUpdate,className:"px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm"},"Start Async Operation")),userLogs.length>0&&react.createElement("div",{className:"mt-3 space-y-1"},react.createElement("p",{className:"text-sm font-semibold text-green-600 dark:text-green-300"},"Async Operation Logs:"),userLogs.map(((log,index)=>react.createElement("p",{key:index,className:"text-xs text-green-500 dark:text-green-400"},log)))))),react.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},'Try clicking the increment buttons multiple times and then click "Start Async Operation". After 2 seconds, you\'ll see how useLatest always provides access to the most current value, even in async callbacks! 🔄'))))}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    // Example 1: Counter with Delayed Log\n    const [count, setCount] = useState(0);\n    const latestCount = useLatest(count);\n    const [logs, setLogs] = useState<string[]>([]);\n\n    // Simulate an async operation that needs the latest count\n    const simulateAsyncOperation = useCallback(() => {\n      const startCount = count; // Capture current count\n      setTimeout(() => {\n        setLogs(prevLogs => [`After 2s - Start Count: ${startCount}, Latest Count: ${latestCount.current}`, ...prevLogs.slice(0, 4) // Keep only last 5 logs\n        ]);\n      }, 2000);\n    }, [count]);\n\n    // Example 2: Object State\n    const [user, setUser] = useState({\n      name: "John",\n      age: 25\n    });\n    const latestUser = useLatest(user);\n    const [userLogs, setUserLogs] = useState<string[]>([]);\n\n    // Simulate an async operation that needs the latest user\n    const simulateUserUpdate = useCallback(() => {\n      const startUser = {\n        ...user\n      }; // Capture current user\n      setTimeout(() => {\n        setUserLogs(prevLogs => [`After 2s - Start Age: ${startUser.age}, Latest Age: ${latestUser.current.age}`, ...prevLogs.slice(0, 4) // Keep only last 5 logs\n        ]);\n      }, 2000);\n    }, [user]);\n    return <div className="w-[400px]">\n        <div className="bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6">\n          {/* Counter Example */}\n          <div className="space-y-2">\n            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">\n              Counter Example\n            </h3>\n            <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded">\n              <div className="text-center mb-3">\n                <p className="text-sm text-slate-500 dark:text-slate-400">\n                  Current Count:\n                </p>\n                <p className="text-2xl font-mono text-slate-700 dark:text-slate-300">\n                  {count}\n                </p>\n              </div>\n              <div className="space-x-2 flex justify-center">\n                <button onClick={() => setCount(c => c + 1)} className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">\n                  Increment\n                </button>\n                <button onClick={simulateAsyncOperation} className="px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600 text-sm">\n                  Start Async Operation\n                </button>\n              </div>\n              {logs.length > 0 && <div className="mt-3 space-y-1">\n                  <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">\n                    Async Operation Logs:\n                  </p>\n                  {logs.map((log, index) => <p key={index} className="text-xs text-slate-500 dark:text-slate-400">\n                      {log}\n                    </p>)}\n                </div>}\n            </div>\n          </div>\n\n          {/* Object State Example */}\n          <div className="space-y-2">\n            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">\n              User Object Example\n            </h3>\n            <div className="bg-green-100 dark:bg-green-900/20 p-4 rounded">\n              <div className="text-center mb-3">\n                <p className="text-sm text-green-600 dark:text-green-400">\n                  Current User Age:\n                </p>\n                <p className="text-2xl font-mono text-green-700 dark:text-green-300">\n                  {user.age}\n                </p>\n              </div>\n              <div className="space-x-2 flex justify-center">\n                <button onClick={() => setUser(u => ({\n                ...u,\n                age: u.age + 1\n              }))} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">\n                  Increment Age\n                </button>\n                <button onClick={simulateUserUpdate} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">\n                  Start Async Operation\n                </button>\n              </div>\n              {userLogs.length > 0 && <div className="mt-3 space-y-1">\n                  <p className="text-sm font-semibold text-green-600 dark:text-green-300">\n                    Async Operation Logs:\n                  </p>\n                  {userLogs.map((log, index) => <p key={index} className="text-xs text-green-500 dark:text-green-400">\n                      {log}\n                    </p>)}\n                </div>}\n            </div>\n          </div>\n\n          {/* Instructions */}\n          <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n            <p className="text-sm text-blue-600 dark:text-blue-400">\n              Try clicking the increment buttons multiple times and then click\n              "Start Async Operation". After 2 seconds, you\'ll see how useLatest\n              always provides access to the most current value, even in async\n              callbacks! 🔄\n            </p>\n          </div>\n        </div>\n      </div>;\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);