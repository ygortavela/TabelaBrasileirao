import React from 'react';
import { MatchData } from './MatchesCarrousel';
import MatchItem from './MatchItem';

type Props = {
    matchesByRound: MatchData[];
};

const MatchesByRound: React.FC<Props> = ({ matchesByRound }) => {
    return (
        <div className="flex flex-col">
            {matchesByRound.map((match) => (
                <MatchItem key={match.matchId} match={match} />
            ))}
        </div>
    );
};

export default MatchesByRound;
