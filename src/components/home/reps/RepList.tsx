import { Stack } from "@chakra-ui/layout";
import React from "react";
import ItemCarousel from "../../ItemCarousel";
import { Representative } from "../RepresentativesSection";
import { RepItem } from "./RepItem";

interface RepListProps {
  reps: Representative[];
}

export const RepList: React.FC<RepListProps> = ({ reps }) => {
  // TODO fix le layout, le ItemCarousel a pas l'air d'etre top pour cette section la
  return (
    <ItemCarousel gap={0}>
      {reps.map((rep, index) => (
        <RepItem key={index} rep={rep} />
      ))}
    </ItemCarousel>
  );
};
