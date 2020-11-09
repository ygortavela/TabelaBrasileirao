import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMatch, toggleFormType } from '../store/matches/actions';
import MatchesCarrousel from './MatchesCarrousel';

const MatchesList: React.FC = () => {
    const dispatch = useDispatch();

    const handleMatchCreate = () => {
        dispatch(toggleFormType('CREATE'));
        dispatch(
            selectMatch({
                matchId: 0,
                round: 0,
                matchDateTime: [],
                matchPlace: '',
                teamsThatPlayedMatchList: [
                    { teamId: 0, name: '', initials: '', goalAmount: 0, yellowCardAmount: 0, redCardAmount: 0 },
                    { teamId: 0, name: '', initials: '', goalAmount: 0, yellowCardAmount: 0, redCardAmount: 0 },
                ],
            }),
        );
    };

    return (
        <div className="bg-gray-100 flex flex-col justify-between p-1 mx-4 my-6 shadow-lg rounded-sm">
            <div className="overflow-y-auto pr-2">
                <MatchesCarrousel type="EDIT" />
            </div>
            <button
                id="button__create-match"
                className="self-center m-2 px-4 py-2 rounded-md text-lg font-black text-green-200 hover:text-white bg-green-500 transform hover:scale-105 hover:font-black shadow-md"
                onClick={handleMatchCreate}
            >
                Criar Partida
            </button>
        </div>
    );
};

export default MatchesList;
