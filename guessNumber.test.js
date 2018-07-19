const guessNumber = require("./guessNumber");
describe('guessNumber',function () {
    it('should return 4A0B for input 1 2 3 4 when anwser is 1 2 3 4',function () {
        expect(new guessNumber().test(1,2,3,4)).toEqual("4A0B")
    });

    // it('should return 3A0B for input 1 2 3 5 when anwser is 1 2 3 4',function () {
    //     expect(new guessNumber().test(1,2,3,5)).toEqual("3A0B")
    // });
});