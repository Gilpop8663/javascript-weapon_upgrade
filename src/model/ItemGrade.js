const { GAME_STRING } = require('../Constant');

class ItemGrade {
  #grade;

  #percent = [80, 70, 60, 50, 40, 30, 20, 10];

  #isMiniSuccess = null;

  #curPercent = 0;

  constructor() {
    this.#grade = 0;
  }

  setPercent(command, randomNumber, kind) {
    if (ItemGrade.isSuccess(command, randomNumber)) {
      this.sucessMiniGame(kind);
      this.#isMiniSuccess = true;
      return;
    }
    this.#isMiniSuccess = false;
  }

  getIsMiniSuccess() {
    return this.#isMiniSuccess;
  }

  static isSuccess(command, randomNumber) {
    if (Number(command) === randomNumber) {
      return true;
    }
    if (ItemGrade.isSnifflingSuccess(command, randomNumber)) {
      return true;
    }
    return false;
  }

  static isSnifflingSuccess(command, randomNumber) {
    if (command === GAME_STRING.even && randomNumber % 2 === 0) {
      return true;
    }
    if (command === GAME_STRING.odd && randomNumber % 2 === 1) {
      return true;
    }
    return false;
  }

  sucessMiniGame(kind) {
    if (kind === GAME_STRING.number) {
      this.#curPercent = this.#percent[this.#grade] + 10;
    }
    if (kind === GAME_STRING.sniffling) {
      this.#curPercent = this.#percent[this.#grade] + 50;
    }
  }

  getGrade() {
    return this.#grade;
  }
}

module.exports = ItemGrade;
