const fs = require('fs');
let code = fs.readFileSync('src/App.tsx', 'utf8');

// Fix 1: The first unclosed div
code = code.replace(
  /className=\{\`w-full \$\{isPositive \? 'bg-emerald-400' : 'bg-rose-400'\}\`\}\s*<\/div>/g,
  'className={`w-full ${isPositive ? \'bg-emerald-400\' : \'bg-rose-400\'}`} ></div>'
);

// Fix 2: toLocaleString deleted lines
code = code.replace(
  /\{receiptData.amountUsd.toLocaleString\('en-US', \{\s*<\/div>/g,
  '{receiptData.amountUsd.toLocaleString(\'en-US\', { style: \'currency\', currency: \'USD\' })} </div>'
);

// Fix 3: Other deleted styles
// Let's find all places where the line ends with a comma, or an opening brace, but next line is missing closing tags.
fs.writeFileSync('src/App.tsx', code);
console.log('Fixed some errors');
