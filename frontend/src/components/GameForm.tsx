import React, { useState } from 'react';
import { postMatch } from '../services/services';

type Props = {
    submitCallback: (option: 'CREATE' | null) => void;
};

const GameForm: React.FC<Props> = (props) => {
    const dateInstance = new Date();
    const initialState = {
        matchId: 0,
        round: 1,
        matchDateTime: [
            dateInstance.getFullYear(),
            dateInstance.getMonth() + 1,
            dateInstance.getDate(),
            dateInstance.getHours(),
            0,
        ],
        matchPlace: '',
    };
    const [matchData, setMatchData] = useState<Match>(initialState);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const tempData = { ...matchData };
        const key = event.target.name;

        if (key === 'matchId' || key === 'round') tempData[key] = Number(event.target.value);
        else if (key === 'matchPlace') tempData[key] = event.target.value;
        else if (key === 'matchDateTime') {
            const index = Number(event.target.dataset['index']);

            tempData[key][index] = Number(event.target.value);
        }

        setMatchData(tempData);
    };

    const handleSubmitMatch = async (option: 'CREATE' | null = null) => {
        if (option === 'CREATE')
            try {
                await postMatch(matchData);
                setMatchData(initialState);
            } catch (error) {
                console.log(error);
            }

        props.submitCallback(option);
    };

    return (
        <section className="self-center flex flex-col px-4 py-2 my-2 text-sm bg-gray-300 border border-gray-400 rounded-sm shadow-md">
            <div className="flex">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                    Ano
                    <input
                        className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                        style={{ width: '50px' }}
                        name="matchDateTime"
                        data-index="0"
                        type="text"
                        value={matchData.matchDateTime[0]}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </label>
                <label className="mx-2 block uppercase tracking-wide text-gray-700 text-xs font-bold">
                    Mês
                    <input
                        className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                        style={{ width: '30px' }}
                        name="matchDateTime"
                        data-index="1"
                        type="text"
                        value={matchData.matchDateTime[1]}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </label>
                <label className="mx-2 block uppercase tracking-wide text-gray-700 text-xs font-bold">
                    Dia
                    <input
                        className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                        style={{ width: '30px' }}
                        name="matchDateTime"
                        data-index="2"
                        type="text"
                        value={matchData.matchDateTime[2]}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </label>
                <label className="mx-2 block uppercase tracking-wide text-gray-700 text-xs font-bold">
                    Hora
                    <input
                        className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                        style={{ width: '30px' }}
                        name="matchDateTime"
                        data-index="3"
                        type="text"
                        value={matchData.matchDateTime[3]}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </label>
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                    Minutos
                    <input
                        className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                        style={{ width: '30px' }}
                        name="matchDateTime"
                        data-index="4"
                        type="text"
                        value={matchData.matchDateTime[4]}
                        onChange={handleInputChange}
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') e.preventDefault();
                        }}
                    />
                </label>
            </div>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                Local
                <input
                    className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                    name="matchPlace"
                    type="text"
                    value={matchData.matchPlace}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                    }}
                />
            </label>
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold">
                Rodada
                <input
                    className="appearance-none block bg-white text-gray-700 border border-gray-200 rounded py-1 px-2 leading-tight focus:outline-none focus:border-gray-500"
                    style={{ width: '30px' }}
                    name="round"
                    type="text"
                    value={matchData.round}
                    onChange={handleInputChange}
                    onKeyPress={(e) => {
                        if (e.key === 'Enter') e.preventDefault();
                    }}
                />
            </label>
            <div className="self-center flex">
                <button
                    type="button"
                    className="mt-2 mx-1 px-2 py-1 rounded-md text-sm text-green-500 border border-green-500 hover:text-white hover:bg-green-500 focus:outline-none shadow-sm"
                    onClick={() => handleSubmitMatch('CREATE')}
                >
                    Criar
                </button>
                <button
                    type="button"
                    className="mt-2 mx-1 px-2 py-1 rounded-md text-sm text-red-500 border border-red-500 hover:text-white hover:bg-red-500 focus:outline-none shadow-sm"
                    onClick={() => handleSubmitMatch()}
                >
                    Cancelar
                </button>
            </div>
        </section>
    );
};

export default GameForm;
