import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import { StartRoutes } from "./startRoutes";
import { HomeRoutes } from "./homeRoutes";
import { ConceptsRoutes } from "./concepts";
import { ProgrammingLogicRoutes } from "./programmingLogicRoutes";
import { PooRoutes } from "./pooRoutes";
import { JavaRoutes } from "./javaRoutes";
import { CollectionsRoutes } from "./collections";
import { AnnotationsRoutes } from "./annotations";
import { NewRelicRoutes } from "./newRelic";
import { DockerRoutes } from "./dockerRoutes";
import { MysqlRoutes } from "./mysqlRoutes";
import { AWSRoutes } from "./awsRoutes";

const queryClient = new QueryClient();

export const Routers: any = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <StartRoutes />
        <HomeRoutes />
        <ConceptsRoutes />
        <ProgrammingLogicRoutes />
        <PooRoutes />
        <JavaRoutes />
        <CollectionsRoutes />
        <AnnotationsRoutes />
        <NewRelicRoutes />
        <DockerRoutes />
        <MysqlRoutes />
        <AWSRoutes />
      </Router>
    </QueryClientProvider>
  );
};
