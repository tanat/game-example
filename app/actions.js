import { createAction } from 'redux-actions';
import constants from './constants';

export const CurrentUserChangeAction = createAction(constants.actions.CURRENT_USER_CHANGED);
export const RowChangeAction = createAction(constants.actions.ROW_CHANGED);
export const WinnerChangeAction = createAction(constants.actions.WINNER_CHANGED);
export const AppStateChangeAction = createAction(constants.actions.APP_STATE_CHANGED);
export const GameResetAction = createAction(constants.actions.GAME_RESET);
export const CorrectKeysAction = createAction(constants.actions.CORRECT_KEYS_LOADED);
