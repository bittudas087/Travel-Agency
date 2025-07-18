import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function TourList() {
    const tours = [
        { name: "Paris, France", desc: "3 days, 2 nights. Experience the romance of the Eiffel Tower, world-class cuisine, and vibrant culture in the heart of France" },
        { name: "Bali, Indonesia", desc: "5 days, 4 nights. Relax on stunning beaches, explore lush jungles, and immerse yourself in Balinese traditions and hospitality" },
        { name: "New York, USA", desc: "2 days, 1 night. Discover the city that never sleeps, from iconic landmarks to world-famous shopping and entertainment." }
    ];
    return (
        <section id="tours">
            <h2>Our Popular Tours</h2>
            <div className="tour-list">
                {tours.map((tour, idx) => (
                    <div className="tour-card" key={idx}>
                        <h3>{tour.name}</h3>
                        <p>{tour.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

function About() {
    return (
        <section id="about" style={{ marginTop: "2rem" }}>
            <h2>About Us</h2>
            <p>
                Maa Tara Tour & Travel Agency is dedicated to providing the best travel experiences across India.
                With years of expertise, we ensure safe, comfortable, and memorable journeys for our clients.
            </p>
        </section>
    );
}

function Contact() {
    const [form, setForm] = React.useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = React.useState(false);

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <section id="contact" style={{ marginTop: "2rem" }}>
            <h2>Contact Us</h2>
            {submitted ? (
                <p>Thank you for contacting us! We'll get back to you soon.</p>
            ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" required value={form.name} onChange={handleChange} />
                    <label>Email:</label>
                    <input type="email" name="email" required value={form.email} onChange={handleChange} />
                    <label>Message:</label>
                    <textarea name="message" required rows="4" value={form.message} onChange={handleChange}></textarea>
                    <button type="submit">Send</button>
                </form>
            )}
        </section>
    );
}

function App() {
    return (
        <div className="container">
            <TourList />
            <About />
            <Contact />
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
