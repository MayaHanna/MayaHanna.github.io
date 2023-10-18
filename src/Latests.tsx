import products from "./products.json";
import "./Brands.css";
import { ProductViewer } from "./Product";

export function Latest() {
  return (
    <div className="brands-page">
      <h2>המלצות חדשות</h2>
      <div className="productsWrapper">
        {products.slice(0, 10).map((p) => (
          <ProductViewer product={p}></ProductViewer>
        ))}
      </div>
    </div>
  );
}
