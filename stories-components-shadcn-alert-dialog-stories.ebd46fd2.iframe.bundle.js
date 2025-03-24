"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[6393],{"./src/components/shadcn/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Button({className,variant,size,asChild=!1,...props}){const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{"data-slot":"button",className:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,className})),...props})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const cn=(...inputs)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))},"./src/stories/components/shadcn/alert-dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomLayout:()=>CustomLayout,Default:()=>Default,Destructive:()=>Destructive,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_dialog_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@storybook/test/dist/index.mjs"),react_alert_dialog_dist=__webpack_require__("./node_modules/@radix-ui/react-alert-dialog/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts"),shadcn_button=__webpack_require__("./src/components/shadcn/button.tsx");function AlertDialog({...props}){return react.createElement(react_alert_dialog_dist.bL,{"data-slot":"alert-dialog",...props})}function AlertDialogTrigger({...props}){return react.createElement(react_alert_dialog_dist.l9,{"data-slot":"alert-dialog-trigger",...props})}function AlertDialogPortal({...props}){return react.createElement(react_alert_dialog_dist.ZL,{"data-slot":"alert-dialog-portal",...props})}function AlertDialogOverlay({className,...props}){return react.createElement(react_alert_dialog_dist.hJ,{"data-slot":"alert-dialog-overlay",className:(0,utils.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",className),...props})}function AlertDialogContent({className,...props}){return react.createElement(AlertDialogPortal,null,react.createElement(AlertDialogOverlay,null),react.createElement(react_alert_dialog_dist.UC,{"data-slot":"alert-dialog-content",className:(0,utils.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",className),...props}))}function AlertDialogHeader({className,...props}){return react.createElement("div",{"data-slot":"alert-dialog-header",className:(0,utils.cn)("flex flex-col gap-2 text-center sm:text-left",className),...props})}function AlertDialogFooter({className,...props}){return react.createElement("div",{"data-slot":"alert-dialog-footer",className:(0,utils.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",className),...props})}function AlertDialogTitle({className,...props}){return react.createElement(react_alert_dialog_dist.hE,{"data-slot":"alert-dialog-title",className:(0,utils.cn)("text-lg font-semibold",className),...props})}function AlertDialogDescription({className,...props}){return react.createElement(react_alert_dialog_dist.VY,{"data-slot":"alert-dialog-description",className:(0,utils.cn)("text-muted-foreground text-sm",className),...props})}function AlertDialogAction({className,...props}){return react.createElement(react_alert_dialog_dist.rc,{className:(0,utils.cn)((0,shadcn_button.r)(),className),...props})}function AlertDialogCancel({className,...props}){return react.createElement(react_alert_dialog_dist.ZD,{className:(0,utils.cn)((0,shadcn_button.r)({variant:"outline"}),className),...props})}AlertDialog.__docgenInfo={description:"",methods:[],displayName:"AlertDialog"},AlertDialogPortal.__docgenInfo={description:"",methods:[],displayName:"AlertDialogPortal"},AlertDialogOverlay.__docgenInfo={description:"",methods:[],displayName:"AlertDialogOverlay"},AlertDialogTrigger.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTrigger"},AlertDialogContent.__docgenInfo={description:"",methods:[],displayName:"AlertDialogContent"},AlertDialogHeader.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"},AlertDialogFooter.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"},AlertDialogTitle.__docgenInfo={description:"",methods:[],displayName:"AlertDialogTitle"},AlertDialogDescription.__docgenInfo={description:"",methods:[],displayName:"AlertDialogDescription"},AlertDialogAction.__docgenInfo={description:"",methods:[],displayName:"AlertDialogAction"},AlertDialogCancel.__docgenInfo={description:"",methods:[],displayName:"AlertDialogCancel"};var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const favicon_32x32_namespaceObject=__webpack_require__.p+"static/media/favicon-32x32.10181f34.png",alert_dialog_stories={title:"Components/Shadcn/AlertDialog",component:AlertDialog,parameters:{layout:"centered",docs:{description:{component:"A modal dialog that interrupts the user with important content and expects a response."}}},tags:["autodocs","stable","version:2.3.0"],argTypes:{children:{control:!1,description:"The content to display inside the alert dialog",table:{type:{summary:"React.ReactNode"}}}},decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement("div",{className:"w-full max-w-md"},react.createElement(Story,null)))]},Default={args:{children:react.createElement(react.Fragment,null,react.createElement(AlertDialogTrigger,{asChild:!0},react.createElement(shadcn_button.$,{variant:"outline"},"Delete Account")),react.createElement(AlertDialogContent,null,react.createElement(AlertDialogHeader,null,react.createElement(AlertDialogTitle,null,"Are you absolutely sure?"),react.createElement(AlertDialogDescription,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers.")),react.createElement(AlertDialogFooter,null,react.createElement(AlertDialogCancel,null,"Cancel"),react.createElement(AlertDialogAction,null,"Continue"))))},play:async({canvasElement})=>{const button=(0,dist.ux)(canvasElement).getByRole("button",{name:"Delete Account"});await dist.Q4.click(button);const dialog=(0,dist.ux)(dist.nj.getByRole("alertdialog"));await(0,dist.E3)(dialog.getByText("Are you absolutely sure?")).toBeInTheDocument(),await dist.Q4.click(dialog.getByRole("button",{name:"Continue"}))}},Destructive={args:{children:react.createElement(react.Fragment,null,react.createElement(AlertDialogTrigger,{asChild:!0},react.createElement(shadcn_button.$,{variant:"destructive"},"Delete File")),react.createElement(AlertDialogContent,null,react.createElement(AlertDialogHeader,null,react.createElement(AlertDialogTitle,null,"Delete File"),react.createElement(AlertDialogDescription,null,"Are you sure you want to delete this file? This action cannot be undone.")),react.createElement(AlertDialogFooter,null,react.createElement(AlertDialogCancel,null,"Cancel"),react.createElement(AlertDialogAction,{className:"bg-destructive text-white hover:bg-destructive/90"},"Delete"))))},play:async({canvasElement})=>{const button=(0,dist.ux)(canvasElement).getByRole("button",{name:"Delete File"});await dist.Q4.click(button);const dialog=(0,dist.ux)(dist.nj.getByRole("alertdialog"));await(0,dist.E3)(dialog.getByText("Are you sure you want to delete this file? This action cannot be undone.")).toBeInTheDocument(),await dist.Q4.click(dialog.getByRole("button",{name:"Delete"}))}},CustomLayout={args:{children:react.createElement(react.Fragment,null,react.createElement(AlertDialogTrigger,{asChild:!0},react.createElement(shadcn_button.$,null,"Show Custom Dialog")),react.createElement(AlertDialogContent,null,react.createElement("div",{className:"grid gap-4 py-4"},react.createElement(AlertDialogTitle,{className:"text-center"},"Confirm Action"),react.createElement("div",{className:"flex justify-center"},react.createElement("img",{src:favicon_32x32_namespaceObject,alt:"Placeholder",className:"rounded-full"})),react.createElement(AlertDialogDescription,{className:"text-center"},"This is a custom layout for the alert dialog content.")),react.createElement("div",{className:"flex flex-col gap-2"},react.createElement(AlertDialogAction,null,"Confirm"),react.createElement(AlertDialogCancel,null,"Cancel"))))},play:async({canvasElement})=>{const button=(0,dist.ux)(canvasElement).getByRole("button",{name:"Show Custom Dialog"});await dist.Q4.click(button);const dialog=(0,dist.ux)(dist.nj.getByRole("alertdialog"));await(0,dist.E3)(dialog.getByText("This is a custom layout for the alert dialog content.")).toBeInTheDocument(),await dist.Q4.click(dialog.getByRole("button",{name:"Cancel"}))}},__namedExportsOrder=["Default","Destructive","CustomLayout"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AlertDialogTrigger asChild>\n          <Button variant="outline">Delete Account</Button>\n        </AlertDialogTrigger>\n        <AlertDialogContent>\n          <AlertDialogHeader>\n            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>\n            <AlertDialogDescription>\n              This action cannot be undone. This will permanently delete your\n              account and remove your data from our servers.\n            </AlertDialogDescription>\n          </AlertDialogHeader>\n          <AlertDialogFooter>\n            <AlertDialogCancel>Cancel</AlertDialogCancel>\n            <AlertDialogAction>Continue</AlertDialogAction>\n          </AlertDialogFooter>\n        </AlertDialogContent>\n      </>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole("button", {\n      name: "Delete Account"\n    });\n    await userEvent.click(button);\n    const dialog = within(screen.getByRole("alertdialog"));\n    await expect(dialog.getByText("Are you absolutely sure?")).toBeInTheDocument();\n    await userEvent.click(dialog.getByRole("button", {\n      name: "Continue"\n    }));\n  }\n}',...Default.parameters?.docs?.source},description:{story:"Default alert dialog with a trigger button, title, description, and action buttons.",...Default.parameters?.docs?.description}}},Destructive.parameters={...Destructive.parameters,docs:{...Destructive.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AlertDialogTrigger asChild>\n          <Button variant="destructive">Delete File</Button>\n        </AlertDialogTrigger>\n        <AlertDialogContent>\n          <AlertDialogHeader>\n            <AlertDialogTitle>Delete File</AlertDialogTitle>\n            <AlertDialogDescription>\n              Are you sure you want to delete this file? This action cannot be\n              undone.\n            </AlertDialogDescription>\n          </AlertDialogHeader>\n          <AlertDialogFooter>\n            <AlertDialogCancel>Cancel</AlertDialogCancel>\n            <AlertDialogAction className="bg-destructive text-white hover:bg-destructive/90">\n              Delete\n            </AlertDialogAction>\n          </AlertDialogFooter>\n        </AlertDialogContent>\n      </>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole("button", {\n      name: "Delete File"\n    });\n    await userEvent.click(button);\n    const dialog = within(screen.getByRole("alertdialog"));\n    await expect(dialog.getByText("Are you sure you want to delete this file? This action cannot be undone.")).toBeInTheDocument();\n    await userEvent.click(dialog.getByRole("button", {\n      name: "Delete"\n    }));\n  }\n}',...Destructive.parameters?.docs?.source},description:{story:"Alert dialog with destructive action button.",...Destructive.parameters?.docs?.description}}},CustomLayout.parameters={...CustomLayout.parameters,docs:{...CustomLayout.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <AlertDialogTrigger asChild>\n          <Button>Show Custom Dialog</Button>\n        </AlertDialogTrigger>\n        <AlertDialogContent>\n          <div className="grid gap-4 py-4">\n            <AlertDialogTitle className="text-center">\n              Confirm Action\n            </AlertDialogTitle>\n            <div className="flex justify-center">\n              <img src={PlaceholderImage} alt="Placeholder" className="rounded-full" />\n            </div>\n            <AlertDialogDescription className="text-center">\n              This is a custom layout for the alert dialog content.\n            </AlertDialogDescription>\n          </div>\n          <div className="flex flex-col gap-2">\n            <AlertDialogAction>Confirm</AlertDialogAction>\n            <AlertDialogCancel>Cancel</AlertDialogCancel>\n          </div>\n        </AlertDialogContent>\n      </>\n  },\n  play: async ({\n    canvasElement\n  }) => {\n    const canvas = within(canvasElement);\n    const button = canvas.getByRole("button", {\n      name: "Show Custom Dialog"\n    });\n    await userEvent.click(button);\n    const dialog = within(screen.getByRole("alertdialog"));\n    await expect(dialog.getByText("This is a custom layout for the alert dialog content.")).toBeInTheDocument();\n    await userEvent.click(dialog.getByRole("button", {\n      name: "Cancel"\n    }));\n  }\n}',...CustomLayout.parameters?.docs?.source},description:{story:"Alert dialog with custom content layout.",...CustomLayout.parameters?.docs?.description}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);