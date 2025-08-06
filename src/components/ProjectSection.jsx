import { useState } from "react";
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
    title: "Weather Forecast App",
    description:
      "A simple weather application built with HTML, CSS, and JavaScript that fetches real-time weather data using the OpenWeather API. Users can search for any city to view current temperature, weather conditions, humidity, and wind speed. Designed for responsive use across devices.",
    image: "/projects/Weather_App/images/Weather-app.png",
    tags: ["HTML", "CSS", "JavaScript", "OpenWeather API", "Frontend"],
    demoUrl: "/projects/Weather_App/index.html",
    githubUrl: "https://github.com/ferozzshaikk/weather-app",
  },
  {
    id: 3,
    title: "Interactive Quiz Application",
    description:
      "A fully functional quiz app built with HTML, CSS, and JavaScript. It presents multiple-choice questions to users, tracks their score based on per-question marks, and displays the final result at the end. The quiz includes dynamic question rendering, user answer selection with visual feedback, and support for custom scoring logic. Designed with clean UI and responsive layout for both desktop and mobile devices.",
    image: "/projects/Quiz-App/Quiz_app.png",
    tags: ["HTML", "CSS", "JavaScript", "Frontend"],
    demoUrl: "/projects/Quiz-App/index.html",
    githubUrl: "https://github.com/ferozzshaikk/QuizApp",
  },
  {
    id: 4,
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
    id: 5,
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
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

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
          {visibleProjects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-80 overflow-hidden lg:h-73">
                <a href={project.demoUrl} target="_blank">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </a>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-left text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-left text-md mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "non" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                    {project.githubUrl !== "non" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer underline decoration-violet-500 hover:text-violet-500 w-fit flex items-center mx-auto gap-2"
          >
            {showAll ? "Show Less..." : "View More..."}
          </button>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/ferozzshaikk"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
