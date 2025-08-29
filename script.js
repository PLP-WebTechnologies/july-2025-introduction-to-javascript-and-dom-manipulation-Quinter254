// =============================
// 🎯 Part 1: Basics
// =============================
function askName() {
  let userName = prompt("Enter your name:");
  
  // Conditional logic
  if (userName) {
    document.getElementById("greeting").innerText = "Hello, " + userName + "!";
  } else {
    document.getElementById("greeting").innerText = "You didn’t enter a name!";
  }
}

// =============================
// ❤️ Part 2: Functions
// =============================

// Function to add two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to display the total
function showTotal() {
  let total = addNumbers(10, 20);
  document.getElementById("totalResult").innerText = "Total = " + total;
}

// =============================
// 🔁 Part 3: Loops
// =============================

function generateList() {
  let list = document.getElementById("loopList");
  list.innerHTML = ""; // clear old items

  // Example 1: For loop
  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.innerText = "Item " + i;
    list.appendChild(li);
  }

  // Example 2: While loop (countdown in console)
  let count = 5;
  while (count > 0) {
    console.log("Countdown: " + count);
    count--;
  }
}

// =============================
// 🌐 Part 4: DOM Manipulation
// =============================

// Toggle background color
function toggleColor() {
  document.body.classList.toggle("dark-mode");
}

// Add a new message dynamically
function addMessage() {
  let messages = document.getElementById("messages");
  let newMsg = document.createElement("p");
  newMsg.innerText = "This is a new message added at " + new Date().toLocaleTimeString();
  messages.appendChild(newMsg);
}

// Add a CSS rule for dark mode dynamically
let style = document.createElement("style");
style.innerHTML = `
  .dark-mode {
    background: #2c3e50;
    color: #ecf0f1;
  }
`;
document.head.appendChild(style);
