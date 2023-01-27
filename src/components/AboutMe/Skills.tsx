import { useRef } from "react";
import Skill from "./Skill";

function Skills() {
  const items = useRef([1, 2, 3, 4]);
  return (
    <div>
      {items.current.map((i) => (
        <Skill key={i} />
      ))}
    </div>
  );
}

export default Skills;
