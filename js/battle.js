export class Battle {
    constructor(heroes, enemies) {
        this.heroes = heroes;
        this.enemies = enemies;
        this.creatures = heroes.concat(enemies);

        this.action();
    }

    next() {
        // Determine and return the next creature to take a turn.
        // ...
    }

    action() {
        if (enemies.length === 0) {
            this.emit('victory');
        } else {
            let deadHeroes = this.heroes.reduce((total, hero) => total + (hero.dead ? 1 : 0), 0);

            if (deadHeroes === heroes.length) {
                this.emit('defeat');
            } else {
                let creature = this.next();
                creature.action(this).then(result => this.action());
            }
        }
    }

    action(battle) {
    return new Promise((resolve, reject) => {
        let enemy = battle.pickRandomEnemy();

        battle.camera.moveTo(enemy, 100).then(() => {
            return this.graphics.animate('attack');
        }).then(() => {
            enemy.takeDamage(3);

            return battle.camera.moveTo(this, 100);
        }).then(() => resolve());
    });
}
}
