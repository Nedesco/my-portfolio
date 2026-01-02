import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Footer from './components/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background-light text-gray-900 font-display">
      
      {/* 1. Navigation Bar */}
      <Navbar />
      
      {/* 2. Main Content Area */}
      <main className="flex-1 flex flex-col items-center w-full">
        
        {/* The "About Me" / Intro Section */}
        <Hero />
        
        {/* Optional: Trusted Brands / Logos Section (Matches your design) */}
        <div className="w-full bg-white border-y border-[#e7ebf3] py-10">
          <div className="max-w-[1280px] mx-auto px-6 lg:px-10 text-center">
            <h4 className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-8">
              My Tech Stack
            </h4>
            {/* Simple Tech Stack Icons */}
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-gray-400 font-bold text-xl">
               <span>REACT</span>
               <span>TAILWIND</span>
               <span>JAVASCRIPT</span>
               <span>VITE</span>
            </div>
          </div>
        </div>

        {/* The List of Projects */}
        <Projects />
      
      </main>

      {/* 3. Footer / Contact Section */}
      <Footer />
    
    </div>
  );
}

export default Home;