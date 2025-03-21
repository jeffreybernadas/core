"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[5129],{"./src/stories/hooks/useWindowEvent.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{KeyboardExample:()=>KeyboardExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useWindowEvent_stories});var react=__webpack_require__("./node_modules/react/index.js");var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const useWindowEvent_stories={title:"Hooks/Browser API/useWindowEvent",parameters:{layout:"centered",docs:{canvas:{sourceState:"none"},description:{component:"`useWindowEvent` is a hook that manages window event listeners with automatic cleanup.\nIt's useful for handling global events like keyboard shortcuts, window resizing, or scroll tracking.\n\n### Module Federation Import\n```tsx\nimport { useWindowEvent } from \"@core/hooks\";\n```\n\n### NPM Package Import\n```tsx\nimport { useWindowEvent } from \"@bernz322/core/hooks\";\n```\n\n### Basic Usage\n```tsx\nconst Component = () => {\n  const [lastKey, setLastKey] = useState('');\n\n  useWindowEvent('keydown', (e) => {\n    setLastKey(e.key);\n  });\n\n  return (\n    <div>\n      <div>Press any key</div>\n      <div>Last key pressed: {lastKey}</div>\n    </div>\n  );\n};\n```\n\n### Advanced Usage\n```tsx\nconst ScrollTracker = () => {\n  const [scrollInfo, setScrollInfo] = useState({\n    x: window.scrollX,\n    y: window.scrollY,\n    direction: ''\n  });\n\n  useWindowEvent('scroll', () => {\n    const newY = window.scrollY;\n    setScrollInfo(prev => ({\n      x: window.scrollX,\n      y: newY,\n      direction: newY > prev.y ? 'down' : 'up'\n    }));\n  });\n\n  return (\n    <div>\n      <div>Scroll Position: ({scrollInfo.x}, {scrollInfo.y})</div>\n      <div>Direction: {scrollInfo.direction}</div>\n    </div>\n  );\n};\n```\n\n### Parameters\n```tsx\nuseWindowEvent(\n  event: string,      // Event name to listen for\n  handler: Function,  // Event handler function\n  options?: {        // Optional event listener options\n    capture?: boolean;\n    passive?: boolean;\n    once?: boolean;\n  }\n): void\n```\n\n### Returns\nvoid\n\n### Browser Compatibility\nUses standard Web APIs:\n- window.addEventListener\n- window.removeEventListener\nSupported in all modern browsers.\n\n### Related Resources\n- [MDN: EventTarget.addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener)\n- [MDN: Window](https://developer.mozilla.org/en-US/docs/Web/API/Window)"}}},tags:["autodocs"],decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement(Story,null))]},KeyboardExample={render:()=>{const[lastKey,setLastKey]=(0,react.useState)(""),[modifiers,setModifiers]=(0,react.useState)([]);return function useWindowEvent(type,listener,options){(0,react.useEffect)((()=>(window.addEventListener(type,listener,options),()=>window.removeEventListener(type,listener,options))),[type,listener])}("keydown",(e=>{setLastKey(e.key);const mods=[];e.ctrlKey&&mods.push("Ctrl"),e.shiftKey&&mods.push("Shift"),e.altKey&&mods.push("Alt"),e.metaKey&&mods.push("Meta"),setModifiers(mods)})),react.createElement("div",{className:"space-y-6 max-w-lg"},react.createElement("div",null,react.createElement("h3",{className:"text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100"},"Keyboard Events"),react.createElement("div",{className:"bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4"},react.createElement("div",{className:"text-center text-slate-700 dark:text-slate-300"},"Press any key"),react.createElement("div",{className:"space-y-2 text-sm text-slate-600 dark:text-slate-400"},react.createElement("div",null,"Last key: ",lastKey||"None"),react.createElement("div",null,"Modifiers:"," ",modifiers.length>0?modifiers.join(" + "):"None")),react.createElement("div",{className:"mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded"},react.createElement("p",{className:"text-sm text-blue-600 dark:text-blue-400"},"Try different window events - press any key to see the events being logged! 🎯")))))}},__namedExportsOrder=["KeyboardExample"];KeyboardExample.parameters={...KeyboardExample.parameters,docs:{...KeyboardExample.parameters?.docs,source:{originalSource:'{\n  render: () => {\n    const [lastKey, setLastKey] = useState("");\n    const [modifiers, setModifiers] = useState<string[]>([]);\n    useWindowEvent("keydown", (e: KeyboardEvent) => {\n      setLastKey(e.key);\n      const mods = [];\n      if (e.ctrlKey) mods.push("Ctrl");\n      if (e.shiftKey) mods.push("Shift");\n      if (e.altKey) mods.push("Alt");\n      if (e.metaKey) mods.push("Meta");\n      setModifiers(mods);\n    });\n    return <div className="space-y-6 max-w-lg">\n        <div>\n          <h3 className="text-lg font-semibold mb-2 text-slate-900 dark:text-slate-100">\n            Keyboard Events\n          </h3>\n          <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-lg space-y-4">\n            <div className="text-center text-slate-700 dark:text-slate-300">\n              Press any key\n            </div>\n            <div className="space-y-2 text-sm text-slate-600 dark:text-slate-400">\n              <div>Last key: {lastKey || "None"}</div>\n              <div>\n                Modifiers:{" "}\n                {modifiers.length > 0 ? modifiers.join(" + ") : "None"}\n              </div>\n            </div>\n\n            {/* Instructions */}\n            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">\n              <p className="text-sm text-blue-600 dark:text-blue-400">\n                Try different window events - press any key to see the events\n                being logged! 🎯\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>;\n  }\n}',...KeyboardExample.parameters?.docs?.source}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);