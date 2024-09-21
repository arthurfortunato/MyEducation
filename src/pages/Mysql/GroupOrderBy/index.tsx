import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const GroupByOrderBy = () => {
  return (
    <ContentPage
      title="Group By e Order By"
      paragraphs={paragraphs}
      nextRoute="/mysql/inner-join"
      backRoute="/mysql"
    />
  );
};
