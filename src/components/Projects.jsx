import React from 'react'

export const Projects = () => {
    return (
        <section id="projects" className="p-4">
            <h2 className="text-2xl font-bold mb-4 text-white">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="font-bold">Project 1</h3>
                    <p>Description of project 1.</p>
                </div>
                <div className="bg-white p-4 shadow rounded">
                    <h3 className="font-bold">Project 2</h3>
                    <p>Description of project 2.</p>
                </div>
            </div>
        </section>
    )
}
