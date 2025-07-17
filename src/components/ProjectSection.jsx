import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title:
      "Recognition of Handwritten Digits in Universal and Regional Languages",
    description:
      "Developed a handwriting recognition system using Convolutional Neural Networks (CNN) to accurately identify digits in both English (universal) and Hindi (regional) scripts. Utilized Python for preprocessing and model training in Jupyter Notebook and deployed the system through VS Code for real-time predictions.",
    image: "/projects/Major2.png",
    tags: [
      "Python",
      "Convolutional",
      "Neural Networks (CNN)",
      "OCR",
      "Visual Studio Code",
      "Google Collab",
    ],
    demoUrl: "non",
    githubUrl: "https://github.com/ferozzshaikk/major_project.git",
  },
  {
    id: 2,
    title: "To-Do List Application with Task Management",
    description:
      "Built a lightweight and responsive To-Do List app using HTML, CSS, and JavaScript to manage daily tasks efficiently. The app allows users to add, delete, and mark tasks as complete in a clean and intuitive interface. Data persistence is managed using the browser’s local storage, enabling tasks to remain even after page reloads.",
    image: "/projects/Todo-list/images/image_logo.png",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "DOM Manipulation",
      "Local Storage",
      "Responsive Design",
    ],
    demoUrl: "/projects/Todo-list/index.html",
    githubUrl: "https://github.com/ferozzshaikk/Todo-list",
  },
  {
    id: 3,
    title: "Automatic Rain Shield Cover using Arduino UNO",
    description:
      "Designed and built an automatic cloth protection system that detects rain and activates a motorized cover using Arduino UNO, rain sensors, and relay modules. Aimed at preventing clothes from getting wet when drying outdoors during unexpected rainfall.",
    image: "/projects/RainProject.jpg",
    tags: [
      "Python Programming",
      "Microcontroller Programming(Arduino)",
      "Sensor Integration",
      " DC Motors",
      "Rotary Knob Switch",
    ],
    demoUrl: "non",
    githubUrl: "non",
  },
];
export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured<span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          These are some of the projects I worked on during my academic years as
          part of a team, where I contributed significantly in design,
          development and implementation.
        </p>

        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((projects, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-80 overflow-hidden lg:h-73">
                <img
                  src={projects.image}
                  alt={projects.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-left text-xl font-semibold mb-2">
                  {projects.title}:
                </h3>
                <p className="text-left text-md mb-4">{projects.description}</p>
                {/* links */}
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={projects.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={projects.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="http://github.com/ferozzshaikk"
            target="_blank"
            className="cosmic-button w-fit flex flex-xenter mx-auto gap-2"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
