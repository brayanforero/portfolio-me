import "./index.css";
import Projects from "./Projects";

function FavoriteWorks() {
  return (
    <section className="FavoriteWorks">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        <h2 className="FavoriteWorks-h2">
          Look my <span className="text-gradient">Projects.</span>
        </h2>
        <p className="FavoriteWorks-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
          alias blanditiis debitis facilis maxime sit at quasi commodi saepe!
        </p>
      </div>
      <Projects />
    </section>
  );
}

export default FavoriteWorks;
