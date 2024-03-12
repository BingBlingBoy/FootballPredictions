import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    watch: {
        usePolling: true
    },

    // proxy: {
    //   "/api": "http://localhost:5173"
    //   }
    // }
  }
})
// import { defineConfig, loadEnv } from 'vite'
// import react from '@vitejs/plugin-react-swc'
//
// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//   return {
//     define: {
//       'process.env.SOME_KEY': JSON.stringify(env.SOME_KEY)
//     },
//     css: {
//       postcss: {
//         plugins: [tailwindcss()],
//       },
//     },
//     plugins: [react()],
//   }
// })