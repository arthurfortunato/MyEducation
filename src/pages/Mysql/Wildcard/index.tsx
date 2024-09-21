import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Wildcard = () => {
  return (
    <ContentPage
      title="Wildcard"
      paragraphs={paragraphs}
      nextRoute="/mysql/group-order-by"
      backRoute="/mysql"
    />
  );
};
