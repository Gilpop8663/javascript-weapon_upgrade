const GAME_STRING = Object.freeze({
  odd: 'O',
  even: 'E',
  challenge: 'Y',
  stop: 'N',
});

const GAME_NUMBER = Object.freeze({
  randomStart: 0,
  randomEnd: 9,
  successNumberPercent: 50,
  sucessSnifflingPercent: 10,
});

const GAME_MESSAGE = Object.freeze({
  start: '무기 강화 게임을 시작합니다.',
  showCurGrade: (grade) => `현재 강화 등급: +${grade}강`,
  enforce: `강화 도전 여부를 입력해주세요. (도전: ${GAME_STRING.challenge}, 중단: ${GAME_STRING.stop})`,
  miniGame: `미니 게임을 위한 숫자 또는 홀/짝 커맨드를 입력해주세요. (숫자: ${GAME_NUMBER.randomStart} ~ ${GAME_NUMBER.randomEnd} 사이의 수, 홀: ${GAME_STRING.odd}, 짝: ${GAME_STRING.even})`,
  showEnforceResult: (isSuccess, percent) =>
    `강화 ${isSuccess ? '성공' : '실패'}! (강화 확률 ${percent}%)`,
  showMiniCount: (count) => `미니 게임 랜덤 수: ${count} -->`,
  successNumber: `숫자 맞추기 성공! 강화 확률 ${GAME_NUMBER.successNumberPercent}% 증가!`,
  failNumber: '숫자 맞추기 실패!',
  successSniffling: `홀/짝 맞추기 성공! 강화 확률 ${GAME_NUMBER.sucessSnifflingPercent}% 증가!`,
  failSniffling: '홀/짝 맞추기 실패!',
  showGameResult: (grade) => `최종 강화 결과: +${grade}강`,
});

const ERROR_SUBJECT = '[ERROR]';

const ERROR_MESSAGE = Object.freeze({
  enforce: `${ERROR_SUBJECT} 강화 도전 여부는 도전: ${GAME_STRING.challenge}, 중단: ${GAME_STRING.stop} 만 입력 가능합니다.`,
  miniGame: `${ERROR_SUBJECT} 미니 게임의 입력은 숫자: ${GAME_NUMBER.randomStart} ~ ${GAME_NUMBER.randomEnd} 사이의 수, 홀: ${GAME_STRING.odd}, 짝: ${GAME_STRING.even} 만 입력 가능합니다.`,
  interger: `${ERROR_SUBJECT} 미니 게임의 숫자는 정수만 가능합니다.`,
});

module.exports = {
  ERROR_SUBJECT,
  ERROR_MESSAGE,
  GAME_NUMBER,
  GAME_MESSAGE,
  GAME_STRING,
};
