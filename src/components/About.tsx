import { Award, Briefcase, Users } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">About Me</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
            👋 Hi, I'm Berryl Wasonga, a passionate Front-End Developer dedicated to crafting sleek, responsive, and user-friendly web experiences. I specialize in React, JavaScript, and modern web technologies, turning creative ideas into functional applications.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <Briefcase className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <p className="font-semibold text-gray-900 dark:text-white">20+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Projects</p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <p className="font-semibold text-gray-900 dark:text-white">10+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Clients</p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto text-purple-600 mb-2" />
                <p className="font-semibold text-gray-900 dark:text-white">15+</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Awards</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800"
              alt="Berryl pic"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}