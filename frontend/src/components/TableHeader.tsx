import React from 'react';

const TableHeader: React.FC = () => {
    return (
        <thead>
            <tr>
                <th className="px-4 py-2">CLASSIFICAÇÃO</th>
                <th className="px-4 py-2">P</th>
                <th className="px-4 py-2">J</th>
                <th className="px-4 py-2">V</th>
                <th className="px-4 py-2">E</th>
                <th className="px-4 py-2">D</th>
                <th className="px-4 py-2">GP</th>
                <th className="px-4 py-2">GC</th>
                <th className="px-4 py-2">SG</th>
                <th className="px-4 py-2">%</th>
            </tr>
        </thead>
    );
};

export default TableHeader;
