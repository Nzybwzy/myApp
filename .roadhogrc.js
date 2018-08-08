//import config from './server/local/config';

const pxtorem = require('postcss-pxtorem');


module.exports = {
    "entry"              : "src/index.js",
    "env"                : {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr",
                "transform-runtime",
                ["import", {"libraryName": "antd-mobile", "style": true}]
            ]
        },
        "production" : {
            "extraBabelPlugins": [
                "transform-runtime",
                ["import", {"libraryName": "antd-mobile", "style": true}]
            ]
        }
    },
    "publicPath"         : "/",
    "proxy"              : {
        "/api"  : {
            "target"      : `http://animate.wzybnzy.cn/`,
            "changeOrigin": true,
            // "pathRewrite" : {"^/api": ""}
        }
    },
    "theme"              : {
        "brand-primary"    : "#05419D",
        "brand-primary-tap": 'fadeout(@brand-primary,20)'
    },
    "extraPostCSSPlugins": [
        pxtorem({
            rootValue    : 100,
            propWhiteList: [],
        })
    ]
};