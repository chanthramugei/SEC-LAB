// Global task list
let tasks = [];

// 1. Add a task and call a callback
function addTask(task, callback) {
  tasks.push(task);
  callback(); // 2. Call the callback to print tasks
}

// 2. Callback to print all current tasks
function printTasks() {
  console.log("Current Tasks:");
  for (let i = 0; i < tasks.length; i++) {
    console.log((i + 1) + ". " + tasks[i]);
  }
}

// 3. Arrow function example (count tasks)
const countTasks = () => {
  console.log("Total tasks: " + tasks.length);
};

// 4. Function to add multiple tasks
function addMultipleTasks(...newTasks) {
  for (let task of newTasks) {
    tasks.push(task);
  }
  printTasks(); // Show updated task list
}

// 5. Variable scope example
let outsideVar = "Outside variable";

function showScope() {
  let insideVar = "Inside variable";
  console.log(outsideVar); // Accessible
  console.log(insideVar);  // Accessible
}

// --- Example Usage ---

addTask("Do homework", printTasks);
addTask("Go for a walk", printTasks);
countTasks();

addMultipleTasks("Read book", "Buy groceries");

showScope();
// console.log(insideVar);