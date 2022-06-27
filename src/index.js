import { apiker, OBMT } from "apiker";
import objects from "./objects.json";
import { example1_saveValueCommon } from "./controllers/example1_saveValueCommon";
import { example2_saveValueDiffObject } from "./controllers/example2_saveValueDiffObject";
import { example3_instancePerRouteParam } from "./controllers/example3_instancePerRouteParam";

const routes = {
  "/example1": example1_saveValueCommon,
  "/example2": example2_saveValueDiffObject,
  "/example3/:username": example3_instancePerRouteParam
};

apiker.init({
  routes,
  objects,
  exports,
  firewall: {
    limitRequestsPerMinute: 30
  },
  objectStateMapping: {
    // One object instance per user IP
    Example2: OBMT.SIGNEDIP,
    // Mapped to the parameter `username` in the route
    Example3: "username"
  }
});
