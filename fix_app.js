const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// I will just download the original App.tsx if I had it. But I don't.
// Let's manually replace the broken tags.
