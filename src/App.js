const UpgradeGame = require('./controller/UpgradeGame');

class App {
  play() {
    const upgradeGame = new UpgradeGame();
    upgradeGame.startGame();
  }
}

const app = new App();
app.play();

module.exports = App;
