const fs = require('fs');
const path = 'd:/tulipcrafts.byyou/frontend2/src/components/Header.jsx';
let text = fs.readFileSync(path, 'utf8');
text = text.replace("<nav className={header-nav }>", "<nav className={header-nav }>");
fs.writeFileSync(path, text, 'utf8');
