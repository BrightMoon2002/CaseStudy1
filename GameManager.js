class GameManager {
    constructor(_limit) {
        this.quiz = [];
        this.limit = _limit;
        this.count = 0;
        this.current = 0;
        this.score = 0;
        this.quiznew = []
    }

    getLimit() {
        return this.limit;
    }

    setLimit() {
    }

    getCount() {
        return this.count;
    }

    setCount() {
    }

    getCurrent() {
        return this.current;
    }

    setCurrent() {
    }

    getScore() {
        return this.score;
    }

    startGame() {
        this.quiznew = []
        for (let i = 0; i < 15; i++) {
            let c = Math.floor(Math.random() *29);
            this.quiznew.push(this.quiz[c]);
        }
        document.getElementById('fifty').disabled = false;
        document.getElementById('ask').disabled = false;
        document.getElementById("askM").disabled = false;
        this.count = 0;
        this.current = 0;
        this.score = 0;
    }

    addQuiz(quiz) {
        this.quiz.push(quiz)
    }

    checkQuiz(ans) {
        if (ans === this.quiznew[this.getCurrent()].correct) {
            return true;
        } else {
            return false;
        }
    }

    chooseAnswer(ans) {
        if (this.checkQuiz(ans) === true) {
            alert("You are right");
            this.score++;
            this.count++
            if (this.score === 15) {
                document.getElementById("prize").innerHTML = "You are the winner, your prize is: " + (2000000 * this.getScore()) + " USD";
                winGame();
            } else {
                document.getElementById("prize").innerHTML = "Your Prize is: " + (2000000 * this.getScore()) + " USD";
            }
        } else if (this.score < 5) {
            this.count = 0;
            this.score = 0;
            document.getElementById("prize").innerHTML = "Your lose";
            endLose();
            alert("You are wrong")
        } else if (this.score < 10) {
            document.getElementById("prize").innerHTML = "You are winner, Your prize is: " + (5 * 200000) + " USD";
            this.score = 0;
            this.count = 0;
            endLose();
            alert("You are wrong");
        } else if (this.score < 15) {
            document.getElementById("prize").innerHTML = "You are winner, Your prize is: " + (10 * 200000) + " USD";
            this.score = 0;
            this.count = 0;
            endLose();
            alert("You are wrong");
        }
    }

    nextQuiz() {
        this.randomQuiz()
        displayQuiz(this.getCurrent());
    }

    randomQuiz() {
        this.current = Math.floor(Math.random() * this.quiznew.length);
        return this.current;
    }

    newQuiz(index) {
        this.quiznew.splice(index, 1);
    }


    chooseFifty(index) {
        let count1 = 0;
        for (let i = 0; i < this.quiznew[index].answer.length; i++) {
            if (this.quiznew[index].answer[i] !== this.quiznew[index].correct) {
                // gameManger.quiz[index].answer[i] = '';
                count1++;
            }
            if (count1 < 3) {
                document.getElementById("ans" + (i + 1)).innerHTML = '';
            } else {
                break;
            }
        }
    }

    askGuest(index) {
        let random1 = Math.floor(Math.random() * 50) + 50;

        let result2 = ""
        let x = 0;
        for (let i = 0; i < this.quiznew[index].answer.length; i++) {
            if (this.quiznew[index].answer[i] === this.quiznew[index].correct) {
                document.getElementById("resultAsk1").innerHTML = "Ans" + (i + 1) + " =" + " " + random1;
            }
            if (this.quiznew[index].answer[i] !== this.quiznew[index].correct) {
                x += Math.floor(Math.random() * (100 - random1 - x))
                result2 += "Ans" + (i + 1) + " =" + " " + Math.floor(Math.random() * (100 - random1 - x)) + ", ";
                document.getElementById("resultAsk2").innerText = result2;
            }
        }
    }
}
let gameManager = new GameManager(15)

