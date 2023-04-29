import { Link, useParams } from 'react-router-dom';
import products from './products.json';
import './Brands.css'
import { ProductViewer } from './Product';
import { productTypeToHebrew } from './translation';

export function ProductType(){

    const types = new Set(products.flatMap(p => p.product_type).filter(n => n?.length > 0).sort());
    let { name } = useParams<"name">();
    
    if (!name || !types.has(name) || name.length === 0) {
    return <div className='brands-page'>
      <h2>סוג מוצר</h2>
      <div className='brands' style={{textAlign: 'right'}}>
        {Array.from(types).map(t => <Link to={`/product_type/${t}`}>{productTypeToHebrew[t] ?? t}</Link>)}
      </div>
    </div>
    }

    
    return <div className='brands-page'>
        <h2>{productTypeToHebrew[name] ?? name}</h2>
        <div className='productsWrapper'>
    {products.filter(p => name && Array.from(p.product_type)?.includes(name)).map(p=><ProductViewer product={p}></ProductViewer>)}
    </div>
    </div>

  }