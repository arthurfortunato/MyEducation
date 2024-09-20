import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CoreBeansValue = () => {
  return (
    <ContentPage
      title="Core Beans - @Value"
      paragraphs={paragraphs}
      nextRoute="/annotations/core-context-configuration"
      backRoute="/annotations"
    />
  );
};
