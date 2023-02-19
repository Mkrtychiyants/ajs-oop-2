export default class Character {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.level = 1;
    this.attack = 0;
    this.defence = 0;
  }

  set name(name) {
    if ((name.length > 2) && (name.length < 10) && (typeof name === 'string')) {
      this.name1 = name;
    } else {
      throw new Error('Unsupported type of player');
    }
  }

  get name() {
    return this.name1;
  }

  set type(wariorType) {
    const allowedWariors = [
      'bowman',
      'swordsman',
      'magician',
      'daemon',
      'undead',
      'zombie',
    ];

    if ((typeof wariorType === 'string') && (allowedWariors.includes(wariorType.toLowerCase()))) {
      this.type1 = wariorType;
    } else throw new Error('Unsupported type of player');
  }

  get type() {
    return this.type1;
  }
}
