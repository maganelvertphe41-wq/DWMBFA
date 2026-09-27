const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const regex = /const downloadReceipt = async \(\) => \{[\s\S]*?\} catch \(err\) \{[\s\S]*?\}[\s\S]*?\};/;
code = code.replace(regex, `const downloadReceipt = async () => { window.print(); setReceiptDownloaded(true); setTimeout(() => setReceiptDownloaded(false), 3000); };`);

fs.writeFileSync('src/App.tsx', code);
