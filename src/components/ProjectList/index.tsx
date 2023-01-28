import useWorks from "@/hooks/useWorks";
import Project from "../Project";

function ProjectList() {
  const { loading, works } = useWorks();

  if (loading) return <p className="text-2xl text-gradient">Loading...</p>;
  return (
    <div className="grid grid-cols-1 gap-5 lg:gap-8 md:grid-cols-2 lg:grid-cols-4">
      {works.map((w) => (
        <Project item={w} />
      ))}
    </div>
  );
}

export default ProjectList;
