#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

// Directory to create
const projectName = process.argv[2] || 'simple-app';
const projectPath = path.join(process.cwd(), projectName);

// HTML content
const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Simple App</title>
</head>
<body>
  <h1>Hello, World!</h1>
</body>
</html>
`;

// Create the directory
if (!fs.existsSync(projectPath)) {
  fs.mkdirSync(projectPath);
  console.log(`Created directory: ${projectPath}`);
  
  // Create index.html
  const indexPath = path.join(projectPath, 'index.html');
  fs.writeFileSync(indexPath, htmlContent);
  console.log(`Created file: ${indexPath}`);
} else {
  console.log(`Directory already exists: ${projectPath}`);
}

