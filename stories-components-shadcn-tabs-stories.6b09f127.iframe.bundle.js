"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[6998],{"./src/components/shadcn/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Button({className,variant,size,asChild=!1,...props}){const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{"data-slot":"button",className:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,className})),...props})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/shadcn/card.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BT:()=>CardDescription,Wu:()=>CardContent,ZB:()=>CardTitle,Zp:()=>Card,aR:()=>CardHeader,wL:()=>CardFooter});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");function Card({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",className),...props})}function CardHeader({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card-header",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("flex flex-col gap-1.5 px-6",className),...props})}function CardTitle({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card-title",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("leading-none font-semibold",className),...props})}function CardDescription({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card-description",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("text-muted-foreground text-sm",className),...props})}function CardContent({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card-content",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("px-6",className),...props})}function CardFooter({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"card-footer",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("flex items-center px-6",className),...props})}Card.__docgenInfo={description:"",methods:[],displayName:"Card"},CardHeader.__docgenInfo={description:"",methods:[],displayName:"CardHeader"},CardFooter.__docgenInfo={description:"",methods:[],displayName:"CardFooter"},CardTitle.__docgenInfo={description:"",methods:[],displayName:"CardTitle"},CardDescription.__docgenInfo={description:"",methods:[],displayName:"CardDescription"},CardContent.__docgenInfo={description:"",methods:[],displayName:"CardContent"}},"./src/components/shadcn/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");function Input({className,type,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type,"data-slot":"input",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",className),...props})}Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/components/shadcn/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");function Label({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__.b,{"data-slot":"label",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",className),...props})}Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const cn=(...inputs)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))},"./src/stories/components/shadcn/tabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomStyling:()=>CustomStyling,Default:()=>Default,Vertical:()=>Vertical,WithDisabledItems:()=>WithDisabledItems,__namedExportsOrder:()=>__namedExportsOrder,default:()=>tabs_stories});var react=__webpack_require__("./node_modules/react/index.js"),dist=__webpack_require__("./node_modules/@radix-ui/react-tabs/dist/index.mjs"),utils=__webpack_require__("./src/lib/utils.ts");function Tabs({className,...props}){return react.createElement(dist.bL,{"data-slot":"tabs",className:(0,utils.cn)("flex flex-col gap-2",className),...props})}function TabsList({className,...props}){return react.createElement(dist.B8,{"data-slot":"tabs-list",className:(0,utils.cn)("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-1",className),...props})}function TabsTrigger({className,...props}){return react.createElement(dist.l9,{"data-slot":"tabs-trigger",className:(0,utils.cn)("data-[state=active]:bg-background data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring inline-flex flex-1 items-center justify-center gap-1.5 rounded-md px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",className),...props})}function TabsContent({className,...props}){return react.createElement(dist.UC,{"data-slot":"tabs-content",className:(0,utils.cn)("flex-1 outline-none",className),...props})}Tabs.__docgenInfo={description:"",methods:[],displayName:"Tabs"},TabsList.__docgenInfo={description:"",methods:[],displayName:"TabsList"},TabsTrigger.__docgenInfo={description:"",methods:[],displayName:"TabsTrigger"},TabsContent.__docgenInfo={description:"",methods:[],displayName:"TabsContent"};var ThemeProvider=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx"),card=__webpack_require__("./src/components/shadcn/card.tsx"),shadcn_button=__webpack_require__("./src/components/shadcn/button.tsx"),input=__webpack_require__("./src/components/shadcn/input.tsx"),label=__webpack_require__("./src/components/shadcn/label.tsx");const tabs_stories={title:"Components/Shadcn/Tabs",component:Tabs,parameters:{layout:"centered"},tags:["autodocs","stable","version:2.3.0"],decorators:[Story=>react.createElement(ThemeProvider.N,null,react.createElement("div",{className:"w-full max-w-3xl"},react.createElement(Story,null)))]},Default={args:{defaultValue:"account",className:"w-full",children:react.createElement(react.Fragment,null,react.createElement(TabsList,{className:"grid w-full grid-cols-2"},react.createElement(TabsTrigger,{value:"account"},"Account"),react.createElement(TabsTrigger,{value:"password"},"Password")),react.createElement(TabsContent,{value:"account"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Account"),react.createElement(card.BT,null,"Make changes to your account here. Click save when you're done.")),react.createElement(card.Wu,{className:"space-y-2"},react.createElement("div",{className:"space-y-1"},react.createElement(label.J,{htmlFor:"name"},"Name"),react.createElement(input.p,{id:"name",defaultValue:"Pedro Duarte"})),react.createElement("div",{className:"space-y-1"},react.createElement(label.J,{htmlFor:"username"},"Username"),react.createElement(input.p,{id:"username",defaultValue:"@peduarte"}))),react.createElement(card.wL,null,react.createElement(shadcn_button.$,null,"Save changes")))),react.createElement(TabsContent,{value:"password"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Password"),react.createElement(card.BT,null,"Change your password here. After saving, you'll be logged out.")),react.createElement(card.Wu,{className:"space-y-2"},react.createElement("div",{className:"space-y-1"},react.createElement(label.J,{htmlFor:"current"},"Current password"),react.createElement(input.p,{id:"current",type:"password"})),react.createElement("div",{className:"space-y-1"},react.createElement(label.J,{htmlFor:"new"},"New password"),react.createElement(input.p,{id:"new",type:"password"}))),react.createElement(card.wL,null,react.createElement(shadcn_button.$,null,"Save password")))))}},Vertical={render:()=>react.createElement("div",{className:"flex flex-col md:flex-row gap-6"},react.createElement(Tabs,{defaultValue:"overview",orientation:"vertical",className:"w-full"},react.createElement(TabsList,{className:"flex flex-col h-full w-full md:w-48 space-y-1"},react.createElement(TabsTrigger,{value:"overview",className:"justify-start"},"Overview"),react.createElement(TabsTrigger,{value:"analytics",className:"justify-start"},"Analytics"),react.createElement(TabsTrigger,{value:"reports",className:"justify-start"},"Reports"),react.createElement(TabsTrigger,{value:"settings",className:"justify-start"},"Settings")),react.createElement("div",{className:"flex-1"},react.createElement(TabsContent,{value:"overview",className:"p-0 md:p-4"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Overview"),react.createElement(card.BT,null,"View a summary of your account activity and performance.")),react.createElement(card.Wu,null,react.createElement("div",{className:"text-sm text-muted-foreground"},react.createElement("p",null,"This is the overview tab content."))))),react.createElement(TabsContent,{value:"analytics",className:"p-0 md:p-4"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Analytics"),react.createElement(card.BT,null,"View detailed analytics about your account.")),react.createElement(card.Wu,null,react.createElement("div",{className:"text-sm text-muted-foreground"},react.createElement("p",null,"This is the analytics tab content."))))),react.createElement(TabsContent,{value:"reports",className:"p-0 md:p-4"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Reports"),react.createElement(card.BT,null,"View and download reports.")),react.createElement(card.Wu,null,react.createElement("div",{className:"text-sm text-muted-foreground"},react.createElement("p",null,"This is the reports tab content."))))),react.createElement(TabsContent,{value:"settings",className:"p-0 md:p-4"},react.createElement(card.Zp,null,react.createElement(card.aR,null,react.createElement(card.ZB,null,"Settings"),react.createElement(card.BT,null,"Manage your account settings.")),react.createElement(card.Wu,null,react.createElement("div",{className:"text-sm text-muted-foreground"},react.createElement("p",null,"This is the settings tab content."))))))))},CustomStyling={args:{defaultValue:"tab1",className:"w-full",children:react.createElement(react.Fragment,null,react.createElement(TabsList,{className:"bg-blue-50 dark:bg-blue-950 p-1 rounded-xl"},react.createElement(TabsTrigger,{value:"tab1",className:"rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"},"Tab 1"),react.createElement(TabsTrigger,{value:"tab2",className:"rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"},"Tab 2"),react.createElement(TabsTrigger,{value:"tab3",className:"rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white"},"Tab 3")),react.createElement(TabsContent,{value:"tab1",className:"mt-4 p-4 border rounded-lg"},react.createElement("h3",{className:"text-lg font-medium"},"Tab 1 Content"),react.createElement("p",{className:"text-muted-foreground"},"This is the content for tab 1.")),react.createElement(TabsContent,{value:"tab2",className:"mt-4 p-4 border rounded-lg"},react.createElement("h3",{className:"text-lg font-medium"},"Tab 2 Content"),react.createElement("p",{className:"text-muted-foreground"},"This is the content for tab 2.")),react.createElement(TabsContent,{value:"tab3",className:"mt-4 p-4 border rounded-lg"},react.createElement("h3",{className:"text-lg font-medium"},"Tab 3 Content"),react.createElement("p",{className:"text-muted-foreground"},"This is the content for tab 3.")))}},WithDisabledItems={args:{defaultValue:"active",className:"w-full",children:react.createElement(react.Fragment,null,react.createElement(TabsList,null,react.createElement(TabsTrigger,{value:"active"},"Active"),react.createElement(TabsTrigger,{value:"pending"},"Pending"),react.createElement(TabsTrigger,{value:"completed"},"Completed"),react.createElement(TabsTrigger,{value:"cancelled",disabled:!0},"Cancelled")),react.createElement(TabsContent,{value:"active",className:"p-4"},react.createElement("p",null,"Active tasks content")),react.createElement(TabsContent,{value:"pending",className:"p-4"},react.createElement("p",null,"Pending tasks content")),react.createElement(TabsContent,{value:"completed",className:"p-4"},react.createElement("p",null,"Completed tasks content")),react.createElement(TabsContent,{value:"cancelled",className:"p-4"},react.createElement("p",null,"Cancelled tasks content")))}},__namedExportsOrder=["Default","Vertical","CustomStyling","WithDisabledItems"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: "account",\n    className: "w-full",\n    children: <>\n        <TabsList className="grid w-full grid-cols-2">\n          <TabsTrigger value="account">Account</TabsTrigger>\n          <TabsTrigger value="password">Password</TabsTrigger>\n        </TabsList>\n        <TabsContent value="account">\n          <Card>\n            <CardHeader>\n              <CardTitle>Account</CardTitle>\n              <CardDescription>\n                Make changes to your account here. Click save when you\'re done.\n              </CardDescription>\n            </CardHeader>\n            <CardContent className="space-y-2">\n              <div className="space-y-1">\n                <Label htmlFor="name">Name</Label>\n                <Input id="name" defaultValue="Pedro Duarte" />\n              </div>\n              <div className="space-y-1">\n                <Label htmlFor="username">Username</Label>\n                <Input id="username" defaultValue="@peduarte" />\n              </div>\n            </CardContent>\n            <CardFooter>\n              <Button>Save changes</Button>\n            </CardFooter>\n          </Card>\n        </TabsContent>\n        <TabsContent value="password">\n          <Card>\n            <CardHeader>\n              <CardTitle>Password</CardTitle>\n              <CardDescription>\n                Change your password here. After saving, you\'ll be logged out.\n              </CardDescription>\n            </CardHeader>\n            <CardContent className="space-y-2">\n              <div className="space-y-1">\n                <Label htmlFor="current">Current password</Label>\n                <Input id="current" type="password" />\n              </div>\n              <div className="space-y-1">\n                <Label htmlFor="new">New password</Label>\n                <Input id="new" type="password" />\n              </div>\n            </CardContent>\n            <CardFooter>\n              <Button>Save password</Button>\n            </CardFooter>\n          </Card>\n        </TabsContent>\n      </>\n  }\n}',...Default.parameters?.docs?.source},description:{story:"Default tabs with simple content.",...Default.parameters?.docs?.description}}},Vertical.parameters={...Vertical.parameters,docs:{...Vertical.parameters?.docs,source:{originalSource:'{\n  render: () => <div className="flex flex-col md:flex-row gap-6">\n      <Tabs defaultValue="overview" orientation="vertical" className="w-full">\n        <TabsList className="flex flex-col h-full w-full md:w-48 space-y-1">\n          <TabsTrigger value="overview" className="justify-start">\n            Overview\n          </TabsTrigger>\n          <TabsTrigger value="analytics" className="justify-start">\n            Analytics\n          </TabsTrigger>\n          <TabsTrigger value="reports" className="justify-start">\n            Reports\n          </TabsTrigger>\n          <TabsTrigger value="settings" className="justify-start">\n            Settings\n          </TabsTrigger>\n        </TabsList>\n        <div className="flex-1">\n          <TabsContent value="overview" className="p-0 md:p-4">\n            <Card>\n              <CardHeader>\n                <CardTitle>Overview</CardTitle>\n                <CardDescription>\n                  View a summary of your account activity and performance.\n                </CardDescription>\n              </CardHeader>\n              <CardContent>\n                <div className="text-sm text-muted-foreground">\n                  <p>This is the overview tab content.</p>\n                </div>\n              </CardContent>\n            </Card>\n          </TabsContent>\n          <TabsContent value="analytics" className="p-0 md:p-4">\n            <Card>\n              <CardHeader>\n                <CardTitle>Analytics</CardTitle>\n                <CardDescription>\n                  View detailed analytics about your account.\n                </CardDescription>\n              </CardHeader>\n              <CardContent>\n                <div className="text-sm text-muted-foreground">\n                  <p>This is the analytics tab content.</p>\n                </div>\n              </CardContent>\n            </Card>\n          </TabsContent>\n          <TabsContent value="reports" className="p-0 md:p-4">\n            <Card>\n              <CardHeader>\n                <CardTitle>Reports</CardTitle>\n                <CardDescription>View and download reports.</CardDescription>\n              </CardHeader>\n              <CardContent>\n                <div className="text-sm text-muted-foreground">\n                  <p>This is the reports tab content.</p>\n                </div>\n              </CardContent>\n            </Card>\n          </TabsContent>\n          <TabsContent value="settings" className="p-0 md:p-4">\n            <Card>\n              <CardHeader>\n                <CardTitle>Settings</CardTitle>\n                <CardDescription>Manage your account settings.</CardDescription>\n              </CardHeader>\n              <CardContent>\n                <div className="text-sm text-muted-foreground">\n                  <p>This is the settings tab content.</p>\n                </div>\n              </CardContent>\n            </Card>\n          </TabsContent>\n        </div>\n      </Tabs>\n    </div>\n}',...Vertical.parameters?.docs?.source},description:{story:"Tabs with a different layout.",...Vertical.parameters?.docs?.description}}},CustomStyling.parameters={...CustomStyling.parameters,docs:{...CustomStyling.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: "tab1",\n    className: "w-full",\n    children: <>\n        <TabsList className="bg-blue-50 dark:bg-blue-950 p-1 rounded-xl">\n          <TabsTrigger value="tab1" className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white">\n            Tab 1\n          </TabsTrigger>\n          <TabsTrigger value="tab2" className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white">\n            Tab 2\n          </TabsTrigger>\n          <TabsTrigger value="tab3" className="rounded-lg data-[state=active]:bg-blue-500 data-[state=active]:text-white">\n            Tab 3\n          </TabsTrigger>\n        </TabsList>\n        <TabsContent value="tab1" className="mt-4 p-4 border rounded-lg">\n          <h3 className="text-lg font-medium">Tab 1 Content</h3>\n          <p className="text-muted-foreground">\n            This is the content for tab 1.\n          </p>\n        </TabsContent>\n        <TabsContent value="tab2" className="mt-4 p-4 border rounded-lg">\n          <h3 className="text-lg font-medium">Tab 2 Content</h3>\n          <p className="text-muted-foreground">\n            This is the content for tab 2.\n          </p>\n        </TabsContent>\n        <TabsContent value="tab3" className="mt-4 p-4 border rounded-lg">\n          <h3 className="text-lg font-medium">Tab 3 Content</h3>\n          <p className="text-muted-foreground">\n            This is the content for tab 3.\n          </p>\n        </TabsContent>\n      </>\n  }\n}',...CustomStyling.parameters?.docs?.source},description:{story:"Tabs with custom styling.",...CustomStyling.parameters?.docs?.description}}},WithDisabledItems.parameters={...WithDisabledItems.parameters,docs:{...WithDisabledItems.parameters?.docs,source:{originalSource:'{\n  args: {\n    defaultValue: "active",\n    className: "w-full",\n    children: <>\n        <TabsList>\n          <TabsTrigger value="active">Active</TabsTrigger>\n          <TabsTrigger value="pending">Pending</TabsTrigger>\n          <TabsTrigger value="completed">Completed</TabsTrigger>\n          <TabsTrigger value="cancelled" disabled>\n            Cancelled\n          </TabsTrigger>\n        </TabsList>\n        <TabsContent value="active" className="p-4">\n          <p>Active tasks content</p>\n        </TabsContent>\n        <TabsContent value="pending" className="p-4">\n          <p>Pending tasks content</p>\n        </TabsContent>\n        <TabsContent value="completed" className="p-4">\n          <p>Completed tasks content</p>\n        </TabsContent>\n        <TabsContent value="cancelled" className="p-4">\n          <p>Cancelled tasks content</p>\n        </TabsContent>\n      </>\n  }\n}',...WithDisabledItems.parameters?.docs?.source},description:{story:"Tabs with disabled items.",...WithDisabledItems.parameters?.docs?.description}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);