const { ERROR_SUBJECT } = require('../src/Constant');
const Validation = require('../src/Validation');

describe('예외 조건 테스트', () => {
  test.each([['q'], ['asd'], ['12'], ['-1'], ['1.2'], ['e']])(
    '%s : 미니 게임 커맨드가 아닌 커맨드 혹은 범위를 벗어나는 숫자를 넣는다면 예외가 발생한다',
    (command) => {
      expect(() => Validation.miniGame(command)).toThrow(ERROR_SUBJECT);
    }
  );

  test.each([['q'], ['asd'], ['12'], ['-1'], ['e']])(
    '%s : 강화 도전 여부 커맨드가 아닌 커맨드를 입력한다면 예외가 발생한다',
    (command) => {
      expect(() => Validation.challengeCommand(command)).toThrow(ERROR_SUBJECT);
    }
  );
});
