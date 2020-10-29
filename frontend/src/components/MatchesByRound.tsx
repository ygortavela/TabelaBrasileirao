import React from 'react';
import MatchItem from './MatchItem';

type Props = {
    matchesByRound: Match[];
};

const MatchesByRound: React.FC<Props> = ({ matchesByRound }) => {
    return (
        <ul className="flex flex-col">
            {matchesByRound.map((match) => (
                <MatchItem key={match.matchId} match={match} />
            ))}
        </ul>
    );
};

export default MatchesByRound;
