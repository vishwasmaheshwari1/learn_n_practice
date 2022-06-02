import './App.css';
import MovieList from './MovieList'
import AddMovie from './AddMovie';
import Nav from './Nav';
import { MovieProvider } from './MovieContext';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav/>
        <AddMovie/>
        <MovieList />
      </div>
    </MovieProvider>
    
  );
}

export default App;
