module.exports = {
    // base: '/siderPage/linux/',
    title: "DaiSX-Web开发的那些事儿...",
    markdown: {
        // markdown-it-anchor 的选项
        anchor: { permalink: false },
        // markdown-it-toc 的选项
        toc: { includeLevel: [1, 2, 3, 4] },
        config: md => {
            // 使用更多 markdown-it 插件！
            // md.use(require('markdown-it-xxx'))
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/siderPage/javascript/'}
            // { text: '指南', link: '/siderPage/linux/1' },
            // { text: '学习', link: '/siderPage/linux/2' }
        ],
        sidebar: [
            {
                title: 'Linux',
                collapsable: true,
                children: [
                    '/'
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    "/siderPage/javascript/",
                    "/siderPage/javascript/two.md",
                    "/siderPage/javascript/three.md",
                    "/siderPage/javascript/four.md",
                    "/siderPage/javascript/five.md",
                    "/siderPage/javascript/six.md"
                ]
            }, {
                title: 'Vue',
                children: [ "/siderPage/vue/" ]
            }, {
                title: 'Vuex',
                children: [ "/siderPage/vuex/" ]
            }, {
                title: 'Nginx',
                children: [ "/siderPage/nginx/" ]
            }, {
                title: '包罗万象',
                children: [ "/siderPage/cover/" ]
            }
        ]
    }
}
