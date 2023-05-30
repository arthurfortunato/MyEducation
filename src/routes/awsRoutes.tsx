import React from "react";
import { Routes, Route } from "react-router-dom";
import { AWS } from "../pages/AWS";
import { CloudComputing } from "../pages/AWS/CloudComputing";

export const AWSRoutes = () => {
  return (
    <Routes>
      <Route path="/aws" element={<AWS />} />
      <Route path="/aws/cloud-computing" element={<CloudComputing />} />
    </Routes>
  );
};
