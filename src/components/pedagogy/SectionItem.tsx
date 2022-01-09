import { Avatar } from "@chakra-ui/avatar";
import { Heading, VStack, Text } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/react";
import { useI18n } from "next-rosetta";
import React from "react";
import { AegloLocale } from "../../i18n";
import { Section } from "../../pages/pedagogy";

interface SectionProps {
  section: Section;
}

export const SectionItem: React.FC<SectionProps> = ({ section }) => {
  const i18n = useI18n<AegloLocale>();
  const { t } = i18n;
  if (section.title === t("pedagogy.documents.title")) {
    return (
      <VStack maxWidth={{ base: "100%", md: "25%" }}>
        <Avatar icon={section.icon} backgroundColor="secondary.default" boxSize={24} />
        <Heading textAlign={"center"}>{section.title}</Heading>
        <Text textAlign={"justify"}>{section.description}</Text>
        <Link color="secondary.default">- Le règlement des études</Link>
        <Link color="secondary.default">- La déclaration des droits des étudiants et des étudiantes</Link>
        <Link color="secondary.default">- Règlements et documents officiels de la Faculté des Sciences et de Génie</Link>
        <Link color="secondary.default">- Règlements et documents officiels du département d’informatique et de génie logiciel</Link>
        <Link color="secondary.default">- Le bureau des droits étudiants</Link>
      </VStack>
    );
  }
  return (
    <VStack maxWidth={{ base: "100%", md: "25%" }}>
      <Avatar icon={section.icon} backgroundColor="secondary.default" boxSize={24} />
      <Heading textAlign={"center"}>{section.title}</Heading>
      <Text textAlign={"justify"}>{section.description}</Text>
    </VStack>
  );
};
