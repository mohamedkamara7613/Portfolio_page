import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaEnvelope,
  FaGlobe,
  FaDiscord,
  FaWhatsapp,
  FaYoutube 
} from 'react-icons/fa';

const iconMap = {
  github: FaGithub,
  linkedin: FaLinkedin, 
  twitter: FaTwitter,
  envelope: FaEnvelope,
  globe: FaGlobe,
  discord: FaDiscord,
  whatsapp: FaWhatsapp,
  youtube: FaYoutube
};

export const ContactIcon = ({ name, className = "w-6 h-6" }) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <FaGlobe className={className} />;
  }
  
  return <IconComponent className={className} />;
};