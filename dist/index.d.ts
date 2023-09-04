import { createElement as jsx, Fragment as jsxFragment } from "@jacksonotto/lampjs";
declare global {
    let createElement: typeof jsx;
    let Fragment: typeof jsxFragment;
}
export * from "./Button";
