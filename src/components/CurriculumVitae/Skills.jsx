function Tools({ toolsArray }) {
  function createToolsList(array) {
    return (
      <ul className="ml-6 flex list-disc flex-wrap gap-1">
        {array.map((tool, index) => {
          return (
            <li
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="mx-5 capitalize"
            >
              {tool}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="flex flex-col">
      <h3 className="min-w-fit font-bold">Technologies</h3>
      {createToolsList(toolsArray)}
    </div>
  );
}

function Languages({ languagesArray }) {
  function createLangaugesList(array) {
    return (
      <ul className="ml-6 flex list-disc flex-wrap gap-1">
        {array.map((language, index) => {
          return (
            <li
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              className="mx-5 capitalize"
            >
              {language}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <div className="flex flex-col">
      <h3 className="min-w-fit font-bold">Programming Languages</h3>
      {createLangaugesList(languagesArray)}
    </div>
  );
}

function Header({ cvAccentColor }) {
  return (
    <h1
      className="border-black border-b-2 font-extrabold text-lg uppercase"
      style={{ color: cvAccentColor, borderColor: cvAccentColor }}
    >
      Skills
    </h1>
  );
}

function Skills({ cvAccentColor, skillsData }) {
  const { languages, tools } = skillsData;

  return (
    <div className="flex flex-col gap-3">
      <Header cvAccentColor={cvAccentColor} />
      <div className="flex flex-col gap-3">
        <Languages languagesArray={languages} />
        <Tools toolsArray={tools} />
      </div>
    </div>
  );
}

export { Skills };
