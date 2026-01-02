import { useParams, Link } from 'react-router-dom';
import { projects } from '../projects';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return <div className="text-center py-20">Project not found</div>;
  }

  return (
    <div className="min-h-screen bg-background-light font-display">
      <Navbar />
      
      <main className="max-w-[1000px] mx-auto px-6 py-12 lg:px-10">
        
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-primary mb-8 transition-colors">
          <span className="material-symbols-outlined text-lg mr-1">arrow_back</span>
          Back to Projects
        </Link>

        {/* Project Header */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-5xl font-black text-[#0d121b] mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack && project.techStack.map((tech) => (
              <span key={tech} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-bold">
                {tech}
              </span>
            ))}
          </div>
          <p className="text-xl text-[#4b5563] leading-relaxed max-w-3xl">{project.fullDescription}</p>
        </div>

        {/* Main Image */}
        <div className="rounded-2xl overflow-hidden shadow-2xl mb-16 border border-gray-100">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Detailed Info Grid [cite: 44-48] */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* Problem Solved */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-[#0d121b] mb-4">
              <span className="material-symbols-outlined text-primary">psychology_alt</span>
              The Problem
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              {project.problemSolved || "Details coming soon..."}
            </p>
          </div>

          {/* What I Learned */}
          <div>
            <h3 className="flex items-center gap-2 text-2xl font-bold text-[#0d121b] mb-4">
              <span className="material-symbols-outlined text-primary">school</span>
              What I Learned
            </h3>
            <p className="text-[#4b5563] leading-relaxed">
              {project.whatILearned || "Details coming soon..."}
            </p>
          </div>
        </div>

        {/* Live Links [cite: 32] */}
        <div className="flex gap-4 border-t border-gray-200 pt-8">
            {project.link && (
              <a href={project.link} target="_blank" rel="noreferrer" className="bg-[#0d121b] text-white px-6 py-3 rounded-lg font-bold hover:bg-gray-800 transition flex items-center gap-2">
                <span className="material-symbols-outlined">code</span> View Code
              </a>
            )}
        </div>

      </main>

      <Footer />
    </div>
  );
}