#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Determine Node.js and npm versions
const currentNodeVersion = process.version;
const npmVersion = require('child_process').execSync('npm -v').toString().trim();

// Get the path to the nearest package.json
const packageJsonPath = path.resolve(process.cwd(), 'package.json');

// Update the package.json with detected versions
if (fs.existsSync(packageJsonPath)) {
  const packageJson = require(packageJsonPath);
  packageJson.engines = {
    node: `>=${currentNodeVersion}`,
    npm: `>=${npmVersion}`,
  };

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('Updated package.json with detected Node.js and npm versions.');
} else {
  console.error('No package.json found in the current directory.');
}
