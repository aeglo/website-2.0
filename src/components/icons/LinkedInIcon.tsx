import { ChakraProps, Icon } from "@chakra-ui/react";
import React from "react";

interface LinkedInIconProps extends Omit<React.SVGAttributes<SVGElement>, keyof ChakraProps>, ChakraProps {}

export const LinkedInIcon: React.FC<LinkedInIconProps> = (props) => (
  <Icon viewBox="0 0 256 256" {...props}>
    <svg>
      <path
        d="M34.703,0.183C15.582,0.183,0.014,15.748,0,34.884C0,54.02,15.568,69.588,34.703,69.588
		c19.128,0,34.688-15.568,34.688-34.704C69.391,15.75,53.83,0.183,34.703,0.183z"
        fill={props.color as string}
      />
      <path
        d="M60.748,83.531H8.654c-2.478,0-4.488,2.009-4.488,4.489v167.675c0,2.479,2.01,4.488,4.488,4.488h52.093
		c2.479,0,4.489-2.01,4.489-4.488V88.02C65.237,85.539,63.227,83.531,60.748,83.531z"
        fill={props.color as string}
      />
      <path
        d="M193.924,81.557c-19.064,0-35.817,5.805-46.04,15.271V88.02c0-2.48-2.01-4.489-4.489-4.489H93.424
		c-2.479,0-4.489,2.009-4.489,4.489v167.675c0,2.479,2.01,4.488,4.489,4.488h52.044c2.479,0,4.489-2.01,4.489-4.488v-82.957
		c0-23.802,4.378-38.555,26.227-38.555c21.526,0.026,23.137,15.846,23.137,39.977v81.535c0,2.479,2.01,4.488,4.49,4.488h52.068
		c2.478,0,4.488-2.01,4.488-4.488v-91.977C260.366,125.465,252.814,81.557,193.924,81.557z"
        fill={props.color as string}
      />
    </svg>
  </Icon>
);
