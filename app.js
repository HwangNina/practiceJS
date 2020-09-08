const fnBtn37 = document.getElementById('btn-37');
const fnBtn38 = document.getElementById('btn-38');
const fnBtn39 = document.getElementById('btn-39');
const fnBtn40 = document.getElementById('btn-40');

//problem 37
const president = () => {
    const names = prompt('names?').split(' ');

    //who won?
    if(names.length == 0)
        return null;

    var modeMap = {};
    var maxEl = names[0], maxCount = 1;
    for(var i = 0; i < names.length; i++)
    {
        var el = names[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            maxEl = el;
            maxCount = modeMap[el];
        }
    }

    //how many votes?
    var count = 0;
    for(var i = 0; i < names.length; ++i){
    if(names[i] == maxEl)
        count++;
    }

    console.log(`${maxEl} won the election and got ${count} votes`);
}

//Problem 38
//97 86 75 66 55 97 85 97 97 95

const candies = riding();() => {
    const scores = prompt('scores?').split(' ').map(num => parseInt(num, 10));
    const removeRedun = [...new Set(scores)];

    removeRedun.sort((a, b) => b - a);
    
    const highestScores = removeRedun.slice(0, 3);
    
    // highestScores.forEach(function(score) {
    //     let count = 0;
    //     for(let i = 0 ; i <= scores.length ; i++){
    //         if(score === scores[i]){
    //             count ++;
    //         }
    //     }
    //     console.log(count);
    // });

    let count = 0;
    for(let i = 0; i <= highestScores.length-1 ; i++){
        for(let j = 0; j<= scores.length-1 ; j++){
            if(highestScores[i] === scores[j]){
                count++;
            }
        }
    }
    console.log(count);
}


//problem39


const replaceAlphabets = () => {
    let sentence = prompt('input sentence').split('');

    for(let i = 0; i <= sentence.length-1 ; i++){
        if(sentence[i] == 'q'){
            sentence[i] = 'e';
        }
    }
    console.log(sentence.join(''));
    
}

//problem40

const riding = () => {
    const people = Math.floor(Math.random()*10);
    const weightOfPeople = [];
    for(let i = 1; i <= people ; i++){
        weightOfPeople.push(Math.random()*100);
    }
    console.log(people);
    console.log(weightOfPeople);
    
    const weightMin = Math.floor(Math.random()*30)

    console.log(weightMin)

    let count = 0;
    for(let i = 0; i <= weightOfPeople.length-1 ; i++){
        if(weightOfPeople[i] >= weightMin){
            count++;
        }    
    }

    console.log(`The minimum weight is ${weightMin}. ${count} people can take this ride🎢`);
    
}


//event
fnBtn37.addEventListener('click', president);
fnBtn38.addEventListener('click', candies);
fnBtn39.addEventListener('click',replaceAlphabets);
fnBtn40.addEventListener('click', riding);