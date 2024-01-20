import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig, searchForWorkspaceRoot } from "vite";

export default defineConfig({
  plugins: [sveltekit()],
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "/Users/dario/Repos/my-repos/svelte-kit/packages/kit",
      ],
    },
  },
});
