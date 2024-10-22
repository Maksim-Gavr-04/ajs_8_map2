export class Settings {
  constructor() {
    this.allSettings = new Map([
      [
        'theme', [
          'dark', 'light', 'gray'
        ]
      ],
      [
        'music', [
          'trance', 'pop', 'rock', 'chillout', 'off'
        ]
      ],
      [
        'difficulty', [
          'easy', 'normal', 'hard', 'nightmare'
        ]
      ],
    ]);

    this.defaultSettings = new Map([
      [ 'theme', 'dark' ],
      [ 'music', 'trance' ],
      [ 'difficulty', 'easy' ]
    ]);

    this.userSettings = new Map();
  }

  add(settingKey, settingValue) {
    if (!this.allSettings.has(settingKey)) {
      throw new Error('Unknown setting key!');
    }

    const arrayOfSettingValues = this.allSettings.get(settingKey);

    if (!arrayOfSettingValues.includes(settingValue)) {
      throw new Error('Unknown setting value!');
    }

    this.userSettings.set(settingKey, settingValue);
  }

  get() {
    return new Map([ ...this.defaultSettings, ...this.userSettings ]);
  }
}


