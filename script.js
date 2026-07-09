const video = document.getElementById("weddingVideo");
const playBtn = document.getElementById("playBtn");


video.pause();


playBtn.addEventListener("click", () => {

    video.muted = false;
    video.play();

    playBtn.style.display = "none";

});


video.addEventListener("ended", () => {

    playBtn.style.display = "flex";

});


// ===============================
// ارسال پیامک تایید حضور
// ===============================
function sendRSVP(status) {

    // گرفتن نام مهمان
    let name = document.getElementById("guestName").value;

    // اگر نام وارد نشده بود
    if (!name.trim()) {
        alert("لطفاً اسم خود را وارد کنید 🌸");
        return;
    }

    // شماره مقصد
    let phone = "09034976165";

    // متن پیام
    let text = "";

    // اگر حضور دارد
    if (status === "yes") {

        text = `سلام
من ${name} هستم.
با افتخار در مراسم شما حضور خواهیم داشت. 🌸`;

    }

    // اگر حضور ندارد
    else {

        text = `سلام
من ${name} هستم.
متأسفانه امکان حضور در مراسم را نداریم.
آرزوی بهترین‌ها را برایتان داریم. 💐`;

    }

    // ساخت لینک پیامک
    let smsURL = `sms:${phone}?body=${encodeURIComponent(text)}`;

    // باز کردن برنامه پیامک
    window.location.href = smsURL;

}