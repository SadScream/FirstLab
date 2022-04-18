const age = document.querySelector("#inputAge"), 
      delimoe = document.querySelector("#inputDelimoe"),
      delitel = document.querySelector("#inputDelitel"),
      controlAge = document.querySelector("#inputControlAge"),
      ageAgain = document.querySelector("#inputAgeAgain"),
      grow = document.querySelector("#inputGrow");
      
const result1 = document.querySelector("#resultFirstExercise"),
      result2 = document.querySelector("#resultSecondExercise"),
      result3 = document.querySelector("#resultThirdExercise"),
      result4 = document.querySelector("#resultFourthExercise"),
      result5 = document.querySelector("#resultFifthExercise");

age.addEventListener("input", () => { task(getAge, result1, age) });
delimoe.addEventListener("input", () => { task(getRemainder, result2, delimoe, delitel) });
delitel.addEventListener("input", () => { task(getRemainder, result2, delimoe, delitel) });
controlAge.addEventListener("input", () => { task(faceControl, result3, controlAge) });
ageAgain.addEventListener("input", () => { task(getNextAge, result4, ageAgain) });
grow.addEventListener("input", () => { task(canRide, result5, grow) });

function getAge(...values) {
    return values[0]+1;
}

function getRemainder(...values) {
    return values[0] % values[1];
}

function faceControl(...values) {
    if (values[0] >= 18)
        return "Welcome";
    else
        return "Отказ";
}

function getNextAge(...values) {
    return isNaN(values[0]) ? 0 : values[0]+1;
}

function canRide(...values) {
    return values[0] >= 140;
}

function task(func, result, ...elements) {
    result.textContent = func(...elements.map((value) => parseInt(value.value))).toString();
}