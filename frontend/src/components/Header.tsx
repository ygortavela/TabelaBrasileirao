import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
    const [selected, setSelected] = useState('classification');

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
                <Link
                    to="/management"
                    onClick={() => setSelected('management')}
                    className={`pb-3 mx-3 text-2xl font-black  hover:text-white focus:outline-none border-b-2 ${
                        selected === 'management' ? 'text-white border-white' : 'text-green-200 border-green-500'
                    }`}
                >
                    gerenciar
                </Link>
            </nav>
        </header>
    );
};

export default Header;
