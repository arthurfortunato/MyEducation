import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const Boot = `
"@SpringBootApplication",
"@EnableAutoConfiguration",
"@ConfigurationProperties",
`;

const Stereotype = `"@Component",
"@Repository",
"@Service",
"@Controller | @RestController",
`;
export const paragraphs = [
  <p>
    Para o Spring saber quais classes serão beans gerenciáveis por ele, é
    necessário indicar por meio das annotations.
  </p>,
  <p>As annotations mais utilizadas são:</p>,
  <p>
    <h4>Boot</h4>
    <StyledSyntaxHighlighter language="java" style={vscDarkPlus}>
      {Boot.trim()}
    </StyledSyntaxHighlighter>
  </p>,
  <p>
    <h4>Stereotype</h4>
    <StyledSyntaxHighlighter language="java" style={vscDarkPlus}>
      {Stereotype.trim()}
    </StyledSyntaxHighlighter>
  </p>,
];
