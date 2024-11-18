import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  define: {
    "process.env": {
      NODE_ENV: "production",
    }
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build:{
    lib:{
      entry:"./src/main.jsx",
      name:"my-widget",
      fileName:(format)=>`widget.${format}.js`
    },
    target:"esnext",
  }
})
