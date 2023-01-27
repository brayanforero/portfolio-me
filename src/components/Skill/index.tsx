import { AppContext } from "@/context";
import { useContext } from "react";
import "./index.css";
const cover =
  "https://www.devopsschool.com/blog/wp-content/uploads/2022/03/reactjs-benefits.jpg";
function Skill({ name = "Lorem Ipsum" }: { name?: string }) {
  const {
    state: { screenSize },
  } = useContext(AppContext);
  return (
    <article className="Skill">
      <h2 className="Skill-name">{name}</h2>
      <i className="bx bx-up-arrow-alt Skill-arrow"></i>
      {screenSize >= 768 && (
        <img className="Skill-img" src={cover} alt={name} />
      )}
    </article>
  );
}

export default Skill;
