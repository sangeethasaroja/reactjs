import Addmovie from "./components/Addmovie";
import Favorites from "./components/Favorites";
import Home from "./components/Home";
import Moviedetails from "./components/Moviedetails";
import Nav from "./components/Nav";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Search from "./components/Search";


function App(){
  
  return(
    <BrowserRouter>
    <div>
      <div className="App"></div>
      <Nav/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/add" element={<Addmovie/>}/>
      <Route path="/moviedetail/:id" element={<Moviedetails/>}/>
      <Route path="/fav" element={<Favorites/>}/>
      <Route path="/search/:searchword" element={<Search/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}
export default App;
