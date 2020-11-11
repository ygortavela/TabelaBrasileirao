import React from 'react';
import * as redux from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import TeamsList from './TeamsList';

const teams = [
    {
        teamId: 1,
        name: 'Flamengo',
        initials: 'FLA',
    },
    {
        teamId: 2,
        name: 'Corinthians',
        initials: 'COR',
    },
];
const mockDispatchFn = jest.fn();

beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const useSelectorSpy = jest.spyOn(redux, 'useSelector');

    useDispatchSpy.mockReturnValue(() => mockDispatchFn());
    useSelectorSpy.mockReturnValue(teams);
});

afterEach(() => {
    mockDispatchFn.mockClear();
});

test('it should renders teams list', () => {
    const { container } = render(<TeamsList />);

    const teamsListNode = container.querySelector('ul');
    const childNodes = teamsListNode?.childNodes;

    expect(teamsListNode).toBeInTheDocument();
    expect(childNodes?.length).toBe(2);
    childNodes?.forEach((child, index) => {
        expect(child.textContent).toBe(`${teams[index].name} (${teams[index].initials})`);
    });
});

test('it should handle create button', () => {
    const { container } = render(<TeamsList />);
    const createButton = container.querySelector('#button__create-team')!;

    fireEvent.click(createButton);

    expect(createButton).toBeInTheDocument();
    expect(mockDispatchFn).toHaveBeenCalledTimes(3);
});
