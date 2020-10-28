import React from 'react';
import ClassificationTable from '../components/ClassificationTable';
import MatchesCarrousel from '../components/MatchesCarrousel';

const Home: React.FC = () => {
    return (
        <section className="flex justify-around">
            <ClassificationTable />
            <MatchesCarrousel />
        </section>
    );
};

export default Home;
