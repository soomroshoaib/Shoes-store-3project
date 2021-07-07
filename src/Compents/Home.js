import React from 'react'
import shoes from "./../shoes.json"
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'


function Home() {
  const { id } = useParams()
  const shoe = shoes[id];
  console.log(shoe)
  if (!shoe)
  return( <h1>Home page Not Found !</h1>)



  return (
    <div>
      <h1>home page </h1>
      <div className="link" style={{alignItems:'center',textAlign:'center'}}> 
            <h2>{shoe.name}</h2>
            <img src={shoe.img} height={200} />
            
            </div>
    </div>
  )
}

export default Home
