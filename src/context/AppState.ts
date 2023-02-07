import { Skill } from "@/types";

export type AppStateValue = {
  screenSize: number;
  skills: Skill[];
};

export const AppState: AppStateValue = {
  screenSize: window.innerWidth,
  skills: [
    {
      name: "Typescript",
      icon: "bx bxl-typescript",
    },
    {
      name: "React",
      icon: "bx bxl-react",
    },
    {
      name: "Angular",
      icon: "bx bxl-angular",
    },
    {
      name: "Redux",
      icon: "bx bxl-redux",
    },
    {
      name: "Tailwind",
      icon: "bx bxl-tailwind-css",
    },
  ],
};
