import { test, expect } from '@jest/globals';
import { Settings } from '../Settings';

test('Testing the `add()` method with the correct parameters', () => {
  const settings = new Settings();
  settings.add('theme', 'gray');

  const expected = new Map();
  expected.set('theme', 'gray');
  expect(settings.userSettings).toEqual(expected);
});

test('Testing the `add()` method with the incorrect `settingKey`', () => {
  expect(() => {
    const settings = new Settings();
    settings.add('incorrect', 'off');
  }).toThrow('Unknown setting key!');
});

test('Testing the `add()` method with the incorrect `settingValue`', () => {
  expect(() => {
    const settings = new Settings();
    settings.add('difficulty', 'ultraEasy');
  }).toThrow('Unknown setting value!');
});

test('Testing the `get()` method', () => {
  const settings = new Settings();
  settings.add('music', 'off');

  const expected = new Map([
    [ 'theme', 'dark' ],
    [ 'music', 'off' ],
    [ 'difficulty', 'easy' ]
  ]);

  expect(settings.get()).toEqual(expected);
});