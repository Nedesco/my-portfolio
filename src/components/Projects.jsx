import { Link } from 'react-router-dom'; // <--- Import this
import { projects } from '../projects';  // <--- Import your data source

export default function Projects() {
  return (
    <div id="projects" className="w-full max-w-[1280px] px-6 lg:px-10 py-20 mx-auto">
      {/* ... (Header section remains the same) ... */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          // WRAP the card in a Link to the details page
          <Link to={`/project/${project.id}`} key={project.id} className="group cursor-pointer">
            
            {/* NEW WAY: Real Image Tag (No Inline CSS) */}
        <div className="overflow-hidden rounded-xl bg-gray-100 aspect-[4/3] mb-4 relative">
        <img 
            src={project.image} 
            alt={project.title} 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        {/* Overlay for hover effect */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </div>

            {/* Note: I changed 'project.title' to 'project.name' if you kept 'name' in your projects.js */}
            <h4 className="text-xl font-bold text-[#0d121b] group-hover:text-primary transition-colors">
              {project.title} 
            </h4>
            <p className="text-sm text-[#4b5563] mt-1">{project.category}</p>
            
          </Link>
        ))}
      </div>
    </div>
  );
}