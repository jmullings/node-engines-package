## Welcome to node-engines 👋
[![Version](https://img.shields.io/npm/v/node-engines.svg)](https://www.npmjs.com/package/node-engines)
[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/jmullings/node-engines-package#readme)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/jmullings/node-engines-package/graphs/commit-activity)
[![License: MIT](https://img.shields.io/github/license/jmullings/node-engines)](https://github.com/jmullings/node-engines-package/blob/master/LICENSE)

> Node engines package builder

### Homepage

🏠 [Homepage](https://github.com/jmullings/node-engines-package#readme)

# Node Engines

**Node Engines** is a command-line tool that helps developers automatically detect and update the Node.js and npm versions in their project's `package.json` file; useful when working with NVM.

## Installation

You can install the **Node Engines** package globally using npm:

```bash
npm install -g node-engines
```

## Usage

After installing the package, you can use the `node-engines` command from any directory where you have a `package.json` file to detect and update the Node.js and npm versions.

Here's how you can use it:

```bash
node-engines
```

Running the `node-engines` command will perform the following actions:

1. Detect the current Node.js version installed on your system.
2. Detect the current npm (Node Package Manager) version.
3. Update the `engines` field in your project's `package.json` to specify the detected Node.js and npm versions.

If the `package.json` file does not exist in the current directory, the tool will display an error message.

### Example

Before running `node-engines`, your `package.json` may look like this:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "engines": {
    "node": ">=12.0.0",
    "npm": ">=6.0.0"
  },
  // ...
}
```


After running `node-engines`, your `package.json` will be updated with the detected versions:

```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "engines": {
    "node": ">=14.17.5",
    "npm": ">=7.24.0"
  },
  // ...
}
```

## Run tests

```sh
npm run test
```

## Author

👤 **Jason Mullings <admin@jlmconsulting.services>**

* Website: https://jasonmullings.com/
* Github: [@jmullings](https://github.com/jmullings)

## Contributing

Contributions, issues and feature requests are welcome!

Feel free to check [issues page](https://github.com/jmullings/node-engines-package/issues). You can also take a look at the [contributing guide](https://github.com/jmullings/node-engines-package/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## License

This project is [MIT](https://github.com/jmullings/node-engines-package/blob/master/LICENSE) licensed.