import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import './App.css';
import Header from './components/Header';

function App() {
    return (
        <Router>
            <div id="app" className="max-w-screen min-h-screen flex flex-col">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/management">TO DO</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
