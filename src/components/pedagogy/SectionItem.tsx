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
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://www.ulaval.ca/sites/default/files/notre-universite/direction-gouv/Documents%20officiels/R%C3%A8glements/Reglement_des_etudes.pdf" isExternal>- Le règlement des études</Link>
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://ombudsman.ulaval.ca/mieux-connaitre-lombudsman/declaration-des-droits-des-etudiants/" isExternal>- La déclaration des droits des étudiants et des étudiantes</Link>
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://www.ulaval.ca/notre-universite/direction-et-gouvernance/bureau-du-secretaire-general/documents-officiels" isExternal>- Règlements et documents officiels de l'Université Laval</Link>
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://www.fsg.ulaval.ca/espace-facultaire/etudiants-actuels/reglements-et-documents-officiels/" isExternal>- Règlements et documents officiels de la Faculté des Sciences et de Génie</Link>
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://www.ift.ulaval.ca/departement-et-professeurs/reglements-et-documents-officiels/" isExternal>- Règlements et documents officiels du département d’informatique et de génie logiciel</Link>
        <Link alignSelf={"start"} style={{ textDecoration: 'none'}} color="secondary.default" href="https://www.cadeul.com/bde/" isExternal>- Le bureau des droits étudiants</Link>
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
