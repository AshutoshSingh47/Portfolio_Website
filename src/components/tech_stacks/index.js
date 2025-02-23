import { TechStack } from "../../data/techStack";

function TechStacks() {
  console.log(TechStack);
  return (
    <section className="h-auto w-full py-16">
      <div className="flex flex-col gap-4 justify-between w-full container">
        <h3 className="text-[var(--heading-color)] text-[1.2rem] font-semibold uppercase">
          My Skills
        </h3>
        <ul className="grid grid-cols-2 grid-rows-subgrid gap-4 sm:grid-cols-4 lg:grid-cols-5 ">
          {TechStack.map((tech) => (
            <li
              className="h-24 p-3 flex flex-col items-center justify-center gap-2 border rounded-lg cursor-pointer hover:bg-[hsla(210,6%,68%,.1)]"
              key={tech.name}
            >
              <img className="w-8 h-8 aspect-square" src={tech.logo}></img>
              <span className="text-[var(--tech-text-color)]">{tech.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStacks;
