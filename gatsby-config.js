const basePath = '/';
const mdx = true;

module.exports = {
    siteMetadata: {
        siteTitle: `Adam's Shop`,
        siteTitleAlt: `Adam's Shop`,
        siteHeadline: `Adam's Shop`,
        siteUrl: `https://adamthekiwi99.github.io`,
        siteDescription: `A shop made by Adam!`,
        siteLanguage: `en`,
        siteImage: `/standard.png`,
        author: `adamthekiwi99`,
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
                name: `Adam's Shop`,
                short_name: `Adam's Shop`,
                description: `A shop made by Adam!`,
                start_url: basePath,
                background_color: `#141821`,
                theme_color: `#f6ad55`,
                display: `standalone`,
                icons: [{
                        src: `/favicon-16x16.png`,
                        sizes: `704x704`,
                        type: `image/png`,
                    },
                    {
                        src: `/favicon-32x32.png`,
                        sizes: `704x704`,
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