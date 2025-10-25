import LetterGlitch from "@/components/LetterGlitch";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero-section" className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gray-900 overflow-hidden">
      {/* LetterGlitch en background avec overlay */}
      <div className="absolute inset-0 z-0">
        <LetterGlitch
          glitchSpeed={50}
          centerVignette={true}
          outerVignette={false}
          smooth={true}
        />
        {/* Overlay sombre pour mieux lire le texte */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-purple-900/30 to-cyan-900/20 backdrop-blur-[1px]" />
        
        {/* Effets de particules/lumières cyber */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-mono text-gray-400 mb-8 text-sm"
        >
          <span className="text-cyan-400">visitor@portfolio</span>
          <span className="text-gray-600">:</span>
          <span className="text-purple-400">~</span>
          <span className="text-gray-600">$ </span>
          <span className="text-green-400 animate-typing">welcome_sequence_init</span>
          <span className="text-green-400 animate-pulse">_</span>
        </motion.div>

        {/* Titre principal avec effet glitch */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6 font-mono"
        >
          <span className="text-cyan-400">&gt;_ </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 drop-shadow-[0_0_10px_#22d3ee80]">
            Mouhamed
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-400 ml-2"
          >
            _
          </motion.span>
        </motion.h1>

        {/* Sous-titre style interface */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mb-8"
        >
          <div className="font-mono text-xl text-gray-300 mb-2">
            <span className="text-cyan-400">[</span>
            <span className="text-purple-400 mx-2">AI Engineer</span>
            <span className="text-cyan-400">]</span>
            <span className="text-gray-600 mx-3">|</span>
            <span className="text-cyan-400">[</span>
            <span className="text-green-400 mx-2">Computer Vision</span>
            <span className="text-cyan-400">]</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="text-gray-400 max-w-2xl mx-auto mb-12 font-mono text-lg leading-relaxed"
        >
          <span className="text-cyan-400">// </span>
          Passionné par la vision par ordinateur, l'IA et le développement d'outils innovants.
          <br />
          <span className="text-cyan-400">// </span>
          Explorez mes projets les plus marquants dans l'univers du numérique.
        </motion.p>

        {/* Indicateur de statut */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex items-center justify-center space-x-3 text-sm font-mono"
        >
          <div className="flex items-center space-x-2">
            <motion.div
              animate={{ 
                backgroundColor: ['#4ade80', '#22d3ee', '#4ade80'],
                boxShadow: ['0 0 10px #4ade80', '0 0 15px #22d3ee', '0 0 10px #4ade80']
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full"
            />
            <span className="text-gray-400">status:</span>
            <span className="text-green-400">available_for_collaboration</span>
          </div>
        </motion.div>

        {/* Séparateur cyber */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent mt-12 mx-auto max-w-2xl"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-cyan-400 font-mono text-sm flex flex-col items-center"
        >
          <span>scroll_down</span>
          <span className="text-2xl">⌄</span>
        </motion.div>
      </motion.div>
    </section>
  );
}