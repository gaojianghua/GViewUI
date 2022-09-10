/*
 * @Author       : 高江华 g598670138@163.com
 * @Date         : 2022-08-19 04:08:17
 * @LastEditors  : 高江华 g598670138@163.com
 * @LastEditTime : 2022-08-19 04:08:19
 * @FilePath     : \GViewUI\src\button\__tests__\Button.spec.ts
 * @Description  :
 *
 * Copyright (c) 2022 by 高江华 g598670138@163.com, All Rights Reserved.
 */
import Button from "../Button";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
describe("Button", () => {
  // mount
  test("mount  @vue/test-utils", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });

    // 断言
    expect(wrapper.text()).toBe("Button");
  });

  describe("color", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });
      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });

    test("red", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          color: "red",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-red-500")
      ).toBe(true);
    });
  });

  describe("round", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-lg")
      ).toBe(true);
    });

    test("round:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          round: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("rounded-full")
      ).toBe(true);
    });
  });

  describe("plain", () => {
    test("default", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-500")
      ).toBe(true);
    });

    test("plain:true", () => {
      const wrapper = shallowMount(Button, {
        slots: {
          default: "Button",
        },
        props: {
          plain: true,
        },
      });

      expect(
        wrapper
          .classes()
          .map((v) => v.replace("\n", ""))
          .includes("bg-blue-100")
      ).toBe(true);
    });
  });

  test("icon", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
      props: {
        icon: "edit",
      },
    });

    expect(
      wrapper
        .find("i")
        .classes()
        .map((v) => v.replace("\n", ""))
        .includes("i-ic-baseline-edit")
    ).toBe(true);
  });
});
