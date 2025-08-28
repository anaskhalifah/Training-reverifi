import { useState } from "react";
import styles from "./Listing.module.css";
import {
    FaBed,
    FaBath,
    FaRulerCombined,
    FaHeart,
    FaRegCommentDots,
} from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { PiGarageLight } from "react-icons/pi";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIosNew } from "react-icons/md";

export default function Listing() {
    const cards = [
        { id: 1, img: "/src/assets/Listing/home1.jpg", price: "$450,000", days: 7 },
        { id: 2, img: "/src/assets/Listing/home2.jpg", price: "$510,000", days: 12 },
        { id: 3, img: "/src/assets/Listing/home3.jpg", price: "$600,000", days: 2 },
    ];



    return (
        <>
            <header>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
                    rel="stylesheet"
                />
            </header>

            <section className={styles.section}>
                <h2 className={styles.title}>Listings</h2>
                <div className={styles.sliderWrapper}>

                    <div className={styles.slider}>
                        <div className={styles.cardsContainer} >
                            <button className={styles.arrow} >
                                <MdOutlineArrowBackIosNew size={45} color="#b7cf53" />

                            </button>
                            {cards.map((card) => (
                                <div key={card.id} className={styles.card}>
                                    <img src={card.img} alt="Listing" className={styles.image} />

                                    <div className={styles.price}>
                                        <span>{card.price}</span>
                                        <span>
                                            <span className={styles.heartIcon}>
                                                <CiHeart size={24} />{" "}
                                            </span>
                                            <span className={styles.shareIcon}>
                                                <HiOutlineShare size={22} />
                                            </span>
                                        </span>
                                    </div>
                                    <div className={styles.days}>
                                        {card.days} days on Reverifi
                                    </div>
                                    <div className={styles.sale}>Sale</div>

                                    <div className={styles.stats}>
                                        <div>
                                            <span>5 </span>
                                            <span className={styles.cardIcons}>
                                                <FaBed size={30} />
                                            </span>
                                        </div>
                                        <div>
                                            <span>5</span>{" "}
                                            <span className={styles.cardIcons}>
                                                <FaBath size={25} />
                                            </span>
                                        </div>
                                        <div>
                                            <span>3 </span>
                                            <span className={styles.cardIcons}>
                                                <PiGarageLight size={30} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className={styles.listFooter}>
                                        <div className={styles.actions}>
                                            <span>
                                                <FaHeart size={25} color="#B7B7BA" /> 4
                                            </span>
                                            <span>
                                                <TbMessages size={25} color="#B7B7BA" /> 2 Views
                                            </span>
                                        </div>
                                        <button className={styles.viewBtn}>View Listing</button>
                                    </div>
                                </div>
                            ))}
                            <button className={styles.arrow}>
                                <MdOutlineArrowForwardIos size={45} color="#b7cf53" />

                            </button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
