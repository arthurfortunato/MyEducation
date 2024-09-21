import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const DeploymentsModels = () => {
  return (
    <ContentPage
      title="Deployments Models"
      paragraphs={paragraphs}
      nextRoute="/aws/ec2"
      backRoute="/aws"
    />
  );
};
