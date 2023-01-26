import "./index.css";
import Projects from "./Projects";

function FavoriteWorks() {
  return (
    <div className="FavoriteWorks">
      <div className="flex flex-col gap-8 mb-8 lg:flex-row">
        <h2 className="FavoriteWorks-h2">
          Look my <span className="FavoriteWorks-span">Projects.</span>
        </h2>
        <p className="FavoriteWorks-p">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim magnam
          alias blanditiis debitis facilis maxime sit at quasi commodi saepe!
        </p>
      </div>
      <Projects />
    </div>
  );
}

export default FavoriteWorks;
