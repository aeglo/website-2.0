import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

interface UserIconProps extends IconProps {}

export default function UserIcon({ ...props }: UserIconProps) {
  return (
    <Icon viewBox="0 0 128 128" {...props}>
      <svg>
        <rect id="Path" width="128" height="128" fill="rgba(255,255,255,0)" />
        <path
          id="user-Bold_1_"
          d="M729.667,2022.667a29.333,29.333,0,1,0-29.333-29.334A29.368,29.368,0,0,0,729.667,2022.667Zm0-48A18.667,18.667,0,1,1,711,1993.333,18.687,18.687,0,0,1,729.667,1974.667Zm42.667,74.49v5.393a21.457,21.457,0,0,1-5.467,14.341,5.335,5.335,0,0,1-7.952-7.114,10.826,10.826,0,0,0,2.747-7.227v-5.393a16.053,16.053,0,0,0-12.016-15.69,4.081,4.081,0,0,0-2.992.373,35.009,35.009,0,0,1-33.926.032,4.1,4.1,0,0,0-3.034-.406,16.045,16.045,0,0,0-12.027,15.691v5.392a10.813,10.813,0,0,0,2.747,7.227,5.333,5.333,0,0,1-7.947,7.114A21.457,21.457,0,0,1,687,2054.549v-5.392a26.707,26.707,0,0,1,20.091-26.037,14.784,14.784,0,0,1,10.875,1.455,24.31,24.31,0,0,0,23.456-.031,14.726,14.726,0,0,1,10.832-1.43A26.717,26.717,0,0,1,772.333,2049.157Z"
          transform="translate(-665.667 -1953.333)"
          fill="#fff"
        />
      </svg>
    </Icon>
  );
}
