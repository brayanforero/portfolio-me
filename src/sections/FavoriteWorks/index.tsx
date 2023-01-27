import { ProjectList } from "@/components";
import "./index.css";

function FavoriteWorks() {
  return (
    <section className="FavoriteWorks">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        <h2 className="FavoriteWorks-h2">
          Proj<span className="text-gradient">ects.</span>
        </h2>
        <p className="FavoriteWorks-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
          alias blanditiis debitis facilis maxime sit at quasi commodi saepe!
        </p>
      </div>
      <ProjectList />
    </section>
  );
}

export default FavoriteWorks;
