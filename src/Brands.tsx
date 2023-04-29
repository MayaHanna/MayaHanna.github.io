import { Link, useParams } from 'react-router-dom';
import products from './products.json';
import './Brands.css'
import { ProductViewer } from './Product';

export function Brands(){

    const brands = new Set(products.map(p => p.brand).filter(n => n?.length > 0).sort());
    let { name } = useParams<"name">();
    
    if (!name || !brands.has(name) || name.length === 0) {
    return <div className='brands-page'>
      <h2>מותגים</h2>
      <div className='brands'>
        {Array.from(brands).map(brand => <Link to={`/brands/${brand}`}>{brand}</Link>)}
      </div>
    </div>
    }

    
    return <div className='brands-page'>
        <h2>{name}</h2>
        <div className='productsWrapper'>
    {products.filter(p => p.brand === name).map(p=><ProductViewer product={p}/>)}
    </div>
    </div>

  }