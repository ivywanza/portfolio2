import React from 'react';

const AboutPage: React.FC = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 90 },
    { name: 'React/Vue.js', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'System Design & Architecture', level: 70 },
    { name: 'AI Integration (Python/Flask)', level: 70 },
    { name: 'Docker/Kubernetes', level: 65 },
    { name: 'CI/CD & DevOps', level: 60 },
    { name: 'AWS/GCP', level: 55 },
  ];

  const testimonials = [
    {
      id: 1,
      content: "A backend developer with serious potential. Their structured thinking and ability to integrate AI into scalable systems sets them apart.",
      author: "Sarah Johnson",
      role: "Senior Software Engineer at TechCorp"
    },
    {
      id: 2,
      content: "Brilliant problem solver with a natural flair for backend architecture. Their AI-powered dating platform project blew me away.",
      author: "Michael Chen",
      role: "CTO at StartupInnovate"
    },
    {
      id: 3,
      content: "They're dependable, detail-oriented, and always thinking a step ahead in terms of system scalability and maintainability.",
      author: "Jessica Williams",
      role: "Product Manager at DevSolutions"
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container-custom">

        {/* About Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-heading font-bold mb-4">About Me</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto">
            Backend developer passionate about building scalable systems, integrating AI, and solving real business problems through smart technology.
          </p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row gap-12 mb-20">
          <div className="md:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-md">
              <img 
                src="./images/mypic.jpg" 
                alt="Professional portrait" 
                className="w-full h-auto"
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-2xl font-heading font-bold mb-6">My Professional Journey</h2>
            <div className="space-y-4 text-slate">
              <p>
                I began my journey into software development driven by a desire to solve real-world problems using smart, efficient systems. 
                Over time, I found my strengths in backend development and system design — building the logic and infrastructure that keeps apps running smoothly.
              </p>
              <p>
                My startup experience gave me a broad skill set — from APIs and databases to full-stack development and DevOps. 
                But where I truly come alive is in designing robust, scalable architectures that integrate technologies like AI to deliver real impact.
              </p>
              <p>
                One of my most exciting projects so far is an AI-powered dating platform that uses intelligent matching and real-time chat, 
                built with React, Flask, PostgreSQL, and WebSockets. It reflects what I love most: combining AI, backend logic, and user needs to build products that work.
              </p>
              <p>
                Looking ahead, I aim to work with businesses to understand their challenges, extract insights from their data, and build custom AI-driven systems that drive real growth.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Core Values & Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-heading font-semibold mb-3 text-purple">Practical Innovation</h3>
              <p className="text-slate">
                I use AI and automation not for the buzz, but to make systems more intelligent and user-centric — always with an eye on business value.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-heading font-semibold mb-3 text-purple">Systems Thinking</h3>
              <p className="text-slate">
                I think in terms of systems — how components interact, how to reduce complexity, and how to build structures that can grow without breaking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-heading font-semibold mb-3 text-purple">Clarity & Collaboration</h3>
              <p className="text-slate">
                Whether writing code or communicating ideas, I aim for clarity. I value good documentation, clear APIs, and teamwork that gets things done.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">Technical Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="font-heading font-medium">{skill.name}</span>
                  <span className="text-sm text-slate">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-purple h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div>
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">What Others Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <p className="italic text-slate mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-heading font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-slate">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;
