/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-19 00:44:09
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 00:44:11
 * @FilePath     : \GViewUI\docs\vite.config.ts
 * @Description  : 
 * 
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved. 
 */
import { defineConfig } from "vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "../config/unocss";
// https://vitejs.dev/config/

export default defineConfig({
    plugins: [
        // 添加JSX插件
        vueJsx(),
        Unocss(),
    ],
});