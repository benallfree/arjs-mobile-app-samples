import resolve from "@rollup/plugin-node-resolve";
import copy from "rollup-plugin-copy";

export default {
  input: "src/index.js",
  output: {
    file: "www/js/index.js",
    format: "iife",
    sourcemap: true
  },
  plugins: [
    resolve(),
    copy({
      targets: [
        {
          src: "./node_modules/aframe/dist/aframe-master.js",
          dest: "www/js"
        },
        {
          src: "./node_modules/aframe/dist/aframe-master.js.map",
          dest: "www/js"
        },
        {
          src: "./node_modules/ar.js/aframe/build/aframe-ar.js",
          dest: "www/js"
        }
      ]
    })
  ]
};
