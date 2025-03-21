"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[6867],{"./src/hooks/useFirstMountState.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>useFirstMountState});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useFirstMountState(){const isFirst=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(!0);return isFirst.current?(isFirst.current=!1,!0):isFirst.current}},"./src/hooks/useUpdateEffect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/hooks/useFirstMountState.ts");const __WEBPACK_DEFAULT_EXPORT__=(effect,deps)=>{const isFirstMount=(0,_useFirstMountState__WEBPACK_IMPORTED_MODULE_1__.S)();(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(!isFirstMount)return effect()}),deps)}},"./src/stories/hooks/useUpdateEffect.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_hooks_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/useUpdateEffect.ts"),_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Hooks/Lifecycle/useUpdateEffect",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useUpdateEffect` is a hook that works like useEffect but skips the first render. It's useful when you want to perform side effects only when a dependency updates, not on mount.\n\n### Module Federation Import\n```tsx\nimport { useUpdateEffect } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useUpdateEffect } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const [count, setCount] = useState(0);\n\n  useUpdateEffect(() => {\n    console.log('Count updated:', count);\n    // This won't run on mount, only on subsequent updates\n  }, [count]);\n\n  return (\n    <button onClick={() => setCount(c => c + 1)}>\n      Increment\n    </button>\n  );\n};\n```\n\n### Parameters\n```tsx\nuseUpdateEffect(\n  effect: () => void | (() => void), // Effect callback\n  deps?: any[] // Optional dependency array\n): void\n```\n\n### Returns\n- No return value (void)\n\n### Features\n- Skips first render\n- Works like useEffect\n- Supports cleanup function\n- Dependency tracking\n- Zero dependencies\n\n### Browser Compatibility\nCompatible with all browsers that support React.\n\n### Related Resources\n- [useEffect Hook](https://react.dev/reference/react/useEffect)\n- [React Effects](https://react.dev/learn/synchronizing-with-effects)"}}},tags:["autodocs"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themes_shadcn__WEBPACK_IMPORTED_MODULE_1__.N,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null))]},UpdateEffectExample=()=>{const[count,setCount]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),[logs,setLogs]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(["🟢 Component mounted"]);return(0,_hooks_useUpdateEffect__WEBPACK_IMPORTED_MODULE_2__.A)((()=>(setLogs((prev=>[...prev,`🔄 Count updated to: ${count}`])),()=>{setLogs((prev=>[...prev,`🧹 Cleanup for count: ${count}`]))})),[count]),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"w-[500px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-white dark:bg-slate-800 rounded-lg p-6 shadow-lg space-y-6"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold text-slate-900 dark:text-slate-100"},"Update Effect Demo"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-slate-500 dark:text-slate-400 mt-1"},"Watch how the effect runs only on updates, not on mount")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>setCount((c=>c+1)),className:"px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"},"Increment Count"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-lg text-slate-700 dark:text-slate-200"},"Count: ",react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"font-bold"},count))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("button",{onClick:()=>setLogs([]),className:"px-4 py-2 bg-slate-200 dark:bg-slate-700 hover:bg-slate-300 dark:hover:bg-slate-600 rounded transition-colors text-slate-700 dark:text-slate-200"},"Clear Logs")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-slate-100 dark:bg-slate-700 p-4 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{className:"font-medium text-slate-900 dark:text-slate-100 mb-2"},"Effect Log"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"space-y-1 font-mono text-sm"},logs.map(((log,index)=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{key:index,className:"text-slate-700 dark:text-slate-300"},log))),0===logs.length&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"text-slate-500 dark:text-slate-400 italic"},"No logs yet")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"bg-slate-100 dark:bg-slate-700 p-4 rounded space-y-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h4",{className:"font-medium text-slate-900 dark:text-slate-100"},"Key Behaviors:"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul",{className:"list-disc list-inside text-sm text-slate-600 dark:text-slate-300 space-y-1"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Effect skips the first render"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Cleanup runs before next effect"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Effect runs on dependency changes"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("li",null,"Similar to useEffect, but smarter"))),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Click the increment button to see how the effect runs only on updates! Notice how there's no effect log on mount! 🔄"))))},Example={render:()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(UpdateEffectExample,null)},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:"{\n  render: () => <UpdateEffectExample />\n}",...Example.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);