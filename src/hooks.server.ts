import { dev } from "$app/environment";

let env = {};

if (dev) {
  const { getBindingsProxy } = await import("wrangler");
  env = (await getBindingsProxy({
    bindings: {
      MY_KV: {
        type: "kv",
        id: "xxxxx",
      },
    },
  })).bindings;
}

export const handle = async ({ event, resolve }) => {
  if (dev) {
    event.platform = {
      ...event.platform,
      env,
    };
  }

  return resolve(event);
};
