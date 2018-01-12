const w2v = require('word2vec');
const fs = require('fs');

var data = JSON.parse(fs.readFileSync('top.json', 'utf8'));

let writeStream = fs.createWriteStream('corpus.txt');

data.forEach(pkg => {
    writeStream.write(pkg.description + '\n', 'utf8');
});

w2v.word2vec('corpus.txt', 'w2v-model.txt', 
    {
        minCount: 2,
        window: 5,
        size: 100
    });
