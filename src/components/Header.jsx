import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navigation } from '../data/siteContent.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Back to top">
        <span className="brand-mark">AI</span>
        <span>Portfolio</span>
      </a>

      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} aria-label="Main navigation">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>

      <button
        className="icon-button menu-button"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export default Header;
