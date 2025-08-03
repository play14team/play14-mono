import { load_HomePage } from '$houdini/plugins/houdini-svelte/stores/HomePage';

export async function load(event) {
  return await load_HomePage({ event });
}
