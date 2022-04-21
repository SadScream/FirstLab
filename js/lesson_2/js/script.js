const sumArrayInput = document.querySelector("#sumArray"), 
      getAboveZeroInput = document.querySelector("#getAboveZero"),
      getPoniesInput = document.querySelector("#getPonies"),
      isTxIncludedInput = document.querySelector("#isTxIncluded"),
      getSizesInput = document.querySelector("#getSizes"),
      getWithSpacesInput = document.querySelector("#getWithSpaces"),
      getEpisodesInput = document.querySelector("#getEpisodes"),
      tripleInput = document.querySelector("#triple"),
      getAvgGlucoseInput = document.querySelector("#getAvgGlucose");
      
const result1 = document.querySelector("#resultFirstExercise"),
      result2 = document.querySelector("#resultSecondExercise"),
      result3 = document.querySelector("#resultThirdExercise"),
      result4 = document.querySelector("#resultFourthExercise"),
      result5 = document.querySelector("#resultFifthExercise"),
      result6 = document.querySelector("#resultSixthExercise"),
      result7 = document.querySelector("#resultSeventhExercise"),
      result8 = document.querySelector("#resultEighthExercise"),
      result9 = document.querySelector("#resultNinethExercise");

sumArrayInput.addEventListener("input", () => { task(sumArray, parseInt, result1, sumArrayInput) });
getAboveZeroInput.addEventListener("input", () => { task(getAboveZero, parseInt, result2, getAboveZeroInput) });
getPoniesInput.addEventListener("input", () => { task(getPonies, (x) => x, result3, getPoniesInput) });
isTxIncludedInput.addEventListener("input", () => { task(isTxIncluded, (x) => x, result4, isTxIncludedInput) });
getSizesInput.addEventListener("input", () => { task(getSizes, (x) => x, result5, getSizesInput) });
getWithSpacesInput.addEventListener("input", () => { task(getWithSpaces, (x) => x, result6, getWithSpacesInput) });
getEpisodesInput.addEventListener("input", () => { task(getEpisodes, (x) => x, result7, getEpisodesInput) });
tripleInput.addEventListener("input", () => { task(triple, parseInt, result8, tripleInput) });
getAvgGlucoseInput.addEventListener("input", () => { task(getAvgGlucose, parseFloat, result9, getAvgGlucoseInput) });


function sumArray(ints) {
    let sum = 0;
    ints.forEach((x) => sum += x);

    return sum;
}

function getAboveZero(ints) {
    return ints.filter(x => x > 0);
}

function getPonies(ponies) {
    findName = ponies.pop();
    return ponies.find(x => x == findName);
}

function isTxIncluded(transactions) {
    tName = transactions.pop();
    return transactions.includes(tName);
}

function getSizes(words) {
    words.forEach((x, index) => words[index] = x.length);
    return words;
}

function getWithSpaces(words) {
    let result = words.join(" ");
    return [result, result.length];
}

function getEpisodes(data) {
    let obj = {
        title: data[0],
        series: parseInt(data[1])
    }

    return `Аниме ${obj.title} включает ${obj.series} серий`
}

function triple(digit) {
    return ((x) => x * 3)(digit);
}

function getAvgGlucose(data) {
    let sum = 0;
    data.forEach((x) => sum += x);

    return sum / data.length;
}

function task(func, valueFunc, result, element) {
    result.textContent = func(element.value.split(' ').map(x => {return valueFunc(x)}));
}