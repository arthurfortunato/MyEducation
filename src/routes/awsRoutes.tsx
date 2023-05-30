import React from "react";
import { Routes, Route } from "react-router-dom";
import { AWS } from "../pages/AWS";
import { CloudComputing } from "../pages/AWS/CloudComputing";
import { AWSCloudIntroduction } from "../pages/AWS/AWSCloudIntroduction";

export const AWSRoutes = () => {
  return (
    <Routes>
      <Route path="/aws" element={<AWS />} />
      <Route path="/aws/cloud-computing" element={<CloudComputing />} />
      <Route path="/aws/cloud-introduction" element={<AWSCloudIntroduction />} />
    </Routes>
  );
};
