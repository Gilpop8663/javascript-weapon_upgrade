class ItemGrade {
  #grade;

  constructor() {
    this.#grade = 0;
  }

  successUpgrade() {}

  getGrade() {
    return this.#grade;
  }
}

module.exports = ItemGrade;
