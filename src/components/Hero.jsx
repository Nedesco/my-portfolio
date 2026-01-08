export default function Hero() {
  return (

       <div
      className="w-full"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }} 
      >
    <div id="about" className="w-full max-w-[1280px] px-6 lg:px-10 py-12 lg:py-24 mx-auto">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6 lg:w-1/2 items-start text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">waving_hand</span>
            <span>Hello, I'm Chimezirim</span>
          </div>
          
          <h1 className="text-[#0d121b] text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
  Building thoughtful <span className="text-primary">digital solutions</span> through code.
</h1>
          
          <p className="text-[#4b5563] text-lg leading-relaxed max-w-[600px]">
              I’m a final-year Computer Science student with experience working on academic and personal software projects.
  This portfolio showcases selected projects I’ve built as part of my learning journey and coursework.
</p>
          

          <div className="flex flex-wrap gap-4 mt-4 w-full sm:w-auto">
            <a href="#projects" className="flex flex-1 sm:flex-none cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-primary hover:bg-[color:var(--color-primary-dark)] hover:shadow-xl hover:-translate-y-0.5 transition-all text-white text-base font-bold shadow-lg shadow-primary/25">
              <span className="truncate">View Projects</span>
              <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </a>
            <button className="flex flex-1 sm:flex-none cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-transparent border-2 border-[#e7ebf3] hover:border-primary/50 hover:bg-primary/5 text-[#0d121b] hover:text-primary transition-all text-base font-bold">
              <span className="material-symbols-outlined text-[20px]">download</span>
              <span className="truncate">Download Resume</span>
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end group">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10 blur-xl opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative w-full aspect-[4/5] max-w-[500px] overflow-hidden rounded-[2rem] shadow-2xl bg-white">
            <img 
              src="/images/chimezirim.jpg"
              alt="Portrait" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Status Card */}
            <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/90 backdrop-blur-sm rounded-xl border border-white/20 shadow-lg transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Current Status</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </span>
                    <p className="text-sm font-bold text-[#0d121b]">Open to internships & collaborations</p>
                  </div>
                </div>
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">mark_email_unread</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
}