import { TfiBell } from "react-icons/tfi";
import { IoPersonSharp } from "react-icons/io5";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"></link>
            <div className={styles.headerContainer}>
                <nav className={styles.navLeft}>
                    <a href="#">Buy</a>
                    <a href="#">Rent</a>
                    <a href="#">Sell</a>
                    <a href="#">Knowledge Center</a>

                </nav>

                <h1 className="logo">reverifi</h1>

                <div className={styles.navRight}>
                    <a href="#">RE PROS</a>
                    <a href="#">Events</a>
                    <a href="#">Leaderboard</a>
                    <div className={styles.notification}>
                        <TfiBell size={30} color="white" />
                    </div>
                    <div className={styles.user}>
                        <IoPersonSharp size={27} />
                        <span>Jacob Jones</span>
                        <div className={styles.dropdown}>
                            {/* Button */}
                            <button
                                onClick={() => setOpen(!open)}
                                className={`${styles.dropdownBtn} ${open ? "open" : ""}`}
                            >
                                <FaChevronDown className={styles.icon} color="white" />
                            </button>

                            {/* Dropdown menu */}
                            {open && (
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
        </header>);
}
