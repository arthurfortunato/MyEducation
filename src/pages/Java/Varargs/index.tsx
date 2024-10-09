import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const Varargs = () => {
  return (
    <ContentPage
      title="Varargs"
      paragraphs={paragraphs}
      nextRoute="/java"
      backRoute="/java"
    />
  );
};
