export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white p-8 max-w-4xl mx-auto">
      {/* Hero */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold mb-3">Brandon Sisco</h1>
        <p className="text-xl text-gray-400">
          Veteran Software Engineering Student building scalable backend systems and modular game architectures
        </p>
        <p className="mt-4 text-gray-300 max-w-2xl leading-7">
          I build scalable backend systems, clean APIs, and modular software architectures.
          My work ranges from Spring Boot academic projects to a turn-based RPG prototype
          developed in Godot with C#.
        </p>
      </section>

      {/* About */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 leading-7">
          I’m a Software Engineering student and Air Force veteran with experience in Java,
          C#, C++, and Spring Boot. I enjoy building software that is both technically sound
          and meaningful to use, with a strong interest in backend development, software
          architecture, and game systems.
        </p>
      </section>

      {/* Projects */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-6">Projects</h2>

        <div className="space-y-5">
          <div className="p-5 border border-gray-700 rounded-lg hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">Course Management System</h3>
            <p className="text-gray-400 leading-7">
              Built with Spring Boot, implementing REST APIs, authentication, and DTO-based
              architecture to manage academic records while emphasizing maintainability and
              clean layering.
            </p>
          </div>

          <div className="p-5 border border-gray-700 rounded-lg hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">2D RPG Prototype</h3>
            <p className="text-gray-400 leading-7">
              Developed a modular turn-based RPG in Godot using C#, including combat flow,
              stamina systems, dungeon progression, inventory, and crafting mechanics.
            </p>
            <a
              href="https://github.com/Brhando/WhileIterating_Game"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-2 inline-block hover:underline"
            >
              View Project →
            </a>
          </div>

          <div className="p-5 border border-gray-700 rounded-lg hover:border-blue-400 transition">
            <h3 className="text-2xl font-semibold mb-2">Pond Relationship App Backend</h3>
            <p className="text-gray-400 leading-7">
              Building a Spring Boot backend focused on user accounts, preferences, and
              interaction data using layered architecture with controllers, services,
              and repositories.
            </p>
            <a
              href="https://github.com/Brhando/pond_backend"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 mt-2 inline-block hover:underline"
            >
              View Project →
            </a>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-4">Skills</h2>
        <p className="text-gray-300 leading-7">
          Java, C#, C++, Python, Spring Boot, REST APIs, JPA/Hibernate, Git, GitHub,
          Software Architecture, Object-Oriented Design, Godot
        </p>
      </section>

      {/* Contact */}
      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>

        <div className="space-y-2 text-gray-300">
          <p>
            Email:
            <a
              href="mailto:brandonsisco21@gmail.com"
              className="text-blue-400 ml-2 hover:underline"
            >
              brandonsisco21@gmail.com
            </a>
          </p>

          <p>
            GitHub:
            <a
              href="https://github.com/Brhando"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2 hover:underline"
            >
              github.com/Brhando
            </a>
          </p>

          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/brandon-sisco-2a1816328"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 ml-2 hover:underline"
            >
              linkedin.com/in/brandon-sisco-2a1816328
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}