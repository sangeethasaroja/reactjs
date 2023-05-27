import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <nav>
        <div className="logo">
            <Link to="/"><h1>movies 🕷 </h1></Link>
        </div>
        <div id="search-bar">
        <Link to="/search">
            <input type="search" placeholder="search movie" />
            <button>search</button>
            </Link>
        </div>
        <div id="add-movie">
            <Link to="/add"><h1>Add movie 📽 </h1></Link>
        </div>
        <div id="fav-movie">
            <Link to="/fav"><h1>Favorites movies 📽 </h1></Link>
        </div>
        </nav>
     );
}
 
export default Nav;
