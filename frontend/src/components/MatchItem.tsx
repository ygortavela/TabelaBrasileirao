import React from 'react';
import { useDispatch } from 'react-redux';
import { selectMatch, toggleFormType } from '../store/matches/actions';
import _ from 'lodash';

import formatDate from '../utils/formatDate';

type Props = {
    match: Match;
    type: 'READ' | 'EDIT';
};

const MatchItem: React.FC<Props> = ({ match, type }) => {
    const dispatch = useDispatch();
    const date = formatDate(match.matchDateTime);

    const handleMatchEdit = () => {
        if (type === 'EDIT') {
            dispatch(toggleFormType('EDIT'));
            dispatch(selectMatch(_.cloneDeep(match)));
        }
    };

    return (
        <li
            className={`flex flex-col items-center py-4 my-2 border rounded-md text-gray-600 shadow-md select-none ${
                type === 'EDIT'
                    ? 'bg-gray-300 border-gray-400 cursor-pointer hover:bg-gray-400 hover:border-gray-500'
                    : 'bg-gray-100 border-gray-200'
            }`}
            title={`${type === 'EDIT' ? 'Editar Partida' : ''}`}
            onClick={handleMatchEdit}
        >
            <div className="text-sm">
                <span className="font-bold">{`${date[0]} ${date[1]} `}</span>
                <span>{`${match.matchPlace} ${date[2]}`}</span>
            </div>
            <div className="text-xl flex items-center mt-3">
                <span title={match.teamsThatPlayedMatchList![0].name}>
                    {match.teamsThatPlayedMatchList![0].initials}
                </span>
                <span className="text-2xl mx-2 font-black">{match.teamsThatPlayedMatchList![0].goalAmount}</span>
                <img className="w-4 h-4" src={require('../assets/icons/close-24px.svg')} alt="" />
                <span className="text-2xl mx-2 font-black">{match.teamsThatPlayedMatchList![1].goalAmount}</span>
                <span title={match.teamsThatPlayedMatchList![1].name}>
                    {match.teamsThatPlayedMatchList![1].initials}
                </span>
            </div>
        </li>
    );
};

export default MatchItem;
