"use strict";(self.webpackChunk_bernz322_core=self.webpackChunk_bernz322_core||[]).push([[6434],{"./src/components/shadcn/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/class-variance-authority/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/lib/utils.ts");const buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",destructive:"bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",outline:"border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9"}},defaultVariants:{variant:"default",size:"default"}});function Button({className,variant,size,asChild=!1,...props}){const Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_2__.DX:"button";return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Comp,{"data-slot":"button",className:(0,_lib__WEBPACK_IMPORTED_MODULE_3__.cn)(buttonVariants({variant,size,className})),...props})}Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}}},"./src/components/shadcn/dialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>DialogContent,Es:()=>DialogFooter,L3:()=>DialogTitle,c7:()=>DialogHeader,lG:()=>Dialog,rr:()=>DialogDescription,zM:()=>DialogTrigger});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-dialog/dist/index.mjs"),lucide_react__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lucide-react/dist/esm/icons/x.js"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");function Dialog({...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.bL,{"data-slot":"dialog",...props})}function DialogTrigger({...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.l9,{"data-slot":"dialog-trigger",...props})}function DialogPortal({...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.ZL,{"data-slot":"dialog-portal",...props})}function DialogOverlay({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hJ,{"data-slot":"dialog-overlay",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/80",className),...props})}function DialogContent({className,children,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogPortal,{"data-slot":"dialog-portal"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(DialogOverlay,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.UC,{"data-slot":"dialog-content",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",className),...props},children,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.bm,{className:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(lucide_react__WEBPACK_IMPORTED_MODULE_3__.A,null),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"sr-only"},"Close"))))}function DialogHeader({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"dialog-header",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col gap-2 text-center sm:text-left",className),...props})}function DialogFooter({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{"data-slot":"dialog-footer",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",className),...props})}function DialogTitle({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.hE,{"data-slot":"dialog-title",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("text-lg leading-none font-semibold",className),...props})}function DialogDescription({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_dialog__WEBPACK_IMPORTED_MODULE_1__.VY,{"data-slot":"dialog-description",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("text-muted-foreground text-sm",className),...props})}Dialog.__docgenInfo={description:"",methods:[],displayName:"Dialog"},DialogContent.__docgenInfo={description:"",methods:[],displayName:"DialogContent"},DialogDescription.__docgenInfo={description:"",methods:[],displayName:"DialogDescription"},DialogFooter.__docgenInfo={description:"",methods:[],displayName:"DialogFooter"},DialogHeader.__docgenInfo={description:"",methods:[],displayName:"DialogHeader"},DialogOverlay.__docgenInfo={description:"",methods:[],displayName:"DialogOverlay"},DialogPortal.__docgenInfo={description:"",methods:[],displayName:"DialogPortal"},DialogTitle.__docgenInfo={description:"",methods:[],displayName:"DialogTitle"},DialogTrigger.__docgenInfo={description:"",methods:[],displayName:"DialogTrigger"}},"./src/components/shadcn/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/lib/utils.ts");function Input({className,type,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",{type,"data-slot":"input",className:(0,_lib__WEBPACK_IMPORTED_MODULE_1__.cn)("border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",className),...props})}Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"./src/components/shadcn/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@radix-ui/react-label/dist/index.mjs"),_lib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/lib/utils.ts");function Label({className,...props}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_1__.b,{"data-slot":"label",className:(0,_lib__WEBPACK_IMPORTED_MODULE_2__.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",className),...props})}Label.__docgenInfo={description:"",methods:[],displayName:"Label"}},"./src/lib/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tailwind-merge/dist/bundle-mjs.mjs");const cn=(...inputs)=>(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.QP)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))},"./src/stories/components/shadcn/dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomContent:()=>CustomContent,Default:()=>Default,DestructiveDialog:()=>DestructiveDialog,FormDialog:()=>FormDialog,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/shadcn/dialog.tsx"),_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/shadcn/button.tsx"),_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/shadcn/input.tsx"),_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/shadcn/label.tsx"),_themes_shadcn__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/themes/shadcn/ThemeProvider.tsx");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Shadcn/Dialog",component:_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.lG,parameters:{layout:"centered"},tags:["autodocs","stable","version:2.3.0"],decorators:[Story=>react__WEBPACK_IMPORTED_MODULE_0__.createElement(_themes_shadcn__WEBPACK_IMPORTED_MODULE_2__.N,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center justify-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(Story,null)))]},Default={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.zM,{asChild:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"outline"},"Open Dialog")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Cf,{className:"sm:max-w-[425px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.c7,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.L3,null,"Edit profile"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.rr,null,"Make changes to your profile here. Click save when you're done.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-4 py-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-4 items-center gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"name",className:"text-right"},"Name"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__.p,{id:"name",defaultValue:"Pedro Duarte",className:"col-span-3"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid grid-cols-4 items-center gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"username",className:"text-right"},"Username"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__.p,{id:"username",defaultValue:"@peduarte",className:"col-span-3"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Es,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"submit"},"Save changes"))))}},FormDialog={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.zM,{asChild:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,null,"Create Account")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Cf,{className:"sm:max-w-[425px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.c7,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.L3,null,"Create account"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.rr,null,"Fill in the information below to create your account.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("form",{className:"grid gap-4 py-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"email"},"Email"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__.p,{id:"email",type:"email",placeholder:"m@example.com"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"password"},"Password"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__.p,{id:"password",type:"password"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"grid gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_label__WEBPACK_IMPORTED_MODULE_4__.J,{htmlFor:"confirm-password"},"Confirm Password"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_input__WEBPACK_IMPORTED_MODULE_5__.p,{id:"confirm-password",type:"password"}))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Es,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{type:"submit"},"Create Account"))))}},DestructiveDialog={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.zM,{asChild:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"destructive"},"Delete Account")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Cf,{className:"sm:max-w-[425px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.c7,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.L3,null,"Delete Account"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.rr,null,"Are you sure you want to delete your account? This action cannot be undone.")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Es,{className:"flex flex-col sm:flex-row sm:justify-between sm:space-x-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.zM,{asChild:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"outline"},"Cancel")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"destructive"},"Delete Account"))))}},CustomContent={args:{children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.zM,{asChild:!0},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,{variant:"outline"},"Show Details")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Cf,{className:"sm:max-w-[525px]"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.c7,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.L3,null,"Product Details")),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex flex-col md:flex-row gap-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"md:w-1/3"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("img",{src:"https://images.unsplash.com/photo-1523275335684-37898b6baf30",alt:"Product",className:"w-full h-auto rounded-md"})),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"md:w-2/3 space-y-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("h3",{className:"text-lg font-semibold"},"Premium Watch"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("p",{className:"text-sm text-muted-foreground"},"This premium watch features a stainless steel case, leather strap, and precision movement. Water-resistant up to 50 meters."),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"flex items-center"},react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-lg font-bold mr-2"},"$299.99"),react__WEBPACK_IMPORTED_MODULE_0__.createElement("span",{className:"text-sm text-muted-foreground line-through"},"$399.99")))),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_dialog__WEBPACK_IMPORTED_MODULE_1__.Es,{className:"mt-4"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_shadcn_button__WEBPACK_IMPORTED_MODULE_3__.$,null,"Add to Cart"))))}},__namedExportsOrder=["Default","FormDialog","DestructiveDialog","CustomContent"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <DialogTrigger asChild>\n          <Button variant="outline">Open Dialog</Button>\n        </DialogTrigger>\n        <DialogContent className="sm:max-w-[425px]">\n          <DialogHeader>\n            <DialogTitle>Edit profile</DialogTitle>\n            <DialogDescription>\n              Make changes to your profile here. Click save when you\'re done.\n            </DialogDescription>\n          </DialogHeader>\n          <div className="grid gap-4 py-4">\n            <div className="grid grid-cols-4 items-center gap-4">\n              <Label htmlFor="name" className="text-right">\n                Name\n              </Label>\n              <Input id="name" defaultValue="Pedro Duarte" className="col-span-3" />\n            </div>\n            <div className="grid grid-cols-4 items-center gap-4">\n              <Label htmlFor="username" className="text-right">\n                Username\n              </Label>\n              <Input id="username" defaultValue="@peduarte" className="col-span-3" />\n            </div>\n          </div>\n          <DialogFooter>\n            <Button type="submit">Save changes</Button>\n          </DialogFooter>\n        </DialogContent>\n      </>\n  }\n}',...Default.parameters?.docs?.source},description:{story:"Default dialog with a trigger button, title, description, and close button.",...Default.parameters?.docs?.description}}},FormDialog.parameters={...FormDialog.parameters,docs:{...FormDialog.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <DialogTrigger asChild>\n          <Button>Create Account</Button>\n        </DialogTrigger>\n        <DialogContent className="sm:max-w-[425px]">\n          <DialogHeader>\n            <DialogTitle>Create account</DialogTitle>\n            <DialogDescription>\n              Fill in the information below to create your account.\n            </DialogDescription>\n          </DialogHeader>\n          <form className="grid gap-4 py-4">\n            <div className="grid gap-2">\n              <Label htmlFor="email">Email</Label>\n              <Input id="email" type="email" placeholder="m@example.com" />\n            </div>\n            <div className="grid gap-2">\n              <Label htmlFor="password">Password</Label>\n              <Input id="password" type="password" />\n            </div>\n            <div className="grid gap-2">\n              <Label htmlFor="confirm-password">Confirm Password</Label>\n              <Input id="confirm-password" type="password" />\n            </div>\n          </form>\n          <DialogFooter>\n            <Button type="submit">Create Account</Button>\n          </DialogFooter>\n        </DialogContent>\n      </>\n  }\n}',...FormDialog.parameters?.docs?.source},description:{story:"Dialog with a form.",...FormDialog.parameters?.docs?.description}}},DestructiveDialog.parameters={...DestructiveDialog.parameters,docs:{...DestructiveDialog.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <DialogTrigger asChild>\n          <Button variant="destructive">Delete Account</Button>\n        </DialogTrigger>\n        <DialogContent className="sm:max-w-[425px]">\n          <DialogHeader>\n            <DialogTitle>Delete Account</DialogTitle>\n            <DialogDescription>\n              Are you sure you want to delete your account? This action cannot\n              be undone.\n            </DialogDescription>\n          </DialogHeader>\n          <DialogFooter className="flex flex-col sm:flex-row sm:justify-between sm:space-x-2">\n            <DialogTrigger asChild>\n              <Button variant="outline">Cancel</Button>\n            </DialogTrigger>\n            <Button variant="destructive">Delete Account</Button>\n          </DialogFooter>\n        </DialogContent>\n      </>\n  }\n}',...DestructiveDialog.parameters?.docs?.source},description:{story:"Dialog with destructive action.",...DestructiveDialog.parameters?.docs?.description}}},CustomContent.parameters={...CustomContent.parameters,docs:{...CustomContent.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: <>\n        <DialogTrigger asChild>\n          <Button variant="outline">Show Details</Button>\n        </DialogTrigger>\n        <DialogContent className="sm:max-w-[525px]">\n          <DialogHeader>\n            <DialogTitle>Product Details</DialogTitle>\n          </DialogHeader>\n          <div className="flex flex-col md:flex-row gap-4">\n            <div className="md:w-1/3">\n              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30" alt="Product" className="w-full h-auto rounded-md" />\n            </div>\n            <div className="md:w-2/3 space-y-4">\n              <h3 className="text-lg font-semibold">Premium Watch</h3>\n              <p className="text-sm text-muted-foreground">\n                This premium watch features a stainless steel case, leather\n                strap, and precision movement. Water-resistant up to 50 meters.\n              </p>\n              <div className="flex items-center">\n                <span className="text-lg font-bold mr-2">$299.99</span>\n                <span className="text-sm text-muted-foreground line-through">\n                  $399.99\n                </span>\n              </div>\n            </div>\n          </div>\n          <DialogFooter className="mt-4">\n            <Button>Add to Cart</Button>\n          </DialogFooter>\n        </DialogContent>\n      </>\n  }\n}',...CustomContent.parameters?.docs?.source},description:{story:"Dialog with custom content.",...CustomContent.parameters?.docs?.description}}}},"./src/themes/shadcn/ThemeProvider.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>ThemeProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const initialState={theme:"system",setTheme:()=>null},ThemeProviderContext=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(initialState);function ThemeProvider({children,defaultTheme="system",storageKey="shadcn-core-theme",...props}){const[theme,setTheme]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((()=>localStorage.getItem(storageKey)||defaultTheme));(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const root=window.document.documentElement;if(root.classList.remove("light","dark"),"system"!==theme)root.classList.add(theme);else{const systemTheme=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";root.classList.add(systemTheme)}}),[theme]);const value=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)((()=>({theme,setTheme:theme=>{localStorage.setItem(storageKey,theme),setTheme(theme)}})),[theme,storageKey,setTheme]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(ThemeProviderContext.Provider,{...props,value},children)}ThemeProvider.__docgenInfo={description:'ShadCn Theme Provider Component\n\nProvides theme context and functionality for light/dark mode in ShadCn components.\nAutomatically handles system theme preference and persists user choice.\n\n@param {Object} props - Component props\n@param {React.ReactNode} props.children - Child components to be wrapped\n@param {Theme} [props.defaultTheme="system"] - Default theme ("light", "dark", or "system")\n@param {string} [props.storageKey="core-ui-theme"] - LocalStorage key for theme persistence',methods:[],displayName:"ThemeProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultTheme:{required:!1,tsType:{name:"union",raw:'"dark" | "light" | "system"',elements:[{name:"literal",value:'"dark"'},{name:"literal",value:'"light"'},{name:"literal",value:'"system"'}]},description:"",defaultValue:{value:'"system"',computed:!1}},storageKey:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"shadcn-core-theme"',computed:!1}}}}}}]);