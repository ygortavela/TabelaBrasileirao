import React from 'react';
import { useSelector } from 'react-redux';
import MatchesList from '../components/MatchesList';
import MatchForm from '../components/MatchForm';
import { RootState } from '../store/reducer';

const Matches: React.FC = () => {
    const formType = useSelector((state: RootState) => state.matchState.formType);

    return (
        <section className="flex-grow flex overflow-y-hidden">
            <MatchesList />
            <MatchForm type={formType} />
        </section>
    );
};

export default Matches;
