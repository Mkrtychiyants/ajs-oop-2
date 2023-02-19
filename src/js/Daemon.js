import Character from './Character';

export default class Daemon extends Character {
  constructor(name) {
    super(name);
    this.type = 'daemon';
    this.attack = 10;
    this.defence = 40;
  }
}
