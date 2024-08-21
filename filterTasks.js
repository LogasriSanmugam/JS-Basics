/*You are working on a JavaScript application where you need to manage a list of tasks. Each task has a name, a priority level (e.g., "high", "medium", "low"), and a completion status (true or false). Your goal is to write a function that:

Takes an array of tasks as input.
Returns a new array that only includes tasks with a "high" priority that are not yet completed.*/
function getHighPriorityIncompleteTasks(tasks) {
    return tasks.filter(task => task.priority === "high" && !task.completed);
}

const tasks = [
    { name: "Task 1", priority: "high", completed: false },
    { name: "Task 2", priority: "low", completed: false },
    { name: "Task 3", priority: "high", completed: true },
    { name: "Task 4", priority: "medium", completed: false },
    { name: "Task 5", priority: "high", completed: false },
];

const highPriorityIncompleteTasks = getHighPriorityIncompleteTasks(tasks);
console.log(highPriorityIncompleteTasks);
