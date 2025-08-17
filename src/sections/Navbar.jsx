import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => {} }) => (
  <ul className="nav-ul" >
    {navLinks.map((item) => (
      <li key={item.id} className="nav-li" >
        <a href={item.href} className="nav-li_a"  onClick={onClick}>
          {item.name}
        </a>
      </li>
    ))}
  </ul>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a href="https://www.linkedin.com/in/mayur-nikumbh" target='blank' className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
            CodeLander_07
          </a>

          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
            aria-label="Toggle menu">
            <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
          </button>

          <nav className="sm:flex hidden">
            <NavItems />
            <button className="ml-4 bg-neutral-800 text-white px-4 py-2 rounded hover:bg-neutral-700 transition-colors">
              <a href="https://drive.google.com/file/d/12vVUEdAcgZ2nk5AbcGKEKxCNEMS1fBnu/view?usp=sharing" target='blank'>Resume</a>
            </button>
          </nav>
            
        </div>
      </div>

      <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <nav className="p-5">
          <NavItems onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
