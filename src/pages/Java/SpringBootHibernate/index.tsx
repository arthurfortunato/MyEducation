import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const SpringBootHibernate = () => {
  return (
    <ContentPage
      title="Hibernate"
      paragraphs={paragraphs}
      nextRoute="/java/interface"
      backRoute="/java"
    />
  );
};
