import { Partner } from "../pages/partners";

interface PartnerDto {
  name: string;
  asset: string;
  website: string;
  linkedin: string;
  descriptionFR: string;
  descriptionEN: string;
  plan: "Platinum" | "Gold" | "Silver" | "Bronze";
}

export const usePartners = (): any => {
  const partners: PartnerDto[] = require("../data/partners.json");

  const allPartners: Partner[] = partners.map((partner) => ({
    name: partner.name,
    asset: partner.asset,
    website: partner.website,
    linkedin: partner.linkedin,
    descriptionFR: partner.descriptionFR,
    descriptionEN: partner.descriptionEN,
    plan: partner.plan,
  }));

  const platinumPartners: Partner[] = partners
    .filter((partner) => partner.plan === "Platinum")
    .map((partner) => ({
      name: partner.name,
      asset: partner.asset,
      website: partner.website,
      linkedin: partner.linkedin,
      descriptionFR: partner.descriptionFR,
      descriptionEN: partner.descriptionEN,
      plan: "Platinum",
    }));

  const goldPartners: Partner[] = partners
    .filter((partner) => partner.plan === "Gold")
    .map((partner) => ({
      name: partner.name,
      asset: partner.asset,
      website: partner.website,
      linkedin: partner.linkedin,
      descriptionFR: partner.descriptionFR,
      descriptionEN: partner.descriptionEN,
      plan: "Gold",
    }));

  const silverPartners: Partner[] = partners
    .filter((partner) => partner.plan === "Silver")
    .map((partner) => ({
      name: partner.name,
      asset: partner.asset,
      website: partner.website,
      linkedin: partner.linkedin,
      descriptionFR: partner.descriptionFR,
      descriptionEN: partner.descriptionEN,
      plan: "Silver",
    }));

  const bronzePartners: Partner[] = partners
    .filter((partner) => partner.plan === "Bronze")
    .map((partner) => ({
      name: partner.name,
      asset: partner.asset,
      website: partner.website,
      linkedin: partner.linkedin,
      descriptionFR: partner.descriptionFR,
      descriptionEN: partner.descriptionEN,
      plan: "Bronze",
    }));

  return { allPartners, platinumPartners, goldPartners, silverPartners, bronzePartners };
};
