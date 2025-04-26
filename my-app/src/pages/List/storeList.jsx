import { useEffect, useState } from "react";
import axios from "axios";

function StoreList() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7036/api/Store/all");
        setStores(response.data);
      } catch (error) {
        console.error("Ürünleri getirirken hata:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ürün Listesi</h2>

      {stores.length === 0 ? (
        <p>Ürün bulunamadı.</p>
      ) : (

        <ul>
        {stores.map((store, index) => (
          <li key={index}>
            <strong>  {store.countryName}</strong> - {store.cityName} - {store.address}
          </li>
        ))}
      </ul>
      )}

      <button onClick={() => window.location.reload()}>Yenile</button>
    </div>
  );
}

export default StoreList;
