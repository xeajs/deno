import { Application } from "./Deps/index.ts";
import { Listen } from "./Core/index.ts";
import Route from "./Route/index.ts";

const App = new Application();
App.use(Route.routes());
App.use(Route.allowedMethods());
await Listen(App);
