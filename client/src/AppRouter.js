// src/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Navbar from './components/Nabvar';
import Legality from './pages/Legality';
import Marriage from './pages/Marriage';
import Wedding from './pages/Wedding';
import Register from './pages/Register';

const AppRouter = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/legality" component={Legality} />
                <Route path="/marriage" component={Marriage} />
                <Route path="/wedding" component={Wedding} />
                <Route path="/register" component={Register} />
            </Switch>
            <footer>
                <p>© Cybelianism. All Rights Reserved.</p>
            </footer>
        </Router>
    );
};

export default AppRouter;
