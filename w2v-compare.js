const w2v = require('word2vec');
const fs = require('fs');

w2v.loadModel('w2v-model.txt', (error, model) => {
    console.log(model);

    var data = JSON.parse(fs.readFileSync('top.json', 'utf8'));

    console.log(model.mostSimilar('library'));
});
