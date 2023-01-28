import { Work } from "@/types";
import "./index.css";

interface Props {
  item: Work;
}

function Project({ item }: Props) {
  const { title, cover, description, preview, repo } = item;
  return (
    <article className="Project">
      <i className="bx bxs-star Project-star"></i>
      <picture className="Project-picture ">
        <img className="Project-img " src={cover} alt="Picture" />
      </picture>
      <section className="Project-content">
        <h3 className="Project-h3">{title}</h3>
        <p>{description}</p>
        {preview && repo && (
          <div className="Project-buttons">
            <a href={preview} target="_blank" className="button-primary">
              Preview
            </a>
            <a href={repo} className="button ghost">
              Repo
            </a>
          </div>
        )}
      </section>
    </article>
  );
}

export default Project;
