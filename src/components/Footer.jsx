import React from 'react'

export const Footer = () => {
    return (
        <footer class="bg-gray-800 text-white py-6">
            <div class="container mx-auto flex flex-col items-center md:flex-row justify-between">
                <div class="text-center md:text-left mb-4 md:mb-0">
                    <p>&copy; 2025 Kahlil Núñez Bayuk. Todos los derechos reservados.</p>
                </div>
                <div class="flex justify-center space-x-6">
                    <a href="https://github.com/knb-js" target="_blank" class="text-gray-400 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://linkedin.com/in/tu-perfil" target="_blank" class="text-gray-400 hover:text-white">
                        LinkedIn
                    </a>
                    <a href="mailto:tuemail@example.com" class="text-gray-400 hover:text-white">
                        Email
                    </a>
                </div>
            </div>
        </footer>
    )
}
