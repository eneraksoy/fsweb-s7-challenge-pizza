import React from "react";
import { useLocation } from "react-router-dom";

const SuccessPage = () => {
    const location = useLocation();
    const { orderData, toplamFiyat, secimFiyat } = location.state || {};

    return (
        <div className="success-page">
            <h1>lezzetin yolda</h1>
            <h2>Siparişiniz Alındı!</h2>
            {orderData && (
                <div className="order-summary">
                    <h3>Position Absolute Acı Pizza</h3>
                    <p><strong>İsim:</strong> {orderData.isim}</p>
                    <p><strong>Boyut:</strong> {orderData.boyut}</p>
                    <p><strong>Hamur:</strong> {orderData.hamurKalinligi}</p>
                    <p><strong>Ek Malzemeler:</strong> {orderData.malzemeler.join(', ')}</p>
                    <p><strong>Notunuz:</strong> {orderData.not}</p>
                    <div className="siparis-toplami-sonuc">
                        <h3>Sipariş Toplamı</h3>
                        <p>Seçimler: {secimFiyat}₺</p>
                        <p>Toplam: {toplamFiyat}₺</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default SuccessPage;
