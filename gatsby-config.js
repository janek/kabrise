const path = require('path');

module.exports = {
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-svgr`,
			options: {
				svgoConfig: {
					plugins: {
						removeViewBox: false,
					},
				},
			},
		},
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `art`,
				path: `${__dirname}/src/images/art`,
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-transformer-remark`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Kabrise`,
				short_name: `kabrise`,
				start_url: `/`,
				background_color: `#8bd8ed`,
				theme_color: `#8bd8ed`,
				display: `minimal-ui`,
				icon: `static/favicon.svg`,
			},
		},
		{
			resolve: `gatsby-plugin-intl`,
			options: {
				path: `${__dirname}/src/intl`,
				languages: [`de`, 'en'],
				defaultLanguage: `de`,
				redirect: true,
			},
		},
		{
			resolve: `gatsby-plugin-alias-imports`,
			options: {
				alias: {
					'@components': path.resolve(__dirname, 'src/components'),
					'@common': path.resolve(__dirname, 'src/components/common'),
					'@images': path.resolve(__dirname, 'src/images'),
					'@sections': path.resolve(__dirname, 'src/components/sections'),
					'@styles': path.resolve(__dirname, 'src/styles/'),
					'@static': path.resolve(__dirname, 'static/'),
				},
			},
		},
	],
};
