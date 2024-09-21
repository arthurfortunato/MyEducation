import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const APM = () => {
  return (
    <ContentPage
      title="New Relic APM"
      paragraphs={paragraphs}
      nextRoute="/new-relic"
      backRoute="/new-relic"
    />
  );
};
