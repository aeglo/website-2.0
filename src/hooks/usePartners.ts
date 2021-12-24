import { Partner } from "../components/home/PartnersSection";

interface PartnerDto {
  name: string;
  imageUrl: string;
  websiteUrl: string;
}

export const usePartners = (): Partner[] => {
  const partners: PartnerDto[] = require("../data/partners.json");

  return partners.map((partner) => ({
    name: partner.name,
    imageUrl: partner.imageUrl,
    websiteUrl: partner.websiteUrl
  }));
};
