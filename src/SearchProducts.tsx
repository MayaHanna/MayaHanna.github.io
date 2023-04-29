import './SearchProducts.css'

export function SearchProducts(){
    return <div className='search-products-page'>
      <h1>חיפוש המלצות</h1>
      <div className='categories'>
        <a className='cat-link' href="/brands">לפי מותג</a>
        <a className='cat-link'  href="/stores">לפי אתר</a>
        <a className='cat-link' href="/product_type">לפי סוג מוצר</a>
        <a className='cat-link' href='/skin_problem'>לפי בעיית עור</a>
      </div>
    </div>
  }