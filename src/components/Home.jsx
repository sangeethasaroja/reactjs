import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";


const Home = () => {
    let[movies,setmovies]=useState(null)
    let[error,seterror]=useState(null)
    let[pending,setpending]=useState(true)

    useEffect(()=>{
        if(localStorage.getItem("fav")==null)
        {
            localStorage.setItem("fav","[]")
        }
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
        <div className="home">
            {pending && <h1>loading*********</h1>}
            {error&&<h1>{error}</h1>}
            {movies && <MoviesList movies={movies} title="All movies"/>}
            {movies && <MoviesList movies={movies.filter((m)=>{return m.genre.includes("action")})} title="Action movies"/>}
            {movies && <MoviesList movies={movies.filter((m)=>(m.genre.includes("Comedy")))} title="Comedy movies"/>}
            {movies && <MoviesList movies={movies.filter((m)=>{m.genre.includes("drama")})} title="Drama movies"/>}
            {movies && <MoviesList movies={movies.filter((m)=>(m.genre.includes("divine")))} title="Divine movies"/>}
            </div>
        
     );
}
 
export default Home;