import { Settings } from './Settings';

// TODO: write code here
const settings = new Settings();
settings.add('theme', 'light');
settings.add('music', 'pop');
settings.add('difficulty', 'normal');
const settingsGet = settings.get();

console.log(settingsGet);
console.log('app worked!');