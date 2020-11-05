import {
    MatchState,
    MatchActionTypes,
    SELECT_MATCH,
    TOGGLE_FORM_TYPE,
    FETCH_MATCHES_BY_ROUND_PENDING,
    FETCH_MATCHES_BY_ROUND_SUCCESS,
    FETCH_MATCHES_BY_ROUND_ERROR,
} from './types';

const initialState: MatchState = {
    pending: false,
    matchesByRound: {},
    error: null,
    selectedMatch: { matchId: 0, round: 0, matchDateTime: [], matchPlace: '' },
    formType: null,
};

export const matchReducer = (state = initialState, action: MatchActionTypes): MatchState => {
    switch (action.type) {
        case FETCH_MATCHES_BY_ROUND_PENDING:
            return {
                ...state,
                pending: true,
            };
        case FETCH_MATCHES_BY_ROUND_SUCCESS:
            return {
                ...state,
                pending: false,
                matchesByRound: action.payload,
            };
        case FETCH_MATCHES_BY_ROUND_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        case SELECT_MATCH:
            return {
                ...state,
                selectedMatch: action.payload,
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
