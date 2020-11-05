import React from 'react';
import ClassificationTable from '../components/ClassificationTable';
import MatchesCarrousel from '../components/MatchesCarrousel';

const Home: React.FC = () => {
    return (
        <section className="flex-grow flex justify-around overflow-y-auto">
            <ClassificationTable />
            <MatchesCarrousel type="READ" />
        </section>
    );
};

export default Home;
