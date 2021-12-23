import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";

interface UsersThreeIconProps extends Omit<React.SVGAttributes<SVGElement>, keyof ChakraProps>, ChakraProps {}

export const UsersThreeIcon: React.FC<UsersThreeIconProps> = (props) => (
  <Icon viewBox="0 0 128 128" {...props}>
    <svg>
      <rect id="Path" width="128" height="128" fill="rgba(255,255,255,0)" />
      <path
        id="users-three-Bold_1_"
        d="M834.333,2019.333a26.667,26.667,0,1,0-26.666-26.666A26.7,26.7,0,0,0,834.333,2019.333Zm0-42.666a16,16,0,1,1-16,16A16.019,16.019,0,0,1,834.333,1976.667Zm37.334,66.133v4.619a19.154,19.154,0,0,1-4.88,12.8,5.333,5.333,0,1,1-7.946-7.114,8.5,8.5,0,0,0,2.16-5.686V2042.8a13,13,0,0,0-9.722-12.715,2.745,2.745,0,0,0-1.995.24,30.728,30.728,0,0,1-29.835.037,2.726,2.726,0,0,0-2.043-.277,13,13,0,0,0-9.738,12.715v4.619a8.511,8.511,0,0,0,2.16,5.686,5.333,5.333,0,1,1-7.947,7.114,19.164,19.164,0,0,1-4.88-12.8V2042.8a23.638,23.638,0,0,1,17.8-23.056,13.336,13.336,0,0,1,9.888,1.333,20.067,20.067,0,0,0,19.355-.037,13.484,13.484,0,0,1,9.845-1.3A23.646,23.646,0,0,1,871.667,2042.8Zm-10.358-72.331a5.329,5.329,0,0,1,6.8-3.248,21.331,21.331,0,0,1,7.114,36.011,5.333,5.333,0,0,1-7.114-7.947,10.673,10.673,0,0,0-3.552-18.016A5.319,5.319,0,0,1,861.309,1970.469Zm26.358,58.645v3.851a5.333,5.333,0,0,1-10.667,0v-3.851a9.946,9.946,0,0,0-7.434-9.733,5.333,5.333,0,0,1,2.592-10.347A20.6,20.6,0,0,1,887.667,2029.114Zm-94.224-23.509a21.331,21.331,0,0,1,7.115-36.011,5.329,5.329,0,0,1,3.552,10.048,10.673,10.673,0,0,0-3.552,18.016,5.333,5.333,0,1,1-7.115,7.947Zm5.664,16.143a9.953,9.953,0,0,0-7.44,9.733v3.851a5.333,5.333,0,1,1-10.667,0v-3.851a20.6,20.6,0,0,1,15.5-20.08,5.334,5.334,0,0,1,2.6,10.346Z"
        transform="translate(-770.333 -1944.666)"
        fill="#fff"
      />
    </svg>
  </Icon>
);