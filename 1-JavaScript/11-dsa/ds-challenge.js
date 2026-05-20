// Describe the challenge:
// 1. Create one player array for each team (variables 'players1' and 'players2')
// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one variable for each odd called 'team1', 'draw' and 'team2'
// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of

const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
}

// 1
const [players1, players2] = game.players;
console.log('Players 1 and 2:', players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log('Goalkeeper and field players: ', gk, fieldPlayers);

// 3
const allPlayers = [...players1, ...players2];
console.log('All players: ', allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log('Players 1 final: ', players1Final);

// 5
const { team1, x: draw, team2 } = game.odds;
console.log('Odds: ', team1, draw, team2);

// 6
const printGoals = function (...players) {
    return `${players.length} goals were scored`;
}

const printGoalsResult = printGoals(...game.scored);
console.log('Print Goals Result:', printGoalsResult);

// 7
team1 < team2 && console.log('team 2 is more likely to win');
team1 > team2 && console.log('team 1 is more likely to win');
