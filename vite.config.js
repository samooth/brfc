import { nodePolyfills } from 'vite-plugin-node-polyfills'
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    lib: {
      name: 'bfrc',
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'umd']
    }
  },
  plugins: [
    nodePolyfills({
      // To add only specific polyfills, add them here. If no option is passed, adds all polyfills
      include: [],
      // To exclude specific polyfills, add them to this list. Note: if include is provided, this has no effect
      exclude: [
        'http', // Excludes the polyfill for `http` and `node:http`.
        'vm'
      ],
      globals: {
        Buffer: false, // can also be 'build', 'dev', or false
        global: false,
        process: false
      },
      // Override the default polyfills for specific modules.
      overrides: {
        // Since `fs` is not supported in browsers, we can use the `memfs` package to polyfill it.
        // fs: 'memfs',
      },
      // Whether to polyfill `node:` protocol imports.
      protocolImports: true
    })
  ]
})
