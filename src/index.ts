import "./DateBase/index.ts";

import { Listen } from "./Core/index.ts";
import { Oak } from "./Deps.ts";
import Route from "./Route/index.ts";

const App = new Oak.Application();
App.use(Route.routes());
App.use(Route.allowedMethods());
await Listen(App);
