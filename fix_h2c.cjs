const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

const newCode = `                      import('html2canvas').then(module => {
                        const target = document.getElementById('wallet-portfolio-view');
                        if (target) {
                           const h2c = module.default || module;
                           if (typeof h2c !== 'function') {
                             setExportingWallet(false);
                             return;
                           }
                           h2c(target, {
                              backgroundColor: '#0a0a0a',
                              scale: 2
                           }).then((canvas) => {
                              const link = document.createElement('a');
                              link.download = \`dwm_portfolio_\${currentUser}_\${Date.now()}.png\`;
                              link.href = canvas.toDataURL();
                              link.click();
                              setExportingWallet(false);
                           }).catch(() => setExportingWallet(false));
                        } else setExportingWallet(false);
                      });`;

const regex = /import\('html2canvas'\)\.then\(html2canvas => \{[\s\S]*?else setExportingWallet\(false\);\s*\}\);/;
if (regex.test(code)) {
    code = code.replace(regex, newCode);
    fs.writeFileSync('src/App.tsx', code);
    console.log('Replaced html2canvas code');
} else {
    console.log('Regex did not match');
}
