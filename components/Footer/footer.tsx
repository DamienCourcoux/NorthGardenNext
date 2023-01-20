import styles from './footer.module.css';

import { FaFacebook, FaTwitter, FaInstagram, FaDiscord } from 'react-icons/fa';

export default function Footer() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();

  return (
    <footer className={styles.footer}>
      <nav className={styles.resaux}>
        <ul className="reseauxList">
          <li className="reseauxListItem"><a href="https://www.facebook.com/North.Garden.Paysage" target="_blank" rel="noopener noreferrer" className="facebook reseauxListItemA" title='Facebook'><FaFacebook /></a></li>
          <li className="reseauxListItem"><a href="https://twitter.com/North__Garden" target="_blank" rel="noopener noreferrer" className="twitter reseauxListItemA" title='Twitter'><FaTwitter /></a></li>
          <li className="reseauxListItem"><a href="https://www.instagram.com/north___garden/" target="_blank" rel="noopener noreferrer" className="instagram reseauxListItemA" title='Instagram'><FaInstagram /></a></li>
          <li className="reseauxListItem"><a href="https://discord.gg/cnDY943mEZ" target="_blank" rel="noopener noreferrer" className="discord reseauxListItemA" title='Discord'><FaDiscord /></a></li>
        </ul>
        <p className={styles.copyright}>Copyright © {year} <span className="copyright__title northgarden">North Garden</span>. Tous droits réservés.</p>
        {/* <p className={styles.damiencourcoux}>Site réalisé par <a href="https://www.damiencourcoux.me" target="_blank" rel="noopener noreferrer" className={styles.damiencourcouxLink} title="Développeur Damien Courcoux">Damien Courcoux</a></p> */}
        <p className={styles.damiencourcoux}>Site réalisé par <span className={styles.damiencourcouxLink} title="Développeur Damien Courcoux">Damien Courcoux</span></p>
      </nav>
    </footer>
  );
}