import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routeConfig } from "shared/config/RouteConfig/routeConfig";

export const AppRouter = () => {
  return ( 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map(route => (
            <Route 
              path={route.path}
              element={(
                <div className="pageWrapper">{
                  route.element
                }</div>
              )}
            />
        ))}
      </Routes>
    </Suspense>
   );
}