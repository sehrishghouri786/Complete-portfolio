// ===== Custom Mouse Follower =====
const cursorCircle = document.querySelector(".cursor-circle");

let mouseX = 0;
let mouseY = 0;
let circleX = 0;
let circleY = 0;
let speed = 0.1; // movement smoothness

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function moveCursor() {
  circleX += (mouseX - circleX) * speed;
  circleY += (mouseY - circleY) * speed;

  cursorCircle.style.left = circleX + "px";
  cursorCircle.style.top = circleY + "px";

  requestAnimationFrame(moveCursor);
}

moveCursor();

// ===== Tabs Functionality =====
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Hide all content first
tabContents.forEach(content => content.style.display = "none");

// Show default tab ("about")
document.getElementById("about").style.display = "block";
tabButtons[0].classList.add("active");

tabButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    // Hide all content
    tabContents.forEach(content => content.style.display = "none");

    // Show target tab
    const target = button.getAttribute("data-tab");
    document.getElementById(target).style.display = "block";
  });
});
