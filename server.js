//Install express server
const express = require('express');
const path = require('path');
const request = require('request');
const cors = require('cors');
const app = express();
const leagues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
//const leagues = [1, 2, 3];
console.log([1]);
console.log([...Array(1).keys()]);
console.log([...Array(26).keys()].slice(1));
//leagues = [...Array(26).keys()];
//leagues = leagues.slice(1);
console.log(leagues);
app.use(cors());

let goalScorers = null;
let goalScorerss = {};
let standings = {};
let fixtures = {};

function getStandings(leagueId) {
    let url = `https://www.footballwebpages.co.uk/league-table.json?comp=${leagueId}&showHa=yes`;
    return new Promise(resolve => {
        request(url, { json: true}, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(url);
            //console.log(body["leagueTable"]["team"]);
            if ("leagueTable" in body) {
                if ("team" in body["leagueTable"]) {
                    resolve(body["leagueTable"]["team"]);
                }
            }
        })
    })
}

function getGoalScorerss(leagueId) {
    let url = `https://www.footballwebpages.co.uk/goalscorers.json?comp=${leagueId}&max=20`;
    return new Promise(resolve => {
        request(url, { json: true }, (err, res, body) => {
            if (err) { return console.log(err); }
            console.log(url);
            //console.log(body["goalscorersCompetition"]["goalscorer"]);
            if (body) {
                if ("goalscorersCompetition" in body) {
                    if ("goalscorer" in body["goalscorersCompetition"]) {
                        console.log('Source returned ' + body["goalscorersCompetition"]["goalscorer"].length + ' objects');
                        resolve(body["goalscorersCompetition"]["goalscorer"]);
                    }
                }
            }
        });
    });
}

function getFixtures(leagueId) {
    let url = `https://www.footballwebpages.co.uk/goalscorers.json?comp=${leagueId}&max=20`;
}

async function initialise() {
    //leaguesStandings = await
    goalScorers = await getGoalScorers();
    //leagues = await getLeagues
}

async function main() {
    //await initialise();
    
    leagues.forEach(element => {
        console.log('calling getGoalScorerss() with ' + element);
        goalScorerss[element] = getGoalScorerss(element);
    })
    console.log(goalScorerss);
    leagues.forEach(element => {
        console.log('calling getStandings() with ' + element);
        standings[element] = getStandings(element);
    })
    console.log(standings);
    leagues.forEach(element => {
        console.log('calling getFixtures() with ' + element);
        fixtures[element] = getFixtures(element);
    })
    console.log(fixtures);

    // Serve only the static files from the dist directory
    console.log(__dirname);
    app.use(express.static(__dirname + '/dist/betting-fun'));

    app.get('/leagues/:leagueId/goalscorers', function(req, res) {
        leagueId = req.params.leagueId;
        console.log(`in /leagues/${leagueId}/goalscorers`);
        console.log(goalScorerss);
        console.log(goalScorerss[leagueId]);
        if (!(leagueId  in goalScorerss)) {
            console.log('leagueId not found');
            res.sendStatus(404);
            return;
        }
        goalScorerss[leagueId].then(function(value) {
            res.send(value);
        });
    })

    app.get('/leagues/:leagueId/standings', function(req, res) {
        leagueId = req.params.leagueId;
        console.log(`in /leagues/${leagueId}/standings`);
        console.log(standings);
        console.log(standings[leagueId]);
        console.log(Object.keys(standings));
        if (!(leagueId in standings)) {
            console.log('leagueId not found');
            res.sendStatus(404);
            return;
        }
        standings[leagueId].then(function(value) {
            res.send(value);
        });
    })

    app.get('/leagues/:leagueId/fixtures', function (req, res) {
        leagueIs = req.params.leagueId;
        console.log(`in /leagues/${leagueId}/fixtures`);
        console.log(standings);
        console.log(standings[leagueId]);
    })

    // THIS MUST GO LAST
    app.get('/*', function(req,res) {
        console.log('in app.get("/"');
        res.sendFile(path.join(__dirname+'/dist/betting-fun/index.html'));
    });

    // Start the app by listening on the default Heroku port
    app.listen(process.env.PORT || 8080);    
}

main();