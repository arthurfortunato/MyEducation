import { Routes, Route } from "react-router-dom";
import { MySQL } from "../pages/Mysql";
import { Introduction } from "../pages/Mysql/Introduction";
import { CreateDatabase } from "../pages/Mysql/CreateDatabase";
import { CreateTable } from "../pages/Mysql/CreateTable";
import { Insert } from "../pages/Mysql/Insert";
import { Select } from "../pages/Mysql/Select";
import { Where } from "../pages/Mysql/Where";
import { Wildcard } from "../pages/Mysql/Wildcard";

export const MysqlRoutes = () => {
  return (
    <Routes>
      <Route path="/mysql" element={<MySQL />} />
      {<Route path="/mysql/introduction" element={<Introduction />} />}
      {<Route path="/mysql/create-database" element={<CreateDatabase />} />}
      {<Route path="/mysql/create-table" element={<CreateTable />} />}
      {<Route path="/mysql/insert" element={<Insert />} />}
      {<Route path="/mysql/select" element={<Select />} />}
      {<Route path="/mysql/where" element={<Where />} />}
      {<Route path="/mysql/wildcard" element={<Wildcard />} />}
    </Routes>
  );
};
