const fs = require('fs');

let appTsx = fs.readFileSync('src/App.tsx', 'utf8');

const safeStorageCode = `
// Safe localStorage wrapper
const safeStorage = {
  getItem: (key: string) => {
    try {
      return localStorage.getItem(key);
    } catch (e) {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (e) {}
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {}
  }
};
`;

if (!appTsx.includes('safeStorage')) {
  appTsx = appTsx.replace(
    "import { Minus, Square, X,",
    safeStorageCode + "\nimport { Minus, Square, X,"
  );
  
  // Replace localStorage.getItem with safeStorage.getItem
  appTsx = appTsx.replace(/localStorage\.getItem/g, 'safeStorage.getItem');
  appTsx = appTsx.replace(/localStorage\.setItem/g, 'safeStorage.setItem');
  appTsx = appTsx.replace(/localStorage\.removeItem/g, 'safeStorage.removeItem');
  
  fs.writeFileSync('src/App.tsx', appTsx);
  console.log("Fixed localStorage");
} else {
  console.log("Already fixed");
}
