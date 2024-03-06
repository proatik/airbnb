import styles from "./Main.module.css";

const Main = () => {
  const items = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="container">
      <div className={styles.grid}>
        {items.map((item) => (
          <div key={item} className={styles.item}>
            <a href="#">
              <img loading="lazy" srcSet={`images/image-${item}.jpg`} />
              <button>
                <svg
                  width={24}
                  height={24}
                  stroke="#ffffff"
                  strokeWidth={1.8}
                  viewBox="0 0 24 24"
                  fill="rgba(0, 0, 0, 0.3)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </button>
              <div className={styles.vintage}></div>
              <div className={styles.info}>
                <div>Beat Atol, Maldives</div>
                <div>Bhimtal Lake</div>
                <div>Mar 1 - 6</div>
                <div>
                  <span>$55</span> night
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
