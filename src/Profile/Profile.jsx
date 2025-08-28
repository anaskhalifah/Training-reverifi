import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";
import styles from "./Profile.module.css";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";

export default function Profile() {
    return (<>
        <header><link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" /></header>
        <section className={styles.profileSection}>
            {/* Left Column */}
            <div className={styles.left}>
                <img
                    src="src/assets/JacobIMG.jpg"
                    alt="Profile"
                    className={styles.profileImg}
                />

                <div className={styles.socialActions}>
                    <button className={styles.contactBtn}>Contact</button>

                    <div className={styles.socials}>
                        <FaFacebook size={42} />
                        <span className={styles.youtubeIcon}><FaYoutube size={30} color="white"/></span>
                        <span className={styles.linkedinIcon}><BiLogoLinkedin size={30} color="white"/></span>

                    </div>
                </div>
            </div>
            {/* Right Column */}
            <div className={styles.right}>
                <h2 className={styles.name}>Jacob Jones <span className={styles.searchIcon}>
                    <img src="/src/assets/searchIcon.png" alt="" /></span>
                </h2>
                <p className={styles.subtitle}>Lender/Mortgage <div>NMLS   #068543894</div></p>

                {/* About */}
                <div className={styles.about}>
                    <h4>About</h4>
                    <p className={styles.aboutText}>
                        Lorem ipsum dolor sit amet consectetur. Rhoncus ultrices sed aliquam tristique orci
                        velit est tellus. Et sed enim ut at scelerisque. Tincidunt proin justo nisi a. Iaculis potenti sagittis in
                        tincidunt arcu diam nisl.
                    </p>
                </div>

                {/* Grid Info */}
                <div className={styles.infoGrid}>
                    <div>
                        <h4>Language</h4>
                        <p>English</p>
                    </div>
                    <div>
                        <h4>Service Area</h4>
                        <p>New York</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>(406) 555-0120</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>jacob.jones@example.com                    
                            <span className={styles.heartIcon}><CiHeart size={25} /> </span>
                             <span className={styles.shareIcon}><HiOutlineShare size={20}/></span>
                       
                        </p>
                    </div>

                </div>
            </div>
        </section>
    </>

    );
}
