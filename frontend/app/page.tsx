export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
            Johannes Wild
          </h1>
          <p className="text-xl md:text-2xl text-dark-text-secondary animate-slide-up">
            ist ihr neuer Joker!
          </p>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Über mich</h2>
          <p className="text-lg text-dark-text-secondary leading-relaxed">
            Hallo, ich bin Johannes Wild! Analytisches Denken und strukturiertes Arbeiten 
            erlauben es mir, mich schnell in neue und komplexe Domänen, Herausforderungen 
            und Prozesse hineinzudenken. Ich arbeite team- und lösungsorientiert.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-8">Kompetenzen</h2>
          {/* Skills will be populated from Sanity */}
          <div className="space-y-4">
            <p className="text-dark-text-secondary">Skills coming from Sanity CMS...</p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">Erfahrung</h2>
          {/* Experience will be populated from Sanity */}
          <div className="space-y-6">
            <p className="text-dark-text-secondary">Experience coming from Sanity CMS...</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center justify-center p-8">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-4xl font-bold mb-8">Kontakt</h2>
          <p className="text-dark-text-secondary mb-4">
            Let's connect! Contact form coming soon...
          </p>
        </div>
      </section>
    </main>
  );
}
