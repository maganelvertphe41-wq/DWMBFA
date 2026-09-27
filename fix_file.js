const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// remove QR scanner useEffect
code = code.replace(/useEffect\(\(\) => \{\s*let scanner: any = null;\s*let isMounted = true;\s*if \(isScanningQR\) \{[\s\S]*?\}, \[isScanningQR\]\);/, '');

// replace downloadReceipt with a simple print
code = code.replace(/const downloadReceipt = async \(\) => \{[\s\S]*?setReceiptDownloaded\(true\);\s*setTimeout\(\(\) => setReceiptDownloaded\(false\), 3000\);\s*\};/g, `const downloadReceipt = async () => { window.print(); setReceiptDownloaded(true); setTimeout(() => setReceiptDownloaded(false), 3000); };`);

fs.writeFileSync('src/App.tsx', code);
