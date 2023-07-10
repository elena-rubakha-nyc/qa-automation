/* Тестовые данные - массив  объектов players, выведите в консоль игрока с максимальным значением scorePoints 
(Используйте цикл, обращение к свойству через точку и метод глобального объекта Math, 
позволяющий найти большее число из всех возможных).

Для этого создайте пустой массив для хранения очков, 
используя цикл, заполните его значениями из данного вам массива.

Изучите spread опреатор (...), позволяющий развернуть данные из результирующего массива всех очков игроков 
в метод объекта Math. */

const players = [
  {
    id: 1,
    name: "Ivan",
    scorePoints: 4500,
  },
  {
    id: 2,
    name: "Petr",
    scorePoints: 3600,
  },
  {
    id: 3,
    name: "Vadim",
    scorePoints: 3433,
  },
  {
    id: 4,
    name: "Olga",
    scorePoints: 2356,
  },
];

let scores = [];

for (let player of players) {
  scores.push(player.scorePoints);
}

// console.log(scores)
// console.log(Math.max(...scores));

let maxScore = Math.max(...scores);

for (let player of players) {
  if (player.scorePoints == maxScore) {
    console.log(`${player.name} has max score of ${maxScore} points`);
  }
}
