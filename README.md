# SvelteKit CF app with Bindings Demo

This is a simple application that shows can users can interact during local development
with their Cloudflare bindings via the changes introduced in https://github.com/sveltejs/kit/pull/11323

Here there are three relevant things to notice:

- the `wrangler.toml` file present at the repos root, it declares a KV binding:
    ```toml
    [[kv_namespaces]]
    binding = "MY_KV"
    id = "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
    ```
- the `svelte.config.js` file is a standard one which simply uses the adapter from `"@sveltejs/adapter-cloudflare"` (so, there are no changes on how you use/configure the adapter)
- the declared KV is used in `src/routes/+page.server.ts`, that's not something novel, it is exactly the same as existing SvelteKit apps integrating with Cloudflare would do, what's new is that this works when running `pnpm dev`

## How to run try the above locally

To try the above locally you will need to have a local clone of the SvelteKit repo, more specifically with the changes I'm making in https://github.com/sveltejs/kit/pull/11323.

With that simply replace the `/Users/dario/Repos/my-repos/svelte-kit/`s present in the `package.json` and `vite.config.ts` with the location of your local clone:
```diff
"pnpm": {
  "overrides": {
-    "@sveltejs/kit": "/Users/dario/Repos/my-repos/svelte-kit/packages/kit",
-    "@sveltejs/adapter-cloudflare": "/Users/dario/Repos/my-repos/svelte-kit/packages/adapter-cloudflare"
+    "@sveltejs/kit": "<YOUR_SVELTE_KIT_LOCATION>/packages/kit",
+    "@sveltejs/adapter-cloudflare": "<YOUR_SVELTE_KIT_LOCATION>/packages/adapter-cloudflare"
  }
}
```
```diff
fs: {
    allow: [
    searchForWorkspaceRoot(process.cwd()),
-    "/Users/dario/Repos/my-repos/svelte-kit/packages/kit",
+    "<YOUR_SVELTE_KIT_LOCATION>/packages/kit"
    ],
},
```

then simply run
```sh
pnpm i
pnpm dev
```

and you will see in the app's home page how the app can interact with the KV binding during local development