class guessNumber {
    constructor() {
    }

    test(input) {
        var a = 0, b = 0;
        var realNumber = [1,2,3,4];
        var userInput = input.split(" ").map(ele=>+ele);
        for (var item of userInput) {
            if (realNumber.indexOf(item) >= 0) b++;
        }

        for (var ite = 0; ite < 4; ite++) {
            if (userInput[ite] == realNumber[ite]) a++;
        }
        const result = `${a}A${(b-a)}B`;

        return result;
    }
}

module.exports = guessNumber;
