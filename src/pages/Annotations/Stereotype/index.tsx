import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Stereotype = () => {
  return (
    <ContentPage
      title="Stereotypes"
      paragraphs={paragraphs}
      nextRoute="/annotations/core-beans-autowired"
      backRoute="/annotations"
    />
  );
};
