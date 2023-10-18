import { Link } from "react-router-dom";
import "./SearchProducts.css";

export function SearchProducts() {
  return (
    <div className="search-products-page">
      <h1>חיפוש המלצות</h1>
      <div className="categories">
        <Link className="cat-link" to="/brands">
          לפי מותג
        </Link>
        <Link className="cat-link" to="/stores">
          לפי אתר
        </Link>
        <Link className="cat-link" to="/product_type">
          לפי סוג מוצר
        </Link>
        <Link className="cat-link" to="/skin_problem">
          לפי בעיית עור
        </Link>
        <Link className="cat-link" to="/skin_type">
          לפי סוג עור
        </Link>
        <Link className="cat-link" to="/sunscreen">
          חיפוש קרם הגנה
        </Link>
        <Link className="cat-link" to="/latest">
          המלצות חדשות
        </Link>
      </div>
    </div>
  );
}
