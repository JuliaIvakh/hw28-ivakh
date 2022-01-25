function checkPrompt(userNum) {
    if (userNum === null) throw new Error("Value is not valid [null]");
    if (userNum.trim() === "") throw new Error("Value is not valid");
    if (isNaN(userNum)) throw new Error("Value is not valid");

    return true;
}

let calculator = {
    read(
        firstNum = prompt("Enter a number"),
        secondNum = prompt("Enter a number")
    ) {
        checkPrompt(firstNum);
        checkPrompt(secondNum);
        this.firstNum = firstNum;
        this.secondNum = secondNum;
    },

    sum() {
       return Number(this.firstNum) + Number(this.secondNum);
    },
    mul() {
        return this.firstNum * this.secondNum;
    }
};

calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );