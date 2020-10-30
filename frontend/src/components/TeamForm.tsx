import React from 'react';
import useForm from '../hooks/useForm';

type Props = {
    type: 'EDIT' | 'CREATE' | '';
};

const TeamForm: React.FC<Props> = (props) => {
    const initialTeamState = { name: '', initials: '' };
    const [{ values, loading }, handleInputChange, handleSubmit] = useForm(initialTeamState);

    const submitNewTeam = () => {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('done');
                alert('terminei');
            }, 5000);
        });

        promise.then().catch((e) => console.log(e));
    };

    if (!props.type) return null;

    return (
        <form
            className="bg-gray-100 flex flex-col justify-between p-3 mx-4 my-6 shadow-lg rounded-sm flex-grow"
            onSubmit={handleSubmit(submitNewTeam)}
        >
            <div className="flex flex-col">
                <p className="mb-4 text-2xl font-black uppercase self-center">{`${
                    props.type === 'CREATE' ? 'Criação' : 'Edição'
                } de Times`}</p>
                <div className="w-1/2 px-3 flex flex-col">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nome
                        <input
                            className="text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="name"
                            type="text"
                            placeholder="Corinthians"
                            value={values.name}
                            onChange={handleInputChange}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter') e.preventDefault();
                            }}
                        />
                    </label>
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mt-4 mb-2">
                        Sigla
                        <input
                            className="text-base appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            name="initials"
                            type="text"
                            placeholder="COR"
                            value={values.initials}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
            </div>
            <div className="flex justify-center">
                <button
                    className="self-center m-3 px-4 py-2 rounded-md text-lg font-black text-black hover:text-white bg-green-500 transform hover:scale-105"
                    type="submit"
                    disabled={loading}
                >
                    Enviar
                </button>
                {props.type === 'EDIT' && (
                    <button className="self-center m-3 px-4 py-2 rounded-md text-lg font-black text-red-500 border-2 border-red-400 bg-gray-100 hover:bg-red-300 hover:text-white">
                        Excluir
                    </button>
                )}
            </div>
        </form>
    );
};

export default TeamForm;
