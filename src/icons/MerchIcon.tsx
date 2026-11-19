import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

interface MerchIconProps extends IconProps {
}

export default function MerchIcon({ color = '#4F46E5', ...props }: MerchIconProps) {
  return (
    <Icon viewBox="52 52 408 408" {...props}>
      <svg>
        <path
          d="M176 64 L64 128 L100 208 L144 188 L144 440 Q144 448 152 448 L360 448 Q368 448 368 440 L368 188 L412 208 L448 128 L336 64 Q320 112 256 112 Q192 112 176 64 Z"
          fill={color as string}
        />
        <path
          d="M176 64 Q192 112 256 112 Q320 112 336 64"
          fill="none"
          stroke="#000"
          strokeOpacity={0.35}
          strokeWidth={12}
          strokeLinecap="round"
        />
        <path
          d="M144 188 L120 140 M368 188 L392 140 M150 424 H362"
          fill="none"
          stroke="#000"
          strokeOpacity={0.25}
          strokeWidth={8}
          strokeLinecap="round"
        />
      </svg>
    </Icon>
  );
}
