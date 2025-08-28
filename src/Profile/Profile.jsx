import { useState } from "react";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import styles from "./Profile.module.css";
import { CiHeart } from "react-icons/ci";
import { HiOutlineShare } from "react-icons/hi";
import { BiLogoLinkedin } from "react-icons/bi";
import { PiPhoneFill } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";

export default function Profile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <section className={styles.profileSection}>
                {/* Left Column */}
                <div className={styles.left}>
                    <img
                        src="src/assets/JacobIMG.jpg"
                        alt="Profile"
                        className={styles.profileImg}
                    />

                    <div className={styles.socialActions}>
                        <button className={styles.contactBtn} onClick={openModal}>
                            Contact
                        </button>

                        <div className={styles.socials}>
                            <span className={styles.facebookIcon}><FaFacebook size={42} /></span>
                            <span className={styles.youtubeIcon}><FaYoutube size={30} color="white" /></span>
                            <span className={styles.linkedinIcon}><BiLogoLinkedin size={30} color="white" /></span>
                            <span className={styles.phoneIcon}><PiPhoneFill size={30} color="white" /></span>
                            <span className={styles.instaIcon}><FaInstagram size={30} color="white" /></span>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className={styles.right}>
                    <h2 className={styles.name}>
                        Jacob Jones
                        <span className={styles.searchIcon}>
                            <img src="/src/assets/searchIcon.png" alt="" />
                        </span>
                    </h2>
                    <p className={styles.subtitle}>
                        Lender/Mortgage
                        <div>
                            <span className={styles.subtitleText}>NMLS #068543894</span>
                            <span className={styles.heartIconMobile}><CiHeart size={25} /></span>
                            <span className={styles.shareIconMobile}><HiOutlineShare size={20} /></span>
                        </div>
                    </p>

                    {/* About */}
                    <div className={styles.about}>
                        <h4>About</h4>
                        <p className={styles.aboutText}>
                            Lorem ipsum dolor sit amet consectetur. Rhoncus ultrices sed aliquam tristique orci
                            velit est tellus. Et sed enim ut at scelerisque. Tincidunt proin justo nisi a.
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
                            <p>
                                jacob.jones@example.com
                                <span className={styles.heartIcon}><CiHeart size={25} /></span>
                                <span className={styles.shareIcon}><HiOutlineShare size={20} /></span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Modal */}
            {isModalOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <div className={styles.modalHeader}>
                            <h3>Contact Jacob Jones</h3>
                            <button className={styles.closeBtn} onClick={closeModal}>
                                &times;
                            </button>
                        </div>

                        <form className={styles.contactForm}>
                            <label>Name</label>
                            <input type="text" />

                            <label>Phone Number</label>
                            <input type="tel" />

                            <label>Email</label>
                            <input type="email" />

                            <label>Message</label>
                            <textarea ></textarea>

                            <div className={styles.formFooter}>
                                <button type="submit" className={styles.submitBtn}>
                                    Contact
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}
