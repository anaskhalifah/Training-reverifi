import { TfiBell } from "react-icons/tfi";
import { IoPersonSharp } from "react-icons/io5";
import { FaChevronDown, FaBars } from "react-icons/fa"; 
import { useState } from "react";
import styles from "./Header.module.css";
import { PiList } from "react-icons/pi";

export default function Header() {
    const [dropDownOpen, setdropDownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <header>
            <div className={styles.headerContainer}>
                
                <button 
                    className={styles.hamburger} 
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <PiList size={31} color="white" />
                </button>

                <nav className={styles.navLeft}>
                    <a href="#">Buy</a>
                    <a href="#">Rent</a>
                    <a href="#">Sell</a>
                    <a href="#">Knowledge Center</a>
                </nav>

                <h1 className={styles.logo}>reverifi</h1>

                <div className={styles.navRight}>
                    <a href="#">RE PROS</a>
                    <a href="#">Events</a>
                    <a href="#">Leaderboard</a>
                    <div className={styles.notification}>
                        <TfiBell size={30} color="white" />
                    </div>
                    <div className={styles.user}>
                        <IoPersonSharp size={31} />
                        <span>Jacob Jones</span>
                        <div className={styles.dropdown}>
                            <button
                                onClick={() => setdropDownOpen(!dropDownOpen)}
                                className={`${styles.dropdownBtn} ${dropDownOpen ? "dropDownOpen" : ""}`}
                            >
                                <FaChevronDown className={styles.icon} color="white" />
                            </button>

                            {dropDownOpen && (
                                <div className={styles.dropdownMenu}>
                                    <ul>
                                        <li>Option 1</li>
                                        <li>Option 2</li>
                                        <li>Option 3</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile dropdown menu */}
            {mobileOpen && (
                <div className={styles.mobileMenu}>
                    <a href="#">Buy</a>
                    <a href="#">Rent</a>
                    <a href="#">Sell</a>
                    <a href="#">Knowledge Center</a>
                    <a href="#">RE PROS</a>
                    <a href="#">Events</a>
                    <a href="#">Leaderboard</a>
                </div>
            )}
        </header>
    );
}
