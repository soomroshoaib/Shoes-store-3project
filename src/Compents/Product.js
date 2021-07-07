import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
 import shoes from "./../shoes.json"

function Product() {
   console.log(shoes)
  // console.log(object.keys(shoes))
  return (
  <div style={{textAlign:'center'}}>
    <div style={{textAlign:'center'}}>
       <div>
      <h2 className="blue"> Welcom to Product</h2>
      </div>
       <div className="container">
       
          {Object.keys(shoes).map(keyName=>{
            const shoe = shoes[keyName];
            return(<Link key={keyName}
             className="link"
             to={`/Home/${keyName}`}> 
            <h2>{shoe.name}</h2>
            <img src={shoe.img} height={100} />
            
            </Link>)
          })}
      </div>
    </div>
  </div>
  )
}

export default Product
