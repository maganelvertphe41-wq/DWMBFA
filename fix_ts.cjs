const fs = require('fs');
let appCode = fs.readFileSync('src/App.tsx', 'utf8');
appCode = appCode.replace(
  /let html2canvas = typeof html2canvasModule === 'function' \? html2canvasModule : html2canvasModule\.default;/g,
  `let html2canvas: any = typeof html2canvasModule === 'function' ? html2canvasModule : html2canvasModule.default;`
);
fs.writeFileSync('src/App.tsx', appCode);

let mainCode = fs.readFileSync('src/main.tsx', 'utf8');
mainCode = mainCode.replace(
  /class ErrorBoundary extends React\.Component/g,
  `class ErrorBoundary extends React.Component<any, any>`
);
fs.writeFileSync('src/main.tsx', mainCode);
