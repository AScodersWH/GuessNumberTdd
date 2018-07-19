const GuessNumber = require("./guessNumber");
const AnswerGenerator = require("./answerGenerator");
let randomNumMock;
beforeEach(() => {
    const generator = new AnswerGenerator();
    generator.generateRandomNumber = jest.fn((() => [1, 2, 3, 4]));
    randomNumMock = new GuessNumber(generator);
})
describe("guessNumber", () => {

    it('should return 4A0B for input 1 2 3 4 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("1 2 3 4")).toEqual("4A0B")
    });

    it('should return 3A0B for input 1 2 3 5 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("1 2 3 5")).toEqual("3A0B")
    });

    it('should return 3A0B for input 4 3 2 1 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("4 3 2 1")).toEqual("0A4B")
    });

    it('should return 3A0B for input 1 5 3 2 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("1 5 3 2")).toEqual("2A1B")
    });

    it('should return  for input c 2 -1 99 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("c 2 -1 99")).toEqual("Wrong Input，Input again");
    });

    it('should return  for input 1 1 2 2 when anwser is 1 2 3 4', function () {
        expect(randomNumMock.test("1 1 2 2")).toEqual("Wrong Input，Input again");
    });


    it('should return 3A0B for input 1 2 3 5 when anwser is 1 2 3 4', function () {
        for (let i = 1; i <= 6; i++)
            expect(randomNumMock.test("1 2 3 5")).toEqual("3A0B");
        expect(randomNumMock.test("1 2 3 5")).toEqual("game over");
    });

});

