export default {
    // 站点配置
    lang: 'zh-CN',
    title: 'Xchat',
    titleTemplate: 'Open secure private connection',
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
    //    logo: 'https://vuejs.org/images/logo.png',
        nav:nav(),
        socialLinks: [
            { icon: 'github', link: 'https://github.com/book-s/xchat' },
        ],

        sidebar: {
            '/guide/core/xchat/': sidebarxchat(),
        }
    },
    markdown:{
        lineNumbers:true //代码显示行号
    }
}

function nav() {
    return[
        {text: 'xchat', link: '/guide/core/xchat/index', activeMatch: '/guide/core/xchat/'},
    ]
    
}


function sidebarxchat(){
    return[
        {
            text: 'Xchat',
            collapsible: true,
            items: [
                { text: 'Xchat', link:'/guide/core/xchat/'},
            ]
        },
    ]
}