import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { navigation, profile } from '../data/siteContent.js';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Link className="brand" to="/#top" aria-label="Back to top" onClick={closeMenu}>
        <span className="brand-mark">VL</span>
        <span>{profile.name}</span>
      </Link>

      <nav className={`nav-links ${isOpen ? 'is-open' : ''}`} id="main-navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <Link key={item.href} to={item.href} onClick={closeMenu}>
            {item.label}
          </Link>
        ))}
      </nav>

      <button
        className="icon-button menu-button"
        type="button"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-controls="main-navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </header>
  );
}

export default Header;
