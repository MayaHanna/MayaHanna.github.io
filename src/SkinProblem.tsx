import { useParams } from 'react-router-dom';
import products from './products.json';
import './Brands.css'
import { ProductViewer } from './Product';
import { skinProblemToHebrew } from './translation';

export function SkinProblem(){

    const skin_problems = new Set(products.flatMap(p => p.skin_problems).filter(n => n?.length > 0).sort());
    let { name } = useParams<"name">();
    
    if (!name || !skin_problems.has(name) || name.length === 0) {
    return <div className='brands-page'>
      <h2>בעיות עור</h2>
      <div className='brands' style={{textAlign: 'right'}}>
        {Array.from(skin_problems).map(problem => <a href={`/skin_problem/${problem}`}>{skinProblemToHebrew[problem] ?? problem}</a>)}
      </div>
    </div>
    }

    
    return <div className='brands-page'>
        <h2>{skinProblemToHebrew[name]}</h2>
        <div className='productsWrapper'>
        {products.filter(p => name && Array.from(p.skin_problems)?.includes(name)).map(p=><ProductViewer product={p}/>)}
        </div>
    </div>

  }