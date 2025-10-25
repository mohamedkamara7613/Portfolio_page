export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center bg-neutral-900 text-gray-100 px-6">
      <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-pink-500 text-transparent bg-clip-text">
        Bienvenue sur mon Portfolio
      </h1>
      <p className="text-gray-400 max-w-xl">
        Je suis étudiant ingénieur passionné par la vision par ordinateur, l’IA et le développement d’outils pratiques.  
        Découvrez ici mes projets les plus marquants.
      </p>
      <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
    </section>
    
  );
}
