import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

// Theme #FFBD5D
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

// Import all the pages
import Navbar from './Pages/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Products from './Pages/Products';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/products" exact component={Products} />
            </Switch>
        </Router>
    );
};

export default App;