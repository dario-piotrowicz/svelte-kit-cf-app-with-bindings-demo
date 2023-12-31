import adapter from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";
import { getBindingsProxy } from "wrangler";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
    // If your environment is not supported or you settled on a specific environment, switch out the adapter.
    // See https://kit.svelte.dev/docs/adapters for more information about adapters.
    adapter: adapter({ nodeCompat: true }),
    devPlatform: {
      env: (
        await getBindingsProxy({
          bindings: {
            MY_KV: {
              type: "kv",
              id: "xxxxx",
            },
          },
        })
      ).bindings,
    }
  },
};

export default config;
