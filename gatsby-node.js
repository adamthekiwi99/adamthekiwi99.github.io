const standardBasePath = `/`

exports.createPages = async({ actions }, themeOptions) => {
    const { createPage } = actions

    const basePath = standardBasePath

    // createPage([{
    //     path: basePath,
    //     component: require.resolve(`./src/templates/index.tsx`),
    // }, {
    //     path: basePath,
    //     component: require.resolve(`./src/templates/success.tsx`),
    // }])
    return [
        createPage({
            path: basePath,
            component: require.resolve(`./src/templates/index.tsx`)
        }),
        createPage({
            path: '/success',
            component: require.resolve(`./src/templates/success.tsx`)
        }),
    ]
}