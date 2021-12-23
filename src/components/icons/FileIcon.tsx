import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";

interface FileIconProps extends Omit<React.SVGAttributes<SVGElement>, keyof ChakraProps>, ChakraProps {}

export const FileIcon: React.FC<FileIconProps> = (props) => (
  <Icon viewBox="0 0 128 128" {...props}>
    <svg>
      <rect id="Path" width="128" height="128" fill="rgba(255,255,255,0)" />
      <path
        id="file-Bold_1_"
        d="M577.208,1990.667l-23.541-23.541a10.592,10.592,0,0,0-7.541-3.126H521.667A26.7,26.7,0,0,0,495,1990.667V2044a26.7,26.7,0,0,0,26.667,26.667h32A26.7,26.7,0,0,0,580.333,2044v-45.792A10.723,10.723,0,0,0,577.208,1990.667Zm-23.541-8.459,8.459,8.459h-.459a8.01,8.01,0,0,1-8-8Zm0,77.792h-32a16.02,16.02,0,0,1-16-16v-53.333a16.019,16.019,0,0,1,16-16H543v8a18.687,18.687,0,0,0,18.667,18.666h8V2044A16.02,16.02,0,0,1,553.667,2060Z"
        transform="translate(-473.667 -1953.333)"
        fill="#fff"
      />
    </svg>
  </Icon>
);
