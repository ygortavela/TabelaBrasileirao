import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Teams from './pages/Teams';

import './App.css';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <div id="app" className="max-w-screen max-h-screen flex flex-col">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/management">
                        TO DO
                    </Route>
                    <Route exact path="/management/teams">
                        <Teams />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
