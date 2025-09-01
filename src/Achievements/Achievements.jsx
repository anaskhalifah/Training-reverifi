import styles from "./Achievements.module.css";
import {img1,img2,img3,badge,pointsIcon} from '/src/assets/Achievements/index';
const cards = [
    {
        id: 1,
        image: img1,
        title: "Card Title 1",
        date: "Jan 12, 2025",
    },
    {
        id: 2,
        image: img2,
        title: "Card Title 2",
        date: "Feb 3, 2025",
    },
    {
        id: 3,
        image: img3,
        title: "Card Title 3",
        date: "Mar 8, 2025",
    },
    {
        id: 4,
        image: img1,
        title: "Card Title 4",
        date: "Apr 21, 2025",
    },
];

export default function Achievements() {
    return (
        <div className={styles.AchievementsSection}>
            <header><link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" /></header>

            <div className={styles.headerOfAchievements}>
                <h1 className={styles.achievementsTitle}>Achievements</h1>
                <div className={styles.achievementAndBadgeContainer}>
                    <div className={styles.pointsElement}>
                        <img src={pointsIcon} />
                        <span>3300 Points</span>
                    </div>
                    <div className={styles.badgeElement}>
                        <img src={badge} />
                        <span>8 Badges</span>
                    </div>
                </div>
            </div>
            <section className={styles.cardGrid}>
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <img src={card.image} alt={card.title} className={styles.cardImg} />
                        <div className={styles.cardContent}>
                            <h4 className={styles.cardTitle}>{card.title}</h4>
                            <p className={styles.cardDate}>{card.date}</p>
                        </div>
                    </div>
                ))}
            </section>
        </div>
    );
}
