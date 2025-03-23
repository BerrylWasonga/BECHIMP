const projects = [
  {
    title: "Correctional Management System 📜",
    image: "/img/crm.png",
    description: "A system for managing inmates, staff, and prison operations."
  },
  {
    title: "FruitKenya - Fresh & Organic Produce 🍏🥦",
    image: "/img/fk.png",
    description: "Fresh and organic produce, straight from the farm!"
  },
  {
    title: "League Registration and Attendance System ",
    image: "/img/lr.png",
    description: "League management app for youth registration, attendance, and team search. ⚽"
  },
  {
    title: "✨ Pixels & Code by Berrly Wasonga 💻🚀",
    image: "/img/lpp.png",
    description: "Front-end developer passionate about building interactive and user-friendly web apps 🚀. "
  },
  {
    title: "🌍 Women Who Build: Shaping the Future",
    image: "/img/iwd.png",
    description: "Honoring women in tech who are breaking barriers and shaping the future. 🚀💜 #SheCodes #IWD2025"
  }
];

export function Work() {
  return (
    <section id="work" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Featured Work</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}