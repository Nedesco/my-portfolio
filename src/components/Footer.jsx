export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-[#e7ebf3]">
      <div className="max-w-[1280px] mx-auto px-6 py-12 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 text-[#0d121b]">
            <div className="size-6 text-primary">
              <span className="material-symbols-outlined">design_services</span>
            </div>
            <h2 className="text-lg font-bold leading-tight">
              C. Ned-Onuoha Code
            </h2>
          </div>
          <p className="text-[#4b5563] text-sm max-w-xs">
            A final-year Computer Science portfolio showcasing selected academic
            and personal projects in software development and problem-solving.
          </p>

          <p className="text-[#4b5563] text-xs mt-2">
            © 2026 Chimezirim Ned-Onuoha. All rights reserved.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            {["public", "post_add", "alternate_email", "work"].map((icon) => (
              <a
                key={icon}
                href="#"
                className="text-slate-500 hover:text-primary transition-colors p-2 rounded-full hover:bg-background-light"
              >
                <span className="material-symbols-outlined">{icon}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
