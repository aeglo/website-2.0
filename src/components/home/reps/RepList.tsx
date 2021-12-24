import { Stack } from "@chakra-ui/layout";
import React from "react";
import ItemCarousel from "../../ItemCarousel";
import { Representative } from "../RepresentativesSecion";
import { RepItem } from "./RepItem";

interface RepListProps {
  reps: Representative[];
}

export const RepList: React.FC<RepListProps> = ({ reps }) => {
  return (
    <ItemCarousel gap={32}>
      {reps.map((rep, index) => (
        <RepItem key={index} rep={rep} />
      ))}
    </ItemCarousel>
  );
};
