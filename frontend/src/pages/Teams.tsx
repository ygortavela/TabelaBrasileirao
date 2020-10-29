import React from 'react';
import TeamsList from '../components/TeamsList';

const Teams: React.FC = () => {
    return (
        <section className="flex-grow flex overflow-y-hidden">
            <TeamsList />
        </section>
    );
};

export default Teams;
