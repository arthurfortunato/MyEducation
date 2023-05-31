import React from "react";
import { Routes, Route } from "react-router-dom";
import { AWS } from "../pages/AWS";
import { CloudComputing } from "../pages/AWS/CloudComputing";
import { AWSCloudIntroduction } from "../pages/AWS/AWSCloudIntroduction";
import { DeploymentsModels } from "../pages/AWS/DeploymentsModels";
import { EC2 } from "../pages/AWS/EC2";
import { EC2InstanceTypes } from "../pages/AWS/EC2InstanceTypes";

export const AWSRoutes = () => {
  return (
    <Routes>
      <Route path="/aws" element={<AWS />} />
      <Route path="/aws/cloud-computing" element={<CloudComputing />} />
      <Route
        path="/aws/cloud-introduction"
        element={<AWSCloudIntroduction />}
      />
      <Route path="/aws/deployments-models" element={<DeploymentsModels />} />
      <Route path="/aws/ec2" element={<EC2 />} />
      <Route path="/aws/ec2-instance" element={<EC2InstanceTypes />} />
    </Routes>
  );
};
