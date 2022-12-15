const { GAME_STRING, ERROR_MESSAGE, GAME_NUMBER } = require('./Constant');

const Validation = {
  challengeCommand(command) {
    if (command !== GAME_STRING.challenge && command !== GAME_STRING.stop) {
      throw new Error(ERROR_MESSAGE.enforce);
    }
  },
  miniGame(command) {
    const userNumber = Number(command);
    if (Number.isNaN(userNumber)) {
      this.miniGameCommand(command);
      return;
    }
    this.isMiniGameRange(userNumber);
    this.isInterger(userNumber);
  },
  miniGameCommand(command) {
    if (command !== GAME_STRING.even && command !== GAME_STRING.odd) {
      throw new Error(ERROR_MESSAGE.miniGame);
    }
  },
  isMiniGameRange(userNumber) {
    if (
      userNumber < GAME_NUMBER.randomStart ||
      userNumber > GAME_NUMBER.randomEnd
    ) {
      throw new Error(ERROR_MESSAGE.miniGame);
    }
  },
  isInterger(userNumber) {
    if (!Number.isInteger(userNumber)) {
      throw new Error(ERROR_MESSAGE.interger);
    }
  },
};

module.exports = Validation;
