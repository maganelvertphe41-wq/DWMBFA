const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const html = fs.readFileSync('rendered.html', 'utf8');
const dom = new JSDOM(html);
const document = dom.window.document;

function traverse(node, depth = 0) {
    if (node.nodeType === 3) {
        let text = node.nodeValue.trim();
        if (text) console.log('  '.repeat(depth) + 'TEXT: ' + text.substring(0, 50));
        return;
    }
    if (node.nodeType !== 1) return;
    if (['SCRIPT', 'STYLE', 'META', 'LINK', 'HEAD'].includes(node.nodeName)) return;
    
    let info = node.nodeName;
    if (node.id) info += '#' + node.id;
    if (node.className && typeof node.className === 'string') info += '.' + node.className.split(' ').join('.');
    
    const style = node.getAttribute('style');
    if (style && style.includes('display: none')) return;
    
    console.log('  '.repeat(depth) + info);
    
    for (let i = 0; i < node.childNodes.length; i++) {
        traverse(node.childNodes[i], depth + 1);
    }
}

traverse(document.body);
