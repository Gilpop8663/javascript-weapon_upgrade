const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const OutputView = {
  printStart() {
    Console.print(`${GAME_MESSAGE.start}\n`);
  },
  printCurGrade(grade) {
    Console.print(GAME_MESSAGE.showCurGrade(grade));
  },
  printMiniGameNumberResult(randomNumber, isSuccess) {
    const result = isSuccess
      ? GAME_MESSAGE.successNumber
      : GAME_MESSAGE.failNumber;
    Console.print(`${GAME_MESSAGE.showMiniResult(randomNumber, result)}\n`);
  },
  printMiniGameSniffling(randomNumber, isSuccess) {
    const result = isSuccess
      ? GAME_MESSAGE.successSniffling
      : GAME_MESSAGE.failSniffling;
    Console.print(`${GAME_MESSAGE.showMiniResult(randomNumber, result)}\n`);
  },
  printUpgradeResult(isSuccess, percent) {
    Console.print(`${GAME_MESSAGE.showEnforceResult(isSuccess, percent)}\n`);
  },
  printGameResult(grade) {
    Console.print(GAME_MESSAGE.showGameResult(grade));
    Console.close();
  },
  printMessage(message) {
    Console.print(message);
  },
};

module.exports = OutputView;
