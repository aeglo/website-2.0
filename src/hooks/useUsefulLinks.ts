import { useState } from "react";
import { UsefulLinkTab } from "../components/home/UsefulLinksSection";
import { Status } from "./Status";

interface LinkDto {
  nameFR: string;
  nameEN: string;
  href: string;
}

export interface LinkSectionDto {
  titleEN: string;
  titleFR: string;
  links: LinkDto[];
}

export const useUsefulLinks = () => {
  const [state, setState] = useState<Status>("idle");

  const getUsefulLinks = (locale: string): UsefulLinkTab[] => {
    const linkSections: Array<LinkSectionDto> = require("../data/usefulLinks.json");

    switch (locale) {
      case "fr":
        return linkSections.map((section) => ({
          title: section.titleFR,
          links: section.links.map((link) => ({ name: link.nameFR, href: link.href }))
        }));

      case "en":
        return linkSections.map((section) => ({
          title: section.titleEN,
          links: section.links.map((link) => ({ name: link.nameEN, href: link.href }))
        }));

      default:
        return [];
    }
  };

  return { state, getUsefulLinks };
};
