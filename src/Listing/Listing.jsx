import { useState } from "react";
import styles from "./Listing.module.css";
import { FaBed, FaBath, FaRulerCombined, FaHeart, FaRegCommentDots } from "react-icons/fa";

export default function Listing() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    { id: 1, img: "/src/assets/listing1.jpg", price: "$450,000", days: 7 },
    { id: 2, img: "/src/assets/listing2.jpg", price: "$510,000", days: 12 },
    { id: 3, img: "/src/assets/listing3.jpg", price: "$600,000", days: 2 },

  ];

  const next = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Featured Listings</h2>
      <div className={styles.sliderWrapper}>
        <button className={styles.arrow} onClick={prev} disabled={currentIndex === 0}>
          ◀
        </button>
        <div className={styles.slider}>
          <div
            className={styles.cardsContainer}
            style={{ transform: `translateX(-${currentIndex * (392 + 20)}px)` }}
          >
            {cards.map((card) => (
              <div key={card.id} className={styles.card}>
                <img src={card.img} alt="Listing" className={styles.image} />

                <div className={styles.price}>{card.price}</div>
                <div className={styles.days}>{card.days} days on Reverifi</div>
                <div className={styles.sale}>Sale</div>

                <div className={styles.stats}>
                  <span><FaBed /> 3</span>
                  <span><FaBath /> 2</span>
                  <span><FaRulerCombined /> 1200 sqft</span>
                </div>

                <div className={styles.listFooter}>
                  <div className={styles.actions}>
                    <span><FaHeart /> 4</span>
                    <span><FaRegCommentDots /> 2</span>
                  </div>
                  <button className={styles.viewBtn}>View Listing</button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className={styles.arrow}
          onClick={next}
          disabled={currentIndex >= cards.length - 3}
        >
          ▶
        </button>
      </div>
    </section>
  );
}
