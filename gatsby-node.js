const standardBasePath = `/`

exports.createPages = async({ actions }, themeOptions) => {
    const { createPage } = actions

    const basePath = themeOptions.basePath || standardBasePath

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
            path: basePath + '/success',
            component: require.resolve(`./src/templates/success.tsx`)
        }),
    ]
}