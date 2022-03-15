import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
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
        title: "Classe e Construtor",
        path: "/poo/classandconstructor",
        icon: <IoIcons.IoIosPaper />,
      },
    ],
  },
];
