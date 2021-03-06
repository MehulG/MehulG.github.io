import './App.css';
import 'bulma';
import {Route, BrowserRouter as Router} from 'react-router-dom';

import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <Router>
      <Route path='/' exact component = {Home}/>
      <Route path='/me' exact component = {About}/>
    </Router>
  );
}

export default App;
