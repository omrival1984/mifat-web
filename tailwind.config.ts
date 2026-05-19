import type { Config } from 'tailwindcss';
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './data/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7faf8', 'surface-container': '#ebefed', 'surface-high': '#e0e3e1',
        forest: '#004234', 'forest-2': '#1f5a4a', fresh: '#266d00', mint: '#98d2be', gold: '#694c00', ink: '#181c1b', muted: '#404945', line: '#bfc9c3'
      },
      boxShadow: { soft: '0 4px 18px rgba(31, 90, 74, 0.08)' },
      borderRadius: { xl2: '1.5rem' }
    }
  },
  plugins: []
};
export default config;
