const fs = require('fs');
const path = require('path');

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (exists && isDirectory) {
    fs.mkdirSync(dest);
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
};

if (require.main === module) {
  if (process.argv.length < 3) {
    console.log('create-yagss-site requires exactly one argument.');
    process.exitCode = 1;
  } else {
    const srcPath = path.resolve(__dirname, 'starter-project');
    const destPath = path.resolve(process.cwd(), process.argv[2]);
    copyRecursiveSync(srcPath, destPath);
  }
}
