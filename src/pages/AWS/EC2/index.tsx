import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const EC2 = () => {
  return (
    <ContentPage
      title="Amazon Elastic Compute Cloud (EC2)"
      paragraphs={paragraphs}
      nextRoute="/aws/ec2-instance"
      backRoute="/aws"
    />
  );
};
