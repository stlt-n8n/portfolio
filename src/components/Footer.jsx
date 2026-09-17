import { useLanguage } from '../i18n/useLanguage.js';

function Footer() {
  const { content } = useLanguage();
  const { profile } = content;
  return (
    <footer className="footer">
      <p>{profile.name}</p>
      <p>{profile.title}</p>
    </footer>
  );
}

export default Footer;
