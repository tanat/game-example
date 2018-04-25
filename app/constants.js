import { List } from 'immutable';

const appModes = ['NOT_STARTED', 'STARTED', 'FINISHED'];

export default {
  appModes,
  userNames: ['Игрок 1', 'Игрок 2'],
  initial: {
    appMode: appModes[0],
    rows: List([
      { key: '11', user: null },
      { key: '12', user: null },
      { key: '13', user: null },
      { key: '21', user: null },
      { key: '22', user: null },
      { key: '23', user: null },
      { key: '31', user: null },
      { key: '32', user: null },
      { key: '33', user: null },
    ]),
  },
  actions: {
    GAME_RESET: 'GAME_RESET',
    APP_MODE_CHANGED: 'APP_MODE_CHANGED',
    ROW_CHANGED: 'ROW_CHANGED',
    WINNER_CHANGED: 'WINNER_CHANGED',
    CURRENT_USER_CHANGED: 'CURRENT_USER_CHANGED',
  },
};
