# Task Runner

Task Runner is a lightweight Node.js package for automating common development tasks such as file minification, compilation, testing, and more.

## Installation

To install Task Runner, use npm:

```bash
npm install task-runner
```

## Usage

Task Runner provides a simple API for defining and running tasks. Here's an example of how to use it:

```javascript
// Import the Task Runner module
const TaskRunner = require('task-runner');

// Define tasks
const tasks = {
  'clean': () => {
    console.log('Cleaning files...');
    // Add logic to clean files
  },
  'build': () => {
    console.log('Building project...');
    // Add logic to build project
  },
  'test': () => {
    console.log('Running tests...');
    // Add logic to run tests
  }
};

// Create a new instance of Task Runner
const runner = new TaskRunner(tasks);

// Run tasks
runner.run('clean');
runner.run('build');
runner.run('test');
```

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request on the [GitHub repository](https://github.com/yourusername/task-runner).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
