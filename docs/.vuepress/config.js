module.exports = {
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
            { text: '首页', link: 'http://www.baidu.com'},
            { text: '指南', link: '/siderPage/' },
            { text: '学习', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: 'Linux',
                collapsable: true,
                children: [
                    '/',
                    '/siderPage/one/',
                    '/siderPage/one/two.md',
                    '/siderPage/one/three.md',
                ]
            },
            {
                title: 'JavaScript',
                children: [
                    "/siderPage/two/",
                    "/siderPage/two/two.md",
                    "/siderPage/two/three.md",
                    "/siderPage/two/four.md",
                    "/siderPage/two/five.md"
                ]
            },
            {
                title: 'Vue',
                children: [ "/siderPage/two/" ]
            },
            {
                title: 'Vuex',
                children: [ "/siderPage/two/" ]
            },
            {
                title: '包罗万象',
                children: [ "/siderPage/cover/" ]
            }
        ]
    }
}
