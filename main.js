// ===== API URL =====
const API = "http://localhost:5000";

// ===== Page Load =====
document.addEventListener("DOMContentLoaded", () => {

    // Active Navigation
    const currentPage = window.location.pathname.split("/").pop() || "index.html";

    document.querySelectorAll(".nav-item").forEach(item => {
        item.classList.remove("active");

        if (item.getAttribute("href") === currentPage) {
            item.classList.add("active");
        }
    });

    // Smooth Scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // Clock
    updateClock();
    setInterval(updateClock, 1000);
});

// ===== Clock =====
function updateClock() {

    const clock = document.getElementById("currentTime");

    if (!clock) return;

    const now = new Date();

    clock.innerHTML = now.toLocaleTimeString();
}

// ===== Toast =====
function showToast(message) {

    const toast = document.getElementById("toast");

    if (!toast) return;

    document.getElementById("toastMessage").textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },3000);

}

// ===== Health Check =====
async function checkServer(){

    try{

        const res = await fetch(`${API}/api/health`);

        if(res.ok){

            console.log("✅ Backend Connected");

        }

    }catch{

        console.log("❌ Backend Offline");

    }

}

checkServer();

// Prevent Form Resubmit
if(window.history.replaceState){

    window.history.replaceState(null,null,window.location.href);

}