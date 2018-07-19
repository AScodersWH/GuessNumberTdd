class guessNumber {
    constructor() {
    }

    test(input) {
        const answer = [1,2,3,4];
        let numberOfA = 0;
        for(let item of input.split(" ")){
            if(answer.indexOf(+item)>=0) {
                numberOfA++;
            }
        }
        return `${numberOfA}A0B`;
    }
}

module.exports = guessNumber;
