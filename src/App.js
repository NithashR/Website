import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages';
function App() {
  return (
    <Router>
        <Route exact path="/resume">
          <Home/> 
        </Route>
    </Router>
  );
}

export default App;
