import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouteConfig/RouteConfig";

const AppRouter = () => {
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(route => (
          <Route 
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Suspense>
   );
}
 
export default AppRouter;