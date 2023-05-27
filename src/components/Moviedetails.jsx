import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Relavent from "./Relavent";
import MoviesList from "./MoviesList";
import {useNavigate} from 'react-router-dom';

const Moviedetails = () => {
   let{id}= useParams()
   let navigate=useNavigate()
   let[movie, setmovie] = useState(null);
   let[err,seterr]=useState(null)
   let[pending,setpending]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/"+id)
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovie(data);
                setpending(false)
            })

            .catch((err)=>{seterr("problem in data fetch");
                            setpending(false);})
        } , 3000)
    } , [id])

    let deleteMovie =()=>{
        fetch("http://localhost:4000/movies/"+id,
        {
            method:"DELETE"
        })
        .then(()=>{navigate("/")})
    }

    return ( 
        <div className="home">   
        console.log("hi git");
            <h1>movie-details-components</h1>
            {pending && <h1>Loading.......</h1>}   
            {err &&<h3>{err}</h3>}
           
            {movie &&<div className="movie-details">
            <img src={movie.poster} alt="poster" height="300" width="300" />
            <h1>moviename:{movie.moviename}</h1>
            <h4>hero:{movie.hero}</h4>
            <h4>heroine:{movie.heroine}</h4>
            <h4>director:{movie.director}</h4>
            <h4>genre:{movie.genre}</h4>
            <h4>languages:{movie.languages.join("** ")}</h4>
            <p>sysnopsis:{movie.synopsis}</p>
            <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <button onClick={deleteMovie}>delete</button>
            </div>
            } 
           {movie &&<Relavent genre={movie.genre}/>} 
        
        </div>
     );
    
}
 
export default Moviedetails;