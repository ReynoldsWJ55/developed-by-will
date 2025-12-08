/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Premium brand palette
        brand: {
          50: '#f0f9f9',
          100: '#d4eded',
          200: '#a8dbdb',
          300: '#6bc1c1',
          400: '#3da5a5',
          500: '#1e8a8a',
          600: '#176b6b', // Primary teal
          700: '#145555',
          800: '#114444',
          900: '#0e3838',
          950: '#082626',
        },
        gold: {
          50: '#fdf8f3',
          100: '#f9edd9',
          200: '#f2d7b2',
          300: '#e8bc82',
          400: '#d4a574', // Accent gold
          500: '#c48a4d',
          600: '#b27340',
          700: '#945937',
          800: '#784832',
          900: '#623c2b',
          950: '#351d14',
        },
        navy: {
          50: '#f4f6f9',
          100: '#e6eaf1',
          200: '#d3dae6',
          300: '#b4c1d4',
          400: '#8fa0bc',
          500: '#7385a6',
          600: '#616e94',
          700: '#535d7f',
          800: '#475069',
          900: '#3d4458',
          950: '#1a2f4d', // Deep navy accent
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        display: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
      },
      boxShadow: {
        'premium': '0 4px 6px -1px rgba(23, 107, 107, 0.1), 0 2px 4px -2px rgba(23, 107, 107, 0.1)',
        'premium-lg': '0 10px 15px -3px rgba(23, 107, 107, 0.1), 0 4px 6px -4px rgba(23, 107, 107, 0.1)',
        'premium-xl': '0 20px 25px -5px rgba(23, 107, 107, 0.1), 0 8px 10px -6px rgba(23, 107, 107, 0.1)',
        'gold': '0 4px 14px -3px rgba(212, 165, 116, 0.25)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, #176b6b 0%, #1a2f4d 100%)',
        'gradient-gold': 'linear-gradient(135deg, #d4a574 0%, #c48a4d 100%)',
      },
    },
  },
  plugins: [],
};
