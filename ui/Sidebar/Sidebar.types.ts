import { IconProps } from "@radix-ui/react-icons/dist/types";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export interface Option {
  label: string;
  href: string;
  Icon?: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
}

export interface SidebarProps {
  options: Option[];
}
