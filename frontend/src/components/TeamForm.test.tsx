import React from 'react';
import * as redux from 'react-redux';
import { render } from '@testing-library/react';
import TeamForm from './TeamForm';

const team = {
    teamId: 1,
    name: 'Flamengo',
    initials: 'FLA',
};
const mockDispatchFn = jest.fn();

jest.mock('../services/services', () => ({
    postTeam: jest.fn(),
    replaceTeam: jest.fn(),
    deleteTeam: jest.fn(),
}));

beforeEach(() => {
    const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
    const useSelectorSpy = jest.spyOn(redux, 'useSelector');

    useDispatchSpy.mockReturnValue(() => mockDispatchFn());
    useSelectorSpy.mockReturnValue(team);
});

afterEach(() => {
    mockDispatchFn.mockClear();
});

test('it should renders team form on CREATE mode', () => {
    const { container } = render(<TeamForm type="CREATE" />);

    const inputFields = container.querySelectorAll('input');
    const submitButton = container.querySelector('#button__submit-team');
    const deleteButton = container.querySelector('#button__delete-team');

    expect(inputFields.length).toBe(2);
    inputFields.forEach((input) => expect(input).toBeInTheDocument());
    expect(submitButton).toBeInTheDocument();
    expect(deleteButton).toBeNull();
});

test('it should renders team form on EDIT mode', () => {
    const { container } = render(<TeamForm type="EDIT" />);

    const deleteButton = container.querySelector('#button__delete-team');

    expect(deleteButton).toBeInTheDocument();
});
