import React from 'react';
import TeamsList from '../components/TeamsList';
import TeamForm from '../components/TeamForm';
import { useSelector } from 'react-redux';
import { TeamFormState } from '../store/teamForm/types';

const Teams: React.FC = () => {
    const formType = useSelector((state: TeamFormState) => state.formType);

    return (
        <section className="flex-grow flex overflow-y-hidden">
            <TeamsList />
            <TeamForm type={formType} />
        </section>
    );
};

export default Teams;
