import Project from "./Project";
import projectsData from "../projects";

export default function Skills() {
  const projectList = projectsData.map((project) => {
    return <Project key={project.id} project={project} />;
  });

  return (
    <section id="projects">
      <div className="flex flex-col items-center mt-[4rem]">
        <h1 className="text-[40px]">Projects</h1>
        <p className="text-center mb-[3rem]">Here are a few of my projects</p>
      </div>
      <div className="max-w-[1300px] m-auto lg:grid lg:grid-cols-3 grid grid-cols-1 justify-center place-items-center gap-10">
        {projectList}
      </div>
      <br />
      <br />
    </section>
  );
}
