import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, customerReviews, products } from '../data/products';

const bestsellers = products.filter((product) => product.bestseller).slice(0, 4);

export default function Home() {
  const featuredCategories = [
    { slug: 'bouquets', label: 'Bouquets', copy: 'Signature romance in every petal', image: 'https://images.unsplash.com/photo-1525310072745-f49212b5ac6d?auto=format&fit=crop&w=900&q=80' },
    { slug: 'flower-pots', label: 'Flower Pots', copy: 'Soft home styling with lasting charm', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=900&q=80' },
    { slug: 'single-stems', label: 'Single Stems', copy: 'Simple floral elegance for daily joy', image: 'https://images.unsplash.com/photo-1526045478516-99145907023c?auto=format&fit=crop&w=900&q=80' }
  ];

  return (
    <main>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy animate-slide-up">
            <p className="eyebrow">Handmade floral luxury</p>
            <h1>Everlasting Beauty,<br />Crafted for life’s sweetest moments.</h1>
            <p className="hero-text">
              Discover premium floral keepsakes, gift-worthy bouquets, and elevated décor designed to feel personal, warm, and enchanting.
            </p>
            <div className="hero-actions">
              <Link to="/category" className="btn btn-primary">Shop Collection</Link>
              <Link to="/custom-order" className="btn btn-secondary">Custom Order</Link>
            </div>

            <div className="hero-metrics">
              <div><strong>4.9/5</strong><span>customer rating</span></div>
              <div><strong>2k+</strong><span>orders delivered</span></div>
              <div><strong>48h</strong><span>dispatch promise</span></div>
            </div>
          </div>

          <div className="hero-visual animate-slide-up delay-1">
            <div className="hero-card card-one">
              <img src="https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=900&q=80" alt="Floral bouquet in bloom" />
            </div>
            <div className="hero-card card-two">
              <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=900&q=80" alt="Luxury florals and décor" />
            </div>
            <div className="floating-note">Gift-ready ✨</div>
          </div>
        </div>
      </section>

      <section className="feature-strip container">
        <div className="feature-pill">Premium Materials</div>
        <div className="feature-pill">Handcrafted in Small Batches</div>
        <div className="feature-pill">Free Shipping Over ₹1,999</div>
        <div className="feature-pill">Custom Styling Available</div>
      </section>

      <section className="section container">
        <div className="section-heading">
          <p className="eyebrow">Our bestsellers</p>
          <h2>Most loved by happy gifting moments</h2>
        </div>

        <div className="products-grid">
          {bestsellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section category-showcase">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Collections</p>
            <h2>Shop by style and sentiment</h2>
          </div>

          <div className="showcase-grid">
            {featuredCategories.map((category, index) => (
              <Link key={category.slug} to={`/category?cat=${category.slug}`} className={`showcase-card card-${index + 1}`}>
                <img src={category.image} alt={category.label} />
                <div className="showcase-copy">
                  <p>{category.copy}</p>
                  <h3>{category.label}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container story-grid">
        <div className="story-copy">
          <p className="eyebrow">Why Tulipcrafts</p>
          <h2>Designed to feel intimate, elevated, and deeply personal.</h2>
          <p>
            Every creation is made with artistry, warmth, and a luxury finish. Whether it’s for gifting, décor, or a thoughtful surprise, our flowers are built to last beautifully.
          </p>
          <ul className="check-list">
            <li>Customized floral palettes and styling</li>
            <li>Durable handcrafted finishes for lasting appeal</li>
            <li>Thoughtful gifting experience from start to finish</li>
          </ul>
        </div>

        <div className="story-cards">
          <div className="mini-card">
            <span>💌</span>
            <h3>Gift-ready packaging</h3>
            <p>Thoughtful, elegant presentation for every order.</p>
          </div>
          <div className="mini-card accent">
            <span>🎨</span>
            <h3>Custom color matching</h3>
            <p>Choose your palette to match the mood and occasion.</p>
          </div>
          <div className="mini-card">
            <span>🚚</span>
            <h3>Quick dispatch</h3>
            <p>Made beautifully and shipped with care.</p>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="section-heading narrow">
            <p className="eyebrow">Loved by customers</p>
            <h2>Real moments, real delight</h2>
          </div>

          <div className="testimonial-grid">
            {customerReviews.map((review) => (
              <article key={review.name} className="testimonial-card">
                <div className="stars">{'★'.repeat(review.rating)}</div>
                <h3>{review.title}</h3>
                <p>“{review.quote}”</p>
                <strong>{review.name}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section container newsletter">
        <div>
          <p className="eyebrow">Stay inspired</p>
          <h2>Get the latest seasonal drops and gifting ideas.</h2>
        </div>
        <form className="newsletter-form">
          <input type="email" placeholder="Your email address" aria-label="Email address" />
          <button type="submit" className="btn btn-primary">Subscribe</button>
        </form>
      </section>
    </main>
  );
}
