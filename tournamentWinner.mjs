
function tournamentWinner(competitions, results) {
    let currentBestTeam = "";
    let scores = { [currentBestTeam]:0 }

    const updateScores = (team,score,scores) => {
        if(!Object.keys(scores).includes(team)){
            scores[team] = 0;
        };
        scores[team] += score;
    };

    for(let idx of competitions){
        const index = competitions.indexOf(idx);
        const game = competitions[index];
        const [homeTeam,awayTeam] = game;
        const result = results[index];
        const winningTeam = result === 1 ? homeTeam : awayTeam;
        
        updateScores(winningTeam,3,scores);

        if(scores[currentBestTeam] < scores[winningTeam]) currentBestTeam = winningTeam;        
    }
    return currentBestTeam;
  }
