import { Application } from "../Deps/index.ts";

export const Listen = (App: Application) => {
  App.addEventListener("listen", ({ port }) => {
    console.info(``);
    console.info(`Local: http://localhost:${port}`);
    console.info(``);
  });
  App.listen({ port: 8000 });
};
