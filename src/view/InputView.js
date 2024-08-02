const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');
const InputErrorHandler = require('../utils/InputErrorHandler');
const Validation = require('../Validation');

const InputView = {
  // 강화 도전 여부
  readChallengeCommand(callback) {
    Console.readLine(`${GAME_MESSAGE.enforce}\n`, (command) => {
      const check = InputErrorHandler(
        () => Validation.challengeCommand(command),
        InputView.readChallengeCommand,
        callback
      );
      if (check) callback(command);
    });
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput(callback) {
    Console.readLine(`${GAME_MESSAGE.miniGame}\n`, (command) => {
      const check = InputErrorHandler(
        () => Validation.miniGame(command),
        InputView.readMiniGameInput,
        callback
      );
      if (check) callback(command);
    });
  },
};

module.exports = InputView;
