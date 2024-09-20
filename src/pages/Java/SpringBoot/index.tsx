import { paragraphs } from "./paragraphs";
import { ContentPage } from "../../../components/ContentPage";

export const SpringBoot = () => {
  return (
    <ContentPage
      title="Spring Boot"
      paragraphs={paragraphs}
      nextRoute="/java/springboot/jpa"
      backRoute="/java"
    />
  );
};
