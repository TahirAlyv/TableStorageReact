import { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    color: "",
    storePartitionKey: "",
    storeKey: "",
    stock: "",
  });

  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await axios.get("https://localhost:7036/api/Store/all");
        setStores(res.data);
      } catch (err) {
        console.error("Stores could not be obtained:", err.message);
      }
    };

    fetchStores();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.storePartitionKey || !form.storeKey) {
        alert("Please select a store.");
        return;
      }
    
    console.log("Ürün Gönderildi:", form);

    try {
      const res = await axios.post("https://localhost:7036/api/Product/products", form);
      console.log("Successfully sent:", res.data);

      setForm({
        name: "",
        price: "",
        quantity: "",
        color: "",
        storePartitionKey: "",
        storeKey: "",
      });
    } catch (err) {
      console.error("Sending error:", err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Ürün Oluştur</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      /><br />

      <input
        type="text"
        name="description"
        placeholder="description"
        value={form.Description}
        onChange={handleChange}
      /><br />

      <input
        type="text"
        name="price"
        placeholder="price"
        value={form.Price}
        onChange={handleChange}
      /><br />

      <input
        type="text"
        name="color"
        placeholder="color"
        value={form.color}
        onChange={handleChange}
      /><br />

        <input
        type="text"
        name="stock"
        placeholder="stock"
        value={form.Stock}
        onChange={handleChange}
        /><br />

      <label>Mağaza Seç:</label><br />
      <select
        name="storeKey"
        value={form.storeKey}
        onChange={(e) => {
          const selected = stores.find(s => s.rowKey === e.target.value);
          if (selected) {
            setForm(prev => ({
              ...prev,
              storeKey: selected.rowKey,
              storePartitionKey: selected.partitionKey,
            }));
          }
        }}
      >
        <option value="">Bir mağaza seçin</option>
        {stores.map(store => (
          <option key={store.rowKey} value={store.rowKey}>
            {store.countryName} - {store.cityName}
          </option>
        ))}
      </select><br /><br />

      <input
        type="hidden"
        name="storePartitionKey"
        placeholder="Store PartitionKey"
        value={form.storePartitionKey}
        readOnly
      /><br />

      <input 
        type="hidden"
        name="storeKey"
        placeholder="Store RowKey"
        value={form.storeKey}
        readOnly
      /><br />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default Product;
