import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CloudComputing = () => {
  return (
    <ContentPage
      title="Cloud Computing"
      paragraphs={paragraphs}
      nextRoute="/aws/cloud-introduction"
      backRoute="/aws"
    />
  );
};
