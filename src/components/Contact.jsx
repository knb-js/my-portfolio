import React from 'react'

export const Contact = () => {
    return (
        <section id="contact" className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
            <form className="space-y-4">
                <div>
                    <label className="block mb-1 text-white" htmlFor="name">Name</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="text" id="name" name="name" />
                </div>
                <div>
                    <label className="block mb-1 text-white" htmlFor="email">Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded" type="email" id="email" name="email" />
                </div>
                <div>
                    <label className="block mb-1 text-white" htmlFor="message">Message</label>
                    <textarea className="w-full p-2 border border-gray-300 rounded" id="message" name="message" rows="4"></textarea>
                </div>
                <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Send</button>
            </form>
        </section>
    )
}
