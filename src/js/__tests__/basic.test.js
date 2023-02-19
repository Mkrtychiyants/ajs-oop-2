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
