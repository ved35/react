import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

function ProductDetail() {

const param =useParams();
const [details , setDetail] = useState({})

const {state} = useLocation()

useEffect(() => {
  setDetail(state)
  // fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${param.id}`).then((res) => res.json()).then((data)=>{
  //   setDetail(data.drinks[0]);
  // },[])
})
console.log(details);
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={details.strDrinkThumb} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{details.strDrink}</h5>
        <p className="card-text">{details.strInstructions}</p>
        <Link to='/Products' className="btn btn-primary">Back</Link>
      </div>
    </div>

  )
}

export default ProductDetail