import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://localhost:7036/api/Product/all");
        setProducts(response.data);
      } catch (error) {
        console.error("Ürünleri getirirken hata:", error.message);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Ürün Listesi</h2>

      {products.length === 0 ? (
        <p>Ürün bulunamadı.</p>
      ) : (

        <ul>
          {products.map((product, index) => (
            <li key={index}>
              <strong>{product.name}</strong> - {product.price}₺ - {product.color}
            </li>
          ))}
        </ul>
      )}

      <button onClick={() => window.location.reload()}>Yenile</button>
    </div>
  );
}

export default ProductList;
