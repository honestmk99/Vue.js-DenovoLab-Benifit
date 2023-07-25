import iconSet from 'quasar/icon-set/fontawesome-v5.js'

export default {
	config: {
		extras: [
			'fontawesome-v6',
			'fontawesome-v5'
		],
		brand: {
			primary: '#282858',
			secondary: '#64748B',
			blue: '#2563EB',
			yellow: '#FECC30',
			purple: '#8B5CF6',
			green: '#16A34A',
			orange: '#EA580C'
		},
	},
	iconSet,
	vendor: {
		remove: [ 'my-package' ]
	}
}
