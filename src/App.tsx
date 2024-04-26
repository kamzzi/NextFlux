import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RoutesEnum } from "./types/shared";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Toaster } from "react-hot-toast";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./features/ui/ProtectedRoute";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path={RoutesEnum.HOME} />
          <Route element={<Login />} path={RoutesEnum.LOGIN} />
          <Route element={<Register />} path={RoutesEnum.REGISTER} />
          <Route
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
            path={RoutesEnum.DASHBOARD}
          />
        </Routes>
        <Toaster
          position="top-center"
          gutter={12}
          containerStyle={{ margin: "8px" }}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 5000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#18212f",
              color: "#e5e7eb",
            },
          }}
        />
      </BrowserRouter>
    </>
  );
};
