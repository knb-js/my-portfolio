import React, { useState } from "react";

export const Contact = () => {
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });

    const toggleFormVisibility = () => {
        setIsFormVisible(!isFormVisible);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const validateForm = () => {
        let errors = {};
        if (!formData.name) errors.name = "Name is required";
        if (!formData.email) errors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Email is invalid";
        if (!formData.message) errors.message = "Message is required";
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            // Submit form logic
            console.log("Form submitted:", formData);
        }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-800 to-gray-900 p-6"
        >
            <button
                onClick={toggleFormVisibility}
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-green-600 transition duration-300"
            >
                {isFormVisible ? "Hide Contact Form" : "Show Contact Form"}
            </button>

            <div
                className={`mt-6 bg-white rounded-lg shadow-lg p-8 max-w-lg w-full overflow-hidden transition-all duration-500 ease-in-out ${
                    isFormVisible
                        ? "opacity-100 max-h-[1000px] pointer-events-auto"
                        : "opacity-0 max-h-0 pointer-events-none"
                }`}
                style={{ transitionProperty: "max-height, opacity" }}
            >
                <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">Contact Me</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium" htmlFor="name">
                            Name
                        </label>
                        <input
                            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${formErrors.name ? "border-red-500" : ""}`}
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                        />
                        {formErrors.name && <p className="text-red-500 text-sm">{formErrors.name}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium" htmlFor="email">
                            Email
                        </label>
                        <input
                            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${formErrors.email ? "border-red-500" : ""}`}
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                        />
                        {formErrors.email && <p className="text-red-500 text-sm">{formErrors.email}</p>}
                    </div>
                    <div>
                        <label className="block mb-2 text-gray-700 font-medium" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className={`w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 ${formErrors.message ? "border-red-500" : ""}`}
                            id="message"
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleInputChange}
                        ></textarea>
                        {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                    </div>
                    <button
                        className="w-full bg-green-500 text-white font-bold py-3 rounded-lg hover:bg-green-600 transition duration-300"
                        type="submit"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
