import { StyledSyntaxHighlighter } from "./styles";

export const PreCode = (props: any) => {
  return (
    <StyledSyntaxHighlighter
      language="java" 
      {...props}
    >
      {props.children}
    </StyledSyntaxHighlighter>
  );
};
