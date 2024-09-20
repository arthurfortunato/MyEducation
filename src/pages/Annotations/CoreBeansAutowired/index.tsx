import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const CoreBeansAutowired = () => {
  return (
    <ContentPage
      title="Core Beans - @Autowired"
      paragraphs={paragraphs}
      nextRoute="/annotations/autowired-constructor"
      backRoute="/annotations"
    />
  );
};
