import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CoreBeansQualifier = () => {
  return (
    <ContentPage
      title="Core Beans - @Qualifier"
      paragraphs={paragraphs}
      nextRoute="/annotations/core-beans-value"
      backRoute="/annotations"
    />
  );
};
