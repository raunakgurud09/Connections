import { SVGProps } from 'react';

const TimeIcon = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
  </svg>
);

export default TimeIcon;
