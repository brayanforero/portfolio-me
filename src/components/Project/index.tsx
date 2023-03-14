import { Work } from "@/types";
import "./index.css";

interface Props {
  item: Work;
}

function Project({ item }: Props) {
  const { title, cover, description, preview, repo, meta } = item;
  return (
    <article className="Project">
      <i className="bx bxs-star Project-star"></i>
      <picture className="Project-picture ">
        <img className="Project-img " src={cover} alt="Picture" />
      </picture>
      <section className="Project-content">
        <h3 className="Project-h3">{title}</h3>
        {meta ? (
          <p className="text-lg font-semibold">
            <i className="text-xl bx bxs-buildings"></i>
            {` ${meta.company}`}
          </p>
        ) : (
          <p>{description}</p>
        )}

        <div className="Project-buttons">
          {preview && (
            <a href={preview} target="_blank" className="button-primary">
              Preview
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" className="button ghost">
              Repo
            </a>
          )}
        </div>
      </section>
    </article>
  );
}

export default Project;
