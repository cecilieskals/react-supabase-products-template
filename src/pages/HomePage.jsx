import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

  // TODO (Trin 1): Gem env-værdier i variabler, fx:
  // const URL = import.meta.env.VITE_SUPABASE_URL;
  // const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;
const URL = import.meta.env.VITE_SUPABASE_URL;
const APIKEY = import.meta.env.VITE_SUPABASE_APIKEY;

console.log("VITE_SUPABASE_URL:", URL);
console.log("VITE_SUPABASE_APIKEY:", APIKEY);

export default function HomePage() {
  const [products, setProducts] = useState([]);

  // TODO (Trin 2): Implementer GET i HomePage med useEffect/useState og fetch.
  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(URL, {
        headers: {
          apikey: APIKEY,
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setProducts(data);
    }
    fetchProducts();
  }, []);

  return (
    <main className="app">
      <h1 className="page-title">All Products</h1>
      <p className="status-msg">
        TODO: Implement GET products with fetch and replace starter data.
      </p>
      <section className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
}
