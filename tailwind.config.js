/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'graphik': ['Graphik LC Web', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      colors: {
        // Thesis (PandaDoc design system): primary.main, tertiary.light page canvas, secondary text
        'brand-primary': '#248567',
        'brand-secondary': '#6453CF',
        'catchy-fire': '#FDDCBD',
        'secondary-light': '#767676',
        'secondary-dark': '#2f2f2f',
        'surface-primary': '#F4F0ED',
        /** Info / “NEW” pill (documents-next MCP) */
        'thesis-info-bg': '#EDF3FB',
        'thesis-info-text': '#1A529E',
        'thesis-canvas': '#f4f4f4',
        /** MCP / documents-next measured + Thesis alignment */
        thesis: {
          /** documents-next / Thesis: warm rail (oklch ~0.957 → #F9F7F4) */
          sidebar: '#F9F7F4',
          /** Page title h2 */
          title: '#181818',
          /** Search field fill (oklch ~0.967) */
          search: '#f7f7f7',
          ink: '#474747',
          border: '#e5e5e5',
          /** Filter chips (lighter than Filters control) */
          chip: 'rgba(118, 118, 118, 0.08)',
          'chip-hover': 'rgba(118, 118, 118, 0.12)',
          /** Main “Filters” toolbar control */
          filter: 'rgba(118, 118, 118, 0.16)',
          'filter-hover': 'rgba(118, 118, 118, 0.2)',
          /** Ask AI pill */
          'ai-tint': 'rgba(100, 83, 207, 0.1)',
          'ai-tint-hover': 'rgba(100, 83, 207, 0.14)',
        },
      },
      fontSize: {
        '9': ['9px', { lineHeight: 'normal' }],
        '13': ['13px', '16px'],
        '14': ['14px', '17px'],
        '24': ['24px', '29px'],
      },
      fontWeight: {
        'regular': 400,
        'semibold': 600,
        'bold': 700,
      },
      boxShadow: {
        'subtle': '0px 0px 1px 0px rgba(47,47,47,0.04), 0px 1px 4px 0px rgba(47,47,47,0.12)',
      }
    },
  },
  plugins: [],
}

