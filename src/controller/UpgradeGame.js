const { GAME_STRING } = require('../Constant');
const generateMiniGameNumber = require('../generateMiniGameNumber');
const ItemGrade = require('../model/ItemGrade');
const { isUpgraded } = require('../UpgradeUtils');
const {
  readChallengeCommand,
  readMiniGameInput,
} = require('../view/InputView');
const {
  printStart,
  printCurGrade,
  printMiniGameNumberResult,
  printMiniGameSniffling,
  printUpgradeResult,
  printGameResult,
} = require('../view/OutputView');

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
    if (command === GAME_STRING.challenge) {
      return readMiniGameInput(this.checkMiniGameCommand.bind(this));
    }
    return this.endGame();
  }

  checkMiniGameCommand(command) {
    const randomNumber = generateMiniGameNumber();
    const isNotNumber = Number.isNaN(Number(command));
    if (isNotNumber) {
      this.snifflingGame(command, randomNumber);
      return;
    }
    this.matchNumberGame(command, randomNumber);
  }

  matchNumberGame(command, randomNumber) {
    this.#itemGrade.setPercent(command, randomNumber, GAME_STRING.sniffling);
    const isSuccess = this.#itemGrade.getIsMiniSuccess();
    printMiniGameNumberResult(randomNumber, isSuccess);
    this.showUpgradeResult();
  }

  snifflingGame(command, randomNumber) {
    this.#itemGrade.setPercent(command, randomNumber, GAME_STRING.number);
    const isSuccess = this.#itemGrade.getIsMiniSuccess();
    printMiniGameSniffling(randomNumber, isSuccess);
    this.showUpgradeResult();
  }

  showUpgradeResult() {
    const percent = this.#itemGrade.getPercent();
    const isSuccess = isUpgraded(percent);
    printUpgradeResult(isSuccess, percent);
    this.moreGameOrEndGame(isSuccess);
  }

  moreGameOrEndGame(isSuccess) {
    if (isSuccess) {
      this.#itemGrade.setGrade();
      return this.askUpgrade();
    }
    return this.endGame();
  }

  endGame() {
    const grade = this.#itemGrade.getGrade();
    printGameResult(grade);
  }
}

module.exports = UpgradeGame;
