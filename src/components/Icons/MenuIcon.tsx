import { SVGProps } from 'react';

const MenuIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    {...props}
  >
    <path
      fill='currentColor'
      d='M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z'
    />
  </svg>
);

export default MenuIcon;
