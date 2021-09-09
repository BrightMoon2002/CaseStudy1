class Quiz{
    constructor(_question, _answer, _correct) {
        this.question = _question;
        this.answer = _answer;
        this.correct = _correct;
    }

    getQuestion() {
        return this.question
    }
    setQuestion() {}

    getAnswer() {
        return this.answer;
    }
    setAnswer() {}

    getCorrect() {
        return this.correct;
    }
    setCorrect() {}
}