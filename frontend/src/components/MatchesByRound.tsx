import React from 'react';
import MatchItem from './MatchItem';

type Props = {
    matchesByRound: Match[];
    type: 'READ' | 'EDIT';
};

const MatchesByRound: React.FC<Props> = ({ matchesByRound, type }) => {
    return (
        <ul className="flex flex-col">
            {matchesByRound.map((match) => (
                <MatchItem key={match.matchId} match={match} type={type} />
            ))}
        </ul>
    );
};

export default MatchesByRound;
