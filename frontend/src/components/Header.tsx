import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Header.css';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('classification');
    const [toggleDropdown, setToggleDropdown] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname !== '/') setSelected('management');
        else setSelected('classification');
    }, [pathname]);

    return (
        <header className="max-w-screen sticky top-0 px-4 bg-green-500 flex">
            <Link to="/" className="py-2">
                <img className="h-12" src={require('../assets/icons/logo.png')} alt="" />
            </Link>

            <nav className="flex items-end mx-6">
                <Link
                    to="/"
                    onClick={() => setSelected('classification')}
                    className={`pb-3 mx-3 text-2xl font-black hover:text-white focus:outline-none border-b-2 ${
                        selected === 'classification' ? 'text-white border-white' : 'text-green-200 border-green-500'
                    }`}
                >
                    classificação
                </Link>
                <div className="relative" onMouseLeave={() => setToggleDropdown(false)}>
                    <div
                        onClick={() => setToggleDropdown(!toggleDropdown)}
                        className={`cursor-pointer block pb-3 mx-3 text-2xl font-black  hover:text-white focus:outline-none border-b-2 ${
                            selected === 'management' ? 'text-white border-white' : 'text-green-200 border-green-500'
                        }`}
                    >
                        gerenciar
                    </div>
                    {toggleDropdown && (
                        <div className="block__dropdown absolute py-2 w-40 bg-white rounded-lg shadow-xl text-center text-lg font-bold">
                            <Link
                                onClick={() => {
                                    setSelected('management');
                                    setToggleDropdown(false);
                                }}
                                to="/management/teams"
                                className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white"
                            >
                                Times
                            </Link>
                            <Link
                                onClick={() => {
                                    setSelected('management');
                                    setToggleDropdown(false);
                                }}
                                to="/management/matches"
                                className="block px-4 py-2 text-gray-800 hover:bg-green-500 hover:text-white"
                            >
                                Partidas
                            </Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
