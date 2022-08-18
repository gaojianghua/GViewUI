/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-19 03:36:55
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 03:36:57
 * @FilePath     : \GViewUI\docs\.vitepress\theme\index.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import Theme from 'vitepress/dist/client/theme-default'
import SmartyUI from '../../../src/entry'

// 主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// 插件的组件，主要是demo组件
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'

export default {
    ...Theme,
    enhanceApp({ app }) {
        app.use(SmartyUI)
        app.component('Demo', Demo)
        app.component('DemoBlock', DemoBlock)
    },
}