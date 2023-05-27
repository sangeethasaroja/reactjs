import { useEffect, useState } from "react";

const Search = () => {
    let[movie,setmovie]=useState(null)
  
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json() })
            .then((data)=>{setmovie(data)})
          },3000)
    },[])
    return ( 
        <div>
            {movie&&}
        </div>
     );
}
 
export default Search;