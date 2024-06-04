import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      
      <Router>
      <NavBar/>
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes>

        </div>
      </Router>
     
    </div>
  );
}

export default App;
