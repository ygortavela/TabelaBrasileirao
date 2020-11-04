import { fetchTeamsPending, fetchTeamsSucess, fetchTeamsError } from './actions';
import { TeamActionTypes } from './types';
import { getTeams } from '../../services/services';

const fetchTeams = () => {
    return async (dispatch: (args: TeamActionTypes) => TeamActionTypes) => {
        dispatch(fetchTeamsPending());

        try {
            const response = await getTeams();
            dispatch(fetchTeamsSucess(response.data));
        } catch (error) {
            dispatch(fetchTeamsError(error));
        }
    };
};

export default fetchTeams;
