import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as GiIcons from "react-icons/gi";
import * as IoIcons from "react-icons/io";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import * as DiIcons from "react-icons/di";

export const SidebarData = [
  {
    //Home
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Conceitos",
        path: "/concepts",
        icon: <BsIcons.BsGearFill />,
      },
    ],
  },
  {
    //ProgrammingLogic
    title: "Lógica de Programação",
    path: "/programminglogic",
    icon: <GiIcons.GiLogicGateNxor />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: "Variáveis",
        path: "/programminglogic/variables",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Condicionais",
        path: "/programminglogic/conditional",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Laços",
        path: "/programminglogic/loops",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Vetores",
        path: "/programminglogic/vectors",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Funções",
        path: "/programminglogic/functions",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Funções de Alta Ordem",
        path: "/programminglogic/higherorderfunctions",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Map",
        path: "/programminglogic/map",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Filter",
        path: "/programminglogic/filter",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Reduce",
        path: "/programminglogic/reduce",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    //POO
    title: "POO",
    path: "/poo",
    icon: <MdIcons.MdOutlineEmojiObjects />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Introdução",
        path: "/poo/introduction",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Classe",
        path: "/poo/class",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Polimorfismo",
        path: "/poo/polymorphism",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Herança",
        path: "/poo/inheritance",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Encapsulamento",
        path: "/poo/encapsulation",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    //Node
    title: "Node.Js",
    path: "/node",
    icon: <FaIcons.FaNode />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Map",
        path: "/node/map",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Introdução",
        path: "/node/introduction",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Express",
        path: "/node/express",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "ORM",
        path: "/node/orm",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Microservice",
        path: "/node/microservice",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    //Docker
    title: "Docker",
    path: "/docker",
    icon: <FaIcons.FaDocker />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Introduction",
        path: "/docker/introduction",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Advantages",
        path: "/docker/advantagesanddisadvantages",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Architecture",
        path: "/docker/architecture",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    //React
    title: "React.Js",
    path: "/react",
    icon: <FaIcons.FaReact />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Introdução",
        path: "/react/introduction",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Hooks",
        path: "/react/hooks",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
  {
    //Java
    title: "Java",
    path: "/java",
    icon: <DiIcons.DiJava />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: "Spring Framework",
        path: "/java/spring",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "JVM",
        path: "/java/jvm",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "JDK",
        path: "/java/jdk",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "JDBC",
        path: "/java/jdbc",
        icon: <IoIcons.IoIosPaper />,
      },
      {
        title: "Maven",
        path: "/java/maven",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
