const mongoose = require('mongoose');
const Product = require('./models/Product');
const Order = require('./models/Order');
const Review = require('./models/Review');
require('dotenv').config();

async function migrate() {
  try {
    // Connect to local
    console.log('Connecting to local DB...');
    const localDb = await mongoose.createConnection('mongodb://127.0.0.1:27017/tulipcrafts').asPromise();
    
    // Connect to Atlas
    console.log('Connecting to Atlas DB...');
    const atlasDb = await mongoose.createConnection(process.env.MONGO_URI).asPromise();

    const LocalProduct = localDb.model('Product', Product.schema);
    const LocalOrder = localDb.model('Order', Order.schema);
    const LocalReview = localDb.model('Review', Review.schema);

    const AtlasProduct = atlasDb.model('Product', Product.schema);
    const AtlasOrder = atlasDb.model('Order', Order.schema);
    const AtlasReview = atlasDb.model('Review', Review.schema);

    console.log('Fetching local data...');
    const products = await LocalProduct.find().lean();
    const orders = await LocalOrder.find().lean();
    const reviews = await LocalReview.find().lean();

    console.log(`Found ${products.length} products, ${orders.length} orders, ${reviews.length} reviews.`);

    console.log('Clearing Atlas DB...');
    await AtlasProduct.deleteMany({});
    await AtlasOrder.deleteMany({});
    await AtlasReview.deleteMany({});

    console.log('Inserting into Atlas DB...');
    if (products.length) await AtlasProduct.insertMany(products);
    if (orders.length) await AtlasOrder.insertMany(orders);
    if (reviews.length) await AtlasReview.insertMany(reviews);

    console.log('Migration complete!');
    process.exit(0);
  } catch (err) {
    console.error('Migration failed:', err);
    process.exit(1);
  }
}

migrate();
