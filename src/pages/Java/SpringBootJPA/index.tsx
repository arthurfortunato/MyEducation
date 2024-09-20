import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const SpringBootJPA = () => {
  return (
    <ContentPage
      title="Spring Data JPA"
      paragraphs={paragraphs}
      nextRoute="/java/springboot/hibernate"
      backRoute="/java"
    />
  );
};
