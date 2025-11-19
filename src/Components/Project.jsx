export default function Project({ project }) {
  return (
    <div className="flex flex-col items-center md:items-start w-[400px] p-5 rounded-2xl shadow-lg h-full relative mb-5 duration-200 ease-in hover:translate-y-[-3px] hover:shadow-gray-400">
      <img
        className="rounded-xl mb-[1.5rem] h-[150px] w-full bg-center"
        src={project.img}
        alt={project.alt}
      />
      <h1 className="text-[24px] mb-3">{project.title}</h1>
      <p className="text-center text-[16px]/6 text-[#3d3d3d] mb-12 md:text-left">
        {project.description}
      </p>
      <a
        className="absolute bottom-[20px] md:left-[20px] right-[36%]"
        href={project.link}
        target="_blank"
      >
        See project here
      </a>
    </div>
  );
}
