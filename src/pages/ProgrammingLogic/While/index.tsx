import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const While= () => {
  return (
    <ContentPage
      title="While"
      paragraphs={paragraphs}
      nextRoute="/programmingLogic/do-while"
      backRoute="/programmingLogic"
    />
  );
};
