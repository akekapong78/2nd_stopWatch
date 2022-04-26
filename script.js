// สร้าง Avatar
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");


// การเรียกใช้ FN ทันทีเมื่อหน้าเว็ปเปิด
window.onload = function() {

    let tens = 00;
    let seconds = 00;
    var interval;
    let time;       // ตัวแปร output ไปใช้งานต่อ

    buttonStart.onclick = function() {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);     // setInterval, clearInterval เป็น buildin fn in JS
    }                           // ใช้ ,10 เพื่อให้เป็น เสี้ยววิ พอดี
                                // ใช้ ,1000 จะกลายเป็นหลักสุดท้าย = 1 sec

    buttonStop.onclick = function() {
        clearInterval(interval);
        // Output ที่ต้องการ        
        if (tens <= 9) {
            time = Number(seconds+".0"+tens);
            console.log(time);
        } else {
            time = Number(seconds+"."+tens);
            console.log(time);
        }        
    }

    buttonReset.onclick = function() {
        clearInterval(interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer() {
        tens++;
        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }
        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}