gameManager.addQuiz(new Quiz("Ai là người đánh bại quân Nam Hán trong trận Bạch Đằng?", ['Đinh Bộ Lĩnh', 'Trần Quốc Toản', 'Lý Thường Kiệt', 'Ngô Quyền'], 'Ngô Quyền'))
gameManager.addQuiz(new Quiz("Ai là người bị rơi quả táo vào đầu và trở nên thông minh hơn?", ['Isaac', 'Chí Tài', 'Hoài Linh', 'Newton'], 'Newton'))
gameManager.addQuiz(new Quiz("Ironman lấy ý tưởng từ ai?", ['Tiến Đạt', 'Jack', 'Elon Musk', 'Trấn Thành'], 'Elon Musk'))
gameManager.addQuiz(new Quiz("Cứ sau mùa lũ thì tài khoản của ai lại tằng lên rất nhiều lần?", ['Hoài Linh', 'Thuỷ Tiên', 'Đờm Vĩnh Hưng', 'Cả 3 đáp án'], 'Cả 3 đáp án'))
gameManager.addQuiz(new Quiz("Con gì nay mưa mai ướt?", ['Con bò', 'Đạt tuần lộc', 'Con chó', 'Con rùa'], 'Con rùa'))
gameManager.addQuiz(new Quiz("Thủ đô của Ân Độ là gì?", ['Đu bai', 'New Delhi', 'Hà Lội', "Xịt Ni"], 'New Delhi'))
gameManager.addQuiz(new Quiz("Tháng 2 có bao nhiêu ngày?", ['28 ngày', '29 ngày', '30 ngày', 'Cả 3 đáp án'], 'Cả 3 đáp án'))
gameManager.addQuiz(new Quiz("Rau gì không tròn không tưới, muôn hình muôn vẻ miệng cười khen ngon?", ['Rau câu', 'Rau dền', 'Rau muống', 'Rau cần'], 'Rau câu'))
gameManager.addQuiz(new Quiz("Thơ lục bát có mây câu?", ['6', '8', '12', 'không quy định'], 'không quy định'))
gameManager.addQuiz(new Quiz("Ma gì thường liên quan đến chúng ta", ['Maria Ozawa', 'Ma bư', 'ma sát', 'Hồn ma'], 'Maria Ozawa'))
gameManager.addQuiz(new Quiz("Có câu “Kỳ nhông là ông kỳ đà, Kỳ đà là cha cắc ké. Cắc ké là mẹ kỳ nhông. Vậy Kỳ đà có quan hệ thế nào với kỳ nhông?", ['Ông', 'Cháu', 'Bố', 'Con'], 'Cháu'))
gameManager.addQuiz(new Quiz("Theo quy định của luật giao thông đường bộ, xe máy đi đúng tốc độ vào đường ngược chiều có bị phạt hay không?", ['Có', 'Không', 'Đoán xem', 'không quy định'], 'Có'))
gameManager.addQuiz(new Quiz("Bạch Tuyết gọi 7 chủ lùn bằng gì", ['Anh yêu', 'Babe', 'culi', 'mồm'], 'mồm'))
gameManager.addQuiz(new Quiz("Ai là người khoẻ nhất", ['Đạt một trăm ca', 'Đạt không chín', 'Đạt 1 feet', 'Tiến Đạt'], 'Đạt không chín'))
gameManager.addQuiz(new Quiz("Con muỗi đốt vào đây thì bạn không thấy ngứa", ['Trán', 'Đầu gối', 'Mắt cá chân', 'my bro'], 'my bro'))
gameManager.addQuiz(new Quiz("Môn gì càng thắng càng thua", ['Bia', 'Golf', 'Đua xe đạp', 'Đấu vật trên giường'], 'Đua xe đạp'))
gameManager.addQuiz(new Quiz("Loại nước nào có chứa sắt và canxi?", ['Coca', 'Cà Phê', 'Nước cam', 'Nước rau dền'], 'Cà Phê'))
gameManager.addQuiz(new Quiz("Một con cua đỏ dài 15cm và một con cua xanh dài 8cm thi chạy thì ai về đích trước tiên?", ['Cua đỏ', 'Cua xanh', 'Về đích bằng nhau', 'Tất cả đểu sai'], 'Cua xanh'))
gameManager.addQuiz(new Quiz("Con gì mang được cả miếng gỗ lớn nhưng không mang được hòn sỏi nhỏ?", ['Con rùa', 'Con voi', 'Con sông', 'Con trâu'], 'Con sông'))
gameManager.addQuiz(new Quiz("Một tàu điện chạy hướng về hướng Nam. Gió hướng TÂY BẮC. Hỏi khói tàu bay hướng nào", ['Đông Nam', 'Tây Bắc', 'Nam', 'Đáp án khác'], 'Đáp án khác'))
gameManager.addQuiz(new Quiz("Lúc nào đồng hồ quả lắc sẽ điểm 13 tiếng chuông?", ['1 giờ 00 phút', '13 giờ 00 phút', '23 giờ 00 phút', "Hỏng"], 'Hỏng'))
gameManager.addQuiz(new Quiz("Có ba quả táo để trên bàn, bạn lấy đi 2 quả táo. Bạn còn mấy quả táo", ['3 quả táo', '2 quả táo', '1 quả táo', 'không còn quả nào'], '2 quả táo'))
gameManager.addQuiz(new Quiz("Nếu chỉ có 1 que diêm trong mùa đông giá rét -10 độ mà trong phòng chỉ có một cây đèn, một bếp dầu, một bếp củi thì bạn sẽ thắp gì lên đầu tiên?", ['Cây đèn', 'Bếp dầu', 'Bếp củi', 'Cây diêm'], 'Cây diêm'))
gameManager.addQuiz(new Quiz("Nếu bạn là trượt module1 và Codegym bắt bạn phải chọn 1 trong 4 cảnh cửa sau thì bạn chọn cánh cửa nào để sống?", ['lửa cháy dữ dội', 'sát thủ đang dương súng', 'lũ sư tử đã nhịn đói 2 năm', 'toàn rắn độc'], 'lũ sư tử đã nhịn đói 2 năm'))
gameManager.addQuiz(new Quiz("Cái gì người mua biết, người bán biết mà người xài không bao giờ biết", ['Ếch oi', 'cái gương', 'Quan tài', 'Cái bồn cầu'], 'Quan tài'))
gameManager.addQuiz(new Quiz("Cái gì bạn cho nó ăn thì nó sống, cho nó uống thì nó chết", ['Con bò', 'Bạn', 'Lửa', 'Con Heo'], 'Lửa'))
gameManager.addQuiz(new Quiz("Màn gì che được tất cả mọi vật trên đời?", ['Màn tuyn 2m', 'Màn đơn cá nhân', 'Màn đêm', 'Đáp án khác'], 'Màn đêm'))
gameManager.addQuiz(new Quiz("Nhà Nam có 4 anh chị em, 3 người lớn tên là Xuân, Hạ, Thu. Ngưởi ít tuổi nhất tên là gì", ['Đống', 'Đông', 'Đồng', 'Nam'], 'Nam'))
gameManager.addQuiz(new Quiz("Mèo trắng là bạn của mèo đen. Mèo trắng bỏ mèo đen theo mèo vàng. Một thời gian sau, mèo trắng gặp lại mèo đen. Mèo trắng sẽ nói gì?", ['Anh yêu em', 'Tối nay nhé', 'Méo mèo meo', 'Anh xin lỗi'], 'Méo mèo meo'))
gameManager.addQuiz(new Quiz("Nắng ba năm tôi không bỏ bạn, mưa 1 ngày sao bạn lại bỏ tôi là cái gì?", ['Người yêu cũ', 'Bóng', 'Thằng bạn thân', 'Anh trai mưa'], 'Bóng'))

