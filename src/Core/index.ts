import Config from "../Config/index.ts";
import { Oak } from "../Deps.ts";

export const Listen = (App: Oak.Application) => {
  App.addEventListener("listen", ({ port }) => {
    console.info(``);
    console.info(`Local: http://localhost:${port}`);
    console.info(``);
  });
  App.listen({ port: Config.port });
};
