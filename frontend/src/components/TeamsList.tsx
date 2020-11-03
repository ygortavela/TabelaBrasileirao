import React, { useEffect, useState } from 'react';
import TeamItem from './TeamItem';
import { getTeams } from '../services/services';
import { useDispatch } from 'react-redux';
import { selectTeam, toggleFormType } from '../store/teamForm/actions';

const TeamsList: React.FC = () => {
    const [teamsData, setTeamsData] = useState<Team[]>([]);
    const dispatch = useDispatch();

    async function getTableData() {
        try {
            const response = await getTeams();
            setTeamsData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleTeamCreate = () => {
        dispatch(toggleFormType('CREATE'));
        dispatch(selectTeam({ teamId: 0, name: '', initials: '' }));
    };

    useEffect(() => {
        getTableData();
    }, []);

    return (
        <div
            className="bg-gray-100 flex flex-col justify-between p-3 mx-4 my-6 shadow-lg rounded-sm"
            style={{ width: '450px' }}
        >
            <div className="overflow-y-auto">
                <ul>
                    {teamsData.map((team) => (
                        <TeamItem team={team} key={team.teamId} />
                    ))}
                </ul>
            </div>
            <button
                className="self-center m-3 px-4 py-2 rounded-md text-lg font-black text-green-200 hover:text-white bg-green-500 transform hover:scale-105 hover:font-black"
                onClick={handleTeamCreate}
            >
                Criar Time
            </button>
        </div>
    );
};

export default TeamsList;
