import React, { useEffect, useState } from "react";
import { IoLogoJavascript } from "react-icons/io";
import { FaPython, FaJava, FaNodeJs, FaReact, FaDocker, FaAws, FaHtml5, FaCss3Alt, FaCode } from "react-icons/fa";
import { SiSpring, SiDjango, SiNestjs, SiTypescript, SiRuby, SiGo } from "react-icons/si";

// Mapeo de lenguajes con sus iconos
const languageIcons = {
    JavaScript: <IoLogoJavascript className="text-yellow-500 text-3xl" />,
    Python: <FaPython className="text-blue-500 text-3xl" />,
    Java: <FaJava className="text-orange-500 text-3xl" />,
    NodeJS: <FaNodeJs className="text-green-500 text-3xl" />,
    React: <FaReact className="text-cyan-500 text-3xl" />,
    Spring: <SiSpring className="text-green-500 text-3xl" />,
    Django: <SiDjango className="text-green-700 text-3xl" />,
    NestJS: <SiNestjs className="text-red-500 text-3xl" />,
    Docker: <FaDocker className="text-blue-500 text-3xl" />,
    AWS: <FaAws className="text-orange-500 text-3xl" />,
    TypeScript: <SiTypescript className="text-blue-500 text-3xl" />,
    Ruby: <SiRuby className="text-red-500 text-3xl" />,
    Go: <SiGo className="text-blue-500 text-3xl" />,
    HTML: <FaHtml5 className="text-orange-500 text-3xl" />,
    CSS: <FaCss3Alt className="text-blue-500 text-3xl" />
};

export const Projects = () => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch("https://api.github.com/users/knb-js/repos");
                const data = await response.json();
                const filteredRepos = data.filter((repo) => !repo.fork);

                // Obtener lenguajes para cada repositorio
                const reposWithLanguages = await Promise.all(
                    filteredRepos.map(async (repo) => {
                        try {
                            const languagesResponse = await fetch(repo.languages_url);
                            const languages = await languagesResponse.json();
                            return { ...repo, languages: Object.keys(languages) };
                        } catch (error) {
                            console.error(`Error fetching languages for ${repo.name}:`, error);
                            return { ...repo, languages: [] };
                        }
                    })
                );

                setRepos(reposWithLanguages);
            } catch (error) {
                console.error("Error fetching repos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <section
                id="projects"
                className="min-h-screen flex items-center justify-center text-white p-6"
            >
                <p className="text-xl font-semibold">Loading projects...</p>
            </section>
        );
    }

    return (
        <section
            id="projects"
            className="min-h-screen flex flex-col items-center justify-center text-white p-6"
        >
            <h2 className="text-3xl font-bold mb-6">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {repos.slice(0, 10).map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                        <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                            <strong>Languages:</strong>
                            {repo.languages.length > 0
                                ? repo.languages.map((language, index) => {
                                      // Verificar si existe un ícono para el lenguaje
                                      if (languageIcons[language]) {
                                          return (
                                              <div key={language} className="flex items-center gap-2 mb-2">
                                                  {languageIcons[language]}
                                              </div>
                                          );
                                      }
                                      // Si no hay ícono para el lenguaje, mostrar un ícono por defecto
                                      if (index === 0) {
                                          return (
                                              <div key={language} className="flex items-center gap-2 mb-2">
                                                  <FaCode className="text-gray-500 text-3xl" />
                                              </div>
                                          );
                                      }
                                      return null;
                                  })
                                : "No languages available"}
                        </div>
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-green-400 hover:underline"
                        >
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};
