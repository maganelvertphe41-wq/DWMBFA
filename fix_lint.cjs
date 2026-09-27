const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');
code = code.replace(/const downloadReceipt = async \(\) => \{ window\.print\(\); setReceiptDownloaded\(true\); setTimeout\(\(\) => setReceiptDownloaded\(false\), 3000\); \};/, 'const downloadReceipt = async () => { window.print(); };');
fs.writeFileSync('src/App.tsx', code);
