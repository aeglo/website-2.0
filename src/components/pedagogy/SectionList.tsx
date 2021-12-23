import { Stack } from "@chakra-ui/layout";
import React from "react";
import { Section } from "../../pages/pedagogy";
import { SectionItem } from "./SectionItem";

interface SectionListProps {
  sections: Section[];
}

export const SectionList: React.FC<SectionListProps> = ({ sections }) => {
  return (
    <Stack direction={{ base: "column", md: "row" }} justify="center" spacing={16} paddingX={{ base: 8, md: 0 }}>
      {sections.map((section) => (
        <SectionItem section={section} />
      ))}
    </Stack>
  );
};
