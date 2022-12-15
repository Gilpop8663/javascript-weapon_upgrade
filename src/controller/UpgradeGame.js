const { GAME_STRING } = require('../Constant');
const ItemGrade = require('../model/ItemGrade');
const Validation = require('../Validation');
const { readChallengeCommand } = require('../view/InputView');
const { printStart, printCurGrade } = require('../view/OutputView');

class UpgradeGame {
  #itemGrade = new ItemGrade();

  startGame() {
    printStart();
    this.askUpgrade();
  }

  askUpgrade() {
    this.showCurGrade();
    readChallengeCommand(this.checkChellengeCommand.bind(this));
  }

  showCurGrade() {
    const grade = this.#itemGrade.getGrade();
    printCurGrade(grade);
  }

  checkChellengeCommand(command) {
    Validation.challengeCommand(command);
    console.log(command);
    if (command === GAME_STRING.challenge) {
      return this.upgrade();
    }
    return this.endGame();
  }

  upgrade() {}

  endGame() {}
}

module.exports = UpgradeGame;
