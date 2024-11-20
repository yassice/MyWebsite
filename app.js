// app.js

// انتظر تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", function () {

    // التفاعل مع Firebase Authentication (مثال لإنشاء حساب مستخدم جديد)
    const auth = firebase.auth();

    // التسجيل باستخدام البريد الإلكتروني وكلمة المرور
    const email = "user@example.com";
    const password = "yourpassword";

    // إنشاء حساب مستخدم
    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            console.log("تم إنشاء الحساب:", user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error("خطأ:", errorCode, errorMessage);
        });

    // التفاعل مع النموذج: إرسال البيانات باستخدام Fetch API
    const form = document.getElementById("myForm");
    
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault(); // لمنع إعادة تحميل الصفحة
            
            const formData = new FormData(form);
            const data = new URLSearchParams(formData).toString();
            
            // إرسال البيانات إلى الخادم باستخدام Fetch
            fetch("https://example.com/submit", {
                method: "POST",
                body: data,
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            })
            .then(response => response.json())
            .then(responseData => {
                console.log("تم إرسال النموذج بنجاح:", responseData);
            })
            .catch(error => console.error("خطأ في إرسال النموذج:", error));
        });
    }

    // التفاعل مع الزر: إضافة تأثير عند الضغط على الزر
    const button = document.getElementById("myButton");

    if (button) {
        button.addEventListener("click", function () {
            alert("تم الضغط على الزر!");
        });
    }

    // استخدام Fetch API لتحميل البيانات من Firebase أو API آخر
    const dataContainer = document.getElementById("data-container");

    // استدعاء البيانات من API (أو Firebase)
    fetch("https://api.example.com/data")
        .then(response => response.json())
        .then(data => {
            if (dataContainer) {
                dataContainer.innerHTML = `
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                `;
            }
        })
        .catch(error => console.error("خطأ في تحميل البيانات:", error));
});
