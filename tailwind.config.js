// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        neon: "0 0 15px rgba(0,255,255,0.6), 0 0 25px rgba(0,255,255,0.4)",
        pulse: "0 0 20px rgba(0,255,255,0.8)",
      },
    },
  },
  plugins: [],
};
