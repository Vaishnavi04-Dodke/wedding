// const endDate = new Date("March 26, 2024 12:00:00 AM").getTime();

// function updateCountdown() {
//     const now = new Date().getTime();
//     const timeLeft = endDate - now;

//     if (timeLeft < 0) {
//         // If the countdown has ended
//         document.getElementById("Days").value = "00";
//         document.getElementById("hours").value = "00";
//         document.getElementById("min").value = "00";
//         document.getElementById("sec").value = "00";
//     } else {
//         const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
//         const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//         const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
//         const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

//         document.getElementById("Days").value = days.toString().padStart(2, "0");
//         document.getElementById("hours").value = hours.toString().padStart(2, "0");
//         document.getElementById("min").value = minutes.toString().padStart(2, "0");
//         document.getElementById("sec").value = seconds.toString().padStart(2, "0");
//     }
// }

// // Update the countdown every second
// setInterval(updateCountdown, 1000);

// updateCountdown(); // Initial call to set the initial countdown values

var marriageDate = new Date("2024-03-26T00:00:00");

// Update the countdown every second
setInterval(function() {
    var now = new Date();
    var difference = marriageDate - now;

    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("Days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("min").innerText = minutes;
    document.getElementById("sec").innerText = seconds;
}, 1000)
