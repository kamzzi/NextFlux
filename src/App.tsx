import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { RoutesEnum } from "./types/shared";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path={RoutesEnum.HOME} />
      </Routes>
    </BrowserRouter>
  );
};
