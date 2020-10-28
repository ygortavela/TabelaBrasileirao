import React from 'react';
import './App.css';
import ClassificationTable from './components/ClassificationTable';
import MatchesCarrousel from './components/MatchesCarrousel';

function App() {
    return (
        <div id="app" className="max-w-screen min-h-screen flex">
            <ClassificationTable />
            <MatchesCarrousel />
        </div>
    );
}

export default App;
