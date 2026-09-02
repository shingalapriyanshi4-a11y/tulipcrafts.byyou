import { useState } from 'react';

export default function CustomOrder() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    occasion: '',
    details: '',
    budget: '₹1,000 - ₹2,500'
  });

  const handleChange = (event) => {
    setForm((current) => ({
      ...current,
      [event.target.name]: event.target.value
    }));
  };

  const submitCustomOrder = (event) => {
    event.preventDefault();

    const message = `Hello Tulipcrafts! 🌷\nI would like to place a custom order.\n\nName: ${form.name}\nEmail: ${form.email}\nOccasion: ${form.occasion}\nBudget: ${form.budget}\nDetails: ${form.details}\n\nPlease let me know the next steps and delivery timeline.`;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(message);
    }

    window.open('https://ig.me/m/tulipcrafts.byyou', '_blank', 'noopener,noreferrer');
    alert('Your request is ready to send on Instagram. Please paste it in the chat and send it to us.');
  };

  return (
    <main className="custom-order-page">
      <div className="container custom-order-shell">
        <div className="custom-order-copy">
          <p className="eyebrow">Bespoke floral design</p>
          <h1>Design something truly personal.</h1>
          <p>
            Tell us the occasion, colours, and styling you love. We’ll shape a handcrafted piece that feels distinctly yours.
          </p>

          <div className="custom-highlights">
            <div>
              <strong>48h</strong>
              <span>initial response</span>
            </div>
            <div>
              <strong>100%</strong>
              <span>customized</span>
            </div>
            <div>
              <strong>Tailored</strong>
              <span>coordinated gifting</span>
            </div>
          </div>
        </div>

        <form className="custom-order-form" onSubmit={submitCustomOrder}>
          <div className="field-row">
            <label>
              Full name
              <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="you@example.com" required />
            </label>
          </div>

          <label>
            Occasion
            <input type="text" name="occasion" value={form.occasion} onChange={handleChange} placeholder="Birthday, anniversary, gifting, décor..." required />
          </label>

          <label>
            Budget range
            <select name="budget" value={form.budget} onChange={handleChange}>
              <option>₹1,000 - ₹2,500</option>
              <option>₹2,500 - ₹4,500</option>
              <option>₹4,500 - ₹7,000</option>
              <option>₹7,000+</option>
            </select>
          </label>

          <label>
            Tell us more about your idea
            <textarea name="details" rows="5" value={form.details} onChange={handleChange} placeholder="Colour palette, style direction, reference images, occasion details..." required />
          </label>

          <button type="submit" className="btn btn-primary full-width">Send inquiry on Instagram</button>
        </form>
      </div>
    </main>
  );
}
