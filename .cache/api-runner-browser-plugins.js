module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-mdx/gatsby-browser.js'),
      options: {"plugins":[],"extensions":[".mdx"],"defaultLayouts":{},"gatsbyRemarkPlugins":[],"lessBabel":false,"remarkPlugins":[],"rehypePlugins":[],"mediaTypes":["text/markdown","text/x-markdown"],"root":"/home/adam/Documents/web/gatsby-theme-kiwi-shop"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Adam's Shop","short_name":"Adam's Shop","description":"A shop made by Adam!","start_url":"/","background_color":"#141821","theme_color":"#f6ad55","display":"standalone","icons":[{"src":"/favicon-16x16.png","sizes":"704x704","type":"image/png"},{"src":"/favicon-32x32.png","sizes":"704x704","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":null},
    },{
      plugin: require('../node_modules/gatsby-plugin-theme-ui/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
