import { AppContext } from "@/context";
import { Skill as SkillValue } from "@/types";
import { useContext } from "react";
import "./index.css";

function Skill({ name = "Lorem Ipsum", icon }: SkillValue) {
  const {
    state: { screenSize },
  } = useContext(AppContext);
  return (
    <article className="Skill">
      <h2 className="Skill-name">{name}</h2>
      <i className="bx bx-up-arrow-alt Skill-arrow"></i>
      {screenSize >= 768 && <img className="Skill-img" src={icon} alt={name} />}
    </article>
  );
}

export default Skill;
