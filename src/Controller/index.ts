import { Oak } from "../Deps.ts";

export const getHello = async (ctx: Oak.RouterContext) => {
  ctx.response.body = "hello";
};
