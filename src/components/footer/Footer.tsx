import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <nav>
          <div className={styles.menu}>
            <div className="column">
              <div className="group">Support</div>
              <a href="#">Help Center</a>
              <a href="#">AirCover</a>
              <a href="#">Anti-discrimination</a>
              <a href="#">Disability support</a>
              <a href="#">Cancellation options</a>
              <a href="#">Report neighborhood concern</a>
            </div>

            <div className="column">
              <div className="group">Hosting</div>
              <a href="#">Airbnb your home</a>
              <a href="#">AirCover for Hosts</a>
              <a href="#">Hosting resources</a>
              <a href="#">Community forum</a>
              <a href="#">Hosting responsibly</a>
              <a href="#">Airbnb-friendly apartments</a>
              <a href="#">Join a free Hosting class</a>
            </div>

            <div className="column">
              <div className="group">Airbnb</div>
              <a href="#">Newsroom</a>
              <a href="#">New features</a>
              <a href="#">Careers</a>
              <a href="#">Investors</a>
              <a href="#">Gift cards</a>
              <a href="#">Airbnb.org emergency stays</a>
            </div>
          </div>
        </nav>
      </div>

      <div className={styles.divider}></div>

      <div className="container">
        <div className={styles.kicker}>
          <div>
            <div>© 2024 Airbnb, Inc.</div>
            <span>·</span>
            <a href="#">Privacy</a>
            <span>·</span>
            <a href="#">Terms</a>
            <span>·</span>
            <a href="#">Sitemap</a>
            <span>·</span>
            <a href="#">Your Privacy Choices</a>
          </div>

          <div>
            <div>
              <svg
                width={15}
                height={15}
                fill="none"
                strokeWidth={1.5}
                viewBox="0 0 24 24"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>

              <a href="#">English (US)</a>
            </div>

            <div>
              <span>$</span>
              <a href="#">USD</a>
            </div>

            <div>
              <a href="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/560150d896feab12bba367c9378c98778ce2ada4754d9c6331bb446b845f3d6f?"
                  className="img"
                />
              </a>
              <a href="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1ca233e8a08fdad501d16e270b8b2aff31432c65dc74dc9fa5e7f4159ea962f?"
                  className="img"
                />
              </a>
              <a href="#">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9213a9b4f495efdab928a0e44135adb0d1f224cce4d67e621cc5109f2e83f27e?"
                  className="img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
