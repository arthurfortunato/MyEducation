import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Where = () => {
  return (
    <ContentPage
      title="Where"
      paragraphs={paragraphs}
      nextRoute="/mysql/wildcard"
      backRoute="/mysql"
    />
  );
};
