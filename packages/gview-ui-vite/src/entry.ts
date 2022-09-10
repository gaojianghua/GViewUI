/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-18 23:44:47
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 00:29:51
 * @FilePath     : \GViewUI\src\entry.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */

import { App } from 'vue'
import MyButton from './button'
import SFCButton from './SFCButton.vue'
import JSXButton from './JSXButton'

// 导出单独组件
export { MyButton, SFCButton, JSXButton }

// 编写一个插件，实现一个install方法

console.log('MyButton', MyButton.name)

export default {
    install(app: App): void {
        app.component(MyButton.name, MyButton)
        app.component(SFCButton.name, SFCButton)
        app.component(JSXButton.name, JSXButton)
    }
}
