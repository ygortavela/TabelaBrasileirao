import React from 'react';
import TeamsList from '../components/TeamsList';
import TeamForm from '../components/TeamForm';
import { useSelector } from 'react-redux';
import { TeamState } from '../store/teams/types';

const Teams: React.FC = () => {
    const formType = useSelector((state: TeamState) => state.formType);

    return (
        <section className="flex-grow flex overflow-y-hidden">
            <TeamsList />
            <TeamForm type={formType} />
        </section>
    );
};

export default Teams;
