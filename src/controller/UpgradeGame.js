const { readChallengeCommand } = require('../view/InputView');
const { printStart } = require('../view/OutputView');

class UpgradeGame {
  startGame() {
    printStart();
    readChallengeCommand(this.checkChellengeCommand.bind(this));
  }

  checkChellengeCommand(command) {
    console.log(command);
  }
}

module.exports = UpgradeGame;
