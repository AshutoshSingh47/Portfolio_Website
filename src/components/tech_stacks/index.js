import { TechStack } from "../../data/techStack";

function TechStacks(props) {
  const { isDark } = props;
  return (
    <section className="h-auto w-full py-16" id="Skills">
      <div className="flex flex-col gap-5 justify-between w-full container">
        <h3 className="text-[var(--heading-color)] text-center text-[1.2rem] font-semibold">
          My Skills
        </h3>
        <ul className="grid grid-cols-2 grid-rows-subgrid gap-4 md:grid-cols-4 lg:grid-cols-5 w-3/4 mx-auto">
          {TechStack.map((tech) => (
            <li
              key={tech.name}
              className="group h-24 p-3 flex flex-col items-center justify-center gap-2 border rounded-lg cursor-pointer hover:bg-[hsla(210,6%,68%,.1)] transition-all duration-300 ease-in-out"
            >
              <img
                className="w-8 h-8 aspect-square transition-transform duration-300 ease-in-out group-hover:-translate-y-1"
                src={isDark ? tech.darkLogo : tech.logo}
                alt={tech.name}
              />
              <span className="dark:text-white text-[var(--detail-text-color)] text-sm font-medium">
                {tech.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TechStacks;
