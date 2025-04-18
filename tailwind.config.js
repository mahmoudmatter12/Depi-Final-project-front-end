/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Base colors (match your layout)
          dark: {
            950: '#111827',
            900: '#1F2937',
            850: '#17263d'
          },
          light: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0'
          }
        },
        // Custom animations
        animation: {
          'pulse-slow': 'pulse-slow 8s ease-in-out infinite',
          'pulse-slow-reverse': 'pulse-slow-reverse 10s ease-in-out infinite',
          'float': 'float 6s ease-in-out infinite',
          'float-slow': 'float-slow 8s ease-in-out infinite'
        },
        keyframes: {
          'pulse-slow': {
            '0%, 100%': { opacity: '0.7' },
            '50%': { opacity: '0.9' }
          },
          'pulse-slow-reverse': {
            '0%, 100%': { opacity: '0.9' },
            '50%': { opacity: '0.7' }
          },
          'float': {
            '0%, 100%': { 
              transform: 'translateY(0) rotate(-12deg)' 
            },
            '50%': { 
              transform: 'translateY(-20px) rotate(-16deg)' 
            }
          },
          'float-slow': {
            '0%, 100%': { 
              transform: 'translateY(0) rotate(12deg)' 
            },
            '50%': { 
              transform: 'translateY(-30px) rotate(16deg)' 
            }
          }
        },
        // Custom blur values
        blur: {
          'xl': '20px',
          '2xl': '40px',
          '3xl': '64px',
          '4xl': '80px',
          '5xl': '100px'
        }
      }
    },
    plugins: [],
    darkMode: 'class' // For dark/light mode support
  }