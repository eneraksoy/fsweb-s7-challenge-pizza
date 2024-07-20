import React from "react";

const SiparisOzeti = ({ toplamFiyat = 0, secimFiyat = 0, handleSubmit }) => (
    <div className="siparis-bilgisi">
        <div className="siparis-toplami">
            <h2>Sipariş Toplamı</h2>
            <p>Seçimler <span>{secimFiyat}₺</span></p>
            <p>Toplam <span>{toplamFiyat}₺</span></p>
        </div>
        <div className="siparis-ver">
            <button type="submit" onClick={handleSubmit}>Sipariş Ver</button>
        </div>
    </div>
);

export default SiparisOzeti;
