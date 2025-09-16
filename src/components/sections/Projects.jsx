import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const ecommerceSkills = [
    "React.js & Tailwind CSS",
    "ASP.NET Core Web API",
    "Entity Framework Core & SQL Server",
    "JWT Auth & Role-Based Access",
    "API Integration & Deployment",
  ];
  const schoolManagementSkills = [
    "React.js & Tailwind CSS",
    "ASP.NET Core Web API",
    "Entity Framework Core & SQL Server",
    "JWT Auth & Role-Based Access",
    "API Integration & Deployment",
  ];
  const taskManagementSkills = [
    "React.js & Tailwind CSS",
    "ASP.NET Core Web API",
    "Entity Framework Core & SQL Server",
    "JWT Auth & Role-Based Access",
    "API Integration & Deployment",
  ];
  const realTimeTicTacToeSkills = [
    "React.js & Tailwind CSS",
    "ASP.NET Core Web API",
    "SignalR / WebSockets",
    "Game logic & AI strategies",
    "Real-time state management",
  ];
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> e‑commerce platforms</h3>
              <p className="text-gray-400 mb-4">
                Developed a full‑stack e‑commerce platform with secure
                authentication, role‑based access, responsive UI, and seamless
                frontend‑backend integration for efficient product, order, and
                user management.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {ecommerceSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                school management system
              </h3>
              <p className="text-gray-400 mb-4">
                Developed a full‑stack school management system enabling secure
                student, teacher, and course management with responsive UI and
                role‑based access control.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {schoolManagementSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">task management</h3>
              <p className="text-gray-400 mb-4">
                Developed a full‑stack task management application with secure
                authentication, role‑based access, and a responsive UI for
                efficient task creation, tracking, and collaboration.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {taskManagementSkills.map((tech) => (
                  <span
                    key={tech}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Tic Tac Toe </h3>
              <p className="text-gray-400 mb-4">
                Developed a real‑time, multiplayer Tic Tac Toe game with dynamic
                board sizes, AI opponent logic, and live updates using
                WebSockets for instant gameplay synchronization.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {realTimeTicTacToeSkills.map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-blue-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center ">
                <a
                  href="#"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
