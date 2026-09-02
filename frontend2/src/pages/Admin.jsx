import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('products'); // 'products' or 'orders'
  const [products, setProducts] = useState([]);
  const [orders, setOrders] = useState([]);
  
  const [newProduct, setNewProduct] = useState({ title: '', price: '', category: '', desc: '' });
  const [imageFile, setImageFile] = useState(null);
  
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Instead of password, let's check email! It's much more secure.
  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      // Hardcoded admin check
      if (user.email && user.email.trim().toLowerCase() === 'shingalapriyanshi4@gmail.com') {
        setIsAuthenticated(true);
      }
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
      fetchOrders();
    }
  }, [isAuthenticated]);

  const fetchProducts = () => {
    axios.get('https://tulipcrafts-byyou.onrender.com/api/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  };

  const fetchOrders = () => {
    axios.get('https://tulipcrafts-byyou.onrender.com/api/orders')
      .then(res => setOrders(res.data))
      .catch(err => console.error(err));
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    setIsUploading(true);
    
    try {
      let imageUrl = '';
      if (imageFile) {
        const formData = new FormData();
        formData.append('image', imageFile);
        
        const uploadRes = await axios.post('https://tulipcrafts-byyou.onrender.com/api/upload', formData, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        imageUrl = uploadRes.data.imageUrl;
      }

      const productData = {
        ...newProduct,
        images: imageUrl ? [imageUrl] : []
      };

      await axios.post('https://tulipcrafts-byyou.onrender.com/api/products', productData);
      
      alert('Product Added Successfully! 🌸');
      fetchProducts();
      setNewProduct({ title: '', price: '', category: '', desc: '' });
      setImageFile(null);
      document.getElementById('imageUploadInput').value = ''; 
    } catch (err) {
      alert('Error adding product: ' + err.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      axios.delete(`https://tulipcrafts-byyou.onrender.com/api/products/${id}`)
        .then(() => fetchProducts())
        .catch(err => alert('Error deleting product: ' + err.message));
    }
  };

  const getImgUrl = (path) => path.startsWith('uploads/') ? `https://tulipcrafts-byyou.onrender.com/${path}` : `/${path}`;

  if (!isAuthenticated) {
    return (
      <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '80vh', backgroundColor: 'var(--color-cream)'}}>
        <div style={{padding: '50px', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', textAlign: 'center', width: '100%', maxWidth: '400px'}}>
          <h2 style={{color: 'red', marginBottom: '20px', fontFamily: 'var(--font-heading)'}}>Access Denied</h2>
          <p style={{color: 'var(--color-text-light)'}}>You do not have administrative privileges to view this page.</p>
        </div>
      </div>
    );
  }

  return (
    <main style={{backgroundColor: '#fafafa', minHeight: '100vh', padding: '40px 20px'}}>
      <div className="container" style={{maxWidth: '1000px'}}>
        
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px'}}>
          <h1 style={{fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)'}}>Admin Dashboard</h1>
          
          <div style={{display: 'flex', gap: '15px'}}>
            <button 
              onClick={() => setActiveTab('products')}
              style={{...tabStyle, background: activeTab === 'products' ? 'var(--color-text-main)' : '#ddd', color: activeTab === 'products' ? 'white' : '#333'}}
            >
              Manage Products
            </button>
            <button 
              onClick={() => setActiveTab('orders')}
              style={{...tabStyle, background: activeTab === 'orders' ? 'var(--color-text-main)' : '#ddd', color: activeTab === 'orders' ? 'white' : '#333'}}
            >
              Customer Orders
            </button>
          </div>
        </div>
        
        {activeTab === 'products' ? (
          <>
            <div style={{background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)', marginBottom: '50px'}}>
              <h2 style={{borderBottom: '2px solid var(--color-peach-light)', paddingBottom: '15px', marginBottom: '25px', color: 'var(--color-text-main)'}}>Add New Product</h2>
              <form onSubmit={handleAddProduct} style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '25px'}}>
                <div style={{gridColumn: '1 / -1'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Product Photo</label>
                  <div style={{border: '2px dashed #ddd', padding: '20px', borderRadius: '12px', textAlign: 'center', background: '#fcfcfc'}}>
                    <input id="imageUploadInput" type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{cursor: 'pointer'}} required />
                  </div>
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Product Title</label>
                  <input type="text" value={newProduct.title} onChange={e => setNewProduct({...newProduct, title: e.target.value})} required style={inputStyle} />
                </div>
                <div>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Price</label>
                  <input type="text" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} required style={inputStyle} />
                </div>
                <div style={{gridColumn: '1 / -1'}}>
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Category</label>
                  <select value={newProduct.category} onChange={e => setNewProduct({...newProduct, category: e.target.value})} required style={inputStyle}>
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
                  <label style={{display: 'block', marginBottom: '8px', fontWeight: 'bold', color: '#555'}}>Description</label>
                  <textarea value={newProduct.desc} onChange={e => setNewProduct({...newProduct, desc: e.target.value})} required style={{...inputStyle, height: '120px', resize: 'vertical'}} />
                </div>
                <div style={{gridColumn: '1 / -1', marginTop: '10px'}}>
                  <button type="submit" style={{width: '100%', padding: '15px', fontSize: '1.1rem', background: 'var(--color-peach-dark)', color: 'white', border: 'none', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer'}} disabled={isUploading}>
                    {isUploading ? 'Uploading...' : '+ Publish Product'}
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
                    <tr key={p.id} style={{borderBottom: '1px solid #f0f0f0'}}>
                      <td style={{padding: '15px 20px'}}>
                        {p.images && p.images.length > 0 ? (
                          <img src={getImgUrl(p.images[0])} alt={p.title} style={{width: '50px', height: '50px', objectFit: 'cover', borderRadius: '8px'}} />
                        ) : <div style={{width: '50px', height: '50px', background: '#eee', borderRadius: '8px'}}></div>}
                      </td>
                      <td style={{padding: '15px 20px', fontWeight: 'bold'}}>{p.title}</td>
                      <td style={{padding: '15px 20px', color: 'var(--color-peach-dark)', fontWeight: 'bold'}} dangerouslySetInnerHTML={{ __html: p.price }}></td>
                      <td style={{padding: '15px 20px'}}><span style={{background: '#eee', padding: '5px 10px', borderRadius: '12px', fontSize: '0.85rem'}}>{p.category}</span></td>
                      <td style={{padding: '15px 20px', textAlign: 'center'}}>
                        <button onClick={() => handleDelete(p.id)} style={{background: '#ffebee', color: '#d32f2f', border: 'none', padding: '8px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'}}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          <div style={{background: 'white', padding: '40px', borderRadius: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.03)'}}>
            <h2 style={{borderBottom: '2px solid var(--color-peach-light)', paddingBottom: '15px', marginBottom: '25px', color: 'var(--color-text-main)'}}>Customer Orders</h2>
            
            {orders.length === 0 ? (
              <p style={{textAlign: 'center', color: '#888', padding: '50px 0'}}>No orders received yet.</p>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                {orders.map(order => (
                  <div key={order._id} style={{border: '1px solid #eee', borderRadius: '12px', padding: '20px'}}>
                    <div style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px'}}>
                      <div>
                        <h3 style={{margin: '0 0 5px 0'}}>{order.customerName}</h3>
                        <p style={{margin: '0', fontSize: '0.9rem', color: '#666'}}>{order.email} | {order.phone}</p>
                      </div>
                      <div style={{textAlign: 'right'}}>
                        <span style={{background: '#e8f5e9', color: '#2e7d32', padding: '5px 10px', borderRadius: '20px', fontWeight: 'bold', fontSize: '0.85rem'}}>
                          {order.paymentMethod} - {order.status}
                        </span>
                        <p style={{margin: '5px 0 0 0', fontSize: '0.85rem', color: '#999'}}>{new Date(order.orderDate).toLocaleString()}</p>
                      </div>
                    </div>
                    
                    <p style={{fontSize: '0.95rem', marginBottom: '15px'}}><strong>Address:</strong> {order.address}</p>
                    
                    <div style={{background: '#fafafa', padding: '15px', borderRadius: '8px'}}>
                      <h4 style={{margin: '0 0 10px 0', fontSize: '1rem'}}>Order Items:</h4>
                      <ul style={{margin: 0, paddingLeft: '20px', color: '#555'}}>
                        {order.items.map((item, idx) => (
                          <li key={idx} style={{marginBottom: '5px'}}>{item.qty}x {item.title} (₹{item.price * item.qty})</li>
                        ))}
                      </ul>
                      <div style={{marginTop: '15px', fontWeight: 'bold', fontSize: '1.2rem', textAlign: 'right', color: 'var(--color-peach-dark)'}}>
                        Total: ₹{order.totalAmount}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </main>
  );
}

const inputStyle = {
  width: '100%', padding: '12px 15px', borderRadius: '10px', border: '1px solid #ddd', background: 'white'
};

const tabStyle = {
  border: 'none', padding: '10px 20px', borderRadius: '20px', fontWeight: 'bold', cursor: 'pointer', transition: '0.3s'
};
