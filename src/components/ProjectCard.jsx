// components/ProjectCard.jsx
import { motion } from "framer-motion";
import { useState } from "react";

export default function ProjectCard({
  id,
  title,
  description,
  media,
  technologies,
  repoUrl,
  index,
}) {
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
        stiffness: 100,
      }}
      whileHover={{
        y: -5,
        transition: { duration: 0.3 },
      }}
      className="relative bg-gray-800/50 rounded-2xl p-6 border-2 border-gray-700/50 backdrop-blur-lg hover:border-cyan-400/30 hover:shadow-[0_0_30px_#22d3ee20] transition-all duration-500 group overflow-hidden"
    >
      {/* Effet de bordure animée */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 40%, rgba(34, 211, 238, 0.1) 50%, transparent 60%)`,
          backgroundSize: "200% 200%",
          animation: "shimmer 3s infinite linear",
        }}
      />

      {/* Points de connexion cyber */}
      <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 drop-shadow-[0_0_6px_#c084fc] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Media Gallery */}
      <div className="relative mb-4 rounded-xl overflow-hidden border border-gray-600/50 group-hover:border-cyan-400/30 transition-colors duration-300">
        {currentMedia.type === "video" ? (
          <div className="w-full aspect-video">
            {" "}
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
          <div className="w-full aspect-[4/3]">
            {" "}
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
            {/* Bouton précédent */}
            <button
              onClick={prevMedia}
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-cyan-400/90 text-cyan-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 border border-cyan-400/50 hover:border-cyan-400 shadow-[0_0_15px_#22d3ee40] hover:shadow-[0_0_20px_#22d3ee] backdrop-blur-sm"
            >
              <motion.svg
                whileHover={{ x: -2 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </motion.svg>
            </button>

            {/* Bouton suivant */}
            <button
              onClick={nextMedia}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gray-900/90 hover:bg-cyan-400/90 text-cyan-400 hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 z-20 border border-cyan-400/50 hover:border-cyan-400 shadow-[0_0_15px_#22d3ee40] hover:shadow-[0_0_20px_#22d3ee] backdrop-blur-sm"
            >
              <motion.svg
                whileHover={{ x: 2 }}
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </motion.svg>
            </button>

            {/* Indicateur de position - Style terminal */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20 bg-gray-900/80 backdrop-blur-sm rounded-full px-3 py-2 border border-cyan-400/30">
              {media.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentMediaIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 relative ${
                    idx === currentMediaIndex
                      ? "bg-cyan-400 scale-125 shadow-[0_0_10px_#22d3ee]"
                      : "bg-gray-500 hover:bg-cyan-300 hover:scale-110"
                  }`}
                >
                  {/* Tooltip au hover */}
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-cyan-400 text-xs px-2 py-1 rounded border border-cyan-400/30 opacity-0 hover:opacity-100 pointer-events-none transition-opacity duration-300 whitespace-nowrap">
                    {media[idx].type === "video"
                      ? `Video ${idx + 1}`
                      : `Image ${idx + 1}`}
                  </div>
                </button>
              ))}
            </div>

            {/* Compteur - Style interface cyber */}
            <div className="absolute top-3 right-3 bg-gray-900/80 backdrop-blur-sm text-cyan-400 text-xs px-3 py-1.5 rounded-full font-mono z-20 border border-cyan-400/30 shadow-[0_0_10px_#22d3ee20]">
              <span className="text-green-400">{currentMediaIndex + 1}</span>
              <span className="text-gray-400 mx-1">/</span>
              <span className="text-purple-400">{media.length}</span>
              <span className="text-gray-500 ml-1">
                {currentMedia.type === "video" ? "(vid)" : "(img)"}
              </span>
            </div>

            {/* Indicateur de type de média */}
            <div className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-sm text-xs px-2 py-1 rounded font-mono z-20 border border-cyan-400/30">
              {currentMedia.type === "video" ? (
                <span className="text-red-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-red-400 rounded-full mr-1.5 animate-pulse" />
                  VIDEO
                </span>
              ) : (
                <span className="text-green-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5" />
                  IMAGE
                </span>
              )}
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
