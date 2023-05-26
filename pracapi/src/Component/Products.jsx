import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { Wrapper } from '../App';

function Products() {

    const [drinks, setDrinks] = useState([]);
    const [isloading, setIsLoading] = useState(true);

    const { search } = useContext(Wrapper);

    console.log(search);

    useEffect(() => {
        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then((res) => res.json()).then((data) => {
            setDrinks(data.drinks);
            setIsLoading(false);
        })

    }, [search])

    const navigate = useNavigate()

    if (isloading) {
        return (
            <div class="spinner-border p-100" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        )
    }
    else {
        return (
            <>
                { drinks===null && <div className='container'>drinks is not found</div>}
                {   drinks &&
                    drinks.map((item) => {
                        const { strDrink, strInstructions, strDrinkThumb , idDrink} = item;
                        return (
                            <div className="container pb-3 " key={idDrink}>
                                <div className="card" style={{ width: '18rem' }}>
                                    <img src={strDrinkThumb} alt='' style={{ width: '' }} />
                                    <div className="card-body">
                                        <p>{strDrink}</p>
                                        <p className="text-truncate">description : {    }</p>
                                        {/* <Link to={`/Products/${idDrink}`} className="btn btn-primary">More details</Link> */}
                                        <button className='btn btn-primary' onClick={()=>navigate(`/Products/${idDrink}` , {state : item})}>More details</button>
                                    </div>
                                </div>
                            </div>  
                        )
                    })
                }
            </>
        )
    }
}

export default Products