import React from 'react';
import * as redux from 'react-redux';
import { render, fireEvent } from '@testing-library/react';
import TeamItem from './TeamItem';

const teamData = {
    teamId: 1,
    name: 'Flamengo',
    initials: 'FLA',
};
const mockDispatchFn = jest.fn();

beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

    useDispatchSpy.mockReturnValue(() => mockDispatchFn());
});

afterEach(() => {
    mockDispatchFn.mockClear();
});

test('it should renders team item', () => {
    const { getByText } = render(<TeamItem team={teamData} />);

    const renderedInfo = getByText('Flamengo (FLA)');

    expect(renderedInfo).toBeInTheDocument();
});

test('it should handle edit button', () => {
    const { container } = render(<TeamItem team={teamData} />);
    const editButton = container.querySelector('button')!;

    fireEvent.click(editButton);

    expect(editButton).toBeInTheDocument();
    expect(mockDispatchFn).toHaveBeenCalledTimes(2);
});
