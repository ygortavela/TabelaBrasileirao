export interface MatchState {
    pending: boolean;
    error: any;
    matchesByRound: Record<number, Match[]>;
    selectedMatch: Match;
    formType: 'CREATE' | 'EDIT' | null;
}

export const FETCH_MATCHES_BY_ROUND_PENDING = 'FETCH_MATCHES_BY_ROUND_PENDING';
export const FETCH_MATCHES_BY_ROUND_SUCCESS = 'FETCH_MATCHES_BY_ROUND_SUCCESS';
export const FETCH_MATCHES_BY_ROUND_ERROR = 'FETCH_MATCHES_BY_ROUND_ERROR';
export const SELECT_MATCH = 'SELECT_MATCHES';
export const TOGGLE_FORM_TYPE = 'TOGGLE_FORM_TYPE';

export interface FetchMatchesByRoundPendingAction {
    type: typeof FETCH_MATCHES_BY_ROUND_PENDING;
}

export interface FetchMatchesByRoundSucessAction {
    type: typeof FETCH_MATCHES_BY_ROUND_SUCCESS;
    payload: Record<number, Match[]>;
}

export interface FetchMatchesByRoundErrorAction {
    type: typeof FETCH_MATCHES_BY_ROUND_ERROR;
    payload: any;
}

export interface SelectMatchAction {
    type: typeof SELECT_MATCH;
    payload: Match;
}

export interface ToggleFormTypeAction {
    type: typeof TOGGLE_FORM_TYPE;
    payload: 'CREATE' | 'EDIT' | null;
}

export type MatchActionTypes =
    | FetchMatchesByRoundPendingAction
    | FetchMatchesByRoundSucessAction
    | FetchMatchesByRoundErrorAction
    | SelectMatchAction
    | ToggleFormTypeAction;
