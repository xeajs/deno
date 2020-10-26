import { Router } from "../Deps/index.ts";

const Route = new Router();

Route.get("/", async (ctx) => {
  ctx.response.body = "/";
});
Route.post("/", async (ctx) => {
  ctx.response.body = "/";
});

export default Route;
