import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const InnerJoin = () => {
  return (
    <ContentPage
      title="Inner Join"
      paragraphs={paragraphs}
      nextRoute="/mysql"
      backRoute="/mysql"
    />
  );
};
