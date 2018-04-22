import constants from './constants';

function appMode(state = constants.initial.appMode, action) {
  switch (action.type) {
    case constants.actions.APP_MODE_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return constants.initial.appMode;
    default:
      return state;
  }
}

function playerOneSelectedRows(state = constants.initial.selectedRows, action) {
  switch (action.type) {
    case constants.actions.PLAYER_ONE_SELECTED_ROWS_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return constants.initial.selectedRows;
    default:
      return state;
  }
}

function playerTwoSelectedRows(state = constants.initial.selectedRows, action) {
  switch (action.type) {
    case constants.actions.PLAYER_TWO_SELECTED_ROWS_CHANGED:
      return action.payload;
    case constants.actions.GAME_RESET:
      return constants.initial.selectedRows;
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

export default {
  appMode,
  playerOneSelectedRows,
  playerTwoSelectedRows,
  winner,
};
