import { Representative } from "../components/home/RepresentativesSection";

interface ReprensentativeDto {
  name: string;
  roleFR: string;
  roleEN: string;
  pictureUrl: string;
  email: string;
}

export const useReps = (locale: string): Representative[] => {
  // TODO Hoster les photos dans le webserver de l'autre site au lieu ici pour y acceder par https://aeglo.ift.ulaval.ca/files/photo.png
  const reps: ReprensentativeDto[] = require("../data/reps.json");

  switch (locale) {
    case "fr":
      return reps.map((rep) => ({ name: rep.name, role: rep.roleFR, pictureUrl: rep.pictureUrl, email: rep.email }));

    case "en":
      return reps.map((rep) => ({ name: rep.name, role: rep.roleEN, pictureUrl: rep.pictureUrl, email: rep.email }));
  }
};
