import { Code2, Database, Server, Globe } from 'lucide-react';

const stacks = [
  {
    name: 'MERN Stack',
    description: 'Modern web development with MongoDB, Express.js, React, and Node.js',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    icon: <Code2 className="w-12 h-12 text-purple-600" />,
  },
  {
    name: 'MEAN Stack',
    description: 'Robust applications with MongoDB, Express.js, Angular, and Node.js',
    technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js'],
    icon: <Globe className="w-12 h-12 text-purple-600" />,
  },
];

const additionalSkills = [
  {
    category: 'Backend',
    icon: <Server className="w-12 h-12 text-purple-600" />,
    skills: ['RESTful APIs', 'GraphQL', 'Microservices', 'Authentication & Authorization'],
  },
  {
    category: 'Database',
    icon: <Database className="w-12 h-12 text-purple-600" />,
    skills: ['SQL', 'NoSQL', 'Database Design', 'Data Modeling'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Technical Skills
        </h2>

        {/* Tech Stacks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {stacks.map((stack, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {stack.icon}
                <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">
                  {stack.name}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {stack.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {stack.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {additionalSkills.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-2xl font-bold ml-4 text-gray-900 dark:text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}