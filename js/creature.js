export class Creature {
  action(battle) {
      return new Promise((resolve, reject) => {
          battle.enemies[0].health =- 3;
          resolve();
      });
  }
}
