import orderByProps from '../basic.js';
/*
test.each([
  ['hero1', 'Bowman', new heroes.Character('hero1', 'Bowman')],
  ['hero2', 'Bowman', new heroes.Bowman('hero2', 'Bowman')],
  ['hero3', 'Magician', new heroes.Magician('hero3', 'Magician')],
  ['hero4', 'Magician', new heroes.Magician('hero4', 'Magician')],
  ['hero5', 'Magician', new heroes.Magician('hero5', 'Magician')],
  ['hero6', 'Magician', new heroes.Magician('hero6', 'Magician')],
  ['hero7', 'Magician', new heroes.Magician('hero7', 'Magician')],
])(
  'should return a string corresponding to the health level',
  (name, type, createNewObject) => {
    for (const key of Object.values(heroes)) {
      const ClassName = key;
      const result = new ClassName(name, type);
      expect(result).toEqual(createNewObject);
    }
  },
);
*/
test('return sort obj', () => {
  const obj = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
  expect(orderByProps(obj, ["name", "level"])).toEqual([
    { key: 'name', value: 'мечник' },
    { key: 'level', value: '2' },
    { key: 'attack', value: '80' },
    { key: 'defence', value: '40' },
    { key: 'health', value: '10' }
  ]);
});
