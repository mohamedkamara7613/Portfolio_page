// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({ id, title, description, media, technologies, repoUrl, index }) {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);

  const nextMedia = () => {
    setCurrentMediaIndex((prev) => (prev + 1) % media.length);
  };

  const prevMedia = () => {
    setCurrentMediaIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[currentMediaIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="relative bg-gray-800/50 rounded-2xl p-6 border-2 border-gray-700/50 backdrop-blur-lg hover:border-cyan-400/30 hover:shadow-[0_0_30px_#22d3ee20] transition-all duration-500 group overflow-hidden"
    >
      {/* Effet de bordure animée */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 40%, rgba(34, 211, 238, 0.1) 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
          animation: 'shimmer 3s infinite linear'
        }}
      />
      
      {/* Points de connexion cyber */}
      <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 drop-shadow-[0_0_6px_#c084fc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Media Gallery */}
      <div className="relative mb-4 rounded-xl overflow-hidden border border-gray-600/50 group-hover:border-cyan-400/30 transition-colors duration-300">
  {currentMedia.type === "video" ? (
        <div className="w-full aspect-video"> {/* ← Ratio 16:9 pour les vidéos */}
          <iframe
            className="w-full h-full rounded-lg"
            src={currentMedia.url}
            title={`${title} - Video ${currentMediaIndex + 1}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
          />
        </div>
      ) : (
        <div className="w-full aspect-[4/3]"> {/* ← Ratio 1:1 pour les images ou ajuste */}
          <img 
            src={currentMedia.url} 
            alt={`${title} - Image ${currentMediaIndex + 1}`} 
            className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105 bg-gray-800" 
          />
          <div className="absolute inset-0 bg-cyan-400/0 group-hover:bg-cyan-400/5 transition-all duration-300" />
        </div>
      )}

      {/* Contrôles de navigation si plusieurs médias */}
      {media.length > 1 && (
        <>
          <button
            onClick={prevMedia}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-cyan-400/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
          >
            ‹
          </button>
          <button
            onClick={nextMedia}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900/80 hover:bg-cyan-400/80 text-white w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20"
          >
            ›
          </button>
          
          {/* Indicateur de position */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-20">
            {media.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentMediaIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentMediaIndex 
                    ? 'bg-cyan-400 scale-125' 
                    : 'bg-gray-500 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Compteur */}
          <div className="absolute top-2 right-2 bg-gray-900/80 text-cyan-400 text-xs px-2 py-1 rounded-full font-mono z-20">
            {currentMediaIndex + 1}/{media.length}
          </div>
        </>
      )}
    </div>

      {/* Titre avec style terminal */}
      <h2 className="text-xl font-bold mb-3 font-mono group-hover:text-cyan-300 transition-colors duration-300">
        <span className="text-cyan-400 mr-2">$</span>
        {title}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-green-400 ml-1"
        >
          _
        </motion.span>
      </h2>

      {/* Description */}
      {description && (
        <p className="text-gray-400 mb-4 text-sm leading-relaxed font-mono">
          <span className="text-cyan-400">// </span>
          {description}
        </p>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <motion.span
            key={i}
            whileHover={{ scale: 1.05 }}
            className="px-3 py-1 text-xs bg-gray-700/80 text-cyan-300 rounded-full border border-cyan-400/20 font-mono hover:bg-cyan-400/10 hover:border-cyan-400/40 transition-all duration-300"
          >
            {tech}
          </motion.span>
        ))}
      </div>

      {/* Lien vers le code */}
      <motion.a
        href={repoUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ x: 5 }}
        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-mono text-sm group/link transition-all duration-300 relative z-10"
      >
        <span className="mr-2">view_code</span>
        <motion.span
          initial={{ x: -5, opacity: 0 }}
          whileHover={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="text-green-400"
        >
          [↗]
        </motion.span>
      </motion.a>
    </motion.div>
  );
}