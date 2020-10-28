import React, { useState, useEffect } from 'react';
import { getMatchesByRoundList } from '../services/specialized-services';
import MatchesByRound from './MatchesByRound';

const MatchesByRoundCarrousel: React.FC = () => {
    const [matchesByRound, setMatchesByRound] = useState<Record<number, MatchData[]>>({});
    const [round, setRound] = useState(1);

    async function getMatchesByRound() {
        try {
            const response = await getMatchesByRoundList();
            setMatchesByRound(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMatchesByRound();
    }, []);

    return (
        <div className="m-4 w-1/3 flex flex-col">
            <p className="text-2xl font-black mb-4">JOGOS</p>
            <div className="flex justify-around items-center py-2 border-t border-b">
                <button
                    className="focus:outline-none"
                    onClick={() => {
                        if (round > 1) setRound(round - 1);
                    }}
                >
                    <img src={require('../assets/icons/navigate_before-24px.svg')} alt="" />
                </button>
                <span className="font-bold">{round}ª RODADA</span>
                <button
                    className="focus:outline-none"
                    onClick={() => {
                        if (round < Object.keys(matchesByRound).length) setRound(round + 1);
                    }}
                >
                    <img src={require('../assets/icons/navigate_next-24px.svg')} alt="" />
                </button>
            </div>
            <MatchesByRound key={round} matchesByRound={matchesByRound[round] ?? []} />
        </div>
    );
};

export default MatchesByRoundCarrousel;

type Team = {
    teamId: number;
    name: string;
    initials: string;
    goalAmount: number;
};

export type MatchData = {
    matchId: number;
    round: number;
    matchDateTime: number[];
    matchPlace: string;
    teamsThatPlayedMatchList: [Team, Team];
};
