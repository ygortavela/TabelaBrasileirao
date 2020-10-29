import React from 'react';

type Props = {
    rowData: ClassificationRow;
    classification: number;
};

const TableRow: React.FC<Props> = ({ rowData, classification }) => {
    return (
        <tr className="text-center h-12">
            <td className="text-left px-2">
                <span className="w-6 mr-4">{classification}</span>
                <span>{rowData.teamName}</span>
            </td>
            <td className="bg-gray-100 font-extrabold">{rowData.points}</td>
            <td className="">{rowData.matchesAmount}</td>
            <td className="bg-gray-100">{rowData.winAmount}</td>
            <td>{rowData.tieAmount}</td>
            <td className="bg-gray-100">{rowData.loseAmount}</td>
            <td>{rowData.goalAmount}</td>
            <td className="bg-gray-100">{rowData.negativeGoalAmount}</td>
            <td>{rowData.goalBalance}</td>
            <td className="bg-gray-100">{rowData.performancePercentage}</td>
        </tr>
    );
};

export default TableRow;
