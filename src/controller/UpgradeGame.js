const { GAME_STRING } = require('../Constant');
const generateMiniGameNumber = require('../generateMiniGameNumber');
const ItemGrade = require('../model/ItemGrade');
const { isUpgraded } = require('../UpgradeUtils');
const Validation = require('../Validation');
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
  printMessage,
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
    try {
      Validation.challengeCommand(command);
      this.challengeCommandBranch(command);
    } catch (error) {
      printMessage(error.message);
      readChallengeCommand(this.checkChellengeCommand.bind(this));
    }
  }

  challengeCommandBranch(command) {
    if (command === GAME_STRING.challenge) {
      return this.upgrade();
    }
    return this.endGame();
  }

  upgrade() {
    readMiniGameInput(this.checkMiniGameCommand.bind(this));
  }

  checkMiniGameCommand(command) {
    try {
      Validation.miniGame(command);
      this.miniGameCommandBranch(command);
    } catch (error) {
      printMessage(error.message);
      readMiniGameInput(this.checkMiniGameCommand.bind(this));
    }
  }

  miniGameCommandBranch(command) {
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
