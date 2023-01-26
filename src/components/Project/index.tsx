import "./index.css";

const img =
  "https://media.architecturaldigest.com/photos/57c7003fdc03716f7c8289dd/master/pass/IMG%20Worlds%20of%20Adventure%20-%201.jpg";
function Project() {
  return (
    <article className="Project">
      <picture className="Project-picture ">
        <img className="Project-img " src={img} alt="Picture" />
      </picture>
      <section className="Project-content">
        <h3 className="Project-h3">Lorem, ipsum dolor.</h3>
        <p>Lorem, ipsum.</p>
      </section>
    </article>
  );
}

export default Project;
