import React, { useEffect, useState } from 'react';
import { MatchData } from './MatchesCarrousel';

type Props = {
    match: MatchData;
};

const MatchItem: React.FC<Props> = ({ match }) => {
    const [date] = useState(
        new Date(
            match.matchDateTime[0],
            match.matchDateTime[1] - 1,
            match.matchDateTime[2],
            match.matchDateTime[3],
            match.matchDateTime[4],
        ),
    );

    const WEEKDAY = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];

    useEffect(() => console.log(match));

    return (
        <div className="flex flex-col items-center py-4 my-2 border-b">
            <div className="text-sm">
                <span className="font-bold">
                    {`${WEEKDAY[date.getDay()]} ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} `}
                </span>
                <span>{`${match.matchPlace} ${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`}</span>
            </div>
            <div className="text-xl flex items-center m-3">
                <span title={match.teamsThatPlayedMatchList[0].name}>{match.teamsThatPlayedMatchList[0].initials}</span>
                <span className="text-2xl mx-2 font-black">{match.teamsThatPlayedMatchList[0].goalAmount}</span>
                <img className="w-4 h-4" src={require('../assets/icons/close-24px.svg')} alt="" />
                <span className="text-2xl mx-2 font-black">{match.teamsThatPlayedMatchList[1].goalAmount}</span>
                <span title={match.teamsThatPlayedMatchList[1].name}>{match.teamsThatPlayedMatchList[1].initials}</span>
            </div>
        </div>
    );
};

export default MatchItem;
