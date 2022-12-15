const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const InputView = {
  // 강화 도전 여부
  readChallengeCommand(callback) {
    Console.readLine(`${GAME_MESSAGE.enforce}\n`, callback);
  },

  // 미니 게임 숫자 혹은 커맨드
  readMiniGameInput() {},
};

module.exports = InputView;
