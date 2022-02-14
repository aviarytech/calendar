module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte', './src/**/*.html'],
	darkMode: 'media', // or 'media' or 'class'
	theme: {
		extend: {
			height: (theme) => ({
				'1/24': 'calc(100vh / 24)',
				'23/24': 'calc(100vh * 23 / 24)'
			}),

			colors: {
				av1: '#006dbe',
				av0: '#ffd966'
			}
		}
	},
	plugins: []
};
