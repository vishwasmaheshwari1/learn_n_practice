import './App.css';
import Nav from './Nav';
import Shop from './Shop';
import About from './About';
import ItemDetail from './ItemDetail';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';

function App() {
  return (

    <Router>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path="/about" element={<About/>} />
          <Route path="/shop" element={<Shop/>} />
          <Route path="/shop/:id" element={<ItemDetail/>} />
        </Routes>
        
       
      </div>
    </Router>
  );
}

//below component is nnot in use - only used for testing routes
const Home = () => {


return (
  <div>
    <h1>Home Page</h1>
  </div>
);

}

export default App;
