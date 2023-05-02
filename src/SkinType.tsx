import { Link, useParams } from 'react-router-dom';
import products from './products.json';
import './Brands.css'
import { ProductViewer } from './Product';
import { skinProblemToHebrew, skinTypeToHebrew } from './translation';

export function SkinType(){

    const skin_types = new Set(products.flatMap(p => p.skin_types).filter(n => n?.length > 0).sort());
    let { name } = useParams<"name">();
    
    if (!name || !skin_types.has(name) || name.length === 0) {
    return <div className='brands-page'>
      <h2>סוגי עור</h2>
      <div className='brands' style={{textAlign: 'right'}}>
        {Array.from(skin_types).map(problem => <Link to={`/skin_type/${problem}`}>{skinTypeToHebrew[problem] ?? problem}</Link>)}
      </div>
    </div>
    }

    
    return <div className='brands-page'>
        <h2>{skinTypeToHebrew[name]}</h2>
        <p>שימו לב: המוצרים המופיעים כאן לא בהכרח מתאימים רק לסוג עור אחד ותלויים בעוד הרבה גורמים מלבד סוג העור (למשל- עונה, שגרת ערב/בוקר, שילובים עם מוצרים אחרים, ועוד).
        כמו כן, מוצרים שלא מופיעים כאן גם יכולים להיות מתאימים.
        המטרה של הרשימה היא רק לתת הכוונה כללית.</p>
        <div className='productsWrapper'>
        {products.filter(p => name && Array.from(p.skin_types)?.includes(name)).map(p=><ProductViewer product={p}/>)}
        </div>
    </div>

  }