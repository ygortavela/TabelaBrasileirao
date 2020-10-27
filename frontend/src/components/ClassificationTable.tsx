import React, { useState, useEffect } from 'react';
import TableHeader from './TableHeader';
import getClassificationService from '../services/classificationTableService';
import TableRow from './TableRow';

const ClassificationTable: React.FC = () => {
    const [tableData, setTableData] = useState<RowData[]>([]);

    async function getTableData() {
        try {
            const response = await getClassificationService();
            setTableData(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getTableData();
    }, []);

    return (
        <table className="table-auto">
            <TableHeader />
            <tbody className="divide-y">
                {tableData.map((row, index) => {
                    return <TableRow rowData={row} classification={index + 1} />;
                })}
            </tbody>
        </table>
    );
};

export default ClassificationTable;

export interface RowData {
    teamName: string;
    points: number;
    matchesAmount: number;
    winAmount: number;
    tieAmount: number;
    loseAmount: number;
    goalAmount: number;
    negativeGoalAmount: number;
    goalBalance: number;
    performancePercentage: number;
}
