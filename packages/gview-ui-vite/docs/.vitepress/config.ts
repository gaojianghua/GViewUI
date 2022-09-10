/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-19 00:45:52
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 03:43:08
 * @FilePath     : \GViewUI\docs\.vitepress\config.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
const sidebar = {
    '/': [
        { text: '快速开始', link: '/' },
        {
            text: '通用',
            children: [
                { text: 'Button 按钮', link: '/components/button/' },
            ]
        },
        { text: '导航' },
        { text: '反馈' },
        { text: '数据录入' },
        { text: '数据展示' },
        { text: '布局' },
    ]
}
const config = {
    title: "🔨  Smarty-UI",
    description: "组件库搭建的教学模型",
    themeConfig: {
        sidebar,
    },

    markdown: {
        config: (md) => {
            // 添加DemoBlock插槽
            const { demoBlockPlugin } = require('vitepress-theme-demoblock')
            md.use(demoBlockPlugin)
        }
    }
}
export default config