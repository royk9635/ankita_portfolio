// Shared Vite/TanStack Start config (includes React, Tailwind, Nitro, path aliases).
// Do not re-add those plugins here — duplicates will break the build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
});
