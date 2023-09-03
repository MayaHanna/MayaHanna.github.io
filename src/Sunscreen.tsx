import { Link, useParams } from "react-router-dom";
import products from "./products.json";
import "./Sunscreen.css";
import { ProductViewer } from "./Product";
import { sunscreenTagsToHebrew } from "./translation";

export function Sunscreen() {
  const tags = new Set([
    "waterproof",
    "face",
    "body",
    "lips",
    "fragrance_free",
    "alcohol_free",
    "lightweight_lotion",
    "cream",
    "fluid",
    "gel",
    "mineral",
    "chemical_new_and_old",
    "new_chemical",
    "new_chemical_and_hybrid",
    "old_chemical_and_mineral",
    "new_chemical_and_mineral",
    "old_chemical",
    "tinted",
    "korean",
    "israeli",
    "australian",
    "american",
    "european",
    "for_babies",
    "glow",
    "natural",
    "matte",
  ]);
  let { tag } = useParams<"tag">();

  if (!tag || !tags.has(tag) || tags.size === 0) {
    return (
      <div className="brands-page">
        <h2>חיפוש קרם הגנה</h2>
        <div className="tags-wrapper">
          {Array.from(tags).map((tag) => (
            <Link to={`/sunscreen/${tag}`} className="spf-tag-link">
              {sunscreenTagsToHebrew[tag]}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="brands-page">
      <h2>{sunscreenTagsToHebrew[tag]}</h2>
      <div className="productsWrapper">
        {products
          .filter((p) => p?.spf_tags?.includes(tag ?? ""))
          .map((p) => (
            <ProductViewer product={p} />
          ))}
      </div>
    </div>
  );
}
