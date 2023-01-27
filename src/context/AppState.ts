import { Skill } from "@/types";

export type AppStateValue = {
  screenSize: number;
  skills: Skill[];
};

export const AppState: AppStateValue = {
  screenSize: window.innerWidth,
  skills: [
    {
      name: "JavaScript/Typescript",
      icon: "https://t1.daumcdn.net/cfile/tistory/99A36C355BD9538324",
    },
    {
      name: "React JS",
      icon: "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg",
    },
    {
      name: "Tailwind Css",
      icon: "https://raw.githubusercontent.com/praveenpuglia/tailwind-breeze/master/assets/logo.svg",
    },
    {
      name: "Vite JS",
      icon: "https://miro.medium.com/max/1400/1*In1BgimeWvX8_9NjKwoY2w.png",
    },
  ],
};
