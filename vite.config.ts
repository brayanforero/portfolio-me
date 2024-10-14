import react from '@vitejs/plugin-react-swc'
import path from "node:path"
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@components', replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: '@consts', replacement: path.resolve(__dirname, 'src/consts')
      },
      {
        find: '@contexts', replacement: path.resolve(__dirname, 'src/contexs')
      },
      {
        find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks')
      },
      {
        find: '@', replacement: path.resolve(__dirname, 'src')
      }
    ]
  }
})
