export interface TeamFormState {
    selectedTeam: Team;
    formType: 'CREATE' | 'EDIT' | null;
}

export const SELECT_TEAM = 'SELECT_TEAM';
export const TOGGLE_FORM_TYPE = 'TOGGLE_FORM_TYPE';

export interface SelectTeamAction {
    type: typeof SELECT_TEAM;
    payload: Team;
}

export interface ToggleFormTypeAction {
    type: typeof TOGGLE_FORM_TYPE;
    payload: 'CREATE' | 'EDIT' | null;
}

export type TeamActionTypes = SelectTeamAction | ToggleFormTypeAction;
