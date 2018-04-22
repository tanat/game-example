import { List } from 'immutable';
const appModes = ['NOT_STARTED', 'STARTED'];

export default {
  appModes,
  initial: {
    appMode: appModes[0],
    selectedRows: List(),
  },
  actions: {
    GAME_RESET: 'GAME_RESET',
    APP_MODE_CHANGED: 'APP_MODE_CHANGED',
    PLAYER_ONE_SELECTED_ROWS_CHANGED: 'PLAYER_ONE_SELECTED_ROWS_CHANGED',
    PLAYER_TWO_SELECTED_ROWS_CHANGED: 'PLAYER_TWO_SELECTED_ROWS_CHANGED',
    WINNER_CHANGED: 'WINNER_CHANGED',
  },
};
