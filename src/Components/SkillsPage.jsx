import skillData from "../skills";
import Skill from "./Skill";

export default function MainHome() {
  const skillsList = skillData.map((group) => {
    return group.skills.map((skill) => {
      return <Skill key={skill.id} name={skill.name} icon={skill.icon} />;
    });
  });

  return (
    <section className="p-[5rem]">
      <div className="flex flex-col items-center mt-[4rem]">
        <h1 className="text-[40px]">Skills</h1>
        <p className="text-center mb-[3rem]">
          Below are the skills I've learned over the past couple years as a web
          developer
        </p>
      </div>
      <div className="max-w-[1200px] m-auto flex flex-col md:flex-row md:justify-center md:items-start items-center gap-[100px]">
        <div className="flex flex-col w-[140px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Frontend</h2>
          {skillsList[0]}
        </div>
        <div className="flex flex-col w-[140px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Backend</h2>
          {skillsList[1]}
        </div>
        <div className="flex flex-col w-[140px]">
          <h2 className="text-2xl font-bold mb-4 text-center">Other Tools</h2>
          {skillsList[2]}
        </div>
      </div>
    </section>
  );
}
