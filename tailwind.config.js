/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                tecblue: {
                    50: '#eef2f6',
                    100: '#e0eaf5',
                    200: '#c2d6ec',
                    500: '#005DAA', /* Azul TEC principal */
                    700: '#004070',
                    800: '#002D56', /* Azul TEC oscuro */
                    900: '#00182c',
                },
                accent: {
                    400: '#4db8ff',
                    500: '#0085CA', /* Azul claro / acento */
                    600: '#006ba6',
                }
            }
        }
    },
    plugins: [],
}
