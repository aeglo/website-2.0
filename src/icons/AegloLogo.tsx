import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

interface AegloLogoProps extends IconProps {}

export default function AegloLogo({ color, ...props }: AegloLogoProps) {
  return (
    <Icon viewBox="0 0 512 126" color={color} {...props}>
      <polygon points="252,33.5 252,42.5 243,42.5 243,60.5 243,78.5 243,96.5 252,96.5 252,105.5 261,105.5 297,105.5 297,87.5 261,87.5 261,78.5 297,78.5 297,60.5 261,60.5 261,51.5 297,51.5 297,33.5 261,33.5" fill={color?.toString()} />
      <path d="M486,42.5v-9h-9h-18h-9v9h-9v9v36v9h9v9h9h18h9v-9h9v-9v-36v-9H486z M477,87.5h-18v-36h18V87.5z" fill={color?.toString()} />
      <polygon points="360,33.5 333,33.5 324,33.5 324,42.5 315,42.5 315,51.5 315,87.5 315,96.5 324,96.5 324,105.5 333,105.5 360,105.5 360,96.5 369,96.5 369,87.5 369,78.5 369,60.5 360,60.5 351,60.5 342,60.5 342,78.5 351,78.5 351,87.5 333,87.5 333,51.5 369,51.5 369,42.5 360,42.5" fill={color?.toString()} />
      <polygon points="405,33.5 396,33.5 387,33.5 387,42.5 387,87.5 387,96.5 387,105.5 396,105.5 405,105.5 423,105.5 423,87.5 405,87.5" fill={color?.toString()} />
      <path d="M216,33.5h-9v-9h-18v9h-9v9h-9v63h18v-27h18v27h18v-63h-9V33.5z M207,60.5h-18v-18h18V60.5z" fill={color?.toString()} />
      <path d="M108.2,0H21.8C9.8,0,0,9.8,0,21.8v86.3c0,12,9.8,21.8,21.8,21.8h86.3c12,0,21.8-9.8,21.8-21.8V21.8 C130,9.8,120.2,0,108.2,0z M47.9,60.3h-5.2v5.2h-5.2v5.2h-5.2v5.2h-5.2H22v-5.2h5.2v-5.2h5.2v-5.2h5.2v-5.2h5.2v-5.2h-5.2v-5.2 h-5.2v-5.2h-5.2v-5.2H22v-5.2h5.2h5.2v5.2h5.2v5.2h5.2v5.2h5.2v5.2h5.2v5.2h-5.2V60.3z M84.2,81H53.1V70.6h31.1V81z" fill={color?.toString()} />
    </Icon>
  );
}
