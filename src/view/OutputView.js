const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('../Constant');

const OutputView = {
  printStart() {
    Console.print(`${GAME_MESSAGE.start}\n`);
  },
  printCurGrade(grade) {
    Console.print(GAME_MESSAGE.showCurGrade(grade));
  },
};

module.exports = OutputView;
