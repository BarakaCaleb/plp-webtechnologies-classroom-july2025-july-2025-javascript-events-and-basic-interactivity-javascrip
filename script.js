// Dark/Light Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Feature
let count = 0;
document.getElementById("counterBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counterDisplay").textContent = count;
});

// FAQ Toggle
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submission
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorBox = document.getElementById("errorMsg");

  // Email regex
  const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  if (name === "") {
    errorBox.textContent = "Name cannot be empty!";
    return;
  }
  if (!emailRegex.test(email)) {
    errorBox.textContent = "Invalid email address!";
    return;
  }
  if (password.length < 6) {
    errorBox.textContent = "Password must be at least 6 characters.";
    return;
  }

  errorBox.textContent = "Form submitted successfully!";
});

// 🖱 Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
  hoverBox.style.background = "lightgreen";
});
hoverBox.addEventListener("mouseout", () => {
  hoverBox.style.background = "lightcoral";
});
