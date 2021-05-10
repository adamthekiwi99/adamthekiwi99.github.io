const basePath = '/docs';
const mdx = true;

module.exports = {
    siteMetadata: {
        siteTitle: `Cara`,
        siteTitleAlt: `Cara - @lekoarts/gatsby-theme-cara`,
        siteHeadline: `Cara - Gatsby Theme from @lekoarts`,
        siteUrl: `https://cara.lekoarts.de`,
        siteDescription: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
        siteLanguage: `en`,
        siteImage: `/banner.jpg`,
        author: `@lekoarts_de`,
        basePath,
    },
    plugins: [{
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `sections`,
                path: `${__dirname}/src/sections`,
            },
        },
        mdx && {
            resolve: `gatsby-plugin-mdx`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Cara - @lekoarts/gatsby-theme-cara`,
                short_name: `Cara`,
                description: `Playful and Colorful One-Page portfolio featuring Parallax effects and animations`,
                start_url: `/`,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [{
                        src: `/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`,
                    },
                    {
                        src: `/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`,
                    },
                ],
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-typescript`,
        `gatsby-plugin-emotion`,
        `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
}