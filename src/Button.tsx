import { createElement, ComponentChild } from "@jacksonotto/lampjs";
import "./button.css";

type ButtonProps = {
  children: ComponentChild;
};

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
