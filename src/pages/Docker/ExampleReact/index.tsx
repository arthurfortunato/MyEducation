import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const ExampleReact = () => {
  return (
    <ContentPage
      title="Dockerfile React"
      paragraphs={paragraphs}
      nextRoute="/docker"
      backRoute="/docker"
    />
  );
};
