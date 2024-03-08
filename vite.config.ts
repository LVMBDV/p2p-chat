/// <reference types="vitest" />
import { defineConfig } from "vite";

import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "istanbul",
    },
    globals: true,
    environment: "jsdom",
  },
});
