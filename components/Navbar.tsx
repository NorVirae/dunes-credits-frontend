// components/Navbar.tsx
import Link from 'next/link';
import Logo from './Logo';
import { FaDashcube } from 'react-icons/fa';
import { CiLogin } from 'react-icons/ci';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link legacyBehavior href="/">

            <a className="text-white text-lg font-bold flex justify-center items-center"><Logo />CrEdItS SpRiNt</a>

          </Link>
        </div>
        <div className="flex space-x-4">
          <Link legacyBehavior href="/">
            <a className="text-white font-bold flex justify-center items-center gap-1"><FaDashcube /> Dashboard</a>
          </Link>
          <Link legacyBehavior href="/about">
            <a className="text-white font-bold flex justify-center items-center gap-1"><CiLogin /> Login</a>
          </Link>
          {/* Add more navigation links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
