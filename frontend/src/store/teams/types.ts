export interface TeamState {
    pending: boolean;
    error: any;
    teams: Team[];
    selectedTeam: Team;
    formType: 'CREATE' | 'EDIT' | null;
}

export const FETCH_TEAMS_PENDING = 'FETCH_TEAMS_PENDING';
export const FETCH_TEAMS_SUCCESS = 'FETCH_TEAMS_SUCCESS';
export const FETCH_TEAMS_ERROR = 'FETCH_TEAMS_ERROR';
export const ADD_TEAM = 'ADD_TEAM';
export const REMOVE_TEAM = 'DELETE_TEAM';
export const SELECT_TEAM = 'SELECT_TEAM';
export const TOGGLE_FORM_TYPE = 'TOGGLE_FORM_TYPE';

export interface FetchTeamsPendingAction {
    type: typeof FETCH_TEAMS_PENDING;
}

export interface FetchTeamsSucessAction {
    type: typeof FETCH_TEAMS_SUCCESS;
    payload: Team[];
}

export interface FetchTeamsErrorAction {
    type: typeof FETCH_TEAMS_ERROR;
    payload: any;
}

export interface AddTeamAction {
    type: typeof ADD_TEAM;
    payload: Team;
}

export interface DeleteTeamAction {
    type: typeof REMOVE_TEAM;
    meta: {
        teamId: number;
    };
}

export interface SelectTeamAction {
    type: typeof SELECT_TEAM;
    payload: Team;
}

export interface ToggleFormTypeAction {
    type: typeof TOGGLE_FORM_TYPE;
    payload: 'CREATE' | 'EDIT' | null;
}

export type TeamActionTypes =
    | FetchTeamsPendingAction
    | FetchTeamsSucessAction
    | FetchTeamsErrorAction
    | AddTeamAction
    | DeleteTeamAction
    | SelectTeamAction
    | ToggleFormTypeAction;
