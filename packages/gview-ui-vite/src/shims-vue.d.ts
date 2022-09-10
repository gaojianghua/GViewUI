/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-19 04:01:54
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 04:02:26
 * @FilePath     : \GViewUI\src\env.d.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
