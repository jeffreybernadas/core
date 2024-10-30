import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import babel from "@rollup/plugin-babel";
import image from "@rollup/plugin-image";
import externals from "rollup-plugin-node-externals";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import { readFileSync } from "fs";
const pkg = JSON.parse(readFileSync("./package.json", { encoding: "utf8" }));

export default [
  {
    input: "./src/index.ts",
    plugins: [
      image(),
      del({ targets: "build/*" }),
      externals({ deps: true }),
      nodeResolve({
        extensions: [".js", ".ts", ".tsx"],
      }),
      commonjs(),
      postcss(),
      babel({
        babelHelpers: "runtime",
        skipPreflightCheck: true,
        exclude: "*/node_modules/*",
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      }),
    ],
    output: [
      { file: pkg.main, format: "cjs" },
      { file: pkg.module, format: "es" },
    ],
  },
];
