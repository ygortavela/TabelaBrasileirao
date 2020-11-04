import {
    TeamState,
    TeamActionTypes,
    SELECT_TEAM,
    TOGGLE_FORM_TYPE,
    ADD_TEAM,
    REMOVE_TEAM,
    FETCH_TEAMS_PENDING,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_ERROR,
} from './types';

const initialState: TeamState = {
    pending: false,
    teams: [],
    error: null,
    selectedTeam: { teamId: 0, name: '', initials: '' },
    formType: null,
};

export const teamReducer = (state = initialState, action: TeamActionTypes): TeamState => {
    switch (action.type) {
        case FETCH_TEAMS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_TEAMS_SUCCESS:
            return {
                ...state,
                pending: false,
                teams: action.payload,
            };
        case FETCH_TEAMS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case ADD_TEAM:
            return {
                ...state,
                teams: [...state.teams, action.payload],
            };
        case REMOVE_TEAM:
            return {
                ...state,
                teams: state.teams.filter((team) => team.teamId !== action.meta.teamId),
            };
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
