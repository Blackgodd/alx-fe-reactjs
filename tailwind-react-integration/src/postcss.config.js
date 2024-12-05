module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
      purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
      darkMode: false,
      theme: { extend: {} },
      variants: { extend: {} },
      plugins: [],
  },
};