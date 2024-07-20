import { Link } from "react-router-dom/cjs/react-router-dom.min";

function MainPage() {
    return (
        <>
            <section>
                <div className="main-page">
                    <h1>KOD ACIKTIRIR</h1>
                    <h1>PİZZA, DOYURUR</h1>
                    <Link to="/orderpage">
                        <button className="aciktim-butonu">ACIKTIM</button>
                    </Link>
                </div>
                <div className="main-container">
                    <div className="logos">
                        <nav>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/1.svg" />YENİ! Kore</Link>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/2.svg" />Pizza</Link>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/3.svg" />Burger</Link>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/4.svg" />Kızartmalar</Link>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/5.svg" />Fast Food</Link>
                            <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/6.svg" />Gazlı İçecek</Link>
                        </nav>
                    </div>
                    <div className="contents">
                        <div className="resimler">
                            <div className="card-1">
                                <img src="../Assets/mile2-aseets/cta/kart-1.png" />
                                <div className="overlay">
                                    <h3>Özel Lezzetus</h3>
                                    <p>Position: Absolute Acı Burger</p>
                                    <button>Sipariş Ver</button>
                                </div>
                            </div>
                            <div className="right-cards">
                                <div className="card-2">
                                    <img src="../Assets/mile2-aseets/cta/kart-2.png" />
                                    <div className="overlay">
                                        <h3>Hackathlon Buger Menü</h3>
                                        <button>Sipariş Ver</button>
                                    </div>
                                </div>
                                <div className="card-3">
                                    <img src="../Assets/mile2-aseets/cta/kart-3.png" />
                                    <div className="overlay">
                                        <h3>Çoooook <span>hızlı npm gibi kurye</span></h3>
                                        <button>Sipariş Ver</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="menuler">
                            <p>en çok paketlenen menüler</p>
                            <p>Acıktıran Kodlara Doyuran Lezzetler</p>
                            <div className="logos-2">
                                <nav>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/1.svg" />Ramen</Link>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/2.svg" />Pizza</Link>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/3.svg" />Burger</Link>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/4.svg" />French Fries</Link>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/5.svg" />Fast Food</Link>
                                    <Link to="/orderpage"><img src="../Assets/mile2-aseets/icons/6.svg" />Soft Drinks</Link>
                                </nav>
                            </div>
                            <div className="urunler">
                                <div className="pizza-card">
                                    <img src="../Assets/mile2-aseets/pictures/food-1.png" alt="Terminal Pizza" />
                                    <h3>Terminal Pizza</h3>
                                    <div className="pizza-details">
                                        <span>4.9</span>
                                        <span>(200 yorum)</span>
                                        <span>60₺</span>
                                    </div>
                                </div>
                                <div className="pizza-card">
                                    <img src="../Assets/mile2-aseets/pictures/food-2.png" alt="Position Absolute Acı Pizza" />
                                    <h3>Position Absolute Acı Pizza</h3>
                                    <div className="pizza-details">
                                        <span>4.9</span>
                                        <span>(200 yorum)</span>
                                        <span>60₺</span>
                                    </div>
                                </div>
                                <div className="pizza-card">
                                    <img src="../Assets/mile2-aseets/pictures/food-3.png" alt="useEffect Tavuklu Burger" />
                                    <h3>useEffect Tavuklu Burger</h3>
                                    <div className="pizza-details">
                                        <span>4.9</span>
                                        <span>(200 yorum)</span>
                                        <span>60₺</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MainPage;
