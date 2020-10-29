import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import { getClassificationTable } from '../services/services';
import TableRow from './TableRow';

const ClassificationTable: React.FC = () => {
    const [tableData, setTableData] = useState<ClassificationRow[]>([]);

    async function getTableData() {
        try {
            const response = await getClassificationTable();
            setTableData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTableData();
    }, []);

    return (
        <div className="m-4">
            <p className="text-2xl font-black mb-4">TABELA</p>
            <table className="table-auto">
                <TableHeader />
                <tbody className="divide-y">
                    {tableData.map((row, index) => {
                        return <TableRow key={row.teamName} rowData={row} classification={index + 1} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default ClassificationTable;
