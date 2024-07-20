const MalzemeItem = ({ id, name, value, label, onChange, checked }) => (
    <div className="malzeme-item">
        <input type="checkbox" id={id} name={name} value={value} onChange={onChange} checked={checked} />
        <label htmlFor={id}>{label}</label>
    </div>
);

const malzemeler = [
    { id: "malzeme-pepperoni", name: "malzemeler", value: "Pepperoni", label: "Pepperoni" },
    { id: "malzeme-tavuk-izgara", name: "malzemeler", value: "Tavuk Izgara", label: "Tavuk Izgara" },
    { id: "malzeme-misir", name: "malzemeler", value: "Mısır", label: "Mısır" },
    { id: "malzeme-sarimsak", name: "malzemeler", value: "Sarımsak", label: "Sarımsak" },
    { id: "malzeme-ananas", name: "malzemeler", value: "Ananas", label: "Ananas" },
    { id: "malzeme-sosis", name: "malzemeler", value: "Sosis", label: "Sosis" },
    { id: "malzeme-sogan", name: "malzemeler", value: "Soğan", label: "Soğan" },
    { id: "malzeme-sucuk", name: "malzemeler", value: "Sucuk", label: "Sucuk" },
    { id: "malzeme-biber", name: "malzemeler", value: "Biber", label: "Biber" },
    { id: "malzeme-kabak", name: "malzemeler", value: "Kabak", label: "Kabak" },
    { id: "malzeme-kanada-jambonu", name: "malzemeler", value: "Kanada Jambonu", label: "Kanada Jambonu" },
    { id: "malzeme-domates", name: "malzemeler", value: "Domates", label: "Domates" },
    { id: "malzeme-jalepeno", name: "malzemeler", value: "Jalepeno", label: "Jalepeno" },
    { id: "malzeme-salam", name: "malzemeler", value: "Salam", label: "Salam" },
    { id: "malzeme-zeytin", name: "malzemeler", value: "Zeytin", label: "Zeytin" }
];

const PizzaMalzemeleri = ({ handleChange, formData }) => (
    <div className="pizza-malzemeleri">
        <h2>Ek Malzemeler</h2>
        <p>En fazla 10 malzeme seçebilirsiniz. 5₺</p>
        {malzemeler.map((malzeme) => (
            <MalzemeItem
                key={malzeme.id}
                {...malzeme}
                onChange={handleChange}
                checked={formData.malzemeler.includes(malzeme.value)}
            />
        ))}
    </div>
);

export default PizzaMalzemeleri;
