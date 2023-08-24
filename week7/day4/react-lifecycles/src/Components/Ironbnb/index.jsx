import {useState, useEffect} from 'react';
import axios from 'axios';


function IronBnb(){
    //State Declaration 
    const [fetching, setFetching] = useState(true);
    const [apartments, setApartments] = useState([]);

    useEffect(()=>{
        axios.get("https://ironbnb-m3.herokuapp.com/apartments").then((response)=>{
            setApartments(response.data);
            setFetching(false);
        })
    },[]); // [] so i'll tell useEffect that I want to run this code only when the compent is mounted.
    return(
    <div>
        <h3>Apartments List</h3>
        {fetching && <p>Loading...</p>}
        {apartments.map((apartment)=>{
            return(
                <div key={apartment._id}>
                    <img src={apartment.img} />
                    <h3>{apartment.title}</h3>
                    <p>Price: {apartment.pricePerDay}</p>
                </div>
            )
        })}
    </div>)
}

export default IronBnb