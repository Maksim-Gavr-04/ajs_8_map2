# `Map (задача со звёздочкой)`



## Легенда

Давать возможность пользователю кастомизировать внешний вид приложения - достаточно хорошая идея. Поэтому вы решили также реализовать поддержку этой функциональности в своей игре.

## Описание

У вас есть default'ные настройки, хранящиеся в `Map`'е:
1. `'theme': 'dark'` (другие возможные значения - `'light'`, `'gray'`);
1. `'music': 'trance'` (другие возможные значения - `'pop'`, `'rock'`, `'chillout'`, `'off'`);
1. `'difficulty': 'easy'` (другие возможные значения - `'normal'`, `'hard'`, `'nightmare'`).

Напишите класс `Settings`, который содержит:
1. Набор настроек по умолчанию - хранить в `Map`'е;
1. Набор пользовательских настроек (пользователь может установить конкретную настройку по имени и значению) - хранить в `Map`'е нужно только те настройки, которые пользователь установил;
1. Get'тер `settings`, который возвращает `Map`, полученный путём наложения пользовательских настроек, на default'ные.

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.
