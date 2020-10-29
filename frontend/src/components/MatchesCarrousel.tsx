import React, { useState, useEffect } from 'react';
import { getMatchesByRoundList } from '../services/services';
import MatchesByRound from './MatchesByRound';

const MatchesByRoundCarrousel: React.FC = () => {
    const [matchesByRound, setMatchesByRound] = useState<Record<number, Match[]>>({});
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
                    <svg className={`w-6 h-6 text-gray-900 ${round === 1 ? 'hidden' : ''}`}>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                    </svg>
                </button>
                <span className="font-bold">{round}ª RODADA</span>
                <button
                    className="focus:outline-none"
                    onClick={() => {
                        if (round < Object.keys(matchesByRound).length) setRound(round + 1);
                    }}
                >
                    <svg
                        className={`w-6 h-6 text-gray-900 ${
                            round === Object.keys(matchesByRound).length ? 'hidden' : ''
                        }`}
                    >
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
                    </svg>
                </button>
            </div>
            <MatchesByRound key={round} matchesByRound={matchesByRound[round] ?? []} />
        </div>
    );
};

export default MatchesByRoundCarrousel;
