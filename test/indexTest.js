// The code below ensures that students who are using CodeGrade will get credit
// for the code-along in Canvas; you can disregard it.

const { expect } = require('chai');

require('./helpers.js');

describe('', () => {
	describe('', () => {
		it('Test passing', () => {
			return true;
		});
	});
});

describe('objectBallLab', () => {
	describe('Buidling the project', () => {
		// function exists
		it('has a function called gameObject', () => {
			expect(gameObject).to.exist;
		});
		// return of gameObject funtion is an object
		it('should return an object', () => {
			expect(gameObject()).to.be.an('object');
		});
		// tests if the object contains home and away keys
		it('object contains home and away', () => {
			expect(gameObject()).to.have.own.property('home');
			expect(gameObject()).to.have.own.property('away');
		});
		// tests if the home, away contains teamName, colors and players
		it('home/away object contains teamName, colors and players', () => {
			expect(gameObject()['home']).to.include.all.keys('teamName', 'colors', 'players');
			expect(gameObject()['home']['teamName']).to.equal('Brooklyn Nets');
			expect(gameObject()['home']['colors']).to.be.an('array').that.includes('Black', 'White');

			expect(gameObject()['away']).to.include.all.keys('teamName', 'colors', 'players');
			expect(gameObject()['away']['teamName']).to.equal('Charlotte Hornets');
			expect(gameObject()['away']['colors']).to.be.an('array').that.includes('Turquoise', 'Purples');
		});
		// players object should contain number, shoe, points, rebounds, assitss, steals, blocks, slamDunks
		it('players should contain number, shoe, points, rebounds, assitss, steals, blocks, slamDunks', () => {
			expect(gameObject()['home']['players']).to.include.all.keys('Alan Anderson', 'Brook Lopez', 'Jason Terry', 'Mason Plumlee', 'Reggie Evans');
			expect(gameObject()['away']['players']).to.include.all.keys('Jeff Adrien', 'Bismak Biyombo', 'DeSagna Diop', 'Ben Gordon', 'Brendan Haywood');
		});
		// should correctly assign the right values
		it('should correctly assign the correct values', () => {
			expect(gameObject()['home']['players']['Alan Anderson']).to.include({ number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 });
			expect(gameObject()['home']['players']['Reggie Evans']).to.include({ number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 });
			expect(gameObject()['home']['players']['Brook Lopez']).to.include({ number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 });
			expect(gameObject()['home']['players']['Mason Plumlee']).to.include({ number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 });
			expect(gameObject()['home']['players']['Jason Terry']).to.include({ number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 });

			expect(gameObject()['away']['players']['Jeff Adrien']).to.include({ number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 });
			expect(gameObject()['away']['players']['Bismak Biyombo']).to.include({ number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 });
			expect(gameObject()['away']['players']['DeSagna Diop']).to.include({ number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 });
			expect(gameObject()['away']['players']['Ben Gordon']).to.include({ number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 });
			expect(gameObject()['away']['players']['Brendan Haywood']).to.include({ number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 });
		});
	});

	describe('Calling Functions Within Functions', () => {
		// homeTeamName function exists
		it('has a function called homeTeamName', () => {
			expect(homeTeamName).to.exist;
		});
		// homeTeamName return name of home team
		it('homeTeamName return name of home team', () => {
			expect(homeTeamName()).to.be.equal(gameObject()['home']['teamName']);
		});
	});

	describe('Function Building', () => {
		// contains numPointsScored
		it('has a function called numPointsScored', () => {
			expect(numPointsScored).to.exist;
		});
		// numPointsScored returns number of points for a player, player name arg is passed
		it('numPointsScored returns number of points for a player', () => {
			expect(numPointsScored('Alan Anderson')).to.be.equal(22);
			expect(numPointsScored('Bismak Biyombo')).to.be.equal(12);
		});
		// contains shoeSize func
		it('has a function called shoeSize', () => {
			expect(shoeSize).to.exist;
		});
		// shoeSize returns shoe size for a player, player name arg is passed
		it('shoeSize returns shoe size for a player', () => {
			expect(shoeSize('Alan Anderson')).to.be.equal(16);
			expect(shoeSize('Jeff Adrien')).to.be.equal(18);
		});
		// contains teamColors func
		it('has a function called teamColors', () => {
			expect(teamColors).to.exist;
		});
		// teamColors returns array of colors, team name arg is passed
		it('teamColors returns array of colors', () => {
			let playerteamColors = gameObject()['home']['colors'];
			playerteamColors = gameObject()['away']['colors'];

			// returns should be arrays
			expect(teamColors('Brooklyn Nets')).to.be.an('array').to.include('Black', 'White').to.not.be.empty;
			expect(teamColors('Charlotte Hornets')).to.be.an('array').to.include('Turquoise', 'Purple').to.not.be.empty;
		});
		// contains teamNames func
		it('has a function called teamNames', () => {
			expect(teamNames).to.exist;
		});
		// teamNames returns array of team names
		it('teamNames returns array of team names', () => {
			expect(teamNames()).to.be.an('array').to.include('Brooklyn Nets', 'Charlotte Hornets').to.not.be.empty;
		});
		// contains playerNumbers func
		it('has a function called playerNumbers', () => {
			expect(playerNumbers).to.exist;
		});
		// playerNumbers returns array of jersey numbers of players, team name arg is passed
		it('playerNumbers returns array of jersey numbers of players', () => {
			expect(playerNumbers('Brooklyn Nets')).to.be.an('array').to.include(0, 30, 11, 1, 31).to.not.be.empty;
			expect(playerNumbers('Charlotte Hornets')).to.be.an('array').to.include(4, 0, 2, 8, 33).to.not.be.empty;
		});
		// contains playerStats func
		it('has a function called playerStats', () => {
			expect(playerStats).to.exist;
		});
		// playerStats returns object of players' stat, player name arg is passed
		it("playerStats returns object of players' stat", () => {
			expect(playerStats('Alan Anderson')).to.be.an('object').to.deep.equal({ number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 });
			expect(playerStats('Jeff Adrien')).to.be.an('object').to.deep.equal({ number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 });
		});
		// contains bigShoeRebounds func
		it('has a function called bigShoeRebounds', () => {
			expect(bigShoeRebounds).to.exist;
		});
		// bigShoeRebounds returns number of rebounds associated with player with the largest shoe size' stat
		it('bigShoeRebounds returns number of rebounds associated with player with the largest shoe size', () => {
			expect(bigShoeRebounds()).to.be.equal(12);
		});
		// contains mostPointsScored func
		it('has a function called mostPointsScored', () => {
			expect(mostPointsScored).to.exist;
		});
		// mostPointsScored returns player has the most points
		it('mostPointsScored returns player has the most points', () => {
			expect(mostPointsScored()).to.be.equal('Ben Gordon');
		});
		// contains winningTeam func
		it('has a function called winningTeam', () => {
			expect(winningTeam).to.exist;
		});
		// winningTeam returns team has the most points
		it('winningTeam returns team has the most points', () => {
			expect(winningTeam()).to.be.equal('Brooklyn Nets');
		});
		// contains playerWithLongestName func
		it('has a function called playerWithLongestName', () => {
			expect(playerWithLongestName).to.exist;
		});
		// playerWithLongestName returns player has the longest name
		it('playerWithLongestName returns player has the longest name', () => {
			expect(playerWithLongestName()).to.be.equal('Brendan Haywood');
		});
		// contains doesLongNameStealATon func
		it('has a function called doesLongNameStealATon', () => {
			expect(doesLongNameStealATon).to.exist;
		});
		// doesLongNameStealATon returns returns true if the player with the longest name had the most steals
		it('doesLongNameStealATon returns true if the player with the longest name had the most steals', () => {
			expect(doesLongNameStealATon(playerWithLongestName())).to.be.false;
		});
	});
});
