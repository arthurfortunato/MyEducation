import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const AWSCloudIntroduction = () => {
  return (
    <ContentPage
      title="AWS Cloud Introduction"
      paragraphs={paragraphs}
      nextRoute="/aws/deployments-models"
      backRoute="/aws"
    />
  );
};
