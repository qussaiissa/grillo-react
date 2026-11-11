
import { defineConfig, transformWithEsbuild } from "vite";

export default defineConfig({
  plugins: [
    {
      name: "jsx-in-js",
      enforce: "pre",
      async transform(code, id) {
        if (/[/\\]src[/\\].*\.js$/.test(id)) {
          return transformWithEsbuild(code, id, {
            loader: "jsx",
            jsx: "automatic"
          });
        }
      }
    }
  ],
  optimizeDeps: {
    esbuildOptions: {
      loader: { ".js": "jsx" }
    }
  }
});
