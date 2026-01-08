export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="w-full py-24 bg-[color:var(--color-primary-soft)]"
    >
      <div className="max-w-[900px] mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black text-[#0d121b] mb-4">
          Let’s Connect
        </h2>

        <p className="text-[#4b5563] max-w-xl mx-auto mb-12">
          Interested in my work, collaboration opportunities, or just want to reach out?
          I’m open to conversations and learning opportunities.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6">

          {/* GitHub */}
          <a
            href="https://github.com/Nedesco"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-lg font-bold
              bg-[color:var(--color-primary)]
              text-white
              hover:bg-[color:var(--color-primary-dark)]
              transition-all
              shadow-lg shadow-[color:var(--color-primary)]/30
            "
          >
            <span className="material-symbols-outlined">code</span>
            GitHub
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/2348164675803"
            target="_blank"
            rel="noreferrer"
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-lg font-bold
              border border-[color:var(--color-primary)]/30
              text-[color:var(--color-primary)]
              hover:bg-[color:var(--color-primary)]/10
              transition-all
            "
          >
            <span className="material-symbols-outlined">chat</span>
            WhatsApp
          </a>

          {/* Email */}
          <a
            href="mailto:enedonuoha@gmail.com"
            className="
              flex items-center justify-center gap-2
              px-6 py-3 rounded-lg font-bold
              border border-[color:var(--color-primary)]/30
              text-[color:var(--color-primary)]
              hover:bg-[color:var(--color-primary)]/10
              transition-all
            "
          >
            <span className="material-symbols-outlined">mail</span>
            Email
          </a>

        </div>
      </div>
    </section>
  );
}
