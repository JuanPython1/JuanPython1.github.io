import react from "@vitejs/plugin-react-swc";
import path from 'path';
import { defineConfig } from "vite";


// eslint-disable-next-line no-undef
const dirname = __dirname;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://juandev.is-a.dev',
  resolve: {
    alias: {
      '@': path.resolve(dirname, "./src"),
      '@components': path.resolve("./src/components"),
      '@lib': path.resolve(dirname, "./src/lib"),
      '@hooks': path.resolve(dirname, "./src/hooks"),
      '@pages': path.resolve(dirname, "./src/pages"),
      '@assets': path.resolve(dirname, "./src/assets"),
      '@data': path.resolve(dirname, "./src/data"),
    }
  }
});
