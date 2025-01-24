import { GitHub, Linkedin, Facebook } from 'react-feather';
import { PersonalInfo } from '../../data/PersonalInfo';

export default function SocialSidebar() {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 space-y-6 z-[100]">
      <a
        href={PersonalInfo.facebook}
        className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 border rounded-[10px] shadow-sm transition-colors"
        aria-label="Facebook"
      >
        <Facebook size={20} />
      </a>
      <a
        href={PersonalInfo.github}
        className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 border rounded-[10px] shadow-sm transition-colors"
        aria-label="GitHub"
      >
        <GitHub size={20} />
      </a>
      <a
        href={PersonalInfo.linkedin}
        className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800 border rounded-[10px] shadow-sm transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={20} />
      </a>
    </div>
  );
}
