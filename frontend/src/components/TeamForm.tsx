import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTeam, removeTeam, selectTeam, toggleFormType } from '../store/teams/actions';

import { postTeam, replaceTeam, deleteTeam } from '../services/services';
import { RootState } from '../store/reducer';
import fetchTeams from '../store/teams/fetchTeams';

type Props = {
    type: 'EDIT' | 'CREATE' | null;
};

const TeamForm: React.FC<Props> = (props) => {
    const selectedTeam = useSelector((state: RootState) => state.teamState.selectedTeam);
    const dispatch = useDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempData = { ...selectedTeam } as Pick<Team, any>;
        tempData[event.target.name] = event.target.value;

        dispatch(selectTeam(tempData as Team));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (props.type === 'CREATE') {
                const response = await postTeam(selectedTeam);
                dispatch(addTeam(response.data));
            } else if (props.type === 'EDIT') {
                await replaceTeam(selectedTeam);
                dispatch(fetchTeams());
            }

            dispatch(toggleFormType());
        } catch (error) {
            console.log(error);
        }
    };

    const handleDelete = async () => {
        try {
            await deleteTeam(selectedTeam.teamId);
            dispatch(removeTeam(selectedTeam.teamId));
            dispatch(toggleFormType());
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        dispatch(toggleFormType());
    }, [dispatch]);

    if (!props.type) return null;

    return (
        <form
            className="bg-gray-100 flex flex-col justify-between p-3 mx-4 my-6 shadow-lg rounded-sm flex-grow"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col">
                <p className="mb-4 text-2xl font-black uppercase self-center">{`${
                    props.type === 'CREATE' ? 'Criação' : 'Edição'
                } de Time`}</p>
                <div className="w-1/2 px-3 flex flex-col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nome
                        <input
                            className="text-base appearance-none w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                            name="name"
                            type="text"
                            placeholder="Corinthians"
                            value={selectedTeam.name}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') e.preventDefault();
                            }}
                        />
                    </label>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-4 mb-2">
                        Sigla
                        <input
                            className="text-base appearance-none w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                            name="initials"
                            type="text"
                            placeholder="COR"
                            value={selectedTeam.initials}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    id="button__submit-team"
                    className="self-center m-3 px-4 py-2 rounded-md text-xl font-black text-green-200 hover:text-white bg-green-500 transform hover:scale-105 hover:font-black shadow-md"
                    type="submit"
                >
                    Enviar
                </button>
                {props.type === 'EDIT' && (
                    <button
                        id="button__delete-team"
                        className="self-center m-3 px-4 py-2 rounded-md text-lg font-black text-red-500 border-2 border-red-400 bg-gray-100 hover:bg-red-300 hover:text-white shadow-md"
                        type="button"
                        onClick={handleDelete}
                    >
                        Excluir
                    </button>
                )}
            </div>
        </form>
    );
};

export default TeamForm;
