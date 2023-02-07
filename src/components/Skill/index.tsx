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
      <div className="Skill-img">
        <i className={icon}></i>
      </div>
    </article>
  );
}

export default Skill;
