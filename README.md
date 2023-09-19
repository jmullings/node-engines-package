```markdown
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