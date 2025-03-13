function gameObject() {
	return {
		home: {
			teamName: 'Brooklyn Nets',
			colors: ['Black', 'White'],
			players: {
				'Alan Anderson': {
					number: 0,
					shoe: 16,
					points: 22,
					rebounds: 12,
					assists: 12,
					steals: 3,
					blocks: 1,
					slamDunks: 1,
				},
				'Reggie Evans': {
					number: 30,
					shoe: 14,
					points: 12,
					rebounds: 12,
					assists: 12,
					steals: 12,
					blocks: 12,
					slamDunks: 7,
				},
				'Brook Lopez': {
					number: 11,
					shoe: 17,
					points: 17,
					rebounds: 19,
					assists: 10,
					steals: 3,
					blocks: 1,
					slamDunks: 15,
				},
				'Mason Plumlee': {
					number: 1,
					shoe: 19,
					points: 26,
					rebounds: 12,
					assists: 6,
					steals: 3,
					blocks: 8,
					slamDunks: 5,
				},
				'Jason Terry': {
					number: 31,
					shoe: 15,
					points: 19,
					rebounds: 2,
					assists: 2,
					steals: 4,
					blocks: 11,
					slamDunks: 1,
				},
			},
		},
		away: {
			teamName: 'Charlotte Hornets',
			colors: ['Turquoise', 'Purple'],
			players: {
				'Jeff Adrien': {
					number: 4,
					shoe: 18,
					points: 10,
					rebounds: 1,
					assists: 1,
					steals: 2,
					blocks: 7,
					slamDunks: 2,
				},
				'Bismak Biyombo': {
					number: 0,
					shoe: 16,
					points: 12,
					rebounds: 4,
					assists: 7,
					steals: 7,
					blocks: 15,
					slamDunks: 10,
				},
				'DeSagna Diop': {
					number: 2,
					shoe: 14,
					points: 24,
					rebounds: 12,
					assists: 12,
					steals: 4,
					blocks: 5,
					slamDunks: 5,
				},
				'Ben Gordon': {
					number: 8,
					shoe: 15,
					points: 33,
					rebounds: 3,
					assists: 2,
					steals: 1,
					blocks: 1,
					slamDunks: 0,
				},
				'Brendan Haywood': {
					number: 33,
					shoe: 15,
					points: 6,
					rebounds: 12,
					assists: 12,
					steals: 22,
					blocks: 5,
					slamDunks: 12,
				},
			},
		},
	};
}

const obj = gameObject();
function numPointsScored(name) {
	const player = obj.home.players[name] || obj.away.players[name] || null;
	if (!player) return `${name} is not a player.`;

	return `${name} has ${player.points} points.`;
}

function shoeSize(name) {
	const player = obj.home.players[name] || obj.away.players[name] || null;
	if (!player) return `${name} is not a player.`;

	return `${name} has a shoe size of ${player.shoe}.`;
}

function teamColors(name) {
	const side = obj.home.teamName === name ? 'home' : obj.away.teamName === name ? 'away' : null;
	if (!side) return `${name} is not a team name`;

	return `The team colours for ${name} are ${Object.values(obj[side].colors).join(' and ')}.`;
}

function teamNames() {
	return [obj.home.teamName, obj.away.teamName];
}

function playerNumbers(name) {
	let arr = [];

	let side = obj.home.teamName === name ? 'home' : obj.away.teamName === name ? 'away' : null;
	if (!side) return `${name} is not a team name`;

	for (let player in obj[side].players) {
		arr.push(obj[side].players[player].number);
	}

	return `${name} team numbers: ${arr.join(', ')}.`;
}

function playerStats(name) {
	const players = Object.assign({}, obj.home.players, obj.away.players);

	return players[name] ? { [name]: players[name] } : `${name} is not a player`;
}

function bigShoeRebounds() {
	const players = [...Object.entries(obj.home.players), ...Object.entries(obj.away.players)];

	players.sort((a, b) => b[1].shoe - a[1].shoe);

	return `${players[0][0]} has a shoe size of ${players[0][1].shoe} and has ${players[0][1].rebounds} rebounds.`;
}

function mostPointsScored() {
	const players = [...Object.entries(obj.home.players), ...Object.entries(obj.away.players)];

	players.sort((a, b) => b[1].points - a[1].points);

	return `${players[0][0]} has the most points (${players[0][1].points} points)`;
}

function winningTeam() {
	let home = 0,
		away = 0;

	for (let player in obj.home.players) {
		home += obj.home.players[player].points;
	}
	for (let player in obj.away.players) {
		away += obj.away.players[player].points;
	}

	return `The winning team is ${home > away ? obj.home.teamName : obj.away.teamName} with ${home > away ? home : away} points.`;
}

function playerWithLongestName() {
	const names = [...Object.keys(obj.home.players), ...Object.keys(obj.away.players)];

	const longest = names.sort((a, b) => b.length - a.length)[0];

	return `${longest} has the longest name.`;
}

function doesLongNameStealATon() {
	const players = [...Object.entries(obj.home.players), ...Object.entries(obj.away.players)];

	const bySteals = players.sort((a, b) => b[1].steals - a[1].steals);
	const longest = playerWithLongestName().split(' ').slice(0, 2).join(' ');

	return bySteals[0][0] === longest ? `${longest} has the most steals (${bySteals[0][1].steals} steals)` : `${longest} does not have the most steals.`;
}
