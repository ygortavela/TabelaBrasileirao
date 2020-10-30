import React from 'react';
import TeamsList from '../components/TeamsList';
import TeamForm from '../components/TeamForm';

const Teams: React.FC = () => {
    return (
        <section className="flex-grow flex overflow-y-hidden">
            <TeamsList />
            <TeamForm type="EDIT" />
        </section>
    );
};

export default Teams;
