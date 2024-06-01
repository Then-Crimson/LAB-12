import { defineConfig } from "astro/config";
import react from "@astrojs/react";
// astro.config.mjs


// https://astro.build/config
export default defineConfig({
  renderers: ['@astrojs/renderer-react'],
  integrations: [react()]
});