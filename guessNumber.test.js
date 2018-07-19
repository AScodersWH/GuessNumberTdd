const guessNumber = require("./guessNumber");
describe('guessNumber',function () {

    it('should return 4A0B for input 1 2 3 4 when anwser is 1 2 3 4',function () {
        expect(new guessNumber().test("1 2 3 4")).toEqual("4A0B")
    });

    it('should return 3A0B for input 1 2 3 5 when anwser is 1 2 3 4',function () {
        expect(new guessNumber().test("1 2 3 5")).toEqual("3A0B")
    });

    it('should return 3A0B for input 4 3 2 1 when anwser is 1 2 3 4',function () {
        expect(new guessNumber().test("4 3 2 1")).toEqual("0A4B")
    });

    it('should return 3A0B for input 1 5 3 9 when anwser is 1 2 3 4',function () {
        expect(new guessNumber().test("1 8 3 2")).toEqual("2A1B")
    });



});

