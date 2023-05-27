import { Link } from "react-router-dom";
import Relavent from "./Relavent";
import { useEffect, useState } from "react";

const MoviesList = ({movies,title}) => {
    let[favid, setFavid]=useState([])
let[altered,setaltered]=useState(0)
    useEffect(()=>{
    let fav=JSON.parse(localStorage.getItem("fav"));
    setFavid(fav.map((m)=>{return m.id}));
    },[altered])

    let handleAddtofav=(movie)=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        fav.push(movie);
        localStorage.setItem("fav",JSON.stringify(fav));
        setaltered(altered+1);
        alert("movie added to favorites");
    }
    let handleremovetofav=(id)=>{
        let fav=JSON.parse(localStorage.getItem("fav"));
        fav=fav.filter((m)=>{return m.id!=id})
        localStorage.setItem("fav",JSON.stringify(fav));
        setaltered(altered+1)
        alert("movie removed from favorites")
    }
    return ( 
    <div>
<h1 id="title">{title}</h1>
            {movies && <div className="movies">
                            {movies.map((movie)=>{ 
                                return(
                                    <div>
                                        {favid.includes(movie.id)?
                                       <button onClick={()=>{handleremovetofav(movie.id)}}className="remove-btn">  💕 </button>:
                                       <button onClick={()=>{handleAddtofav(movie)}} className="add-btn"> 💙 </button>}
                                        <Link to={`/moviedetail/${movie.id}`}>
                                        <img src={movie.poster} width="250px" height="300px" />
                                        
                                        <h1>{movie.moviename}</h1>
                                        <p>{movie.genre}</p>
                                       
                                        </Link>
                                    </div>
                                )
                            })}
                        </div>}
    </div> 
    );
}
 
export default MoviesList;