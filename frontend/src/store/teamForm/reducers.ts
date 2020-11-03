import { TeamFormState, TeamActionTypes, SELECT_TEAM, TOGGLE_FORM_TYPE } from './types';

const initialState: TeamFormState = {
    selectedTeam: { teamId: 0, name: '', initials: '' },
    formType: null,
};

export const teamFormReducer = (state = initialState, action: TeamActionTypes): TeamFormState => {
    switch (action.type) {
        case SELECT_TEAM:
            return {
                ...state,
                selectedTeam: action.payload,
            };
        case TOGGLE_FORM_TYPE:
            return {
                ...state,
                formType: action.payload,
            };
        default:
            return state;
    }
};
