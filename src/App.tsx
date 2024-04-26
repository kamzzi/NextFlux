import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RoutesEnum } from "./types/shared";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={RoutesEnum.HOME} />
        <Route element={<Login />} path={RoutesEnum.LOGIN} />
        <Route element={<Register />} path={RoutesEnum.REGISTER} />
      </Routes>
    </BrowserRouter>
  );
};
