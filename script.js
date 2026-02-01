//your code here!
const list = document.getElementById("infi-list");

let count = 1;

// Function to add list items
function addItems(num) {
  for (let i = 0; i < num; i++) {
    const li = document.createElement("li");
    li.innerText = `Item ${count}`;
    list.appendChild(li);
    count++;
  }
}

// Add 10 items initially
addItems(10);

// Listen for scroll event
list.addEventListener("scroll", () => {
  // Check if user reached bottom
  if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
    addItems(2);
  }
});

