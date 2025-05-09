import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from 'components/ExampleCarouselImage';


const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-16">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 animate-slide-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-4">
              From complexity to clarity — {" "}
                <span className="text-purple">I turn ideas into solid systems.</span>
              </h1>
              <p className="text-lg text-slate mb-8 max-w-xl">
                Clean code. Well-structured systems. A focus on clarity.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  View My Work <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src="./images/mypic.jpg"
                    alt="Professional headshot"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-purple text-white px-6 py-2 rounded-full shadow-md">
                  <span className="font-heading font-medium">I design and build thoughtful systems.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">About Me</h2>
            <p className="text-lg text-slate mb-8">
              I'm a software developer with a strong focus on system design and
              clean architecture. Whether it's a web platform, an internal tool,
              or a scalable API, I bring clarity to the code and structure to
              the solution. I believe that the best software doesn’t just work —
              it makes sense. 
              <br></br>My work reflects a mindset of intentional
              simplicity and deep attention to detail, backed by consistent
              learning and a commitment to professional growth.
            </p>
            <Link to="/about" className="btn btn-secondary">
              Learn More About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-slate max-w-2xl mx-auto">
              A selection of my recent work showcasing my technical skills and
              problem-solving abilities.
            </p>
          </div>


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Project Card 1 */}
            <div className="card group">
              <div className="h-100 bg-navy/5 flex items-center justify-center overflow-hidden">
                <img
                  src="./images/cbc-timetable-generator.png"
                  alt="E-commerce Platform"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                CBC Timetable Generator
                </h3>
                <p className="text-slate mb-4">
                A custom-built system for generating class timetables under Kenya's CBC curriculum. 
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    HTML
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    Flask
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                </div>
                <Link
                  to="/projects"
                  className="text-purple font-medium text-sm flex items-center hover:underline"
                >
                  View Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project Card 2 */}
            <div className="card group">
              <div className="h-100 bg-navy/5 flex items-center justify-center overflow-hidden">
                <img
                  src="./images/auth-system.png"
                  alt="Task Management System"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Task Management System
                </h3>
                <p className="text-slate mb-4">
                  A comprehensive task management system with collaborative
                  features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    Express
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    PostgreSQL
                  </span>
                </div>
                <Link
                  to="/projects"
                  className="text-purple font-medium text-sm flex items-center hover:underline"
                >
                  View Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>

            {/* Project Card 3 */}
            <div className="card group">
              <div className="h-100 bg-navy/5 flex items-center justify-center overflow-hidden">
                <img
                  src="./images/dating-website.png"
                  alt="Data Visualization Dashboard"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold mb-2">
                  Data Visualization Dashboard
                </h3>
                <p className="text-slate mb-4">
                  An interactive dashboard for visualizing complex data sets in
                  real-time.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    Vue.js
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    D3.js
                  </span>
                  <span className="text-xs font-medium bg-navy/10 text-navy px-2 py-1 rounded">
                    Firebase
                  </span>
                </div>
                <Link
                  to="/projects"
                  className="text-purple font-medium text-sm flex items-center hover:underline"
                >
                  View Details <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link to="/projects" className="btn btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-purple text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Interested in working together?
            </h2>
            <p className="text-white/90 text-lg mb-8">
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </p>
            <Link
              to="/contact"
              className="btn bg-white text-purple hover:bg-white/90"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
