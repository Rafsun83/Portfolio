import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center gap-6 mb-12">
            <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown size={32} className="text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
                alt="Working on laptop"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <p className="text-lg text-gray-600 leading-relaxed">
                I'm a passionate full-stack developer with 5 years of experience building
                beautiful and functional web applications. I specialize in React, Node.js,
                and modern web technologies. When I'm not coding, you can find me
                contributing to open-source projects or writing technical blog posts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-151030${project}349-e82c6000164c?auto=format&fit=crop&q=80&w=800`}
                  alt={`Project ${project}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project Title {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its
                    development.
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <span className="px-2 py-1 bg-gray-100 rounded text-sm">React</span>
                      <span className="px-2 py-1 bg-gray-100 rounded text-sm">Node.js</span>
                    </div>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 John Doe. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;