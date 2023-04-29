import { Link, useParams } from 'react-router-dom';
import products from './products.json';
import './Brands.css'
import { ProductViewer } from './Product';

export function Stores(){

    const stores = new Set(products.flatMap(p => Object.keys(p.websites)));
    let { name } = useParams<"name">();
    
    if (!name || !stores.has(name) || name.length === 0) {
    return <div className='brands-page'>
      <h2>אתרים וחנויות</h2>
      <div className='brands'>
        {Array.from(stores).map(s => <Link to={`/stores/${s}`}>{s}</Link>)}
      </div>
    </div>
    }

    
    const store: string = name;
    return <div className='brands-page'>
        <h2>{name}</h2>
        <div className='productsWrapper'>
    {products.filter(p => !!Object.entries(p.websites).find(([k,v])=>k === store && v?.length >0)).map(p=><ProductViewer product={p}/>)}
    </div>
    </div>

  }