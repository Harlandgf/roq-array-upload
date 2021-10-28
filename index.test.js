
const index = require("./index")

let numbers = index.numbers

test("that first number is two", () => {
    expect(numbers[0]).toBe(2)
})

test("last number is 18", () => {
    expect(numbers[8]).toBe(18)
})

test("numbers length is greater then 4", () => {
    expect(numbers.length).toBeGreaterThan(4)
})

test("that numbers contains 10", () => {
    expect(numbers).toContain(10)
})

/*test("numeric ranges", () => {
    expect(6).toBeWithinRange(2, 18);
    //expect(54).not.toBeWithinRange(0,20)
})*/



