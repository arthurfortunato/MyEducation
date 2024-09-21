import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ELB = () => {
  return (
    <ContentPage
      title="Elastic Load Balance (ELB)"
      paragraphs={paragraphs}
      nextRoute="/aws"
      backRoute="/aws"
    />
  );
};
