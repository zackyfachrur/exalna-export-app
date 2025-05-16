import { Outlet, matchPath } from "react-router-dom";
import Navigation from "@layouts/Navigation";
import Sidebar from "@layouts/Sidebar";
import { MotionLayoutProvider } from "@context/MotionLayoutProvider";
import { AuthProvider } from "@context/AuthContext";

const Layout = () => {
  const routeLogin = "/sign-in"
  const routeRegister = "/sign-up"
  const matchLogin = matchPath(routeLogin, location.pathname);
  const matchRegister = matchPath(routeRegister, location.pathname)

  return (
    <AuthProvider>
      <MotionLayoutProvider>
        {matchLogin || matchRegister ? (null) : <Navigation />}
        <div className="flex flex-row w-full justify-between">
          {matchLogin || matchRegister ? (null) : <Sidebar />} 
          <main className="flex-grow">
            <Outlet />
          </main>
        </div>
      </MotionLayoutProvider>
    </AuthProvider>
  );
};

export default Layout;
