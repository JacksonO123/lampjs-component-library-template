import { ComponentChild } from '@jacksonotto/lampjs';
import './button.scss';

type ButtonProps = {
  children: ComponentChild;
};

export const Button = ({ children }: ButtonProps) => {
  return <button>{children}</button>;
};
