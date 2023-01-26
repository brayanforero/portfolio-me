import Project from "../Project";

function Projects() {
  return (
    <div className="grid justify-center grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
      <Project />
      <Project />
    </div>
  );
}

export default Projects;
