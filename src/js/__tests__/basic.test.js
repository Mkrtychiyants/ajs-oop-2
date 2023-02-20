import Character from '../Character';
import Bowerman from '../Bowerman';
import Daemon from '../Daemon';
import Magician from '../Magician';
import Swordsman from '../Swordsman';
import Undead from '../Undead';
import Zombie from '../Zombie';

test('creation', () => {
  const char1 = new Character('char1');
  const char2 = new Bowerman('Boweman1');
  const char3 = new Daemon('Daemon1');
  const char4 = new Magician('Mag1');
  const char5 = new Swordsman('Sword1');
  const char6 = new Undead('Undead1');
  const char7 = new Zombie('zombie1');

  expect(char1).toBeInstanceOf(Character);
  expect(char2).toBeInstanceOf(Bowerman);
  expect(char3).toBeInstanceOf(Daemon);
  expect(char4).toBeInstanceOf(Magician);
  expect(char5).toBeInstanceOf(Swordsman);
  expect(char6).toBeInstanceOf(Undead);
  expect(char7).toBeInstanceOf(Zombie);
});

const char = new Magician('character');
test('Wrong type check', () => {
  expect(() => {
    char.type = 'dmn';
  }).toThrow();
});
test('Incorrect name check', () => {
  expect(() => {
    char.name = 'ch';
  }).toThrow();
});
test('Name check', () => {
  expect(char.name).toBe('character');
});
test('Type check', () => {
  expect(char.type).toBe('magician');
});

const char1 = new Character('character');
char1.health = 0;
test('Deadman methods', () => {
  expect(() => {
    char1.levelUp();
  }).toThrow();
});
test('Deadman methods2', () => {
  expect(() => {
    char1.damage(10);
  }).toThrow();
});

const char2 = new Character('character');
char2.health = 40;
char2.attack = 10;
char2.defence = 10;

test('LevelUp check', () => {
  char2.levelUp();
  expect(char2.health).toBe(100);
  expect(char2.level).toBe(2);
  expect(char2.defence).toBe(12);
  expect(char2.attack).toBe(12);
});
test('Damage check', () => {
  char2.damage(20);
  expect(char2.health).toBe(82.4);
});
