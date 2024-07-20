import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
import PizzaMalzemeleri from "./PizzaMalzemeleri";
import "./PizzaMalzemeleri.css";
import SiparisOzeti from "./SiparisOzeti";
import "./SiparisOzeti.css";


const OrderPage = () => {
    const [formData, setFormData] = useState({
        isim: "",
        boyut: "",
        hamurKalinligi: "",
        malzemeler: [],
        not: "",
        siparisSayisi: 1,
    });
    const [toplamFiyat, setToplamFiyat] = useState(85);
    const [secimFiyat, setSecimFiyat] = useState(0);
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");


    const history = useHistory();

    const calculateSecimFiyat = (malzemeler) => {
        return malzemeler.length * 5;
    };

    const calculateTotalPrice = (malzemeler, siparisSayisi) => {
        const basePizzaCost = 85;
        const extraCost = malzemeler.length * 5;
        return (basePizzaCost + extraCost) * siparisSayisi;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === "checkbox") {
            const newMalzemeler = checked
                ? [...formData.malzemeler, value]
                : formData.malzemeler.filter((malzeme) => malzeme !== value);

            setFormData((prevData) => ({
                ...prevData,
                malzemeler: newMalzemeler
            }));

            const newSecimFiyat = calculateSecimFiyat(newMalzemeler);
            setSecimFiyat(newSecimFiyat);
            setToplamFiyat(calculateTotalPrice(newMalzemeler, formData.siparisSayisi));
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSiparisSayisiDegis = (isIncrease) => {
        const newSiparisSayisi = isIncrease ? formData.siparisSayisi + 1 : Math.max(1, formData.siparisSayisi - 1);

        setFormData((prevData) => ({
            ...prevData,
            siparisSayisi: newSiparisSayisi
        }));

        setToplamFiyat(calculateTotalPrice(formData.malzemeler, newSiparisSayisi));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.malzemeler.length < 4 || formData.malzemeler.length > 10) {
            setMessage("Lütfen en az 4, en fazla 10 malzeme seçin.");
            setMessageType("error");
            return;
        }

        if (formData.isim.length < 3) {
            setMessage("İsim en az 3 karakter olmalıdır.");
            setMessageType("error");
            return;
        }

        if (!formData.boyut) {
            setMessage("Lütfen bir boyut seçin.");
            setMessageType("error");
            return;
        }

        if (!formData.hamurKalinligi) {
            setMessage("Lütfen hamur kalınlığı seçin.");
            setMessageType("error");
            return;
        }

        axios.post("https://reqres.in/api/pizza", formData)
            .then(response => {
                console.log("API Response:", response.data);
                history.push("/successpage", { orderData: formData, toplamFiyat, secimFiyat });
            })
            .catch(error => {
                console.error("API Error:", error);
                setMessage("Sipariş verilirken bir hata oluştu.");
                setMessageType("error");
            });
    };


    return (
        <>
            <div className="order-page">
                <div className="order-main">
                    <img src="../Assets/mile2-aseets/pictures/form-banner.png" alt="Form Banner" />
                    <p>Anasayfa-<span>Sipariş Oluştur</span></p>
                    <h2>Position Absolute Acı Pizza</h2>
                    <h3>85₺ <span>4.9 (200)</span></h3>
                    <p>Frontent Dev olarak hala position:absolute kullanıyorsan bu çok acı pizza tam sana göre. Pizza, domates, peynir ve genellikle çeşitli diğer malzemelerle kaplanmış, daha sonra geleneksel olarak odun ateşinde bir fırında yüksek sıcaklıkta pişirilen, genellikle yuvarlak, düzleştirilmiş mayalı buğday bazlı hamurdan oluşan İtalyan kökenli lezzetli bir yemektir. Küçük bir pizzaya bazen pizzetta denir.</p>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="boyut-hamur">
                        <div className="boyut">
                            <h2>Boyut Seç <span>*</span></h2>
                            <input type="radio" id="boyut-kucuk" name="boyut" value="Küçük" onChange={handleChange} />
                            <label htmlFor="boyut-kucuk">S</label>
                            <input type="radio" id="boyut-orta" name="boyut" value="Orta" onChange={handleChange} />
                            <label htmlFor="boyut-orta">M</label>
                            <input type="radio" id="boyut-buyuk" name="boyut" value="Büyük" onChange={handleChange} />
                            <label htmlFor="boyut-buyuk">L</label>
                        </div>
                        <div className="hamur">
                            <h2>Hamur Seç <span>*</span></h2>
                            <select name="hamurKalinligi" onChange={handleChange}>
                                <option value="">- Hamur Kalınlığı Seç -</option>
                                <option value="İnce">İnce</option>
                                <option value="Standart">Standart</option>
                                <option value="Kalın">Kalın</option>
                            </select>
                        </div>
                    </div>

                    <PizzaMalzemeleri formData={formData} handleChange={handleChange} />

                    <div className="isim">
                        <label>İsim</label>
                        <input type="text" name="isim" id="isim" value={formData.isim} onChange={handleChange} required minLength="3" placeholder="İsminiz" />
                    </div>
                    <div className="siparis-notu">
                        <label htmlFor="not">Sipariş Notu</label>
                        <textarea name="not" id="not" cols="40" rows="4" value={formData.not} onChange={handleChange} placeholder="Siparişine eklemek istediğin bir not var mı?" />
                        <div className="siparis-sayaci">
                            <button type="button" onClick={() => handleSiparisSayisiDegis(false)}>-</button>
                            <span>{formData.siparisSayisi}</span>
                            <button type="button" onClick={() => handleSiparisSayisiDegis(true)}>+</button>
                        </div>
                        <SiparisOzeti toplamFiyat={toplamFiyat} secimFiyat={secimFiyat} handleSiparisSayisiDegis={handleSiparisSayisiDegis} formData={formData} handleSubmit={handleSubmit} />
                    </div>
                </form>
                {message && (
                    <div className={`message ${messageType}`}>
                        {message}
                    </div>
                )}
            </div>
        </>
    );
}

export default OrderPage;
