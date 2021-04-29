const path = require('path');
const config = require('./src/config');
require("dotenv").config()

module.exports = {
    pathPrefix: "/gatsby-starter-builder",
    flags: {
        // DEV_SSR: false,
    },
    siteMetadata: {
        title: 'Gatsby + Builder.io Starter',
        description: 'This repo contains an example website that is built with Builder.io, and generate with Gatsby'
    },
    plugins: [
        'gatsby-plugin-top-layout',
        {
            resolve: 'gatsby-plugin-material-ui',
            // If you want to use styled components you should change the injection order.
            options: {
                // stylesProvider: {
                //   injectFirst: true,
                // },
            }
        },
        // If you want to use styled components you should add the plugin here.
        // 'gatsby-plugin-styled-components',
        'gatsby-plugin-react-helmet',
        {
            resolve: '@builder.io/gatsby',
            options: {
                /** TODO: update this with your API key! */
                publicAPIKey: config.builderAPIKey,
                templates: {
                    // Render every `page` model as a new page using the /page.tsx template
                    // based on the URL provided in Builder.io
                    page: path.resolve('./src/templates/page.jsx')
                },
            }
        },
        {
            resolve: `gatsby-source-datocms`,
            options: {
                // You can find your read-only API token under the Settings > API tokens
                // section of your administrative area:
                apiToken: process.env.DATO_API_TOKEN,

                // The project environment to read from. Defaults to the primary environment:
                // environment: `master`,

                // If you are working on development/staging environment, you might want to
                // preview the latest version of records instead of the published one:
                previewMode: false,

                // Disable automatic reloading of content when some change occurs on DatoCMS:
                disableLiveReload: false,

                // Custom API base URL (most don't need this)
                apiUrl: 'https://site-api.datocms.com',

                // Setup locale fallbacks
                // In this example, if some field value is missing in Italian, fall back to English
                // localeFallbacks: {
                //   it: ['en'],
                // },
            },
        },
    ]
};