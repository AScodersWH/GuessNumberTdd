const answerGenerator = require("./answerGenerator.js")
let randomNum;

beforeEach(() => {
    randomNum = new answerGenerator(0,9,4);
});

describe('AnswerGenerator',() => {
    it('should have length of 4',  () => {
        expect(randomNum.generateRandomNumber()).toHaveLength(4);
    });

    it("should every element less than or equal to 9 and greater than or equal to 0", () => {
        const answer = randomNum.generateRandomNumber();
        answer.forEach(element => {
            expect(element).toBeGreaterThanOrEqual(0);
            expect(element).toBeLessThanOrEqual(9);
        });
    });

    it('should return 1, 2, 3, 4 when mock Math.random', () => {
        let number = 0;
        jest.spyOn(Math, "random").mockImplementation(() => {
            number += 0.1;
            return number;
        });
        expect(randomNum.generateRandomNumber()).toEqual([1, 2, 3, 4]);
    });
})