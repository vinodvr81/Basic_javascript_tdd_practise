document.addEventListener("DOMContentLoaded", () => {
    const messageEl = document.getElementById("message");
    const btn = document.getElementById("action-btn");

    // Change message once loaded
    messageEl.textContent = "Your JavaScript is connected successfully!";

    // Simple interaction logic
    btn.addEventListener("click", () => {
        alert("Success! You've run your first project script.");
        messageEl.style.color = "green";
    });
});