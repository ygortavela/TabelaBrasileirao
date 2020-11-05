import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MatchesByRound from './MatchesByRound';
import { RootState } from '../store/reducer';
import fetchMatchesByRound from '../store/matches/fetchMatchesByRound';

type Props = {
    type: 'READ' | 'EDIT';
};

const MatchesByRoundCarrousel: React.FC<Props> = ({ type }) => {
    const [round, setRound] = useState(1);
    const matchesByRound = useSelector((state: RootState) => state.matchState.matchesByRound);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMatchesByRound());
    }, [dispatch]);

    return (
        <div className="m-4 flex flex-col" style={{ width: '400px' }}>
            {type === 'READ' && <p className="text-2xl font-black mb-4">JOGOS</p>}
            <div className="flex justify-around items-center py-2">
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
                <span className="font-bold select-none">{round}ª RODADA</span>
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
            <MatchesByRound type={type} key={round} matchesByRound={matchesByRound[round] ?? []} />
        </div>
    );
};

export default MatchesByRoundCarrousel;
