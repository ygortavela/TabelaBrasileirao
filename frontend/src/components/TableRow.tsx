import React from 'react';
import { RowData } from './ClassificationTable';

interface Props {
    rowData: RowData;
    classification: number;
}

const TableRow: React.FC<Props> = ({ rowData, classification }) => {
    return (
        <tbody>
            <tr className="text-center">
                <td>
                    <span className="text-left">{classification}</span>
                    <span className="text-right">{rowData.teamName}</span>
                </td>
                <td className="bg-gray-300">{rowData.points}</td>
                <td>{rowData.matchesAmount}</td>
                <td className="bg-gray-300">{rowData.winAmount}</td>
                <td>{rowData.tieAmount}</td>
                <td className="bg-gray-300">{rowData.loseAmount}</td>
                <td>{rowData.goalAmount}</td>
                <td className="bg-gray-300">{rowData.negativeGoalAmount}</td>
                <td>{rowData.goalBalance}</td>
                <td className="bg-gray-300">{rowData.performancePercentage}</td>
            </tr>
        </tbody>
    );
};

export default TableRow;
