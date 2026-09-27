const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

code = code.replace(
  /<div id="qr-reader" className="w-full h-full"><\/div>/,
  '<div id="qr-reader" className="w-full h-full relative flex items-center justify-center"><button onClick={() => { setWithdrawAddress("0xSCANMOCK987654321"); setIsScanningQR(false); }} className="px-4 py-2 border border-purple-500 bg-purple-900/40 text-purple-300 text-xs font-bold absolute">Simulate Scan</button></div>'
);

fs.writeFileSync('src/App.tsx', code);
