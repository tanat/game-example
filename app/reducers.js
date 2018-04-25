import constants from './constants';

function appState(state = constants.initial.appMode, action) {
  switch (action.type) {
    case constants.actions.APP_MODE_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return constants.initial.appMode;
    default:
      return state;
  }
}

function rows(state = constants.initial.rows, action) {
  switch (action.type) {
    case constants.actions.ROW_CHANGED:
      return state.update(
        state.findIndex(r => r.key === action.payload.key),
        () => action.payload,
      );
    default:
      return state;
  }
}

function winner(state = null, action) {
  switch (action.type) {
    case constants.actions.WINNER_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return null;
    default:
      return state;
  }
}

function currentUser(state = 1, action) {
  switch (action.type) {
    case constants.actions.CURRENT_USER_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return 1;
    default:
      return state;
  }
}

export default {
  appState,
  winner,
  currentUser,
  rows,
};
