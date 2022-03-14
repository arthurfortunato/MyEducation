import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Home } from "../pages/Home";

export const Router = () => {

  return (
      <BrowserRouter>
        <Sidebar />
          <Routes>
              <Route path="/" element={<Home />} />
          </Routes>
      </BrowserRouter>
  )

};