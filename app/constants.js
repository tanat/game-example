import { List } from 'immutable';

const appStates = ['NOT_STARTED', 'STARTED', 'FINISHED'];

export default {
  appStates,
  userNames: ['Игрок 1', 'Игрок 2'],
  answerOptions: [
    ['11', '12', '13'],
    ['21', '22', '23'],
    ['31', '32', '33'],
    ['11', '21', '31'],
    ['12', '22', '32'],
    ['13', '23', '33'],
    ['11', '22', '33'],
    ['13', '22', '31'],
  ],
  initial: {
    appMode: appStates[0],
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
    CORRECT_KEYS_LOADED: 'CORRECT_KEYS_LOADED',
  },
};
