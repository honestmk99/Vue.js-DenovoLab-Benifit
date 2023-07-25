import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import { visualizer } from 'rollup-plugin-visualizer'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
	optimizeDeps: {
		force: true
	},
	plugins: [
		vue(),
		WindiCSS(),
		AutoImport({
			imports: [
				'vitest',
				'vue'
			]
		})],
	resolve: {
		alias: {
			'@/': '/src/'
		}
	},
	build: {
		outDir: 'wwwroot',
		emptyOutDir: true,
		rollupOptions: {
			output: {
				manualChunks: id => {
					if (id.includes('swiper')) {
						return 'swiper'
					}
					
					if (id.includes('@vue') || id.includes('vue-router')) {
						return 'vue'
					}
					
					if (id.includes('quasar')) {
						return 'quasar'
					}
				}
			},
			plugins: [
				visualizer()
			]
		},
		chunkSizeWarningLimit: 500
	},
	server: {
		port: 3000,
		host: '0.0.0.0',
		open: true
	}
})
