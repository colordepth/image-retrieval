import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div>
        Click to enter the site
      </div>
      <Link to="home">Enter</Link>
    </div>
  );
}

export default App;
