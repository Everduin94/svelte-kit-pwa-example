import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit'

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit(), SvelteKitPWA({
				srcDir: './src',
				mode: 'development',
				strategies: 'injectManifest',
				filename: 'prompt-sw.ts',
				scope: '/',
				base: '/',
				manifest: {
					short_name: 'SvelteKit PWA',
					name: 'SvelteKit PWA',
					start_url: '/',
					scope: '/',
					display: 'standalone',
					theme_color: "#a6e3a1",
					background_color: "#b4befe",
					icons: [
						{
							src: '/Icon-192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: '/Icon-512.png',
							sizes: '512x512',
							type: 'image/png',
						},
						{
							src: '/Icon-512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any maskable',
						},
					],
				},
				injectManifest: {
					globPatterns: ['client/**/*.{js,css,ico,png,svg,webp,woff,woff2}']
				},
				devOptions: {
					enabled: true,
					type: 'module',
					navigateFallback: '/',
				},
				// if you have shared info in svelte config file put in a separate module and use it also here
				kit: {}
			})],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
};

export default config;
