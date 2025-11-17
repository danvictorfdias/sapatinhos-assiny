/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        'rosa-primary': '#E91E8C',
        'rosa-gradient-start': '#E91E8C',
        'rosa-gradient-end': '#D81B7E',
        'bege-light': '#FAF7F4',
        'verde-cta': '#4CAF50',
        'verde-hover': '#45a049',
        'cinza-dark': '#333333',
        'cinza-medium': '#666666',
        'cinza-light': '#F5F5F5',
        'vermelho-urgencia': '#E74C3C',
        'amarelo-destaque': '#FFD700',
      },
    },
  },
  plugins: [],
};
