import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RoutesEnum } from "./types/shared";
import { Login } from "./pages/Login";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={RoutesEnum.HOME} />
        <Route element={<Login />} path={RoutesEnum.LOGIN} />
      </Routes>
    </BrowserRouter>
  );
};
