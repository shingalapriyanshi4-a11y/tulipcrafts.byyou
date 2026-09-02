import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { categories, products } from '../data/products';

export default function Category() {
  const location = useLocation();
  const currentCategory = new URLSearchParams(location.search).get('cat') || 'all';
  const [query, setQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const filteredProducts = useMemo(() => {
    let nextProducts = currentCategory === 'all'
      ? products
      : products.filter((product) => product.category === currentCategory);

    if (query.trim()) {
      const lower = query.trim().toLowerCase();
      nextProducts = nextProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(lower) ||
          product.category.toLowerCase().includes(lower)
      );
    }

    if (sortBy === 'price-low') {
      nextProducts = [...nextProducts].sort((a, b) => a.price - b.price);
    }

    if (sortBy === 'price-high') {
      nextProducts = [...nextProducts].sort((a, b) => b.price - a.price);
    }

    if (sortBy === 'rating') {
      nextProducts = [...nextProducts].sort((a, b) => b.rating - a.rating);
    }

    return nextProducts;
  }, [currentCategory, query, sortBy]);

  const heading = categories.find((category) => category.slug === currentCategory)?.label || 'All Products';

  return (
    <main className="category-page">
      <section className="page-hero compact">
        <div className="container">
          <p className="eyebrow">Collections</p>
          <h1>{heading}</h1>
        </div>
      </section>

      <div className="container shop-layout">
        <aside className="shop-sidebar">
          <h3>Categories</h3>
          <ul className="category-list">
            {categories.map((category) => (
              <li key={category.slug}>
                <Link to={category.slug === 'all' ? '/category' : `/category?cat=${category.slug}`} className={category.slug === currentCategory ? 'active' : ''}>
                  {category.label}
                </Link>
              </li>
            ))}
          </ul>
        </aside>

        <div className="shop-main">
          <div className="shop-toolbar">
            <input
              type="search"
              aria-label="Search products"
              placeholder="Search products..."
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />

            <select value={sortBy} onChange={(event) => setSortBy(event.target.value)} aria-label="Sort products">
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to high</option>
              <option value="price-high">Price: High to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>

          <div className="results-bar">
            <span>{filteredProducts.length} items</span>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
