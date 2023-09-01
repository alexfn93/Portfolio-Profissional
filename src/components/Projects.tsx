import { HiArrowTopRightOnSquare } from "react-icons/hi2"

export default function Projects() {
  const projects = [
    {
      title: "Gerador de Senha",
      description: "Este é um projeto simples que gera uma senha forte e aleatória para cada conta online que você tenha.",
      image:
        "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1605&q=80",
      link: "https://alexfn93.github.io/Gerador_de_Senha/",
      colSpan: "col-span-1",
    },
    {
      title: "Relatório de Clientes e Funcionários em Power BI",
      description: "Painéis interativos e relatórios personalizados para fornecer informações claras e relevantes aos stakeholders. Utilizei gráficos, tabelas dinâmicas e outros recursos visuais do Power BI para facilitar a compreensão dos dados e destacar os principais indicadores de desempenho(KPI´s).",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYnNpdGVzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://app.powerbi.com/reportEmbed?reportId=d2cecf8f-b726-43ee-8e8b-d3880838e683&autoAuth=true&ctid=58674b1f-122e-4f0b-989f-a1e1d8191402",
      colSpan: "col-span-1 md:col-span-2",
    },
    {
      title: "Site de Reserva de Hotel",
      description: "Exemplo básico de um site de reserva de hotel. O objetivo deste projeto é fornecer um ponto de partida simples para a criação de um site de reserva de hotel.",
      image:
        "https://media.istockphoto.com/id/1305995602/photo/responsive-floating-responsive-design.jpg?b=1&s=170667a&w=0&k=20&c=uFqBz27v_B0UxcslnvZxd9c0D9eJAef7veRZf6b-v-A=",
      link: "https://alexfn93.github.io/Reserva-Hotel-Rota-Nomade/index.html",
      colSpan: "col-span-1",
    },
    {
      title: "Admin Dashboard",
      description: "Painel de Admin Dashboard permitirá aos usuários acompanhar os principais indicadores da empresa, analisar tendências, identificar problemas, oportunidades e gerar relatórios dinâmicos.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://painel-de-dashboard.vercel.app/",
      colSpan: "col-span-1",
    },
    {
      title: "Jogo de Ping-Pong",
      description: "Jogo de Ping-Pong permite que o usuário jogue contra o computador. O jogo possui gráficos simples, sistema de pontuação e níveis de dificuldade.",
      image:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      link: "https://jogo-ping-pong-gamma.vercel.app/",
      colSpan: "col-span-1",
    },
  ]

  return (
    <>
      <section className="rounded-tl-[80px] bg-gradient-to-tr from-black to-gray-900 text-white md:rounded-tl-[180px]">
        <div className="container mx-auto max-w-4xl p-4 py-12">
          <div className="relative p-4 text-center">
            <h2 className="relative z-50 mb-2 text-white">
              <span className="mr-2 font-headline text-3xl font-semibold">
                Projetos &
              </span>
              <span className="font-handwriting text-4xl">Portfólio</span>
            </h2>
            <p className="relative text-sm text-gray-400">
              Alguns dos projetos pessoais e que já realizei ao longo da minha
              trajetória como programador front-end.
            </p>
            <div className="absolute left-1/2 top-3 z-0 h-10 w-10 rounded-lg bg-blue-400/10" />
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative h-52 cursor-default rounded-lg ${project.colSpan} bg-cover bg-center`}
                style={{ backgroundImage: `url('${project.image}')` }}
              >
                <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center rounded-lg bg-blue-600 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h4 className="font-headline text-lg font-semibold">
                    {project.title}
                  </h4>
                  <p className=" mb-4 text-sm">{project.description}</p>
                  <a href={project.link} target="_blank">
                    <HiArrowTopRightOnSquare className="h-6 w-6" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="absolute right-0 -mt-[6px] h-3 w-48 rounded-l-full bg-gradient-to-r from-gray-700 to-gray-600 md:w-96" />
    </>
  )
}
