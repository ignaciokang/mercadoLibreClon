// ORIGINAL

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// const corsOptions = {
//   origin: "*"
// }


// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "https://ignaciokang.github.io/mercadoLibreClon/",
//   plugins: [react()],
//   server: {
//     cors: corsOptions,
//   }

// })
