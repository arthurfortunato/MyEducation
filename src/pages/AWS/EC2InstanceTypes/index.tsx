import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const EC2InstanceTypes = () => {
  return (
    <ContentPage
      title="Amazon EC2 Instance Types"
      paragraphs={paragraphs}
      nextRoute="/aws/elb"
      backRoute="/aws"
    />
  );
};
