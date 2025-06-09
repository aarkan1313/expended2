/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",                     // For classes in your main HTML file
    "./src/**/*.{js,ts,jsx,tsx,html}",  // For classes in all .js, .ts, .jsx, .tsx, and .html files
                                        // within the 'src' folder and its subdirectories
                                        // (e.g., components, pages, App.jsx, etc.)
  ],
  theme: {
    extend: {
      // You can add your custom theme extensions here
      // For example:
      // colors: {
      //   'brand-blue': '#1992d4',
      // },
    },
  },
  plugins: [
    // You can add any Tailwind plugins here
  ],
}