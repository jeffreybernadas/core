"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[779],{"./src/hooks/useToggle.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=initialValue=>{const[state,dispatch]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(((currentState,action)=>"boolean"==typeof action?action:!currentState),initialValue);return[state,dispatch]}},"./src/stories/hooks/useToggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useToggle.ts"),_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Hooks/State Management/useToggle",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useToggle` is a hook that manages a boolean toggle state with a simple API.\nIt's useful for implementing switches, show/hide functionality, or any binary state.\n\n### Module Federation Import\n```tsx\nimport { useToggle } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useToggle } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const [isVisible, toggle] = useToggle(false);\n\n  return (\n    <div>\n      <button onClick={() => toggle()}>\n        {isVisible ? 'Hide Content' : 'Show Content'}\n      </button>\n\n      {isVisible && (\n        <div>This content can be toggled!</div>\n      )}\n    </div>\n  );\n};\n```\n\n### Advanced Usage\n```tsx\nconst ControlledToggleComponent = () => {\n  const [isActive, toggle] = useToggle(false);\n\n  return (\n    <div>\n      <div>\n        <button onClick={() => toggle(true)}>Activate</button>\n        <button onClick={() => toggle(false)}>Deactivate</button>\n      </div>\n      <div>Status: {isActive ? 'Active' : 'Inactive'}</div>\n    </div>\n  );\n};\n```\n\n### Parameters\n```tsx\nuseToggle(\n  initialValue?: boolean = false // Initial state value\n): [boolean, (nextValue?: boolean) => void]\n```\n\n### Returns\n- [state, toggle]: A tuple containing:\n  - state (boolean): Current state\n  - toggle ((nextValue?: boolean) => void): Function to toggle or set state\n\n### Browser Compatibility\nUses React's useState hook, supported in all modern browsers."}}},tags:["autodocs"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__.N,null,Story())]},Example={render:()=>{const[isOn,toggle]=(0,_hooks__WEBPACK_IMPORTED_MODULE_2__.A)(!1);return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-6 max-w-lg"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100"},"Toggle Example"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-slate-700 dark:text-slate-300"},"Current state: ",isOn?"ON":"OFF"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>toggle(),className:"w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"},"Toggle"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>toggle(!0),className:"flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"},"Turn ON"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>toggle(!1),className:"flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"},"Turn OFF"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Try the different toggle controls - automatic toggle, direct ON/OFF, or force a specific state! 🔄")))))}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [isOn, toggle] = useToggle(false);\n    return <div className="space-y-6 max-w-lg">\n        <div>\n          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">\n            Toggle Example\n          </h3>\n          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">\n            <div className="text-slate-700 dark:text-slate-300">\n              Current state: {isOn ? "ON" : "OFF"}\n            </div>\n            <div className="space-y-4">\n              <button onClick={() => toggle()} className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors">\n                Toggle\n              </button>\n              <div className="flex gap-2">\n                <button onClick={() => toggle(true)} className="flex-1 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">\n                  Turn ON\n                </button>\n                <button onClick={() => toggle(false)} className="flex-1 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">\n                  Turn OFF\n                </button>\n              </div>\n            </div>\n\n            {/* Instructions */}\n            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n              <p className="text-sm text-blue-600 dark:text-blue-400">\n                Try the different toggle controls - automatic toggle, direct\n                ON/OFF, or force a specific state! 🔄\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>;\n  }\n}',...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);