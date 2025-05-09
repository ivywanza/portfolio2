import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectsPage: React.FC = () => {
  // Project data - in a real app, this would likely come from an API or CMS
  const projects = [
    {
      id: 1,
      title: "CBC Timetable Generator",
      description:
        "A custom-built system for generating class timetables under Kenya's CBC curriculum. It allows school administrators to input subjects, teachers, and time slots, then automatically generates balanced timetables based on constraints like subject load, availability, and grade requirements.",
      image: "./images/cbc-timetable-generator.png",
      technologies: [
        "Flask",
        "PostgreSQL",
        " HTML & CSS ",
        "Jinja2",
        "SQLAlchemy",
      ],
      challenges: [
        "Handling dynamic scheduling logic: Built a constraint-based scheduling algorithm to avoid subject clashes and ensure fairness in distribution.",
        "Data consistency across user sessions: Implemented PostgreSQL transactions and careful relationship mapping using SQLAlchemy.",
        "Simplified UX for non-technical users: Created clean, form-based interfaces with clear instructions and validation.",
      ],
      outcomes:
        "Eliminated manual scheduling effort, saving up to 10+ hours per week for school admins and reduced timetable conflicts by 90%. The System is now used in multiple schools to streamline operations under the new curriculum structure.",
      demoLink: "https://timetable-generator2.onrender.com/",
      githubLink: "https://github.com/ivywanza/timetable-generator",
      screenshots: [
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      id: 2,
      title: "Techelar Business Website",
      description:
        "A professional business website designed to showcase Techelar’s services, streamline client engagement, and establish a strong online presence. The site features service descriptions, contact forms, and responsive design to ensure accessibility across devices.",
      image: "./images/techelar.png",
      technologies: ["HTML", "Bootstrap", "CSS", "JavaScript"],
      challenges: [
        "Designing a clean and modern UI for a professional look",
        "Ensuring mobile responsiveness across all screen sizes",
        "Optimizing page performance for fast loading",
        "Building reusable Bootstrap components for consistency",
      ],
      outcomes:
        "Improved brand credibility, faster client onboarding, and increased service inquiries by 40% through the contact form.",
      demoLink: "https://techelar.co.ke",
      githubLink: "https://github.com/ivywanza",
      screenshots: [
        "https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      id: 3,
      title: "User Authentication System",
      description:
        "A secure and scalable authentication system built with FastAPI and Firebase. It supports user registration, login, token-based authentication, and role-based access control with seamless Firebase integration.",
      image: "./images/auth-system.png",
      technologies: [
        "FastAPI",
        "Firebase Admin SDK",
        "JWT",
        "SQLAlchemy",
        "Render",
      ],
      challenges: [
        "Integrating Firebase authentication with a custom backend",
        "Ensuring secure token handling and validation",
        "Deploying a production-ready API on Render",
        "Managing Firebase credentials securely using environment variables",
      ],
      outcomes:
        "Enabled fast, reliable authentication across frontend and backend services. Streamlined user onboarding and improved security with Firebase's infrastructure.",
      demoLink: "https://user-authentication-system-qz8s.onrender.com/docs#/",
      githubLink: "https://github.com/ivywanza/user-authentication-system",
      screenshots: [
        "./images/auth-system.png",
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
    {
      id: 5,
      title: "SmartMatch Dating Platform",
      description:
        "An AI-powered dating web application that enables users to connect meaningfully through intelligent matching, real-time chat, and a sleek, user-friendly interface.",
      image:
        "./images/dating-website.png",
      technologies: [
        "React",
        "Flask",
        "PostgreSQL",
        "Socket.IO",
        "JWT Auth",
        "AI Matching Algorithm"
      ],
      challenges: [
        "Training and integrating an AI model for personalized match suggestions",
        "Implementing real-time messaging with Socket.IO",
        "Ensuring strong user data security and seamless authentication",
        "Creating a responsive design optimized for mobile and desktop",
      ],
      outcomes:
        "Currently in development and testing phase. AI-driven recommendations have shown promising accuracy in internal tests, with plans to expand features based on user behavior analysis.",
      demoLink: "https://dating-site-p7cx.onrender.com",
      githubLink: "https://github.com/ivywanza/dating-site", 
      screenshots: [
        "https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      ],
    },
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container-custom mt-4">
        {/* Projects Header */}
        <div className="text-center mb-16 mt-4">
          <h1 className="text-4xl font-heading font-bold mb-4">My Projects</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            A collection of my work that demonstrates my skills, problem-solving
            abilities, and passion for creating elegant solutions.
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-24 mt-4">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`flex flex-col mt-4 ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-12`}
            >
              {/* Project Image */}
              <div className="lg:w-2/5">
                <div className="rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-100 object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {project.screenshots.map((screenshot, idx) => (
                    <div
                      key={idx}
                      className="rounded-lg overflow-hidden shadow-sm"
                    >
                      <img
                        src={screenshot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="w-full h-32 object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="lg:w-3/5">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  {project.title}
                </h2>
                <p className="text-slate mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-sm bg-navy/10 text-navy px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Challenges */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    Challenges & Solutions
                  </h3>
                  <ul className="list-disc list-inside text-slate space-y-2">
                    {project.challenges.map((challenge, idx) => (
                      <li key={idx}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mb-6">
                  <h3 className="text-lg font-heading font-semibold mb-3">
                    Outcomes
                  </h3>
                  <p className="text-slate">{project.outcomes}</p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline"
                  >
                    GitHub <Github size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
