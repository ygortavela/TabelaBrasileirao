import {
    MatchActionTypes,
    SELECT_MATCH,
    TOGGLE_FORM_TYPE,
    FETCH_MATCHES_BY_ROUND_PENDING,
    FETCH_MATCHES_BY_ROUND_SUCCESS,
    FETCH_MATCHES_BY_ROUND_ERROR,
} from './types';

export const fetchMatchesByRoundPending = (): MatchActionTypes => {
    return {
        type: FETCH_MATCHES_BY_ROUND_PENDING,
    };
};

export const fetchMatchesByRoundSucess = (matches: Record<number, Match[]>): MatchActionTypes => {
    return {
        type: FETCH_MATCHES_BY_ROUND_SUCCESS,
        payload: matches,
    };
};

export const fetchMatchesByRoundError = (error: any): MatchActionTypes => {
    return {
        type: FETCH_MATCHES_BY_ROUND_ERROR,
        payload: error,
    };
};

export const selectMatch = (selectedMatch: Match): MatchActionTypes => {
    return {
        type: SELECT_MATCH,
        payload: selectedMatch,
    };
};

export const toggleFormType = (formType: 'CREATE' | 'EDIT' | null = null): MatchActionTypes => {
    return {
        type: TOGGLE_FORM_TYPE,
        payload: formType,
    };
};
