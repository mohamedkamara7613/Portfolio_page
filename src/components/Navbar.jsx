// src/components/Navbar.jsx
import { useState, useRef, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = ({ projects, contacts }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Fermer le menu en cliquant à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Données des sections
  const navSections = [
    {
      id: 'accueil',
      label: 'Accueil',
      bgColor: '#0A1128',
      textColor: '#E2E8F0',
      onClick: () => { 
      scroller.scrollTo('hero-section', { smooth: true, duration: 600, offset: -80 });
      setIsMenuOpen(false);
    },
      links: []
    },
    {
      id: 'projets',
      label: 'Projets',
      bgColor: '#1E293B',
      textColor: '#E2E8F0',
      onClick: () => { 
      scroller.scrollTo('projects-section', { smooth: true, duration: 600, offset: -80 });
      setIsMenuOpen(false);
    },
      links: projects.map(project => ({
        label: project.title,
        onClick: () => {
          scroller.scrollTo(project.id, { smooth: true, duration: 600, offset: -80 });
          setIsMenuOpen(false);
        }
      }))
    },
    {
      id: 'contacts',
      label: 'Contacts',
      bgColor: '#334155',
      textColor: '#E2E8F0',
      onClick: () => { 
      scroller.scrollTo('contacts-section', { smooth: true, duration: 600, offset: -80 });
      setIsMenuOpen(false);
    },
      links: contacts.map(contact => ({
        label: contact.name,
        onClick: () => {
          window.open(contact.url, '_blank');
          setIsMenuOpen(false);
        }
      }))
    }
  ];

  return (
    <nav className=" fixed top-0 w-full z-50 bg-gray-900/80 backdrop-blur-md border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
            {/* Nom logo */}
            <div className="flex-shrink-0 flex items-center">
              <div className="font-mono text-base sm:text-lg font-bold cursor-pointer group 
                              bg-gray-900/80 px-3 sm:px-4 py-2 rounded-lg border border-cyan-500/30 
                              hover:border-cyan-400/50 transition-all duration-500 hover:shadow-[0_0_20px_#22d3ee40] 
                              backdrop-blur-sm overflow-hidden">
                
                <div className="flex items-center animate-typing">
                  <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300 drop-shadow-[0_0_6px_#22d3ee]">
                    root@portfolio
                  </span>
                  <span className="text-gray-400">:</span>
                  <span className="text-purple-400 group-hover:text-purple-300 transition-colors duration-300 drop-shadow-[0_0_6px_#c084fc]">
                    ~
                  </span>
                  <span className="text-gray-400">$ </span>
                  <span className="text-green-400 group-hover:text-green-300 transition-colors duration-300 drop-shadow-[0_0_6px_#4ade80] 
                              whitespace-nowrap">
                    welcome_mouhamed
                  </span>
                </div>
              </div>
            </div>
          {/* Bouton Hamburger Neon - REMPLACER L'ANCIEN */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="inline-flex items-center justify-center p-3 rounded-lg bg-gray-900/80 border border-purple-500/30 hover:border-cyan-400/50 hover:shadow-[0_0_20px_#22d3ee40] backdrop-blur-sm transition-all duration-500 group"
            aria-expanded="false"
          >
            <span className="sr-only">Ouvrir le menu</span>
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <motion.span
                animate={{ 
                  rotate: isMenuOpen ? 45 : 0, 
                  y: isMenuOpen ? 6 : 0,
                  backgroundColor: isMenuOpen ? '#22d3ee' : '#c084fc'
                }}
                className="block h-0.5 w-6 rounded-full transition-colors duration-300 group-hover:bg-cyan-400 drop-shadow-[0_0_4px_currentColor]"
              />
              <motion.span
                animate={{ opacity: isMenuOpen ? 0 : 1 }}
                className="block h-0.5 w-6 bg-purple-400 rounded-full transition-colors duration-300 group-hover:bg-cyan-400 drop-shadow-[0_0_4px_currentColor]"
              />
              <motion.span
                animate={{ 
                  rotate: isMenuOpen ? -45 : 0, 
                  y: isMenuOpen ? -6 : 0,
                  backgroundColor: isMenuOpen ? '#22d3ee' : '#c084fc'
                }}
                className="block h-0.5 w-6 rounded-full transition-colors duration-300 group-hover:bg-cyan-400 drop-shadow-[0_0_4px_currentColor]"
              />
            </div>
          </motion.button>
        </div>
      </div>

        {/* Menu overlay - DÉJÀ CORRECT */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              ref={menuRef}
              className="fixed inset-0 z-40 bg-gradient-to-br from-gray-900/95 via-purple-900/20 to-cyan-900/20 backdrop-blur-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              {/* Effets de fond cyber */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl animate-pulse" />
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-purple-400 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-green-400 rounded-full blur-3xl animate-pulse delay-500" />
              </div>
              
              <div 
                className="fixed top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl p-6"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.div 
                  initial={{ opacity: 0, y: -30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 relative"
                >
                  {/* Lignes de connexion */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="hidden md:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 blur-sm" />
                    <div className="hidden md:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-purple-400/20 to-green-400/20 blur-sm" />
                  </div>
                  
                  {navSections.map((section, index) => (
                    <NavCard
                      key={section.id}
                      section={section}
                      index={index}
                      onLinkClick={() => setIsMenuOpen(false)}
                    />
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  );
};

// Composant NavCard adapté
const NavCard = ({ section, index, onLinkClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        delay: index * 0.15 + 0.3, 
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        scale: 1.05,
        y: -5,
        transition: { duration: 0.3 }
      }}
      className="relative rounded-xl p-6 cursor-pointer border-2 backdrop-blur-lg overflow-hidden group/card animate-shimmer"
      style={{ 
        backgroundColor: `${section.bgColor}80`,
        color: section.textColor,
        borderColor: `${section.textColor}40`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Points de connexion cyber */}
      <div className="absolute -top-1 -left-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />
      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-purple-400 drop-shadow-[0_0_6px_#c084fc]" />
      <div className="absolute -bottom-1 -left-1 w-3 h-3 rounded-full bg-green-400 drop-shadow-[0_0_6px_#4ade80]" />
      <div className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 drop-shadow-[0_0_6px_#22d3ee]" />

      {/* Titre de la section devenu bouton */}
      <motion.button
        onClick={() => {
          if (section.onClick) {
            section.onClick();
          }
        }}
        className="w-full text-left mb-6 font-mono relative group/title cursor-pointer hover:bg-white/5 rounded-lg px-3 py-2 transition-all duration-300 border border-transparent hover:border-cyan-400/20" // ← CLASSES AJOUTÉES
        whileHover={{ x: 5 }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <div className="flex items-center">
          <span className="text-cyan-400 mr-2">$ {section.label}</span>
          
          <motion.span
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="ml-2 text-green-400"
            transition={{ duration: 0.3 }}
          >
            _
          </motion.span>
          {/* Indicateur que c'est cliquable */}
          {section.onClick && (
            <motion.span
              className="ml-2 text-cyan-400 opacity-0 group-hover/title:opacity-100"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
            >
              [→]
            </motion.span>
          )}
        </div>
      </motion.button>

      {/* Liens style terminal */}
      <ul className="space-y-2 relative">
        {section.links.map((link, linkIndex) => (
          <motion.li 
            key={linkIndex}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: index * 0.15 + linkIndex * 0.1 + 0.6,
              duration: 0.4 
            }}
          >
            <motion.button
              whileHover={{ 
                x: 8,
                backgroundColor: `${section.textColor}15`
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                link.onClick();
                onLinkClick();
              }}
              className="w-full text-left p-3 rounded-lg transition-all duration-300 group/link font-mono text-sm border border-transparent hover:border-cyan-400/20"
              style={{ color: section.textColor }}
            >
              <span className="flex items-center">
                <motion.span 
                  className="text-cyan-400 mr-3"
                  animate={{ opacity: isHovered ? 1 : 0.5 }}
                  transition={{ duration: 0.2 }}
                >
                  {">"}
                </motion.span>
                <span className="text-gray-300 group-hover/link:text-white transition-colors">
                  {link.label}
                </span>
                <motion.span
                  className="ml-auto text-green-400 opacity-0 group-hover/link:opacity-100"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  [↗]
                </motion.span>
              </span>
            </motion.button>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};
export default Navbar;