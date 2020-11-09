import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import GameForm from './GameForm';

import { selectMatch } from '../store/matches/actions';
import fetchMatchesByRound from '../store/matches/fetchMatchesByRound';
import { RootState } from '../store/reducer';
import { toggleFormType } from '../store/teams/actions';
import fetchTeams from '../store/teams/fetchTeams';

import { getFreeMatches, postPlayMatch, replacePlayMatch, deletePlayMatch } from '../services/services';

import formatDate from '../utils/formatDate';

type Props = {
    type: 'EDIT' | 'CREATE' | null;
};

const MatchForm: React.FC<Props> = (props) => {
    const selectedMatch = useSelector((state: RootState) => state.matchState.selectedMatch);
    const teamsList = useSelector((state: RootState) => state.teamState.teams);
    const dispatch = useDispatch();
    const [freeMatches, setFreeMatches] = useState<Match[]>([]);
    const [toggleGameCreate, setToggleGameCreate] = useState(false);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const tempData = { ...selectedMatch };
        const key = event.target.name;

        switch (key) {
            case 'teamsThatPlayedMatchList':
                const targetDataset = event.target.dataset;
                const teamIndex = Number(targetDataset['index']);
                const teamDataField = targetDataset['field'] as keyof Team;
                const team = tempData[key]![teamIndex as number];

                if (
                    teamDataField === 'teamId' ||
                    teamDataField === 'goalAmount' ||
                    teamDataField === 'yellowCardAmount' ||
                    teamDataField === 'redCardAmount'
                )
                    team[teamDataField] = Number(event.target.value);

                break;
            case 'matchId':
                tempData[key] = Number(event.target.value);
                break;
        }

        dispatch(selectMatch(tempData));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            if (props.type === 'CREATE') {
                await postPlayMatch(selectedMatch);
            } else if (props.type === 'EDIT') {
                await replacePlayMatch(selectedMatch);
            }
        } catch (error) {
            console.log(error);
        }

        resetState();
    };

    const handleDelete = async () => {
        try {
            await deletePlayMatch(selectedMatch);
        } catch (error) {
            console.log(error);
        }

        resetState();
    };

    const resetState = () => {
        dispatch(fetchMatchesByRound());
        dispatch(toggleFormType());
    };

    const handleNewGame = (option: 'CREATE' | null) => {
        if (option === 'CREATE') {
            fetchFreeMatch();
        }

        setToggleGameCreate(false);
    };

    const fetchFreeMatch = async () => {
        try {
            const response = await getFreeMatches();
            setFreeMatches(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const formatMatchSelect = (match: Match) => {
        const date = formatDate(match.matchDateTime);

        return `${match.round}ª RODADA ${date[0]} ${date[1]} ${match.matchPlace} ${date[2]}`;
    };

    useEffect(() => {
        dispatch(fetchTeams());
        fetchFreeMatch();
    }, [dispatch]);

    if (!props.type) return null;

    return (
        <form
            className="bg-gray-100 flex flex-col justify-between p-3 mx-4 my-6 shadow-lg rounded-sm flex-grow"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col overflow-y-auto">
                <p className="mb-4 text-2xl font-black uppercase self-center">{`${
                    props.type === 'CREATE' ? 'Criação' : 'Edição'
                } de Partida`}</p>
                <div className="flex justify-center">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                        Jogo
                        <div className="relative my-1">
                            <select
                                className="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 bg-white"
                                name="matchId"
                                value={selectedMatch.matchId}
                                onChange={handleInputChange}
                            >
                                <option value="0"></option>
                                {freeMatches.map((match) => (
                                    <option value={match.matchId} key={match.matchId}>
                                        {formatMatchSelect(match)}
                                    </option>
                                ))}
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg
                                    className="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </div>
                        </div>
                    </label>
                    <button
                        className="m-4 px-3 py-2 rounded-md text-sm text-green-500 border border-green-500 hover:text-white hover:bg-green-500 focus:outline-none shadow-sm"
                        type="button"
                        onClick={() => setToggleGameCreate(true)}
                    >
                        Criar novo Jogo
                    </button>
                </div>
                {toggleGameCreate && <GameForm submitCallback={handleNewGame} />}
                <div className="flex justify-center">
                    <div
                        className="w-1/2 px-3 flex flex-col bg-gray-300 p-1 border border-gray-400 rounded-md mx-4 my-2 shadow-md"
                        style={{ width: '200px' }}
                    >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Time
                            <div className="relative my-1">
                                <select
                                    className={`block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                                        props.type !== 'EDIT' ? 'bg-white' : ''
                                    }`}
                                    name="teamsThatPlayedMatchList"
                                    data-index="0"
                                    data-field="teamId"
                                    disabled={props.type === 'EDIT' ? true : false}
                                    value={selectedMatch.teamsThatPlayedMatchList?.[0].teamId}
                                    onChange={handleInputChange}
                                >
                                    <option value="0"></option>
                                    {teamsList.map((team) => (
                                        <option value={team.teamId} key={team.teamId}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Gols
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="0"
                                data-field="goalAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![0].goalAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Cartão Amarelo
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="0"
                                data-field="yellowCardAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![0].yellowCardAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Cartão Vermelho
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="0"
                                data-field="redCardAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![0].redCardAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                    </div>
                    <div
                        className="w-1/2 px-3 flex flex-col bg-gray-300 p-1 border border-gray-400 rounded-md mx-4 my-2 shadow-md"
                        style={{ width: '200px' }}
                    >
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Time
                            <div className="relative my-1">
                                <select
                                    className={`block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-2 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 ${
                                        props.type !== 'EDIT' ? 'bg-white' : ''
                                    }`}
                                    name="teamsThatPlayedMatchList"
                                    data-index="1"
                                    data-field="teamId"
                                    disabled={props.type === 'EDIT' ? true : false}
                                    value={selectedMatch.teamsThatPlayedMatchList?.[1].teamId}
                                    onChange={handleInputChange}
                                >
                                    <option value="0"></option>
                                    {teamsList.map((team) => (
                                        <option value={team.teamId} key={team.teamId}>
                                            {team.name}
                                        </option>
                                    ))}
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                            </div>
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Gols
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="1"
                                data-field="goalAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![1].goalAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Cartão Amarelo
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="1"
                                data-field="yellowCardAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![1].yellowCardAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                            Qtd. Cartão Vermelho
                            <input
                                className="text-base appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500"
                                style={{ width: '50px' }}
                                name="teamsThatPlayedMatchList"
                                data-index="1"
                                data-field="redCardAmount"
                                type="text"
                                value={selectedMatch.teamsThatPlayedMatchList![1].redCardAmount}
                                onChange={handleInputChange}
                                onKeyPress={(e) => {
                                    if (e.key === 'Enter') e.preventDefault();
                                }}
                            />
                        </label>
                    </div>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    id="button__submit-match"
                    className="self-center m-3 px-4 py-2 rounded-md text-xl font-black text-green-200 hover:text-white bg-green-500 transform hover:scale-105 hover:font-black shadow-md"
                    type="submit"
                >
                    Enviar
                </button>
                {props.type === 'EDIT' && (
                    <button
                        id="button__delete-match"
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

export default MatchForm;
