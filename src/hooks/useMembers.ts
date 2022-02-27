import { Member } from "../pages/members";

interface RawMembers {
    asset: string,
    jobFR: string,
    jobEN: string,
    name: string,
    email: string,
    descriptionFR: string,
    descriptionEN: string
}

const useMembers = (locale: string): Member[] => {
  const members: RawMembers[] = require("../data/members.json");

  switch (locale) {
    case "fr":
      return members.map((member) => ({
        asset: member.asset,
        job: member.jobFR,
        name: member.name,
        email: member.email,
        description: member.descriptionFR
      }));

    case "en":
      return members.map((member) => ({
        asset: member.asset,
        job: member.jobEN,
        name: member.name,
        email: member.email,
        description: member.descriptionEN
      }));

    default:
      return [];
  }
};

export default useMembers;