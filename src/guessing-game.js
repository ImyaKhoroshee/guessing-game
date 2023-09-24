class GuessingGame {
    
    min;
    max;

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.myGuess = Math.ceil((this.min + this.max)/2);
        return this.myGuess;
    }

    lower() {
        this.max = this.myGuess;
    }

    greater() {
        this.min = this.myGuess;
    }
}

module.exports = GuessingGame;

