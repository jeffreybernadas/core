"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[7668],{"./src/stories/hooks/useWindowSize.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Example:()=>Example,__namedExportsOrder:()=>__namedExportsOrder,default:()=>useWindowSize_stories});var react=__webpack_require__("./node_modules/react/index.js");const WindowSizeDemo=()=>{const{width,height}=(()=>{const[windowSize,setWindowSize]=(0,react.useState)({width:void 0,height:void 0});return(0,react.useEffect)((()=>{const handleResize=()=>setWindowSize({width:window.innerWidth,height:window.innerHeight});return window.addEventListener("resize",handleResize),handleResize(),()=>{window.removeEventListener("resize",handleResize)}}),[]),windowSize})();return react.createElement(react.Fragment,null,react.createElement("p",null,"Current window dimensions:"),react.createElement("ul",{className:"list-disc list-inside space-y-2"},react.createElement("li",null,"Width: ",react.createElement("strong",null,width,"px")),react.createElement("li",null,"Height: ",react.createElement("strong",null,height,"px"))),react.createElement("p",{className:"text-sm text-muted-foreground"},"Resize your browser window to see the values change."))},useWindowSize_stories={title:"Hooks/useWindowSize",component:({children})=>react.createElement("div",{className:"space-y-4"},children),tags:["autodocs"]},Example={name:"useWindowSize()",parameters:{docs:{description:{story:"A hook that returns the current window dimensions (width and height)."}},controls:{exclude:["children"]}},args:{children:react.createElement(WindowSizeDemo,null)}},__namedExportsOrder=["Example"];Example.parameters={...Example.parameters,docs:{...Example.parameters?.docs,source:{originalSource:'{\n  name: "useWindowSize()",\n  parameters: {\n    docs: {\n      description: {\n        story: "A hook that returns the current window dimensions (width and height)."\n      }\n    },\n    controls: {\n      exclude: ["children"]\n    }\n  },\n  args: {\n    children: <WindowSizeDemo />\n  }\n}',...Example.parameters?.docs?.source}}}}}]);