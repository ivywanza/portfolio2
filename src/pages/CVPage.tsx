import React from 'react';
import { FileDown } from 'lucide-react';

const CVPage: React.FC = () => {
  // Mock experience data
  const experiences = [
    {
      id: 1,
      role: 'Junior Software Developer',
      company: 'TechStartup Inc.',
      period: 'January 2023 - Present',
      description: 'Working on full-stack development using React, Node.js, and MongoDB. Implementing RESTful APIs, developing frontend components, and contributing to system architecture decisions.',
      achievements: [
        'Reduced API response time by 40% through query optimization',
        'Implemented automated testing that increased code coverage by 30%',
        'Led the development of a key feature that increased user engagement by 25%'
      ]
    },
    {
      id: 2,
      role: 'Software Engineering Intern',
      company: 'Enterprise Solutions',
      period: 'May 2022 - December 2022',
      description: 'Assisted in developing and maintaining web applications using JavaScript frameworks. Collaborated with senior developers on code reviews and testing procedures.',
      achievements: [
        'Developed a utility library that saved 10+ hours of development time per week',
        'Fixed 30+ bugs in the existing codebase',
        'Created technical documentation that improved onboarding process'
      ]
    },
  ];

  // Mock education data
  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      institution: 'Tech University',
      period: '2018 - 2022',
      details: 'Graduated with honors. Specialized in software engineering and database systems. Completed a capstone project on distributed systems.'
    },
    {
      id: 2,
      degree: 'Full-Stack Web Development Bootcamp',
      institution: 'Code Academy',
      period: 'January 2022 - April 2022',
      details: 'Intensive program focusing on modern web development technologies including React, Node.js, and cloud deployment.'
    }
  ];

  // Mock certifications data
  const certifications = [
    {
      id: 1,
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: 'August 2022'
    },
    {
      id: 2,
      name: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: 'May 2022'
    },
    {
      id: 3,
      name: 'MongoDB Certified Developer',
      issuer: 'MongoDB, Inc.',
      date: 'October 2022'
    }
  ];

  return (
    <div className="pt-24 pb-20 animate-fade-in">
      <div className="container-custom">
        {/* CV Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-heading font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-slate max-w-2xl mx-auto mb-8">
            A detailed overview of my professional experience, education, and qualifications.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#" 
              className="btn btn-primary"
              onClick={(e) => {
                e.preventDefault();
                alert('CV download would be implemented here with an actual file');
              }}
            >
              Download PDF <FileDown size={16} className="ml-2" />
            </a>
            <a 
              href="#" 
              className="btn btn-outline"
              onClick={(e) => {
                e.preventDefault();
                alert('CV download would be implemented here with an actual file');
              }}
            >
              Download Word
            </a>
          </div>
        </div>

        {/* CV Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          {/* Professional Experience */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b border-gray-200">
              Professional Experience
            </h2>
            
            <div className="space-y-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative pl-8 border-l-2 border-purple">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-purple rounded-full"></div>
                  <h3 className="text-xl font-heading font-semibold">{exp.role}</h3>
                  <p className="text-purple font-medium mb-1">{exp.company}</p>
                  <p className="text-sm text-slate mb-3">{exp.period}</p>
                  <p className="text-slate mb-3">{exp.description}</p>
                  <div>
                    <p className="font-medium mb-2">Key Achievements:</p>
                    <ul className="list-disc list-inside text-slate space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b border-gray-200">
              Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu) => (
                <div key={edu.id} className="relative pl-8 border-l-2 border-navy">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-navy rounded-full"></div>
                  <h3 className="text-xl font-heading font-semibold">{edu.degree}</h3>
                  <p className="text-navy font-medium mb-1">{edu.institution}</p>
                  <p className="text-sm text-slate mb-3">{edu.period}</p>
                  <p className="text-slate">{edu.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
  <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b border-gray-200">
    Technical Skills
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
      <h3 className="font-heading font-semibold mb-3">Programming Languages</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Python</span>
        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">JavaScript</span>
        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">TypeScript</span>
        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">SQL</span>
        <span className="bg-navy/10 text-navy px-3 py-1 rounded-full text-sm">Java</span>
      </div>
    </div>

    <div>
      <h3 className="font-heading font-semibold mb-3">Frameworks & Libraries</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">React</span>
        <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">Pandas</span>
        <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">NumPy</span>
        <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">scikit-learn</span>
        <span className="bg-purple/10 text-purple px-3 py-1 rounded-full text-sm">TensorFlow</span>
      </div>
    </div>

    <div>
      <h3 className="font-heading font-semibold mb-3">Databases</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">PostgreSQL</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">MongoDB</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">MySQL</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">SQLite</span>
      </div>
    </div>

    <div>
      <h3 className="font-heading font-semibold mb-3">Tools & Platforms</h3>
      <div className="flex flex-wrap gap-2">
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">Git</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">Jupyter</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">Power BI</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">Tableau</span>
        <span className="bg-slate/10 text-slate px-3 py-1 rounded-full text-sm">Agile</span>
      </div>
    </div>
  </div>
</section>

          {/* Certifications */}
          {/* <section>
            <h2 className="text-2xl font-heading font-bold mb-6 pb-2 border-b border-gray-200">
              Certifications
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-heading font-semibold">{cert.name}</h3>
                  <p className="text-slate">{cert.issuer}</p>
                  <p className="text-sm text-slate">Issued: {cert.date}</p>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
};

export default CVPage;