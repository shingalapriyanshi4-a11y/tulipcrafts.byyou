const fs = require('fs');
const path = 'd:/tulipcrafts.byyou/frontend2/src/pages/Home.jsx';
let text = fs.readFileSync(path, 'utf8');

// The original emojis were ?, ??, ??
text = text.replace(/<div style=\{\{fontSize: '2\.5rem', marginBottom: '15px'\}\}>.*<\/div>\s*<h4>Handmade with Love<\/h4>/g, "<div style={{fontSize: '2.5rem', marginBottom: '15px'}}>?</div>\n          <h4>Handmade with Love</h4>");

text = text.replace(/<div style=\{\{fontSize: '2\.5rem', marginBottom: '15px'\}\}>.*<\/div>\s*<h4>Fully Customizable<\/h4>/g, "<div style={{fontSize: '2.5rem', marginBottom: '15px'}}>??</div>\n          <h4>Fully Customizable</h4>");

text = text.replace(/<div style=\{\{fontSize: '2\.5rem', marginBottom: '15px'\}\}>.*<\/div>\s*<h4>Everlasting Beauty<\/h4>/g, "<div style={{fontSize: '2.5rem', marginBottom: '15px'}}>??</div>\n          <h4>Everlasting Beauty</h4>");

fs.writeFileSync(path, text, 'utf8');
