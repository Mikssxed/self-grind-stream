import { cn } from "@/utils";
import { type DirectiveBinding } from "vue";

export const classDirective = {
  mounted(el: HTMLElement, binding: DirectiveBinding<string>) {
    const existingClass = el.getAttribute("class") || "";
    el.setAttribute("class", cn(existingClass, binding.value));
  },
  updated(el: HTMLElement, binding: DirectiveBinding<string>) {
    const existingClass = el.getAttribute("class") || "";
    el.setAttribute("class", cn(existingClass, binding.value));
  },
};
