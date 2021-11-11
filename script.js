const die1 = document.querySelector('#die1');
const die2 = document.querySelector('#die2');
const rollBtn = document.querySelector('.roll-btn');
const diceImages = [
	'dice1.png',
	'dice2.png',
	'dice3.png',
	'dice4.png',
	'dice5.png',
	'dice6.png',
];
const dice = document.querySelectorAll('img');
const result = document.querySelector('#result');

rollBtn.addEventListener('click', () => {
	roll();
});

function roll() {
	dice.forEach(function (die) {
		die.classList.add('shake');
	});
	setTimeout(function () {
		dice.forEach(function (die) {
			die.classList.remove('shake');
		});
		let player1Roll = Math.floor(Math.random() * 6) + 1;
		let player2Roll = Math.floor(Math.random() * 6) + 1;
		console.log(player1Roll, player2Roll);
		die1.setAttribute('src', diceImages[player1Roll - 1]);
		die2.setAttribute('src', diceImages[player2Roll - 1]);

		if (player1Roll > player2Roll) {
			result.innerHTML = 'Player 1 Wins!';
		} else if (player1Roll < player2Roll) {
			result.innerHTML = 'Player 2 Wins!';
		} else {
			result.innerHTML = 'Draw!';
		}
	}, 1500);
}
