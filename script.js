const video = document.getElementById("weddingVideo");

document.addEventListener("click", () => {
    video.muted = false;
    video.play();
}, { once: true });


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
    let phone = "09179670484";

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