import type { PageServerLoadEvent } from "./$types";
import type { Actions } from "@sveltejs/kit";

export async function load({ platform }: PageServerLoadEvent) {
  const value = await platform?.env.MY_KV.get("MY_KEY");
  return { value };
}

export const actions: Actions = {
  async set({ request, platform }) {
    const formData = await request.formData();
    const text = formData.get("new-value") as string;
    await platform?.env.MY_KV.put("MY_KEY", text);
  },
  async delete({ platform }) {
    await platform?.env.MY_KV.delete("MY_KEY");
  },
};
