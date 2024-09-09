import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { StyledSyntaxHighlighter } from "../../../components/StyledSyntaxHighlighter/styles";

const Boot = `
@SpringBootApplication
@EnableAutoConfiguration
@ConfigurationProperties
`;

const Stereotype = `@Component
@Repository
@Service
@Controller | @RestController
`;

const Web = `@RequestMapping
@PostMapping
@GetMapping
@PutMapping
@DeleteMapping
@RequestBody
@PathVariable
@RequestParam
@CrossOrigin
`;

const CoreBeans = `@Autowired
@Qualifier
@Value`;

const CoreContext = `@Configuration
@ComponentScan
@Bean
@Lazy
@Primary
@Scope
@PropertySource
@PropertySources
@Profile
`;

export const paragraphs = [
  <p>
    Para o <strong>Spring</strong> saber quais classes serão beans gerenciáveis
    por ele, é necessário indicar por meio das <strong>annotations</strong>.
  </p>,
  <p>
    As <strong>annotations</strong> mais utilizadas são:
  </p>,
  <p>
    <h4>Boot</h4>
    <StyledSyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {Boot.trim()}
    </StyledSyntaxHighlighter>
  </p>,
  <p>
    <h4>Stereotype</h4>
    <StyledSyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {Stereotype.trim()}
    </StyledSyntaxHighlighter>
  </p>,
  <p>
    <h4>Web</h4>
    <StyledSyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {Web.trim()}
    </StyledSyntaxHighlighter>
  </p>,
  <p>
    <h4>Core Beans</h4>
    <StyledSyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {CoreBeans.trim()}
    </StyledSyntaxHighlighter>
  </p>,
  <p>
    <h4>Core Context</h4>
    <StyledSyntaxHighlighter language="javascript" style={vscDarkPlus}>
      {CoreContext.trim()}
    </StyledSyntaxHighlighter>
  </p>,
];
