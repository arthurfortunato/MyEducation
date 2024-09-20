import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const AutowiredVSConstructor = () => {
  return (
    <ContentPage
      title="@Autowired VS Constructor"
      paragraphs={paragraphs}
      nextRoute="/annotations/core-beans-qualifier"
      backRoute="/annotations"
    />
  );
};
