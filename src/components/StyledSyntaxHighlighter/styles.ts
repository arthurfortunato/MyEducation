import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import styled from "styled-components";

export const StyledSyntaxHighlighter = styled(SyntaxHighlighter)`
    border-radius: 5px;
    font-size: 16px !important;

    min-width: 300px;

    @media (max-width: 955px) {
        transition: 1.8s all;
        width: 100%;
        code {
          font-size: 0.8rem !important;
        }
      }
    
      @media (max-width: 455px) {
        max-width: 355px !important;
        code {
          font-size: 0.65rem !important;
          
        }
      }
`;
