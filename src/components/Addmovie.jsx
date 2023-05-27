import { useRef,Ref } from "react";
import {useNavigate} from 'react-router-dom';

const Addmovie = () => {
    let navigate = useNavigate();
    let moviename =useRef();
    let hero =useRef();
    let heroine =useRef();
    let director =useRef();
    let genre =useRef();
    let poster =useRef();
    let trailer =useRef();
    let release =useRef();
    let rating =useRef();
    let synopsis =useRef();

    let handleAddNewMovie=(e)=>{
        e.preventDefault()
        let newmovie={
            moviename:moviename.current.value,
            hero:hero.current.value,
            heroine:heroine.current.value,
            director:director.current.value,
            languages:[],
            genre:genre.current.value,
            poster:poster.current.value,
            trailer:trailer.current.value,
            release:release.current.value,
            rating:rating.current.value,
            synopsis:synopsis.current.value
        }
        let options = document.getElementsByName("lang");
        for(let i = 0; i < options.length; i++) 
        {
            if(options[i].checked==true)
            {
                newmovie.languages.push( options[i].value )
            }  
        }
        fetch("http://localhost:4000/movies",
        {
           method:"POST",
           headers:{"Content-Type":"application/json"},
           body:JSON.stringify(newmovie)
        })
        .then(()=>{
            alert("data stored");
            navigate("/");
        })
    }
    return ( 
        <div className="addmovie">
            <h1>Enter Add movie Details</h1>

            <form onSubmit={ handleAddNewMovie }>
                <div className="input">
                <input type="text" placeholder="moviename" ref={moviename} />
                <input type="text" placeholder="hero" ref={hero} />
                <input type="text" placeholder="heroine" ref={heroine} />
                <input type="text" placeholder="director" ref={director}/>
                <input type="text" placeholder="genre" ref={genre} />
                <input type="url" placeholder="poster url" ref={poster} />
                <input type="url" placeholder="trailer url" ref={trailer}/>
                <input type="number" min="1950" max="2024" placeholder="release year" ref={release} />
                <input type="number" min="1" max="10" step="0.1" placeholder="rating" ref={rating} />
                <textarea cols="70" rows="6" placeholder="write synopsis" ref={synopsis}></textarea>
                </div>
                <fieldset>
                    <legend>Select languages</legend>
                    <input type="checkbox" name="lang" value="kannada"/><label>Kannada</label>
                    <input type="checkbox" name="lang" value="tamil"/><label>tamil</label>
                    <input type="checkbox" name="lang" value="telugu"/><label>telugu</label>
                    <input type="checkbox" name="lang" value="hindi"/><label>hindi</label>
                    <input type="checkbox" name="lang" value="malayalam"/><label>malayalam</label>
                </fieldset>
                <div className="btn">
                <input type="submit" value="Add movie"/>
                </div>
            </form>
        </div>
     );
}
export default Addmovie;