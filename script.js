document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
    const newsInput = document.getElementById("news-input");
    const newsStatus = document.getElementById("news-status");
    const confidenceScore = document.getElementById("confidence-score");
    const explanation = document.getElementById("explanation");
    const themeToggle = document.querySelector(".theme-toggle");
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    // Fake News Detection (Simulation)
    submitBtn.addEventListener("click", function () {
        const newsText = newsInput.value.trim();

        if (newsText === "") {
            alert("Please enter a news headline!");
            return;
        }

        // Simulating API response with fake probability
        setTimeout(() => {
            const isFake = Math.random() < 0.5;
            const score = (Math.random() * 100).toFixed(2);

            if (isFake) {
                newsStatus.textContent = "⚠️ Fake News Detected!";
                newsStatus.style.color = "red";
                confidenceScore.textContent = `${score}%`;
                explanation.textContent = "This news article contains misleading or false information.";
            } else {
                newsStatus.textContent = "✅ This News Seems Legit!";
                newsStatus.style.color = "green";
                confidenceScore.textContent = `${score}%`;
                explanation.textContent = "This article appears to be credible based on our analysis.";
            }
        }, 2000);
    });

    // Mobile Menu Toggle
    hamburger.addEventListener("click", function () {
        navMenu.classList.toggle("active");
    });

    // Theme Toggle
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            document.documentElement.style.setProperty("--background-light", "#111827");
            document.documentElement.style.setProperty("--text-light", "#FFFFFF");
            themeToggle.textContent = "☀️";
        } else {
            document.documentElement.style.setProperty("--background-light", "#F8FAFC");
            document.documentElement.style.setProperty("--text-light", "#333");
            themeToggle.textContent = "🌙";
        }
    });
});