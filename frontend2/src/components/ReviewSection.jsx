import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ReviewSection() {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');
  const [editingId, setEditingId] = useState(null);

  const userStr = localStorage.getItem('user');
  const user = userStr ? JSON.parse(userStr) : null;

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios.get('https://grateful-abundance-production-89ff.up.railway.app/api/reviews')
      .then(res => setReviews(res.data))
      .catch(err => console.error(err));
  };

  const submitReview = (e) => {
    e.preventDefault();
    if(!reviewText.trim()) return;

    if (!user) {
      alert("Please login first to post a review!");
      return;
    }

    if (editingId) {
      // Edit mode
      axios.put(`https://grateful-abundance-production-89ff.up.railway.app/api/reviews/${editingId}`, {
        rating, text: reviewText
      })
      .then(() => {
        setEditingId(null);
        setReviewText('');
        setRating(5);
        fetchReviews();
      })
      .catch(err => console.error(err));
    } else {
      // Create new review
      axios.post('https://grateful-abundance-production-89ff.up.railway.app/api/reviews', {
        name: user.name,
        email: user.email,
        picture: user.picture,
        rating,
        text: reviewText
      })
      .then(() => {
        setReviewText('');
        setRating(5);
        fetchReviews();
      })
      .catch(err => console.error(err));
    }
  };

  const handleEdit = (rev) => {
    setEditingId(rev._id);
    setReviewText(rev.text);
    setRating(rev.rating);
  };

  return (
    <section style={{padding: '80px 40px', maxWidth: '1200px', margin: '0 auto', background: '#fff'}}>
      <h2 style={{fontFamily: 'var(--font-heading)', fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', color: 'var(--color-peach-dark)'}}>
        What Our Customers Say
      </h2>

      <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center'}}>
        {/* Write/Edit a Review Form */}
        {user && (
          <div style={{flex: '1', minWidth: '300px', maxWidth: '400px', background: '#fafafa', padding: '30px', borderRadius: '15px', height: 'fit-content'}}>
            <h3 style={{fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '20px'}}>
              {editingId ? 'Edit Your Review' : 'Write a Review'}
            </h3>
            <form onSubmit={submitReview}>
              <div style={{marginBottom: '15px'}}>
                <label style={{display: 'block', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px'}}>Rating</label>
                <div style={{display: 'flex', gap: '5px', fontSize: '1.5rem', cursor: 'pointer'}}>
                  {[1,2,3,4,5].map(star => (
                    <span key={star} onClick={() => setRating(star)} style={{color: star <= rating ? '#FFD700' : '#ddd'}}>★</span>
                  ))}
                </div>
              </div>
              <div style={{marginBottom: '20px'}}>
                <label style={{display: 'block', fontSize: '0.9rem', fontWeight: 'bold', marginBottom: '8px'}}>Your Review</label>
                <textarea 
                  rows="4" 
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  required
                  style={{
                    width: '100%', padding: '12px', borderRadius: '8px',
                    border: '1px solid #ddd', outline: 'none', resize: 'vertical',
                    fontFamily: 'inherit', boxSizing: 'border-box'
                  }}
                />
              </div>
              <button type="submit" style={{
                background: 'var(--color-peach-dark)', color: 'white', border: 'none',
                padding: '12px 20px', borderRadius: '30px', fontWeight: 'bold',
                cursor: 'pointer', width: '100%'
              }}>
                {editingId ? 'Update Review' : 'Submit Review'}
              </button>
              {editingId && (
                <button type="button" onClick={() => {setEditingId(null); setReviewText(''); setRating(5);}} style={{
                  background: '#ccc', color: '#333', border: 'none', marginTop: '10px',
                  padding: '12px 20px', borderRadius: '30px', fontWeight: 'bold', cursor: 'pointer', width: '100%'
                }}>Cancel</button>
              )}
            </form>
          </div>
        )}

        {/* Reviews List */}
        <div style={{flex: '2', minWidth: '350px'}}>
          {reviews.length === 0 ? (
            <p style={{textAlign: 'center', color: '#888', marginTop: '50px'}}>No reviews yet. Be the first to share your thoughts!</p>
          ) : (
            reviews.map(rev => {
              const isOwner = user && user.email === rev.email;
              return (
                <div key={rev._id} style={{
                  marginBottom: '25px', padding: '25px', borderRadius: '15px', 
                  border: '1px solid #eee', background: 'white', position: 'relative'
                }}>
                  <div style={{display: 'flex', gap: '15px', alignItems: 'center', marginBottom: '15px'}}>
                    <img src={rev.picture || 'https://ui-avatars.com/api/?name=User'} alt="Avatar" style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
                    <div>
                      <div style={{fontWeight: 'bold', color: 'var(--color-text-main)', fontSize: '1.1rem'}}>{rev.name}</div>
                      <div style={{color: '#999', fontSize: '0.85rem'}}>{new Date(rev.date).toLocaleDateString()}</div>
                    </div>
                  </div>
                  <div style={{color: '#FFD700', fontSize: '1.2rem', marginBottom: '10px'}}>
                    {'★'.repeat(rev.rating)}{'☆'.repeat(5 - rev.rating)}
                  </div>
                  <p style={{color: 'var(--color-text-light)', lineHeight: '1.6'}}>{rev.text}</p>
                  
                  {isOwner && (
                    <button 
                      onClick={() => handleEdit(rev)}
                      style={{
                        position: 'absolute', top: '25px', right: '25px',
                        background: 'transparent', border: 'none', color: '#1a73e8',
                        cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem'
                      }}
                    >
                      Edit
                    </button>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
