import adapter from "svelte-adapter-bun"; // Bun
// import adapter from '@sveltejs/adapter-node'; // Node

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter(),
		serviceWorker: {
			register: false
		}
	}
};

export default config;
