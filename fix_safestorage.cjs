const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const correctSafeStorage = `// Safe localStorage wrapper
const safeStorage = {
  getItem: (key: string) => {
    try {
      return window.localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      window.localStorage.setItem(key, value);
    } catch (e) {}
  },
  removeItem: (key: string) => {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {}
  }
};`;

code = code.replace(/\/\/ Safe localStorage wrapper[\s\S]*?removeItem:\s*\(key:\s*string\)\s*=>\s*\{\s*try\s*\{\s*safeStorage\.removeItem\(key\);\s*\}\s*catch\s*\(e\)\s*\{\}\s*\}\s*\};/, correctSafeStorage);
fs.writeFileSync('src/App.tsx', code);
