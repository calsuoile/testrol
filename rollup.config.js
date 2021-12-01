import pkg from "./package.json";
import plugin_node from "@rollup/plugin-node-resolve";
import babel from "@rollup/plugin-babel";
import typescript from 'rollup-plugin-typescript2';
import {terser} from "rollup-plugin-terser";
import bowerResolve from 'rollup-plugin-bower-resolve';

const extensions = [".js", ".ts"];
export default [
  // CommonJS (for Node) and ES module (for bundlers) build.
  {
    input: "src/index.ts",
    output: [
      {
        file: pkg.main,
        format: "cjs",
      },
      {
        file: pkg.module,
        format: "es",
      },
      {
        file: 'dist/bundle.js',
        format: 'cjs'
      },
      {
        file: 'dist/bundle.min.js',
        format: 'iife',
        name: 'testrol.11'
      }
    ],
    plugins: [
      plugin_node({}),
      babel({
        exclude: "node_modules/**",
      }),
      bowerResolve({}),
      typescript({
        typescript: require("typescript"),
      }),
      terser(), // minifies generated bundles
    ],
  },
];

