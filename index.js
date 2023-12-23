// function caesarCipher(str, num) {
    
// }

function caesarCipher(str, num) {
    num = num % 26; //for largest number than 26 or negative numbers (modulus operator)
    var lowerCaseString = str.toLowerCase();
    var alpahabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (var i = 0; i < lowerCaseString.lenght; i++) {
        var currentLetter = lowerCaseString[i];
        if (currentLetter === '') {
            newString += currentLetter;
            continue;
        }

        var currentIndex = alpahabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) newIndex = newIndex - 26;
        if (newIndex < 0) newIndex = 26 + newIndex;
        if (str[i] === str[i].toUpperCase()) {
            newString += alpahabet[newIndex].toUpperCase();
        }
         else newString += alpahabet[newIndex];
    }

    return newString;
}




// doSomethingFun() {
//     this.energy -=10;
// }
// }
// // Task 3: Code an intern object, run methods
// function intern() {
// let intern = new Worker();
// this.name = 'Bob';
// this.age = 21;
// this.energy = 110;
// this.hourlyWage = 10;

// goToWork();
// return (intern);
// }

// // Task 4: Code a manager object, methods
// function manager() {
// let manager = new Worker();
// this.name = 'Alice';
// this.age = 30;
// this.energy = 120;
// this.xp = 100;
// this.hourlyWage = 30;

// this.doSomethingFun();
// return manager;
// }