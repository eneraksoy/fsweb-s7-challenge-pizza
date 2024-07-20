import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="../Assets/mile2-aseets/footer/logo-footer.svg" />
                    <address>
                        <p>                    <img src="../Assets/mile2-aseets/footer/icons/icon-1.png" />
                            34 Landonotberry Road,</p>
                        <p>İstanbul, Türkiye</p>
                        <p>                    <img src="../Assets/mile2-aseets/footer/icons/icon-2.png" />
                            aciktim@teknolojikyemekler.com</p>
                        <p>                    <img src="../Assets/mile2-aseets/footer/icons/icon-3.png" />
                            +90 216 123 45 67</p>
                    </address>
                </div>
                <div className="footer-section">
                    <h4>Hot Menu</h4>
                    <ul>
                        <li>Terminal Pizza</li>
                        <li>5 Kişilik Hackathon Pizza</li>
                        <li>useEffect Tavuklu Pizza</li>
                        <li>Beyaz Console Frosty</li>
                        <li>Tester Gecidi Mutlu Burger</li>
                        <li>Position Absolute Acı Burger</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Instagram</h4>
                    <div className="instagram-images">
                        <img src="../Assets/mile2-aseets/footer/insta/li-0.png" />
                        <img src="../Assets/mile2-aseets/footer/insta/li-1.png" />
                        <img src="../Assets/mile2-aseets/footer/insta/li-2.png" />
                        <img src="../Assets/mile2-aseets/footer/insta/li-3.png" />
                        <img src="../Assets/mile2-aseets/footer/insta/li-4.png" />
                        <img src="../Assets/mile2-aseets/footer/insta/li-5.png" />

                    </div>
                </div>
                <div className="footer-bottom">
                    <p>© 2023 Teknolojik Yemekler.</p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;
