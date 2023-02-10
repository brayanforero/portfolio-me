import { ProjectList } from "@/components";
import { LanguageContext } from "@/context";
import { useContext } from "react";
import "./index.css";

function FavoriteWorks() {
  const {
    config: { lang },
  } = useContext(LanguageContext);
  const {
    experience: { title, copy },
  } = lang;
  return (
    <section id="projects" className="FavoriteWorks">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        <h2 className="FavoriteWorks-h2">
          {title.slice(0, title.length / 2)}
          <span className="text-gradient">{title.slice(title.length / 2)}</span>
        </h2>
        <p className="FavoriteWorks-p">{copy}</p>
      </div>
      <ProjectList />
    </section>
  );
}

export default FavoriteWorks;
