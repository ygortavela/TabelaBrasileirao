import { fetchMatchesByRoundPending, fetchMatchesByRoundSucess, fetchMatchesByRoundError } from './actions';
import { MatchActionTypes } from './types';
import { getMatchesByRoundList } from '../../services/services';

const fetchMatchesByRound = () => {
    return async (dispatch: (args: MatchActionTypes) => MatchActionTypes) => {
        dispatch(fetchMatchesByRoundPending());

        try {
            const response = await getMatchesByRoundList();
            dispatch(fetchMatchesByRoundSucess(response.data));
        } catch (error) {
            dispatch(fetchMatchesByRoundError(error));
        }
    };
};

export default fetchMatchesByRound;
