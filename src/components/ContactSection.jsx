import { useState } from 'react';
import { motion } from 'framer-motion';
import { ContactIcon } from './ContactIcon';

export default function ContactSection({ contacts }) {
  return (
    <section id="contacts" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-cyan-900/20 py-20 overflow-hidden">
      {/* Effets de fond cyber */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-green-400 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Titre style terminal */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="font-mono text-4xl font-bold mb-4">
            <span className="text-cyan-400">$ </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              contact_me
            </span>
            <span className="text-green-400 animate-pulse">_</span>
          </div>
        </motion.div>

        {/* Grille des contacts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contacts.map((contact, index) => (
            <ContactCard key={contact.id} contact={contact} index={index} />
          ))}
        </div>

        {/* Footer terminal */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mt-16 font-mono text-gray-500"
        >
          <div className="font-mono text-2xl border-t border-gray-700 pt-6">
            <p className=" font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-[0_0_6px_#4ade80] 
                              ">
            // Connect with me across the digital realm
          </p>
            <span className="text-cyan-400">~$ </span>
            <span className=" text-green-400">./ready_to_collaborate</span>
            <span className="text-cyan-400 animate-pulse">_</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Composant Carte de Contact
const ContactCard = ({ contact, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={contact.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        transition: { duration: 0.3 }
      }}
      transition={{ 
        delay: index * 0.2, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative block rounded-2xl p-6 cursor-pointer border-2 backdrop-blur-lg overflow-hidden group"
      style={{
        backgroundColor: 'rgba(30, 41, 59, 0.8)',
        borderColor: 'rgba(148, 163, 184, 0.2)',
      }}
    >
      {/* Effet de bordure animée */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, transparent 40%, rgba(34, 211, 238, 0.2) 50%, transparent 60%)`,
          backgroundSize: '200% 200%',
          animation: 'shimmer 3s infinite linear'
        }}
      />
      
      {/* Points de connexion cyber */}
      <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 drop-shadow-[0_0_6px_#c084fc]" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-green-400 drop-shadow-[0_0_6px_#4ade80]" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />

      {/* Contenu de la carte */}
      <div className="relative z-10">
        {/* Icone et Nom */}
        <div className="flex items-center mb-4">
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-800/50 border border-cyan-400/30 mr-4"
          >
            <ContactIcon 
              name={contact.iconName} 
              className="w-6 h-6 text-cyan-400 filter drop-shadow-[0_0_4px_#22d3ee]" 
            />
          </motion.div>
          
          <div>
            <motion.h3 
              className="font-mono font-bold text-lg text-cyan-400"
              whileHover={{ x: 3 }}
            >
              {contact.name}
            </motion.h3>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0.7 }}
              className="text-gray-400 text-sm font-mono"
            >
               {contact.url.startsWith('mailto:') ? contact.url.replace('mailto:', '') : "click_to_connect"}
            </motion.div>
          </div>
        </div>

        {/* Indicateur d'état */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <motion.div
              animate={{ 
                backgroundColor: isHovered ? '#4ade80' : '#22d3ee',
                scale: isHovered ? 1.2 : 1
              }}
              className="w-2 h-2 rounded-full mr-2"
            />
            <span className="text-gray-400 text-sm font-mono">
              {isHovered ? 'online' : 'active'}
            </span>
          </div>
          
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: 0 }}
            className="text-green-400 font-mono text-sm"
          >
            [↗]
          </motion.span>
        </div>
      </div>
    </motion.a>
  );
};