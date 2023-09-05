"use strict";
import { createElement, Fragment } from "@jacksonotto/lampjs";
import "./button.scss";
export const Button = ({ children }) => {
  return /* @__PURE__ */ createElement("button", null, children);
};
