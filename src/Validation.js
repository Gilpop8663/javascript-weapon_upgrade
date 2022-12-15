const { GAME_STRING, ERROR_MESSAGE } = require('./Constant');

const Validation = {
  challengeCommand(command) {
    if (command !== GAME_STRING.challenge && command !== GAME_STRING.stop) {
      throw new Error(ERROR_MESSAGE.enforce);
    }
  },
};

module.exports = Validation;
