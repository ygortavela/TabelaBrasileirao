import { combineReducers } from 'redux';
import { matchReducer } from './matches/reducers';
import { teamReducer } from './teams/reducers';

const rootReducer = combineReducers({ matchState: matchReducer, teamState: teamReducer });

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
