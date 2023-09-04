"use strict";
import { createElement, Fragment } from "@jacksonotto/lampjs";
import "./button.css";
export const Button = ({ children }) => {
  return /* @__PURE__ */ createElement("button", null, children);
};
