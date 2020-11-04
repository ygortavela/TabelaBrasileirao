import {
    TeamActionTypes,
    ADD_TEAM,
    REMOVE_TEAM,
    SELECT_TEAM,
    TOGGLE_FORM_TYPE,
    FETCH_TEAMS_PENDING,
    FETCH_TEAMS_SUCCESS,
    FETCH_TEAMS_ERROR,
} from './types';

export const fetchTeamsPending = (): TeamActionTypes => {
    return {
        type: FETCH_TEAMS_PENDING,
    };
};

export const fetchTeamsSucess = (teams: Team[]): TeamActionTypes => {
    return {
        type: FETCH_TEAMS_SUCCESS,
        payload: teams,
    };
};

export const fetchTeamsError = (error: any): TeamActionTypes => {
    return {
        type: FETCH_TEAMS_ERROR,
        payload: error,
    };
};

export const addTeam = (newTeam: Team): TeamActionTypes => {
    return {
        type: ADD_TEAM,
        payload: newTeam,
    };
};

export const removeTeam = (teamId: number): TeamActionTypes => {
    return {
        type: REMOVE_TEAM,
        meta: {
            teamId,
        },
    };
};

export const selectTeam = (selectedTeam: Team): TeamActionTypes => {
    return {
        type: SELECT_TEAM,
        payload: selectedTeam,
    };
};

export const toggleFormType = (formType: 'CREATE' | 'EDIT' | null = null): TeamActionTypes => {
    return {
        type: TOGGLE_FORM_TYPE,
        payload: formType,
    };
};
