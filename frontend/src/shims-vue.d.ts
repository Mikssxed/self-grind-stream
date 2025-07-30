import "vue";

declare module "vue" {
  interface DirectiveBinding {
    value: string;
  }

  interface ComponentCustomProperties {
    vClass: DirectiveBinding<string>;
  }
}
