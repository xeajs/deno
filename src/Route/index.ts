import * as RouteHandle from "../Controller/index.ts";

import { Oak } from "../Deps.ts";

const Route = new Oak.Router();

Route.get("/", RouteHandle.getHello);
Route.post("/", RouteHandle.getHello);

export default Route;
