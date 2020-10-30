import React from 'react';

type Props = {
    team: Team;
};

const TeamItem: React.FC<Props> = ({ team }) => {
    return (
        <li className="bg-gray-300 rounded-md px-4 py-2 m-2 text-lg font-bold text-gray-600 flex justify-between items-center">
            <div>{`${team.name} (${team.initials})`}</div>
            <button className="focus:outline-none">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="fill-current h-8 mx-1 p-2 rounded-full hover:bg-gray-400"
                >
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
                </svg>
            </button>
        </li>
    );
};

export default TeamItem;
