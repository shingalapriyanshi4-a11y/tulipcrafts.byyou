import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: '', desc: '' });
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [isAuthenticated]);

  const fetchProducts = () => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'admin123') setIsAuthenticated(true);
    else alert('Incorrect Password!');
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    try {
      let imageUrl = '';
      // 1. Upload Image if selected
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const uploadRes = await axios.post('http://localhost:5000/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        imageUrl = uploadRes.data.imageUrl;
      }

      // 2. Add Product
      const productData = {
        ...newProduct,
        images: imageUrl ? [imageUrl] : []
      };

      await axios.post('http://localhost:5000/api/products', productData);
      
      alert('Product Added Successfully! 🎉');
      fetchProducts();
      setNewProduct({ title: '', price: '', category: '', desc: '' });
      setImageFile(null);
      document.getElementById('imageUploadInput').value = ''; // Reset file input
    } catch (err) {
      alert('Error adding product: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`http://localhost:5000/api/products/${id}`)
        .then(() => {
          fetchProducts();
        })
        .catch(err => alert('Error deleting product: ' + err.message));
    }
  };

  const getImgUrl = (path) => path.startsWith('uploads/') ? `http://localhost:5000/${path}` : `/${path}`;

  if (!isAuthenticated) {
    return (
      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: 'var(--color-cream)'}}>
        <form onSubmit={handleLogin} style={{padding: '50px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', width: '100%', maxWidth: '400px'}}>
          <h2 style={{color: 'var(--color-text-main)', marginBottom: '30px', fontFamily: 'var(--font-heading)'}}>Admin Secure Login</h2>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter Admin Password" style={{padding: '15px', width: '100%', marginBottom: '30px', borderRadius: '10px', border: '1px solid #ddd', fontSize: '1rem'}} />
          <button type="submit" className="btn btn-primary" style={{width: '100%'}}>Access Dashboard</button>
        </form>
      </div>
    );
  }

  return (
    <main style={{backgroundColor: '#fafafa', minHeight: '100vh', padding: '40px 20px'}}>
      <div className="container" style={{maxWidth: '1000px'}}>
        
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px'}}>
          <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)'}}>Admin Dashboard</h1>
          <span style={{background: 'var(--color-peach-light)', padding: '8px 15px', borderRadius: '20px', fontWeight: 'bold', color: 'var(--color-peach-dark)'}}>
            Total Products: {products.length}
          </span>
        </div>
        
        <div style={{background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: '50px'}}>
          <h2 style={{borderBottom: '2px solid var(--color-peach-light)', paddingBottom: '15px', marginBottom: '25px', color: 'var(--color-text-main)'}}>Add New Product</h2>
          
          <form onSubmit={handleAddProduct} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px'}}>
            
            <div style={{gridColumn: '1 / -1'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Product Photo</label>
              <div style={{border: '2px dashed #ddd', padding: '20px', borderRadius: '12px', textAlign: 'center', background: '#fcfcfc'}}>
                <input id="imageUploadInput" type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{cursor: 'pointer'}} required />
                <p style={{fontSize: '0.85rem', color: 'gray', marginTop: '10px'}}>Upload a clear, high-quality image of the product.</p>
              </div>
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Product Title</label>
              <input type="text" placeholder="e.g. Pink Tulip Bouquet" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} required style={{width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd'}} />
            </div>

            <div>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Price</label>
              <input type="text" placeholder="e.g. ₹650" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required style={{width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd'}} />
            </div>

            <div style={{gridColumn: '1 / -1'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Category</label>
              <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} required style={{width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd', backgroundColor: 'white'}}>
                <option value="">-- Select Category --</option>
                <option value="bouquets">Bouquets</option>
                <option value="flower-pots">Flower Pots</option>
                <option value="single-stems">Single Stems</option>
                <option value="custom-gifts">Custom Gifts</option>
                <option value="flower-card-holder">Flower Card Holder</option>
                <option value="keychains">Keychains</option>
                <option value="mobile-covers">Mobile Covers</option>
              </select>
            </div>

            <div style={{gridColumn: '1 / -1'}}>
              <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Product Description</label>
              <textarea placeholder="Write a nice description..." value={newProduct.desc} onChange={e => setNewProduct({...newProduct, desc: e.target.value})} required style={{width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd', height: '120px', resize: 'vertical'}} />
            </div>
            
            <div style={{gridColumn: '1 / -1', marginTop: '10px'}}>
              <button type="submit" className="btn btn-primary" style={{width: '100%', padding: '15px', fontSize: '1.1rem'}} disabled={isUploading}>
                {isUploading ? 'Uploading Product...' : '+ Publish Product'}
              </button>
            </div>
          </form>
        </div>

        <h2 style={{borderBottom: '2px solid var(--color-peach-light)', paddingBottom: '15px', marginBottom: '25px', color: 'var(--color-text-main)'}}>Manage Products</h2>
        <div style={{background: 'white', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', overflow: 'hidden'}}>
          <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left'}}>
            <thead>
              <tr style={{background: 'var(--color-cream)', color: '#444'}}>
                <th style={{padding: '20px'}}>Photo</th>
                <th style={{padding: '20px'}}>Title</th>
                <th style={{padding: '20px'}}>Price</th>
                <th style={{padding: '20px'}}>Category</th>
                <th style={{padding: '20px', textAlign: 'center'}}>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.slice().reverse().map(p => (
                <tr key={p.id} style={{borderBottom: '1px solid #f0f0f0', transition: 'background 0.2s'}} onMouseOver={e=>e.currentTarget.style.background='#fafafa'} onMouseOut={e=>e.currentTarget.style.background='white'}>
                  <td style={{padding: '15px 20px'}}>
                    {p.images && p.images.length > 0 ? (
                      <img src={getImgUrl(p.images[0])} alt={p.title} style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px', border: '1px solid #eee'}} />
                    ) : (
                      <div style={{width: '50px', height: '50px', background: '#eee', borderRadius: '8px'}}></div>
                    )}
                  </td>
                  <td style={{padding: '15px 20px', fontWeight: 'bold', color: '#333'}}>{p.title}</td>
                  <td style={{padding: '15px 20px', color: 'var(--color-peach-dark)', fontWeight: 'bold'}}>{p.price.replace(/<[^>]+>/g, '')}</td>
                  <td style={{padding: '15px 20px'}}>
                    <span style={{background: '#f0f0f0', padding: '5px 10px', borderRadius: '12px', fontSize: '0.85rem'}}>{p.category}</span>
                  </td>
                  <td style={{padding: '15px 20px', textAlign: 'center'}}>
                    <button onClick={() => handleDelete(p.id)} style={{background: '#ffebee', color: '#d32f2f', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s'}}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </main>
  );
}
