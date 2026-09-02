const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Product = require('./models/Product');

mongoose.connect('mongodb://127.0.0.1:27017/tulipcrafts')
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // Clear existing
    await Product.deleteMany({});
    
    // Read data.js
    const dataPath = path.join(__dirname, '../design/js/data.js');
    let dataContent = fs.readFileSync(dataPath, 'utf8');
    
    // Extract array content
    // data.js starts with 'const products = ['
    dataContent = dataContent.substring(dataContent.indexOf('['));
    
    // Remove the trailing code (like global review arrays if any)
    const match = dataContent.match(/\];/);
    if (match) {
        dataContent = dataContent.substring(0, match.index + 1);
    }
    
    // Evaluate the array safely
    let products = [];
    try {
        products = eval('(' + dataContent + ')');
    } catch (e) {
        console.error("Error evaluating data.js array:", e);
        process.exit(1);
    }
    
    // Insert
    await Product.insertMany(products);
    console.log(`Successfully seeded ${products.length} products!`);
    
    mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
