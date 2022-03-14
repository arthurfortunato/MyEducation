import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import * as GiIcons from 'react-icons/gi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Lógica P',
    path: '/programminglogic',
    icon: <GiIcons.GiLogicGateNxor/>,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Variáveis',
        path: '/programminglogic/variables',
        icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Condicionais',
        path: '/programminglogic/conditional',
        icon: <IoIcons.IoIosPaper />
      },
    ]
  }
] 