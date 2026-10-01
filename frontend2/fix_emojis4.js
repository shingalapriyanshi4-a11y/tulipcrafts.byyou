const fs = require('fs');
const path = 'd:/tulipcrafts.byyou/frontend2/src/pages/Home.jsx';
let text = fs.readFileSync(path, 'utf8');

const startIdx = text.indexOf('<section className="features-banner">');
const endIdx = text.indexOf('</section>', startIdx) + 10;

if (startIdx !== -1 && endIdx !== -1) {
    const newBlock = <section className="features-banner">
          <div className="feature-item">
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>\u2728</div>
            <h4>Handmade with Love</h4>
            <p>Every single petal is crafted by hand to ensure unique, premium quality.</p>
          </div>
          <div className="feature-item">
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>\uD83C\uDFA8</div>
            <h4>Fully Customizable</h4>
            <p>Choose your favorite colors and designs to match your aesthetic.</p>
          </div>
          <div className="feature-item">
            <div style={{fontSize: '2.5rem', marginBottom: '15px'}}>\uD83C\uDF3B</div>
            <h4>Everlasting Beauty</h4>
            <p>Unlike real flowers, our pipe-cleaner bouquets stay beautiful forever.</p>
          </div>
        </section>;
    
    text = text.substring(0, startIdx) + newBlock + text.substring(endIdx);
    fs.writeFileSync(path, text, 'utf8');
}
