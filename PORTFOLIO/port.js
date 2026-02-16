
// TYPEWRITER EFFECT
// ===============================
const text = "Frontend Developer";
let index = 0;
const speed = 80;
const typingElement = document.getElementById("typing");

function typeWriter() {
    if (index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;

const typingText = document.querySelector(".typing-text");
const textArray = ["Frontend Developer", "UI Designer", "Web Creator", "Python Developer"];
let textIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (!typingText) return;

    if (charIndex < textArray[textIndex].length) {
        typingText.textContent += textArray[textIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 80);
    } else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    if (charIndex > 0) {
        typingText.textContent = textArray[textIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseEffect, 50);
    } else {
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// navbar==============
//=====================


const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

// SMOOTH SCROLL
// ===============================
document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });
    });
});


// ===============================
// BUTTON CLICK ANIMATION
// ===============================
document.querySelectorAll(".main-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
            btn.style.transform = "scale(1)";
        }, 150);
    });
});

// IMAGE GLOW HOVER EFFECT
// ===============================
const image = document.querySelector("img");

image.addEventListener("mouseover", () => {
    image.style.boxShadow = "0 0 50px #0ea5e9";
});

image.addEventListener("mouseout", () => {
    image.style.boxShadow = "0 0 25px #0ea5e9";
});

// Timeline Fade Animation
// =============================
const skillBars = document.querySelectorAll(".progress");

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bar = entry.target;
            const width = bar.getAttribute("data-width");
            bar.style.width = width;
            bar.style.transition = "width 1.5s ease-in-out";
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    bar.style.width = "0";
    skillObserver.observe(bar);
});



// =============================
// Contact Form Validation
// =============================
function sendMessage() {

    const name = document.querySelector('input[type="text"]').value.trim();
    const email = document.querySelector('input[type="email"]').value.trim();
    const message = document.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("⚠ Please fill all fields!");
        return;
    }

    if (!validateEmail(email)) {
        alert("⚠ Enter valid email address!");
        return;
    }

    alert("✅ Message Sent Successfully 🚀");

    // Reset form
    document.querySelector("input[type='text']").value = "";
    document.querySelector("input[type='email']").value = "";
    document.querySelector("textarea").value = "";
}
// Email Validation Function
// =============================
function validateEmail(email) {
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    return pattern.test(email);
}


// =============================
// Back To Top Button
// =============================
const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.style.position = "fixed";
topBtn.style.bottom = "20px";
topBtn.style.right = "20px";
topBtn.style.padding = "10px 15px";
topBtn.style.background = "#00d9ff";
topBtn.style.color = "#000";
topBtn.style.border = "none";
topBtn.style.borderRadius = "8px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.fontWeight = "bold";
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// =============================
// Glow Hover Effect
// =============================
document.querySelectorAll(".glass").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.boxShadow = "0 0 30px #00d9ff";
    });

    card.addEventListener("mouseleave", () => {
        card.style.boxShadow = "0 0 20px rgba(0,217,255,0.3)";
    });
});
