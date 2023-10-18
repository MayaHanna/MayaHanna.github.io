import React from "react";
import "./App.css";
import {
  HashRouter as Router,
  HashRouter,
  Route,
  Routes,
  Link,
} from "react-router-dom";
import { SearchProducts } from "./SearchProducts";
import { Brands } from "./Brands";
import { Stores } from "./Stores";
import { SkinProblem } from "./SkinProblem";
import { ProductType } from "./ProductType";
import { SkinType } from "./SkinType";
import { Sunscreen } from "./Sunscreen";
import { Latest } from "./Latests";

function Home() {
  return (
    <div>
      {/* <img src="logo.jpg" className='logo'/>
      <p className='title'>Reviews By Maya</p> */}
      <div className="links">
        <Link to="/products" className="link">
          חיפוש המלצות 🔎
        </Link>
        <a
          href="https://il.iherb.com/ugc/wishlist?id=7f10160d-83a1-4e80-b995-c9f80ed7adb3&rcode=BGG7944&utm_medium=appshare"
          className="link"
        >
          רשימת ההמלצות שלי בiHerb ❤️‍🔥
        </a>
        <a href="https://wa.me/message/PSFPDRJX5CLXP1" className="link">
          שירות יעוץ ובניית שגרת טיפוח אישית 🧴 - סגור כעת
        </a>
        <a
          href="https://chat.whatsapp.com/DKAUWvQeXNbITi3STqkoAz"
          className="link"
        >
          התראות על חזרה למלאי 🛎️
        </a>
        <a
          href="https://chat.whatsapp.com/JdpjksFloHg8YNXD63lPAm"
          className="link"
        >
          קבוצת הווצאפ של העמוד 💬
        </a>

        <a
          href="https://il.iherb.com/ugc/wishlist?id=7f10160d-83a1-4e80-b995-c9f80ed7adb3&rcode=BGG7944&utm_medium=appshare"
          className="link"
        >
          קוד הנחה באייהרב- BGG7944 🛒
        </a>
        <a
          href="https://www.yesstyle.com/en/home.html?rco=YESMAYA23&utm_term=YESMAYA23&utm_medium=Influencer&utm_source=dynamic&mcg=influencer"
          className="link"
        >
          קוד הנחה ביס סטייל- YESMAYA23 🛒
        </a>
        <a href="https://iconix.co.il/mayahanna" className="link">
          קוד הנחה באייקוניקס- MAYA 🛒
        </a>
        <a
          href="https://www.awin1.com/cread.php?awinmid=22773&awinaffid=1166354&ued=https%3A%2F%2Fwww.sephora.co.uk%2F"
          className="link"
        >
          קוד הנחה בספורה בריטניה- MAYASPH 🛒
        </a>
        <a href="https://www.kamedis.co.il/" className="link">
          קוד הנחה בקמדיס- MAYA10 🛒
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <img src="logo.jpg" className="logo" />
      <p className="title">Reviews By Maya</p>

      <Routes>
        <Route index element={<Home />} />
        <Route path="/products" element={<SearchProducts />} />
        <Route path="/brands/:name?" element={<Brands />} />
        <Route path="/stores/:name?" element={<Stores />} />
        <Route path="/skin_problem/:name?" element={<SkinProblem />} />
        <Route path="/product_type/:name?" element={<ProductType />} />
        <Route path="/skin_type/:name?" element={<SkinType />} />
        <Route path="/sunscreen/:tag?" element={<Sunscreen />} />
        <Route path="/latest" element={<Latest />} />
      </Routes>
    </div>
  );
}

export default App;
