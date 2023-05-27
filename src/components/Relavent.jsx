import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
const Relavent = ({genre,title}) => {
    let[movies,setmovies]=useState(null)
    let[error,seterror]=useState(null)
    let[pending,setpending]=useState(true)

    useEffect(()=>{
        setTimeout(() => {
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{console.log(data);
                           setmovies(data);
                           setpending(false)
                        })
            .catch((err)=>{
              seterror("404 found")
              setpending(false)
            })
        }, 3000);
    },[])


    return ( 
        <div className="relavant">

{movies && <MoviesList movies={movies.filter((m)=>{return m.genre.includes(genre)})} title="Related movies"/>}
   
        </div>
     );
}
 
export default Relavent;