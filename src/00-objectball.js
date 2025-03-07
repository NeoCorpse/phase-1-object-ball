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

function numPointsScored(name) {
	try {
		return gameObject().home.players[name].points;
	} catch (err) {
		try {
			return gameObject().away.players[name].points;
		} catch (err) {
			return `${name} is not a player`;
		}
	}
}

function shoeSize(name) {
	try {
		return gameObject().home.players[name].shoe;
	} catch (err) {
		try {
			return gameObject().away.players[name].shoe;
		} catch (err) {
			return `${name} is not a player`;
		}
	}
}

function teamColors(name) {
	const obj = gameObject();
	if (Object.values(obj.home)[0] === name) {
		return obj.home.colors;
	} else if (Object.values(obj.away)[0] === name) {
		return obj.away.colors;
	} else {
		return `${name} is not a team name`;
	}
}

function teamNames() {
	let result = [];
	result.push(gameObject().home.teamName, gameObject().away.teamName);
	return result;
}

function playerNumbers(name) {
	const obj = gameObject();
	if (Object.values(obj.home)[0] === name) {
		let arr = [];
		for (let player in obj.home.players) {
			arr.push(obj.home.players[player].number);
		}
		return arr;
	} else if (Object.values(obj.away)[0] === name) {
		let arr = [];
		for (let player in obj.home.players) {
			arr.push(obj.home.players[player].number);
		}
		return arr;
	} else {
		return `${name} is not a team name`;
	}
}

function playerStats(name) {
	const players = { ...gameObject().home.players, ...gameObject().away.players };
	return players[name] || `${name} is not a player`;
}

function bigShoeRebounds() {
	const players = { ...gameObject().home.players, ...gameObject().away.players };
	let arr = [];
	for (let player in players) {
		arr.push(players[player]);
	}
	arr.sort((a, b) => b.shoe - a.shoe);
	return arr[0].rebounds;
}

function mostPointsScored() {
	const players = { ...gameObject().home.players, ...gameObject().away.players };
	let arr = [];
	for (let player in players) {
		arr.push(players[player]);
	}
	arr.sort((a, b) => b.points - a.points);
	return arr[0].points;
}

function winningTeam() {
	let home = 0,
		away = 0;
	const obj = gameObject();
	for (let player in obj.home.players) {
		home += obj.home.players[player].points;
	}
	for (let player in obj.away.players) {
		away += obj.away.players[player].points;
	}
	return home > away ? obj.home.teamName : obj.away.teamName;
}

function playerWithLongestName() {
	const names = [...Object.keys(gameObject().home.players), ...Object.keys(gameObject().away.players)];
	return names.sort((a, b) => b.length - a.length)[0];
}

function doesLongNameStealATon() {
	const players = [...Object.entries(gameObject().home.players), ...Object.entries(gameObject().away.players)];
	const byName = [...players].sort((a, b) => b[0].length - a[0].length);
	const bySteals = [...players].sort((a, b) => b[1].steals - a[1].steals);
	return byName[0] === bySteals[0];
}
