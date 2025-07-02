"use client";
import { useState } from "react";

export default function Careers() {
    const [formData, setFormData] = useState({
        job: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        gender: "",
        qualification: "",
        cv: null,
    });

    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        const formPayload = new FormData();
        for (const key in formData) {
            formPayload.append(key, formData[key]);
        }

        const res = await fetch("/api/careers", {
            method: "POST",
            body: formPayload,
        });

        setSubmitting(false);
        if (res.ok) {
            setFormData({
                job: "",
                name: "",
                phone: "",
                email: "",
                address: "",
                gender: "",
                qualification: "",
                cv: null,
            });
            setSuccess(true);
        } else {
            alert("Submission failed. Please try again.");
        }
    };

    return (
        <section className="py-16 px-6 bg-[#dedede] text-blue-900 flex justify-center">
            <div className="max-w-[78rem] w-full bg-white p-8 md:p-12 rounded-xl shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-blue-900 to-blue-600 text-transparent bg-clip-text mb-8">
                    Careers at HRP Management
                </h1>

                <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                    If you want to experience a team that is driven by discipline, professionalism, and growth, we are the one for you! At HRP Management, we believe essential opportunities in different industries are the only way to grow your career. Hence, we try our very best to offer roles that match your skills and interests. It does not matter if you are just starting your career or have had previous experiences, depend on us to add to your professional progression.
                    Starting from security services, facility management, and logistics to administration and technical fields, we have roles for every professional area. Additionally, we also train our employees thoroughly before deploying them to ensure their efficiency and ability to handle any challenges confidently. We also believe in fair compensation and a supportive work culture, so rest assured that you will be able to thrive with us.
                    Whether you are just starting your career or have years of experience, we welcome dedicated individuals who are passionate about delivering quality service. Our diverse team works together to create a safe, well-managed environment for our clients.
                    <br />
                    <strong>Fill in the form below and submit your application to join our team today!</strong>
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="job"
                        placeholder="Job Applied For"
                        value={formData.job}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                    />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                        />
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                        />
                    </div>
                    <input
                        type="text"
                        name="address"
                        placeholder="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                    />
                    <div className="grid md:grid-cols-2 gap-4">
                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded text-gray-500"
                        >
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                        <input
                            type="text"
                            name="qualification"
                            placeholder="Qualification"
                            value={formData.qualification}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded placeholder-gray-500"
                        />
                    </div>
                    <div className="w-full">
                        <label className="block text-gray-700 mb-1">Choose File:</label>
                        <div className="relative">
                            <input
                                type="file"
                                name="cv"
                                id="cv"
                                accept=".pdf,.doc,.docx"
                                required
                                onChange={handleChange}
                                className="absolute opacity-0 w-full h-full z-10 cursor-pointer"
                            />
                            <div className="p-3 border border-gray-300 rounded bg-white text-gray-800 pointer-events-none">
                                {formData.cv ? formData.cv.name : "No file chosen"}
                            </div>
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={submitting}
                        className="block w-full md:w-auto mx-auto bg-blue-900 text-white px-6 py-3 rounded hover:bg-blue-800 transition"
                    >
                        {submitting ? "Submitting..." : "Submit Application"}
                    </button>

                    {success && (
                        <p className="text-green-600 text-center mt-4">Application submitted successfully!</p>
                    )}
                </form>
            </div>
        </section>
    );
}
