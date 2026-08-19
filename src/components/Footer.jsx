import { profile } from '../data/siteContent.js';

function Footer() {
  return (
    <footer className="footer">
      <p>{profile.name}</p>
      <p>{profile.title}</p>
    </footer>
  );
}

export default Footer;
