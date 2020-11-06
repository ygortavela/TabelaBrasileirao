import React, { useEffect } from 'react';
import TeamItem from './TeamItem';
import { useDispatch, useSelector } from 'react-redux';
import { selectTeam, toggleFormType } from '../store/teams/actions';
import fetchTeams from '../store/teams/fetchTeams';
import { RootState } from '../store/reducer';

const TeamsList: React.FC = () => {
    const teamState = useSelector((state: RootState) => state.teamState.teams);
    const dispatch = useDispatch();

    const handleTeamCreate = () => {
        dispatch(toggleFormType('CREATE'));
        dispatch(selectTeam({ teamId: 0, name: '', initials: '' }));
    };

    useEffect(() => {
        dispatch(fetchTeams());
    }, [dispatch]);

    return (
        <div
            className="bg-gray-100 flex flex-col justify-between p-3 mx-4 my-6 shadow-lg rounded-sm"
            style={{ width: '450px' }}
        >
            <div className="overflow-y-auto">
                <ul>
                    {teamState.map((team) => (
                        <TeamItem team={team} key={team.teamId} />
                    ))}
                </ul>
            </div>
            <button
                className="self-center m-3 px-4 py-2 rounded-md text-lg font-black text-green-200 hover:text-white bg-green-500 transform hover:scale-105 hover:font-black shadow-md"
                onClick={handleTeamCreate}
            >
                Criar Time
            </button>
        </div>
    );
};

export default TeamsList;
