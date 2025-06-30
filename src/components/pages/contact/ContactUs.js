'use client';
import { useState } from 'react';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (res.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    message: '',
                });
            } else {
                setStatus('Something went wrong. Please try again.');
            }
        } catch (err) {
            setStatus('Server error. Please try again later.');
        }
    };

    return (
        <section className="py-16 px-6 bg-[#dedede] text-center">
            <div className="max-w-7xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">Contact Us</h1>
                <p className="text-gray-700 mb-6 text-lg">
                    HRP Management is here to assist you in selecting the right services for your business or residence.
                    Starting from manpower support and security services to facility management expertise and logistics solutions, we do it all.
                    Our team is ready and prepared at all times to come to your rescue.
                    <br />
                    Send us an email at <a href="mailto:hrp@hrpmanagement.in" className="text-blue-700 font-semibold">hrp@hrpmanagement.in</a> or fill in the form below.
                </p>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 text-gray-900"
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 text-gray-900"
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 text-gray-900"
                    />
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 text-gray-900"
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows="6"
                        className="border border-gray-300 rounded-md px-4 py-2 placeholder-gray-500 text-gray-900 md:col-span-2"
                    />
                    <button
                        type="submit"
                        className="bg-blue-900 text-white font-semibold py-2 px-6 rounded hover:bg-blue-800 md:col-span-2 mx-auto"
                    >
                        Send Message
                    </button>
                </form>

                {status && <p className="text-sm text-gray-700 mt-4">{status}</p>}
            </div>
        </section>
    );
}
