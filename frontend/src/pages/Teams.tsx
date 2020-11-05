import React from 'react';
import TeamsList from '../components/TeamsList';
import TeamForm from '../components/TeamForm';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducer';

const Teams: React.FC = () => {
    const formType = useSelector((state: RootState) => state.teamState.formType);

    return (
        <section className="flex-grow flex overflow-y-hidden">
            <TeamsList />
            <TeamForm type={formType} />
        </section>
    );
};

export default Teams;
