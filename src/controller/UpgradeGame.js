const { GAME_STRING } = require('../Constant');
const generateMiniGameNumber = require('../generateMiniGameNumber');
const ItemGrade = require('../model/ItemGrade');
const Validation = require('../Validation');
const {
  readChallengeCommand,
  readMiniGameInput,
} = require('../view/InputView');
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

  upgrade() {
    readMiniGameInput(this.checkMiniGameCommand.bind(this));
  }

  checkMiniGameCommand(command) {
    Validation.miniGame(command);
    const randomNumber = generateMiniGameNumber();
    console.log(randomNumber);
    console.log(command);
  }

  endGame() {}
}

module.exports = UpgradeGame;
