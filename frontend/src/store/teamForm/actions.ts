import { TeamActionTypes, SELECT_TEAM, TOGGLE_FORM_TYPE } from './types';

export const selectTeam = (newTeam: Team): TeamActionTypes => {
    return {
        type: SELECT_TEAM,
        payload: newTeam,
    };
};

export const toggleFormType = (formType: 'CREATE' | 'EDIT' | null): TeamActionTypes => {
    return {
        type: TOGGLE_FORM_TYPE,
        payload: formType,
    };
};
