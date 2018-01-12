const fs = require('fs');
const dice = require('string-similarity');

var data = JSON.parse(fs.readFileSync('top.json', 'utf8'));
var tmpData = JSON.parse(JSON.stringify(data)); // Dirty as hell cloning

data.map(pack => {
    tmpData.map(el => {
        el.dist = dice.compareTwoStrings(pack.description, el.description);

        return el;
    });

    var bestMatches = tmpData.sort((a, b) => { 
            return b.dist - a.dist;
        })
        .slice(1, 6)
        .map(el => {
            return el.position;
        });

    pack.suggestions = bestMatches;

    return pack;
});

fs.writeFileSync('top-with-suggestions.json', JSON.stringify(data));
