// task-runner.js

class TaskRunner {
  constructor() {
    this.tasks = {};
  }

  // Define a task with its dependencies
  addTask(name, dependencies, taskFunction) {
    this.tasks[name] = {
      dependencies: dependencies || [],
      taskFunction: taskFunction
    };
  }

  // Run a task and its dependencies recursively
  async runTask(taskName, executedTasks = new Set()) {
    // Check if the task has already been executed to avoid running it multiple times
    if (executedTasks.has(taskName)) return;

    // Get the task object
    const task = this.tasks[taskName];

    // Check if the task exists
    if (!task) {
      throw new Error(`Task "${taskName}" not found.`);
    }

    // Run dependencies first
    for (const dependency of task.dependencies) {
      await this.runTask(dependency, executedTasks);
    }

    // Run the task function
    await task.taskFunction();

    // Mark the task as executed
    executedTasks.add(taskName);
  }

  // Run all tasks in the specified order
  async runAllTasks() {
    const executedTasks = new Set();

    // Run tasks in the order they were defined
    for (const taskName in this.tasks) {
      await this.runTask(taskName, executedTasks);
    }
  }
}

// Example usage:
const taskRunner = new TaskRunner();

taskRunner.addTask('task1', [], async () => {
  console.log('Running Task 1');
  // Task 1 logic here
});

taskRunner.addTask('task2', ['task1'], async () => {
  console.log('Running Task 2');
  // Task 2 logic here
});

taskRunner.addTask('task3', ['task1'], async () => {
  console.log('Running Task 3');
  // Task 3 logic here
});

taskRunner.addTask('task4', ['task2', 'task3'], async () => {
  console.log('Running Task 4');
  // Task 4 logic here
});

// Run all tasks
taskRunner.runAllTasks().catch(err => console.error(err));
