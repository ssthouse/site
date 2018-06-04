'use strict';

var path = require('path');
var resolve = path.resolve;
var pkg = require('./package.json');

module.exports = {
    url: {
        d3: 'https://gw.alipayobjects.com/os/antv/assets/lib/d3-4.13.0.min.js',
        dataSet: 'https://gw.alipayobjects.com/os/antv/assets/data-set/0.8.7/data-set.min.js',
        f2: 'https://gw.alipayobjects.com/os/antv/assets/f2/3.1.8/f2.js',
        g2: 'https://gw.alipayobjects.com/os/antv/assets/g2/3.1.0/g2.min.js',
        g6: 'https://unpkg.com/@antv/g6@2.0.0-beta.85/dist/g6.js',
        'g6-plugins': 'https://unpkg.com/@antv/g6@2.0.0-beta.85/dist/g6Plugins.js',
        'g6-editor': 'https://gw.alipayobjects.com/os/rmsportal/rojVzIEqCvAqnaivqjcA.js',
        'g2-plugin-slider': 'https://gw.alipayobjects.com/os/antv/assets/g2-plugin-slider/2.0.2/g2-plugin-slider.js',
        'g2-brush': 'https://gw.alipayobjects.com/os/antv/assets/g2-brush/0.0.2/g2-brush.min.js',
        katex:    'https://gw.alipayobjects.com/os/antv/assets/lib/katex-0.8.3/katex.min.js',
        katexCss: 'https://gw.alipayobjects.com/os/antv/assets/lib/katex-0.8.3/katex.min.css',
        jquery:   'https://gw.alipayobjects.com/os/antv/assets/lib/jquery-3.2.1.min.js',
        lodash:   'https://gw.alipayobjects.com/os/antv/assets/lib/lodash-4.17.4.min.js',
    },
    assets: '/assets',
    base: '/',
    dest: resolve(process.cwd(), './_site'),
    dist: '${assets}/dist/${pkg.version}',
    home: 'zh-cn/index.html',
    pkg: pkg,
    port: 2047,
    src: resolve(process.cwd(), './site'),
    brand: {
        logo: '${assets}/image/logo.svg',
        name: 'AntV'
    },
    screenshots: [
        {
            src: 'zh-cn/g2/3.x/demo',
            dest: '${assets}/dist/${pkg.version}/g2/3.x',
            template: 'g2-demo-standalone'
        },
        {
            src: 'zh-cn/g2/3.x/demo',
            dest: '${assets}/dist/${pkg.version}/g2/3.x',
            demoTheme: 'dark',
            template: 'g2-demo-standalone'
        },
        {
            src: 'zh-cn/g6/1.x/demo',
            dest: '${assets}/dist/${pkg.version}/g6/1.x',
            template: 'g6-demo-standalone'
        },
        {
            src: 'zh-cn/f2/3.x/demo',
            dest: '${assets}/dist/${pkg.version}/f2/3.x',
            template: 'f2-demo-standalone'
        },
        {
            src: 'zh-cn/gallery/g2',
            dest: '${assets}/dist/${pkg.version}/gallery/g2',
            template: 'g2-demo-standalone'
        },
    ],
    indices: [{
        src: 'zh-cn',
        meta: require('./site/zh-cn/data'),
        dest: '${assets}/dist/${pkg.version}/_indexing.zh-cn.json'
    }],
    theme: {
        root: resolve(__dirname, './theme/default'),
        assets: './assets',
        templates: './templates'
    }
};
