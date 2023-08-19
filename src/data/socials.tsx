import { ReactNode } from 'react';
import {
  TwitterLogo,
  LinkedinLogo,
} from '@/components/Icons';

interface Social {
  id: string;
  name: string;
  url: string;
  icon: ReactNode;
}

const socials: Social[] = [
  {
    id: 'twitter',
    name: 'Twitter',
    url: 'https://twitter.com/fullcover_in',
    icon: <TwitterLogo />,
  },
  {
    id: 'linkedin',
    name: 'Linkedin',
    url: 'https://www.linkedin.com/company/fullcover/about/',
    icon: <LinkedinLogo />,
  },
];

export default socials;

// {
//   id: 'mail',
//   name: 'Mail',
//   url: 'raunakgurud2121@gmail.com',
//   icon: <MailLogo />,
// },
