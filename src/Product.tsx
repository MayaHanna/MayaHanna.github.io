
import { useEffect } from 'react';
import './Product.css'
import { InstagramEmbed } from 'react-social-media-embed';
import { productTypeToHebrew } from './translation';

class Product{
    "hebrew_name": string;
    "english_name":  string;
    "brand": string;
    "product_type": string[];
    "review":  string;
    "websites": { [key: string]: string | undefined }
    "sensitive": boolean;
    "skin_types": string[];
    "cruelty_free": boolean;
    "skin_problems": string[];
}

const websiteToColor :  { [key: string]: string | undefined }= {
    yesstyle: "#63c956",
    iherb: "#458500",
    amazon: "#febd69"
}

export function ProductViewer(props: {product: Product}){

    return <div className='product-viewer'>
        <p className='hebrew_name'>{props.product.hebrew_name}</p>
        <p className='english_name'>{props.product.english_name}</p>
        <p className='links-title'>קישורים לרכישה:</p>
        <div className='websites'>
            {Object.entries(props.product.websites).filter(([k,v])=> v && v?.length >0 ).map(([k,v])=>
            <a href={v} className="product-link" style={{backgroundColor: websiteToColor?.[k] ?? "black"}}>{k}</a>)}
        </div>

        <p className='brand-and-type'>
            מותג:
        <a  className='brand' href={`/brands/${props.product.brand}`}> {props.product.brand}</a>
                ,       סוג מוצר: 
        <a className='type'  href={`/product_type/${props.product.product_type}`}> {props.product.product_type.map(t => productTypeToHebrew[t] ?? t).join(", ")}</a>
        </p>
        
        <p>ללא אכזריות: {props.product.cruelty_free ? "כן 🐰" : "לא"}</p>
        <div style={{ display: 'flex', justifyContent: 'center', borderRadius: "15%"}}>
            <InstagramEmbed url={props.product.review} height="400px"/>
        </div>
    </div>

}