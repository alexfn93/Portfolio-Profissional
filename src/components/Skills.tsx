import { HiAcademicCap, HiCodeBracketSquare } from "react-icons/hi2"

export default function Skills() {
  const educations = [
    {
      name: "Ciência da Computação | Descomplica Faculdade Digital",
    },
    {
      name: "Curso de Desenvolvimento Back End | Alura ONE",
    },
    {
      name: "Curso de Desenvolvimento Full Stack | Recode Pro",
    },
    {
      name: "Curso de Desenvolvimento Web Full Stack | Dev Samurai",
    },
    {
      name: "Curso de Desenvolvimento Mobile | Dev Samurai",
    },
    {
      name: "Curso de Power BI Avançado | Udemy",
    },
    {
      name: "Curso de Excel Avançado | Udemy",
    },
    {
      name: "Curso de Pacote Office | Escola Virtual Bradesco",
    },
    {
      name: "Curso de Java Completo + POO + Banco de Dados + Git | Udemy",
    },
    {
      name: "Curso de Google Data Analytics | Coursera",
    },
    {
      name: "Curso de Sistema SAP Completo | Udemy",
    },
    
  ]

  const skills = [
    {
      name: "HTML5/CSS3",
      icon: "images/html.svg",
      level: 80,
    },
    {
      name: "JavaScript",
      icon: "images/javascript.svg",
      level: 75,
    },
    {
      name: "TypeScript",
      icon: "images/typescript-svgrepo-com.svg",
      level: 50,
    },
    {
      name: "React.js",
      icon: "images/react.svg",
      level: 65,
    },
    {
      name: "Angular",
      icon: "images/angular-svgrepo-com.svg",
      level: 25,
    },
    {
      name: "Node.js",
      icon: "images/nodejs.svg",
      level: 55,
    },
    {
      name: "Java",
      icon: "images/java-svgrepo-com.svg",
      level: 85,
    },
    {
      name: "SQL",
      icon: "images/sql-database-sql-azure-svgrepo-com.svg",
      level: 75,
    },
    {
      name: "Power BI",
      icon: "images/icons8-power-bi.svg",
      level: 90,
    },
    {
      name: "Excel",
      icon: "images/icons8-microsoft-excel-2019.svg",
      level: 90,
    },

    {
      name: "Pacote Office",
      icon: "images/icons8-microsoft-office.svg",
      level: 75,
    },

    {
      name: "Sistema SAP",
      icon: "images/icons8-sap.svg",
      level: 65,
    },
  ]

  return (
    <section className="rounded-br-[80px] bg-gray-300 md:rounded-br-[180px]">
      <div className="container mx-auto max-w-4xl p-4 py-12">
        <div className="relative mb-4 p-4 text-center">
          <h2 className="relative z-50 mb-2 font-bold">
            <span className="mr-2 font-headline text-3xl text-gray-800">
              Educação &
            </span>
            <span className="font-handwriting text-4xl text-blue-800">
              Skills
            </span>
          </h2>
          <p className="relative text-sm text-gray-700">
            Full-Stack | Data Analytics | HTML5/CSS3 | React.js | Node.js | TypeScript
            | JavaScript | Java | SQL | Excel Avançado | Power BI Avançado | Pacote Office | Sistema SAP
          </p>
          <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
        </div>

        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiAcademicCap className="h-8 w-8 text-blue-600" />
              Educação
            </h3>

            {educations.map((education, index) => (
              <div
                key={`education-${index}`}
                className="mb-2 rounded-lg bg-white p-4 text-sm font-semibold text-gray-900"
              >
                {education.name}
              </div>
            ))}
          </div>
          <div className="basis-1/2">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-extrabold text-gray-700">
              <HiCodeBracketSquare className="h-8 w-8 text-blue-600" />
              Skills
            </h3>

            <div className="grid grid-cols-1 gap-4 font-semibold md:grid-cols-2">
              {skills.map((skill, index) => (
                <div
                  key={`skill-${index}`}
                  className="flex flex-row items-center gap-2 md:flex-col md:items-start"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-white p-2">
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="h-10 w-10 rounded"
                    />
                  </div>
                  <div className="w-full flex-grow">
                    <h4 className="font-headlin text-gray-900">{skill.name}</h4>
                    <div className="h-2.5 w-full rounded-full bg-white">
                      <div
                        className="h-2.5 rounded-full bg-blue-600"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
