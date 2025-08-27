import styles from "./Footer.module.css";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaTwitter,FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <>
          <header><link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" /></header>

        <footer className={styles.footer}>
            <div className={styles.socialFooter}>
                <span className={styles.instagramIcon}><FaInstagram size={25} color="white" /></span>
                <span className={styles.linkedinIcon}><BiLogoLinkedin size={23} color="white" /></span>
                <span className={styles.twitterIcon}><FaTwitter size={23} color="white" /></span>

            </div>
            <div className={styles.footerContainer}>

                {/* Column 1 */}
                <div className={styles.logo}>
                    <h1>reverifi</h1>
                </div>

                {/* Column 2 */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Company</h3>
                    <ul>
                        <li><a href="#">FAQs</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">How we work</a></li>
                        <li><a href="#">Closed Deals</a></li>

                    </ul>
                </div>

                {/* Column 3 */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Contact</h3>
                    <ul>
                        <li><a href="#">support@reverifi.com</a></li>
                        <li><a href="#">sales@reverifi.com</a></li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className={styles.column}>
                    <h3 className={styles.title}>Subscribe to our newsletter</h3>
                    {/* <ul className={styles.socials}>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">YouTube</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul> */}
                    <div className={styles.newsletter}>
                        <input placeholder="Enter email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>Copyright © {new Date().getFullYear()} reverifi. All rights reserved.</p>
            </div>
        </footer></>
    );
}
